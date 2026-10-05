import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import About     from './components/About';
import Galaxy    from './components/Galaxy';
import Projects  from './components/Projects';
import Contact   from './components/Contact';
import Footer    from './components/Footer';
import NotFound  from './components/NotFound';

export default function App() {
  const [isNotFound, setIsNotFound] = useState(false);

  // Initialize Lenis smooth scroll engine
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
      infinite: false,
    });

    window.lenis = lenis;

    let frameId;
    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    // Intercept in-page anchor clicks for buttery-smooth Lenis scroll animations
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetEl = targetId === '#home' ? document.body : document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, { offset: -70, duration: 1.3 });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  useEffect(() => {
    const checkPath = () => {
      const path = window.location.pathname.replace(/\/$/, '');
      const validPaths = ['', '/portfolio', '/index.html'];
      if (!validPaths.includes(path) && !path.startsWith('/#')) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    };

    checkPath();
    window.addEventListener('popstate', checkPath);
    return () => window.removeEventListener('popstate', checkPath);
  }, []);

  const handleNavigateHome = () => {
    window.history.pushState({}, '', '/');
    setIsNotFound(false);
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isNotFound) {
    return <NotFound onNavigateHome={handleNavigateHome} />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <section id="skills" className="section skills-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-label">02 — Skills</span>
            <h2 className="section-title">Tech Stack</h2>
          </div>
        </div>
        <Galaxy />
      </section>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

