import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import InteractiveBackground from './components/InteractiveBackground';

// Dedicated Route Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ArchitecturePage from './pages/ArchitecturePage';
import CodeBroPage from './pages/CodeBroPage';
import ContactPage from './pages/ContactPage';
import GithubPage from './pages/GithubPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = window.scrollY || document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(progress);

      if (totalScroll > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BrowserRouter>
      <div className="portfolio-app">
        {/* Interactive Live Background - Emerald Motion Environment */}
        <InteractiveBackground />

        {/* Scroll Progress Bar at very top */}
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Global Scroll-to-top on route change */}
        <ScrollToTop />

        {/* Global Fixed / Sticky Navbar */}
        <Navbar />

        {/* Main Routed Content */}
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
            <Route path="/code-bro" element={<CodeBroPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/github" element={<GithubPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Back to Top Button */}
        <button
          className={`back-to-top-float ${showBackToTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top of page"
          title="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </BrowserRouter>
  );
}
