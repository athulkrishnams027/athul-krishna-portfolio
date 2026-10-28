import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon-box">
            <Terminal size={18} className="logo-icon" />
          </div>
          <div className="logo-text">
            <span className="logo-name">Athul Krishna</span>
            <span className="logo-tag">.java</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a
              href={personalInfo.resumePath}
              download="Athul_Krishna_Resume.pdf"
              className="btn btn-secondary btn-sm nav-resume-btn"
              title="Download Athul Krishna's Resume"
            >
              <FileDown size={15} />
              <span>Resume</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}>
          <div className="mobile-nav-inner">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-nav-footer">
              <a
                href={personalInfo.resumePath}
                download="Athul_Krishna_Resume.pdf"
                className="btn btn-primary"
                onClick={closeMenu}
              >
                <FileDown size={18} />
                <span>Download Resume</span>
              </a>
              <div className="mobile-contact-quick">
                <span>{personalInfo.location}</span>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

