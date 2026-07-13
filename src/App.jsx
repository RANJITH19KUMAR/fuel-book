import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Landing from '/src/Components/Landing'
import BookFuel from '/src/Components/BookFuel/BookFuel'
import Success from './Components/BookFuel/BookSuccess/Success'
import Login from './Components/HomePage/Login/Login'
import LoginSelection from './Components/HomePage/Login/LoginSelection'
import Signup from './Components/HomePage/Login/SignUpPage'
import SignupPage from './Components/HomePage/Login/SignUpPage'
import DeliveryComplete from './Components/TrackOrder/Delivery/DeliveryComplete'
import DriverArrived  from './Components/TrackOrder/Driver/DriverArrived.jsx'
import Review from './Components/TrackOrder/Review/Review.jsx'
import TrackOrder from '/src/Components/TrackOrder/TrackOrder.jsx'
import About from '/src/Components/HomePage/AboutPage.jsx/About.jsx'
import Service from '/src/ServicePage/Service.jsx'
import Support from '/src/Components/SupporetPage/Support.jsx'

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
