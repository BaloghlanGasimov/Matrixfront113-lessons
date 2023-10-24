import React from 'react'
import SingleCard from './SingleCard'
import mydata from './data'

const App = () => {
  return (
    <div>

<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">

  {mydata.new_arrivals.map((item,i)=>{
            return(

                <div className="carousel-item active">
                    <SingleCard image={item.shown_img} />
                    
                </div>
            )
        })}

    
    
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        

    </div>
  )
}

export default App