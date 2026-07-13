import React from 'react'
import '/src/Components/Landing.css'
import Navbars from '/src/Components/HomePage/Navbar/Navbars'
import Home from '/src/Components/HomePage/Home/Home'
import Work from '/src/Components/HomePage/Work/Work'
import Footer from '/src/Components/HomePage/Footer/Footer'
import Acheive from '/src/Components/HomePage/Achieve/Acheive'
import FuelPrice from '/src/Components/HomePage/fuelPrice/FuelPrice'
import WhyChoose from '/src/Components/HomePage/ChooseFuel/WhyChoose'
import Customer from '/src/Components/HomePage/Customer/Customer'

const Landing = () => {
  return (
    <div>
      <div className='Landing-page d-flex flex-column min-vh-100'>
      <Navbars/>
      <main className='flex-grow-1'>
      <Home/>
      {/* <Acheive/> */}
      <FuelPrice/>
      <WhyChoose/>
      <Customer/>
      <Work/>
      </main>
      <Footer/>
    </div>
    </div>
  )
}

export default Landing
