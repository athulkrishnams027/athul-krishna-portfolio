import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Layers,
  Server,
  Database,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Terminal,
  ExternalLink,
  Code2,
  AlertTriangle,
  Lightbulb,
  FileText,
  Calendar,
  Building2,
  UserCheck
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import Breadcrumb from '../components/Breadcrumb';
import SEOHead from '../components/SEOHead';
import './ProjectDetailPage.css';

export default function ProjectDetailPage() {
  const { projectId } = useParams();

  // Find project by id
  const project = projects.find((p) => p.id === projectId);

  // If project not found, redirect to projects catalog
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Find next project for bottom pagination
  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  // Specific Deep Case Study Data
  const caseStudyData = {
    'animal-husbandry': {
      problemStatement:
        'Prior to digitization, pet shop licensing, commercial dog breeder registrations, and domestic animal vaccination records across Kerala were recorded on paper logs across disparate district veterinary offices. This created severe tracking bottlenecks, verification delays, unmonitored animal welfare compliance, and zero centralized oversight for state government veterinary administrators.',
      objectives: [
        'Establish a unified, high-availability online registry for Citizen pets, Pet Shops, and Dog Breeders across all Kerala districts.',
        'Implement automated multi-tiered verification workflows spanning Taluk veterinary officers, District inspectors, and State Directors.',
        'Enforce document verification pipelines for breeder pedigree certifications, shop licenses, and veterinary inspection reports.',
        'Provide transparent real-time status tracking so citizens and commercial applicants can monitor registration progress.',
        'Architect a scalable, microservices-backed distributed backend to support high concurrent government portal traffic.'
      ],
      myContribution: [
        'Engineered Java Spring Boot RESTful services for Pet Shop licensing, Breeder registration, and Citizen pet tracking modules.',
        'Modeled PostgreSQL relational schemas with strict foreign key constraints, indexes, and JPA/Hibernate entity mappings.',
        'Constructed dynamic React registration forms, document upload components, and cascading dependent dropdowns (District → Taluk → Local Body).',
        'Configured Spring Cloud API Gateway routing rules, Netflix Eureka service discovery registration, and centralized application properties.',
        'Applied Spring Security 6 with stateless JWT token validation and role-based access control (ROLE_CITIZEN, ROLE_PET_SHOP, ROLE_INSPECTOR, ROLE_DEPT_ADMIN).'
      ],
      databaseDesign: [
        { table: 'pet_shop_registrations', desc: 'Commercial entity details, license numbers, physical address, inspection date, status.' },
        { table: 'breeder_applications', desc: 'Breeder credentials, kennel facility size, certified breeds, veterinary compliance.' },
        { table: 'citizen_pets', desc: 'Domestic pet microchip/id, breed, owner reference, vaccination expiry logs.' },
        { table: 'application_documents', desc: 'Uploaded certification attachments, file checksums, mime types, verification flags.' },
        { table: 'verification_audit_log', desc: 'Immutable timeline of state transitions, approving officer IDs, rejection remarks.' }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Handling complex hierarchical administrative jurisdiction (District → Taluk → Local Body / Village).',
          solution: 'Implemented cascading indexed relational queries with memoized React client state, drastically cutting database roundtrips and rendering instantaneous dependent selections.'
        },
        {
          challenge: 'Preventing state tampering and unauthorized approvals across different departmental ranks.',
          solution: 'Enforced method-level security with @PreAuthorize annotations and signed JWT claims verified at the Spring Cloud API Gateway boundary.'
        },
        {
          challenge: 'Ensuring absolute database consistency across multi-step registration transactions with file attachments.',
          solution: 'Applied declarative @Transactional boundaries with atomic rollback triggers if document metadata or relational persistence fails at any stage.'
        }
      ],
      architectureDetails: {
        pattern: 'Microservices with Spring Cloud & Eureka',
        gateway: 'Spring Cloud API Gateway (Port 8080)',
        discovery: 'Netflix Eureka Service Registry (Port 8761)',
        security: 'Stateless JWT with HMAC-SHA256 signature',
        database: 'PostgreSQL Relational DB with HikariCP connection pooling',
        client: 'React.js Single Page Interface with Axios HTTP client'
      }
    },
    'analytical-laboratory': {
      problemStatement:
        'State analytical chemical laboratories deal with hazardous reagents, sensitive testing chemicals, and high-value spectrometer instrumentation. Manual procurement indents and paper-based stock logbooks caused inventory discrepancies, delayed procurement cycles, chemical reagent expiration waste, and untracked equipment maintenance schedules.',
      objectives: [
        'Digitize departmental purchase requisition indents with multi-tiered hierarchical approval pipelines.',
        'Implement precision chemical stock receipt, batch tracking, threshold depletion warnings, and issue allocation logs.',
        'Track laboratory asset lifecycles, maintenance service requests, and mandatory calibration schedules.',
        'Enforce strict transactional isolation to guarantee inventory balances always match physical stock movements.',
        'Deliver interactive React analytics dashboards for laboratory procurement officers and department heads.'
      ],
      myContribution: [
        'Built Java Spring Boot backend services for Indent Management, Chemical Stock Receipt/Issue, and Asset Registry modules.',
        'Constructed custom Spring Data JPA repository queries for real-time stock balances and threshold warning evaluations.',
        'Developed React frontend modules for chemical requisition forms, inventory receipt ledgers, and approval dashboard tables.',
        'Implemented ACID transaction management ensuring stock receipts and departmental issues never produce race conditions.',
        'Supported live production maintenance and resolved critical operational tasks for Kerala Government lab personnel.'
      ],
      databaseDesign: [
        { table: 'requisition_indents', desc: 'Indent reference, requesting lab department, urgency, justification, status.' },
        { table: 'chemical_reagents', desc: 'Chemical nomenclature, CAS number, purity grade, storage safety class.' },
        { table: 'stock_batches', desc: 'Batch code, manufacturer, quantity in stock, date of receipt, expiry timestamp.' },
        { table: 'stock_issue_transactions', desc: 'Issued quantity, recipient lab technician, purpose, remaining balance.' },
        { table: 'asset_equipment', desc: 'Instrument serial, model, purchase date, calibration interval, service log.' }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Concurrent stock deductions when multiple lab technicians request reagent allocations simultaneously.',
          solution: 'Utilized pessimistic database locking (SELECT ... FOR UPDATE) and atomic @Transactional service methods to guarantee zero negative stock balances.'
        },
        {
          challenge: 'Tracking expiring chemical batches and providing proactive alerts before reagent degradation.',
          solution: 'Implemented automated Spring Boot database queries comparing expiry dates against configurable threshold parameters, surfacing visual badge warnings.'
        },
        {
          challenge: 'Enforcing multi-tier approval hierarchy (Technician → Storekeeper → Lab Director).',
          solution: 'Engineered a finite-state machine with validation guards ensuring requests cannot bypass approval prerequisites.'
        }
      ],
      architectureDetails: {
        pattern: 'Modular Domain Layered Architecture',
        gateway: 'Spring Cloud API Gateway',
        database: 'PostgreSQL Relational Database with strict @Transactional boundaries',
        caching: 'Hibernate First-Level Cache & JPA Dirty Checking',
        client: 'React.js Dashboard with real-time status badges'
      }
    },
    'student-tracker': {
      problemStatement:
        'Educational institutions frequently struggle with clunky, outdated student information systems that are difficult to deploy, lack RESTful integration points, and fail to provide predictable exception handling for missing records.',
      objectives: [
        'Develop a lightweight, high-performance student record management system with full CRUD capabilities.',
        'Implement custom exception handling with structured JSON error responses (ResourceNotFoundException).',
        'Enable dynamic multi-parameter record filtering, search, and chronological timestamp sorting.',
        'Containerize the application using multi-stage Docker builds for portable, one-command deployment.',
        'Construct an intuitive, responsive React client interface with Axios HTTP client integration.'
      ],
      myContribution: [
        'Engineered the complete Spring Boot backend with clean Controller → Service → Repository layered separation.',
        'Built custom exception handling architecture featuring @ControllerAdvice and standardized error payloads.',
        'Designed PostgreSQL database schema with automated Hibernate DDL generation and indexing.',
        'Developed React frontend components with dynamic state hooks and responsive Bootstrap/CSS styling.',
        'Authored optimized multi-stage Dockerfile combining Maven compile step with OpenJDK 17 runtime image.'
      ],
      databaseDesign: [
        { table: 'students', desc: 'Student ID, first name, last name, email address, enrollment code, creation timestamp.' },
        { table: 'courses', desc: 'Course title, department, credits, semester allocation.' },
        { table: 'enrollments', desc: 'Foreign key junction between students and enrolled academic courses.' }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Minimizing production Docker image size for lightweight deployment.',
          solution: 'Implemented a 2-stage Docker build: Stage 1 compiles using Maven; Stage 2 copies only the compiled .jar into an OpenJDK Alpine image, cutting image size by 65%.'
        },
        {
          challenge: 'Providing meaningful API error messages when a requested student record does not exist.',
          solution: 'Created custom ResourceNotFoundException handled via a centralized @RestControllerAdvice returning 404 with structured JSON.'
        }
      ],
      architectureDetails: {
        pattern: 'Layered Spring Boot Architecture (Controller - Service - Repository)',
        containerization: 'Multi-stage Dockerfile (Maven + OpenJDK 17)',
        database: 'PostgreSQL Database with persistent Docker volume',
        client: 'React.js with Axios and React Router'
      }
    },
    'movie-watchlist': {
      problemStatement:
        'Managing personal movie reviews, genres, and watch statuses in generic notes lacks relational organization, filtering, and real-time state synchronization.',
      objectives: [
        'Build an end-to-end full-stack movie catalog tracker.',
        'Implement clean Spring Boot REST APIs with MySQL relational persistence.',
        'Manage reactive frontend state using React Hooks (useState, useEffect).',
        'Provide instant filtering, genre tagging, and watch status toggling.'
      ],
      myContribution: [
        'Developed Spring Boot REST controller endpoints for CRUD movie operations.',
        'Implemented MySQL database persistence using Spring Data JPA repositories.',
        'Constructed responsive React UI with dynamic client state management.',
        'Utilized Git for structured feature branches and version control.'
      ],
      databaseDesign: [
        { table: 'movies', desc: 'Movie ID, title, genre, release year, user rating, watch status (Watched / Plan to Watch).' }
      ],
      challengesAndSolutions: [
        {
          challenge: 'Synchronizing client UI state instantly after database deletion or update.',
          solution: 'Utilized React state updater callbacks with Axios promise handlers to update the DOM without needing a full page reload.'
        }
      ],
      architectureDetails: {
        pattern: 'Decoupled Client-Server MVC',
        backend: 'Spring Boot REST APIs',
        database: 'MySQL Relational Database',
        frontend: 'React.js with React Hooks'
      }
    }
  };

  const details = caseStudyData[project.id] || caseStudyData['animal-husbandry'];

  return (
    <div className="project-detail-page">
      <SEOHead
        title={`${project.title} | Case Study & Architecture`}
        description={project.shortDescription}
        path={`/projects/${project.id}`}
      />

      <div className="container">
        {/* Breadcrumb Navigation */}
        <div className="project-detail-top-nav">
          <Breadcrumb
            items={[
              { label: 'Projects', to: '/projects' },
              { label: project.title, to: `/projects/${project.id}` }
            ]}
          />
          <Link to="/projects" className="back-to-catalog-btn">
            <ArrowLeft size={16} />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Banner Header */}
        <header className="project-detail-header">
          <div className="project-header-badges">
            <span className="badge badge-accent">{project.badge}</span>
            <span className="badge badge-tech">{project.role}</span>
            {project.isGovernment && (
              <span className="badge badge-govt">
                <Lock size={12} />
                <span>Kerala Government Enterprise</span>
              </span>
            )}
          </div>

          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-subtitle">{project.subtitle}</p>

          <p className="project-detail-lead">{project.fullDescription}</p>

          {/* Key Facts Summary Grid */}
          <div className="project-facts-grid">
            <div className="fact-box">
              <span className="fact-label">Client / Context</span>
              <span className="fact-value">{project.client}</span>
            </div>
            <div className="fact-box">
              <span className="fact-label">My Engineering Role</span>
              <span className="fact-value">{project.role}</span>
            </div>
            <div className="fact-box">
              <span className="fact-label">Core Architecture</span>
              <span className="fact-value">{details.architectureDetails.pattern}</span>
            </div>
            <div className="fact-box">
              <span className="fact-label">Primary Database</span>
              <span className="fact-value">PostgreSQL / Spring Data JPA</span>
            </div>
          </div>
        </header>

        {/* Project Visual Image Showcase */}
        <div className="project-hero-image-wrap card">
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            className="project-hero-image"
            width="1200"
            height="550"
            loading="eager"
          />
          <div className="project-hero-image-overlay"></div>
          <div className="project-hero-image-caption">
            <span className="caption-dot"></span>
            <span>{project.title} — Production Architecture &amp; Dashboard View</span>
          </div>
        </div>

        {/* Confidentiality Notice / Repository Link */}
        {project.isGovernment ? (
          <div className="confidentiality-callout card">
            <Lock size={20} className="callout-lock-icon" />
            <div className="callout-text">
              <h4 className="callout-title">Enterprise Government Codebase Notice</h4>
              <p className="callout-desc">
                Source code repositories for this system are proprietary property of the Government of Kerala / Keltron ITBG. In adherence to enterprise non-disclosure agreements, public GitHub repository links and live URLs are restricted. Complete technical specifications, microservices designs, and architectural components are documented on this page.
              </p>
            </div>
          </div>
        ) : (
          project.githubUrl && (
            <div className="public-repo-callout card">
              <Terminal size={20} className="callout-terminal-icon" />
              <div className="callout-text">
                <h4 className="callout-title">Open Source Repository Available</h4>
                <p className="callout-desc">
                  Inspect the complete source code, Dockerfile, and REST endpoints for this project directly on GitHub.
                </p>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm callout-btn"
              >
                <span>View on GitHub</span>
                <ExternalLink size={14} />
              </a>
            </div>
          )
        )}

        {/* Deep Dive Sections Grid */}
        <div className="project-deepdive-grid">
          {/* 1. PROBLEM STATEMENT & OBJECTIVES */}
          <section className="deepdive-card card">
            <div className="deepdive-section-tag">
              <AlertTriangle size={15} />
              <span>Background &amp; Challenge</span>
            </div>
            <h2 className="deepdive-heading">Problem Statement</h2>
            <p className="deepdive-paragraph">{details.problemStatement}</p>

            <h3 className="deepdive-subheading">Core Engineering Objectives:</h3>
            <ul className="deepdive-bullet-list">
              {details.objectives.map((obj, idx) => (
                <li key={idx} className="deepdive-bullet-item">
                  <CheckCircle2 size={16} className="bullet-check" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 2. MY CONTRIBUTIONS & RESPONSIBILITIES */}
          <section className="deepdive-card card">
            <div className="deepdive-section-tag lime-tag">
              <UserCheck size={15} />
              <span>Personal Ownership</span>
            </div>
            <h2 className="deepdive-heading">My Engineering Contributions</h2>
            <ul className="deepdive-bullet-list">
              {details.myContribution.map((item, idx) => (
                <li key={idx} className="deepdive-bullet-item">
                  <CheckCircle2 size={16} className="bullet-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3. CORE MODULES BREAKDOWN */}
          {project.modules && project.modules.length > 0 && (
            <section className="deepdive-card card full-width-card">
              <div className="deepdive-section-tag">
                <Layers size={15} />
                <span>Modular Architecture</span>
              </div>
              <h2 className="deepdive-heading">Functional Modules Breakdown</h2>
              <div className="modules-card-grid">
                {project.modules.map((mod, idx) => (
                  <div key={idx} className="module-detail-box">
                    <span className="module-index">0{idx + 1}</span>
                    <h3 className="module-box-title">{mod.name}</h3>
                    <p className="module-box-desc">{mod.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 4. SYSTEM ARCHITECTURE & COMPONENTS */}
          <section className="deepdive-card card full-width-card">
            <div className="deepdive-section-tag">
              <Cpu size={15} />
              <span>Distributed Architecture</span>
            </div>
            <h2 className="deepdive-heading">Technical System Architecture</h2>
            <p className="deepdive-paragraph">
              Engineered with clean separation between client presentation, API Gateway routing, microservice domain logic, and transactional relational persistence.
            </p>

            {/* Interactive Responsive SVG / HTML Architecture Diagram */}
            <div className="architecture-diagram-container">
              <div className="arch-flow-diagram">
                {/* Layer 1: Client */}
                <div className="arch-node-box client-node">
                  <span className="node-layer">Presentation Layer</span>
                  <h4 className="node-title">React SPA Client</h4>
                  <p className="node-desc">Axios HTTP Client • JWT Bearer Token Header • Cascading Dropdowns</p>
                </div>

                <div className="arch-connector-line">
                  <span className="connector-label">HTTPS / REST JSON</span>
                  <div className="arrow-down"></div>
                </div>

                {/* Layer 2: API Gateway & Eureka */}
                <div className="arch-middle-cluster">
                  <div className="arch-node-box gateway-node">
                    <span className="node-layer">Edge Ingress</span>
                    <h4 className="node-title">Spring Cloud API Gateway</h4>
                    <p className="node-desc">Reverse Proxy • Route Mapping • CORS • Rate Limiting</p>
                  </div>

                  <div className="arch-horizontal-connector">
                    <span className="h-connector-label">Heartbeat / Discovery</span>
                  </div>

                  <div className="arch-node-box eureka-node">
                    <span className="node-layer">Service Registry</span>
                    <h4 className="node-title">Netflix Eureka Discovery</h4>
                    <p className="node-desc">Dynamic Registration • Client Load Balancing</p>
                  </div>
                </div>

                <div className="arch-connector-line">
                  <span className="connector-label">Internal Microservice Dispatch</span>
                  <div className="arrow-down"></div>
                </div>

                {/* Layer 3: Core Domain Services */}
                <div className="arch-services-grid">
                  <div className="arch-node-box service-node">
                    <span className="node-layer">Domain Service</span>
                    <h4 className="node-title">{project.id === 'animal-husbandry' ? 'Pet Shop Licensing Service' : 'Requisition Indent Service'}</h4>
                    <p className="node-desc">Spring Boot 3 • Spring Security • Validation</p>
                  </div>

                  <div className="arch-node-box service-node">
                    <span className="node-layer">Domain Service</span>
                    <h4 className="node-title">{project.id === 'animal-husbandry' ? 'Breeder Registration Service' : 'Chemical Inventory Service'}</h4>
                    <p className="node-desc">Spring Boot 3 • @Transactional Boundaries</p>
                  </div>

                  <div className="arch-node-box service-node">
                    <span className="node-layer">Domain Service</span>
                    <h4 className="node-title">{project.id === 'animal-husbandry' ? 'Citizen Pet Registry Service' : 'Asset Calibration Service'}</h4>
                    <p className="node-desc">Spring Boot 3 • Audit Event Logging</p>
                  </div>
                </div>

                <div className="arch-connector-line">
                  <span className="connector-label">Spring Data JPA / Hibernate ORM</span>
                  <div className="arrow-down"></div>
                </div>

                {/* Layer 4: Relational Persistence */}
                <div className="arch-node-box db-node">
                  <span className="node-layer">Persistence Layer</span>
                  <h4 className="node-title">PostgreSQL Relational Database</h4>
                  <p className="node-desc">ACID Transactions • Foreign Key Integrity • HikariCP Connection Pool</p>
                </div>
              </div>
            </div>

            <div className="arch-learn-more-row">
              <Link to="/architecture" className="btn btn-secondary">
                <span>Explore Full Architecture Deep Dive &amp; Diagrams</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </section>

          {/* 5. DATABASE DESIGN & SCHEMA BREAKDOWN */}
          <section className="deepdive-card card full-width-card">
            <div className="deepdive-section-tag">
              <Database size={15} />
              <span>Relational Persistence</span>
            </div>
            <h2 className="deepdive-heading">Database Design &amp; Key Tables</h2>
            <p className="deepdive-paragraph">
              Relational schemas designed for high data integrity, eliminating redundancies and supporting strict audit trails.
            </p>

            <div className="database-tables-grid">
              {details.databaseDesign.map((tableItem, idx) => (
                <div key={idx} className="db-table-box">
                  <div className="db-table-header">
                    <Code2 size={15} className="table-icon" />
                    <span className="table-name">{tableItem.table}</span>
                  </div>
                  <p className="table-desc">{tableItem.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. CHALLENGES & ENGINEERED SOLUTIONS */}
          <section className="deepdive-card card full-width-card">
            <div className="deepdive-section-tag lime-tag">
              <Lightbulb size={15} />
              <span>Engineering Solutions</span>
            </div>
            <h2 className="deepdive-heading">Key Challenges &amp; Engineered Solutions</h2>

            <div className="challenges-grid">
              {details.challengesAndSolutions.map((item, idx) => (
                <div key={idx} className="challenge-item-card">
                  <div className="challenge-block">
                    <h4 className="challenge-title">
                      <span className="challenge-badge">Challenge:</span>
                      {item.challenge}
                    </h4>
                  </div>
                  <div className="solution-block">
                    <h4 className="solution-title">
                      <span className="solution-badge">Engineered Solution:</span>
                      {item.solution}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. COMPLETE TECHNOLOGY STACK */}
          <section className="deepdive-card card full-width-card">
            <div className="deepdive-section-tag">
              <Cpu size={15} />
              <span>Technology Stack</span>
            </div>
            <h2 className="deepdive-heading">Technologies Applied in this Project</h2>
            <div className="project-full-tech-chips">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="badge badge-tech tech-lg-badge">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Bottom Pagination / Project Switcher */}
        <nav className="project-pagination-nav">
          <Link to={`/projects/${prevProject.id}`} className="pagination-link prev-link card">
            <ArrowLeft size={18} />
            <div className="pagination-text">
              <span className="pagination-label">Previous Project</span>
              <span className="pagination-title">{prevProject.title}</span>
            </div>
          </Link>

          <Link to={`/projects/${nextProject.id}`} className="pagination-link next-link card">
            <div className="pagination-text text-right">
              <span className="pagination-label">Next Project</span>
              <span className="pagination-title">{nextProject.title}</span>
            </div>
            <ArrowRight size={18} />
          </Link>
        </nav>
      </div>
    </div>
  );
}
