import React from 'react'
import { useParams } from 'react-router-dom'
import data from './data';
const CardDetail = () => {

    const {id} = useParams();
    const product = data.find((p)=> p.id==id)

  return (
    <div className='d-flex'>

    <img src={product.shown_img} alt="" />
    <p style={{"color":"red"}}>{product.price}$</p>
    <p>{product.desc}</p>

    </div>
  )
}

export default CardDetail