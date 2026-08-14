import { NavLink } from 'react-router-dom';
import logo from '../assets/merakief-logo.png';
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
