import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Topsellproduct.css'
import circle from '../Landing/accets/circle image.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Topsellproduct() {
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
      <Swiper style={{ height: dyn_widthheight }}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='topsellslider-main-class' style={{ height: dyn_widthheight }} >
          <img src={circle} class="slidericon-all-fortopsell" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
          <img src={circle} class="slidericon-all-fortopsell" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
          <img src={circle} class="slidericon-all-fortopsell" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
          <img src={circle} class="slidericon-all-fortopsell" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
          <img src={circle} class="slidericon-all-fortopsell" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
        </SwiperSlide>
        <SwiperSlide className='topsellslider-main-class' style={{ height: dyn_widthheight }} >
          <img src={circle} class="slidericon-all-fortopsell" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
          <img src={circle} class="slidericon-all-fortopsell" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
          <img src={circle} class="slidericon-all-fortopsell" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
          <img src={circle} class="slidericon-all-fortopsell" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
          <img src={circle} class="slidericon-all-fortopsell" style={{ width: dyn_widthheight, height: dyn_widthheight }} alt="..." />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
