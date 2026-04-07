import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import profileImg from '../assets/asset_abbas/foto_profil.png';
import './CVModal.css';

export default function CVModal({ isOpen, onClose }) {
  const { lang, t } = useLanguage();

  if (!isOpen) return null;

  const cv = translations[lang]?.cv || {};
  const skills = cv.skills || [];
  const experiences = cv.experiences || [];
  const education = cv.education || [];

  const handleDownload = (e) => {
    e.preventDefault();
    const element = document.getElementById('cv-printable-area');
    
    const opt = {
      margin:       [10, 0, 10, 0], // Margin aman atas-bawah
      filename:     'CV_Abbas_Creative_Technologist.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="cv-modal-overlay">
      <div className="cv-modal-container">
        
        {/* Action Bar */}
        <div className="cv-action-bar">
          <button className="cv-btn cv-btn-print" onClick={handleDownload}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cv-icon"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            {cv.downloadText || "Download PDF"}
          </button>
          <button className="cv-btn cv-btn-close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cv-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            {cv.closeText || "Close"}
          </button>
        </div>

        {/* The Printable A4 Sheet */}
        <div className="cv-document" id="cv-printable-area" ref={targetRef}>
          {/* Header */}
          <header className="cv-header">
            <div className="cv-header-text">
              <h1 className="cv-name">{cv.title?.split(' - ')[0] || 'Abbas'}</h1>
              <h2 className="cv-role">{cv.title?.split(' - ')[1] || 'Creative Technologist'}</h2>
            </div>
            <div className="cv-header-image">
              <img src={profileImg} alt={cv.profilePicAlt || "Profile"} />
            </div>
          </header>

          {/* Spacer */}
          <div className="cv-divider"></div>

          {/* Professional Summary */}
          <section className="cv-section">
            <p className="cv-summary">{cv.summary}</p>
          </section>

          {/* Core Competencies */}
          <section className="cv-section cv-grid-2">
            <div className="cv-column">
              <h3 className="cv-section-title">{cv.coreCompetencies}</h3>
              <div className="cv-skills-list">
                {skills.map((skill, idx) => (
                  <div key={idx} className="cv-skill-item">
                    <h4 className="cv-item-title">{skill.title}</h4>
                    <p className="cv-item-desc">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience & Education */}
            <div className="cv-column">
              <h3 className="cv-section-title">{cv.experienceTitle}</h3>
              <div className="cv-experience-list">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="cv-exp-item">
                    <div className="cv-exp-header">
                      <h4 className="cv-item-title">{exp.role}</h4>
                      <span className="cv-item-period">{exp.period}</span>
                    </div>
                    <div className="cv-item-subtitle">{exp.company}</div>
                    <ul className="cv-item-bullets">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h3 className="cv-section-title" style={{marginTop: '24px'}}>{cv.educationTitle}</h3>
              <div className="cv-education-list">
                {education.map((edu, idx) => (
                  <div key={idx} className="cv-exp-item">
                     <div className="cv-exp-header">
                      <h4 className="cv-item-title">{edu.degree}</h4>
                      <span className="cv-item-period">{edu.period}</span>
                    </div>
                    <div className="cv-item-subtitle">{edu.school}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
