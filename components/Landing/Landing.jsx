import React, { useEffect, useState } from 'react'
import './Landing.css'
import fooddish1 from './accets/pro.photo.jpg'
import fooddish2 from './accets/fooddish 4k.jpg'
import fooddish3 from './accets/fooddish3.jpg'
import circle from './accets/circle image.png'

function Landing() {
    // find windows height and width 
    // windowSize[0] == width
    // windowSize[1] == height
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    // variables for slider icon 
    const dyn_widthheight = windowSize[0] / 8;



return (
    <>
        {/* main page  */}
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div style={{ height: windowSize[1] - 100 }} className="carousel-item active ">
                    <img src={fooddish1} className="d-block w-100 fooddish-all"
                        alt="..." />
                </div>
                <div style={{ height: windowSize[1] - 100 }} className="carousel-item ">
                    <img src={fooddish2} className="d-block w-100 fooddish-all" alt="..." />
                </div>
                <div style={{ height: windowSize[1] - 100 }} className="carousel-item ">
                    <img src={fooddish3} className="d-block  w-100 fooddish-all" alt="..." />
                </div>
            </div>
        </div>

        {/* slider */}
        <div style={{ width: windowSize[0], bottom: windowSize[0] / 35 }} id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
            <div className="carousel-inner">
                <div className="carousel-item active slidermaindiv">
                    <img src={circle} className="slidericon-all" style={{width: dyn_widthheight, height: dyn_widthheight}} alt="..." />
                    <img src={fooddish1} className="slidericon-all" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
                    <img src={fooddish1} className="slidericon-all" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
                    <img src={fooddish1} className="slidericon-all" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
                    <img src={fooddish1} className="slidericon-all" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
                </div>
                <div className="carousel-item slidermaindiv">
                    <img src={fooddish1} className="slidericon-all" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
                    <img src={fooddish1} className="slidericon-all" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
                    <img src={fooddish1} className="slidericon-all" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
                    <img src={fooddish1} className="slidericon-all" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
                    <img src={fooddish1} className="slidericon-all" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
                </div>
                <div className="carousel-item slidermaindiv">
                    <img src={fooddish1} className="slidericon-all" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
                    <img src={fooddish1} className="slidericon-all" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
                    <img src={fooddish1} className="slidericon-all" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
                    <img src={fooddish1} className="slidericon-all" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
                    <img src={fooddish1} className="slidericon-all" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    </>
)
}
export default Landing
