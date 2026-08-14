import { useState } from 'react';
import './Contact.css';

const EMPTY_FORM = { name: '', email: '', company: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // idle | sent
  const [error, setError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and what you’re building.');
      return;
    }
    setError('');
    // No backend is wired up yet — this simply confirms receipt client-side.
    setStatus('sent');
    setForm(EMPTY_FORM);
  }

  return (
    <>
      <section className="page-intro contact-intro">
        <div className="fade-up page-eyebrow">Contact</div>
        <h1 className="fade-up page-title" style={{ animationDelay: '.06s' }}>
          Ready to build?
        </h1>
      </section>

      <section className="contact-section">
        <div className="fade-up contact-info" style={{ animationDelay: '.12s' }}>
          <p className="contact-lead">
            Tell us what you're trying to build. We reply within a business
            day.
          </p>
          <a href="mailto:hello@merakief.com" className="big-link">
            hello@merakief.com
          </a>
          <div className="contact-meta">
            <div>
              <div className="contact-meta-label">Studio</div>
              <div className="contact-meta-value">Lagos, Nigeria</div>
            </div>
            <div>
              <div className="contact-meta-label">Sectors</div>
              <div className="contact-meta-value">
                Energy · Fintech · Agriculture · E-commerce
              </div>
            </div>
          </div>
        </div>

        <form
          className="fade-up contact-form"
          style={{ animationDelay: '.18s' }}
          onSubmit={handleSubmit}
        >
          {status === 'sent' ? (
            <div className="contact-success">
              Thanks — your message is in. We'll be in touch within a
              business day.
            </div>
          ) : (
            <>
              <div className="field-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="field-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="field-row">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
              <div className="field-row field-row-textarea">
                <textarea
                  rows="4"
                  name="message"
                  placeholder="What are you building?"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              {error && <div className="contact-error">{error}</div>}
              <button type="submit" className="submit-btn">
                Send message
              </button>
            </>
          )}
        </form>
      </section>
    </>
  );
}
