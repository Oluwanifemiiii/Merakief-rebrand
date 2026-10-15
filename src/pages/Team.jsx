import { Link } from 'react-router-dom';
import ucheImg from '../assets/ucheportrait.jpeg';
import xanderImg from '../assets/Xander.jpeg';
import nifemiImg from '../assets/nifemi.jpg';
import osatoImg from '../assets/osato.jpg';
import favourImg from '../assets/favouredited.png';
import princeImg from '../assets/prince.jpeg';
import maryImg from '../assets/mary.jpeg';
import zeloImg from '../assets/zelo.jpg';
import davidImg from '../assets/david.png';
import './Team.css';

const TEAM = [
  { id: '1', name: 'Uche Iloeje', role: 'Chief Executive Officer', photo: ucheImg },
  { id: '2', name: 'Alexander Afolabi', role: 'Product & Designs Systems Lead', photo: xanderImg },
  { id: '3', name: 'Oluwanifemi Ipaye', role: 'Chief Technology Officer', photo: nifemiImg },
  { id: '4', name: 'Prince Nwokolo', role: 'Chief Design Officer', photo: princeImg },
  { id: '5', name: 'Osatohamwen Omoigui', role: 'Chief Product Officer', photo: osatoImg },
  { id: '6', name: 'Favour Babalola', role: 'Product Research Lead', photo: favourImg },
  { id: '7', name: 'David Ugwuegbulam', role: 'Application Engineering Lead', photo: davidImg },
  { id: '8', name: 'Denzel Okoro', role: 'Data & Infrastructure Lead', photo: zeloImg },
  { id: '9', name: 'Mary Agbeke', role: 'Product Strategy Lead', photo: maryImg },
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
              {mem.photo ? (
                <img
                  src={mem.photo}
                  alt={mem.name}
                  className="member-photo member-photo-img"
                />
              ) : (
                <div className="member-photo member-photo-empty">Drop a photo</div>
              )}
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
