import React, { useState } from 'react'

import langData from './data/langData'

const Header = () => {


    if(localStorage.getItem("lang")===null){
        localStorage.setItem("lang","en");
    }

    const [mylangData,setMyLangData] = useState(localStorage.getItem("lang")==="en" ? langData.en : langData.az);

    const DilFunc = ()=>{
        if(localStorage.getItem("lang")==='en'){
            localStorage.setItem("lang","az")    
        }else{
            localStorage.setItem("lang","en")   
        }                              

        window.location.reload(true);    
    }

    // console.log(langData.az);

    // console.log(mylangData);
    
    
  return (
    <div>

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
          <a className="nav-link " aria-current="page" href="#">
            {mylangData.header.home}
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            {mylangData.header.shop}
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            {mylangData.header.about}
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            {mylangData.header.contact}
          </a>
        </li>
        
      </ul>

      <button onClick={DilFunc} >AZ/EN</button>
      
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

        
        
    </div>
  )
}

export default Header