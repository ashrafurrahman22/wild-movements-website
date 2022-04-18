import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProcedeCheckout = () => {
  const navigate = useNavigate();

    const handleFormSubmit = event =>{
      event.preventDefault();
      toast('Thanks for your Booking')
    }

    return (
        <div style={{height:'530px'}}>
            <div id='form-container' className='w-50 mx-auto mb-3'>
            <h3 className='text-center my-2'>Fill Up This Form</h3>
            <Form onSubmit={handleFormSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Name" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Address" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter Your Email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contact</Form.Label>
    <Form.Control type="number" placeholder="Phone Number" required/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default ProcedeCheckout;