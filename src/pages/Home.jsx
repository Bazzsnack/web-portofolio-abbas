import { Link } from 'react-router-dom';
import CircleButton from '../components/CircleButton';
import profileImg from '../assets/asset_abbas/foto_profil.png';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

export default function Home() {
  const { t } = useLanguage();

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

          <div className="navigation-buttons">
            <CircleButton to="/resume" label={t('nav', 'resume')} colorVar="--color-resume" delay="0s" />
            <CircleButton to="/projects" label={t('nav', 'projects')} colorVar="--color-projects" delay="0.4s" />
            <CircleButton to="/contact" label={t('nav', 'contact')} colorVar="--color-contact" delay="0.8s" />
          </div>
        </div>
      </div>
    </div>
  );
}
