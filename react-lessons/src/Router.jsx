import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import PageNotFound from './pages/PageNotFound'

import Header from "./Header"
import CardDetail from './CardDetail'

const Router = () => {
  return (
    <div>

        <BrowserRouter>
        
        <Header/>

        <Routes>

            <Route path='/' element={<Home/>} />
            <Route path='/shop' element={<Shop/>}/>

            <Route path='/shop/:id' element={<CardDetail/>}/>

            <Route path='/blog' element={<Blog/>}/>
            <Route path='contact' element={<Contact/>} />
            <Route path='*' element={<PageNotFound/>} />

        </Routes>
        
        </BrowserRouter>
        
    </div>
  )
}

export default Router