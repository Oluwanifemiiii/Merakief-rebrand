import { useState } from 'react';
import './Contact.css';

const EMPTY_FORM = { name: '', email: '', company: '', message: '' };
const FORM_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [error, setError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and what you’re building.');
      return;
    }
    // Honeypot: real users never see or fill this field, bots usually do.
    if (e.target.elements.botcheck?.checked) return;

    if (!ACCESS_KEY) {
      console.error('Missing VITE_WEB3FORMS_KEY — see .env.example');
      setError('The contact form isn’t configured yet. Please email hello@merakief.com directly.');
      return;
    }

    setError('');
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New project enquiry from ${form.name.trim()}`,
          from_name: 'Merakief website',
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim() || '—',
          message: form.message.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || `Request failed (${res.status})`);
      }
      setStatus('sent');
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error('Contact form submit failed:', err);
      setStatus('idle');
      setError('Something went wrong sending your message. Please try again or email hello@merakief.com.');
    }
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
                Energy · Transportation · Agriculture · E-commerce
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
              <input
                type="checkbox"
                name="botcheck"
                className="contact-honeypot"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
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
              <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </>
          )}
        </form>
      </section>
    </>
  );
}
