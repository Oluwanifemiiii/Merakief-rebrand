import { Link } from 'react-router-dom';
import './Home.css';

const SERVICES = [
  { num: '01', name: 'Web Development' },
  { num: '02', name: 'Cloud Infrastructure' },
  { num: '03', name: 'UI/UX Design' },
  { num: '04', name: 'ERP Systems' },
  { num: '05', name: 'Pitch & Document Production' },
];

const WORK = [
  {
    letter: 'K',
    sector: 'Fintech',
    name: 'Korope',
    desc: 'A budgeting app that helps people move round with a budget — built end-to-end from product design through to launch.',
  },
  {
    letter: 'V',
    sector: 'Energy',
    name: 'Voltaire Grid',
    desc: 'Cloud infrastructure and a monitoring dashboard for a Lagos independent power producer.',
  },
  {
    letter: 'F',
    sector: 'Agriculture',
    name: 'Farmstead ERP',
    desc: 'A custom ERP system for tracking yield, inventory, and logistics across a distributed farm network.',
  },
];

const MARQUEE_ITEMS = SERVICES.map((s) => s.name);

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-frame-h" />
        <div className="hero-frame-v" />
        <div className="hero-watermark">M</div>

        <div className="hero-content">
          <div className="fade-up hero-eyebrow">
            <span className="pulse-dot" />
            Lagos &nbsp;/&nbsp; Technology Studio
          </div>
          <h1 className="fade-up hero-title" style={{ animationDelay: '.08s' }}>
            Product.
            <br />
            Design.
            <br />
            Infrastructure.
          </h1>
          <p className="fade-up hero-desc" style={{ animationDelay: '.16s' }}>
            We build full-stack applications, custom ERP systems, and cloud
            infrastructure for energy, fintech, agriculture, and e-commerce
            companies across Nigeria and beyond.
          </p>
          <div className="fade-up hero-actions" style={{ animationDelay: '.24s' }}>
            <Link to="/contact" className="btn-orange">
              Start a project <span className="arrow">→</span>
            </Link>
            <Link to="/work" className="btn-outline">
              See our work
            </Link>
          </div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marq">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((m, i) => (
            <span key={i} className="marq-item">
              {m} <span className="marq-dot">●</span>
            </span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="section-head">
          <h2 className="section-title">What we do</h2>
          <Link to="/services" className="section-link">
            All services →
          </Link>
        </div>
        {SERVICES.map((svc) => (
          <div className="svc-card" key={svc.num}>
            <div className="svc-left">
              <span className="svc-num">{svc.num}</span>
              <span className="svc-name">{svc.name}</span>
            </div>
            <span className="svc-arrow">→</span>
          </div>
        ))}
        <div className="section-rule" />
      </section>

      <section className="section">
        <div className="section-head">
          <h2 className="section-title">Selected work</h2>
          <Link to="/work" className="section-link">
            All work →
          </Link>
        </div>
        <div className="work-grid">
          {WORK.map((w) => (
            <div className="work-card" key={w.name}>
              <span className="work-sector">{w.sector}</span>
              <div className="work-letter">{w.letter}</div>
              <div className="work-body">
                <h3 className="work-name">{w.name}</h3>
                <p className="work-desc">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="philosophy">
        <div className="philosophy-inner">
          <p className="philosophy-quote">
            "We don't design for the pitch deck. We build for what ships."
          </p>
          <div>
            <div className="philosophy-eyebrow">Philosophy</div>
            <p className="philosophy-desc">
              Merakief is a Lagos-based technology studio working end-to-end —
              from the interface a customer taps to the infrastructure that
              keeps it running at 3am.
            </p>
            <Link to="/team" className="philosophy-link">
              Meet the team →
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2 className="cta-title">Ready to build?</h2>
        <Link to="/contact" className="btn-orange cta-btn">
          Get in touch
        </Link>
      </section>
    </>
  );
}
