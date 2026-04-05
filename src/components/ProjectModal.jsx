import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-form" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-header">
          <h2>{project.title}</h2>
          <span className="modal-category">{project.category}</span>
        </div>
        <div className="modal-body">
          <div className="modal-media">
            {project.type === 'video' ? (
              <div className="video-placeholder">
                <img src={project.contentImage} alt="Video Thumbnail" />
                <div className="play-btn">▶</div>
              </div>
            ) : (
              <img src={project.contentImage} alt={project.title} className="modal-main-image" />
            )}
          </div>
          <div className="modal-description">
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
