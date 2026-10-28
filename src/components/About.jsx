import React from 'react';
import {
  Server,
  Layers,
  Database,
  Terminal,
  Bug,
  BookOpen,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const highlights = [
  {
    icon: Server,
    title: 'Enterprise Java & Spring Boot',
    description:
      'Hands-on experience designing RESTful APIs, business service layers, and data access with Spring Data JPA and Hibernate.'
  },
  {
    icon: Layers,
    title: 'Microservices Architecture',
    description:
      'Experience with distributed service patterns, API Gateway, Eureka service discovery, and centralized configurations.'
  },
  {
    icon: Database,
    title: 'Relational Database Design',
    description:
      'Working with PostgreSQL and MySQL for structured schema design, transaction integrity, indexing, and complex queries.'
  },
  {
    icon: Bug,
    title: 'Live Enterprise Support',
    description:
      'Investigated and resolved 80+ real-world support and development tasks for Kerala Government production applications.'
  },
  {
    icon: Terminal,
    title: 'Full-Stack Integration',
    description:
      'Connecting robust Spring Boot backends with modern React frontends, dynamic forms, file uploads, and state hooks.'
  },
  {
    icon: BookOpen,
    title: 'Maintainable Engineering',
    description:
      'Committed to clean architecture, MVC patterns, disciplined Git version control, and continuous skill refinement.'
  }
];

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
            A backend-focused Java Developer building scalable enterprise systems and modern web applications.
          </p>
        </div>

        {/* Narrative & Stats */}
        <div className="about-grid">
          <div className="about-text-column">
            <h3 className="about-subheading">
              Engineering Scalable Solutions with a Backend Focus
            </h3>

            {personalInfo.bio.map((paragraph, idx) => (
              <p key={idx} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            <div className="about-strengths-list">
              <div className="strength-item">
                <CheckCircle2 size={18} className="strength-icon" />
                <span>Enterprise Government Application Experience (Keltron ITBG)</span>
              </div>
              <div className="strength-item">
                <CheckCircle2 size={18} className="strength-icon" />
                <span>RESTful Web Services &amp; Microservices Architecture</span>
              </div>
              <div className="strength-item">
                <CheckCircle2 size={18} className="strength-icon" />
                <span>Relational Persistence with PostgreSQL, MySQL &amp; JPA</span>
              </div>
              <div className="strength-item">
                <CheckCircle2 size={18} className="strength-icon" />
                <span>Frontend Integration with React.js &amp; Bootstrap</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Pillars */}
          <div className="about-stats-column">
            <div className="stats-cards-grid">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="about-quote-card">
              <p className="about-quote-text">
                "Java Developer with 1+ year of hands-on experience building and maintaining Java and Spring Boot applications with REST web services, backed by relational databases (PostgreSQL / MySQL) and SQL. Comfortable on the front end with HTML, CSS, JavaScript and React.js. Experienced in developing, debugging and supporting live enterprise applications for the Kerala Government."
              </p>
              <div className="about-quote-author">
                <div className="quote-author-dot"></div>
                <span>Athul Krishna M S — Java Developer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars / Competencies Grid */}
        <div className="about-pillars-grid">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="pillar-card card">
                <div className="pillar-icon-box">
                  <IconComponent size={22} />
                </div>
                <h4 className="pillar-title">{item.title}</h4>
                <p className="pillar-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

