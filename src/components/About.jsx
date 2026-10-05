import { useEffect, useRef } from 'react';
import {
  FiArrowRight, FiMail, FiGithub, FiCheckCircle,
  FiTerminal, FiCpu, FiLayers, FiActivity, FiUser, FiCode, FiGlobe
} from 'react-icons/fi';
import { FaGamepad, FaRobot, FaServer } from 'react-icons/fa';

function RevealCard({ className = '', children }) {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal-on-scroll ${className}`}>{children}</div>;
}

const PHILOSOPHY = [
  {
    Icon: FiCpu,
    title: 'Performance-First Architecture',
    desc: 'Every script, backend query, and UI transition is engineered for sub-millisecond latency and fluid 60 FPS delivery.',
  },
  {
    Icon: FiLayers,
    title: 'Modular & Scalable Codebases',
    desc: 'Cleanly decoupled architectures that scale smoothly from individual prototypes to enterprise servers and production ecosystems.',
  },
  {
    Icon: FiTerminal,
    title: 'Full-Cycle Execution',
    desc: 'From initial 3D conceptualization and backend logic to automated continuous deployment and community growth strategy.',
  },
];

const STATS = [
  { value: '22+', label: 'Technologies Mastered', icon: FiActivity },
  { value: '6+', label: 'Core Engineering Domains', icon: FiLayers },
  { value: '100%', label: 'Clean Vector UI (0 Emoji)', icon: FiCheckCircle },
  { value: '24/7', label: 'Continuous Availability', icon: FiGlobe },
];

const PROFILE_PILLARS = [
  { label: 'Primary Focus', value: 'Full-Stack Web, AI Agents & Virtual Worlds', Icon: FiCode },
  { label: 'Engineering Stack', value: 'Python, React, Node.js, Lua, Blender', Icon: FiTerminal },
  { label: 'Game Architecture', value: 'Roblox Studio (DataStore2), FiveM (OX Framework)', Icon: FaGamepad },
  { label: 'Automation & AI', value: 'LangChain, Scikit-learn, Vector DBs, n8n', Icon: FaRobot },
  { label: 'Development Philosophy', value: 'Zero Latency · Decoupled Systems · Clean Architecture', Icon: FaServer },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <RevealCard className="section-header">
          <span className="section-label">01 — Identity & Story</span>
          <h2 className="section-title">Who I Am</h2>
        </RevealCard>

        {/* Bio & Profile Identity Grid */}
        <div className="about-grid">
          {/* Left Column: Bio Narrative */}
          <RevealCard className="about-text">
            <div className="about-badge-pill">
              <span className="pulse-dot"></span>
              <span>Software Engineer & Virtual World Creator</span>
            </div>
            <p className="about-lead">
              I'm <strong>Dharmith Kishan</strong>, a versatile engineer building at the nexus of{' '}
              <span className="highlight">intelligent software systems</span> and{' '}
              <span className="highlight">immersive virtual experiences</span>.
            </p>
            <p>
              My journey is defined by a passion for solving complex, multi-layered engineering problems.
              Whether designing scalable Python APIs and AI retrieval engines with LangChain, developing
              responsive web applications in React and Node.js, or architecting custom game server
              mechanics in Roblox (Lua) and FiveM (GTA V) — I treat every codebase as a craft.
            </p>
            <p>
              I believe great software combines rigorous performance with intuitive interaction.
              Beyond programming, I orchestrate end-to-end automation pipelines in n8n, model custom 3D
              assets in Blender, and apply data-driven growth strategies to scale digital communities.
            </p>

            <div className="about-actions">
              <a href="#contact" className="btn btn-primary">
                <FiMail size={16} /> Let's Collaborate
              </a>
              <a href="https://github.com/dhamzzz" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FiGithub size={16} /> GitHub Profile <FiArrowRight size={14} />
              </a>
            </div>
          </RevealCard>

          {/* Right Column: Developer Profile Card */}
          <RevealCard className="about-profile-card">
            <div className="profile-card-header">
              <div className="profile-avatar-emblem">
                <span className="emblem-code">&lt;dk /&gt;</span>
              </div>
              <div>
                <h3 className="profile-name">Dharmith Kishan</h3>
                <span className="profile-handle">@dhamzzz · Software Engineer</span>
              </div>
            </div>

            <div className="profile-pillars-list">
              {PROFILE_PILLARS.map(({ label, value, Icon }) => (
                <div key={label} className="profile-pillar-row">
                  <div className="pillar-icon">
                    <Icon size={16} />
                  </div>
                  <div className="pillar-content">
                    <span className="pillar-label">{label}</span>
                    <span className="pillar-val">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="profile-card-footer">
              <div className="status-indicator">
                <span className="live-dot"></span>
                <span>Open for contract projects & technical collaborations</span>
              </div>
            </div>
          </RevealCard>
        </div>

        {/* Engineering Philosophy Cards */}
        <RevealCard className="philosophy-wrapper">
          <div className="philosophy-header">
            <h3 className="philosophy-title">Engineering Principles</h3>
            <p className="philosophy-desc">The core standards and mental models guiding every system I build.</p>
          </div>
          <div className="philosophy-grid">
            {PHILOSOPHY.map(({ Icon, title, desc }) => (
              <div key={title} className="philosophy-card">
                <div className="philosophy-icon">
                  <Icon size={24} />
                </div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </RevealCard>

        {/* Live Stats Row */}
        <RevealCard className="about-stats-bar">
          {STATS.map(({ value, label, icon: Icon }) => (
            <div key={label} className="about-stat-item">
              <div className="stat-icon-wrapper">
                <Icon size={20} />
              </div>
              <div className="stat-content">
                <span className="stat-val">{value}</span>
                <span className="stat-lbl">{label}</span>
              </div>
            </div>
          ))}
        </RevealCard>
      </div>
    </section>
  );
}

