import './Projects.css'; /* Reusing some layout styles from Projects */

export default function Resume() {
  const experiences = [
    {
      id: 1,
      period: '2022 - Present',
      role: 'Freelance Graphic Designer',
      company: 'Self-employed',
      desc: 'Mengerjakan berbagai proyek pembuatan logo, poster, konten sosial media, dan branding untuk berbagai klien menggunakan Adobe Illustrator dan Photoshop.'
    },
    {
      id: 2,
      period: '2021 - 2022',
      role: 'Video Editor Intern',
      company: 'Creative Studio',
      desc: 'Mengedit video durasi pendek dan menengah untuk keperluan pemasaran, menggunakan Adobe Premiere Pro dan After Effects.'
    }
  ];

  return (
    <div className="page-container fade-in">
      <div className="content-wrapper">
        <div className="sidebar slide-up">
          <h1>Resume</h1>
          <p>
            Rekam jejak pengalaman kerja, keterampilan, dan pendidikan 
            yang telah membentuk kemampuan abadiku di bidang desain visual.
          </p>
        </div>
        
        <div className="resume-content slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 style={{ marginBottom: '20px', borderBottom: '2px solid var(--text-primary)', display: 'inline-block', paddingBottom: '10px' }}>
            Experience
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
        </div>
      </div>
    </div>
  );
}
