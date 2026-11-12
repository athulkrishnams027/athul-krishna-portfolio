import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Layers, Send, ArrowLeft, Terminal } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <SEOHead title="404 — Page Not Found" description="The page you requested does not exist." />

      <div className="container not-found-container">
        <div className="not-found-card card">
          <div className="not-found-icon-box">
            <Terminal size={36} />
          </div>

          <span className="not-found-code">404 — Resource Not Found</span>

          <h1 className="not-found-title">Endpoint Not Mapped</h1>

          <p className="not-found-desc">
            The route or resource you are attempting to access does not exist on this portfolio. Please navigate to one of the verified application endpoints below.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              <Home size={16} />
              <span>Return Home</span>
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              <Layers size={16} />
              <span>Browse Projects</span>
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <Send size={16} />
              <span>Contact Athul</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
