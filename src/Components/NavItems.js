import React, { useEffect, useState } from 'react'
import { BrowserRouter , Route , Router, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import SingUp from '../Pages/SingUp'
import Login from '../Pages/Login'
import ProtectedRoute from './ProtectedRoute'

function NavItems() {
  return (
         <BrowserRouter>
         <Navbar/>
          <Routes> 
              {/* <Route path='/' element={ <ProtectedRoute> <Home/> </ProtectedRoute>}/> */}
              <Route path='/' element={<Home/>}/>
              <Route path='/About' element={<About/> }/>
              <Route path='/Contact' element={<Contact/>}/>
            <Route path='/SignUp' element={<SingUp/>}/> 
              <Route path='/Login' element={<Login/>}/>
          </Routes>
         </BrowserRouter>
  )
}

export default NavItems