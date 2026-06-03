import React, { useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView, useMotionValue, useSpring } from 'framer-motion'; // motion/react o'rniga barqaror framer-motion
import "./hero.scss";

// 1. CountUp komponentini shu yerning o'zida yaratamiz (Import xatosi bermaydi)
function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = num => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) return decimals.length;
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    latest => {
      const hasDecimals = maxDecimals > 0;
      const options = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };
      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);
      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') onStart();

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === 'function') onEnd();
        },
        delay * 1000 + duration * 1000
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', latest => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });
    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}

// 2. Asosiy Hero komponentimiz
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

      {/* Rasm ostidagi statistika qismi */}
      <div className="container">
        <div className="hero-bottom">
          
          {/* 1-blok */}
          <div className="stat-card">
            <div className="stat-number">
              <CountUp from={0} to={4000} duration={1.5} />
              <span className="plus">+</span>
            </div>
            <p className="stat-text">{t('stat_certs')}</p>
          </div>

          {/* 2-blok */}
          <div className="stat-card">
            <div className="stat-number">
              <CountUp from={0} to={3500} duration={1.5} />
              <span className="plus">+</span>
            </div>
            <p className="stat-text">{t('stat_models')}</p>
          </div>

          {/* 3-blok */}
          <div className="stat-card">
            <div className="stat-number">
              <CountUp from={0} to={1500} duration={1.5} />
              <span className="plus">+</span>
            </div>
            <p className="stat-text">{t('stat_students')}</p>
          </div>

          {/* 4-blok */}
          <div className="stat-card">
            <div className="stat-number">
              <CountUp from={0} to={5500} duration={1.5} />
              <span className="plus">+</span>
            </div>
            <p className="stat-text">{t('stat_clients')}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;