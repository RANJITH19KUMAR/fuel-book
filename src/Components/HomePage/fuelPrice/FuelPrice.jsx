import React from 'react'
import '/src/Components/HomePage/fuelPrice/FuelPrice.css'
import { Container,Row,Col } from 'react-bootstrap'

const FuelPrice = () => {
  return (
    <Container fluid='lg ' className='price-section rounded p-5 py-4'>
        <h2>Today's  <span className='fuel-p'>Fuel Prices</span></h2>
        <p className=''>Prices updated daily at 6:00 AM</p>
        <Row className='align-items-center text-center'>

            <Col md={4}>
            <div className='price-detail shadow rounded  text-start  '>
                <h4 className='ms-4 fs-5 fw-bold'>Petrol    <i className=" price-logo bi bi-droplet-fill text-success "></i></h4> 
                <h5 className='ms-4 fw-bold text-success'>₹ 108.25 <span className='liter-name text-black  text-muted fw-small'>/L</span></h5> 
                <p className=' text-success ms-4  fw-bold'> <i class="bi bi-arrow-down-short"></i>0.30 Today <button className='update-btn text-center text-muted  rounded '>Updated</button></p>
                
            </div>
            </Col>
             <Col md={4}>
            <div id='price-detail' className='price-detail shadow rounded  text-start '>
                <h4 className='ms-4 fs-5 fw-bold'>Diesel    <i className=" price-logo bi bi-droplet-fill text-primary "></i></h4> 
                <h5 className='ms-4 fw-bold text-primary'>₹ 90.42 <span className='liter-name text-black  text-muted fw-small'>/L</span></h5> 
                <p className=' text-success ms-4  fw-bold'> <i class="bi bi-arrow-down-short"></i>0.25 Today <button className='update-btn text-center text-muted  rounded '>Updated</button></p>
                
            </div>
            </Col>
             <Col md={4}>
           <div id='price-detail1' className='price-detail shadow rounded  text-start  '>
                <h4 className=' ms-4 fs-5 fw-bold'>CNG <i id='fire-price' className="  price-logo bi bi-fire "></i>  </h4> 
                <h5 id='fire-let' className=' ms-4 fw-bold '>₹ 72.30 <span className='liter-name text-black  text-muted fw-small'>/L</span></h5> 
                <p className=' text-success ms-4  fw-bold'> <i class="bi bi-arrow-down-short"></i>0.15 Today <button className='update-btn text-center text-muted  rounded '>Updated</button></p>
                
            </div>
            </Col>
        </Row>

    </Container>
  )
}

export default FuelPrice
