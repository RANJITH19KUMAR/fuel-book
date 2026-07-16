import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '/src/Components/HomePage/Footer/Footer.css'

// Import images properly
import visa from "../../../assets/visa.png";
import mastercard from "../../../assets/mastercard.png";
import upi from "../../../assets/UPI.png";
import gpay from "../../../assets/gpay.png";
import paytm from "../../../assets/paytm.png";
import phonepe from "../../../assets/phonepe.png";


import google from "../../../assets/logo/google.webp";
import x from "../../../assets/logo/X.webp";
import fb from "../../../assets/logo/fb.webp";
import insta from "../../../assets/logo/insta.webp";
import linkedin from "../../../assets/logo/linkedin.webp";

function Footer() {
  return (
    <footer className="footer  mt-auto">
      <Container fluid='lg' className=' py-4'>

        {/* TOP SECTION */}
        <Row className="py-3">

          {/* BRAND */}
          <Col  md={3} className="mb-3">
            <h3 className="fast-fuel  fw-bold text-start">
              <i className="bi bi-fuel-pump me-2"></i>Fast Fuel
            </h3>
            <p className="text-white small mt-3 text-start">
              Fuel delivery, just a tap away. We deliver fuel to your location quickly and safely.
            </p>

            <div className=" icons d-flex gap-3 mt-3 text-white fs-5">
            <img src={google} width={20} height={20} />
<img src={x} width={20} height={20} />
<img src={fb} width={20} height={20} />
<img src={insta} width={20} height={20} />
<img src={linkedin} width={20} height={20} />
            </div>
          </Col>

        
          <Col md={3} className="mb-4 text-white text-start">
            <h5 className="text-white fw-semibold mb-3">Company</h5>
            <p className="footer-link">About Us</p>
            <p className="footer-link">How it Works</p>
            <p className="footer-link">Our Services</p>
            <p className="footer-link">Blog</p>
          </Col>

          
          <Col md={3} className="mb-4 text-white text-start">
            <h5 className="text-white fw-semibold mb-3">Useful Links</h5>
            <p className="footer-link">FAQs</p>
            <p className="footer-link">Terms & Conditions</p>
            <p className="footer-link">Privacy Policy</p>
            <p className="footer-link">Refund Policy</p>
          </Col>

          
          <Col md={3} className="mb-4 text-white text-start fs-6">
            <h5 className="text-white fw-semibold mb-3">Support</h5>
            <p><i className=" icon bi bi-telephone me-2"></i>+91 9788521639</p>
            <p><i className=" icon bi bi-envelope me-2"></i>support@fastfuel.com</p>
            <p><i className="icon bi bi-headset  me-1"></i>24/7 Customer Support</p>
          </Col>

        </Row>

       
        <Row className="border-top pt-3 align-items-center text-center text-md-start">

          <Col md={4} className="mb-2">
            <p className="small text-light mb-0">
              © 2025 Fast Fuel. All rights reserved.
            </p>
          </Col>

          <Col md={4} className="d-flex justify-content-center rounded-pill gap-2 mb-2">
            <img src={visa} width={40} alt="visa" />
            <img src={mastercard} width={40} alt="mc" />
            <img src={upi} width={40} alt="upi" />
            <img src={gpay} width={40} alt="gpay" />
            <img src={paytm} width={40} alt="paytm" />
            <img src={phonepe} width={40} alt="phonepe" />
          </Col>

          <Col md={4} className="text-md-end mb-2">
            <p className="final small  mb-0">
              <i className="bi bi-geo-alt me-1"></i>Delivering Across Chennai
            </p>
          </Col>

        </Row>

      </Container>
    </footer>
  )
}

export default Footer