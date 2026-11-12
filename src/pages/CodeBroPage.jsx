import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Zap,
  Globe,
  Smartphone,
  Search,
  Clock,
  HelpCircle,
  PlusCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { codeBroData, personalInfo } from '../data/portfolioData';
import SEOHead from '../components/SEOHead';
import './CodeBroPage.css';

export default function CodeBroPage() {
  const [selectedPackage, setSelectedPackage] = useState(codeBroData.packages[1]);

  const packageComparison = [
    { feature: 'Responsive Pages', starter: '1 - 5 Pages', professional: 'Up to 10 Pages', premium: 'Unlimited Custom Modules' },
    { feature: 'Turnaround Time', starter: '4 - 7 Days', professional: '7 - 14 Days', premium: '15 - 30 Days' },
    { feature: 'UI / UX Design', starter: 'Modern Standard', professional: 'Bespoke Conversion-First', premium: 'Enterprise Custom Design' },
    { feature: 'Backend & Database', starter: 'Static / Form API', professional: 'CMS / Dynamic API', premium: 'Full Spring Boot & PostgreSQL' },
    { feature: 'Authentication & Roles', starter: '—', professional: 'Optional Add-on', premium: 'Included (JWT / RBAC)' },
    { feature: 'Admin Control Panel', starter: '—', professional: 'Optional Add-on', premium: 'Included Custom Dashboard' },
    { feature: 'SEO & Performance Tagging', starter: 'Core Tags', professional: 'Comprehensive OpenGraph & Meta', premium: 'Full Technical SEO Suite' },
    { feature: 'Free Bug Fixing Support', starter: '1 Month', professional: '2 Months', premium: '3 Months Enterprise SLA' },
    { feature: 'Direct WhatsApp Setup', starter: 'Included', professional: 'Included', premium: 'Included' }
  ];

  const handleInquirePackage = (pkg) => {
    const text = encodeURIComponent(
      `Hi Athul, I am interested in the ${pkg.name} (${pkg.price}) by CODE BRO. I would like to discuss my project requirements.`
    );
    window.open(`https://wa.me/919207591476?text=${text}`, '_blank');
  };

  return (
    <div className="code-bro-page">
      <SEOHead
        title="CODE BRO | Freelance Web Development Studio"
        description="CODE BRO by Athul Krishna — Build. Innovate. Elevate. Modern website development, business portfolios, and custom web applications starting from ₹7,999."
      />

      {/* Code Bro Brand Hero Header */}
      <header className="cb-hero-section">
        <div className="container cb-hero-container">
          <div className="cb-brand-badge">
            <Sparkles size={14} className="cb-sparkle-icon" />
            <span>Freelance Web Studio</span>
          </div>

          <h1 className="cb-hero-title">
            <span className="cb-title-brand">CODE BRO</span>
            <span className="cb-title-tagline">Build. Innovate. Elevate.</span>
          </h1>

          <p className="cb-hero-lead">
            {codeBroData.summary} Transparent pricing, responsive zero-overflow engineering, and modern web interfaces engineered by a professional Java Full Stack developer.
          </p>

          <div className="cb-hero-buttons">
            <a
              href={codeBroData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cb-btn cb-btn-primary"
            >
              <MessageSquare size={16} />
              <span>Inquire via WhatsApp</span>
            </a>
            <Link to="/contact" className="cb-btn cb-btn-secondary">
              <span>Send Project Brief</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="cb-guarantee-strip">
            <div className="cb-guarantee-item">
              <CheckCircle2 size={16} />
              <span>Zero Horizontal Overflow Guarantee</span>
            </div>
            <div className="cb-guarantee-item">
              <CheckCircle2 size={16} />
              <span>Mobile-First Responsive Testing</span>
            </div>
            <div className="cb-guarantee-item">
              <CheckCircle2 size={16} />
              <span>No Hidden Fees or Surprise Charges</span>
            </div>
          </div>
        </div>
      </header>

      {/* PRICING PACKAGES */}
      <section className="cb-packages-section">
        <div className="container">
          <div className="cb-section-header">
            <span className="cb-section-tag">Website Development Packages</span>
            <h2 className="cb-section-title">Transparent Project Pricing</h2>
            <p className="cb-section-desc">
              Choose the package that fits your stage, from simple personal portfolios to multi-module full-stack web applications.
            </p>
          </div>

          <div className="cb-packages-grid">
            {codeBroData.packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`cb-package-card ${pkg.popular ? 'popular' : ''}`}
              >
                {pkg.popular && <span className="cb-popular-ribbon">Most Popular</span>}

                <div className="cb-pkg-top">
                  <span className="cb-pkg-badge">{pkg.badge}</span>
                  <h3 className="cb-pkg-name">{pkg.name}</h3>
                  <div className="cb-pkg-price-row">
                    <span className="cb-pkg-price">{pkg.price}</span>
                    <span className="cb-pkg-period">/{pkg.period}</span>
                  </div>
                  <p className="cb-pkg-desc">{pkg.description}</p>
                  <div className="cb-pkg-delivery">
                    <Clock size={14} />
                    <span>Est. Delivery: {pkg.deliveryTime}</span>
                  </div>
                </div>

                <div className="cb-pkg-features">
                  <span className="cb-features-label">What's Included:</span>
                  <ul className="cb-features-list">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="cb-feature-item">
                        <CheckCircle2 size={15} className="cb-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cb-pkg-action">
                  <button
                    onClick={() => handleInquirePackage(pkg)}
                    className={`cb-btn ${pkg.popular ? 'cb-btn-primary' : 'cb-btn-outline'} cb-btn-full`}
                  >
                    <span>Choose {pkg.name}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGE COMPARISON TABLE */}
      <section className="cb-comparison-section">
        <div className="container">
          <div className="cb-section-header">
            <span className="cb-section-tag">Side-by-Side Review</span>
            <h2 className="cb-section-title">Package Comparison Matrix</h2>
            <p className="cb-section-desc">
              Compare features and deliverables across all 3 development tiers.
            </p>
          </div>

          <div className="cb-table-wrapper">
            <table className="cb-comparison-table">
              <thead>
                <tr>
                  <th className="th-feature">Feature / Deliverable</th>
                  <th className="th-tier">Starter (₹7,999)</th>
                  <th className="th-tier highlight-th">Professional (₹17,999)</th>
                  <th className="th-tier">Premium Web App (₹34,999+)</th>
                </tr>
              </thead>
              <tbody>
                {packageComparison.map((row, idx) => (
                  <tr key={idx}>
                    <td className="td-feature">{row.feature}</td>
                    <td className="td-val">{row.starter}</td>
                    <td className="td-val highlight-td">{row.professional}</td>
                    <td className="td-val">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MONTHLY MAINTENANCE PLANS */}
      <section className="cb-maintenance-section">
        <div className="container">
          <div className="cb-section-header">
            <span className="cb-section-tag">Ongoing Peace of Mind</span>
            <h2 className="cb-section-title">Monthly Maintenance &amp; Support Retainers</h2>
            <p className="cb-section-desc">
              Keep your website secure, blazing fast, and up-to-date with hands-free monthly developer maintenance.
            </p>
          </div>

          <div className="cb-maintenance-grid">
            {codeBroData.maintenancePlans.map((plan) => (
              <div key={plan.id} className="cb-maint-card">
                <div className="cb-maint-header">
                  {plan.badge && <span className="cb-maint-badge">{plan.badge}</span>}
                  <h3 className="cb-maint-title">{plan.name}</h3>
                  <div className="cb-maint-price-row">
                    <span className="cb-maint-price">{plan.price}</span>
                    <span className="cb-maint-period">{plan.period}</span>
                  </div>
                  <p className="cb-maint-desc">{plan.description}</p>
                </div>

                <ul className="cb-maint-features-list">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="cb-maint-feature-item">
                      <CheckCircle2 size={14} className="cb-maint-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/919207591476?text=${encodeURIComponent(`Hi Athul, I am interested in the ${plan.name} maintenance plan for my website.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cb-btn cb-btn-outline cb-btn-full"
                >
                  <span>Select {plan.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ON SERVICES */}
      <section className="cb-addons-section">
        <div className="container">
          <div className="cb-section-header">
            <span className="cb-section-tag">Modular Enhancements</span>
            <h2 className="cb-section-title">Specialized Add-On Services</h2>
            <p className="cb-section-desc">
              Need custom integrations or enhanced analytics? Bolt these onto any website package.
            </p>
          </div>

          <div className="cb-addons-grid">
            {codeBroData.addOns.map((addon, idx) => (
              <div key={idx} className="cb-addon-card">
                <div className="cb-addon-top">
                  <h4 className="cb-addon-title">{addon.title}</h4>
                  <span className="cb-addon-price">{addon.price}</span>
                </div>
                <p className="cb-addon-desc">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL INQUIRY CTA BANNER */}
      <section className="cb-cta-section">
        <div className="container">
          <div className="cb-cta-banner">
            <div className="cb-cta-content">
              <span className="cb-cta-badge">Ready to Start?</span>
              <h2 className="cb-cta-title">Let's Discuss Your Project Scope Today</h2>
              <p className="cb-cta-desc">
                Have specific design requirements or custom feature requests? Chat directly on WhatsApp or submit a brief. You'll receive a detailed, transparent proposal within 24 hours.
              </p>
            </div>
            <div className="cb-cta-buttons">
              <a
                href={codeBroData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cb-btn cb-btn-primary cb-btn-lg"
              >
                <MessageSquare size={18} />
                <span>Chat on WhatsApp</span>
              </a>
              <Link to="/contact" className="cb-btn cb-btn-secondary cb-btn-lg">
                <span>Send Contact Form</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
