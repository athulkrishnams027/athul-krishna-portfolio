import React from 'react';
import {
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Tag,
  ShieldCheck,
  Send
} from 'lucide-react';
import { freelanceServices } from '../data/portfolioData';
import './Services.css';

export default function Services() {
  const handleSelectService = (serviceTitle) => {
    // If contact component listens to an event or hash
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch custom event to pre-select in contact form
      window.dispatchEvent(
        new CustomEvent('select-portfolio-service', { detail: { service: serviceTitle } })
      );
    }
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag lime-tag">
            <Briefcase size={14} />
            <span>Freelance Web Solutions</span>
          </div>
          <h2 className="section-title">Need a Website for Your Business?</h2>
          <p className="section-description">
            I build modern, responsive websites and web applications for individuals, startups, and small businesses.
          </p>
        </div>

        {/* Services Grid (6 Services) */}
        <div className="services-grid">
          {freelanceServices.map((service) => (
            <div key={service.id} className="service-card card">
              {/* Technology Photography Thumbnail */}
              <div className="service-thumbnail-wrapper">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="service-thumbnail-img"
                  loading="lazy"
                />
                <div className="service-thumbnail-overlay"></div>
                <div className="service-thumbnail-tag">
                  <span className="service-tag-dot"></span>
                  <span>{service.title}</span>
                </div>
              </div>

              {/* Service Details */}
              <div className="service-body">
                <div className="service-top-row">
                  <h3 className="service-title">{service.title}</h3>
                  {service.priceEstimate && (
                    <div className="service-price-badge" title="Estimated introductory pricing based on scope">
                      <Tag size={12} />
                      <span>{service.priceEstimate}</span>
                    </div>
                  )}
                </div>

                <p className="service-tagline">{service.tagline}</p>
                <p className="service-description">{service.description}</p>

                {/* Features List (What is Included) */}
                <div className="service-features-list">
                  <span className="service-included-label">What is included:</span>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="service-feature-item">
                      <CheckCircle2 size={15} className="feature-check-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="service-tech-badges">
                  {service.technologies.map((tech, idx) => (
                    <span key={idx} className="badge badge-tech">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="service-action-wrap">
                  <button
                    onClick={() => handleSelectService(service.title)}
                    className="btn btn-secondary btn-sm service-contact-btn"
                    title={`Inquire about ${service.title}`}
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing disclaimer note */}
        <p className="services-estimate-disclaimer">
          * Note: Prices shown above are introductory estimates. Final investment depends on custom scope, third-party integrations, design requirements, and delivery timeline.
        </p>

        {/* Bottom Collaboration Callout */}
        <div className="services-cta-banner">
          <div className="cta-banner-content">
            <div className="cta-banner-tag">
              <Sparkles size={16} />
              <span>Tailored Technical Deliverables</span>
            </div>
            <h3 className="cta-banner-title">
              Have a Custom Requirement or Technical Challenge?
            </h3>
            <p className="cta-banner-desc">
              Whether you need a full enterprise Java microservice, an interactive React client, or a high-converting website, let's architect a dependable solution.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary cta-banner-btn">
            <span>Discuss Your Project</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
