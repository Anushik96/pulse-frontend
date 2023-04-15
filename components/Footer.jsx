import Link from 'next/link';
import Subscribtion from './Subscribtion';

import LocationIcon from '../public/icons/location.svg';
import MobileIcon from '../public/icons/mobile.svg';
import MessageIcon from '../public/icons/message.svg';
import FooterLogoIcon from '../public/icons/footerLogo.svg';
import InstagramIcon from '../public/icons/instagram.svg';
import FacebookIcon from '../public/icons/facebook.svg';
import TelegramIcon from '../public/icons/telegram.svg';

function Footer() {
    return (
      <footer className='footer'>
          <div className='footer__content'>
            <div className="footer__item">
              <FooterLogoIcon className="footer__logo"/>
              <p className='footer--desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation </p>  
              <h4 className='footer__signup--title'>Sign up our newsletter</h4>
              <div className='footer__signup'>
                <Subscribtion 
                  withIcon={true}
                />
              </div>
            </div>
            <div className="footer__item footer__menu">
              <nav>
                <p className='footer__item--title'>Categories</p>
                <ul className='footer__list'>
                  <li><Link className='footer__link' href="/">Corks</Link></li>
                  <li><Link className='footer__link' href="/about">Covers</Link></li>
                  <li><Link className='footer__link' href="/contact">Filtrers</Link></li>
                  <li><Link className='footer__link' href="/contact">Yeasts</Link></li>
                  <li><Link className='footer__link' href="/contact">Bottles</Link></li>
                  <li><Link className='footer__link' href="/contact">Flavoring agents</Link></li>
                  <li><Link className='footer__link' href="/contact">Dairy equipment</Link></li>
                  <li><Link className='footer__link' href="/contact">Concentrates</Link></li>
                  <li><Link className='footer__link' href="/contact">Juicing accessories</Link></li>
                  <li><Link className='footer__link' href="/contact">Wax</Link></li>
                </ul>
              </nav>
              <nav>
                <p className='footer__item--title'>Company</p>
                <ul className='footer__list'>
                  <li><Link className='footer__link' href="/">Explore Products</Link></li>
                  <li><Link className='footer__link' href="/about">About Us</Link></li>
                  <li><Link className='footer__link' href="/contact">Contacts</Link></li>
                  <li><Link className='footer__link' href="/contact">Terms & Condtions</Link></li>
                  <li><Link className='footer__link' href="/contact">Privacy & Policy</Link></li>
                </ul>
              </nav>
            </div>
            <div className="footer__item">
                <div className='footer__info'>
                  <p className="footer__info--title">Location</p>
                  <p className="footer__info--icon">
                    <LocationIcon/>
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </p>
                </div>
                <div className='footer__info'>
                  <p className="footer__info--title">Contacts</p>
                  <p className="footer__info--icon"><MobileIcon/>(480) 555-0103</p>
                  <p className="footer__info--icon"><MessageIcon/>slaviko@gmailos.com</p>
                </div>
            </div>
          </div>
          <div className="footer__bottom">
              <p className="footer__bottom--text"><span>by</span> HS Rocket</p>
              <p className="footer__bottom--info">&copy; 2023 Pulse LLC . All rights reserved </p>
              <div className="footer__bottom--social">
                <Link href="#">
                    <InstagramIcon/>
                </Link>
                <Link href="#">
                    <FacebookIcon/>
                </Link>
                <Link href="#">
                    <TelegramIcon/>
                </Link>
              </div>
          </div>
      </footer>
    );
  }
  
  export default Footer;
  