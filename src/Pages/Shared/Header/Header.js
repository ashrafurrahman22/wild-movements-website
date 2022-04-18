import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo1 from '../../../images/logo1.jpg'
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {signOut} from 'firebase/auth';



const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant='dark' sticky='top'>
  <Container>
  <Navbar.Brand as={Link} to="/">
      <img id='logo' src={logo1} alt="" />
      Wild Movements</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href="/home#service">Service</Nav.Link>
    <Nav.Link as={Link} to="/procedeCheckout">CheckOut</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link as={Link} to="/about">About</Nav.Link>
     {
       user ? <button onClick={handleSignOut} className='btn btn-primary'>Sign Out</button> :
       <Nav>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
      <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
       </Nav>
     }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;