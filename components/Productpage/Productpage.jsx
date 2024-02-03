import React, { useEffect, useState } from 'react'
import './Productpage.css'
import Pht from './accets/fooddish3.jpg'
import { json, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Productpage() {
    const [productdetail, setproductdetain] = useState([]);
    const { id } = useParams();
    const objectIdTofind = id;
    useEffect(() => {
        axios.get('https://foodapp-api-nine.vercel.app/productdata')
            .then(async (res) => setproductdetain(res.data.find(product => product._id === objectIdTofind)))
    }, []);
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row gx-5">
                        {/* left side part  */}
                        <aside className="col-lg-6">
                            <div className="rounded-4 mb-3 d-flex justify-content-center mainproductimgdiv-class">

                                <img
                                    className="rounded-4 fit mainproductimg-class mainimage-class"
                                    src={`https://foodapp-api-nine.vercel.app/card/image/${productdetail.imageFilename}`}
                                />
                            </div>
                            <div className="d-flex justify-content-center mb-3">
                                <img
                                    width={60}
                                    height={60}
                                    className="rounded-2 border mx-1 miniproductimg-class subimage-class"
                                    src={`https://foodapp-api-nine.vercel.app/card/image/${productdetail.subimg1}`}
                                />
                                <img
                                    width={60}
                                    height={60}
                                    className="rounded-2 border mx-1 miniproductimg-class subimage-class"
                                    src={`https://foodapp-api-nine.vercel.app/card/image/${productdetail.subimg2}`}
                                />
                                <img
                                    width={60}
                                    height={60}
                                    className="rounded-2 border mx-1 miniproductimg-class subimage-class"
                                    src={`https://foodapp-api-nine.vercel.app/card/image/${productdetail.subimg3}`}
                                />
                                <img
                                    width={60}
                                    height={60}
                                    className="rounded-2 border mx-1 miniproductimg-class subimage-class"
                                    src={`https://foodapp-api-nine.vercel.app/card/image/${productdetail.subimg4}`}
                                />
                            </div>
                        </aside>

                        {/* right side part  */}
                        <main className="col-lg-6">
                            <div className="ps-lg-3 mt-3">
                                <h4 className="title text-dark mb-3">
                                    {productdetail.productname}
                                </h4>
                                <div className="mb-3">
                                    <span className="h5">${productdetail.price}</span>
                                    <span className="text-muted">/per item</span>
                                </div>
                                <p>{productdetail.description} </p>
                                <div className="row">
                                    <dt className="col-3">Type:</dt>
                                    <dd className="col-9">{productdetail.type}</dd>
                                    <dt className="col-3">Size</dt>
                                    <dd className="col-9">{productdetail.size}</dd>
                                    <dt className="col-3">Location</dt>
                                    <dd className="col-9">{productdetail.location}</dd>
                                    <dt className="col-3">Brand</dt>
                                    <dd className="col-9">{productdetail.brand}</dd>
                                </div>
                                <hr />
                                <a href="#" className="btn btn-warning shadow-0">
                                    Buy now
                                </a>
                                <a href="#" className="btn btn-primary shadow-0">
                                    Add to cart
                                </a>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Productpage
