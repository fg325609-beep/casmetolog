import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-left">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.29854747214!2d36.223594876878345!3d50.00574161860682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0e3f890635d%3A0x6739922c0941829e!2zS2xvY2hrb3Zza2EgU3QsIDMsIEtoYXJraXYsIEtoYXJraXYgT2JsYXN0LCBVa3JhaW5lLCA2MTAwMA!5e0!3m2!1sen!2s!4v1717595000000!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe >
      </div>

      <div className="footer-right">
        <div className="footer-content">
          <div className="logo-section">
             <div className="footer-logo">ValMari</div>
          </div>

          <div className="contact-info">
            <a href="tel:0800508622" className="phone">0 (800) 508-622</a>
            <p className="address">{t('footer.address')}</p>
          </div>

          <div className="links-grid">
            <div className="links-col">
              <a href="#">{t('footer.links.courses')}</a>
              <a href="#">{t('footer.links.webinars')}</a>
              <a href="#">{t('footer.links.videoLessons')}</a>
              <a href="#">{t('footer.links.priceList')}</a>
              <a href="#">{t('footer.links.schedule')}</a>
            </div>
            <div className="links-col">
              <a href="#">{t('footer.links.promotions')}</a>
              <a href="#">{t('footer.links.aboutUs')}</a>
              <a href="#">{t('footer.links.blog')}</a>
              <a href="#">{t('footer.links.shop')}</a>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
          </div>

          <div className="footer-bottom">
            <a href="#" className="policy">{t('footer.policy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;