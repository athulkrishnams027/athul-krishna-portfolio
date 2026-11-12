import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  FileDown,
  Terminal,
  Sparkles,
  Briefcase,
  Github,
  Send,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
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
      if (window.scrollY > 25) {
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
  }, [location.pathname]);

  // Lock body and html scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Render Mobile Menu Portal to document.body so it is never trapped
  // in Navbar's containing block (created by backdrop-filter and fixed height)
  const mobileMenuPortal = typeof document !== 'undefined' && isOpen
    ? createPortal(
        <div
          className={`mobile-nav-overlay open ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Header with Brand, Theme Toggle & Close Button */}
          <div className="mobile-nav-header">
            <Link to="/" className="navbar-logo" onClick={closeMenu} aria-label="Athul Krishna Home">
              <div className="logo-icon-box">
                <Terminal size={18} className="logo-icon" />
              </div>
              <div className="logo-text">
                <span className="logo-name">Athul Krishna</span>
                <span className="logo-tag">.java</span>
              </div>
            </Link>

            <div className="mobile-header-actions">
              <button
                className="theme-toggle-btn mobile-theme-toggle"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <Sun size={20} className="theme-icon sun-icon" />
                ) : (
                  <Moon size={20} className="theme-icon moon-icon" />
                )}
              </button>

              <button
                className="mobile-close-btn"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Navigation Links Scroll Container */}
          <div className="mobile-nav-content">
            <nav className="mobile-nav-body" aria-label="Mobile Main Navigation">
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.name} className="mobile-nav-item">
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `mobile-nav-link ${isActive ? 'active' : ''} ${link.isCodeBro ? 'code-bro-link' : ''}`
                      }
                    >
                      <span className="mobile-link-text">{link.name}</span>
                      {link.isCodeBro && (
                        <span className="mobile-code-bro-badge">
                          <Sparkles size={12} />
                          <span>Services</span>
                        </span>
                      )}
                      <span className="mobile-link-indicator" aria-hidden="true" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Actions: Resume & Socials */}
            <div className="mobile-nav-footer">
              <a
                href={personalInfo.resumePath}
                download="Athul_Krishna_Resume.pdf"
                className="btn btn-primary mobile-resume-btn"
                onClick={closeMenu}
                title="Download Athul Krishna's Resume"
              >
                <FileDown size={18} />
                <span>Download Resume (PDF)</span>
              </a>

              <div className="mobile-footer-meta">
                <span className="mobile-meta-location">{personalInfo.role} • {personalInfo.location}</span>
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
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
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
              {/* Theme Toggle Button */}
              <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <Sun size={18} className="theme-icon sun-icon" />
                ) : (
                  <Moon size={18} className="theme-icon moon-icon" />
                )}
              </button>

              <a
                href={personalInfo.resumePath}
                download="Athul_Krishna_Resume.pdf"
                className="btn btn-primary btn-sm nav-resume-btn"
                title="Download Athul Krishna's Resume"
              >
                <FileDown size={14} />
                <span>Resume</span>
              </a>
            </div>
          </nav>

          {/* Mobile Right Controls: Theme Toggle + Hamburger Toggle Button */}
          <div className="mobile-header-controls">
            <button
              className="theme-toggle-btn mobile-header-theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun size={19} className="theme-icon sun-icon" />
              ) : (
                <Moon size={19} className="theme-icon moon-icon" />
              )}
            </button>

            <button
              className="mobile-toggle-btn"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Render Mobile Portal Directly on Document Body */}
      {mobileMenuPortal}
    </>
  );
}
