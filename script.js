/* ════════════════════════════════════════════════════
   Dharmith Kishan Portfolio — script.js
════════════════════════════════════════════════════ */

/* ─── Navbar scroll effect ─────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

/* ─── Mobile nav toggle ────────────────────────────── */
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans  = navToggle.querySelectorAll('span');
  const isOpen = navLinks.classList.contains('open');
  spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)'  : '';
  spans[1].style.opacity   = isOpen ? '0' : '1';
  spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
});
document.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
  });
});

/* ─── Typed text ───────────────────────────────────── */
const phrases = ['Python Developer','Full-Stack Engineer','Roblox Game Dev','FiveM Server Dev','Backend Architect'];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typed-text');
function type() {
  const phrase = phrases[phraseIdx];
  typedEl.textContent = deleting ? phrase.slice(0, --charIdx) : phrase.slice(0, ++charIdx);
  let delay = deleting ? 55 : 95;
  if (!deleting && charIdx === phrase.length) { delay = 2000; deleting = true; }
  else if (deleting && charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; delay = 400; }
  setTimeout(type, delay);
}
setTimeout(type, 900);

/* ─── Counter animation ────────────────────────────── */
function animateCounter(el) {
  const target = +el.dataset.target, dur = 1800, t0 = performance.now();
  const tick = now => {
    const p = Math.min((now - t0) / dur, 1);
    el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
    if (p < 1) requestAnimationFrame(tick); else el.textContent = target;
  };
  requestAnimationFrame(tick);
}

/* ─── Scroll reveal + counters ─────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

const statsEl = document.getElementById('hero-stats');
if (statsEl) {
  new IntersectionObserver((entries, obs) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('.stat-number').forEach(animateCounter); obs.unobserve(e.target); } });
  }, { threshold: 0.5 }).observe(statsEl);
}

/* ─── Active nav highlighting ──────────────────────── */
document.querySelectorAll('section[id]').forEach(s => {
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        document.querySelectorAll('.nav-link').forEach(l => {
          l.style.color = l.getAttribute('href') === '#' + e.target.id ? 'var(--blue-light)' : '';
        });
    });
  }, { threshold: 0.4 }).observe(s);
});

/* ─── Contact form ─────────────────────────────────── */
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('form-submit-btn');
  const txt = document.getElementById('form-btn-text');
  btn.disabled = true; txt.textContent = 'Sending…';
  setTimeout(() => {
    txt.textContent = '✓ Sent!';
    btn.style.background = 'linear-gradient(135deg,#10b981,#059669)';
    btn.style.boxShadow  = '0 0 25px rgba(16,185,129,0.4)';
    setTimeout(() => {
      txt.textContent = 'Send Message';
      btn.style.background = ''; btn.style.boxShadow = ''; btn.disabled = false;
      document.getElementById('contact-form').reset();
    }, 2500);
  }, 1200);
}

