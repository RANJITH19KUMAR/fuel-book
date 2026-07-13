import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Navbars from "../../HomePage/Navbar/Navbars";
import './Review.css'
import { useNavigate } from "react-router-dom";

const Review = () => {
  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();
  const categories = [
    "Punctuality",
    "Behaviour",
    "Professionalism",
    "Safety",
  ];

  return (
    <div className="page-bg">
      {/* Header */}
      <Navbars/>

      <Container className="mt-4">
        <p className="back" onClick={() => navigate('/')}>← Back to Home</p>

        <h2 className="text-center fw-bold">Rate & Review</h2>
        <p className="text-center text-muted">
          Your feedback helps us improve our service.
        </p>

        <Row className="mt-4">
          {/* LEFT */}
          <Col md={7}>
            <Card className="p-4 shadow-sm card-box">
              <h5 className="fw-bold">How was your experience?</h5>

              {/* Stars */}
              <div className="my-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    size={28}
                    className="star"
                    color={
                      star <= (hover || rating) ? "#f4b400" : "#ddd"
                    }
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>

              <p className="text-success fw-bold">Great</p>

              <Form.Group className="mt-3">
                <Form.Label>Write your review (Optional)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Share your experience..."
                />
                <small className="text-muted">0 / 500 Characters</small>
              </Form.Group>

              {/* Categories */}
              <div className="mt-4">
                <p className="fw-bold">Rate your delivery partner</p>

                {categories.map((item, i) => (
                  <div
                    key={i}
                    className="d-flex justify-content-between align-items-center category-box"
                  >
                    <span>{item}</span>

                    <div>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} size={18} color="#f4b400" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Button className="submit-btn mt-4">
                Submit Review
              </Button>
            </Card>
          </Col>

          {/* RIGHT */}
          <Col md={5}>
            {/* Order Summary */}
            <Card className="p-4 shadow-sm card-box mb-3">
              <h5 className="fw-bold">Order Summary</h5>

              <div className="summary-row">
                <span>Order ID</span>
                <span>#FF2025012</span>
              </div>
              <div className="summary-row">
                <span>Customer</span>
                <span>Ravi Kumar</span>
              </div>
              <div className="summary-row">
                <span>Delivery Address</span>
                <span>
                  No. 45, Anna Nagar,<br />
                  Chennai
                </span>
              </div>
              <div className="summary-row">
                <span>Delivered At</span>
                <span>02 May 2025</span>
              </div>

              <hr />

              <div className="summary-row">
                <span>Fuel Type</span>
                <span>Petrol</span>
              </div>
              <div className="summary-row">
                <span>Quantity</span>
                <span>5 Liters</span>
              </div>
              <div className="summary-row">
                <span>Amount Paid</span>
                <span>₹541.25</span>
              </div>
            </Card>

            {/* Reviews */}
            <Card className="p-4 shadow-sm card-box">
              <h6 className="fw-bold">
                What other customers are saying
              </h6>

              {["Suresh R.", "Priya M.", "Karthik V."].map(
                (name, i) => (
                  <div key={i} className="review-item">
                    <div className="d-flex justify-content-between">
                      <strong>{name}</strong>
                      <div>
                        {[1, 2, 3, 4, 5].map((s) => (
                          <FaStar key={s} size={14} color="#f4b400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted small">
                      Good service. Delivery partner was polite.
                    </p>
                  </div>
                )
              )}
            </Card>
          </Col>
        </Row>

        {/* Bottom Features */}
        <Row className="mt-4 text-center feature-row">
          <Col>Safe & Secure</Col>
          <Col>Quick Delivery</Col>
          <Col>24/7 Support</Col>
          <Col>Secure Payments</Col>
        </Row>

        <p className="text-center text-muted mt-3">
          © 2025 Fast Fuel. All rights reserved.
        </p>
      </Container>
    </div>
  );
};

export default Review;