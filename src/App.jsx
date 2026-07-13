import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Landing from "./Components/Landing.jsx";
import BookFuel from './Components/BookFuel/BookFuel.jsx'
import Success from './Components/BookFuel/BookSuccess/Success.jsx'
import Login from './Components/HomePage/Login/Login.jsx'
import LoginSelection from './Components/HomePage/Login/LoginSelection.jsx'
import Signup from './Components/HomePage/Login/SignUpPage.jsx'
import SignupPage from './Components/HomePage/Login/SignUpPage.jsx'
import DeliveryComplete from './Components/TrackOrder/Delivery/DeliveryComplete.jsx'
import DriverArrived  from './Components/TrackOrder/Driver/DriverArrived.jsx'
import Review from './Components/TrackOrder/Review/Review.jsx'
import TrackOrder from './Components/TrackOrder/TrackOrder.jsx'
import About from "./Components/HomePage/AboutPage/About.jsx"
import Service from "./Components/ServicePage/Service.jsx";
import Support from './Components/SupporetPage/Support.jsx'

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
