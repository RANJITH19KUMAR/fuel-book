import React from 'react'
import './Work.css'
import { Container,Row,Col } from 'react-bootstrap'

function Work  ()  {
  return (
    <Container fluid='lg' className='py-4 '>
        <h4 className='fw-bold mb-5'>How it Works</h4>
   <Row className='align-itmes-center justify-contet-center g-4'>
      
      <div className='contain  d-flex justify-content-between gap-2 pb-2 '>
        
        {/* <Col md={1}>
        <div className='mb-3'> </div></Col> */}
      <Col lg ={4} md={6}>

      <div>

        <i className=" icon1 bi bi-geo-alt-fill fs-1  rounded-circle p-3 "></i>
         <h4 className='fs-6 fw-bold text-start ms-3'><span className='span1 badge rounded-circle  me-2'> 1 </span>Enter Location</h4>
      <p className='text-muted small pt-1 text-start ms-3'>Share your location and select fuel type</p>
    
      

      {/* <Col md={1}></Col> */}
      
      <div>
        <i className="icon1 bi bi-fuel-pump-fill img-fluid fs-1 rounded-circle p-3"></i>
      <h4 className='fs-6 fw-bold text-start ms-3'><span className=' span1 badge rounded-circle ps-2 me-2'>2</span>Place Order</h4>
      <p className='text-muted small pt-1 text-start ms-3'>Confirm your order and make payment</p>
      </div>

      
      {/* <Col md={1} >
      
      </Col> */}
      {/* <Col md={3} className='co1'>
     
      </Col> */}
      <div> <i className="icon1 bi bi-truck fs-2   rounded-circle"></i>
      <h4 className='fs-6 fw-bold '><span className=' span1 badge  rounded-pill ps-2 mx-1'>3</span>Get Delivered</h4>
      <p className='text-muted small pt-1 text-start ms-5'>We deliver fuel to you quickely and safely</p></div>
      </div>
      
      </Col>
     </div>
      </Row>
       </Container>
    
  )
}

export default Work;