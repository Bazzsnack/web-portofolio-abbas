import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-section">
            <h3>{t('nav', 'contact')}</h3>
            <p><a href="https://wa.me/6285852590376" target="_blank" rel="noopener noreferrer">{t('footer', 'phone')}: +62 858 5259 0376</a></p>
            <p><a href="mailto:haloabbasgfx@gmail.com">{t('footer', 'email')}: haloabbasgfx@gmail.com</a></p>
            <p>Jakarta, Indonesia</p>
          </div>
          
          <div className="footer-section">
            <h3>{t('footer', 'follow')}</h3>
            <p><a href="https://www.instagram.com/haloabbas.id?igsh=ejFqMmJkcnYwNWxk" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            <p><a href="https://www.tiktok.com/@haloabbas.id?_r=1&_t=ZS-95G7Yv4B9oA" target="_blank" rel="noopener noreferrer">TikTok</a></p>
            <p><a href="www.linkedin.com/in/nasril-abbas-muthoharun-ergi-pratama" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} By Abbas</p>
        </div>
      </div>
    </footer>
  );
}
