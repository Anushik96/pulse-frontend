import Bredcramp from "@/components/Bredcramp";
import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";

import LocationIcon from '../public/icons/location.svg';
import MobileIcon from '../public/icons/mobile.svg';
import MessageIcon from '../public/icons/message.svg';

export default function ContuctUs() {
    return (
      <div className="contacts">
            <Bredcramp/>
            <h1 className="contacts__title">Contact Us</h1>
            <p className="contacts__desc">Become a Teacher and look your Achievement and something else will decide  and anymore</p>
            <div className="contacts__content">
              <div className="contacts__map">
                <h3 className="contacts__map--title">Get in touch with our customer supports</h3>
                <p className="contacts__map--desc">Have question about pricings , orders and products? Fill out the form and our product analytics and customer supports will be in touch directly </p>
                <div className="map">
                  <ContactMap/>
                </div>
                <p className="contacts__map--info"><LocationIcon/>4517 Washington Ave. Manchester, Kentucky 39495</p>
                <p className="contacts__map--info"><MobileIcon/>(480) 555-0103</p>
                <p className="contacts__map--info"><MessageIcon/>slaviko@gmailos.com</p>
              </div>
              <div className="contacts__form">
                <h3 className="contacts__form--title">Fill the following information</h3>
                <ContactForm/>
              </div>
            </div>
      </div>
    );
  }
  
  