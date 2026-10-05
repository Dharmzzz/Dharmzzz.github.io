import { useEffect, useRef, useState, memo } from 'react';
import { FiArrowRight, FiFolder, FiSend } from 'react-icons/fi';
import { FaGithub, FaDiscord, FaCode, FaGamepad, FaRobot } from 'react-icons/fa';
import { SiPython } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const PHRASES = [
  'Python Developer',
  'Full-Stack Engineer',
  'Roblox Game Developer',
  'FiveM Server Developer',
  'AI & Automation Architect',
  'Backend Specialist',
];

/* ── ISOLATED TYPED TEXT COMPONENT (Prevents Hero re-rendering on every keystroke) ── */
const TypedHeadline = memo(function TypedHeadline() {
  const [text, setText] = useState('');
  const state = useRef({ phraseIdx: 0, charIdx: 0, deleting: false });

  useEffect(() => {
    let timer;
    function tick() {
      const { phraseIdx, charIdx, deleting } = state.current;
      const phrase = PHRASES[phraseIdx];
      const next = deleting ? phrase.slice(0, charIdx - 1) : phrase.slice(0, charIdx + 1);
      setText(next);
      state.current.charIdx = deleting ? charIdx - 1 : charIdx + 1;
      let delay = deleting ? 45 : 85;
      if (!deleting && state.current.charIdx === phrase.length) {
        delay = 2200;
        state.current.deleting = true;
      } else if (deleting && state.current.charIdx === 0) {
        state.current.deleting = false;
        state.current.phraseIdx = (phraseIdx + 1) % PHRASES.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    }
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <p className="hero-tagline">
      <span className="typed-prefix">I am a </span>
      <span className="typed-text">{text}</span>
      <span className="typed-cursor">|</span>
    </p>
  );
});

/* ── ISOLATED STAT NUMBER COUNTER ── */
const StatNumber = memo(function StatNumber({ target, trigger }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const dur = 1600;
    const t0 = performance.now();
    let rafId;

    const tick = now => {
      const p = Math.min((now - t0) / dur, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [trigger, target]);

  return <span className="stat-number">{val}</span>;
});

export default function Hero() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const cardRef = useRef(null);

  // UnicornStudio Background Loader (Ensures single clean init)
  useEffect(() => {
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js';
      s.async = true;
      s.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(s);
    }
  }, []);

  // Stats visibility observer
  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setStatsVisible(true);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  // Smooth 3D Mouse Parallax on Hero Card (Hardware-accelerated)
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = -(y / rect.height) * 8;
    const rotY = (x / rect.width) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-2px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    }
  };

  return (
    <section id="home" className="hero">
      {/* UnicornStudio WebGL background */}
      <div className="unicorn-bg">
        <div data-us-project="GE8mpmmCRgK6XBF57jgF" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Atmospheric Vignette Overlay */}
      <div className="hero-overlay" />

      {/* Three-column Hero Split Layout */}
      <div className="hero-split">
        {/* Left Name Header */}
        <div className="hero-name-side hero-name-left">
          <span className="hero-name-word">Dharmith</span>
        </div>

        {/* Center Interactive Glass Control Panel */}
        <div
          className="hero-center"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Status Badge */}
          <div className="hero-badge">
            <span className="badge-dot" />
            <span className="badge-text">Available for Projects</span>
          </div>

          {/* Typing Tagline (Isolated rendering) */}
          <TypedHeadline />

          {/* Description */}
          <p className="hero-desc">
            Building robust high-performance applications, scalable backends,
            game server architectures, and intelligent AI workflows.
          </p>

          {/* Domain Badges */}
          <div className="hero-domains">
            <span className="domain-pill">
              <FaCode size={11} style={{ marginRight: 5, verticalAlign: '-1px' }} />
              Full-Stack Web
            </span>
            <span className="domain-pill">
              <SiPython size={11} style={{ marginRight: 5, verticalAlign: '-1px' }} />
              Python & APIs
            </span>
            <span className="domain-pill">
              <FaGamepad size={11} style={{ marginRight: 5, verticalAlign: '-1px' }} />
              Roblox & FiveM
            </span>
            <span className="domain-pill">
              <FaRobot size={11} style={{ marginRight: 5, verticalAlign: '-1px' }} />
              AI & LangChain
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="hero-actions">
            <a href="#skills" className="btn btn-primary hero-btn-main">
              <span>Explore Tech Galaxy</span>
              <FiArrowRight size={16} />
            </a>
            <a href="#projects" className="btn btn-ghost hero-btn-sub">
              <FiFolder size={15} style={{ marginRight: 6 }} />
              <span>Projects</span>
            </a>
            <a href="#contact" className="btn btn-ghost hero-btn-sub">
              <FiSend size={15} style={{ marginRight: 6 }} />
              <span>Contact</span>
            </a>
          </div>

          {/* Social Quick Links */}
          <div className="hero-social-bar">
            <a
              href="https://github.com/dhamzzz"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://discord.com/users/dhamzzz"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon"
              aria-label="Discord Profile"
              title="Discord"
            >
              <FaDiscord size={18} />
            </a>
            <a
              href="mailto:dharmithkishan@gmail.com"
              className="hero-social-icon"
              aria-label="Send Email"
              title="Email"
            >
              <MdEmail size={20} />
            </a>
          </div>

          {/* Stats Bar (Isolated Counters) */}
          <div className="hero-stats" ref={statsRef}>
            <div className="stat">
              <div className="stat-value-wrap">
                <StatNumber target={3} trigger={statsVisible} />
                <span className="stat-suffix">+</span>
              </div>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <div className="stat-value-wrap">
                <StatNumber target={20} trigger={statsVisible} />
                <span className="stat-suffix">+</span>
              </div>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <div className="stat-value-wrap">
                <StatNumber target={22} trigger={statsVisible} />
                <span className="stat-suffix">+</span>
              </div>
              <span className="stat-label">Tech Skills</span>
            </div>
          </div>
        </div>

        {/* Right Name Header */}
        <div className="hero-name-side hero-name-right">
          <span className="hero-name-word">Kishan</span>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <a href="#about" className="scroll-indicator" aria-label="Scroll to About Section">
        <span className="scroll-text">Explore</span>
        <div className="scroll-line" />
      </a>
    </section>
  );
}
