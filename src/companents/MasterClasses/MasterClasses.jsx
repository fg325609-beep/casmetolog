import React from 'react';
import { useTranslation } from 'react-i18next';
import './MasterClasses.scss';

const MasterClasses = () => {
  const { t } = useTranslation();

  return (
    <section className="master-classes">
      <div className="container">
        <h2 className="section-title">{t('masterClasses.title')}</h2>
        <p className="section-subtitle">{t('masterClasses.subtitle')}</p>

        <div className="slider-wrapper">
          {/* Chapga o'tkazish o'qi */}
          <button className="arrow-btn prev-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="classes-grid">
            {/* 1-Karta */}
            <div className="class-card">
              <div className="card-image">
                <img src="src/companents/img/master.jpg" alt="Master Class 1" />
              </div>
              <div className="card-body">
                <div className="card-info">
                  <span className="date">{t('masterClasses.card1.date')}</span>
                  <h3 className="card-title">
                    {t('masterClasses.card1.title')} <span className="title-arrow">➔</span>
                  </h3>
                  <p className="author">
                    {t('masterClasses.trainer')}: {t('masterClasses.card1.trainerName')}
                  </p>
                  <div className="bottom-arrow">➔</div>
                </div>
                <div className="card-badge">
                  <div className="price">{t('masterClasses.card1.price')}</div>
                  <button className="action-btn">➔</button>
                </div>
              </div>
            </div>

            {/* 2-Karta */}
            <div className="class-card">
              <div className="card-image">
                <img src="src/companents/img/master (2).jpg" alt="Master Class 2" />
              </div>
              <div className="card-body">
                <div className="card-info">
                  <span className="date">{t('masterClasses.card2.date')}</span>
                  <h3 className="card-title">{t('masterClasses.card2.title')}</h3>
                  <p className="author">
                    {t('masterClasses.speakers')}: {t('masterClasses.card2.speakersNames')}
                  </p>
                </div>
                <div className="card-badge">
                  <div className="price free">{t('masterClasses.free')}</div>
                  <button className="action-btn">➔</button>
                </div>
              </div>
            </div>
          </div>

          {/* O'ngga o'tkazish o'qi */}
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

export default MasterClasses;