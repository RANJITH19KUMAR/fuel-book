import React, { useState } from 'react'
import '../Order.css'
import { Container,Col,Row,Button,Form } from 'react-bootstrap'

const Payment = () => {
    const [payment, setPayment]= useState('');
  return (
    <Container fluid='lg'>
        <Row>
            <Col md={4}>
             {/* 5. Choose Payment Method */}
        
        <h4 className='fs-6 text-start ms-2 '>5. Choose Payment Method</h4>
        <div className=' ms-4 d-flex gap-3 pt-3 ms-3 '>
          <button className={`payment-btn rounded bg-white  ${ payment === 'UPI' ? 'active' : ''}`} onClick={()=> setPayment('UPI')}> <img src={upi} width={55} alt="upi" className='pt-2 '/>UPI</button>
           <button className={`payment-btn rounded bg-white px-4 ${ payment === 'Card' ? 'active' :''}`} onClick={() => setPayment('Card')}><i className="bi bi-credit-card p-2"></i>Card</button>
            <button className={`payment-btn rounded bg-white px-4 ${payment === 'Cash' ? 'active' :''}`} onClick={() => setPayment('Cash')}><i className="bi bi-cash-stack p-2"></i>Cash</button>

        </div>

        {payment == 'UPI' &&
        <div className='upi-method my-3 text-center rounded shadow '>
          <h5 className='pt-3'>Scan & Pay</h5>
          <img src="/src/assets/Orderimages/imagesQr.jpg" alt="" className='img-fluid rounded' width={150}/>
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
            </Col>
        </Row>
    </Container>
  )
}

export default Payment
