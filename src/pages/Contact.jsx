import './Contact.css';

export default function Contact() {
  return (
    <div className="page-container fade-in">
      <div className="content-wrapper contact-wrapper">
        <div className="contact-info slide-up">
          <h1 className="contact-heading">Let's Talk!</h1>
          <p className="contact-desc">
            Tertarik untuk berkolaborasi atau punya pertanyaan soal karya-karyaku? 
            Pintu diskusiku selalu terbuka. Jangan ragu untuk hubungi lewat form ini 
            atau direct contact di bawah!
          </p>
          
          <div className="contact-direct">
            <div className="direct-item">
              <span className="direct-label">Email</span>
              <a href="mailto:haloabbasgfx@gmail.com" className="direct-link">haloabbasgfx@gmail.com</a>
            </div>
            <div className="direct-item">
              <span className="direct-label">WhatsApp</span>
              <a href="https://wa.me/6285852590376" target="_blank" rel="noopener noreferrer" className="direct-link">+62 858 5259 0376</a>
            </div>
          </div>
        </div>

        <div className="contact-form-container slide-up" style={{ animationDelay: '0.2s' }}>
          <form className="glass-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Hi Abbas, aku tertarik untuk..." required></textarea>
            </div>
            
            <button type="submit" className="submit-btn" style={{ backgroundColor: 'var(--color-contact)' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
