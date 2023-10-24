import React from 'react'

const SingleCard = ({id,title,img,desc}) => {
  return (
    <div className='col-12 col-md-6 col-lg-3'>
        <div className="card" >
  <img src={img} height={180} width={240}  alt="..." />

  <div className="card-body">

    <h5 className="card-title">{title}</h5>
    
    <p className="card-text">
      {desc}
    </p>
    <a href={`/shop/${id}`} className="btn btn-primary">
      Detail
    </a>
  </div>
</div>

    </div>
  )
}

export default SingleCard