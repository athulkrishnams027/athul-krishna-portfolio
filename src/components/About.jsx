import React from 'react';
import {
  Server,
  Layers,
  Database,
  Terminal,
  Bug,
  ShieldCheck,
  CheckCircle2,
  Compass,
  Cpu,
  Sparkles
} from 'lucide-react';
import { personalInfo, technicalInterests } from '../data/portfolioData';
import './About.css';

const interestIcons = [Layers, Server, Database, Terminal];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <ShieldCheck size={14} />
            <span>Professional Profile</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            A Java Full Stack Developer dedicated to building scalable backend microservices, resilient relational databases, and clean modern web interfaces.
          </p>
        </div>

        {/* Narrative & Stats Grid */}
        <div className="about-grid">
          {/* Left Column: Narrative & Strengths */}
          <div className="about-text-column">
            <div className="about-intro-badge">
              <Sparkles size={14} className="intro-badge-icon" />
              <span>Engineering Scalable &amp; Maintainable Software</span>
            </div>

            <h3 className="about-subheading">
              Backend-First Mindset with End-to-End Full Stack Capability
            </h3>

            {personalInfo.bio.map((paragraph, idx) => (
              <p key={idx} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            {/* Core Career Strengths */}
            <div className="about-strengths-block">
              <h4 className="strengths-title">Core Competencies &amp; Focus Areas:</h4>
              <div className="about-strengths-list">
                <div className="strength-item">
                  <CheckCircle2 size={18} className="strength-icon" />
                  <span>Government Enterprise Application Engineering (Keltron ITBG)</span>
                </div>
                <div className="strength-item">
                  <CheckCircle2 size={18} className="strength-icon" />
                  <span>Spring Boot RESTful APIs &amp; Distributed Microservices</span>
                </div>
                <div className="strength-item">
                  <CheckCircle2 size={18} className="strength-icon" />
                  <span>Relational Persistence with PostgreSQL, MySQL &amp; JPA/Hibernate</span>
                </div>
                <div className="strength-item">
                  <CheckCircle2 size={18} className="strength-icon" />
                  <span>Modern React Frontend Integration &amp; Dynamic State Management</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stats, Workstation Visual & Quote */}
          <div className="about-stats-column">
            {/* Verified Metrics Cards */}
            <div className="stats-cards-grid">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Workstation Photography Card */}
            <div className="about-photo-card card">
              <div className="about-photo-wrapper">
                <img
                  src="/images/about-tech-developer.webp"
                  alt="Modern software development workstation with dual monitors and IDE"
                  className="about-tech-photo"
                  loading="lazy"
                />
                <div className="about-photo-overlay"></div>
                <div className="about-photo-tag">
                  <span className="about-photo-indicator"></span>
                  <span>Enterprise Software Engineering Workstation</span>
                </div>
              </div>
            </div>

            {/* Professional Summary Quote Card */}
            <div className="about-quote-card">
              <p className="about-quote-text">
                "Experienced in developing, debugging, and supporting live enterprise applications for the Kerala Government. I combine rigorous server-side Java architecture with practical React frontend development to deliver dependable software."
              </p>
              <div className="about-quote-author">
                <div className="quote-author-dot"></div>
                <span>Athul Krishna — Java Full Stack Developer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Interests & Career Focus Cards */}
        <div className="technical-interests-wrapper">
          <div className="interests-header-row">
            <div className="interests-tag">
              <Compass size={15} />
              <span>Specialized Technical Interests</span>
            </div>
            <h3 className="interests-title">Where I Focus My Engineering Energy</h3>
          </div>

          <div className="interests-grid">
            {technicalInterests.map((interest, idx) => {
              const IconComp = interestIcons[idx % interestIcons.length];
              return (
                <div key={idx} className="interest-card card">
                  <div className="interest-icon-box">
                    <IconComp size={20} />
                  </div>
                  <h4 className="interest-card-title">{interest.title}</h4>
                  <p className="interest-card-desc">{interest.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
