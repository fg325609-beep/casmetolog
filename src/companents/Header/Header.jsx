import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="site-header">
      {/* Top Header */}
      <div className="header-top">
        <div className="container header-top__wrapper">
          
          <div className="logo-area">
            <div className="logo-circle">ValMari</div>
            <span className="logo-tagline">{t('tagline', 'Estetik kosmetologiya oʻquv markazi')}</span>
          </div>

          <div className="header-actions">
            <a href="tel:0800508622" className="phone-number">
              <span className="phone-icon">📞</span> 0 (800) 508-622
            </a>
            
            <div className="social-links">
              <a href="#" className="social-link fb">FB</a>
              <a href="#" className="social-link ig">IG</a>
            </div>

            {/* Tilni almashtirish Select elementi */}
            <div className="lang-switcher">
              <select 
                value={i18n.language || 'uz'} 
                onChange={(e) => changeLanguage(e.target.value)}
                className="lang-select"
              >
                <option value="uz">🇺🇿 UZ</option>
                <option value="ru">🇷🇺 RU</option>
                <option value="en">🇬🇧 EN</option>
              </select>
            </div>
          </div>

        </div>
      </div>

      {/* Main Navigation */}
      <nav className="header-nav">
        <div className="container">
          <ul className="nav-list">
            <li><a href="#courses">{t('courses')}</a></li>
            <li><a href="#webinars">{t('webinars')}</a></li>
            <li><a href="#video_lessons">{t('video_lessons')}</a></li>
            <li><a href="#blog">{t('blog')}</a></li>
            <li><a href="#about_us">{t('about_us')}</a></li>
            <li><a href="#price">{t('price')}</a></li>
            <li><a href="#schedule">{t('schedule')}</a></li>
            <li><a href="#promotions">{t('promotions')}</a></li>
            <li><a href="#shop">{t('shop')}</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;