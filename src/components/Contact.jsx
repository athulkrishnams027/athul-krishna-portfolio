import React, { useState, useEffect } from 'react';
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
  Clock,
  Compass
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Business Website Development',
    budget: 'Flexible / Open to Discussion',
    message: '',
    contactMethod: 'Email'
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  // Check if Formspree ID is configured in environment
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  // Listen for service selection from Services section
  useEffect(() => {
    const handleServiceSelect = (e) => {
      if (e.detail && e.detail.service) {
        setFormData((prev) => ({ ...prev, projectType: e.detail.service }));
      }
    };

    window.addEventListener('select-portfolio-service', handleServiceSelect);
    return () => window.removeEventListener('select-portfolio-service', handleServiceSelect);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setStatusMessage('Please fill in your name, email, and project description.');
      return;
    }

    // If Formspree ID is configured, submit via Formspree API
    if (formspreeId && formspreeId.trim() !== '') {
      setFormStatus('submitting');
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId.trim()}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            projectType: formData.projectType,
            budget: formData.budget,
            preferredContact: formData.contactMethod,
            message: formData.message,
            _subject: `New Portfolio Inquiry from ${formData.name} [${formData.projectType}]`
          })
        });

        if (response.ok) {
          setFormStatus('success');
          setStatusMessage('Thank you! Your inquiry has been sent directly to Athul. I will respond within 24 hours.');
          setFormData({
            name: '',
            email: '',
            projectType: 'Business Website Development',
            budget: 'Flexible / Open to Discussion',
            message: '',
            contactMethod: 'Email'
          });
        } else {
          const data = await response.json().catch(() => ({}));
          setFormStatus('error');
          setStatusMessage(data.error || 'Failed to submit form. Opening email client fallback...');
          // Trigger mailto fallback on server error
          fallbackToMailto();
        }
      } catch (err) {
        setFormStatus('error');
        setStatusMessage('Network error. Launching your email client directly...');
        fallbackToMailto();
      }
    } else {
      // Direct email client fallback (guarantees real message delivery with zero fake success)
      fallbackToMailto();
    }
  };

  const fallbackToMailto = () => {
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.projectType} — from ${formData.name || 'Client'}`
    );
    const bodyText = `Hello Athul,

Project Type: ${formData.projectType}
Estimated Budget: ${formData.budget}
Preferred Contact Method: ${formData.contactMethod}

Project Description:
${formData.message}

Best regards,
${formData.name}
Email: ${formData.email}`;

    const body = encodeURIComponent(bodyText);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const whatsappDirectUrl = `${personalInfo.whatsappUrl}?text=${encodeURIComponent(
    `Hello Athul, I visited your portfolio and would like to discuss a project regarding ${formData.projectType}.`
  )}`;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag lime-tag">
            <MessageSquare size={14} />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="section-title">Let's Build Something Great Together.</h2>
          <p className="section-description">
            Have an enterprise Java opening, backend microservice requirement, or website project in mind? Reach out and let's discuss how I can help bring it to life.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="contact-info-column">
            <div className="contact-availability-badge">
              <span className="contact-pulse-dot"></span>
              <span>Actively available for opportunities &amp; projects</span>
            </div>

            <h3 className="contact-column-title">Direct Communication Channels</h3>
            <p className="contact-column-intro">
              I am open to Java Full Stack Developer roles, backend engineering contracts, and freelance web projects. Choose your preferred channel to connect:
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

              {/* Location Card */}
              <div className="contact-channel-card card">
                <div className="channel-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Location &amp; Timezone</span>
                  <span className="channel-value static">{personalInfo.location} (IST / UTC+5:30)</span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons: Email, WhatsApp, LinkedIn */}
            <div className="contact-actions-row">
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-secondary contact-action-btn"
                title="Send an email to Athul"
              >
                <Mail size={16} />
                <span>Email Me</span>
              </a>

              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary contact-action-btn whatsapp-btn"
                title="Open WhatsApp chat with Athul"
              >
                <PhoneCall size={16} />
                <span>WhatsApp Me</span>
              </a>

              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary contact-action-btn"
                title="View LinkedIn Profile"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Connectivity Visual Accent */}
            <div className="contact-accent-card">
              <div className="contact-accent-img-wrap">
                <img
                  src="/images/contact-datacenter-accent.webp"
                  alt="Enterprise infrastructure and cloud server telemetry"
                  className="contact-accent-img"
                  loading="lazy"
                />
                <div className="contact-accent-overlay"></div>
                <div className="contact-accent-content">
                  <div className="accent-meta-row">
                    <Clock size={14} className="accent-icon" />
                    <span>Response Time: Typically under 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="contact-form-column">
            <div className="contact-form-card card">
              <div className="form-card-header">
                <h3 className="form-card-title">Send a Project Inquiry</h3>
                <p className="form-card-subtitle">
                  Fill in your project requirements below to initiate a discussion.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="inquiry-form" noValidate>
                {/* Name & Email Row */}
                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="inquiry-name" className="form-label">
                      Your Name <span className="required-star">*</span>
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Morgan"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiry-email" className="form-label">
                      Your Email <span className="required-star">*</span>
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@company.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Project Type & Budget Row */}
                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="inquiry-projectType" className="form-label">
                      Project Type <span className="required-star">*</span>
                    </label>
                    <select
                      id="inquiry-projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="Business Website Development">Business Website Development</option>
                      <option value="Personal Portfolio Development">Personal Portfolio Development</option>
                      <option value="Landing Page Development">Landing Page Development</option>
                      <option value="React Frontend Development">React Frontend Development</option>
                      <option value="Java Spring Boot Backend Development">Java Spring Boot Backend</option>
                      <option value="Custom Web Applications">Custom Web Applications</option>
                      <option value="Full-Time Java Full Stack Role">Full-Time Java Full Stack Role</option>
                      <option value="Other Technical Inquiry">Other Technical Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiry-budget" className="form-label">
                      Estimated Budget (Optional)
                    </label>
                    <select
                      id="inquiry-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="Flexible / Open to Discussion">Flexible / Open to Discussion</option>
                      <option value="Under ₹10,000">Under ₹10,000</option>
                      <option value="₹10,000 – ₹25,000">₹10,000 – ₹25,000</option>
                      <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                      <option value="Above ₹50,000 / Enterprise">Above ₹50,000 / Enterprise</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div className="form-group">
                  <label htmlFor="inquiry-method" className="form-label">
                    Preferred Contact Method
                  </label>
                  <select
                    id="inquiry-method"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="Email">Email</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Phone Call">Phone Call</option>
                    <option value="LinkedIn Message">LinkedIn Message</option>
                  </select>
                </div>

                {/* Project Description */}
                <div className="form-group">
                  <label htmlFor="inquiry-message" className="form-label">
                    Project Description &amp; Details <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="inquiry-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your goals, required features, timeline, or job scope..."
                    rows={4}
                    required
                    className="form-textarea"
                  />
                </div>

                {/* Status Alert Banner */}
                {formStatus === 'success' && (
                  <div className="form-alert form-alert-success">
                    <CheckCircle2 size={18} className="alert-icon" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="form-alert form-alert-error">
                    <AlertCircle size={18} className="alert-icon" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="btn btn-primary form-submit-btn"
                >
                  {formStatus === 'submitting' ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p className="form-guarantee-note">
                  🔒 Your details remain strictly confidential and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
