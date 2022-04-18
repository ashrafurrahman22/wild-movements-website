import React from 'react';
import './Footer.css';
import logo1 from '../../../images/logo1.jpg';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div id='footer'>
            <div>
            <div className='mt-4'>
                <img id='footer-img' src={logo1} alt="" />
                <p><small>The Wild Movements</small></p>
            </div>
            </div>
            <div className='text-center mt-5'>
                <p><small>Copyright © {year} The Wild Movement. All rights reserved.</small></p>
            </div>
            <div className='mt-3'>
                <p><small>Privacy & Policy</small></p>
                <p><small>Agreements & Rules</small></p>
                <p><small>FAQs</small></p>
            </div>
        </div>
    );
};

export default Footer;