import Subscribtion from "../components/Subscribtion";
import useColorizeWord from '../hooks/useColorizeWord';

// images
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import comingSoonImg from '../assets/images/comingSoon.png';
import { ReactComponent as InstagramIcon } from '../assets/icons/instagram.svg';
import { ReactComponent as TelegramIcon } from '../assets/icons/telegram.svg';
import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/location.svg';
import { ReactComponent as MobileIcon } from '../assets/icons/mobile.svg';
import { ReactComponent as MessageIcon } from '../assets/icons/message.svg';


function ComingSoonContainer() {
  const text = useColorizeWord('Get notified when we launch', 1, 'colloeredWord');

  return (
      <div className="comingSoon">
          <div className="comingSoon_info">
            <Logo/>
            <div>
              <p className="comingSoon_text">Coming Soon</p>
              <h1 className="comingSoon_title" dangerouslySetInnerHTML={{ __html: text }}></h1>
              <p className="comingSoon_desc">Lorem ipsum dolor sit amet consectetur. Scelerisque tristique cursus dui feugiat sollicitudin turpis. Vestibulum ultrices enim nunc at volutpat. Adipiscing nunc luctus amet aliquam. Luctus nulla amet amet placerat porttitor at ac egestas sit. Vitae tellus in diam aenean vitae dolor tellus et. Curabitur semper tristique dictum fermentum lobortis odio leo. Aliquam scelerisque tristique pulvinar varius.</p>
              <Subscribtion/>
              <div className="comingSoon_social">
                  <a href="/instagram"><InstagramIcon/></a>
                  <a href="/telegram"><TelegramIcon/></a>
                  <a href="/facebook"><FacebookIcon/></a>
              </div>
            </div>
           
            <div className="comingSoon_footer">
              <div>
                <p className="comingSoon_footer--title">Location</p>
                <p className="comingSoon_footer--info">
                  <LocationIcon/>
                  4517 Washington Ave. Manchester, Kentucky 39495
                </p>
              </div>
              <div>
                <p className="comingSoon_footer--title">Contacts</p>
                <p className="comingSoon_footer--info"><MobileIcon/>(480) 555-0103</p>
                <p className="comingSoon_footer--info"><MessageIcon/>slaviko@gmailos.com</p>
              </div>
            </div>  
          </div>
          <div className="comingSoon_img">
            <img src={comingSoonImg} alt="Coming soon"  width={696} height={500}/>
          </div>
      </div>
    );
  }
  
  export default ComingSoonContainer;
  