import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Landing from '/src/Components/Landing'
import BookFuel from '/src/Components/BookFuel/BookFuel'
import Success from '/src/Components/BookFuel/BookSuccess/Success'
import Login from '/src/Components/HomePage/Login/Login'
import LoginSelection from '/src/Components/HomePage/Login/LoginSelection'
import Signup from '/src/Components/HomePage/Login/SignUpPage'
import SignupPage from '/src/Components/HomePage/Login/SignUpPage'
import DeliveryComplete from '/src/Components/TrackOrder/Delivery/DeliveryComplete'
import DriverArrived  from '/src/Components/TrackOrder/Driver/DriverArrived'
import Review from '/src/Components/TrackOrder/Review/Review'
import TrackOrder from '/src/Components/TrackOrder/TrackOrder'
import About from '/src/Components/HomePage/AboutPage.jsx/About'
import Service from '/src/ServicePage/Service'
import Support from '/src/Components/SupporetPage/Support'

//  import Login from './Components/login/Login'

const App = () => {
  return (

    // <div>
    //   <Support/>
    // </div>

       <Routes>
      <Route path='/' element={ <Landing/>} />
       <Route path ='/Booking' element={ <BookFuel/>} />
        <Route path ='/Booking-success' element={ <Success/>} />
         <Route path ='/About' element={ <About/>} />
           <Route path ='/services' element={ <Service/>} />
             <Route path='/selection' element={ <Login/>} />
              <Route path='/signup' element={ <SignupPage/>} /> 
               <Route path='/Track' element={ <TrackOrder/>} /> 
                <Route path='/order-success' element={ <DeliveryComplete/>} /> 
                 <Route path='/review' element={ <Review/>} /> 
                 <Route path='/support' element={ <Support/>} /> 
         
      
    


       </Routes>
  )
}

export default App;
