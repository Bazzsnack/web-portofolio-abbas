import './ProjectModal.css';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectModal({ project, onClose }) {
  const { lang } = useLanguage();
  
  if (!project) return null;

  // Normalization logic: allows passing multiple media URLs in an array format OR fallback to existing single image setup
  const mediaItems = project.contentMedia || [
    { type: project.type || 'image', url: project.contentImage }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <h2>{project.title}</h2>
          <span className="modal-category">{project.category}</span>
        </div>
        
        <div className="modal-body">
          <div className="modal-media-gallery">
            {mediaItems.map((media, index) => (
              media.type === 'youtube' ? (
                <div key={index} className="youtube-container flex-media">
                  <iframe 
                    src={`https://www.youtube.com/embed/${media.url}?rel=0&modestbranding=1`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="modal-youtube-iframe"
                  ></iframe>
                </div>
              ) : media.type === 'video' ? (
                <video 
                  key={index} 
                  src={media.url} 
                  controls 
                  playsInline
                  preload="metadata"
                  poster={project.thumbnail}
                  className="modal-main-video flex-media"
                />
              ) : (
                <img key={index} src={media.url} alt={`${project.title} ${index + 1}`} className="modal-main-image flex-media" />
              )
            ))}
          </div>
          
          <div className="modal-description">
            <p>{typeof project.description === 'object' ? project.description[lang] : project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
