import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProjectModal from '../components/ProjectModal';
import './Projects.css';

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const dummyProjects = [
    { 
      id: 1, 
      title: 'Modern E-Commerce Checkout', 
      category: 'UI/UX Design', 
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=450',
      contentImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
      description: 'A comprehensive redesign of a digital checkout flow, reducing bounce rates by 25%. Focused on a clean, minimal user interface to guide users effortlessly through the purchasing process.'
    },
    { 
      id: 2, 
      title: 'Cinematic B-Roll Promo', 
      category: 'Video Production', 
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1601569476602-df4950ce33ba?auto=format&fit=crop&q=80&w=600&h=450',
      contentImage: 'https://images.unsplash.com/photo-1601569476602-df4950ce33ba?auto=format&fit=crop&q=80&w=1200',
      description: 'Directed and edited a fast-paced vertical B-roll sequence tailored for TikTok and Instagram Reels. Emphasized seamless transitions and beat-syncing for maximum audience retention.'
    },
    { 
      id: 3, 
      title: 'Digital Workspace Dashboard', 
      category: 'Web Development', 
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=600&h=450',
      contentImage: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=1200',
      description: 'Engineered a real-time data dashboard using React. Integrated various API endpoints to visual complex datasets into easy-to-read interactive charts.'
    },
    { 
      id: 4, 
      title: 'Tech Gadget Launch', 
      category: 'Video Production', 
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=600&h=450',
      contentImage: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1200',
      description: 'Produced a product launch trailer highlighting key features and high-end materials. Utilized advanced color grading and dynamic lighting to establish a premium brand feel.'
    },
    { 
      id: 5, 
      title: 'Restaurant Order Automation', 
      category: 'System Integration', 
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600&h=450',
      contentImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1200',
      description: 'Connected an ordering API with a central inventory database to automate incoming F&B orders. Cut down manual order input time by 80% and reduced human error.'
    },
    { 
      id: 6, 
      title: 'Brand Identity Redesign', 
      category: 'Graphic Design', 
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600&h=450',
      contentImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200',
      description: 'Designed a complete brand package including logo, typography, and marketing assets. Created a cohesive visual language that aligned with the brand\'s new modern vision.'
    },
  ];

  return (
    <div className="page-container fade-in">
      <div className="content-wrapper">
        <div className="sidebar slide-up">
          <h1>{t('projects', 'title')}</h1>
          <p>
            {t('projects', 'desc')}
          </p>
        </div>
        
        <div className="projects-grid slide-up" style={{ animationDelay: '0.2s' }}>
          {dummyProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.thumbnail} alt={project.title} className="project-thumbnail" />
              <div className="project-overlay">
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
