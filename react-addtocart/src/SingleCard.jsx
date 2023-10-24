import React from 'react'
import { useCart } from "react-use-cart";

const SingleCard = ({alldata,image,title,price}) => {

    const { addItem } = useCart();

  return (
    <div  className='col-12 col-md-4'>
        <div className="card" >
  <img src={image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">
      {price}
    </p>
    <button className='btn btn-warning'  onClick={() => addItem(alldata)} >Add to cart</button>
  </div>
</div>

    </div>
  )
}

export default SingleCard