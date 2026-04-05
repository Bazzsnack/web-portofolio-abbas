import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
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
              media.type === 'video' ? (
                <div key={index} className="video-placeholder flex-media">
                  <img src={media.url} alt={`Video Thumbnail ${index + 1}`} />
                  <div className="play-btn">▶</div>
                </div>
              ) : (
                <img key={index} src={media.url} alt={`${project.title} ${index + 1}`} className="modal-main-image flex-media" />
              )
            ))}
          </div>
          
          <div className="modal-description">
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
