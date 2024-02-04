import React, { useEffect, useState } from 'react'
import './Cards.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Cards() {
  const [productdetail, setproductdetain] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('https://foodapp-api-nine.vercel.app/productdata')
      .then(async  (res) =>  setproductdetain(res.data)
      );
  }, []);

  return (
    <>
      <div class="genratorcards-class">
        {productdetail.map(item => (
          <>
            <div class="card productcard-class" onClick={() => {navigate(`/product/${item._id}`)}
            }>
              <div class="divforimagecard-class">
                <img src={`${item.imageFilename}`} class="card-img-top imageincard-class" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.description}</p>
                <div class="pricesetcard-class">
                  <h7>${item.price}</h7>
                </div>
              </div>
            </div>
          </>
        ))}

      </div>
    </>
  )
}

export default Cards
