import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {


  if(localStorage.getItem("giris")==undefined){
    localStorage.setItem("giris","signIn")
  }

  if(localStorage.getItem("adminlik")==undefined){
    localStorage.setItem("adminlik",0);
  }
  
  
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




      {localStorage.getItem("giris")=="signIn"
      ?
      <Link to='/signIn' >
      <button className='btn btn-primary me-2' >Sign In</button>
      </Link>
      :

      <>

<div className="dropdown">
  <button
    className="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    {localStorage.getItem("giris")}
  </button>
  <ul className="dropdown-menu">
    <li>
      <a className="dropdown-item" href="#">
        View Profile
      </a>
    </li>
    <Link to='/signIn'>
    <li>
      <a className="dropdown-item" href="#">
      Change User
      </a>
    </li>
    </Link>

    {localStorage.getItem("adminlik")==0
    ?
    <></>
    :
    <>
    <Link to='/dashboard'>
    <li>
      <a className="dropdown-item" href="#">
        Dashboard
      </a>
    </li>

    </Link>
    </>
  }
    


    <li onClick={()=>{localStorage.setItem("giris","signIn");window.location.reload(true)}} >
      <a className="dropdown-item" href="#">
        Log Out
      </a>
    </li>
  </ul>
</div>

      
      </>
      
      }
      
      
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