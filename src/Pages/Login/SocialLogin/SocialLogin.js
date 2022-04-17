import React from 'react';
import googleIcon from '../../../images/Social/google.png';
import facebookIcon from '../../../images/Social/facebook.png';
import githubIcon from '../../../images/Social/github.png';
import './Social.css'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex justify-content-center my-2'>
                <button className='btn btn-info me-2'>
                    <img src={googleIcon} alt=""  className='me-2'/>
                    Sign in with google</button>
                <button className='btn btn-primary me-2'>
                    <img className='me-2' id='facebookIcon' src={facebookIcon} alt="" />
                    Sign in with Facebook</button>
                <button className='btn bg-info text-dark'>
                    <img src={githubIcon} className='me-1' alt="" />
                    Sign in with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;