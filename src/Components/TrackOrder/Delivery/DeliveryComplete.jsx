import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DeliveryComplete = () => {
  const navigate = useNavigate();
  return (
    <Container fluid='lg' className="delivery-page py-2">
    <div className="completed-container d-flex justify-content-center  align-items-center">
      
      <Card className="completed-card shadow-sm ">

        {/* Header */}

        {/* Success Icon */}
        <div className="text-center mt-4">
          <div className="success-icon">
            <i className="bi bi-check-lg"></i>
          </div>

          <h5 className="mt-3 success-text">
            Fuel Delivered Successfully!
          </h5>

          <p className="text-muted small">
            Thank you for your order.
          </p>
        </div>

        {/* Order Details */}
        <div className="p-3 order-details">
          <div className="d-flex justify-content-between">
            <span>Order ID</span>
            <span>#FF2025012</span>
          </div>

          <div className="d-flex justify-content-between">
            <span>Delivered At</span>
            <span>02 May 2025, 04:35 PM</span>
          </div>

          <div className="d-flex justify-content-between">
            <span>Fuel Type</span>
            <span>Petrol</span>
          </div>

          <div className="d-flex justify-content-between">
            <span>Quantity</span>
            <span>5 Liters</span>
          </div>

          <div className="d-flex justify-content-between fw-bold">
            <span>Amount Paid</span>
            <span>₹541.25</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="p-3">

          <Button className="btn-main w-100 mb-2" onClick={() => navigate('/review')} >
            Rate & Review
          </Button>

          <Button className="btn-outline w-100 mb-2 " onClick={() => navigate('/booking')}>
            Book Again
          </Button>

          <div className="text-center ">
            <a href="#" className="back-home" onClick={() => navigate('/')}>
              Back to Home
            </a>
          </div>

        </div>

      </Card>
      

      {/* CSS */}
      <style>{`
        .completed-container {
          height: 100vh;
          
        }

        .completed-card {
          width: 320px;
          border-radius: 12px;
          overflow: hidden;
        }

        .brand {
          color: #ff6a00;
          font-weight: 600;
        }

        /* Success Circle */
        .success-icon {
          width: 70px;
          height: 70px;
          background: #28a745;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
        }

        .success-icon i {
          color: white;
          font-size: 30px;
        }

        .success-text {
          color: #28a745;
          font-weight: 600;
        }

        /* Order details */
        .order-details {
          font-size: 14px;
          line-height: 28px;
        }

        /* Buttons */
        .btn-main {
          background: #ff6a00;
          border: none;
        }

        .btn-outline {
          background: white;
          border: 1px solid #ddd;
          color: #333;
        }

        .btn-outline:hover {
          background: #ff6a00;
          color: white;
        }

        .back-home {
          color: #28a745;
          font-size: 14px;
          text-decoration: none;
        }
      `}</style>

    </div>
    </Container>
  );
};

export default DeliveryComplete;