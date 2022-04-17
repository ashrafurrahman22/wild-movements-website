import React from 'react';
import googleIcon from '../../../images/Social/google.png';
import facebookIcon from '../../../images/Social/facebook.png';
import githubIcon from '../../../images/Social/github.png';
import './Social.css'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    let errorElement;

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    const handleGithubSignIn = () => {
        signInWithGithub();
    }
    const handleFacebookSignIn = () => {
        signInWithFacebook();
    }

    if(user || user1 || user2){
        navigate('/')
    }
    if(loading || loading1 || loading2){
        return (<Loading></Loading>)
    }
    if(error || error1 || error2){
        errorElement = error?.message;
    }


    return (
        <div>
            <p className='text-center'>{errorElement}</p>
            <div className='d-flex justify-content-center my-2'>
                <button onClick={handleGoogleSignIn} className='btn btn-info me-2'>
                    <img src={googleIcon} alt=""  className='me-2'/>
                    Sign in with google</button>
                <button onClick={handleFacebookSignIn} className='btn btn-primary me-2'>
                    <img className='me-2' id='facebookIcon' src={facebookIcon} alt="" />
                    Sign in with Facebook</button>
                <button onClick={handleGithubSignIn} className='btn bg-info text-dark'>
                    <img src={githubIcon} className='me-1' alt="" />
                    Sign in with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;