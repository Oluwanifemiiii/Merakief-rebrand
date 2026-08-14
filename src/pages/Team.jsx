import { Link } from 'react-router-dom';
import './Team.css';

const TEAM = [
  { id: '1', name: 'Add name', role: 'Add role' },
  { id: '2', name: 'Add name', role: 'Add role' },
  { id: '3', name: 'Add name', role: 'Add role' },
  { id: '4', name: 'Add name', role: 'Add role' },
];

export default function Team() {
  return (
    <>
      <section className="page-intro">
        <div className="fade-up page-eyebrow">The team</div>
        <h1 className="fade-up page-title" style={{ animationDelay: '.06s' }}>
          The people behind the build.
        </h1>
        <p className="fade-up page-desc" style={{ animationDelay: '.12s' }}>
          Engineers, designers, and infrastructure people working out of
          Lagos.
        </p>
      </section>

      <section className="team-section">
        <div className="team-grid">
          {TEAM.map((mem) => (
            <div className="member" key={mem.id}>
              <div className="member-photo">Drop a photo</div>
              <div className="member-info">
                <h3 className="member-name">{mem.name}</h3>
                <div className="member-role">{mem.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="team-statement">
        <div className="team-statement-inner">
          <p className="team-statement-lead">
            We hire for craft and ownership, not headcount.
          </p>
          <p className="team-statement-desc">
            Every engagement is staffed by people who'll still be reachable a
            year after handoff — not a rotating bench.
          </p>
        </div>
      </section>

      <section className="cta">
        <h2 className="cta-title">Want to work with us?</h2>
        <Link to="/contact" className="btn-orange cta-btn">
          Get in touch
        </Link>
      </section>
    </>
  );
}
