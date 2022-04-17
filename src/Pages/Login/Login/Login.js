import React from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    return (
        <div id='form-container' className='w-50 mx-auto'>
            <h2 className='text-center'>Login</h2>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  required/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
    <div>
        <div className='mt-3'>
        <p className='d-inline'>Don't have an Account?</p> <button className='btn btn-link text-decoration-none'>Sign Up</button>
        </div>
        <div>
        <p className='d-inline'>Forget Password?</p> <button className='btn btn-link text-decoration-none'>Reset Password</button>
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

export default Login;