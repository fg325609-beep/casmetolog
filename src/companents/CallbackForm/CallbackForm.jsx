import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CallbackForm.scss';

const CallbackForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState('');

  const BOT_TOKEN = "8765397823:AAG5pg9Fxxo3rjFyFQKZyyA2SU-II5Y2zk0";
  const CHAT_ID = "6660879147";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const message = `🚀 Yangi xabar!\n👤 Ismi: ${formData.name}\n📞 Tel: ${formData.phone}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="callback-section">
      <div className="callback-container">
        <h2 className="callback-title">{t('callback.title')}</h2>
        <p className="callback-subtitle">{t('callback.subtitle')}</p>

        <form className="callback-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={t('callback.namePlaceholder')}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder={t('callback.phonePlaceholder')}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
          <button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? '...' : t('callback.send')}
          </button>
        </form>

        {status === 'success' && <p className="status-msg success">{t('callback.success')}</p>}
        {status === 'error' && <p className="status-msg error">{t('callback.error')}</p>}
      </div>
    </section>
  );
};

export default CallbackForm;