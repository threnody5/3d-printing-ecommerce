import { Link } from 'react-router-dom';
import facebookLinkImage from '../social-media-icons/facebook.png';
import twitterLinkImage from '../social-media-icons/twitter.png';
import pinterestLinkImage from '../social-media-icons/pinterest.png';
import instagramLinkImage from '../social-media-icons/instagram.png';
import './styles.css';

const Footer = () => {
  return (
    <>
      <footer className='footer-container'>
        <div className='footer-container__contents'>
          <div className='footer-container__block'>
            <h4 className='footer-container__header'>About Maker Market</h4>
            <p className='footer-container__paragraph'>
              Maker Market is a direct to consumer 3D printing seller, offering
              prompt shipping and competitive pricing.{' '}
            </p>
            <p>
              Questions? <a href=''>support@makermarket.com</a>{' '}
            </p>
          </div>
          <div className='footer-container__block'>
            <h4 className='footer-container__header'>Help</h4>
            <div className='footer-container__link-list'>
              <Link to=''>Shipping</Link>
              <Link to=''>Return Policy</Link>
              <Link to=''>FAQ</Link>
              <Link to=''>Contact Us</Link>
            </div>
          </div>
          <div className='footer-container__block'>
            <h4 className='footer-container__header'>Follow Us</h4>
            <a href='https://www.facebook.com'>
              <img
                src={facebookLinkImage}
                alt='Facebook'
              />
            </a>
            <a href='https://www.twitter.com'>
              <img
                src={twitterLinkImage}
                alt='Twitter'
              />
            </a>
            <a href='https://www.pinterest.com'>
              <img
                src={pinterestLinkImage}
                alt='Pinterest'
              />
            </a>
            <a href='https://www.instagram.com'>
              <img
                src={instagramLinkImage}
                alt='Instagram'
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
