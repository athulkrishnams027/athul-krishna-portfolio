import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Server,
  Layout,
  Database,
  Layers,
  Wrench,
  Cpu,
  ArrowRight,
  ExternalLink,
  Code2,
  CheckCircle2,
  ShieldCheck,
  Terminal,
  FolderGit2
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SEOHead from '../components/SEOHead';
import './SkillsPage.css';

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'backend', label: 'Backend Architecture' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'database', label: 'Databases & SQL' },
    { id: 'tools', label: 'DevOps & Tools' }
  ];

  const skillCards = [
    // Backend
    {
      name: 'Java (17 / 21)',
      category: 'backend',
      level: 'Core Language',
      tag: 'Primary',
      icon: Code2,
      desc: 'Object-oriented programming, modern Java language features (records, streams, pattern matching), multithreading, and memory management.',
      relatedProjects: [
        { name: 'Animal Husbandry System', path: '/projects/animal-husbandry' },
        { name: 'Analytical Lab System', path: '/projects/analytical-laboratory' },
        { name: 'Student Tracker', path: '/projects/student-tracker' }
      ]
    },
    {
      name: 'Spring Boot 3.x',
      category: 'backend',
      level: 'Enterprise Framework',
      tag: 'Core',
      icon: Server,
      desc: 'Auto-configuration, dependency injection, application runners, actuator health monitoring, and modular microservices.',
      relatedProjects: [
        { name: 'Animal Husbandry System', path: '/projects/animal-husbandry' },
        { name: 'Analytical Lab System', path: '/projects/analytical-laboratory' }
      ]
    },
    {
      name: 'Spring Data JPA & Hibernate',
      category: 'backend',
      level: 'ORM & Persistence',
      tag: 'Core',
      icon: Database,
      desc: 'Entity mapping, relationship modeling (@OneToMany, @ManyToOne), JPQL queries, lazy loading optimizations, and first-level caching.',
      relatedProjects: [
        { name: 'Animal Husbandry System', path: '/projects/animal-husbandry' },
        { name: 'Analytical Lab System', path: '/projects/analytical-laboratory' }
      ]
    },
    {
      name: 'Spring Security 6',
      category: 'backend',
      level: 'Authentication & RBAC',
      tag: 'Security',
      icon: ShieldCheck,
      desc: 'Security filter chain configuration, stateless JWT authentication, password encryption with BCrypt, and method-level access controls.',
      relatedProjects: [
        { name: 'Animal Husbandry System', path: '/projects/animal-husbandry' },
        { name: 'System Architecture', path: '/architecture' }
      ]
    },
    {
      name: 'RESTful Web APIs',
      category: 'backend',
      level: 'API Architecture',
      tag: 'Web Services',
      icon: Server,
      desc: 'Strict HTTP status codes, structured JSON error models (RFC 7807), input validation (@Valid, @NotNull), and Postman regression testing.',
      relatedProjects: [
        { name: 'Student Tracker', path: '/projects/student-tracker' },
        { name: 'Movie Watchlist', path: '/projects' }
      ]
    },
    {
      name: 'Microservices Architecture',
      category: 'backend',
      level: 'Distributed Design',
      tag: 'Architecture',
      icon: Cpu,
      desc: 'Decoupled domain services, Spring Cloud API Gateway reverse proxying, and Netflix Eureka dynamic service discovery.',
      relatedProjects: [
        { name: 'Animal Husbandry System', path: '/projects/animal-husbandry' },
        { name: 'System Architecture', path: '/architecture' }
      ]
    },

    // Frontend
    {
      name: 'React.js',
      category: 'frontend',
      level: 'SPA Development',
      tag: 'Frontend',
      icon: Layout,
      desc: 'Functional component architecture, custom hooks (useState, useEffect, useMemo), React Router v7, and seamless REST API integrations.',
      relatedProjects: [
        { name: 'Animal Husbandry System', path: '/projects/animal-husbandry' },
        { name: 'Student Tracker', path: '/projects/student-tracker' },
        { name: 'CODE BRO Studio', path: '/code-bro' }
      ]
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'frontend',
      level: 'Modern Scripting',
      tag: 'Language',
      icon: Code2,
      desc: 'Asynchronous programming (Promises, async/await), arrow functions, destructuring, modules, and event delegation.',
      relatedProjects: [
        { name: 'Student Tracker', path: '/projects/student-tracker' }
      ]
    },
    {
      name: 'HTML5 & Semantic Markup',
      category: 'frontend',
      level: 'Web Standards',
      tag: 'Markup',
      icon: Layout,
      desc: 'Accessible semantic structure, ARIA compliance, SEO-ready document hierarchy, and valid modern DOM markup.',
      relatedProjects: [
        { name: 'CODE BRO Studio', path: '/code-bro' }
      ]
    },
    {
      name: 'CSS3, Grid & Flexbox',
      category: 'frontend',
      level: 'Responsive Design',
      tag: 'Styling',
      icon: Layout,
      desc: 'CSS custom properties (design tokens), mobile-first responsive media queries, fluid clamp() typography, and zero horizontal overflow.',
      relatedProjects: [
        { name: 'Portfolio 2.0', path: '/' },
        { name: 'CODE BRO Studio', path: '/code-bro' }
      ]
    },

    // Database
    {
      name: 'PostgreSQL',
      category: 'database',
      level: 'Primary RDBMS',
      tag: 'Enterprise DB',
      icon: Database,
      desc: 'Relational schema design, complex multi-table JOINs, indexing strategies, referential integrity constraints, and ACID transactions.',
      relatedProjects: [
        { name: 'Animal Husbandry System', path: '/projects/animal-husbandry' },
        { name: 'Analytical Lab System', path: '/projects/analytical-laboratory' },
        { name: 'Student Tracker', path: '/projects/student-tracker' }
      ]
    },
    {
      name: 'MySQL',
      category: 'database',
      level: 'Relational Storage',
      tag: 'RDBMS',
      icon: Database,
      desc: 'Schema normalization, foreign key cascades, transactional consistency, and Spring Data JPA integration.',
      relatedProjects: [
        { name: 'Movie Watchlist CRUD', path: '/projects' }
      ]
    },
    {
      name: 'SQL Query Engineering',
      category: 'database',
      level: 'Data Operations',
      tag: 'Queries & DDL',
      icon: Database,
      desc: 'Writing optimized SQL statements, aggregate functions, subqueries, view creation, and defensive parameterized queries preventing injection.',
      relatedProjects: [
        { name: 'Analytical Lab System', path: '/projects/analytical-laboratory' }
      ]
    },

    // Tools & DevOps
    {
      name: 'Git & GitHub',
      category: 'tools',
      level: 'Version Control',
      tag: 'Daily VCS',
      icon: FolderGit2,
      desc: 'Branch management, pull requests, semantic commit conventions, conflict resolution, and code collaboration.',
      relatedProjects: [
        { name: 'Student Tracker Repo', path: '/projects/student-tracker' },
        { name: 'GitHub Activity', path: '/github' }
      ]
    },
    {
      name: 'Apache Maven',
      category: 'tools',
      level: 'Build Automation',
      tag: 'Build Tool',
      icon: Wrench,
      desc: 'POM dependency lifecycle, transitive dependency management, multi-module enterprise builds, and plugin configuration.',
      relatedProjects: [
        { name: 'Animal Husbandry System', path: '/projects/animal-husbandry' },
        { name: 'Student Tracker', path: '/projects/student-tracker' }
      ]
    },
    {
      name: 'Docker',
      category: 'tools',
      level: 'Containerization',
      tag: 'DevOps',
      icon: Cpu,
      desc: 'Multi-stage Dockerfiles, image optimization with OpenJDK Alpine, port mapping, and reproducible local developer environments.',
      relatedProjects: [
        { name: 'Student Tracker Dockerfile', path: '/projects/student-tracker' }
      ]
    },
    {
      name: 'Postman',
      category: 'tools',
      level: 'API Testing',
      tag: 'Testing',
      icon: Terminal,
      desc: 'REST API contract validation, environment variable scopes, bearer token injection, automated test scripts, and regression collections.',
      relatedProjects: [
        { name: 'Animal Husbandry System', path: '/projects/animal-husbandry' },
        { name: 'Analytical Lab System', path: '/projects/analytical-laboratory' }
      ]
    },
    {
      name: 'IntelliJ IDEA & STS',
      category: 'tools',
      level: 'Backend IDEs',
      tag: 'IDEs',
      icon: Terminal,
      desc: 'Spring Boot debugging, live breakpoint inspection, profiling, database tool integration, and code refactoring.',
      relatedProjects: [
        { name: 'Keltron ITBG Development', path: '/experience' }
      ]
    },
    {
      name: 'DBeaver & VS Code',
      category: 'tools',
      level: 'DB GUI & Editor',
      tag: 'Workstation',
      icon: Wrench,
      desc: 'Visual database schema exploration, query execution plans, frontend coding, and linting.',
      relatedProjects: [
        { name: 'All Full-Stack Work', path: '/projects' }
      ]
    }
  ];

  const filteredCards =
    activeCategory === 'all'
      ? skillCards
      : skillCards.filter((card) => card.category === activeCategory);

  return (
    <div className="skills-page">
      <SEOHead
        title="Technical Skills & Competencies"
        description="Comprehensive breakdown of Athul Krishna's technical skills across Java, Spring Boot, PostgreSQL, Microservices, React.js, and DevOps tools."
      />

      <div className="container">
        <PageHeader
          badge="Technical Arsenal"
          badgeIcon={Cpu}
          title="Skills &amp; Technology Stack"
          subtitle="Production-Tested Java Full Stack Competencies"
          description="A practical, hands-on technology stack honed through enterprise government projects at Keltron ITBG and modern full-stack development."
          breadcrumbs={[{ label: 'Skills', to: '/skills' }]}
        />

        {/* Category Filter Pills */}
        <div className="skills-filter-nav">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`skills-filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Skills Cards Grid */}
        <div className="skills-cards-grid">
          {filteredCards.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="skill-detail-card card">
                <div className="skill-card-header">
                  <div className="skill-icon-wrap">
                    <Icon size={20} />
                  </div>
                  <div className="skill-header-meta">
                    <span className="skill-level-pill">{skill.level}</span>
                    <span className="skill-category-pill">{skill.tag}</span>
                  </div>
                </div>

                <h3 className="skill-name">{skill.name}</h3>

                <p className="skill-desc">{skill.desc}</p>

                {/* Related Projects Links */}
                {skill.relatedProjects && skill.relatedProjects.length > 0 && (
                  <div className="skill-related-projects">
                    <span className="related-label">Applied in:</span>
                    <div className="related-links-list">
                      {skill.relatedProjects.map((p, pIdx) => (
                        <Link key={pIdx} to={p.path} className="related-project-link">
                          <span>{p.name}</span>
                          <ExternalLink size={11} />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Architectural Philosophy Callout */}
        <section className="skills-philosophy-section">
          <div className="philosophy-box card">
            <div className="philosophy-content">
              <div className="section-tag lime-tag">
                <CheckCircle2 size={14} />
                <span>Engineering Philosophy</span>
              </div>
              <h2 className="philosophy-title">Disciplined Backend Engineering Without Shortcuts</h2>
              <p className="philosophy-desc">
                I do not rely on surface-level metrics or bloated frameworks without understanding their underpinnings. I approach server engineering with a strict emphasis on transactional boundaries, clean separation of concerns (Controller → Service → Repository), defensive validation, and high-cohesion API design.
              </p>
              <div className="philosophy-pillars-grid">
                <div className="pillar-item">
                  <CheckCircle2 size={16} className="pillar-icon" />
                  <div>
                    <h4 className="pillar-title">Defensive Validation</h4>
                    <p className="pillar-desc">Sanitize and validate all client payloads before entering business boundaries.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <CheckCircle2 size={16} className="pillar-icon" />
                  <div>
                    <h4 className="pillar-title">Strict ACID Transactions</h4>
                    <p className="pillar-desc">Enforce rollback policies on runtime exceptions to prevent corrupt states.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <CheckCircle2 size={16} className="pillar-icon" />
                  <div>
                    <h4 className="pillar-title">Clean API Contracts</h4>
                    <p className="pillar-desc">Semantic HTTP status codes and RFC 7807 compliant error responses.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <CheckCircle2 size={16} className="pillar-icon" />
                  <div>
                    <h4 className="pillar-title">Seamless Client UX</h4>
                    <p className="pillar-desc">Bridge backend services with responsive, zero-overflow React interfaces.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Page Navigation */}
        <div className="section-cta-wrap">
          <Link to="/experience" className="btn btn-primary btn-lg">
            <span>Explore Career Timeline &amp; Roles</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
