import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link so it genuinely creates an email draft for the user
    const subject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    );
    const body = encodeURIComponent(
      `Hello Athul,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-description">
            I am actively open to Java Developer and Java Full Stack Developer opportunities. Feel free to reach out directly via email, phone, or LinkedIn.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="contact-info-column">
            <h3 className="contact-column-title">Direct Contact Information</h3>
            <p className="contact-column-intro">
              Whether you are discussing an enterprise Java opening, backend architecture, or full-stack projects, my inbox is open.
            </p>

            <div className="contact-cards-stack">
              {/* Email Card with Copy button */}
              <div className="contact-channel-card card">
                <div className="channel-icon-box">
                  <Mail size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Email Address</span>
                  <a href={`mailto:${personalInfo.email}`} className="channel-value">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={16} className="copied-check" /> : <Copy size={16} />}
                  <span className="copy-tooltip">{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Card */}
              <div className="contact-channel-card card">
                <div className="channel-icon-box">
                  <Phone size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Phone &amp; WhatsApp</span>
                  <a href={`tel:${personalInfo.phone}`} className="channel-value">
                    {personalInfo.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="contact-channel-card card">
                <div className="channel-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Current Location</span>
                  <span className="channel-value static">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-socials-group">
              <span className="socials-label">Professional Profiles:</span>
              <div className="contact-social-buttons">
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary contact-social-btn"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary contact-social-btn"
                >
                  <Github size={18} />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Email Composer Form */}
          <div className="contact-form-column">
            <div className="contact-form-card card">
              <div className="form-header">
                <h4 className="form-title">Send a Direct Message</h4>
                <p className="form-subtitle">
                  Fill out this form to launch a pre-addressed email draft in your mail client.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Your Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. Java Developer Opportunity / Interview Invitation"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    placeholder="Share role details, team context, or questions..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                  ></textarea>
                </div>

                <div className="form-action-row">
                  <button type="submit" className="btn btn-primary form-submit-btn">
                    <span>Draft Email to Athul</span>
                    <Send size={16} />
                  </button>
                </div>

                <div className="form-disclosure">
                  <Sparkles size={14} className="disclosure-icon" />
                  <span>
                    Submitting opens your system email client with these details prefilled to ensure reliable direct communication without backend intermediaries.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

