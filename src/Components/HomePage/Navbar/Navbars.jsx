
// import React from 'react'
// import '/src/Components/Navbar/Navbars.css'
// import { Container,Nav,Navbar } from 'react-bootstrap'



// function Navbars () {
//   return (
//      <Navbar expand="lg" className="bg-white  w-100 shadow-sm py-1 justify-content-between align-items-center px-3">
//       <Container fluid='lg' className='' >
//         <Navbar.Brand href="#home" ><h1 className='t1 fw-semibold fs-2 '>
//           <i className=" bi bi-fuel-pump-diesel-fill me-2"></i>Fast Fuel  </h1></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
//           <Nav className='bar '>
//             <Nav.Link href="#home" className=' fw-semibold align-items-center '>Home</Nav.Link> 
//             <Nav.Link href="BookFuel.jsx" className='fw-semibold align-items-center'>Book Fuel</Nav.Link>  
//             <Nav.Link href='#about' className='  align-items-center '>Track Order</Nav.Link>
//             <Nav.Link href="#link" className='  align-items-center'>Services</Nav.Link>
//             <Nav.Link href="#services" className='  align-items-center'>About</Nav.Link>
//             <Nav.Link href="#contact" className='fs-6 align-items-center'>Support</Nav.Link>            
//           </Nav>
//           <i className="bi bi-person-circle fs-6 p-3 "></i>
//           <Nav.Link href='#login' ><button type='submit'className=' login-btn rounded px-3 fs-6 '>
//             Login</button></Nav.Link>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }

// export default Navbars;

import React from "react";
import "./Navbars.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-white w-100 shadow-sm py-1">
      <Container fluid="lg">
        <Navbar.Brand as={Link} to="/">
          <h1 className="t1 fw-semibold fs-2">
            <i className="bi bi-fuel-pump-diesel-fill me-2"></i>
            Fast Fuel
          </h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="bar">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/booking">
              Book Fuel
            </Nav.Link>

            <Nav.Link as={Link} to="/track">
              Track Order
            </Nav.Link>

            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>

            <Nav.Link as={Link} to="/support">
              Support
            </Nav.Link>

          </Nav>

          <i className="bi bi-person-circle fs-4 p-3"></i>

          <Link to="/login">
            <button className="login-btn rounded px-3 fs-6">
              Login
            </button>
          </Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;