import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Linkedin, Github, Mail, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          {/* Brand & Overview */}
          <div className="footer-branding">
            <Link to="/" className="footer-logo">
              <div className="footer-icon-box">
                <Terminal size={16} />
              </div>
              <span className="footer-name">{personalInfo.fullName}</span>
            </Link>
            <p className="footer-role">{personalInfo.title}</p>
            <p className="footer-tagline">
              Building scalable backend applications, microservices, and practical software solutions using Java, Spring Boot, PostgreSQL, and React.
            </p>
            <div className="footer-brand-badge">
              <span className="footer-pulse-dot"></span>
              <span>Available for Enterprise Roles &amp; Freelance Projects</span>
            </div>
          </div>

          {/* Navigation Pages */}
          <div className="footer-nav-col">
            <h5 className="footer-col-title">Portfolio Pages</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/skills">Technical Skills</Link></li>
              <li><Link to="/experience">Career Experience</Link></li>
              <li><Link to="/projects">Project Case Studies</Link></li>
              <li><Link to="/architecture">System Architecture</Link></li>
              <li><Link to="/code-bro" className="footer-code-bro-link"><Sparkles size={13} /> CODE BRO Freelance</Link></li>
              <li><Link to="/contact">Contact Athul</Link></li>
              <li><Link to="/github">GitHub Activity</Link></li>
            </ul>
          </div>

          {/* Connect & Direct Channels */}
          <div className="footer-connect-col">
            <h5 className="footer-col-title">Connect &amp; Social</h5>
            <div className="footer-social-row">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Athul Krishna's LinkedIn"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Athul Krishna's GitHub"
                title="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-btn"
                aria-label="Send email to Athul Krishna"
                title="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="footer-location-text">{personalInfo.location}</p>
            <p className="footer-email-link">
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} {personalInfo.fullName}. Built with Java backend mindset &amp; React.
          </p>

          <button onClick={scrollToTop} className="back-to-top-link" aria-label="Back to top of page">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
