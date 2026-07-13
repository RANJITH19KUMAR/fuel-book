import React from 'react'
import Navbars from '/src/Components/HomePage/Navbar/Navbars'
import RoleSelection from '/src/Components/HomePage/Login/RoleSelection.jsx'
import SignUpPage from '/src/Components/HomePage/Login/SignUpPage.jsx'
import { useNavigate } from 'react-router-dom'
const LoginSelection = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/selection')}>
       <Navbars/>
        <RoleSelection />
      
    </div>
  )
}

export default LoginSelection
