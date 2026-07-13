import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Navbars from "../HomePage/Navbar/Navbars";
import Footer from "../HomePage/Footer/Footer";

const Support = () => {
    function click(){
         alert('Send Message Successful')
    }
   
  return (

    <div className="contact-page">
<Navbars/>
      {/* HERO */}
      <Container className="py-5 text-center">
        <h2 className="fw-bold">Contact Us</h2>
        <p className="text-muted">
          Have questions or need fuel urgently? We’re here to help!
        </p>
      </Container>

      {/* CONTACT SECTION */}
      <Container className="pb-5">
        <Row>

          {/* LEFT - FORM */}
          <Col md={6}>
            <Card className="contact-card shadow-sm">
              <Card.Body>
                <h5 className="fw-bold mb-3">Send Message</h5>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control placeholder="Your Name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Email Address" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control placeholder="Phone Number" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Your Message"
                    />
                  </Form.Group>

                  <Button className="submit-btn w-100 " onClick={() => Click()}>
                    Send Message
                  </Button>
                </Form>

              </Card.Body>
            </Card>
          </Col>

          {/* RIGHT - MAP */}
          <Col md={6}>
            <div className="map-box shadow-sm">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Chennai&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>

        </Row>
      </Container>

      {/* CONTACT INFO */}
      <Container className="pb-5">
        <Row className="text-center">

          <Col md={4}>
            <div className="info-box">
              <i className="bi bi-geo-alt"></i>
              <h6>Location</h6>
              <p>Ariyalur, India</p>
            </div>
          </Col>

          <Col md={4}>
            <div className="info-box">
              <i className="bi bi-telephone"></i>
              <h6>Phone</h6>
              <p>+91 98765 43210</p>
            </div>
          </Col>

          <Col md={4}>
            <div className="info-box">
              <i className="bi bi-envelope"></i>
              <h6>Email</h6>
              <p>support@fastfuel.com</p>
            </div>
          </Col>

        </Row>
      </Container>

      {/* CSS */}
      <style>{`
        .contact-page {
          background: #f9fafb;
        }

        .contact-card {
          border-radius: 12px;
          transition: 0.3s;
        }

        .contact-card:hover {
          transform: translateY(-5px);
        }

        .submit-btn {
          background: #ff6a00;
          border: none;
          padding: 10px;
          border-radius: 8px;
          transition: 0.3s;
        }

        .submit-btn:hover {
          background: #e65c00;
          transform: scale(1.02);
        }

        .map-box {
          height: 100%;
          min-height: 320px;
          border-radius: 12px;
          overflow: hidden;
          transition: 0.3s;
        }

        .map-box:hover {
          transform: scale(1.02);
        }

        .info-box {
          background: white;
          padding: 20px;
          border-radius: 12px;
          margin-top: 10px;
          transition: 0.3s;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .info-box i {
          font-size: 26px;
          color: #ff6a00;
          margin-bottom: 10px;
        }

        .info-box:hover {
          background: #fff3e6;
          transform: translateY(-5px);
        }
      `}</style>
<Footer/>
    </div>
    
  );
};

export default Support;