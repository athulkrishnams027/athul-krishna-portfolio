import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Layers,
  ShieldCheck,
  Database,
  ArrowRight,
  Server,
  Lock,
  CheckCircle2,
  GitBranch,
  Terminal,
  Activity,
  KeyRound,
  FileCheck2,
  Workflow
} from 'lucide-react';
import { architectureTopics } from '../data/architectureData';
import PageHeader from '../components/PageHeader';
import SEOHead from '../components/SEOHead';
import './ArchitecturePage.css';

export default function ArchitecturePage() {
  const [activeTab, setActiveTab] = useState('microservices');

  const selectedTopic =
    architectureTopics.find((t) => t.id === activeTab) || architectureTopics[0];

  return (
    <div className="architecture-page">
      <SEOHead
        title="Technical Architecture & System Design"
        description="Deep dive into distributed microservices, Spring Cloud API Gateway, Netflix Eureka discovery, stateless JWT RBAC, and PostgreSQL ACID transaction boundaries."
      />

      <div className="container">
        <PageHeader
          badge="System Architecture"
          badgeIcon={Cpu}
          title="Enterprise Technical Architecture"
          subtitle="Distributed Microservices, Security &amp; Database Integrity"
          description="A recruiter-ready, engineering-level breakdown of the real architectural patterns implemented across Kerala Government enterprise systems at Keltron ITBG."
          breadcrumbs={[{ label: 'Architecture', to: '/architecture' }]}
        >
          <Link to="/projects/animal-husbandry" className="btn btn-primary">
            <span>View Animal Husbandry Case Study</span>
            <ArrowRight size={16} />
          </Link>
        </PageHeader>

        {/* Architecture Navigation Tabs */}
        <div className="architecture-tabs-nav">
          {architectureTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setActiveTab(topic.id)}
              className={`arch-tab-btn ${activeTab === topic.id ? 'active' : ''}`}
            >
              <span className="arch-tab-badge">{topic.badge}</span>
              <span className="arch-tab-title">{topic.title.split('&')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Active Architecture Topic Showcase */}
        <div className="architecture-showcase-card card">
          <div className="showcase-header">
            <div className="section-tag lime-tag">
              <Layers size={14} />
              <span>{selectedTopic.badge}</span>
            </div>
            <h2 className="showcase-title">{selectedTopic.title}</h2>
            <p className="showcase-subtitle">{selectedTopic.subtitle}</p>
            <p className="showcase-summary">{selectedTopic.summary}</p>
          </div>

          {/* Dynamic Interactive SVG / HTML Diagram per topic */}
          <div className="diagram-viewport card">
            {activeTab === 'microservices' && (
              <div className="diagram-canvas">
                <div className="diagram-legend">
                  <span className="legend-item"><span className="legend-dot green"></span> Ingress / Gateway</span>
                  <span className="legend-item"><span className="legend-dot lime"></span> Service Registry</span>
                  <span className="legend-item"><span className="legend-dot teal"></span> Domain Microservices</span>
                  <span className="legend-item"><span className="legend-dot blue"></span> PostgreSQL Schemas</span>
                </div>

                <div className="arch-grid-layout">
                  {/* Row 1: Client */}
                  <div className="diagram-box client-box">
                    <span className="box-tag">Client Layer</span>
                    <h4 className="box-title">React Single Page Application</h4>
                    <p className="box-meta">Axios Client • JWT Bearer Header • District Cascading Filters</p>
                  </div>

                  <div className="diagram-pipe">
                    <span className="pipe-text">HTTPS REST / JSON</span>
                    <div className="pipe-arrow">↓</div>
                  </div>

                  {/* Row 2: Gateway & Eureka Cluster */}
                  <div className="cluster-2col">
                    <div className="diagram-box gateway-box">
                      <span className="box-tag">Edge Routing</span>
                      <h4 className="box-title">Spring Cloud API Gateway</h4>
                      <p className="box-meta">CORS Configuration • Path Routing (/api/v1/*) • Token Verification</p>
                    </div>

                    <div className="horizontal-connector-arrow">
                      <span>Heartbeat &amp; Registry Lookups ↔</span>
                    </div>

                    <div className="diagram-box eureka-box">
                      <span className="box-tag">Discovery Engine</span>
                      <h4 className="box-title">Netflix Eureka Registry</h4>
                      <p className="box-meta">Dynamic Service Discovery • Instance Health Checks</p>
                    </div>
                  </div>

                  <div className="diagram-pipe">
                    <span className="pipe-text">Dispatched Microservice Calls</span>
                    <div className="pipe-arrow">↓</div>
                  </div>

                  {/* Row 3: Domain Services */}
                  <div className="services-row-3col">
                    <div className="diagram-box service-box">
                      <span className="box-tag">Domain 01</span>
                      <h4 className="box-title">Pet Shop Service</h4>
                      <p className="box-meta">Commercial Licensing &amp; Inspections</p>
                    </div>

                    <div className="diagram-box service-box">
                      <span className="box-tag">Domain 02</span>
                      <h4 className="box-title">Dog Breeder Service</h4>
                      <p className="box-meta">Breeder Certification &amp; Pedigree</p>
                    </div>

                    <div className="diagram-box service-box">
                      <span className="box-tag">Domain 03</span>
                      <h4 className="box-title">Citizen Pet Service</h4>
                      <p className="box-meta">Pet Registry &amp; Vaccination Records</p>
                    </div>
                  </div>

                  <div className="diagram-pipe">
                    <span className="pipe-text">Spring Data JPA / HikariCP</span>
                    <div className="pipe-arrow">↓</div>
                  </div>

                  {/* Row 4: Database Layer */}
                  <div className="diagram-box db-box">
                    <span className="box-tag">Persistence Layer</span>
                    <h4 className="box-title">PostgreSQL Relational Storage</h4>
                    <p className="box-meta">ACID Transactions • Normalized Schemas • Foreign Keys • Audit Logs</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="diagram-canvas">
                <div className="diagram-legend">
                  <span className="legend-item"><span className="legend-dot green"></span> Authentication Request</span>
                  <span className="legend-item"><span className="legend-dot lime"></span> JWT Token Minting</span>
                  <span className="legend-item"><span className="legend-dot teal"></span> SecurityContext &amp; RBAC</span>
                </div>

                <div className="security-flow-stepper">
                  <div className="stepper-step">
                    <div className="step-num-badge">1</div>
                    <div className="step-content card">
                      <div className="step-icon-row"><KeyRound size={16} /> <strong>Credentials Handshake</strong></div>
                      <p className="step-desc">Applicant dispatches username &amp; password over HTTPS to AuthController (/api/v1/auth/login).</p>
                    </div>
                  </div>

                  <div className="stepper-connector">↓</div>

                  <div className="stepper-step">
                    <div className="step-num-badge">2</div>
                    <div className="step-content card">
                      <div className="step-icon-row"><ShieldCheck size={16} /> <strong>AuthenticationManager &amp; BCrypt</strong></div>
                      <p className="step-desc">DaoAuthenticationProvider invokes UserDetailsService and validates salted BCrypt password hash against PostgreSQL credentials.</p>
                    </div>
                  </div>

                  <div className="stepper-connector">↓</div>

                  <div className="stepper-step">
                    <div className="step-num-badge">3</div>
                    <div className="step-content card">
                      <div className="step-icon-row"><FileCheck2 size={16} /> <strong>Stateless JWT Generation</strong></div>
                      <p className="step-desc">JwtTokenProvider mints HMAC-SHA256 token signed with private secret, packing username, expiration, and granted authorities.</p>
                    </div>
                  </div>

                  <div className="stepper-connector">↓</div>

                  <div className="stepper-step">
                    <div className="step-num-badge">4</div>
                    <div className="step-content card">
                      <div className="step-icon-row"><Lock size={16} /> <strong>OncePerRequestFilter &amp; RBAC Guard</strong></div>
                      <p className="step-desc">Subsequent requests include Bearer token. JwtAuthenticationFilter validates signature, parses claims, and sets SecurityContextHolder with granted roles.</p>
                      <div className="roles-pill-row">
                        <span className="badge badge-accent">ROLE_CITIZEN</span>
                        <span className="badge badge-tech">ROLE_PET_SHOP</span>
                        <span className="badge badge-lime">ROLE_INSPECTOR</span>
                        <span className="badge badge-govt">ROLE_ADMIN</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'transactions' && (
              <div className="diagram-canvas">
                <div className="transactions-diagram-layout">
                  <div className="trans-step-card card">
                    <span className="trans-step-label">Step 1</span>
                    <h4 className="trans-step-title">Controller Ingress</h4>
                    <p className="trans-step-desc">Jakarta validation (@Valid) checks request parameters. Invalid payloads fail fast with HTTP 400 Bad Request before entering transaction.</p>
                  </div>

                  <div className="trans-step-arrow">→</div>

                  <div className="trans-step-card card highlight-step">
                    <span className="trans-step-label">Step 2</span>
                    <h4 className="trans-step-title">@Transactional Boundary</h4>
                    <p className="trans-step-desc">Spring AOP intercepts method execution, opening a dedicated database connection via HikariCP with AUTOCOMMIT disabled.</p>
                  </div>

                  <div className="trans-step-arrow">→</div>

                  <div className="trans-step-card card">
                    <span className="trans-step-label">Step 3</span>
                    <h4 className="trans-step-title">Hibernate Persistence</h4>
                    <p className="trans-step-desc">JPA entities updated in first-level cache. Dirty-checking generates optimized SQL. Optimistic locking (@Version) prevents concurrent race conditions.</p>
                  </div>

                  <div className="trans-step-arrow">→</div>

                  <div className="trans-step-card card success-step">
                    <span className="trans-step-label">Step 4</span>
                    <h4 className="trans-step-title">ACID Commit / Rollback</h4>
                    <p className="trans-step-desc">If all operations succeed, PostgreSQL executes COMMIT. Any RuntimeException triggers an immediate ROLLBACK to preserve pristine data state.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'lab-workflow' && (
              <div className="diagram-canvas">
                <div className="workflow-diagram-stepper">
                  <div className="workflow-card card">
                    <div className="wf-header">
                      <span className="wf-stage">Stage 01</span>
                      <h4 className="wf-title">Requisition Indent</h4>
                    </div>
                    <p className="wf-desc">Lab technicians specify required chemicals, purity standards, and quantity specifications in online indent form.</p>
                  </div>

                  <div className="wf-arrow">↓</div>

                  <div className="workflow-card card">
                    <div className="wf-header">
                      <span className="wf-stage">Stage 02</span>
                      <h4 className="wf-title">Multi-Tier Approval</h4>
                    </div>
                    <p className="wf-desc">Hierarchical departmental approvals (Storekeeper → Procurement Officer → Lab Director) with audit trail remarks.</p>
                  </div>

                  <div className="wf-arrow">↓</div>

                  <div className="workflow-card card">
                    <div className="wf-header">
                      <span className="wf-stage">Stage 03</span>
                      <h4 className="wf-title">Batch Stock Receipt</h4>
                    </div>
                    <p className="wf-desc">Delivered reagents received into inventory, logging batch numbers, manufacturer certificates, and expiration dates.</p>
                  </div>

                  <div className="wf-arrow">↓</div>

                  <div className="workflow-card card">
                    <div className="wf-header">
                      <span className="wf-stage">Stage 04</span>
                      <h4 className="wf-title">Issue &amp; Threshold Alerts</h4>
                    </div>
                    <p className="wf-desc">Stock issued to testing teams with atomic decrement. Automated background jobs monitor threshold depletion and alert managers.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Component Breakdown Table / List */}
          <div className="architecture-components-section">
            <h3 className="section-subheading">Verified Architectural Components</h3>
            <div className="arch-components-grid">
              {selectedTopic.components.map((comp, idx) => (
                <div key={idx} className="arch-component-card card">
                  <div className="comp-header">
                    <span className="comp-role-badge">{comp.role}</span>
                    <h4 className="comp-name">{comp.name}</h4>
                  </div>
                  <p className="comp-desc">{comp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Engineering Highlights */}
          <div className="architecture-highlights-section">
            <h3 className="section-subheading">Key Technical Highlights &amp; Invariants</h3>
            <ul className="arch-highlights-list">
              {selectedTopic.technicalHighlights.map((hl, idx) => (
                <li key={idx} className="arch-highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project Links Footer */}
        <section className="architecture-case-studies-cta card">
          <div className="cta-text">
            <span className="cta-tag">Applied Real-World Projects</span>
            <h3 className="cta-title">See These Architectures in Production</h3>
            <p className="cta-desc">
              Inspect how these exact distributed and transactional architectures were applied in the Animal Husbandry and Analytical Laboratory enterprise systems.
            </p>
          </div>
          <div className="cta-buttons">
            <Link to="/projects/animal-husbandry" className="btn btn-primary">
              <span>Animal Husbandry Case Study</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/projects/analytical-laboratory" className="btn btn-secondary">
              <span>Analytical Lab Case Study</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
