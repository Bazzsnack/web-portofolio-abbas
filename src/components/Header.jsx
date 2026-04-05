import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/asset_abbas/logo.jpeg';
import './Header.css';

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo-container">
          <img src={logoImg} alt="Abbas Logo" className="logo-image" />
        </Link>
        
        <nav className="header-nav">
          <ul>
            <li><Link to="/">{t('nav', 'home')}</Link></li>
            <li><Link to="/resume">{t('nav', 'resume')}</Link></li>
            <li><Link to="/projects">{t('nav', 'projects')}</Link></li>
            <li><Link to="/contact">{t('nav', 'contact')}</Link></li>
            <li className="lang-toggle-container">
               <div className="glass-toggle">
                 <span 
                   className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                   onClick={() => toggleLang('en')}
                 >EN</span>
                 <span className="lang-separator">|</span>
                 <span 
                   className={`lang-btn ${lang === 'id' ? 'active' : ''}`}
                   onClick={() => toggleLang('id')}
                 >ID</span>
               </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
