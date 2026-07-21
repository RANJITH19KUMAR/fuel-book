import React from 'react'
import './Work.css'
import { Container, Row, Col } from 'react-bootstrap'

function Work() {
  return (
    <Container className="py-5">
      <h4 className="fw-bold mb-5 text-center">How it Works</h4>

      <Row className="align-items-center justify-content-center g-4 text-center">

        {/* Step 1 */}
        <Col lg={4} md={6} sm={12}>
          <div className="work-card">
            <i className="icon1 bi bi-geo-alt-fill fs-1"></i>
            <h4 className="fs-6 fw-bold mt-3">
              <span className="span1 badge rounded-circle me-2">1</span>
              Enter Location
            </h4>
            <p className="text-muted small">
              Share your location and select fuel type
            </p>
          </div>
        </Col>

        {/* Step 2 */}
        <Col lg={4} md={6} sm={12}>
          <div className="work-card">
            <i className="icon1 bi bi-fuel-pump-fill fs-1"></i>
            <h4 className="fs-6 fw-bold mt-3">
              <span className="span1 badge rounded-circle me-2">2</span>
              Place Order
            </h4>
            <p className="text-muted small">
              Confirm your order and make payment
            </p>
          </div>
        </Col>

        {/* Step 3 */}
        <Col lg={4} md={6} sm={12}>
          <div className="work-card ">
            <i className="icon1 bi bi-truck fs-1"></i>
            <h4 className="fs-6 fw-bold mt-3">
              <span className="span1 badge rounded-circle me-2">3</span>
              Get Delivered
            </h4>
            <p className="text-muted small">
              We deliver fuel to you quickly and safely
            </p>
          </div>
        </Col>

      </Row>
    </Container>
  )
}

export default Work