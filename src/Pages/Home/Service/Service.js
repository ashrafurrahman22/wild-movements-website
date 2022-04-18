import React from 'react';
import './Service.css';
import {Link} from 'react-router-dom';

const Service = ({service}) => {
    const {name, img, price, description}= service;
    return (
        <div id='service'>
            <img src={img} alt="" />
           <div className='text-start ms-4 ps-2'>
           <h5 className='mt-2'>{name}</h5>
            <h4>Service Fee : ${price}</h4>
            <p><small>{description}</small></p>
            <button className='btn mx-auto w-100'>
                <Link className='btn btn-primary' to='/procedeCheckout'>Procede CheckOut</Link>
            </button>
           </div>
        </div>
    );
};

export default Service;