import React, { useState } from 'react'

import users from './userdata';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const [emailInput,setEmailInput] = useState();
  const [passwordInput,setPasswordInput]=useState();
  const navigate = useNavigate();
  
  
  const YoxlaFunc = () =>{

    const Istifadeci = users.find((p)=> p.email ==emailInput)
   
    if(Istifadeci){
      if(Istifadeci.email==emailInput && Istifadeci.password==passwordInput){
        alert("Giris ugurludur")
        localStorage.setItem("giris",Istifadeci.name)
        navigate("/shop");
        window.location.reload(true);
        
        if(Istifadeci.admin==1){
          localStorage.setItem("adminlik",1);
        }else{
          localStorage.setItem("adminlik",0);
        }

      }
    }else{
      alert("Ugursuz alindi")
    }
    
    // console.log(Istifadeci);
    
  }

  return (
    <div>
      
      <>
  <div className="input-group mb-3 mt-5">
    <input
      type="text"
      className="form-control"
      placeholder="Gmail"
      aria-label="Gmail"
      aria-describedby="basic-addon1"
      onChange={(e)=>{setEmailInput(e.target.value)}}
    />
  </div>
  <div className="input-group mb-3">
    <input
      type="password"
      className="form-control"
      placeholder="Password"
      aria-label="Password"
      aria-describedby="basic-addon2"
      onChange={(e)=>{setPasswordInput(e.target.value)}}
    />
    <span className="input-group-text" id="basic-addon2">
      password
    </span>
  </div>
  <button onClick={YoxlaFunc}  className='btn btn-primary' >Submit</button>
</>

    </div>
  )
}

export default SignIn