import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Sectionone.scss";

const Sectionone = () => {
  const { t } = useTranslation();

  // Kartalar ma'lumotlarini massiv ko'rinishida saqlaymiz, shunda kod qisqaradi
  const courses = [
    {
      id: 1,
      typeClass: "purple",
      title: t('course1_title'),
      date: t('course1_date'),
      badge: t('badge_offline'),
      img: "src/companents/img/odam.png" // O'zingiz kiritgan rasm manzili
    },
    {
      id: 2,
      typeClass: "green",
      title: t('course2_title'),
      date: t('course2_date'),
      badge: t('badge_online'),
      img: "src/companents/img/odam.png"
    },
    {
      id: 3,
      typeClass: "cyan",
      title: t('course3_title'),
      date: t('course3_date'),
      badge: t('badge_masterclass'),
      img: "src/companents/img/odam (2).png"
    }
  ];

  return (
    <section className="sectionone">
      <div className="container">
        
        {/* Bo'lim sarlavhasi */}
        <div className="title">
          <h1>{t('courses_for_medics')}</h1>
        </div>

        {/* Kurslar ro'yxati */}
        <div className="cards">
          {courses.map((course) => (
            <div key={course.id} className={`card ${course.typeClass}`}>
              
              {/* Yuqori qism: Shifokorlar uchun yozuvi va qushcha logosi */}
              <div className="card-top">
                <h3>{t('courses_for_medics')}</h3>
                <img src="src/companents/img/qush.svg" alt="Qush" className="bird-icon" />
              </div>

              {/* Kurs nomi, Formati va Sanasi */}
              <div className="card-middle">
                <h2 className="course-title">{course.title}</h2>
                <div className="badge-date-row">
                  <span className="badge">{course.badge}</span>
                  <span className="date">{course.date}</span>
                </div>
              </div>

              {/* Qisqa tavsiflar va Kurs rasmi (Mulyaj) */}
              <div className="card-body">
                <ul className="desc-list">
                  <li>{t('course1_desc_line1')}</li>
                  <li>{t('course1_desc_line2')}</li>
                  <li>{t('course1_desc_line3')}</li>
                  <li>{t('course1_desc_line4')}</li>
                </ul>
                <div className="image-box">
                  <img src={course.img} alt="Course Preview" />
                </div>
              </div>

              {/* Bo'sh joylar soni */}
              <p className="seats-info">{t('seats_available')}</p>

              {/* Pastki tugmalar qismi */}
              <div className="card-actions">
                <button className="btn-reg">{t('btn_register_course')}</button>
                <button className="btn-more">{t('btn_details')}</button>
              </div>

            </div>
          ))}
        </div>
        <span className='box'>
            <li className='bloom'></li>
            <li className='bloom'></li>
            <li className='bloom'></li>
            <li className='bloom'></li>
            <li className='bloom'></li>
        </span>

      </div>
    </section>
  );
};

export default Sectionone;