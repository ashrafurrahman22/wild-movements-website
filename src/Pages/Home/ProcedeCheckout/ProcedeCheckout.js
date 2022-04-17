import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ProcedeCheckout = () => {
    return (
        <div style={{height:'530px'}}>
            <div id='form-container' className='w-50 mx-auto mb-3'>
            <h3 className='text-center my-2'>Fill Up This Form</h3>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
        </div>
    );
};

export default ProcedeCheckout;