import { Link } from 'react-router-dom';
import './Work.css';

const WORK = [
  {
    letter: 'K',
    sector: 'Transportation',
    year: '2026',
    name: 'Korope',
    desc: 'A bus-hailing app that connects commuters with nearby buses in real time — ride-hailing for mass transit, designed and built end-to-end through to launch.',
    tags: ['Mobile', 'Product design', 'Backend'],
  },
  {
    letter: 'V',
    sector: 'Energy',
    year: '2025',
    name: 'Voltaire Grid',
    desc: 'Cloud infrastructure and a real-time monitoring dashboard for a Lagos independent power producer.',
    tags: ['Cloud', 'Dashboards', 'DevOps'],
  },
  {
    letter: 'F',
    sector: 'Agriculture',
    year: '2026',
    name: 'Farmstead ERP',
    desc: 'A custom ERP for tracking yield, inventory, and logistics across a distributed farm network.',
    tags: ['ERP', 'Web app'],
  },
  {
    letter: 'S',
    sector: 'E-commerce',
    year: '2025',
    name: 'Sabi Market',
    desc: 'A merchant platform and checkout system built to handle high-volume order flow reliably.',
    tags: ['Web app', 'Payments'],
  },
];

export default function Work() {
  return (
    <>
      <section className="page-intro">
        <div className="fade-up page-eyebrow">Selected work</div>
        <h1 className="fade-up page-title" style={{ animationDelay: '.06s' }}>
          Real systems,
          <br />
          shipped and running.
        </h1>
        <p className="fade-up page-desc" style={{ animationDelay: '.12s' }}>
          A sample of the products and platforms we've built across
          transportation, energy, and agriculture.
        </p>
      </section>

      <section className="work-section">
        <div className="work-grid">
          {WORK.map((w) => (
            <div className="work-card" key={w.name}>
              <div className="work-card-top">
                <span className="work-sector">{w.sector}</span>
                <span className="work-year">{w.year}</span>
              </div>
              <div className="work-letter">{w.letter}</div>
              <div className="work-body">
                <h3 className="work-name">{w.name}</h3>
                <p className="work-desc">{w.desc}</p>
                <div className="work-tags">
                  {w.tags.map((t) => (
                    <span className="work-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2 className="cta-title">Something like this, for you?</h2>
        <Link to="/contact" className="btn-orange cta-btn">
          Start a project
        </Link>
      </section>
    </>
  );
}
