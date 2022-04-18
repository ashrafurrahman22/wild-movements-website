import React from 'react';
import mypic from '.././../images/opu.jpg'
import './About.css';

const About = () => {
    return (
        <div className='about-div vh-100'>
            <div className='w-50 mx-auto mt-4'>
            <img id='mypic' src={mypic} alt="" />
            <h3>Ashrafur Rahman</h3>
            <p>Junior Web Developer</p>
            </div>
            <div id='goal-div' className='mx-auto w-100 p-5'>
                <h1 className='text-center'>Goal</h1>
                <p>I'm Ashrafur. I'm a junior Web Developer. As a web developer my goal is to be the best web developer of Asia. I wanna work with google and other famous companies. I'm trying and working hard to achieve my goal. Inshallah i will success oneday.</p>
            </div>
        </div>
    );
};

export default About;