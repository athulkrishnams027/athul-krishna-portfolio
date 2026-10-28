import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Server,
  Layers,
  Building2,
  FileCode2,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import './Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (project) => {
    if (project.isGovernment) return Building2;
    if (project.id === 'student-tracker') return Server;
    return Layers;
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">Projects &amp; Enterprise Systems</h2>
          <p className="section-description">
            Production-grade Kerala Government enterprise platforms, microservices architecture, and full-stack software built with Spring Boot, PostgreSQL, and React.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {projects.map((project) => {
            const IconComponent = getProjectIcon(project);

            return (
              <div key={project.id} className="project-card card">
                <div className="project-card-top">
                  <div className="project-header-row">
                    <div className="project-icon-box">
                      <IconComponent size={22} />
                    </div>

                    <div className="project-badge-wrap">
                      <span className="badge badge-accent">{project.badge}</span>
                      {project.isGovernment && (
                        <span className="badge badge-govt" title="Kerala Government Enterprise Project">
                          <Lock size={11} />
                          <span>Govt Project</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.shortDescription}</p>
                </div>

                <div className="project-card-bottom">
                  {/* Tech stack tags */}
                  <div className="project-tech-tags">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <span key={idx} className="badge badge-tech">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="badge badge-tech">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="project-card-actions">
                    <button
                      className="btn btn-secondary btn-sm project-inspect-btn"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View detailed breakdown of ${project.title}`}
                    >
                      <span>View Details</span>
                      <ArrowUpRight size={15} />
                    </button>

                    {project.repoAvailable && project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-btn"
                        aria-label={`GitHub profile repository for ${project.title}`}
                        title="View on GitHub"
                      >
                        <Github size={17} />
                      </a>
                    ) : (
                      <span
                        className="project-confidential-indicator"
                        title="Confidential Enterprise Application"
                      >
                        <Lock size={14} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on confidential enterprise projects */}
        <div className="projects-note-box">
          <Lock size={16} className="projects-note-icon" />
          <p>
            <strong>Note on Enterprise Software:</strong> Government projects developed at Keltron ITBG are governed by confidentiality agreements and security protocols. Live demo links and proprietary source code cannot be shared publicly, but system architecture and design principles can be discussed during interviews.
          </p>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

