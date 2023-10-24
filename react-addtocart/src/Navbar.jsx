import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg  bg-dark navbar-dark">
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
        <NavLink to='/'>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        
        </NavLink>
        <NavLink to='/shop'>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Shop
          </a>
        </li>
        
        </NavLink>
        
        
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
      <div className="d-flex" role="search">
       <NavLink to='/cart' >

       <button className='btn btn-success' >Cart</button>
        
       </NavLink>
      </div>
    </div>
  </div>
</nav>

        
    </div>
  )
}

export default Navbar