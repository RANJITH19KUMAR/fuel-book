import React, { useState, useEffect } from "react";
import LiveMap from "./LiveMap";
import { Container, Card, Button, Row, Col, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TrackOrder = () => {
  const [step, setStep] = useState(1); // 1 = confirmed
  const navigate = useNavigate();

  // Step auto update
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev < 4) return prev + 1;
        return prev;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Redirect after delivery
  useEffect(() => {
    if (step === 4) {
      const timeout = setTimeout(() => {
        navigate("/order-success");
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [step, navigate]);

  return (
    <Container className="track-page py-4 d-flex justify-content-center">
      <Card className="shadow border-0 track-card">
        <Card.Body>
          
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h6 className="fw-bold mb-1">Fast Fuel</h6>
              <small className="text-muted">Order ID #FF2025012</small>
            </div>
          </div>

          {/* Map */}
          <div className="map-box mb-3">
            <LiveMap />
            <p className="mb-0 text-muted">Live Tracking Map</p>
          </div>

          {/* Timeline */}
          <div className="timeline">

            <div className={`step ${step >= 1 ? "completed" : ""}`}>
              <i className="bi bi-check-circle-fill"></i>
              <span>Order Confirmed</span>
              <small>10:30 AM</small>
            </div>

            <div className={`step ${step >= 2 ? "completed" : ""}`}>
              <i className="bi bi-box-seam"></i>
              <span>Preparing Fuel</span>
              <small>10:35 AM</small>
            </div>

            <div className={`step ${
              step === 3 ? "active" : step > 3 ? "completed" : ""
            }`}>
              <i className="bi bi-truck"></i>
              <span>On the Way</span>
              <small>10:45 AM</small>
            </div>

            <div className={`step ${step === 4 ? "completed" : ""}`}>
              <i className="bi bi-flag"></i>
              <span>Delivered</span>
              <small>{step === 4 ? "Done" : "Pending"}</small>
            </div>

          </div>

          {/* Progress */}
          <ProgressBar now={(step / 4) * 100} className="my-3" />

          {/* ETA */}
          <div className="text-center mb-3">
            <small className="text-muted">Estimated Arrival</small>
            <h6 className="fw-bold text-success">
              {step === 4 ? "Delivered ✅" : `${25 - step * 5} Minutes`}
            </h6>
          </div>

          {/* Driver */}
          <Card className="p-2 border-0 shadow-sm driver-card">
            <Row className="align-items-center">
              <Col xs={3}>
                <img
                  src="https://i.pravatar.cc/100"
                  alt="driver"
                  className="img-fluid rounded-circle"
                />
              </Col>

              <Col xs={6}>
                <h6 className="mb-0">Arun Kumar</h6>
                <small className="text-muted">TN09 AB 1234</small>
              </Col>

              <Col xs={3} className="text-end">
                <Button variant="light" className="btn-sm me-1 action-btn">
                  <i className="bi bi-telephone"></i>
                </Button>
                <Button variant="light" className="btn-sm action-btn">
                  <i className="bi bi-chat-dots"></i>
                </Button>
              </Col>
            </Row>
          </Card>

        </Card.Body>
      </Card>

      {/* CSS */}
      <style>{`
        .track-card {
          width: 350px;
          border-radius: 12px;
          transition: transform 0.3s;
        }

        .track-card:hover {
          transform: translateY(-5px);
        }

        .map-box {
          height: 140px;
          background: #f5f5f5;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding-left: 10px;
          border-left: 2px solid #eee;
        }

        .step {
          position: relative;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .step:hover {
          transform: translateX(5px);
        }

        .step i {
          position: absolute;
          left: -12px;
          top: 0;
          font-size: 16px;
          color: #ccc;
        }

        .step.completed i {
          color: #28a745;
        }

        .step.active i {
          color: #ff6a00;
        }

        .progress-bar {
          background-color: #ff6a00;
          transition: width 0.5s ease;
        }

        .action-btn {
          transition: all 0.3s;
        }

        .action-btn:hover {
          background: #ff6a00;
          color: white;
          transform: scale(1.1);
        }

        .driver-card {
          transition: all 0.3s;
        }

        .driver-card:hover {
          transform: scale(1.02);
        }
      `}</style>
    </Container>
  );
};

export default TrackOrder;