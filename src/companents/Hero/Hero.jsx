import React from 'react';
import { useTranslation } from 'react-i18next';
import "./hero.scss";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        {/* Chap tomon: Matnlar va Tugmalar */}
        <div className="hero-left">
          <span className="hero-subtitle">{t('hero_sub')}</span>
          <h1 className="hero-title">{t('hero_title')}</h1>
          <p className="hero-description">{t('hero_desc')}</p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary">{t('btn_reg')}</button>
            <button className="btn btn-secondary">{t('btn_more')}</button>
          </div>
        </div>

        {/* O'ng tomon: Kosmetologlar rasmi */}
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img src="src/companents/img/hero (2).png" alt="Kosmetologlar" className="hero-img" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;