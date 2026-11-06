import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  FileDown,
  MessageSquare,
  MapPin,
  Linkedin,
  Github,
  Mail,
  Copy,
  Check,
  Code2,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const codeSnippets = {
  controller: {
    filename: 'PetShopController.java',
    tabName: 'Controller',
    code: `@RestController
@RequestMapping("/api/v1/pet-shops")
@RequiredArgsConstructor
public class PetShopController {

    private final PetShopService service;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<RegistrationDto> register(
            @Valid @RequestBody RegistrationRequest req) {
        RegistrationDto res = service.registerShop(req);
        return ResponseEntity.status(HttpStatus.CREATED).body(res);
    }

    @GetMapping("/{id}/status")
    public ResponseEntity<StatusDto> checkStatus(
            @PathVariable("id") Long id) {
        return ResponseEntity.ok(service.getStatus(id));
    }
}`
  },
  service: {
    filename: 'LabRequisitionService.java',
    tabName: 'Service',
    code: `@Service
@Transactional
@RequiredArgsConstructor
public class LabRequisitionService {

    private final RequisitionRepository reqRepo;
    private final InventoryClient inventoryClient;

    public RequisitionResponse submitRequisition(RequisitionCmd cmd) {
        inventoryClient.validateStockAvailability(cmd.getItems());
        LabRequisition req = LabRequisition.createFrom(cmd);
        req.setStatus(RequisitionStatus.PENDING_APPROVAL);
        LabRequisition saved = reqRepo.save(req);
        return RequisitionResponse.from(saved);
    }
}`
  }
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState('controller');
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeRole, setFadeRole] = useState(true);

  const currentSnippet = codeSnippets[activeTab];

  // Animated rotating role text
  useEffect(() => {
    const timer = setInterval(() => {
      setFadeRole(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % personalInfo.animatedRoles.length);
        setFadeRole(true);
      }, 200);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Intro & Calls to Action */}
        <div className="hero-content">
          {/* Availability Indicator */}
          <div className="hero-status-pill">
            <span className="pulse-indicator"></span>
            <span>{personalInfo.availabilityStatus}</span>
          </div>

          <h1 className="hero-name">
            <span className="hero-name-intro">Hi, I'm</span> {personalInfo.name}
          </h1>

          {/* Professional Title & Animated Rotating Role */}
          <div className="hero-role-wrapper">
            <span className="hero-title-static">{personalInfo.title}</span>
            <span className="hero-role-separator">/</span>
            <span className={`hero-animated-role ${fadeRole ? 'visible' : 'fading'}`}>
              {personalInfo.animatedRoles[roleIndex]}
            </span>
          </div>

          <p className="hero-description">{personalInfo.introduction}</p>

          <div className="hero-location">
            <MapPin size={16} className="hero-location-icon" />
            <span>{personalInfo.location}</span>
            <span className="hero-meta-divider">&bull;</span>
            <span className="hero-subtext">{personalInfo.supportingText}</span>
          </div>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>Explore My Work</span>
              <ArrowRight size={17} />
            </a>

            <a
              href={personalInfo.resumePath}
              download="Athul_Krishna_Resume.pdf"
              className="btn btn-secondary"
              title="Download Athul Krishna Resume PDF"
            >
              <FileDown size={17} />
              <span>Download Resume</span>
            </a>

            <a href="#contact" className="btn btn-outline hero-discuss-btn">
              <Sparkles size={16} className="sparkle-icon" />
              <span>Let's Discuss a Project</span>
            </a>
          </div>

          {/* Socials & Quick Meta */}
          <div className="hero-socials">
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Athul Krishna's LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Athul Krishna's GitHub Profile"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-icon-link"
              aria-label="Send email to Athul Krishna"
              title="Email"
            >
              <Mail size={20} />
            </a>
            <span className="hero-social-divider"></span>
            <span className="hero-experience-quick">1+ Year Enterprise Experience</span>
          </div>
        </div>

        {/* Right Column: Professional Portrait Frame */}
        <div className="hero-portrait-column">
          <div className="hero-portrait-glow"></div>
          <div className="hero-portrait-frame">
            <img
              src="/images/athul-profile.png"
              alt="Athul Krishna - Java Full Stack Developer"
              className="hero-portrait-image"
              loading="eager"
            />
            {/* Status & Skill Overlay Badges */}
            <div className="portrait-badge portrait-badge-top">
              <span className="portrait-pulse-dot"></span>
              <span>Software Apprentice</span>
            </div>
            <div className="portrait-badge portrait-badge-bottom">
              <Code2 size={15} className="portrait-badge-icon" />
              <span>Java &amp; Spring Boot</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Spring Boot Code Editor Showcase */}
      <div className="container hero-code-showcase">
        <div className="code-editor-wrapper">
          <div className="code-editor-glow"></div>
          <div className="code-editor-card">
            {/* Header Bar */}
            <div className="code-editor-header">
              <div className="window-controls">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>

              {/* Tabs */}
              <div className="code-editor-tabs">
                <button
                  className={`code-tab ${activeTab === 'controller' ? 'active' : ''}`}
                  onClick={() => setActiveTab('controller')}
                >
                  <Code2 size={13} />
                  <span>PetShopController.java</span>
                </button>
                <button
                  className={`code-tab ${activeTab === 'service' ? 'active' : ''}`}
                  onClick={() => setActiveTab('service')}
                >
                  <Layers size={13} />
                  <span>LabRequisitionService.java</span>
                </button>
              </div>

              {/* Action button */}
              <button
                className="code-copy-btn"
                onClick={handleCopyCode}
                title="Copy Java code snippet"
                aria-label="Copy snippet"
              >
                {copied ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Code Body */}
            <div className="code-editor-body">
              <div className="code-line-numbers" aria-hidden="true">
                {currentSnippet.code.split('\n').map((_, index) => (
                  <span key={index}>{index + 1}</span>
                ))}
              </div>
              <pre className="code-content">
                <code>{currentSnippet.code}</code>
              </pre>
            </div>

            {/* Footer Meta */}
            <div className="code-editor-footer">
              <div className="editor-status-item">
                <span className="status-bullet"></span>
                <span>Spring Boot 3.x</span>
              </div>
              <div className="editor-status-item">
                <Cpu size={12} />
                <span>Microservices Architecture</span>
              </div>
              <div className="editor-status-item">
                <span>UTF-8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
