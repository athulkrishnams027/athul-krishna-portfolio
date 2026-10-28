import React from 'react';
import { ArrowUp, Linkedin, Github, Mail, Terminal, Heart } from 'lucide-react';
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
          <div className="footer-branding">
            <a href="#home" className="footer-logo">
              <div className="footer-icon-box">
                <Terminal size={16} />
              </div>
              <span className="footer-name">{personalInfo.name}</span>
            </a>
            <p className="footer-role">{personalInfo.title}</p>
            <p className="footer-tagline">
              Building reliable backend systems, microservices, and modern web applications with clean architecture.
            </p>
          </div>

          <div className="footer-nav-col">
            <h5 className="footer-col-title">Navigation</h5>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-connect-col">
            <h5 className="footer-col-title">Connect</h5>
            <div className="footer-social-row">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Athul Krishna's LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Athul Krishna's GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-btn"
                aria-label="Send email to Athul Krishna"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="footer-location-text">{personalInfo.location}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <a href="#home" onClick={scrollToTop} className="back-to-top-link" aria-label="Back to top of page">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

