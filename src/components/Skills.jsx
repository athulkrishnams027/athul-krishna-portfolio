import React, { useState } from 'react';
import {
  Server,
  Code2,
  Layers,
  Database,
  Layout,
  Wrench,
  Cpu,
  Check,
  ShieldCheck,
  Boxes,
  Terminal,
  Globe,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import './Skills.css';

const categoryIconMap = {
  Server: Server,
  Layout: Layout,
  Database: Database,
  Layers: Layers,
  Wrench: Wrench
};

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Categories' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'database', label: 'Database' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'tools', label: 'Tools & DevOps' }
  ];

  const filteredCategories =
    selectedFilter === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedFilter);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-description">
            Hands-on technical competencies categorized by engineering domains—from enterprise Java backends and distributed microservices to modern React web interfaces.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="skills-filter-bar" role="tablist" aria-label="Skills Filter Tabs">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              role="tab"
              aria-selected={selectedFilter === filter.id}
              className={`filter-pill ${selectedFilter === filter.id ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="skills-cards-grid">
          {filteredCategories.map((category) => {
            const IconComponent = categoryIconMap[category.icon] || Code2;
            return (
              <div key={category.id} className="skill-category-card card">
                <div className="category-header">
                  <div className="category-icon-box">
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <h3 className="category-name">{category.name}</h3>
                    <p className="category-desc">{category.description}</p>
                  </div>
                </div>

                <div className="skills-tags-container">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-pill">
                      <div className="skill-indicator-dot"></div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level-badge">{skill.tag || skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Architectural Standards & Best Practices */}
        <div className="skills-philosophy-card">
          <div className="philosophy-header">
            <div className="philosophy-tag">
              <Sparkles size={14} />
              <span>Engineering Standard</span>
            </div>
            <h4 className="philosophy-title">Disciplined Backend &amp; Architecture Standards</h4>
            <p className="philosophy-desc">
              Writing maintainable Java enterprise code starts with clear boundary separation: isolating controllers, business services, and transactional repositories. I emphasize strict HTTP semantics, descriptive exceptions, normalized relational models, and clean version control.
            </p>
          </div>
          <div className="philosophy-checkmarks">
            <div className="philosophy-item">
              <Check size={16} className="check-icon" />
              <span>Layered Architecture &amp; MVC Design Pattern</span>
            </div>
            <div className="philosophy-item">
              <Check size={16} className="check-icon" />
              <span>Strict Transaction Boundaries (@Transactional)</span>
            </div>
            <div className="philosophy-item">
              <Check size={16} className="check-icon" />
              <span>Stateless RESTful APIs &amp; Standard HTTP Statuses</span>
            </div>
            <div className="philosophy-item">
              <Check size={16} className="check-icon" />
              <span>Containerized Multi-Stage Builds with Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
