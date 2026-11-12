import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, ShieldCheck, Cpu, ArrowRight, Info } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import PageHeader from '../components/PageHeader';
import SEOHead from '../components/SEOHead';
import './ProjectsPage.css';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? projects
      : filter === 'govt'
      ? projects.filter((p) => p.isGovernment)
      : projects.filter((p) => !p.isGovernment);

  return (
    <div className="projects-page">
      <SEOHead
        title="Software Engineering Projects & Case Studies"
        description="Explore enterprise government systems and full-stack software applications developed by Athul Krishna M S using Java, Spring Boot, PostgreSQL, and React."
      />

      <div className="container">
        <PageHeader
          badge="Engineering Portfolio"
          badgeIcon={Layers}
          title="Projects &amp; Case Studies"
          subtitle="Enterprise Government Platforms &amp; Full-Stack Applications"
          description="A showcase of mission-critical systems engineered with clean architectural boundaries, relational database integrity, and modern frontend interfaces."
          breadcrumbs={[{ label: 'Projects', to: '/projects' }]}
        />

        {/* Filter Tabs */}
        <div className="projects-filter-bar">
          <button
            onClick={() => setFilter('all')}
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          >
            All Systems ({projects.length})
          </button>
          <button
            onClick={() => setFilter('govt')}
            className={`filter-btn ${filter === 'govt' ? 'active' : ''}`}
          >
            Kerala Govt Enterprise (2)
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
          >
            Full-Stack &amp; DevOps (2)
          </button>
        </div>

        {/* Confidentiality Notice Box for Government Codebases */}
        <div className="govt-confidentiality-banner">
          <Info size={18} className="confidentiality-icon" />
          <div className="confidentiality-content">
            <strong>Enterprise Government Intellectual Property Note:</strong>
            <p>
              Source code repositories for the <em>Animal Husbandry Management System</em> and <em>Analytical Laboratory Management System</em> are confidential state government property deployed at Keltron ITBG. In accordance with professional non-disclosure guidelines, complete architecture diagrams, database designs, and technical workflow breakdowns are documented below in lieu of public Git links.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-catalog">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Architecture Showcase Link Banner */}
        <section className="projects-architecture-banner card">
          <div className="arch-banner-left">
            <span className="arch-tag">System Design Deep Dive</span>
            <h3 className="arch-title">Want to Inspect the Distributed Architecture?</h3>
            <p className="arch-desc">
              Explore interactive SVG diagrams detailing Spring Cloud API Gateway, Netflix Eureka discovery, stateless JWT RBAC security, and PostgreSQL ACID transactional boundaries.
            </p>
          </div>
          <Link to="/architecture" className="btn btn-primary arch-cta-btn">
            <span>Explore Technical Architecture</span>
            <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </div>
  );
}
