import React from 'react'
import "./Sectiontheare.scss"
import { useTranslation } from 'react-i18next';

const Sectiontheare = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='Sectiontheare'>
        {/* Sarlavha: i18n orqali tarjima qilinadi */}
        <h1 className='title'>{t('oddiy')}</h1>
        
        <div className="cards">
          <div className="card">
            <img src="src/companents/img/Курсы косметологии.png" alt="Курсы косметологии" />
          </div>
          <div className="card">
            <img src="src/companents/img/Онлайн обучение.png" alt="Онлайн обучение" />
          </div>
          <div className="card">
            <img src="src/companents/img/Карточка.png" alt="Мастер-классы" />
          </div>
          <div className="card">
            <img src="src/companents/img/Карточка (1).png" alt="Расписание" />
          </div>
          <div className="card">
            <img src="src/companents/img/Карточка (2).png" alt="Акции" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Sectiontheare;