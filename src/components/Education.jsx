import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  BookOpen,
  Trophy,
  ExternalLink
} from 'lucide-react';
import { education, certifications, achievements } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic &amp; Professional Growth</span>
          </div>
          <h2 className="section-title">Education &amp; Credentials</h2>
          <p className="section-description">
            Academic qualifications in Computer Science, professional certifications in Java Microservices, and institutional leadership.
          </p>
        </div>

        <div className="credentials-layout-grid">
          {/* Left Column: Education Timeline */}
          <div className="credentials-column">
            <div className="column-title-row">
              <div className="column-icon-box">
                <GraduationCap size={20} />
              </div>
              <h3 className="column-heading">Education History</h3>
            </div>

            <div className="education-timeline-list">
              {education.map((item, index) => (
                <div key={index} className="edu-card card">
                  <div className="edu-card-top">
                    <div>
                      <h4 className="edu-degree">{item.degree}</h4>
                      <h5 className="edu-institution">{item.institution}</h5>
                    </div>
                    <span className="badge badge-accent edu-period">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </span>
                  </div>

                  <div className="edu-location">
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </div>

                  <p className="edu-focus">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Achievements */}
          <div className="credentials-column">
            {/* Certifications Block */}
            <div className="column-title-row">
              <div className="column-icon-box">
                <Award size={20} />
              </div>
              <h3 className="column-heading">Certifications</h3>
            </div>

            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card card">
                  <div className="cert-icon-wrap">
                    <BookOpen size={18} />
                  </div>
                  <div className="cert-info">
                    <h4 className="cert-name">{cert.name}</h4>
                    <div className="cert-meta">
                      <span className="cert-issuer">{cert.issuer}</span>
                      <span className="cert-bullet">&bull;</span>
                      <span className="badge badge-tech cert-tag">{cert.tag}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements & Leadership Block */}
            <div className="column-title-row achievements-title-row">
              <div className="column-icon-box">
                <Trophy size={20} />
              </div>
              <h3 className="column-heading">Leadership &amp; Achievements</h3>
            </div>

            <div className="achievements-list">
              {achievements.map((item, index) => (
                <div key={index} className="achievement-card card">
                  <div className="achievement-header">
                    <h4 className="achievement-title">{item.title}</h4>
                    <span className="achievement-org">{item.organization}</span>
                  </div>
                  <p className="achievement-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

