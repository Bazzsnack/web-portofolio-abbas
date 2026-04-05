import { useLanguage } from '../context/LanguageContext';
import './Projects.css'; /* Reusing some layout styles from Projects */

export default function Resume() {
  const { t } = useLanguage();

  const experiences = t('resume', 'experiences') || [];
  const educationList = t('resume', 'education') || [];

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
