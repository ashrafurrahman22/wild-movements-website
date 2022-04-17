import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const navigate = useNavigate();
      let errorElement;
    
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirm  = event => {
        setConfirm(event.target.value)
    }

    if(user){
        navigate('/')
    }
    if(loading){
        return (<Loading></Loading>)
    }
    if(error){
        errorElement = <p>Error: {error.message}</p>
    }

    const handleSubmit = event =>{
        event.preventDefault();
        if(password === confirm){
            createUserWithEmailAndPassword(email, password)
        }
        else{
            alert("Error: password is not equal")
        }
    }

    return (
        <div id='form-container' className='w-50 mx-auto mb-3'>
        <h2 className='text-center'>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="formBasicName">
<Form.Label>Name</Form.Label>
<Form.Control type="text" placeholder="Enter Your Name"  required/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email"  required/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password"  required/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Confirm Password</Form.Label>
<Form.Control onBlur={handleConfirm} type="password" placeholder="Confirm Password"  required/>
</Form.Group>{errorElement}
<Button variant="primary" type="submit">
Sign Up
</Button>
</Form>
<div>
    <div className='mt-3'>
    <p className='d-inline'>Already have an Account?</p> <button className='btn btn-link text-decoration-none'>
        <Link className='text-decoration-none' to='/login'>Login</Link>
    </button>
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
    </div>
    );
};

export default SignUp;