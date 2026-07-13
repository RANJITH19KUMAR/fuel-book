import React from 'react'
import '/src/Components/HomePage/ChooseFuel/WhyChoose.css'
import { Container,Row,Col } from 'react-bootstrap'

const WhyChoose = () => {
  return (
    <Container fluid='lg' className=' choose-section py-4' >
        <h2>Why Choose<span> Fast Fuel? </span></h2>
        <Row className='choose-fuel py-4'>
            <Col md={3}>
            <div className='quality-first text-start rounded shadow  d-flex '>
                <i className="icons bi bi-shield-check fs-1 mt-1 p-3"> </i>  <p className=' mt-2 text-muted'> <b>Quality Assuered</b>
                <br/>We provide only quality checked fuel from trusted sources. </p>
               
            </div>
            </Col>
              <Col md={3}>
            <div className='quality-first text-start rounded shadow d-flex'>
                <i className="icons bi bi-shield-check fs-1 mt-1 p-3"> </i> 
                <p className=' mt-2 text-muted'> <b>Super Fast Delivery</b>
                <br />Get your fuel delivered in 30 minutes our location.</p>
            </div>
            </Col>
              <Col md={3}>
            <div className='quality-first text-start rounded shadow d-flex'>
                <i className="icons bi bi-shield-check fs-1 mt-1 p-3"> </i> 
                <p className=' mt-2 text-muted'><b>Best Price Gurantee</b>
                <br />We offer the most competitive prices in the market.</p>
            </div>
            </Col>
              <Col md={3}>
            <div className='quality-first text-start rounded shadow d-flex '>
                <i className=" icons bi bi-headset fs-1 mt-1 p-2 "></i>
                <p className='mt-2 text-muted'><b className='customer-support fw-bold'>24/7 Customer Support</b>
                <br />Our support team is always available to help you.</p>
            </div>
            </Col>
        </Row>

    </Container>
  )
}

export default WhyChoose
