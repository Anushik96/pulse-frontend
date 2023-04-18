import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default function SimpleSlider({ images }) {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    return (
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image} alt={image} width={500} height={500}/>
          </div>
        ))}
      </Slider>
    );
  };