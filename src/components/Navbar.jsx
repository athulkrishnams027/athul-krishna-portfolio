import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, FileDown, Terminal, Sparkles, Layers, Briefcase, Github, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Architecture', path: '/architecture' },
    { name: 'CODE BRO', path: '/code-bro', isCodeBro: true },
    { name: 'Contact', path: '/contact' },
    { name: 'GitHub', path: '/github' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever location changes
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
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

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu} aria-label="Athul Krishna Home">
          <div className="logo-icon-box">
            <Terminal size={18} className="logo-icon" />
          </div>
          <div className="logo-text">
            <span className="logo-name">Athul Krishna</span>
            <span className="logo-tag">.java</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''} ${link.isCodeBro ? 'code-bro-link' : ''}`
                  }
                >
                  {link.isCodeBro && <Sparkles size={13} className="code-bro-sparkle" />}
                  <span>{link.name}</span>
                </NavLink>
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
              <FileDown size={14} />
              <span>Resume</span>
            </a>
          </div>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-toggle-btn"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Backdrop & Drawer */}
      <div
        className={`mobile-backdrop ${isOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-brand">
            <span className="drawer-name">Athul Krishna</span>
            <span className="drawer-tag">Java Full Stack</span>
          </div>
          <button className="mobile-close-btn" onClick={closeMenu} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'active' : ''} ${link.isCodeBro ? 'code-bro-link' : ''}`
                }
              >
                {link.isCodeBro && <Sparkles size={16} className="code-bro-sparkle" />}
                <span>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-footer">
          <a
            href={personalInfo.resumePath}
            download="Athul_Krishna_Resume.pdf"
            className="btn btn-primary mobile-resume-btn"
            onClick={closeMenu}
          >
            <FileDown size={16} />
            <span>Download Resume (PDF)</span>
          </a>

          <div className="mobile-socials-row">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-icon"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-icon"
              aria-label="LinkedIn Profile"
            >
              <Briefcase size={18} />
            </a>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mobile-social-icon"
              aria-label="Contact Athul"
            >
              <Send size={18} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
