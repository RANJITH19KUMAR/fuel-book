import React from 'react'
import '/src/Components/HomePage/Home/Home.css'
import {Container,Row,Col,Button,} from 'react-bootstrap/esm/'
import Navbars from '../Navbar/Navbars'
import bike from '../../../assets/bike_img.png'
import { useNavigate } from 'react-router-dom'

function Home () {
  const navigate = useNavigate();
  return (
    
    <Container className='my-1 '>
      
      <Row className='pt-5'>
       
        <Col md={6} className=''>
        
        <h1 className='fw-bold fs-1 text-start text-shadow'>Fuel Delivery ,<span className='s1'> <br />Just a Tap Away</span></h1>
        <p className='text-muted fs-4 text-start pt-2'>Get fuel delivered to your location quickly, safely and at the best price.</p>

<div className="d-flex  align-items-center   px-2">
          <div className="  mx-2 pt-3">
             <i className="icon1 bi bi-shield-check fs-3 "></i>
          <h4 className='fs-6 pt-3 '>Safe & secure</h4>
          <p className="text-muted fs-6">100% safe delivery</p>
           </div>
           <div className=' mx-2 pt-3'>
            <i className="icon1 bi bi-lightning-charge-fill fs-3 "></i>
          <h4 className='fs-6 pt-3'>Quick Delivery</h4>
          <p className='text-muted fs-6'>On time, Every Time</p>  
          </div>

          <div className="mx-1 pt-3">
            <i className=" icon1 bi bi-headset fs-3 "></i>
           <h4 className='fs-6 pt-3'>24/7 Support</h4>
          <p className='text-muted fs-6'>We're here for you</p> 
         </div>
        
</div>

           <button   className="hero-btn  mt-3 rounded" onClick={()=> navigate('/Booking')}>Book Fuel Now <i class="bi bi-arrow-right"></i></button>
            <button   className="hero-btn1 mt-3 rounded" onClick={() => navigate('/Track')}>Track Order <i class="bi bi-box-arrow-up-right"></i></button>
         
 
        </Col>
        
          <Col md={6}>
          <img  className='img-home img-fluid' src={bike} alt="delivery" />
          </Col>
       
      </Row>
     
      </Container>
  )
}

export default Home