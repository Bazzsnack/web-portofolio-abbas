import { useLanguage } from '../context/LanguageContext';
import './Projects.css'; /* Reusing some layout styles from Projects */

export default function Resume() {
  const { t } = useLanguage();

  const experiences = [
    {
      id: 1,
      period: 'July 2025 - December 2025',
      role: 'Office Staff - Sales & Marketing (Intern)',
      company: 'Intiwhiz International',
      desc: 'Conducted market research to build B2B contact databases, executed direct hotel package pitches to potential clients, and managed administrative documents such as Banquet Event Orders (BEO) and confirmation letters in compliance with company SOP.'
    },
    {
      id: 2,
      period: 'October 2023 - April 2026',
      role: 'Creative Marketing & Community Builder',
      company: 'Bazz Snack (F&B)',
      desc: 'Developed a community-based Pre-Order (PO) system with over 200 active members. Produced all visual assets and promotional materials to establish brand identity, and managed daily distribution strategies.'
    }
  ];

  const educationList = [
    {
      id: 1,
      period: '2023 - 2026',
      degree: 'Vocational High School - Digital Business',
      school: 'SMKN 1 PUNGGING',
      desc: 'Studied the fundamentals of digital marketing, UI/UX design, and database management. Actively engaged in practical learning through real-world projects, including system automation, commercial video production, and developing an F&B enterprise.'
    }
  ];

  return (
    <div className="page-container fade-in">
      <div className="content-wrapper">
        <div className="sidebar slide-up">
          <h1>{t('resume', 'title')}</h1>
          <p>
            {t('resume', 'desc')}
          </p>
        </div>
        
        <div className="resume-content slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 style={{ marginBottom: '20px', borderBottom: '2px solid var(--text-primary)', display: 'inline-block', paddingBottom: '10px' }}>
            {t('resume', 'experienceTitle')}
          </h2>
          
          <div className="experience-list">
            {experiences.map(exp => (
              <div key={exp.id} style={{ marginBottom: '30px' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                  {exp.period}
                </span>
                <h3 style={{ fontSize: '1.4rem', margin: '5px 0' }}>{exp.role}</h3>
                <h4 style={{ fontSize: '1rem', color: 'var(--color-resume)', marginBottom: '10px' }}>{exp.company}</h4>
                <p style={{ lineHeight: '1.6', color: 'var(--text-muted)' }}>{exp.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid var(--text-primary)', display: 'inline-block', paddingBottom: '10px' }}>
            {t('resume', 'educationTitle')}
          </h2>
          
          <div className="education-list">
            {educationList.map(edu => (
              <div key={edu.id} style={{ marginBottom: '30px' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                  {edu.period}
                </span>
                <h3 style={{ fontSize: '1.4rem', margin: '5px 0' }}>{edu.degree}</h3>
                <h4 style={{ fontSize: '1rem', color: 'var(--color-resume)', marginBottom: '10px' }}>{edu.school}</h4>
                <p style={{ lineHeight: '1.6', color: 'var(--text-muted)' }}>{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
