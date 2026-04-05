import CircleButton from '../components/CircleButton';
import profileImg from '../assets/asset_abbas/foto_profil.png';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container fade-in">
      <div className="home-content">
        <div className="profile-section slide-up">
          <div className="profile-image-mask">
            <img src={profileImg} alt="Abbas Profile" className="profile-img" />
          </div>
        </div>
        
        <div className="bio-section slide-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="greeting">Hello,</h1>
          <h1 className="greeting mb-4">I'm Abbas</h1>
          
          <p className="bio-text">
            otomatisasi, dan pengembangan ide visual. Melalui laman ini, aku 
            mendokumentasikan karya, eksperimen, dan proyek yang pernah aku 
            kerjakan sebagai bentuk portofolio yang mencerminkan proses 
            belajar dan perkembangan kemampuanku.
          </p>

          <div className="navigation-buttons">
            <CircleButton to="/resume" label="Resume" colorVar="--color-resume" delay="0s" />
            <CircleButton to="/projects" label="Projects" colorVar="--color-projects" delay="0.4s" />
            <CircleButton to="/contact" label="Contact" colorVar="--color-contact" delay="0.8s" />
          </div>
        </div>
      </div>
    </div>
  );
}
