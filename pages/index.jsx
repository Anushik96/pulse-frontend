import SimpleSlider from "@/components/Slider";
import MainButton from "@/components/Button";
import HomeProduct from "@/components/HomeProducts";
import SliderPartner from "@/components/SliderPartner";

export default function Home() {
 
  const images = [
    "/images/slider.png",
    "/images/slider.png",
    "/images/slider.png",
    "/images/slider.png",
  ];
  const partnerImg = [
    "/images/partner.png",
    "/images/partner.png",
    "/images/partner.png",
    "/images/partner.png",
    "/images/partner.png",
    "/images/partner.png",
    "/images/partner.png",
  ];
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header--info">
          <h1 className="home__header--title">Make your shopping more perfect</h1>
          <p className="home__header--desc">Nunc erat mauris, hendrerit pharetra eget volutpat lorem varius. Lorem urna amet natoque nunc. Hendrerit viverra eu urna sapien accumsan at ornare. </p>
          <MainButton 
            text='Shop Now'
            withIcon={true}
          />
        </div>
        <div className="home__header--slider">
          <SimpleSlider images={images}/> 
        </div>
      </div>
      <div className="homeProducts">
        <HomeProduct/>
        <HomeProduct/>
        <HomeProduct/>
        <HomeProduct/>
      </div>
      <div className="home__partners">
        <h3 className="home__partners--title">We trust</h3>
        <div>
           <SliderPartner images={partnerImg}/> 
        </div>
      </div>
    </div>
  );
}

