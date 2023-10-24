import React from 'react'

const SingleCard = ({img,title,price}) => {
  return (
    <div className='col-12 col-md-4' >


<div className="card">
  <img src={img} height={340} width={50} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">
      {price}
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>

        
    </div>
  )
}

export default SingleCard