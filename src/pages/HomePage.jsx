import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  FileDown,
  Layers,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Sparkles,
  Server,
  Database,
  Layout,
  Cpu,
  CheckCircle2,
  Copy,
  Check,
  Code2
} from 'lucide-react';
import { personalInfo, projects, experiences, skillCategories, codeSample } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import SEOHead from '../components/SEOHead';
import './HomePage.css';

export default function HomePage() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [roleFade, setRoleFade] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);

  // Animated role cycling
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleFade(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.animatedRoles.length);
        setRoleFade(true);
      }, 250);
    }, 2800);
    return () => clearInterval(roleInterval);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSample.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Featured 3 projects for the homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="home-page">
      <SEOHead
        title="Athul Krishna | Java Full Stack Developer"
        description="I build scalable backend applications, modern web interfaces, and practical software solutions using Java, Spring Boot, React, and PostgreSQL."
      />

      {/* 1. HERO SECTION */}
      <section className="home-hero-section section">
        <div className="container hero-container">
          {/* Left Column: Introduction & CTAs */}
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="pulse-indicator"></span>
              <span>{personalInfo.availabilityStatus}</span>
            </div>

            <h1 className="hero-name">
              <span className="hero-name-intro">Hi, I'm </span>
              {personalInfo.fullName}
            </h1>

            <div className="hero-role-wrapper">
              <span className="hero-title-static">{personalInfo.title}</span>
              <span className="hero-role-separator">•</span>
              <span className={`hero-animated-role ${roleFade ? 'visible' : 'fading'}`}>
                {personalInfo.animatedRoles[currentRoleIndex]}
              </span>
            </div>

            <p className="hero-description">{personalInfo.introduction}</p>

            <div className="hero-location">
              <MapPin size={16} className="hero-location-icon" />
              <span>{personalInfo.location}</span>
              <span className="hero-meta-divider">|</span>
              <span className="hero-subtext">Keltron ITBG Software Apprentice</span>
            </div>

            {/* CTAs */}
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href={personalInfo.resumePath}
                download="Athul_Krishna_Resume.pdf"
                className="btn btn-secondary"
                title="Download Resume PDF"
              >
                <FileDown size={16} />
                <span>Download Resume</span>
              </a>

              <Link to="/contact" className="btn btn-outline hero-contact-btn">
                <Sparkles size={16} className="sparkle-icon" />
                <span>Let's Discuss</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="hero-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-icon-link"
                aria-label="Send direct email"
                title="Send Email"
              >
                <Mail size={18} />
              </a>
              <div className="hero-social-divider"></div>
              <span className="hero-experience-quick">1+ Year Hands-on Enterprise Experience</span>
            </div>
          </div>

          {/* Right Column: Professional Portrait */}
          <div className="hero-portrait-column">
            <div className="hero-portrait-glow" aria-hidden="true"></div>
            <div className="hero-portrait-frame">
              <picture>
                <source srcSet={personalInfo.profileImageWebp} type="image/webp" />
                <img
                  src={personalInfo.profileImage}
                  alt="Athul Krishna M S - Java Full Stack Developer portrait"
                  className="hero-portrait-image"
                  width="420"
                  height="490"
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>

              {/* Floating Technology Badges */}
              <div className="portrait-badge portrait-badge-top">
                <span className="portrait-pulse-dot"></span>
                <span>Java &amp; Spring Boot</span>
              </div>

              <div className="portrait-badge portrait-badge-bottom">
                <Cpu size={14} className="portrait-badge-icon" />
                <span>Microservices &amp; React</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Spring Boot Code Viewer */}
        <div className="container hero-code-container">
          <div className="code-editor-card">
            <div className="code-editor-header">
              <div className="window-controls">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-tab-active">
                <Code2 size={14} />
                <span>{codeSample.filename}</span>
              </div>
              <button
                className="code-copy-btn"
                onClick={handleCopyCode}
                title="Copy Java snippet"
                aria-label="Copy Java snippet"
              >
                {copiedCode ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
              </button>
            </div>
            <div className="code-editor-body">
              <pre className="code-pre">
                <code>{codeSample.code}</code>
              </pre>
            </div>
            <div className="code-editor-footer">
              <span>Spring Boot 3.x REST Controller</span>
              <span>Java 17 / Jakarta EE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PROJECTS PREVIEW */}
      <section className="section home-projects-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <Layers size={14} />
              <span>Engineered Systems</span>
            </div>
            <h2 className="section-title">Featured Enterprise &amp; Full-Stack Projects</h2>
            <p className="section-description">
              Mission-critical applications built with Java, Spring Boot microservices, PostgreSQL, and modern React interfaces.
            </p>
          </div>

          <div className="home-projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="section-cta-wrap">
            <Link to="/projects" className="btn btn-secondary btn-lg">
              <span>View All Projects &amp; Architecture Details</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. CORE TECHNOLOGIES OVERVIEW */}
      <section className="section home-tech-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag lime-tag">
              <Server size={14} />
              <span>Technical Competencies</span>
            </div>
            <h2 className="section-title">Core Technologies &amp; Architectural Stack</h2>
            <p className="section-description">
              Production-tested backend and frontend engineering toolsets applied in enterprise government systems.
            </p>
          </div>

          <div className="home-tech-grid">
            <div className="tech-summary-card card">
              <div className="tech-summary-icon">
                <Server size={24} />
              </div>
              <h3 className="tech-summary-title">Backend Architecture</h3>
              <p className="tech-summary-desc">
                Enterprise Java, Spring Boot 3.x, Spring Data JPA, Hibernate ORM, and RESTful web services with strict @Transactional boundaries.
              </p>
              <div className="tech-pill-list">
                <span className="badge badge-tech">Java 17</span>
                <span className="badge badge-tech">Spring Boot</span>
                <span className="badge badge-tech">Hibernate</span>
                <span className="badge badge-tech">Spring Security</span>
              </div>
            </div>

            <div className="tech-summary-card card">
              <div className="tech-summary-icon">
                <Cpu size={24} />
              </div>
              <h3 className="tech-summary-title">Microservices &amp; Cloud</h3>
              <p className="tech-summary-desc">
                Distributed services using Spring Cloud API Gateway, Netflix Eureka discovery, centralized Config Server, and JWT authorization.
              </p>
              <div className="tech-pill-list">
                <span className="badge badge-tech">Microservices</span>
                <span className="badge badge-tech">API Gateway</span>
                <span className="badge badge-tech">Eureka</span>
                <span className="badge badge-tech">Docker</span>
              </div>
            </div>

            <div className="tech-summary-card card">
              <div className="tech-summary-icon">
                <Database size={24} />
              </div>
              <h3 className="tech-summary-title">Relational Databases</h3>
              <p className="tech-summary-desc">
                Relational database schema modeling, ACID transactions, complex SQL queries, indexing, and connection pooling.
              </p>
              <div className="tech-pill-list">
                <span className="badge badge-tech">PostgreSQL</span>
                <span className="badge badge-tech">MySQL</span>
                <span className="badge badge-tech">SQL</span>
                <span className="badge badge-tech">HikariCP</span>
              </div>
            </div>

            <div className="tech-summary-card card">
              <div className="tech-summary-icon">
                <Layout size={24} />
              </div>
              <h3 className="tech-summary-title">Modern React Frontend</h3>
              <p className="tech-summary-desc">
                Component-driven single page applications, React Hooks, responsive CSS Grid / Flexbox, and seamless REST client integration.
              </p>
              <div className="tech-pill-list">
                <span className="badge badge-tech">React.js</span>
                <span className="badge badge-tech">JavaScript (ES6+)</span>
                <span className="badge badge-tech">CSS3 / Flexbox</span>
                <span className="badge badge-tech">Axios</span>
              </div>
            </div>
          </div>

          <div className="section-cta-wrap">
            <Link to="/skills" className="btn btn-outline">
              <span>Explore Complete Skills &amp; Tools Catalog</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CAREER SNAPSHOT HIGHLIGHT */}
      <section className="section home-career-section">
        <div className="container">
          <div className="home-career-card card">
            <div className="home-career-left">
              <div className="section-tag">
                <CheckCircle2 size={14} />
                <span>Professional Snapshot</span>
              </div>
              <h2 className="career-card-title">Software Apprentice, Java Team @ Keltron ITBG</h2>
              <p className="career-card-desc">
                Contributed to 80+ enterprise tasks across Kerala Government systems including the Animal Husbandry Management System and Analytical Laboratory Management System. Specialize in Spring Boot microservices, PostgreSQL persistence, and React frontend workflows.
              </p>
              <div className="career-action-row">
                <Link to="/experience" className="btn btn-primary">
                  <span>View Full Career Timeline</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  <span>Read My Journey &amp; Education</span>
                </Link>
              </div>
            </div>

            <div className="home-career-stats">
              <div className="career-stat-box">
                <span className="stat-num">80+</span>
                <span className="stat-text">Enterprise Tasks Resolved</span>
              </div>
              <div className="career-stat-box">
                <span className="stat-num">2</span>
                <span className="stat-text">Govt Enterprise Platforms</span>
              </div>
              <div className="career-stat-box">
                <span className="stat-num">1+</span>
                <span className="stat-text">Year Hands-on Java Stack</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CODE BRO FREELANCE BANNER */}
      <section className="section home-codebro-banner-section">
        <div className="container">
          <div className="home-codebro-banner">
            <div className="codebro-banner-content">
              <div className="codebro-banner-tag">
                <Sparkles size={14} />
                <span>Freelance Development Studio</span>
              </div>
              <h2 className="codebro-banner-title">Need a Modern Website or Web App for Your Business?</h2>
              <p className="codebro-banner-desc">
                Through my freelance studio <strong>CODE BRO</strong>, I deliver bespoke websites starting at ₹7,999 with guaranteed speed, zero horizontal overflow, and transparent pricing.
              </p>
            </div>
            <Link to="/code-bro" className="btn btn-primary codebro-cta-btn">
              <span>View CODE BRO Packages &amp; Pricing</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
