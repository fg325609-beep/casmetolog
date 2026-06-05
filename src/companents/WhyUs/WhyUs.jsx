import React from 'react';
import { useTranslation } from 'react-i18next';
import './WhyUs.scss';

const WhyUs = () => {
  const { t } = useTranslation();

  const cards = [
    { id: '01', title: t('whyUs.card1.title'), text: t('whyUs.card1.text'), type: 'white' },
    { id: '02', title: t('whyUs.card2.title'), text: t('whyUs.card2.text'), type: 'green' },
    { id: '03', title: t('whyUs.card3.title'), text: t('whyUs.card3.text'), type: 'white' },
  ];

  return (
    <section className="why-us">
      <div className="container">
        <h2 className="section-title">{t('whyUs.title')}</h2>
        <div className="why-us-grid">
          {cards.map((card) => (
            <div key={card.id} className={`why-card ${card.type}`}>
              <span className="bg-number">{card.id}</span>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;