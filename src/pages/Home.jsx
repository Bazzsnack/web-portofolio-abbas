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
            I am a Digital Business student specializing in UI/UX Design, Video Production, 
            and Database Management. Through this site, I document my work—ranging from 
            interactive web development and system automation to commercial visual production. 
            I believe that a successful digital project requires a perfect blend of strong 
            visual appeal and well-structured data.
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
