import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Navbar from './Navbar'
import Cart from './Cart'
import { CartProvider } from 'react-use-cart'

const AppRouter = () => {
  return (
    <div>

      <BrowserRouter>

      <CartProvider>

      <Navbar/>

      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/cart' element={<Cart/>} />
        
      </Routes>


      </CartProvider>
      
      
      </BrowserRouter>
      
    </div>
  )
}

export default AppRouter