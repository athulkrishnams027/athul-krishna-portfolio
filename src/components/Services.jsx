import React from 'react';
import {
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Code2,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { freelanceServices } from '../data/portfolioData';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Freelance Solutions</span>
          </div>
          <h2 className="section-title">Web Engineering &amp; Development Services</h2>
          <p className="section-description">
            High-performance, modern web development solutions tailored for businesses, professionals, and product launches—backed by robust Java backend standards and clean React engineering.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {freelanceServices.map((service) => (
            <div key={service.id} className="service-card card">
              {/* Authentic Technology Photography Thumbnail */}
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
                <h3 className="service-title">{service.title}</h3>
                <p className="service-tagline">{service.tagline}</p>
                <p className="service-description">{service.description}</p>

                {/* Features List */}
                <div className="service-features-list">
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
                  <a
                    href="#contact"
                    className="btn btn-secondary btn-sm service-contact-btn"
                    title={`Discuss ${service.title}`}
                  >
                    <span>Request Details</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Collaboration Callout */}
        <div className="services-cta-banner">
          <div className="cta-banner-content">
            <div className="cta-banner-tag">
              <Sparkles size={16} />
              <span>Tailored Technical Deliverables</span>
            </div>
            <h3 className="cta-banner-title">
              Have a Custom Project or Enterprise Requirement?
            </h3>
            <p className="cta-banner-desc">
              Whether you need a dedicated Java backend microservice, a high-converting business landing page, or a full-stack web application, let's architect a dependable solution.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary cta-banner-btn">
            <span>Start a Conversation</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
