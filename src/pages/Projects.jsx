import './Projects.css';

export default function Projects() {
  const dummyProjects = [
    { id: 1, title: 'Project 1', category: 'Social Media', color: '#ffb3ba' },
    { id: 2, title: 'Project 2', category: 'Branding', color: '#ffdfba' },
    { id: 3, title: 'Project 3', category: 'Photography', color: '#ffffba' },
    { id: 4, title: 'Project 4', category: 'Web Design', color: '#baffc9' },
    { id: 5, title: 'Project 5', category: 'Illustration', color: '#bae1ff' },
    { id: 6, title: 'Project 6', category: 'Motion graphic', color: '#ffd1dc' },
  ];

  return (
    <div className="page-container fade-in">
      <div className="content-wrapper">
        <div className="sidebar slide-up">
          <h1>Projects</h1>
          <p>
            Koleksi desain grafis yang menunjukkan eksplorasi gaya visual, 
            komposisi warna, dan kemampuan branding untuk berbagai klien. 
            Feed yang dirancang untuk memperkuat brand image bisnis.
          </p>
        </div>
        
        <div className="projects-grid slide-up" style={{ animationDelay: '0.2s' }}>
          {dummyProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ backgroundColor: project.color }}
            >
              <div className="project-info">
                <h3>{project.title}</h3>
                <span>{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
