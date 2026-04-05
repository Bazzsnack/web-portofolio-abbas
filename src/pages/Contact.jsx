import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState(''); // '' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target);
    // GANTI "YOUR_ACCESS_KEY_HERE" DENGAN KEY DARI WEB3FORMS
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div className="page-container fade-in">
      <div className="content-wrapper contact-wrapper">
        <div className="contact-info slide-up">
          <h1 className="contact-heading">{t('contact', 'title')}</h1>
          <p className="contact-desc">
            {t('contact', 'desc')}
          </p>
          
          <div className="contact-direct">
            <div className="direct-item">
              <span className="direct-label">{t('contact', 'email')}</span>
              <a href="mailto:haloabbasgfx@gmail.com" className="direct-link">haloabbasgfx@gmail.com</a>
            </div>
            <div className="direct-item">
              <span className="direct-label">{t('contact', 'wa')}</span>
              <a href="https://wa.me/6285852590376" target="_blank" rel="noopener noreferrer" className="direct-link">+62 858 5259 0376</a>
            </div>
          </div>
        </div>

        <div className="contact-form-container slide-up" style={{ animationDelay: '0.2s' }}>
          <form className="glass-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact', 'formName')}</label>
              <input type="text" name="name" id="name" placeholder={t('contact', 'namePlaceholder')} required disabled={status === 'submitting'} />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{t('contact', 'formEmail')}</label>
              <input type="email" name="email" id="email" placeholder={t('contact', 'emailPlaceholder')} required disabled={status === 'submitting'} />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">{t('contact', 'formMessage')}</label>
              <textarea name="message" id="message" rows="5" placeholder={t('contact', 'messagePlaceholder')} required disabled={status === 'submitting'}></textarea>
            </div>
            
            <button type="submit" className="submit-btn" style={{ backgroundColor: 'var(--color-contact)' }} disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : t('contact', 'send')}
            </button>
            
            {status === 'success' && <p className="form-alert success">✅ Message sent successfully!</p>}
            {status === 'error' && <p className="form-alert error">❌ Failed to send message. Try again later.</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
