import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navber.css"


import { HashLink } from 'react-router-hash-link';

const Navber = () => {
    return (
        <div>
        <div className='contact-Nav '>
        <Container>
              <div className="d-flex align-items-center  justify-content-between "> 
                <div className="text">
                    <p><i class="fas fa-envelope"></i> support@gmail.com <i class="fas fa-location-arrow"></i> Bangladesh</p>
         </div>
          <div className='icon'>   
          <i class="fab fa-facebook fab-icon "></i>
          <i class="fab fa-instagram  fab-icon "></i>
         <i class="fab fa-linkedin  fab-icon "></i>
           </div>
         </div></Container>
        </div>
        <Navbar className="nav-bg"   collapseOnSelect expand="lg" >
        <Container>
                <Navbar.Brand href="#home" className="logo-nav"> <span className="logo-text-1">Shifa </span> <span className='logo-text-2'>Medi</span> </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link  as={HashLink }  to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink }  to="/home#services" >Services</Nav.Link>
                    <Nav.Link   as={HashLink } to="/home#teams"   >Teams</Nav.Link>
                    {/* {users?.displayName ?
                        <Button  onClick={logOut} variant="danger">Logout</Button> : */}
                        <Nav.Link as={Link}  to="/login">Login</Nav.Link>
                    <Navbar.Text>
                        Signed in as: <a href="#login"> omar</a>
                    </Navbar.Text>
                
                  
                </Navbar.Collapse>
            </Container>
</Navbar>
    </div>
    );
};

export default Navber;