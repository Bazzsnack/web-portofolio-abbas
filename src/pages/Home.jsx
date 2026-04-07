import { Link } from 'react-router-dom';
import CircleButton from '../components/CircleButton';
import profileImg from '../assets/asset_abbas/foto_profil.png';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import CVModal from '../components/CVModal';
import './Home.css';

export default function Home() {
  const { t } = useLanguage();
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <div className="home-container fade-in">
      <div className="home-content">
        <div className="profile-section slide-up">
          <div className="profile-image-mask">
            <img src={profileImg} alt="Abbas Profile" className="profile-img" />
          </div>
        </div>
        
        <div className="bio-section slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="greeting-sub">{t('home', 'hello')}</h2>
          <h1 className="greeting mb-4">{t('home', 'im')}</h1>
          
          <p className="bio-text">
            {t('home', 'bio')}
          </p>

          <button 
            onClick={() => setIsCvOpen(true)}
            className="action-btn slide-up" 
            style={{ 
              marginBottom: '30px', 
              padding: '12px 28px', 
              borderRadius: '30px', 
              backgroundColor: 'var(--color-resume)', 
              color: 'var(--bg-primary)', 
              border: 'none', 
              fontWeight: 'bold', 
              fontSize: '1rem', 
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              animationDelay: '0.4s'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            View / Download CV
          </button>

          <div className="navigation-buttons">
            <CircleButton to="/resume" label={t('nav', 'resume')} colorVar="--color-resume" delay="0s" />
            <CircleButton to="/projects" label={t('nav', 'projects')} colorVar="--color-projects" delay="0.4s" />
            <CircleButton to="/contact" label={t('nav', 'contact')} colorVar="--color-contact" delay="0.8s" />
          </div>
        </div>
      </div>
      <CVModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  );
}