/* ─── Magnetic buttons ─────────────────────────────── */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    btn.style.transform = `translateY(-3px) translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.18}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

/* ─── Hero parallax ────────────────────────────────── */
const heroCenter = document.getElementById('hero-center');
document.querySelector('.hero')?.addEventListener('mousemove', e => {
  if (!heroCenter) return;
  heroCenter.style.transform = `translate(${(e.clientX/window.innerWidth-.5)*8}px,${(e.clientY/window.innerHeight-.5)*5}px)`;
}, { passive: true });
document.querySelector('.hero')?.addEventListener('mouseleave', () => {
  if (heroCenter) heroCenter.style.transform = '';
});

/* ─── Card tilt ────────────────────────────────────── */
document.querySelectorAll('.project-card, .about-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.transform = `translateY(-6px) rotateX(${-((e.clientY-r.top)/r.height-.5)*7}deg) rotateY(${((e.clientX-r.left)/r.width-.5)*7}deg)`;
    card.style.transformStyle = 'preserve-3d';
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});


/* ════════════════════════════════════════════════════
   INTERACTIVE GALAXY — Tech Stack Canvas
   Icons sourced from Simple Icons CDN (SVG → Image)
════════════════════════════════════════════════════ */
(function GalaxyEngine() {
  const canvas = document.getElementById('galaxy-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  /* ─── Tech definitions ─────────────────────────── */
  /* iconSlug → https://cdn.simpleicons.org/{slug}/ffffff */
  const TECHS = [
    /* Ring 0 — innermost */
    { name: 'Python',      slug: 'python',        color: '#4B8BBE', ring: 0, startAngle: 0 },
    { name: 'C',           slug: 'c',             color: '#A8B9CC', ring: 0, startAngle: Math.PI },
    { name: 'C++',         slug: 'cplusplus',     color: '#659AD2', ring: 0, startAngle: Math.PI * 0.5 },
    { name: 'SQL',         slug: 'postgresql',    color: '#4479A1', ring: 0, startAngle: Math.PI * 1.5 },
    /* Ring 1 — mid */
    { name: 'JavaScript',  slug: 'javascript',    color: '#F7DF1E', ring: 1, startAngle: 0 },
    { name: 'HTML',        slug: 'html5',         color: '#E34C26', ring: 1, startAngle: Math.PI * 0.4 },
    { name: 'CSS',         slug: 'css3',          color: '#264DE4', ring: 1, startAngle: Math.PI * 0.8 },
    { name: 'Lua',         slug: 'lua',           color: '#9B7FD4', ring: 1, startAngle: Math.PI * 1.2 },
    { name: 'Node.js',     slug: 'nodedotjs',     color: '#3C873A', ring: 1, startAngle: Math.PI * 1.6 },
    /* Ring 2 — outermost */
    { name: 'React',       slug: 'react',         color: '#61DAFB', ring: 2, startAngle: 0 },
    { name: 'Flutter',     slug: 'flutter',       color: '#54C5F8', ring: 2, startAngle: Math.PI * 0.67 },
    { name: 'Express.js',  slug: 'express',       color: '#68D391', ring: 2, startAngle: Math.PI * 1.33 },
  ];

  const RINGS = [
    { radiusFactor: 0.17, speed:  0.00090, tilt: 0.58 },
    { radiusFactor: 0.28, speed: -0.00058, tilt: 0.55 },
    { radiusFactor: 0.40, speed:  0.00038, tilt: 0.52 },
  ];

  /* ─── State ─────────────────────────────────────── */
  let W, H, cx, cy, DPR;
  let RAF;
  let mouse  = { x: -9999, y: -9999 };
  let drag   = { active: false, startX: 0, rotOffset: 0 };
  let rotYaw = 0;
  let stars  = [], dust = [], nodes = [];
  let imagesReady = false;

  /* ─── Pre-load Simple Icons as Image objects ────── */
  function preloadIcons() {
    let loaded = 0;
    const total = TECHS.length;
    TECHS.forEach(t => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      /* white icon on transparent background */
      img.src = `https://cdn.simpleicons.org/${t.slug}/ffffff`;
      img.onload  = () => { t.img = img; if (++loaded >= total) imagesReady = true; };
      img.onerror = () => { t.img = null; if (++loaded >= total) imagesReady = true; };
    });
  }

  /* ─── Build node objects ────────────────────────── */
  function buildNodes() {
    nodes = TECHS.map(t => ({
      ...t,
      angle:  t.startAngle,
      hoverT: 0,
      pulseT: Math.random() * Math.PI * 2,
    }));
  }

  /* ─── Stars & cosmic dust ───────────────────────── */
  function buildStars() {
    stars = Array.from({ length: 240 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.3 + 0.15,
      a: Math.random() * 0.65 + 0.1,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.018 + 0.004,
    }));
    dust = Array.from({ length: 55 }, () => ({
      x: cx + (Math.random() - 0.5) * W * 0.85,
      y: cy + (Math.random() - 0.5) * H * 0.75,
      r: Math.random() * 2.5 + 0.4,
      a: Math.random() * 0.11 + 0.02,
      dx: (Math.random() - 0.5) * 0.22,
      dy: (Math.random() - 0.5) * 0.16,
    }));
  }

  /* ─── Resize ────────────────────────────────────── */
  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W   = canvas.offsetWidth;
    H   = canvas.offsetHeight;
    canvas.width  = W * DPR;
    canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    cx = W / 2; cy = H / 2;
    buildStars();
  }

  /* ─── Node world position ───────────────────────── */
  function nodePos(n) {
    const ring = RINGS[n.ring];
    const base = Math.min(W, H);
    const rx   = ring.radiusFactor * base;
    const ry   = rx * ring.tilt;
    const a    = n.angle + rotYaw;
    return { x: cx + Math.cos(a) * rx, y: cy + Math.sin(a) * ry };
  }

  /* ─── Rounded rect ──────────────────────────────── */
  function rRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y,     x + w, y + r,     r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h,     x, y + h - r,     r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y,         x + r, y,          r);
    ctx.closePath();
  }

  /* ─── Draw ──────────────────────────────────────── */
  function draw(ts) {
    ctx.clearRect(0, 0, W, H);

    /* Deep space background */
    const bg = ctx.createRadialGradient(cx, cy * 0.9, 0, cx, cy, Math.max(W, H) * 0.72);
    bg.addColorStop(0,    'rgba(5,20,55,0.98)');
    bg.addColorStop(0.45, 'rgba(4,15,38,0.99)');
    bg.addColorStop(1,    'rgba(4,12,24,1)');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    /* Nebula glow */
    const neb = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(W, H) * 0.4);
    neb.addColorStop(0,    'rgba(29,106,232,0.15)');
    neb.addColorStop(0.55, 'rgba(6,182,212,0.06)');
    neb.addColorStop(1,    'rgba(0,0,0,0)');
    ctx.fillStyle = neb;
    ctx.fillRect(0, 0, W, H);

    /* Twinkling stars */
    stars.forEach(s => {
      s.phase += s.speed;
      const a = s.a * (0.5 + 0.5 * Math.sin(s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(190,220,255,${a})`;
      ctx.fill();
    });

    /* Cosmic dust */
    dust.forEach(d => {
      d.x += d.dx; d.y += d.dy;
      if (d.x < 0 || d.x > W) d.dx *= -1;
      if (d.y < 0 || d.y > H) d.dy *= -1;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(96,165,250,${d.a})`;
      ctx.fill();
    });

    /* Orbit ring ellipses */
    RINGS.forEach((ring, i) => {
      const base = Math.min(W, H);
      const rx = ring.radiusFactor * base;
      const ry = rx * ring.tilt;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(59,130,246,${0.12 - i * 0.025})`;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 7]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    });

    /* Connection lines */
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const pi = nodePos(nodes[i]);
        const pj = nodePos(nodes[j]);
        const dist = Math.hypot(pi.x - pj.x, pi.y - pj.y);
        if (dist < 180) {
          const active = nodes[i].hoverT > 0.1 || nodes[j].hoverT > 0.1;
          const base   = 1 - dist / 180;
          ctx.beginPath();
          ctx.moveTo(pi.x, pi.y);
          ctx.lineTo(pj.x, pj.y);
          ctx.strokeStyle = `rgba(96,165,250,${active ? base * 0.55 : base * 0.12})`;
          ctx.lineWidth = active ? 1.5 : 0.7;
          ctx.stroke();
        }
      }
    }

    /* Galaxy core */
    const corePulse = 0.5 + 0.3 * Math.sin(ts * 0.0015);
    ctx.beginPath();
    ctx.arc(cx, cy, 36 + 8 * Math.sin(ts * 0.0015), 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(59,130,246,${corePulse * 0.4})`;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    const coreG = ctx.createRadialGradient(cx, cy - 4, 0, cx, cy, 26);
    coreG.addColorStop(0,   'rgba(255,255,255,0.95)');
    coreG.addColorStop(0.25,'rgba(187,225,255,0.85)');
    coreG.addColorStop(0.6, 'rgba(59,130,246,0.5)');
    coreG.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.beginPath();
    ctx.arc(cx, cy, 26, 0, Math.PI * 2);
    ctx.fillStyle = coreG;
    ctx.fill();

    ctx.font = 'bold 9px "JetBrains Mono",monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.fillText('DK', cx, cy);

    /* Nodes */
    nodes.forEach(n => {
      n.angle  += RINGS[n.ring].speed;
      n.pulseT += 0.025;

      const pos = nodePos(n);
      const dist = Math.hypot(mouse.x - pos.x, mouse.y - pos.y);
      n.hoverT += ((dist < 34 ? 1 : 0) - n.hoverT) * 0.1;

      const scale = 1 + n.hoverT * 0.55;
      const r     = 26 * scale;

      /* Hover outer glow */
      if (n.hoverT > 0.01) {
        const glowR = r * 2.8;
        const glow  = ctx.createRadialGradient(pos.x, pos.y, r * 0.4, pos.x, pos.y, glowR);
        glow.addColorStop(0, n.color + Math.round(n.hoverT * 80).toString(16).padStart(2, '0'));
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }

      /* Ambient glow (always) */
      const ambG = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, r * 1.7);
      ambG.addColorStop(0, n.color + '28');
      ambG.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, r * 1.7, 0, Math.PI * 2);
      ctx.fillStyle = ambG;
      ctx.fill();

      /* Node circle fill */
      const nodeG = ctx.createRadialGradient(pos.x - r * 0.28, pos.y - r * 0.28, 0, pos.x, pos.y, r);
      nodeG.addColorStop(0,    n.color + 'dd');
      nodeG.addColorStop(0.55, n.color + '88');
      nodeG.addColorStop(1,    n.color + '33');
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
      ctx.fillStyle = nodeG;
      ctx.fill();

      /* Border */
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
      ctx.strokeStyle = n.color + (n.hoverT > 0.5 ? 'ff' : '99');
      ctx.lineWidth   = 1.8 + n.hoverT * 1.2;
      ctx.stroke();

      /* ── Tech icon (Simple Icons SVG image) ── */
      const iconSize = r * 1.05;
      const ix = pos.x - iconSize / 2;
      const iy = pos.y - iconSize / 2;

      if (n.img && n.img.complete && n.img.naturalWidth > 0) {
        /* Clip drawing to node circle so icon doesn't bleed outside */
        ctx.save();
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r - 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.globalAlpha = 0.92;
        ctx.drawImage(n.img, ix, iy, iconSize, iconSize);
        ctx.globalAlpha = 1;
        ctx.restore();
      } else {
        /* Fallback: first letter of tech name */
        ctx.font = `bold ${Math.round(r * 0.72)}px 'Outfit', sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'rgba(255,255,255,0.92)';
        ctx.fillText(n.name.charAt(0), pos.x, pos.y);
      }

      /* Label (always faint, bright on hover) */
      const labelAlpha = 0.28 + n.hoverT * 0.72;
      const fontSize   = 11 + n.hoverT * 3;
      ctx.font = `600 ${fontSize}px 'Outfit', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      const lW  = ctx.measureText(n.name).width;
      const lX  = pos.x - lW / 2 - 8;
      const lY  = pos.y + r + 8;

      if (n.hoverT > 0.25) {
        rRect(lX, lY - 2, lW + 16, fontSize + 8, 5);
        ctx.fillStyle = `rgba(4,12,24,${labelAlpha * 0.82})`;
        ctx.fill();
      }
      ctx.fillStyle = `rgba(232,244,255,${labelAlpha})`;
      ctx.fillText(n.name, pos.x, lY + 2);
    });

    canvas.style.cursor = nodes.some(n => n.hoverT > 0.25)
      ? 'pointer' : drag.active ? 'grabbing' : 'crosshair';

    RAF = requestAnimationFrame(draw);
  }

  /* ─── Input helpers ─────────────────────────────── */
  function getXY(e) {
    const rect = canvas.getBoundingClientRect();
    const src  = e.touches ? e.touches[0] : e;
    return { x: src.clientX - rect.left, y: src.clientY - rect.top };
  }

  canvas.addEventListener('mousemove', e => {
    const p = getXY(e); mouse.x = p.x; mouse.y = p.y;
    if (drag.active) rotYaw = drag.rotOffset + (p.x - drag.startX) * 0.006;
  });
  canvas.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; drag.active = false; });
  canvas.addEventListener('mousedown',  e => { const p = getXY(e); drag = { active: true, startX: p.x, rotOffset: rotYaw }; });
  canvas.addEventListener('mouseup',    () => { drag.active = false; });

  canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    const p = getXY(e); mouse.x = p.x; mouse.y = p.y;
    if (drag.active) rotYaw = drag.rotOffset + (p.x - drag.startX) * 0.006;
  }, { passive: false });
  canvas.addEventListener('touchstart', e => { const p = getXY(e); drag = { active: true, startX: p.x, rotOffset: rotYaw }; });
  canvas.addEventListener('touchend',   () => { drag.active = false; mouse.x = -9999; mouse.y = -9999; });

  /* ─── Init ──────────────────────────────────────── */
  buildNodes();
  preloadIcons();   // async — images draw as soon as loaded
  resize();
  window.addEventListener('resize', () => { cancelAnimationFrame(RAF); resize(); });

  let startTS = null;
  function loop(ts) { if (!startTS) startTS = ts; draw(ts - startTS); }
  RAF = requestAnimationFrame(loop);

})();
