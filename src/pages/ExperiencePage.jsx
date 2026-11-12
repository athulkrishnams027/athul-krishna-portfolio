import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  FileDown
} from 'lucide-react';
import { experiences, personalInfo } from '../data/portfolioData';
import PageHeader from '../components/PageHeader';
import SEOHead from '../components/SEOHead';
import './ExperiencePage.css';

export default function ExperiencePage() {
  return (
    <div className="experience-page">
      <SEOHead
        title="Career Experience & Milestones"
        description="Verified software engineering experience of Athul Krishna M S at Keltron ITBG (Kerala Government enterprise systems), Kompetenzen Technologies, and TechMagi."
      />

      <div className="container">
        <PageHeader
          badge="Career Journey"
          badgeIcon={Briefcase}
          title="Professional Experience"
          subtitle="Enterprise Java Engineering & Full-Stack Milestones"
          description="Detailed overview of verified commercial roles, technical responsibilities, and production systems engineered across government and private organizations."
          breadcrumbs={[{ label: 'Experience', to: '/experience' }]}
        >
          <a
            href={personalInfo.resumePath}
            download="Athul_Krishna_Resume.pdf"
            className="btn btn-primary"
          >
            <FileDown size={16} />
            <span>Download Verified Resume</span>
          </a>
        </PageHeader>

        {/* Timeline Layout */}
        <div className="experience-timeline-container">
          {experiences.map((exp, index) => {
            const isLatest = index === 0;
            return (
              <div
                key={exp.id}
                className={`timeline-milestone-row ${isLatest ? 'highlighted' : ''}`}
              >
                {/* Left Spine / Marker Column */}
                <div className="milestone-spine-col">
                  <div className="milestone-marker-bubble">
                    <Building2 size={18} />
                  </div>
                  {index < experiences.length - 1 && <div className="milestone-vertical-line"></div>}
                </div>

                {/* Right Content Card */}
                <div className="milestone-content-card card">
                  <div className="milestone-header">
                    <div className="milestone-primary-info">
                      <div className="milestone-badge-row">
                        <span className="badge badge-accent">{exp.type}</span>
                        {isLatest && (
                          <span className="badge badge-lime live-status-badge">
                            <span className="live-dot"></span>
                            <span>Current Role</span>
                          </span>
                        )}
                      </div>

                      <h3 className="milestone-role">{exp.role}</h3>
                      <h4 className="milestone-company">{exp.company}</h4>
                    </div>

                    <div className="milestone-meta">
                      <div className="meta-badge">
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="meta-badge">
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="milestone-desc">{exp.description}</p>

                  {/* Responsibilities & Achievements */}
                  <div className="milestone-responsibilities-block">
                    <h5 className="responsibilities-title">Key Responsibilities &amp; Delivered Work:</h5>
                    <ul className="milestone-highlights-list">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="milestone-highlight-item">
                          <CheckCircle2 size={16} className="highlight-check-icon" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="milestone-tech-block">
                    <span className="tech-block-label">Technologies Applied:</span>
                    <div className="milestone-tech-chips">
                      {exp.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="badge badge-tech">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deep Project Link if Keltron */}
                  {exp.id === 'keltron' && (
                    <div className="milestone-project-shortcut">
                      <span className="shortcut-text">See project case studies developed at Keltron:</span>
                      <div className="shortcut-buttons">
                        <Link to="/projects/animal-husbandry" className="btn btn-secondary btn-sm">
                          <span>Animal Husbandry System</span>
                          <ArrowRight size={13} />
                        </Link>
                        <Link to="/projects/analytical-laboratory" className="btn btn-secondary btn-sm">
                          <span>Analytical Lab System</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Section CTA */}
        <div className="section-cta-wrap">
          <Link to="/projects" className="btn btn-primary btn-lg">
            <span>Explore In-Depth Project Case Studies</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
