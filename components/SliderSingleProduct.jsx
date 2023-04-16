import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
const SingleSliderProduct = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);
 const images= [
    '/images/slider/slider1.png',
    '/images/slider/slider2.png',
    '/images/slider/slider3.png',
    '/images/slider/slider4.png',
 ]
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows:true,
    asNavFor:nav1,
    ref:slider2,
    swipeToSlide:true,
    focusOnSelect:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  };
  return (
    <div>
      <Slider 
        className="mainSlider"
        asNavFor={nav2} 
        ref={slider1} 
        arrows={false}
        >
        {images.map((item, i) => {
            return (
                <Image key={i} src={item} alt="" />
            )
        })}
      </Slider>

      <Slider
        className="asForNavSlider"
        {...settings}
      >
       {images.map((item, i) => {
            return (
                <Image key={i} src={item} alt="" />
            )
        })}
      </Slider>
    </div>
  );
};

export default SingleSliderProduct;
