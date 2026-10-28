import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Journey</span>
          </div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-description">
            Hands-on software development experience across enterprise Kerala Government projects and structured full-stack internship training.
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">
          {experiences.map((exp, index) => {
            const isKeltron = exp.id === 'keltron';
            const isTechMagi = exp.id === 'techmagi';

            return (
              <div key={exp.id} className={`timeline-item ${isKeltron ? 'highlighted' : ''}`}>
                {/* Timeline connector dot */}
                <div className="timeline-marker">
                  <div className="marker-dot">
                    {isTechMagi ? <Award size={14} /> : <Briefcase size={14} />}
                  </div>
                  {index !== experiences.length - 1 && <div className="marker-line"></div>}
                </div>

                {/* Timeline Card Content */}
                <div className="timeline-card card">
                  <div className="timeline-card-header">
                    <div>
                      <div className="timeline-badge-row">
                        <span className="badge badge-accent">{exp.type}</span>
                        {isKeltron && (
                          <span className="badge badge-live">
                            <span className="live-dot"></span> Live Enterprise
                          </span>
                        )}
                      </div>
                      <h3 className="experience-role">{exp.role}</h3>
                      <h4 className="experience-company">{exp.company}</h4>
                    </div>

                    <div className="timeline-meta">
                      <div className="meta-item">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="experience-desc">{exp.description}</p>

                  {/* Highlights list */}
                  <ul className="experience-highlights">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="highlight-item">
                        <CheckCircle size={15} className="highlight-bullet" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="experience-tech-row">
                    <span className="tech-label">Technologies:</span>
                    <div className="tech-tags-list">
                      {exp.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="badge badge-tech">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

