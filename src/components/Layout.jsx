import { NavLink } from 'react-router-dom';
import logo from '../assets/merakief-logo.png';
import { useTheme } from '../useTheme.js';
import './Layout.css';

const NAV_LINKS = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
];

function NavLinkItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
    >
      {label}
    </NavLink>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export function Header() {
  return (
    <nav className="site-nav">
      <NavLink to="/">
        <img src={logo} alt="Merakief" className="site-logo" />
      </NavLink>
      <div className="site-nav-links">
        {NAV_LINKS.map((link) => (
          <NavLinkItem key={link.to} {...link} />
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <img src={logo} alt="Merakief" className="footer-logo" />
      <div className="footer-links">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.to} to={link.to} className="footer-link">
            {link.label}
          </NavLink>
        ))}
      </div>
      <span className="footer-copy">© {new Date().getFullYear()} Merakief</span>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <div className="page-shell">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
