import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Aksiya.scss";

const Aksiya = () => {
  const { t } = useTranslation();

  return (
    <section className='Aksiya'>
      <div className="container">
        <h2 className='section-title'>{t('offers.title')}</h2>
        
        <div className="slider-wrapper">
          {/* Chapga o'tkazish tugmasi */}
          <button className="arrow-btn prev-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Rasmlar (Kartalar) tarmog'i */}
          <div className="offers-grid">
            <div className="offer-card">
              <img src="src/companents/img/Aksiya.jpg" alt="Aksiya 1" />
            </div>
            <div className="offer-card">
              <img src="src/companents/img/Aksiya (2).jpg" alt="Aksiya 2" />
            </div>
            <div className="offer-card">
              <img src="src/companents/img/Aksiya (3).jpg" alt="Aksiya 3" />
            </div>
          </div>

          {/* O'ngga o'tkazish tugmasi */}
          <button className="arrow-btn next-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Slayder nuqtalari (Dots) */}
        <div className="slider-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Aksiya;