import React, { useState } from 'react';
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
  PhoneCall,
  CheckCircle2,
  AlertCircle,
  Clock,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import PageHeader from '../components/PageHeader';
import SEOHead from '../components/SEOHead';
import './ContactPage.css';

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: 'Java Spring Boot Backend / Enterprise System',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fallbackToMailto = () => {
    const subject = encodeURIComponent(
      formData.subject || `Project Inquiry: ${formData.projectType} — from ${formData.name || 'Client'}`
    );
    const bodyText = `Hello Athul,

Project / Inquiry Type: ${formData.projectType}
Subject: ${formData.subject || 'Direct Inquiry'}

Message:
${formData.message}

Best regards,
${formData.name}
Email: ${formData.email}`;

    const body = encodeURIComponent(bodyText);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setStatusMessage('Please fill in your name, email, and message before sending.');
      return;
    }

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
            subject: formData.subject || `Inquiry: ${formData.projectType}`,
            projectType: formData.projectType,
            message: formData.message,
            _subject: `New Portfolio Inquiry from ${formData.name} [${formData.projectType}]`
          })
        });

        if (response.ok) {
          setFormStatus('success');
          setStatusMessage('Thank you! Your message has been sent directly to Athul. I will respond within 24 hours.');
          setFormData({
            name: '',
            email: '',
            subject: '',
            projectType: 'Java Spring Boot Backend / Enterprise System',
            message: ''
          });
        } else {
          const data = await response.json().catch(() => ({}));
          setFormStatus('error');
          setStatusMessage(data.error || 'Server error occurred. Opening your email client directly...');
          fallbackToMailto();
        }
      } catch (err) {
        setFormStatus('error');
        setStatusMessage('Network connection error. Launching your email client fallback...');
        fallbackToMailto();
      }
    } else {
      // Truthful direct mailto client fallback (never fake success!)
      setFormStatus('submitting');
      setTimeout(() => {
        setFormStatus('idle');
        fallbackToMailto();
      }, 400);
    }
  };

  return (
    <div className="contact-page">
      <SEOHead
        title="Contact Athul Krishna | Get in Touch"
        description="Connect with Athul Krishna M S for Java Spring Boot openings, full-stack microservices contracts, or freelance website development."
      />

      <div className="container">
        <PageHeader
          badge="Direct Inquiries"
          badgeIcon={Send}
          title="Let's Build Something Great Together"
          subtitle="Enterprise Openings • Technical Collaborations • Web Projects"
          description="Have an enterprise Java opening, backend microservices requirement, or freelance website project? Reach out through any channel below."
          breadcrumbs={[{ label: 'Contact', to: '/contact' }]}
        />

        <div className="contact-page-layout">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="contact-channels-column">
            <div className="contact-availability-card card">
              <span className="contact-pulse-dot"></span>
              <div>
                <h4 className="avail-title">Currently Open for Opportunities</h4>
                <p className="avail-desc">Available for Full-Time Java Developer Roles &amp; Freelance Projects.</p>
              </div>
            </div>

            <h3 className="channels-section-heading">Direct Communication Channels</h3>

            <div className="contact-cards-stack">
              {/* Email Card */}
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
                  onClick={handleCopyEmail}
                  className="copy-btn"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={16} className="copied-check" /> : <Copy size={16} />}
                </button>
              </div>

              {/* WhatsApp Card */}
              <div className="contact-channel-card card">
                <div className="channel-icon-box whatsapp-box">
                  <MessageSquare size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">WhatsApp Live Chat</span>
                  <a
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value"
                  >
                    +91 92075 91476 (Message directly)
                  </a>
                </div>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="copy-btn"
                  title="Open WhatsApp chat"
                  aria-label="Open WhatsApp chat"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* LinkedIn Card */}
              <div className="contact-channel-card card">
                <div className="channel-icon-box linkedin-box">
                  <Linkedin size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">LinkedIn Profile</span>
                  <a
                    href={personalInfo.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value"
                  >
                    linkedin.com/in/athulkrishnams
                  </a>
                </div>
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="copy-btn"
                  title="Open LinkedIn"
                  aria-label="Open LinkedIn"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* GitHub Card */}
              <div className="contact-channel-card card">
                <div className="channel-icon-box github-box">
                  <Github size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">GitHub Repository</span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value"
                  >
                    github.com/athulkrishnams027
                  </a>
                </div>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="copy-btn"
                  title="Open GitHub"
                  aria-label="Open GitHub"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Location Card */}
              <div className="contact-channel-card card">
                <div className="channel-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Location / Base</span>
                  <span className="channel-value static">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee Card */}
            <div className="response-guarantee-card card">
              <Clock size={18} className="guarantee-icon" />
              <div>
                <h5 className="guarantee-title">Fast Response Guarantee</h5>
                <p className="guarantee-desc">All inquiries receive a response within 24 hours on business days.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="contact-form-column">
            <div className="contact-form-card card">
              <div className="form-card-header">
                <h3 className="form-card-title">Send a Direct Message</h3>
                <p className="form-card-subtitle">
                  Fill in your details below and I'll get back to you promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="inquiry-form" noValidate>
                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Your Name <span className="required-star">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Nair / Sarah Jenkins"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      Your Email Address <span className="required-star">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@company.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    Subject / Discussion Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Java Full Stack Developer Role / Web Project Inquiry"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-project-type" className="form-label">
                    Category of Inquiry
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="Java Spring Boot Backend / Enterprise System">
                      Java Spring Boot Backend / Enterprise System
                    </option>
                    <option value="Full-Stack React + Spring Boot Application">
                      Full-Stack React + Spring Boot Application
                    </option>
                    <option value="CODE BRO Starter Website (₹7,999)">
                      CODE BRO Starter Website (₹7,999)
                    </option>
                    <option value="CODE BRO Professional Website (₹17,999)">
                      CODE BRO Professional Website (₹17,999)
                    </option>
                    <option value="CODE BRO Premium Web Application (₹34,999+)">
                      CODE BRO Premium Web Application (₹34,999+)
                    </option>
                    <option value="Full-Time Engineering Role Interview">
                      Full-Time Engineering Role Interview
                    </option>
                    <option value="General Technical Consultation">
                      General Technical Consultation
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message / Project Details <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your project, timeline, tech requirements, or role specifications..."
                    className="form-textarea"
                    required
                  ></textarea>
                </div>

                {/* Form Feedback Alerts */}
                {formStatus === 'success' && (
                  <div className="form-alert form-alert-success" role="alert">
                    <CheckCircle2 size={18} className="alert-icon" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="form-alert form-alert-error" role="alert">
                    <AlertCircle size={18} className="alert-icon" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="btn btn-primary form-submit-btn"
                >
                  {formStatus === 'submitting' ? (
                    <span>Dispatching Message...</span>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p className="form-guarantee-note">
                  {formspreeId
                    ? 'Submissions dispatched directly via Formspree with instant email client fallback.'
                    : 'Submissions launch your default email client directly with pre-filled parameters. Zero fake success.'}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
