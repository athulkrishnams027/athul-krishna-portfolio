import React from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  GraduationCap,
  Award,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Compass,
  ArrowRight,
  FileDown,
  Layers,
  Server,
  Database,
  Cpu,
  ShieldCheck,
  Calendar,
  MapPin
} from 'lucide-react';
import {
  personalInfo,
  education,
  certifications,
  achievements,
  technicalInterests
} from '../data/portfolioData';
import PageHeader from '../components/PageHeader';
import SEOHead from '../components/SEOHead';
import './AboutPage.css';

export default function AboutPage() {
  const strengths = [
    {
      title: 'Enterprise Java Architecture',
      desc: 'Deep familiarity with Spring Boot, Spring Data JPA, Hibernate ORM, and defensive REST API design.'
    },
    {
      title: 'Relational Database Integrity',
      desc: 'Expertise modeling PostgreSQL and MySQL relational schemas with strict @Transactional ACID boundaries.'
    },
    {
      title: 'Full-Stack Cohesion with React',
      desc: 'Bridging backend APIs with modern React frontend SPAs for intuitive end-to-end user experiences.'
    },
    {
      title: 'Government Production Experience',
      desc: 'Demonstrated reliability resolving 80+ enterprise tasks on live mission-critical Kerala Government systems.'
    }
  ];

  return (
    <div className="about-page">
      <SEOHead
        title="About Me | Development Journey & Background"
        description="Learn about Athul Krishna M S — Java Full Stack Developer with over a year of enterprise engineering experience at Keltron ITBG, education background, and development philosophy."
      />

      <div className="container">
        <PageHeader
          badge="Engineering Profile"
          badgeIcon={User}
          title="About Athul Krishna"
          subtitle="Java Full Stack Developer • Enterprise Systems Engineer"
          description="Crafting high-integrity server-side microservices, reliable database transactions, and modern web applications with discipline and technical precision."
          breadcrumbs={[{ label: 'About Me', to: '/about' }]}
        >
          <a
            href={personalInfo.resumePath}
            download="Athul_Krishna_Resume.pdf"
            className="btn btn-primary"
          >
            <FileDown size={16} />
            <span>Download Resume</span>
          </a>
          <Link to="/contact" className="btn btn-secondary">
            <span>Get in Touch</span>
            <ArrowRight size={16} />
          </Link>
        </PageHeader>

        {/* 1. EDITORIAL BIO & WORKSTATION VISUAL */}
        <section className="about-editorial-section">
          <div className="about-editorial-grid">
            <div className="about-bio-column">
              <h2 className="editorial-heading">My Development Journey</h2>
              <div className="bio-paragraphs">
                {personalInfo.bio.map((paragraph, index) => (
                  <p key={index} className="bio-text">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Development Philosophy Quote */}
              <div className="philosophy-quote-card">
                <p className="philosophy-quote-text">
                  "Software engineering isn't just about making code run; it's about building resilient, maintainable architectures that gracefully handle edge cases, protect data integrity, and serve users reliably at scale."
                </p>
                <div className="philosophy-quote-author">
                  <span className="quote-dot"></span>
                  <span>Engineering Mindset — Athul Krishna</span>
                </div>
              </div>
            </div>

            {/* Right Column: Workstation Visual & Stats */}
            <div className="about-visual-column">
              <div className="workstation-card card">
                <div className="workstation-image-wrap">
                  <img
                    src="/images/about-tech-developer.webp"
                    alt="Athul Krishna engineering workstation with code display and dark IDE"
                    className="workstation-image"
                    loading="lazy"
                    width="600"
                    height="350"
                  />
                  <div className="workstation-overlay"></div>
                  <div className="workstation-tag">
                    <span className="workstation-pulse"></span>
                    <span>Java Full Stack Workstation</span>
                  </div>
                </div>

                <div className="about-stats-grid">
                  {personalInfo.stats.map((stat, idx) => (
                    <div key={idx} className="about-stat-box">
                      <span className="about-stat-val">{stat.value}</span>
                      <span className="about-stat-lbl">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CORE ENGINEERING STRENGTHS */}
        <section className="about-strengths-section">
          <div className="section-header text-left">
            <div className="section-tag lime-tag">
              <Sparkles size={14} />
              <span>Core Competencies</span>
            </div>
            <h2 className="section-title">Personal Strengths in Software Development</h2>
            <p className="section-description">
              Core traits and engineering habits that drive consistent results in enterprise teams.
            </p>
          </div>

          <div className="strengths-grid">
            {strengths.map((item, idx) => (
              <div key={idx} className="strength-card card">
                <div className="strength-icon-box">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="strength-title">{item.title}</h3>
                <p className="strength-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. TECHNICAL INTERESTS */}
        <section className="about-interests-section">
          <div className="section-header text-left">
            <div className="section-tag">
              <Compass size={14} />
              <span>Focus Areas</span>
            </div>
            <h2 className="section-title">Technical Interests &amp; Architecture Focus</h2>
            <p className="section-description">
              Key engineering paradigms that shape how I design and implement full-stack systems.
            </p>
          </div>

          <div className="interests-grid">
            {technicalInterests.map((interest, idx) => (
              <div key={idx} className="interest-card card">
                <div className="interest-header">
                  <span className="interest-num">0{idx + 1}</span>
                  <h3 className="interest-card-title">{interest.title}</h3>
                </div>
                <p className="interest-card-desc">{interest.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. ACADEMIC EDUCATION */}
        <section className="about-education-section">
          <div className="section-header text-left">
            <div className="section-tag">
              <GraduationCap size={14} />
              <span>Academic Foundation</span>
            </div>
            <h2 className="section-title">Education &amp; Credentials</h2>
            <p className="section-description">
              Formal computer science coursework, foundational mathematics, and engineering education.
            </p>
          </div>

          <div className="education-cards-list">
            {education.map((edu, idx) => (
              <div key={idx} className="edu-item-card card">
                <div className="edu-top-row">
                  <div>
                    <h3 className="edu-degree-title">{edu.degree}</h3>
                    <p className="edu-institution-name">{edu.institution}</p>
                  </div>
                  <span className="badge badge-accent edu-period-badge">
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </span>
                </div>
                <div className="edu-meta-row">
                  <MapPin size={14} className="meta-pin" />
                  <span>{edu.location}</span>
                </div>
                <p className="edu-focus-text">{edu.focus}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CERTIFICATIONS & ACHIEVEMENTS */}
        <section className="about-credentials-section">
          <div className="credentials-2col-grid">
            {/* Certifications */}
            <div className="credentials-column">
              <div className="credentials-col-header">
                <Award size={20} className="col-header-icon" />
                <h3 className="col-heading">Verified Certifications</h3>
              </div>
              <div className="certifications-list">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="cert-item card">
                    <div className="cert-bullet"></div>
                    <div className="cert-text-wrap">
                      <h4 className="cert-title">{cert.name}</h4>
                      <div className="cert-meta-wrap">
                        <span className="cert-issuer">{cert.issuer}</span>
                        <span className="cert-tag-pill">{cert.tag}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements & Leadership */}
            <div className="credentials-column">
              <div className="credentials-col-header">
                <BookOpen size={20} className="col-header-icon" />
                <h3 className="col-heading">Leadership &amp; Extracurriculars</h3>
              </div>
              <div className="achievements-list">
                {achievements.map((item, idx) => (
                  <div key={idx} className="achievement-item card">
                    <div className="achievement-title-row">
                      <h4 className="achievement-name">{item.title}</h4>
                      <span className="achievement-org-badge">{item.organization}</span>
                    </div>
                    <p className="achievement-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Next CTA */}
        <section className="about-next-cta-section">
          <div className="next-page-banner card">
            <div className="next-banner-content">
              <span className="next-banner-tag">Next Section</span>
              <h3 className="next-banner-title">Explore My Technical Skills &amp; Tools</h3>
              <p className="next-banner-desc">
                Review detailed backend frameworks, frontend technologies, database engines, and DevOps tools.
              </p>
            </div>
            <Link to="/skills" className="btn btn-primary next-banner-btn">
              <span>View Technical Skills</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
