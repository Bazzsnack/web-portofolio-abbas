import { Link } from 'react-router-dom';
import logoImg from '../assets/asset_abbas/logo.jpeg';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo-container">
          <img src={logoImg} alt="Abbas Logo" className="logo-image" />
        </Link>
        
        <nav className="header-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
