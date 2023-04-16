import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default function SliderPartner({ images }) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
      <Slider {...settings}>
        {images.map((image, i) => (
            <div key={i}  className="partner-img">
              <img src="/icons/partner.svg" alt="partner"/>   
              <p>We trust</p>
            </div>
        ))}
      </Slider>
    );
  };