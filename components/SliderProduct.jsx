import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product";

export default function SliderProduct({slidesToShow, slidesToShowResponcive}) {
    const products = [
      {id: 1},
      {id: 2},
      {id: 3},           
      {id: 4},           
      {id: 4},           
      {id: 4},           
      {id: 4},           
      {id: 4},           
      {id: 4},           
      {id: 4},           
      {id: 4},           
    ];
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: slidesToShowResponcive,
            slidesToScroll: slidesToShowResponcive,
          }
        },
        {
          breakpoint: 567,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    };
    
    return (
      <div className="slider__products">
        <Slider {...settings}>
        {products.map((item, index) => (
            <Product
                key={index}
                status='out_of_stok'
              />
        ))}
      </Slider>
      </div>
    );
  };