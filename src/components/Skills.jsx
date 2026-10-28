import React, { useState } from 'react';
import {
  Server,
  Code2,
  Layers,
  Database,
  Layout,
  Wrench,
  Cpu,
  Check
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import './Skills.css';

const iconMap = {
  Server: Server,
  Code2: Code2,
  Layers: Layers,
  Database: Database,
  Layout: Layout,
  Wrench: Wrench
};

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Technologies' },
    { id: 'backend', label: 'Backend' },
    { id: 'languages', label: 'Languages' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'databases', label: 'Databases' },
    { id: 'frontend', label: 'Frontend' },
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
            <span>Technical Competence</span>
          </div>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-description">
            A comprehensive overview of my technical stack, focusing on enterprise Java backends, relational databases, distributed architecture, and modern web clients.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="skills-filter-bar" role="tablist" aria-label="Skills Filter">
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
            const IconComponent = iconMap[category.icon] || Code2;
            return (
              <div key={category.id} className="skill-category-card card">
                <div className="category-header">
                  <div className="category-icon-box">
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <h3 className="category-name">{category.name}</h3>
                    <span className="category-count">{category.skills.length} competencies</span>
                  </div>
                </div>

                <div className="skills-tags-container">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-pill">
                      <span className="skill-dot"></span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level-badge">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Philosophy Box */}
        <div className="skills-philosophy-card">
          <div className="philosophy-content">
            <h4 className="philosophy-title">Architectural Philosophy &amp; Standards</h4>
            <p className="philosophy-desc">
              Writing maintainable Java enterprise code starts with clear boundary separation: separating controllers, service domain logic, and transactional data access. I emphasize API contract consistency, meaningful HTTP status codes, defensive exception handling, and normalized database schemas.
            </p>
          </div>
          <div className="philosophy-checkmarks">
            <div className="philosophy-item">
              <Check size={16} className="check-icon" />
              <span>Strict Layered MVC Architecture</span>
            </div>
            <div className="philosophy-item">
              <Check size={16} className="check-icon" />
              <span>Declarative Transactions (@Transactional)</span>
            </div>
            <div className="philosophy-item">
              <Check size={16} className="check-icon" />
              <span>Stateless RESTful API Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

