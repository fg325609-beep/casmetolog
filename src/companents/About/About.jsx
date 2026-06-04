import React from 'react';
import { useTranslation } from 'react-i18next';
import "./About.scss";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section">
      <div className="container about-container">
        
        {/* Chap tomon: Amaliyot jarayonidan rasm */}
        <div className="about-left">
          <div className="image-wrapper">
            <img src="src/companents/img/about.jpg" alt="Kosmetologiya amaliyoti" />
          </div>
        </div>

        {/* O'ng tomon: Matnlar va havola */}
        <div className="about-right">
          <span className="subtitle">{t('about_us')}</span>
          <h2 className="title">{t('about_title')}</h2>
          
          <div className="description-box">
            <p className="desc-text text-muted">{t('about_desc_1')}</p>
            <p className="desc-text text-bold">{t('about_desc_2')}</p>
            <p className="desc-text">{t('about_desc_3')}</p>
          </div>

          <a href="#details" className="btn-details-link">
            {t('btn_more')} <span className="arrow">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;