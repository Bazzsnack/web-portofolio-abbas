import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/asset_abbas/logo.jpeg';
import './Header.css';

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <img src={logoImg} alt="Abbas Logo" className="logo-image" />
        </Link>
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>{t('nav', 'home')}</Link></li>
            {/* <li><Link to="/resume" onClick={closeMenu}>{t('nav', 'resume')}</Link></li> */}
            <li><Link to="/projects" onClick={closeMenu}>{t('nav', 'projects')}</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>{t('nav', 'contact')}</Link></li>
            <li className="lang-toggle-container">
               <div className="glass-toggle">
                 <span 
                   className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                   onClick={() => { toggleLang('en'); closeMenu(); }}
                 >EN</span>
                 <span className="lang-separator">|</span>
                 <span 
                   className={`lang-btn ${lang === 'id' ? 'active' : ''}`}
                   onClick={() => { toggleLang('id'); closeMenu(); }}
                 >ID</span>
               </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
