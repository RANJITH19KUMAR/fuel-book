import React, { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './Success.css'
import { useNavigate } from 'react-router-dom'

const Success = () => {

    const order={
        orderId: 'FF20245Gh22',
        fuelType: 'Petrol',
        quantity: 4,
        vehicletype:'car',
        location:'Annanagar,chennai-18',
        amount:400,
        payment: 'Paid (Online)'

    }
    const navigate = useNavigate();
    const[Track, setTrack]=useState('');
  return (
   <Container fluid='lg' className='py-1' >
    <Row className='success-card '>
        
{/* 1.success head-page */}

<Col md={4}></Col>
    <Col md={4}>
    <div className='success-page bg-white rounded shadow '>
        <div className='top-content'>
              <i class="bi bi-check-circle-fill   rounded "></i>
        <h2 className=' text-muted fs-3'>Booking <span className='text-success'>Confirmed!</span> </h2>
        <p className='text-muted '>Your fuel delivery order request has been placed successfully. </p>
        </div>
        <p className='order-id rounded shadow  fw-bold align-items-center text-center py-1'>Order ID  <span className='fw-bold ms-2'> #{order.orderId}</span> </p>
        <p className=' text-success pt-2 mb-2' >Estimated Arrival : 20 minutes. </p>
         <button className='live-btn rounded '>Live Tracking Available</button>
 <div className='summary-card rounded shadow p-2 m-2 text-start '>
              
                <h5 className='text-muted '>Fuel Type : <span className='cards-detail px-2'>{order.fueltype}</span></h5>
                <h5 className='text-muted'> Quantity : <span className='px-3'>{order.quantity} </span></h5>
                <h5 className='text-muted'>Amount : <span className='px-3'>{order.amount}</span></h5>
                <h5 className='text-muted'>Payment : <span className='text-success px-3'>{order.payment}</span></h5>
            </div>
         <div className='foot-btn justify-content-between d-flex px-3 py-2'>
            <button   className= {`foot-b rounded  ${Track === 'Track' ? 'active' : ''}`} onClick={() => navigate('/track')} ><i className="bi bi-geo-alt  "></i>Track Your Fuel</button>
             <button   className= {`foot-b rounded ${Track === 'Back' ? 'active' : ''}`} onClick={() => navigate('/')} ><i class="bi bi-house-door-fill fs-5"></i>Back To Home</button>           
         </div>                  
           
         <h5 className='text-center p-1 text-success'>Thank You for Choosing Fast Fuel!</h5>
        </div>
    </Col>
    </Row>
   </Container>
  )
}
export default Success
