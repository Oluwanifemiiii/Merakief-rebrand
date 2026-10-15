import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Page not found — Merakief';
    // The host serves index.html for every path, so tell crawlers not to index this.
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => {
      document.title = prevTitle;
      meta.remove();
    };
  }, []);

  return (
    <section className="notfound">
      <div className="notfound-watermark" aria-hidden="true">
        404
      </div>
      <div className="notfound-content">
        <div className="fade-up page-eyebrow">Error 404</div>
        <h1 className="fade-up page-title" style={{ animationDelay: '.06s' }}>
          This page didn't ship.
        </h1>
        <p className="fade-up page-desc" style={{ animationDelay: '.12s' }}>
          The page you're looking for doesn't exist or has moved. Let's get
          you back on track.
        </p>
        <div className="fade-up notfound-actions" style={{ animationDelay: '.18s' }}>
          <Link to="/" className="btn-orange">
            Back to home <span className="arrow">→</span>
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
