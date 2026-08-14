import { Link } from 'react-router-dom';
import './Services.css';

const SERVICES = [
  {
    num: '01',
    name: 'Web Development',
    desc: 'Full-stack web applications — from customer-facing products to internal tools — built for reliability, not just for demo day.',
  },
  {
    num: '02',
    name: 'Cloud Infrastructure',
    desc: 'Provisioning, CI/CD, monitoring, and cost-aware architecture on AWS, GCP, or bare metal, sized for where you actually are.',
  },
  {
    num: '03',
    name: 'UI/UX Design',
    desc: 'Interface and product design grounded in how your users actually work — wireframes through to shippable, tested screens.',
  },
  {
    num: '04',
    name: 'ERP Systems',
    desc: 'Custom-built ERP for inventory, procurement, logistics, and finance — tailored to your operations instead of forcing you into someone else’s template.',
  },
  {
    num: '05',
    name: 'Pitch & Document Production',
    desc: 'Investor decks, technical documentation, and board materials produced with the same craft we put into product.',
  },
];

const PROCESS = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We map the problem, the users, and the constraints before writing a line of code.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Interfaces and system architecture take shape together, not in sequence.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Shipped in increments, reviewed continuously, tested against real use.',
  },
  {
    num: '04',
    title: 'Hand off',
    desc: 'Documented, owned, and yours to run — no lock-in to us.',
  },
];

export default function Services() {
  return (
    <>
      <section className="page-intro">
        <div className="fade-up page-eyebrow">Services</div>
        <h1 className="fade-up page-title" style={{ animationDelay: '.06s' }}>
          End-to-end,
          <br />
          not just the interface.
        </h1>
        <p className="fade-up page-desc" style={{ animationDelay: '.12s' }}>
          We embed with founders and operations teams to design, build, and
          run the software their business depends on — across five
          disciplines.
        </p>
      </section>

      <section className="services-section">
        {SERVICES.map((s) => (
          <div className="svc-row" key={s.num}>
            <span className="svc-num">{s.num}</span>
            <h3 className="svc-name">{s.name}</h3>
            <p className="svc-desc">{s.desc}</p>
          </div>
        ))}
        <div className="section-rule" />
      </section>

      <section className="process-section">
        <div className="process-inner">
          <h2 className="process-title">How an engagement runs</h2>
          <div className="process-grid">
            {PROCESS.map((p) => (
              <div className="step" key={p.num}>
                <div className="step-num">{p.num}</div>
                <h4 className="step-title">{p.title}</h4>
                <p className="step-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" style={{ borderTop: 'none' }}>
        <h2 className="cta-title">Have a scope in mind?</h2>
        <Link to="/contact" className="btn-orange cta-btn">
          Let's talk
        </Link>
      </section>
    </>
  );
}
