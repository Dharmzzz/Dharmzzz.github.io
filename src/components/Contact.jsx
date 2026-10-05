import { useRef, useState, useEffect } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import {
  FiCheck, FiSend, FiCopy, FiZap, FiShield,
  FiClock, FiLayers, FiArrowRight, FiCheckCircle
} from 'react-icons/fi';

const CONTACT_ITEMS = [
  {
    id: 'email',
    Icon: MdEmail,
    label: 'Direct Email',
    value: 'dharmithkishan@gmail.com',
    href: 'mailto:dharmithkishan@gmail.com',
    actionText: 'Compose Email',
    color: '#38bdf8',
  },
  {
    id: 'discord',
    Icon: FaDiscord,
    label: 'Discord Handle',
    value: 'dhamzzz',
    href: 'https://discord.com/users/dhamzzz',
    actionText: 'Copy Username',
    color: '#5865F2',
    copyable: true,
  },
  {
    id: 'github',
    Icon: FaGithub,
    label: 'GitHub Profile',
    value: 'github.com/dhamzzz',
    href: 'https://github.com/dhamzzz',
    actionText: 'View Repositories',
    color: '#94a3b8',
  },
];

const PROJECT_TYPES = [
  'Python & AI Agents',
  'Full-Stack Web App',
  'Roblox / FiveM Game',
  'Automation & n8n',
  '3D Assets & Design',
  'Other / Consultation',
];

const TRUST_PILLARS = [
  { Icon: FiClock, title: 'Rapid Turnaround', desc: 'Initial response within 24 hours guaranteed.' },
  { Icon: FiLayers, title: 'End-to-End Build', desc: 'From architecture design to production deployment.' },
  { Icon: FiShield, title: 'Confidentiality', desc: 'Complete code ownership and NDA protection.' },
];

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0]);
  const [copiedId, setCopiedId] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }, { threshold: 0.1 });
    [headerRef, gridRef].forEach(r => { if (r.current) obs.observe(r.current); });
    return () => obs.disconnect();
  }, []);

  const handleCopyDiscord = (e, text) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopiedId('discord');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', message: '' });
      }, 3500);
    }, 1200);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div ref={headerRef} className="section-header reveal-on-scroll">
          <span className="section-label">04 — Collaboration & Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            Have an exciting project, game ecosystem, or automation challenge?
            Let's build something exceptional together.
          </p>
        </div>

        <div ref={gridRef} className="contact-grid reveal-on-scroll">
          {/* Left Column: Direct Info & Trust Badges */}
          <div className="contact-info">
            {/* Live Availability Badge */}
            <div className="availability-card">
              <div className="availability-status">
                <span className="availability-pulse"></span>
                <span className="availability-text">AVAILABLE FOR NEW PROJECTS</span>
              </div>
              <p className="availability-desc">
                Currently taking on freelance contracts, full-stack builds, FiveM / Roblox systems, and AI workflows.
              </p>
            </div>

            {/* Contact Channel Cards */}
            <div className="contact-items">
              {CONTACT_ITEMS.map(({ id, Icon, label, value, href, actionText, color, copyable }) => (
                <div key={id} className="contact-item-card">
                  <div
                    className="contact-item-icon"
                    style={{
                      background: `${color}18`,
                      borderColor: `${color}44`,
                      color: color,
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <div className="contact-item-body">
                    <span className="contact-item-label">{label}</span>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="contact-item-value"
                    >
                      {value}
                    </a>
                  </div>

                  {copyable ? (
                    <button
                      type="button"
                      className="contact-action-btn"
                      onClick={(e) => handleCopyDiscord(e, value)}
                      title="Copy Discord Tag"
                    >
                      {copiedId === id ? (
                        <>
                          <FiCheck size={14} color="#10b981" />
                          <span style={{ color: '#10b981' }}>Copied</span>
                        </>
                      ) : (
                        <>
                          <FiCopy size={14} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="contact-action-btn"
                    >
                      <FiArrowRight size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Trust Pillars */}
            <div className="trust-pillars-grid">
              {TRUST_PILLARS.map(({ Icon, title, desc }) => (
                <div key={title} className="trust-pillar-item">
                  <div className="trust-icon">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h5 className="trust-title">{title}</h5>
                    <p className="trust-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Project Form */}
          <div className="contact-form-container">
            <div className="form-header-bar">
              <h3 className="form-header-title">Send a Direct Inquiry</h3>
              <span className="form-header-badge">Instant Dispatch</span>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Project Scope Selector */}
              <div className="form-group">
                <label className="form-label">Project Scope / Interest</label>
                <div className="project-type-selector">
                  {PROJECT_TYPES.map(type => (
                    <button
                      key={type}
                      type="button"
                      className={`type-pill ${selectedType === type ? 'active' : ''}`}
                      onClick={() => setSelectedType(type)}
                    >
                      {selectedType === type && <FiCheckCircle size={12} className="pill-check" />}
                      <span>{type}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Row */}
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    className="form-input"
                    type="text"
                    placeholder="Dharmith / John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    className="form-input"
                    type="email"
                    placeholder="dharmithkishan@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Message Area */}
              <div className="form-group">
                <label className="form-label" htmlFor="message">Project Description & Timeline</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Describe your requirements, goals, deliverables, and estimated timeframe..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className={`btn btn-primary submit-btn ${status === 'sent' ? 'btn-sent' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'idle' && (
                  <>
                    <span>Submit Project Inquiry</span>
                    <FiSend size={15} style={{ marginLeft: 6 }} />
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <span className="spinner-dots"></span>
                    <span>Transmitting Dispatch…</span>
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <FiCheck size={18} style={{ marginRight: 6 }} />
                    <span>Inquiry Transmitted Successfully!</span>
                  </>
                )}
              </button>

              <span className="form-security-note">
                <FiShield size={12} style={{ verticalAlign: '-1px', marginRight: 4 }} />
                Your details are secure. Direct communication goes to dharmithkishan@gmail.com
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

