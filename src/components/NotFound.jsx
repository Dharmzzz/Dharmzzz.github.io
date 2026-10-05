import { useEffect, useRef } from 'react';
import { FiHome, FiCompass, FiMail, FiTerminal, FiActivity } from 'react-icons/fi';

export default function NotFound({ onNavigateHome }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Particle system
    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.4,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.7 + 0.3,
      color: Math.random() > 0.5 ? '#38bdf8' : '#a855f7',
    }));

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      // Deep space background gradient
      const bg = ctx.createRadialGradient(w / 2, h / 2, 50, w / 2, h / 2, w * 0.8);
      bg.addColorStop(0, 'rgba(14, 40, 80, 0.35)');
      bg.addColorStop(1, 'rgba(4, 12, 24, 0.95)');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Stars
      stars.forEach(s => {
        s.x += s.dx;
        s.y += s.dy;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = s.color;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(render);
    };

    render();
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="notfound-page">
      <canvas ref={canvasRef} className="notfound-canvas" />

      <div className="notfound-container">
        <div className="notfound-badge">
          <FiTerminal size={14} />
          <span>DEEP_SPACE_ANOMALY // 404</span>
        </div>

        <div className="notfound-glitch-code">
          <span className="code-digit">4</span>
          <span className="code-digit code-orb">0</span>
          <span className="code-digit">4</span>
        </div>

        <h1 className="notfound-title">Sector Coordinates Unreachable</h1>

        <p className="notfound-desc">
          You have drifted beyond the charted perimeter of the portfolio galaxy.
          The trajectory you followed does not correspond to any known celestial node.
        </p>

        <div className="notfound-actions">
          <a href="/" onClick={handleHomeClick} className="btn btn-primary">
            <FiHome size={16} /> Return to Galactic Core
          </a>
          <a href="/#skills" onClick={(e) => { handleHomeClick(e); setTimeout(() => { window.location.hash = '#skills'; }, 100); }} className="btn btn-outline">
            <FiCompass size={16} /> Explore Tech Galaxy
          </a>
          <a href="/#contact" onClick={(e) => { handleHomeClick(e); setTimeout(() => { window.location.hash = '#contact'; }, 100); }} className="btn btn-ghost">
            <FiMail size={16} /> Contact Station
          </a>
        </div>

        <div className="notfound-footer-status">
          <div className="status-ping">
            <span className="ping-dot"></span>
            <span className="ping-ring"></span>
          </div>
          <span className="status-text">Signal telemetry active · Orbit calibrated</span>
        </div>
      </div>
    </div>
  );
}
