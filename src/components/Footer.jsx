import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Phone / WA</h4>
          <a href="https://wa.me/6285852590376" target="_blank" rel="noopener noreferrer">+62 858 5259 0376</a>
        </div>
        <div className="footer-section">
          <h4>Email</h4>
          <a href="mailto:haloabbasgfx@gmail.com">haloabbasgfx@gmail.com</a>
        </div>
        <div className="footer-section">
          <h4>Follow Me</h4>
          <div className="social-links">
            <a href="https://www.instagram.com/haloabbas.id?igsh=ejFqMmJkcnYwNWxk" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@haloabbas.id?_r=1&_t=ZS-95G7Yv4B9oA" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://www.linkedin.com/in/nasril-abbas-muthoharun-ergi-pratama" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} By Abbas</p>
        </div>
      </div>
    </footer>
  );
}
