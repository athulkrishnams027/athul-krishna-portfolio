import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Lock, ShieldCheck, Terminal } from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  if (!project) return null;

  const detailPath = `/projects/${project.id}`;

  return (
    <div className="project-catalog-card card">
      {/* Project Thumbnail Image */}
      <div className="project-card-image-wrap">
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          className="project-card-image"
          loading="lazy"
          width="600"
          height="340"
        />
        <div className="project-card-overlay"></div>
        <div className="project-card-badge-row">
          <span className="project-category-tag">
            <span className="project-tag-dot"></span>
            {project.badge}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-card-body">
        <div className="project-card-meta">
          <span className="project-card-role">{project.role}</span>
          <span className="project-meta-dot">•</span>
          <span className="project-card-client">{project.client}</span>
        </div>

        <h3 className="project-card-title">
          <Link to={detailPath} className="project-title-link">
            {project.title}
          </Link>
        </h3>

        <p className="project-card-desc">{project.shortDescription}</p>

        {/* Modules summary if present */}
        {project.modules && project.modules.length > 0 && (
          <div className="project-modules-preview">
            <span className="modules-label">Core Modules:</span>
            <div className="modules-chips">
              {project.modules.slice(0, 3).map((mod, idx) => (
                <span key={idx} className="module-chip">
                  {mod.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="project-tech-chips">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <span key={idx} className="badge badge-tech">
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="badge badge-more">+{project.technologies.length - 5}</span>
          )}
        </div>

        {/* Actions */}
        <div className="project-card-footer">
          <Link to={detailPath} className="btn btn-primary project-view-btn">
            <span>View Case Study</span>
            <ArrowRight size={16} />
          </Link>
          {project.isGovernment ? (
            <span className="confidential-indicator" title="Enterprise Government Codebase">
              <Lock size={14} />
              <span>Govt Protected</span>
            </span>
          ) : (
            project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-icon-only"
                aria-label="View GitHub Repository"
                title="View GitHub Repository"
              >
                <Terminal size={16} />
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}
