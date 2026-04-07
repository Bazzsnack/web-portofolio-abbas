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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-modal-overlay">
      <div className="cv-modal-container">
        
        {/* Action Bar (Not printed) */}
        <div className="cv-action-bar cv-no-print">
          <button className="cv-btn cv-btn-print" onClick={handlePrint}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cv-icon"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
            {cv.downloadText || "Print / Save PDF"}
          </button>
          <button className="cv-btn cv-btn-close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cv-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            {cv.closeText || "Close"}
          </button>
        </div>

        {/* The Printable A4 Sheet */}
        <div className="cv-document" id="cv-printable-area">
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
