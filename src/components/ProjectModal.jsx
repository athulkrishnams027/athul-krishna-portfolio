import React, { useEffect, useRef } from 'react';
import {
  X,
  ShieldCheck,
  Server,
  Layers,
  Database,
  CheckCircle2,
  Github,
  Lock,
  ExternalLink
} from 'lucide-react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Close on ESC key & trap focus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        className="modal-container"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-badge-group">
            <span className="badge badge-accent">{project.badge}</span>
            <span className="modal-role-badge">Role: {project.role}</span>
          </div>

          <button
            ref={closeButtonRef}
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-body">
          <h2 id="modal-project-title" className="modal-title">
            {project.title}
          </h2>
          <p className="modal-subtitle">{project.subtitle}</p>

          {/* Confidentiality notice for Government apps */}
          {project.isGovernment && (
            <div className="modal-confidential-notice">
              <Lock size={18} className="notice-icon" />
              <div>
                <strong>Enterprise Government Platform</strong>
                <p>
                  Proprietary system developed for the Government of Kerala. Internal architectures, sensitive configurations, and source code are strictly governed and not distributed publicly.
                </p>
              </div>
            </div>
          )}

          {/* Detailed Narrative */}
          <div className="modal-section">
            <h4 className="modal-section-heading">Overview</h4>
            <p className="modal-description-text">{project.fullDescription}</p>
          </div>

          {/* Responsibilities */}
          <div className="modal-section">
            <h4 className="modal-section-heading">Key Implementation Responsibilities</h4>
            <ul className="modal-list">
              {project.responsibilities.map((resp, idx) => (
                <li key={idx} className="modal-list-item">
                  <CheckCircle2 size={16} className="modal-bullet-icon" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architectural Design */}
          {project.architecture && (
            <div className="modal-section">
              <h4 className="modal-section-heading">Architectural &amp; Technical Highlights</h4>
              <ul className="modal-list">
                {project.architecture.map((arch, idx) => (
                  <li key={idx} className="modal-list-item">
                    <Layers size={16} className="modal-bullet-icon" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div className="modal-section">
            <h4 className="modal-section-heading">Technologies &amp; Libraries</h4>
            <div className="modal-tags-grid">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="badge badge-tech">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          {project.repoAvailable && project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <Github size={16} />
              <span>View on GitHub</span>
            </a>
          ) : (
            <div className="modal-private-note">
              <Lock size={14} />
              <span>Restricted Repository / Enterprise Codebase</span>
            </div>
          )}

          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

