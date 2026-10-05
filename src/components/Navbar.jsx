import { useState, useEffect } from 'react';

const links = ['about','skills','projects','contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.4 });
    document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            <span className="logo-bracket">&lt;</span>dk
            <span className="logo-slash">/</span>
            <span className="logo-bracket">&gt;</span>
          </a>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l}>
                <a href={`#${l}`} className={`nav-link${active===l?' active':''}`}>
                  {l.charAt(0).toUpperCase()+l.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="nav-cta">Hire Me</a>

          <button
            className={`nav-toggle${open?' open':''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${open?' open':''}`}>
        {links.map(l => (
          <a key={l} href={`#${l}`} className="nav-link" onClick={() => setOpen(false)}>
            {l.charAt(0).toUpperCase()+l.slice(1)}
          </a>
        ))}
        <a href="#contact" className="nav-cta" style={{alignSelf:'flex-start',marginTop:'.5rem'}} onClick={() => setOpen(false)}>
          Hire Me
        </a>
      </div>
    </>
  );
}
