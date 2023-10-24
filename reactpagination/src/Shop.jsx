import React, { useState } from 'react'
import Header from './Header'
import mydata from './data/data'
import SingleCard from './SingleCard'
const Shop = () => {


    const [start,setStart] = useState(0);
    const [end,setEnd] = useState(6)
    
    
  return (
    <div>

    <Header/>


<div className="row">

    {mydata.slice(start,end).map((item,i)=>{
        return(
            <SingleCard img={item.image} title={item.name} price={item.price} />
        )
    })}
    </div>

    <div className="buttons">
                           
        {mydata.slice(0,(mydata.length/6)+1).map((item,i)=>{
            return(
                <button className='btn btn-warning ms-2 ' onClick={()=>{
                    setStart(6*i);  
                    setEnd((6*i)+6);
                }}  >{i+1}</button>
            )
        })}
        
    </div>


    </div>
  )
}

export default Shop