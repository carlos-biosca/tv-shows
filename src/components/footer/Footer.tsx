import { ReactElement } from 'react';
import { ImFacebook } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import './Footer.scss'

const Footer = (): ReactElement => {
  return ( 
    <div className='footer'>
      <div className='footer__container'>
        <p className='footer__text'>©2024 by <a href="https://www.linkedin.com/in/carlos-biosca/" target='_blank'>Carlos</a></p>
        <ul className='footer__links'>
          <li className='footer__link'>
            <a href='https://www.facebook.com/' target='_blank'><ImFacebook color='black' size={20}/></a>
          </li>
          <li className='footer__link'>
            <a href='https://www.instagram.com/' target='_blank'><SiInstagram color='black' size={20}/></a>
            </li>
          <li className='footer__link'>
            <a href='https://x.com/' target='_blank'><FaTwitter color='black' size={20}/></a>
            </li>
          <li className='footer__link'>
            <a href='https://www.youtube.com/' target='_blank'><FaYoutube color='black' size={20}/></a>
          </li>
        </ul>
      </div>
    </div> 
  );
}

export default Footer;