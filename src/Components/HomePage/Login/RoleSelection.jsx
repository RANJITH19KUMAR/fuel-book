import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import './Roleselection.css'
import { useNavigate } from "react-router-dom";

function RoleSelection() {
  const navigate = useNavigate();
  return (
    <div className="role-page d-flex align-items-center">
      <Container fluid='lg'>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="text-center mb-4">
              <h4 className="fw-bold text-warning">Fast Fuel</h4>
              <h5 className="fw-bold">Welcome to Fast Fuel</h5>
              <p className="text-muted">
                Please select how you want to continue
              </p>
            </div>

            {/* Customer Card */}
            <Card className="mb-3 role-card shadow-sm">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <i className="bi bi-person-circle fs-2 me-3 text-secondary"></i>
                  <div>
                    <h6 className="mb-0 fw-bold">I am a Customer</h6>
                    <small className="text-muted">
                      Login to book fuel
                    </small>
                  </div>
                </div>

                <Button variant="warning" className="rounded-circle">
                  <i className="bi bi-arrow-right"></i>
                </Button>
              </Card.Body>
            </Card>

            {/* Delivery Partner Card */}
            <Card className="mb-3 role-card shadow-sm">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <i className="bi bi-truck fs-2 me-3 text-secondary" onClick={() => navigate('/Login')}></i>
                  <div>
                    <h6 className="mb-0 fw-bold">
                      I am a Delivery Partner
                    </h6>
                    <small className="text-muted">
                      Login to manage deliveries
                    </small>
                  </div>
                </div>

                <Button variant="warning" className="rounded-circle">
                  <i className="bi bi-arrow-right"></i>
                </Button>
              </Card.Body>
            </Card>

            {/* Signup Link */}
            <div className="text-center mt-3">
              <span className="text-muted">
                New to Fast Fuel?{" "}
                <a href="#" className="text-warning fw-bold" onClick={() => navigate('/signup')}>
                  Create an account
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RoleSelection;