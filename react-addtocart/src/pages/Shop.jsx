import React from 'react'
import mydata from '../data'
import SingleCard from '../SingleCard'

const Shop = () => {
  return (
    <div>

        <div className="row">

        {mydata.new_arrivals.map((item,i)=>{
            return(
                <SingleCard key={i}  alldata={item}  image={item.shown_img} title={item.name} price={item.price} />
            )
        })}
            
        </div>
        
    </div>
  )
}

export default Shop