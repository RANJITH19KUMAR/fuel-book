import React from "react";
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";

const Acheive = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={3}>
          <h2>
            <CountUp end={15} duration={3} />K+
          </h2>
          <p>Orders Delivered</p>
        </Col>

        <Col md={3}>
          <h2>
            <CountUp end={500} duration={3} />+
          </h2>
          <p>Happy Customers</p>
        </Col>

        <Col md={3}>
          <h2>
            <CountUp end={250} duration={3} />+
          </h2>
          <p>Delivery Partners</p>
        </Col>

        <Col md={3}>
          <h2>
            <CountUp end={20} duration={3} />+
          </h2>
          <p>Cities Covered</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Acheive;