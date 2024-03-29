import React, { useEffect, useState } from 'react'
import Food from './accets/fooddish3.jpg'
import Food1 from './accets/myimage.jpg'
import './Heroimage.css'



function Heroimage() {
  return (
    <div id="carouselExampleIndicators" className="carousel heroimage-maindiv-class slide" data-bs-ride="carousel">
      <div className="carousel-indicators" >
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Food1} className="d-block w-100 setheroimage-class" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={Food} className="d-block w-100 setheroimage-class" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Food1} className="d-block w-100 setheroimage-class" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>


    //   <img src={Food1} className="d-block w-100" alt="..."/> 

  )
}

export default Heroimage
