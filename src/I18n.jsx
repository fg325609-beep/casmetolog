import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // public/Locales ichidan json fayllarni yuklaydi
  .use(LanguageDetector) // Brauzer tilini aniqlaydi
  .use(initReactI18next) // i18next-ni React-ga bog'laydi
  .init({
    fallbackLng: 'uz',
    lng: 'uz', // Boshlang'ich til
    debug: false,

    backend: {
      // MUHIM: Rasmda papka nomi katta "Locales" bo'lgani uchun aniq manzil ko'rsatildi
      loadPath: '/Locales/{{lng}}.json', 
    },

    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;