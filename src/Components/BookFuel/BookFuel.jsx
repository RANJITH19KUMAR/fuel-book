import React from 'react'
import Navbars from '/src/Components/HomePage/Navbar/Navbars.jsx'
import Order from '/src/Components/BookFuel/Order/Order.jsx'
import Payment from './Order/pages/Payment'
import Success from './BookSuccess/Success'

const BookFuel = () => {
  return (
    <div className='booking-page'>
        <Navbars/>
      <Order/>
      
      {/* <Payment/> */}
      
    </div>
  )
}

export default BookFuel
