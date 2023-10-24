import React, { useEffect, useState } from 'react'

const Shop = () => {

  const [mode,setMode] = useState(localStorage.getItem("mode"));

  useEffect(()=>{
    if(localStorage.getItem("mode")===null){
      setMode("dark");
      localStorage.setItem("mode","dark");
    }

    document.body.className = localStorage.getItem("mode");
  })

  const modeFunc =() =>{
    if(mode==="light"){
      setMode("dark")
    }else{
      setMode("light");
    }

    localStorage.setItem("mode",mode);
    document.body.className = localStorage.getItem("mode");
  }

  return (
  //   <div><nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  //   <div className="container-fluid">
  //     <a className="navbar-brand" href="#">
  //       Navbar
  //     </a>
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-bs-toggle="collapse"
  //       data-bs-target="#navbarSupportedContent"
  //       aria-controls="navbarSupportedContent"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon" />
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
  //         <li className="nav-item">
  //           <a className="nav-link active home" aria-current="page" href="#">
  //             Home

  //               <div className="home-popup"></div>

  //           </a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#">
  //             Link
  //           </a>
  //         </li>
  //         <li className="nav-item dropdown">
  //           <a
  //             className="nav-link dropdown-toggle"
  //             href="#"
  //             role="button"
  //             data-bs-toggle="dropdown"
  //             aria-expanded="false"
  //           >
  //             Dropdown
  //           </a>
  //           <ul className="dropdown-menu">
  //             <li>
  //               <a className="dropdown-item" href="#">
  //                 Action
  //               </a>
  //             </li>
  //             <li>
  //               <a className="dropdown-item" href="#">
  //                 Another action
  //               </a>
  //             </li>
  //             <li>
  //               <hr className="dropdown-divider" />
  //             </li>
  //             <li>
  //               <a className="dropdown-item" href="#">
  //                 Something else here
  //               </a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link disabled" aria-disabled="true">
  //             Disabled
  //           </a>
  //         </li>
  //       </ul>
  //       <form className="d-flex" role="search">
  //         <input
  //           className="form-control me-2"
  //           type="search"
  //           placeholder="Search"
  //           aria-label="Search"
  //         />
  //         <button className="btn btn-outline-success" type="submit">
  //           Search
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // </nav>

  // <div className="bos"></div>
  // </div>

  <div className='shop'>
      <div className="navbar">
        
        <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
        </ul>

        <button onClick={modeFunc} className='btn btn-success' >Dark/Light</button>
      </div>

      <div className="wrapper">
        <h2>Bizim Haqqimizda</h2>
      </div>
  </div>

  )
}

export default Shop