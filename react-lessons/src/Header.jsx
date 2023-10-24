import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

  const [qiymet,setQiymet] = useState(1);
  
  const deyis = ()=>{
    setQiymet(2);
  }

  useEffect(()=>{
    console.log(2);
  },[])

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
            
            
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/shop">
            Shop
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/blog">
            Blog
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/contact">
            Contact
          </a>
        </li>
        
        
           
        
      </ul>

    <button className='btn btn-primary me-2' onClick={()=>{localStorage.setItem("langMode","az");window.location.reload(true)}} >AZ</button>
    <button className='btn btn-primary'onClick={()=>{localStorage.setItem("langMode","en");window.location.reload(true)}} >EN</button>


    <button onClick={deyis} >click</button>
      <div className="d-flex">
        
        <a href="/cart">

        <button className="btn btn-outline-success" type="submit">
            .
        </button>

        </a>
      </div>
    </div>
  </div>
</nav>

  )
}

export default Header