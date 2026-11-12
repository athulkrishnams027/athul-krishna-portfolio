import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://athul-krishna-portfolio-livid.vercel.app';
const DEFAULT_TITLE = 'Athul Krishna | Java Full Stack Developer';
const DEFAULT_DESC =
  'Portfolio of Athul Krishna — Java Full Stack Developer specializing in Java, Spring Boot, REST APIs, Microservices, PostgreSQL, and React web applications.';

export default function SEOHead({ title, description, path }) {
  const location = useLocation();
  const currentPath = path || location.pathname;

  useEffect(() => {
    // Update Title
    const pageTitle = title ? `${title} | Athul Krishna` : DEFAULT_TITLE;
    document.title = pageTitle;

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || DEFAULT_DESC);
    }

    // Update OG Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', pageTitle);
    }

    // Update OG Description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description || DEFAULT_DESC);
    }

    // Update OG URL
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `${BASE_URL}${currentPath}`);
    }

    // Update or create Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${BASE_URL}${currentPath}`);
  }, [title, description, currentPath]);

  return null;
}
