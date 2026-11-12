import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Github,
  GitBranch,
  Star,
  ExternalLink,
  Code2,
  FolderGit2,
  Users,
  BookOpen,
  Calendar,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SEOHead from '../components/SEOHead';
import { personalInfo } from '../data/portfolioData';
import './GithubPage.css';

// Verified fallback repositories in case GitHub API rate limits or network issues occur
const fallbackRepos = [
  {
    name: 'athul-krishna-portfolio',
    html_url: 'https://github.com/athulkrishnams027/athul-krishna-portfolio',
    description: 'Modern developer portfolio built with React 18, Vite, and the Midnight Emerald design system.',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-11-12T00:00:00Z',
    visibility: 'public'
  },
  {
    name: 'student-tracker-application',
    html_url: 'https://github.com/athulkrishnams027',
    description: 'Full-stack student record management with Spring Boot REST APIs, PostgreSQL persistence, and Docker multi-stage containerization.',
    language: 'Java',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-10-20T00:00:00Z',
    visibility: 'public'
  },
  {
    name: 'movie-watchlist-crud',
    html_url: 'https://github.com/athulkrishnams027',
    description: 'Full-stack CRUD application developed with Java, Spring Boot, MySQL, and dynamic React Hooks.',
    language: 'Java',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-02-15T00:00:00Z',
    visibility: 'public'
  }
];

export default function GithubPage() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState(fallbackRepos);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGithubData = async () => {
    setLoading(true);
    setError(null);

    try {
      // 1. Fetch user profile
      const userRes = await fetch('https://api.github.com/users/athulkrishnams027');
      if (userRes.ok) {
        const userData = await userRes.json();
        setProfile(userData);
      }

      // 2. Fetch public repositories
      const reposRes = await fetch(
        'https://api.github.com/users/athulkrishnams027/repos?sort=updated&per_page=12'
      );
      if (reposRes.ok) {
        const reposData = await reposRes.json();
        if (Array.isArray(reposData) && reposData.length > 0) {
          setRepos(reposData);
        }
      }
    } catch (err) {
      setError('Unable to fetch live GitHub data (rate limit or offline). Displaying verified portfolio repositories.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubData();
  }, []);

  return (
    <div className="github-page">
      <SEOHead
        title="GitHub Activity & Open Source Repositories"
        description="Public GitHub profile and repositories for Athul Krishna M S — Java, Spring Boot, React, and Docker projects."
      />

      <div className="container">
        <PageHeader
          badge="Open Source & Code"
          badgeIcon={Github}
          title="GitHub Repositories &amp; Activity"
          subtitle="@athulkrishnams027 on GitHub"
          description="Explore public repositories, code commits, and open-source software engineering projects authored by Athul Krishna."
          breadcrumbs={[{ label: 'GitHub Activity', to: '/github' }]}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Github size={16} />
            <span>Visit GitHub Profile</span>
            <ExternalLink size={14} />
          </a>
        </PageHeader>

        {/* Profile Stats Card */}
        <div className="github-profile-card card">
          <div className="profile-card-left">
            <div className="profile-avatar-wrap">
              <img
                src={profile ? profile.avatar_url : personalInfo.profileImage}
                alt="Athul Krishna GitHub Avatar"
                className="profile-avatar-img"
                width="84"
                height="84"
              />
            </div>
            <div className="profile-identity">
              <h3 className="profile-display-name">
                {profile ? profile.name || personalInfo.fullName : personalInfo.fullName}
              </h3>
              <p className="profile-username">@athulkrishnams027</p>
              <p className="profile-bio">
                {profile && profile.bio ? profile.bio : 'Java Full Stack Developer • Spring Boot • React • PostgreSQL'}
              </p>
            </div>
          </div>

          <div className="profile-stats-strip">
            <div className="profile-stat-box">
              <span className="stat-value">{profile ? profile.public_repos : repos.length}</span>
              <span className="stat-label">Public Repos</span>
            </div>
            <div className="profile-stat-box">
              <span className="stat-value">{profile ? profile.followers : '12+'}</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="profile-stat-box">
              <span className="stat-value">Java</span>
              <span className="stat-label">Primary Stack</span>
            </div>
          </div>
        </div>

        {/* Notice/Warning banner if offline */}
        {error && (
          <div className="github-notice-banner">
            <AlertCircle size={16} className="notice-icon" />
            <span>{error}</span>
          </div>
        )}

        {/* Repositories Header & Refresh */}
        <div className="repos-header-row">
          <h2 className="repos-title">Public Repositories</h2>
          <button onClick={fetchGithubData} className="refresh-btn" disabled={loading} title="Refresh GitHub data">
            <RefreshCw size={14} className={loading ? 'spinning' : ''} />
            <span>{loading ? 'Refreshing...' : 'Refresh'}</span>
          </button>
        </div>

        {/* Repositories Grid */}
        <div className="repos-grid">
          {repos.map((repo) => (
            <div key={repo.name} className="repo-card card">
              <div className="repo-top">
                <FolderGit2 size={18} className="repo-folder-icon" />
                <span className="repo-visibility-pill">{repo.visibility || 'public'}</span>
              </div>

              <h3 className="repo-name">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-title-link">
                  {repo.name}
                </a>
              </h3>

              <p className="repo-description">
                {repo.description || 'Enterprise Java & modern web development project repository.'}
              </p>

              <div className="repo-footer">
                <div className="repo-lang-wrap">
                  {repo.language && (
                    <span className="badge badge-tech">
                      <Code2 size={12} />
                      <span>{repo.language}</span>
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="repo-star-count">
                      <Star size={12} />
                      <span>{repo.stargazers_count}</span>
                    </span>
                  )}
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link-btn"
                  aria-label={`Open repository ${repo.name}`}
                >
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Code Notice */}
        <div className="enterprise-code-note card">
          <div className="note-content">
            <h4 className="note-title">Looking for the Kerala Government Enterprise Code?</h4>
            <p className="note-desc">
              Source code for the Animal Husbandry Management System and Analytical Laboratory Management System is owned by Keltron ITBG and the Government of Kerala and is maintained on private enterprise repositories. Detailed architectural documentation, database schemas, and microservice topologies are documented in the Architecture section.
            </p>
          </div>
          <Link to="/architecture" className="btn btn-secondary">
            <span>Explore Architecture</span>
            <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
