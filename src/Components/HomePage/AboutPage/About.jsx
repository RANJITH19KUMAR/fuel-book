import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Counter from "./Counter"; 
import Navbars from "../Navbar/Navbars";
import Footer  from "../Footer/Footer";

const About = () => {
  return (
    
    <div className="about-page">
<Navbars/>
      {/* HERO SECTION */}
      <Container className="py-5">
        <Row className="align-items-center">
          
          <Col md={6}>
            <h2 className="fw-bold mb-3">About Fast Fuel</h2>
            <p className="text-muted">
              Fast Fuel is India's most trusted on-demand fuel delivery service.
              We deliver fuel at your doorstep quickly, safely and at the best prices.
            </p>
          </Col>

          <Col md={6} className="text-center">
            <img
              src="/src/assets/bike_img.png"
              alt="fuel truck"
              className="img-fluid hero-img"
            />
          </Col>

        </Row>
      </Container>

      {/* MISSION & VISION */}
      <Container className="pb-4">
        <Row>
          <Col md={6}>
            <Card className="info-card shadow-sm">
              <Card.Body>
                <h6 className="fw-bold">Our Mission</h6>
                <p className="text-muted">
                  To make fuel delivery simple, fast and reliable for every customer.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="info-card shadow-sm">
              <Card.Body>
                <h6 className="fw-bold">Our Vision</h6>
                <p className="text-muted">
                  To become the most trusted fuel delivery brand across India.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* WHY CHOOSE US */}
      <Container className="py-4 text-center">
        <h4 className="fw-bold mb-4">Why Choose Us</h4>

        <Row>
          <Col md={3}>
            <div className="feature-box">
              <i className="bi bi-lightning-charge"></i>
              <h6>Fast Delivery</h6>
              <p>Get fuel in 20-30 minutes</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="feature-box">
              <i className="bi bi-cash-stack"></i>
              <h6>Best Prices</h6>
              <p>Competitive pricing everyday</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="feature-box">
              <i className="bi bi-shield-check"></i>
              <h6>Trusted Partners</h6>
              <p>Verified delivery partners</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="feature-box">
              <i className="bi bi-headset"></i>
              <h6>24/7 Support</h6>
              <p>We are always here to help</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* STATS */}
      

<Container className="stats-box text-center py-4 mb-5">
  <Row>
    <Col md={3}>
      <Counter target={5000} />
      <p>Orders Delivered</p>
    </Col>

    <Col md={3}>
      <Counter target={350} />
      <p>Delivery Partners</p>
    </Col>

    <Col md={3}>
      <Counter target={15} />
      <p>Cities Covered</p>
    </Col>

    <Col md={3}>
      <h3>24/7</h3>
      <p>Customer Support</p>
    </Col>
  </Row>
</Container>
<Footer/>

      {/* CSS */}
      <style>{`
        .about-page {
          background: #f9fafb;
        }

        .hero-img {
          max-height: 220px;
          transition: transform 0.4s ease;
        }

        .hero-img:hover {
          transform: scale(1.05);
        }

        .info-card {
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
        }

        .feature-box {
          padding: 20px;
          border-radius: 12px;
          transition: all 0.3s ease;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .feature-box i {
          font-size: 28px;
          color: #ff6a00;
          margin-bottom: 10px;
        }

        .feature-box:hover {
          transform: translateY(-5px);
          background: #fff3e6;
        }

        .stats-box {
          background: #fff3e6;
          border-radius: 12px;
        }

        .stats-box h3 {
          font-weight: bold;
        }

        .stats-box p {
          color: gray;
        }
      `}</style>

    </div>
  );
};

export default About;