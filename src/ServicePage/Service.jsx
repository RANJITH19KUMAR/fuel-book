import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbars from "../Components/HomePage/Navbar/Navbars";
import Footer from '../Components/HomePage/Footer/Footer.jsx'
import { Navigate, useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
   
    <div className="service-page">
      <Navbars/>
      {/* HERO SECTION   */}
      <Container className="py-5">
        
        <Row className="align-items-center">

          <Col md={6}>
            <h2 className="fw-bold mb-3">Our Services</h2>
            <p className="text-muted">
              Fast Fuel provides reliable and on-demand fuel delivery services 
              for homes, businesses, and emergency needs with safety and speed.
            </p>
          </Col>

          <Col md={6} className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1995/1995520.png"
              alt="services"
              className="img-fluid hero-img"
            />
          </Col>

        </Row>
      </Container>

      {/* SERVICES CARDS */}
      <Container className="pb-4">
        <Row>

          <Col md={4}>
            <Card className="service-card shadow-sm">
              <Card.Body>
                <i className="bi bi-truck service-icon"></i>
                <h6 className="fw-bold mt-2">Doorstep Fuel Delivery</h6>
                <p className="text-muted">
                  Get fuel delivered directly to your home or vehicle anytime.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="service-card shadow-sm">
              <Card.Body>
                <i className="bi bi-building service-icon"></i>
                <h6 className="fw-bold mt-2">Business Supply</h6>
                <p className="text-muted">
                  Bulk fuel delivery solutions for industries and businesses.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="service-card shadow-sm">
              <Card.Body>
                <i className="bi bi-lightning-charge service-icon"></i>
                <h6 className="fw-bold mt-2">Emergency Fuel</h6>
                <p className="text-muted">
                  Quick response fuel delivery for urgent situations.
                </p>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

      {/* HOW IT WORKS */}
      <Container className="py-4 text-center">
        <h4 className="fw-bold mb-4">How It Works</h4>

        <Row>
          <Col md={3}>
            <div className="feature-box">
              <i className="bi bi-geo-alt"></i>
              <h6>Select Location</h6>
              <p>Enter your delivery location</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="feature-box">
              <i className="bi bi-droplet"></i>
              <h6>Choose Fuel</h6>
              <p>Select fuel type & quantity</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="feature-box">
              <i className="bi bi-credit-card"></i>
              <h6>Make Payment</h6>
              <p>Secure online payment</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="feature-box">
              <i className="bi bi-truck"></i>
              <h6>Fast Delivery</h6>
              <p>Fuel delivered to your place</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* STATS SECTION */}
      <Container className="stats-box text-center py-4 mb-5">
        <Row>
          <Col md={3}>
            <h3>5000+</h3>
            <p>Orders Completed</p>
          </Col>

          <Col md={3}>
            <h3>350+</h3>
            <p>Happy Clients</p>
          </Col>

          <Col md={3}>
            <h3>15+</h3>
            <p>Cities Served</p>
          </Col>

          <Col md={3}>
            <h3>24/7</h3>
            <p>Support Available</p>
          </Col>
        </Row>
      </Container>

      {/* CTA */}
      <Container className="text-center pb-5">
        <h4 className="fw-bold mb-3">Need Fuel Now?</h4>
        <Button className="cta-btn" onClick={() => navigate('/Booking')}>Book Fuel</Button>
      </Container>

      {/* CSS */}
      <style>{`
        .service-page {
          background: url('../../../assets/success/bookBg.png') ;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;

    animation: pageFade .8s ease;
        }

        .hero-img {
          max-height: 220px;
          transition: transform 0.4s ease;
        }

        .hero-img:hover {
          transform: scale(1.05);
        }

        .service-card {
          border-radius: 12px;
          padding: 10px;
          transition: all 0.3s ease;
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-8px);
        }

        .service-icon {
          font-size: 30px;
          color: #ff6a00;
        }

        .feature-box {
          padding: 20px;
          border-radius: 12px;
          background: white;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .feature-box i {
          font-size: 26px;
          color: #ff6a00;
          margin-bottom: 10px;
        }

        .feature-box:hover {
          background: #fff3e6;
          transform: translateY(-5px);
        }

        .stats-box {
          background: #fff3e6;
          border-radius: 12px;
        }

        .cta-btn {
          background: #ff6a00;
          border: none;
          padding: 10px 25px;
          border-radius: 8px;
          transition: 0.3s;
        }

        .cta-btn:hover {
          background: #e65c00;
          transform: scale(1.05);
        }
      `}</style>
      <Footer/>
    </div>
   
  );
};

export default Service;