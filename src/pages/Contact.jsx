import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();

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
          <form className="glass-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">{t('contact', 'formName')}</label>
              <input type="text" id="name" placeholder={t('contact', 'namePlaceholder')} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{t('contact', 'formEmail')}</label>
              <input type="email" id="email" placeholder={t('contact', 'emailPlaceholder')} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">{t('contact', 'formMessage')}</label>
              <textarea id="message" rows="5" placeholder={t('contact', 'messagePlaceholder')} required></textarea>
            </div>
            
            <button type="submit" className="submit-btn" style={{ backgroundColor: 'var(--color-contact)' }}>
              {t('contact', 'send')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
