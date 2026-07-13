import React from 'react'
import './Login.css'
import { Container,Row,Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate();
  return (
    <Container fluid='lg' className='py-2 '>
     
<Row className='login-page rounded shadow pt-2'>
    <h6 className='back-home p-2 text-start pointer rounded' onClick={() => navigate('/')}><i className="bi bi-arrow-left p-1"></i>Back to Home</h6>
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
    </Col>
              {/* <Col md={5}>
              <img  className='img-login img-fluid' src="/src/assets/bike_img.png" alt="delivery" />
              </Col> */}

              <Col md={5}>
              <div className=' login-form rounded shadow bg-white '>
                <i className="bi bi-person-add fs-1 pt-5 user-icon rounded  "></i>
                <h4 className=' pt-2'>Customer Login</h4>
                <p className='text-muted'>Welcome back! Please login to your account.</p>


                <div className='email-login text-start ms-3 pt-2  m-2'>
                    <label className='text-start  fw-semibold'>Email or Mobile Number</label>
                    <div className='email-input ms-3 '>  <i className="bi bi-envelope email-icon"></i>
                         <input type='text' className='form-control mt-2 fs-6'  placeholder='Enter your email or mobile number' /></div>
                </div>

                <div className='password-login text-start ms-3   pb-2 pt-2 '>
                    <label className='text-start fw-semibold '>Password</label>
                  <div className='email-input ms-3 '>  <i className="bi bi-person-lock email-icon"></i>
                         <input type='text' className='form-control mt-2 mb-2'  placeholder='Enter your password' /></div>
                </div>
                 <div className=' form-login d-flex justify-content-between align-items-center  mx-4'>

    {/* Checkbox */}
    <div className='form-check'>
      <input 
        type="checkbox" 
        className='form-check-input' 
        id="rememberMe"
      />
      <label className='form-check-label ' htmlFor="">
        Remember Me
      </label>
    </div>

    {/* Forgot password */}
    <a className='text-decoration-none '>
      Forgot Password?
    </a>
    </div>
                
                <button className='login-butn text-center rounded shadow mx-3 mt-2' onClick={() => navigate('/')}>Login</button>

                <p className=' text-muted pt-3'>or continue with</p>
                <div>
                    <button className=' google-btn rounded shadow  fw-semibold  text-center'><img src="/src/assets/logo/google.webp" alt="" width={15} height={15}/> Continue with Google</button>
                </div>
                
                <p className='py-3 '>Don't have an account ? <span onClick={() => navigate('/signup')}>Sign Up</span></p>
              </div>
              </Col>
</Row>
    </Container>
  )
}

export default Login
