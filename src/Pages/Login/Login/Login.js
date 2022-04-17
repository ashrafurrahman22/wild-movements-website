import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
      

    const handleEmailBlur  = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    if(user){
        navigate(from, { replace: true });
    }

    if(loading || sending){
        return (<Loading></Loading>)
    }
    if(error || error1){
        errorElement = error.message;
    }   

    const handleSubmitForm = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    const handleReset = async() => {
        if(email){
            
        await sendPasswordResetEmail(email);
        toast('Sending-Email')
        }
        else{
            toast('Please Enter Your Email')
        }
    }

    return (
        <div id='form-container' className='w-50 mx-auto my-3 mb-5'>
            <h2 className='text-center'>Login</h2>
            <Form onSubmit={handleSubmitForm}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email"  required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password"  required/>
  </Form.Group>
  <p className='text-center'>{errorElement}</p>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>

    <div>
        <div className='mt-3'>
        <p className='d-inline'>Don't have an Account?</p> <button className='btn btn-link text-decoration-none'>
            <Link className='text-decoration-none' to='/signup'>Sign Up</Link>
        </button>
        </div>
        <div>
        <p className='d-inline'>Forget Password?</p>
        <button onClick={handleReset} className='btn btn-link text-decoration-none'>Reset Password</button>
        </div>
    </div>

        <div>
            <div id='orDiv' className='my-2'>
            <div style={{height:'1px'}} className='bg-primary'></div>
            <div className='text-center'>or</div>
            <div style={{height:'1px'}} className='bg-primary'></div>
            
            </div>
        </div>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;