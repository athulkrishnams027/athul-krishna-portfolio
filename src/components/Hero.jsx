import React, { useState } from 'react';
import {
  ArrowRight,
  FileDown,
  MapPin,
  Linkedin,
  Github,
  Mail,
  Copy,
  Check,
  Code2,
  Cpu,
  Layers
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

  const currentSnippet = codeSnippets[activeTab];

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
          <div className="hero-status-pill">
            <span className="pulse-indicator"></span>
            <span>Software Apprentice @ Keltron ITBG</span>
          </div>

          <h1 className="hero-name">
            <span className="hero-name-intro">Hi, I'm</span> {personalInfo.name}
          </h1>

          <p className="hero-title">{personalInfo.title}</p>

          <h2 className="hero-headline">{personalInfo.headline}</h2>

          <p className="hero-description">{personalInfo.supportingText}</p>

          <div className="hero-location">
            <MapPin size={16} className="hero-location-icon" />
            <span>{personalInfo.location}</span>
          </div>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={personalInfo.resumePath}
              download="Athul_Krishna_Resume.pdf"
              className="btn btn-secondary"
              title="Download Athul Krishna Resume PDF"
            >
              <FileDown size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Socials & Direct Contact */}
          <div className="hero-socials">
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Athul Krishna's LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Athul Krishna's GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-icon-link"
              aria-label="Send email to Athul Krishna"
            >
              <Mail size={20} />
            </a>
            <span className="hero-social-divider"></span>
            <span className="hero-experience-quick">1+ Year Hands-on Enterprise Experience</span>
          </div>
        </div>

        {/* Right Column: Code Editor Illustration */}
        <div className="hero-visual">
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
      </div>
    </section>
  );
}

