import React, { useState } from 'react'

const App = () => {

  const [number,setNumber] = useState(5)

  const artirFunc=()=>{
    setNumber(number+1)
  }

  const azaltFunc=()=>{

    if(number>0){
      setNumber(number-1)
    }
    
  }
  return (

    

    <div>

      <button onClick={azaltFunc} >-</button>
      {number}

      <button onClick={artirFunc}>+</button>

    </div>
  )
}

export default App