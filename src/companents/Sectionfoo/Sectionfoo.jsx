import React from 'react'
import { useTranslation } from 'react-i18next';
import "./Sectionfoo.scss"

const Sectionfoo = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='Sectionfoo'>
        <div className="Sectionfoo-left">
          <h1>{t('modelsSection.title')}</h1>
          <p className="subtitle">{t('modelsSection.subTitle')}</p>
          <p className="description">{t('modelsSection.description')}</p>
          <button>{t('modelsSection.buttonText')}</button>
        </div>
        <div className="Sectionfoo-right">
          {/* src/components/... yoki src/companents/... papka nomingizga qarab yo'lni tekshirib oling */}
          <img src="src/companents/img/Sectionfoo_img.jpg" alt="Models recruitment" />
        </div>
      </section>
    </>
  )
}

export default Sectionfoo;