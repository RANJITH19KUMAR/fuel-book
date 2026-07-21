import { useState } from 'react'
import './Order.css'
import upi from "../../../assets/upi.png";
import qr from "../../../assets/Orderimages/imagesQr.jpg"

// import{faCar, faMotorCycle,faTaxi,faTruck} from '@fortawesome/free-solid-svg-icons';
import {Container,Row,Col,Form,Button} from 'react-bootstrap/esm/'
import { Prev } from 'react-bootstrap/esm/PageItem';
import { useNavigate } from 'react-router-dom';



function Order ()  {

  //  const order={
  //       orderId: 'FF20245Gh22',
  //       fuelType: 'Petrol',
  //       quantity: 4,
  //       vehicletype:'Car',
  //       location:'Annanagar,chennai-18',
  //       amount:400,
  //       pricePerLiter:100,
  //       payment: 'Paid (Online)',
  //       deliveryCharge : 'Free'

  //   }

const navigate = useNavigate();

    const[ fueltype , setFuel]= useState('petrol');
    const[vehicle , setVehicle] = useState('Bike');
    const [quantity, setQuantity] = useState(1);
    const [payment, setPayment]= useState('');
    

    const pricePerLiter = fueltype === 'petrol' ? 100:90;
    const totalprice = quantity * pricePerLiter;
  return (
   <Container fluid='lg' className=' order-page py-4 shadow rounded  bg-white my-4  '>
  <Row>
    <h4 className='text-start ms-3'>Book Your Fast Fuel</h4>
    <p className=' text-muted text-start ms-5'><span className='text-danger fw-bold'>-----</span> Fast + Safe + 24/7 Fuel delivery at your step.</p>
    {/* <div className='text-start  ms-3 '> */}

      {/* 1.  Select Fuel Type */}
        <Col md={12} className='pt-2 py-2'>
        <div className='row'>
          <div className='col-md-7'>
        <h5 className='fs-6 text-start ms-2'>1. Select Fuel Type</h5>
        <div className=' d-flex gap-2 pt-3 ms-2 mb-1'>
        <button className= {`fuel-btn rounded ${fueltype === 'petrol' ? 'active' : ''} `} onClick={() => setFuel('petrol')}> Petrol</button>
        <button className= {`fuel-btn rounded ${fueltype === 'diesel' ? 'active' : ''} `} 
        onClick={() => setFuel('diesel')}>Diesel</button>
       </div>

       {/*  2. Select your Vehicle Type */}
       <h5 className="fs-6 text-start mb-3 pt-3">2. Select your Vehicle Type</h5>

  <div className="vehicle-wrapper d-flex gap-2">

    <button className= {` vehicle-btn  rounded  ${vehicle=== 'Car' ? 'active' : ''}`} onClick={()=> setVehicle('Car')}>  <i className="bi bi-car-front-fill"></i>Car</button>
    <button className= {` vehicle-btn  rounded  ${vehicle=== 'Bike' ? 'active' : ''}`} onClick={()=> setVehicle('Bike')}>  <i className="bi bi-scooter"></i>Bike</button>
    <button className= {` vehicle-btn  rounded  ${vehicle=== 'Auto' ? 'active' : ''}`} onClick={()=> setVehicle('Auto')}>  <i className="bi bi-taxi-front-fill"></i>Auto</button>
    {/* <button className= {` vehicle-btn rounded  ${vehicle=== 'Other' ? 'active' : ''}`} onClick={()=> setVehicle('Other')}>  <i className="bi bi-truck-front-fill"></i>Other</button>   */}

  </div>

  {/*  3. Enter Delivery Location*/}
<div className='location pt-4  '>
   <h5 className='fs-6 text-start mb-3'>3. Enter Delivery Location</h5>
        <div className='location-input ms-3 '>  <i className="bi bi-geo-alt location-icon "></i>
      < Form.Control  placeholder='Enter location' /></div>
       <p className='pt-2 ms-3'>+ Use my current location</p>
</div>

{/* 4. Enter Quantity */}
<div className='quantity pt-2 py-1'>
  <h5 className='fs-6 text-start'>4. Enter Quantity</h5>
        <div className='quantity-btn rounded text-start align-items-center p-2 ms-3 mt-3'>
        <button onClick={() => setQuantity(prev => prev >'1' ? prev-1 :1)} className='qty-btn fw-bold ms-3 rounded  ms-2  '> - </button>
        <span className='fs-6  m-2'>{quantity} Liters</span>
        <button onClick={() => setQuantity(prev => prev+1)} className='qty-btn fw-bold rounded px-1 '>+</button>
        
        </div>
<p className='quantity-pa pt-3 ms-3 text-start'>* Minimum order quantity is 1 Liter.</p>
</div>

{/* 5.Payment method*/}
<div>
 <h4 className='fs-6 text-start ms-2 '>5. Choose Payment Method</h4>
        <div className=' ms-2 d-flex gap-1 pt-3 '>
          <button className={`payment-btn rounded bg-white  ${ payment === 'UPI' ? 'active' : ''}`} onClick={()=> setPayment('UPI')}> <img src={upi} width={55} alt="upi" className='pt-2 '/>UPI</button>
           <button className={`payment-btn rounded bg-white px-4 ${ payment === 'Card' ? 'active' :''}`} onClick={() => setPayment('Card')}><i className="bi bi-credit-card p-2"></i>Card</button>
            <button className={`payment-btn rounded bg-white px-4 ${payment === 'Cash' ? 'active' :''}`} onClick={() => setPayment('Cash')}><i className="bi bi-cash-stack p-2"></i>Cash</button>

        </div>
        </div>


        {payment == 'UPI' &&
        <div className='upi-method my-3 text-center rounded shadow '>
          <h5 className='pt-3'>Scan & Pay</h5>
          <img src={qr} alt="" className='img-fluid rounded' width={150}/>
          <p className='fs-6 fw-semibold mt-2 text-primary'>UPI ID: fastfuel@upi</p>
          <button className='pay-btn  rounded m-3'>Pay Now</button>
        </div>
        }
        {payment === 'Card' &&
        <div className='card-method my-3 text-center rounded shadow'>
          <div className='mb-3 mt-2'>
            <label> Card Number </label>
            <input type="text" className='form-control' placeholder= "1234 4567 8901 4321"/>
          </div>
          <div className=' mb-3'>
            <label>Card Holder Name</label>
          <input type="text" className='form-control' />
          </div>
          <div className='row'>
          <div className='col-md-6 mb-3'>
            <label>Expiry</label>
            <input type="text" className='form-control' placeholder='MM/YY' />
          </div>
           <div className='col-md-6 mb-3'>
            <label>CVV</label>
            <input type="text" className='form-control' placeholder='123' />
          </div>
          </div>
          <button className='card-btn m-2 rounded'>Pay Securely</button>
        </div>
        }
        {
          payment === 'Cash' && 
          <div className='cash-method alert alert-success mt-3'> *Cash will be collected after fuel delivery.</div>
        }
       </div>
{/* Booking Summary */}
      <div className='book-summary col-lg-4 col-md-12 mt-4 mt-lg-0 '>
  <div className='summary-card p-3 rounded shadow'>

    <h5 className='text-center mb-3'>Booking Summary</h5>

    <div className='summary-item'>
      <span>Fuel Type</span>
      <span className='text-success'>{fueltype}</span>
    </div>

    <div className='summary-item'>
      <span>Vehicle</span>
      <span className='text-success'>{vehicle}</span>
    </div>

    <div className='summary-item'>
      <span>Quantity</span>
      <span className='text-success'>{quantity} L</span>
    </div>

    <div className='summary-item'>
      <span>Price / Liter</span>
      <span className='text-success'>₹{pricePerLiter}</span>
    </div>

    <div className='summary-item'>
      <span>Delivery Time</span>
      <span className='text-success'>20 mins</span>
    </div>

    <hr />

    <div className='d-flex justify-content-between align-items-center'>
      <h6 className='mb-0'>Total</h6>
      <h5 className='text-primary mb-0'>₹{totalprice}</h5>
    </div>

    <button 
      className='order-btn w-100 mt-3'
      onClick={() => navigate('/booking-success')}
    >
      Book Now
    </button>

    <p className='text-center mt-3 small text-muted'>
      <i className="bi bi-shield-fill-check text-success me-1"></i>
      Secure & Safe Payments
    </p>

  </div>
</div>

        </div>
        </Col>
       
{/* </div> */}
       </Row>
   </Container>
  )
}

export default Order