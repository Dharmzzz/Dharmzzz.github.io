import { useState, useEffect, useRef } from 'react';
import { FiGithub, FiExternalLink, FiCheck, FiLayers, FiZap, FiTerminal, FiX, FiArrowRight } from 'react-icons/fi';
import {
  SiPython, SiReact, SiRoblox, SiBlender, SiN8N, SiDiscord,
  SiLangchain, SiPostgresql, SiMongodb, SiDocker, SiTailwindcss, SiFastapi
} from 'react-icons/si';
import { FaGamepad, FaLayerGroup, FaBullhorn, FaRobot, FaCode } from 'react-icons/fa';
import GtaVIcon from './GtaVIcon';
import VectorDbIcon from './VectorDbIcon';
import InfiniteSpiral from './InfiniteSpiral';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-python', label: 'AI & Python' },
  { id: 'gamedev', label: 'Roblox & FiveM' },
  { id: 'web', label: 'Full-Stack Web' },
  { id: 'automation', label: 'Automation & Tools' },
];

const PROJECTS = [
  {
    id: 'langchain-vector-ai',
    category: 'ai-python',
    categoryLabel: 'AI & Machine Learning',
    title: 'LangChain & Vector AI Knowledge Engine',
    badge: 'RAG & Neural Search',
    Icon: SiLangchain,
    iconColor: '#00a67e',
    desc: 'An intelligent retrieval-augmented generation (RAG) assistant utilizing LangChain, Vector database embeddings, and Scikit-learn for semantic document clustering, context-aware querying, and automated knowledge synthesis.',
    highlights: [
      'Vector similarity search with hybrid dense & sparse embeddings',
      'Autonomous agent tool calling for multi-step reasoning',
      'Asynchronous FastAPI server with streaming token responses',
    ],
    tags: ['Python', 'LangChain', 'Vector DB', 'Scikit-learn', 'FastAPI'],
    tagIcons: [SiPython, SiLangchain, VectorDbIcon, SiFastapi],
    github: 'https://github.com/dhamzzz',
    demo: 'https://github.com/dhamzzz',
    featured: true,
  },
  {
    id: 'discord-ecosystem-bot',
    category: 'ai-python',
    categoryLabel: 'Bot Architecture & Python',
    title: 'Enterprise Discord Ecosystem Bot',
    badge: 'Async Bot Network',
    Icon: SiDiscord,
    iconColor: '#5865F2',
    desc: 'High-concurrency Discord bot infrastructure serving active server communities with custom slash commands, hierarchical moderation, PostgreSQL-backed economy, and automated role workflows.',
    highlights: [
      'AsyncIO non-blocking event handlers with auto-reconnection',
      'Persistent PostgreSQL storage with connection pool caching',
      'Real-time webhook triggers for game server alerts and stats',
    ],
    tags: ['Python', 'discord.py', 'PostgreSQL', 'AsyncIO', 'REST API'],
    tagIcons: [SiPython, SiDiscord, SiPostgresql],
    github: 'https://github.com/dhamzzz',
    demo: 'https://github.com/dhamzzz',
    featured: true,
  },
  {
    id: 'fivem-rp-framework',
    category: 'gamedev',
    categoryLabel: 'FiveM & GTA V Scripting',
    title: 'FiveM Modular RP Framework & Economy',
    badge: 'Virtual World Core',
    Icon: GtaVIcon,
    iconColor: '#7cb864',
    desc: 'Custom-built GTA V multiplayer server ecosystem powered by Lua and OX Framework. Includes full economy simulation, job mechanics, housing systems, law enforcement dispatch, and high-performance HTML5/React NUI interfaces.',
    highlights: [
      'Sub-0.03ms resmon optimization under 100+ concurrent players',
      'Custom React-powered NUI inventory & interactive smartphone',
      'Server-side state validation and anti-exploit architecture',
    ],
    tags: ['Lua', 'FiveM', 'OX Core', 'React NUI', 'MySQL'],
    tagIcons: [GtaVIcon, SiReact],
    github: 'https://github.com/dhamzzz',
    demo: 'https://github.com/dhamzzz',
    featured: true,
  },
  {
    id: 'roblox-rpg-engine',
    category: 'gamedev',
    categoryLabel: 'Roblox Development',
    title: 'Roblox Multiplayer Action RPG Engine',
    badge: 'Combat & Game Mechanics',
    Icon: SiRoblox,
    iconColor: '#e02424',
    desc: 'Feature-complete multiplayer action RPG framework featuring custom raycast hitboxes, weapon combos, skill trees, inventory management, dynamic boss AI, and cloud-synced persistent data with DataStore2.',
    highlights: [
      'Lag-compensated client-prediction combat & raycast hit detection',
      'Zero-data-loss schema with DataStore2 session locking',
      'Custom 3D weapon models & fluid combat animations from Blender',
    ],
    tags: ['Lua', 'Roblox Studio', 'DataStore2', 'Blender 3D'],
    tagIcons: [SiRoblox, SiBlender],
    github: 'https://github.com/dhamzzz',
    demo: 'https://github.com/dhamzzz',
    featured: true,
  },
  {
    id: 'fullstack-saas-platform',
    category: 'web',
    categoryLabel: 'Full-Stack Web Platform',
    title: 'Cloud SaaS & Analytics Platform',
    badge: 'Production Web App',
    Icon: SiReact,
    iconColor: '#61DAFB',
    desc: 'End-to-end cloud platform built with React and Express/Node.js, featuring secure JWT authentication, MongoDB data storage, live analytics graphs, responsive dark aesthetic, and containerized Docker deployment.',
    highlights: [
      'Live WebSocket dashboard with instant analytics updates',
      'Role-based access control (RBAC) & protected RESTful routes',
      'Containerized with Docker for seamless CI/CD deployments',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'TailwindCSS'],
    tagIcons: [SiReact, SiMongodb, SiDocker, SiTailwindcss],
    github: 'https://github.com/dhamzzz',
    demo: 'https://github.com/dhamzzz',
    featured: false,
  },
  {
    id: 'n8n-marketing-hub',
    category: 'automation',
    categoryLabel: 'Automation & Growth',
    title: 'n8n Workflow Hub & Growth Suite',
    badge: 'Workflow Automation',
    Icon: SiN8N,
    iconColor: '#EA4B71',
    desc: 'Multi-platform automation system connecting webhooks, data pipelines, automated social distribution, SEO analytics monitoring, and 3D visual asset rendering triggers.',
    highlights: [
      'Automated multi-branch workflows connecting REST APIs & CRMs',
      'Scheduled data aggregation & weekly performance reporting',
      'Automated digital marketing funnels and conversion analytics',
    ],
    tags: ['n8n', 'Python', 'Webhooks', 'Digital Marketing', 'Blender'],
    tagIcons: [SiN8N, SiPython, SiBlender],
    github: 'https://github.com/dhamzzz',
    demo: 'https://github.com/dhamzzz',
    featured: false,
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }, { threshold: 0.1 });
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  // Repeat items if count is small to keep the 3D continuous loop seamless
  const carouselItems = filteredProjects.length < 5
    ? [...filteredProjects, ...filteredProjects]
    : filteredProjects;

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div ref={headerRef} className="section-header reveal-on-scroll">
          <span className="section-label">03 — Projects & Portfolio</span>
          <h2 className="section-title">What I've Built</h2>
          <p className="projects-subtitle">
            Explore my production systems, virtual worlds, autonomous bots, and web applications in this interactive 3D carousel.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="projects-filter-bar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter(cat.id);
                const matching = cat.id === 'all' ? PROJECTS[0] : PROJECTS.find(p => p.category === cat.id);
                if (matching) setSelectedProject(matching);
              }}
            >
              <span>{cat.label}</span>
              <span className="filter-count">
                {cat.id === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Primary 3D Infinite Carousel Showcase */}
        <div className="projects-carousel-wrapper reveal-on-scroll visible">
          <div className="carousel-ambient-lighting"></div>
          <div className="projects-carousel-viewport">
            <InfiniteSpiral
              items={carouselItems}
              animationMode="all"
              speed={0.48}
              radius={230}
              cardWidth={260}
              cardHeight={230}
              verticalSpacing={90}
              perspective={1100}
              cardRadius={18}
              centerScale={1.18}
              edgeBlur={5}
              cardsPerTurn={6}
              pauseOnHover={true}
              onItemClick={handleProjectClick}
            />
          </div>

          <div className="carousel-bottom-bar">
            <span className="carousel-instruction-pill">
              <FiZap size={14} className="pill-icon-glow" />
              <span>Drag or scroll to revolve 3D carousel · Click any card for project details & code</span>
            </span>
          </div>
        </div>



        {/* Quick Inspection Modal when Clicked */}
        {isModalOpen && selectedProject && (
          <div className="project-modal-backdrop" onClick={() => setIsModalOpen(false)}>
            <div className="project-modal-card" onClick={e => e.stopPropagation()}>
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                <FiX size={18} />
              </button>

              <div className="project-modal-header">
                <div
                  className="project-icon-box"
                  style={{
                    background: `${selectedProject.iconColor}22`,
                    borderColor: `${selectedProject.iconColor}66`,
                    color: selectedProject.iconColor
                  }}
                >
                  <selectedProject.Icon size={26} />
                </div>
                <div>
                  <span className="project-category-badge">{selectedProject.categoryLabel}</span>
                  <h3 className="project-modal-title">{selectedProject.title}</h3>
                </div>
              </div>

              <p className="project-modal-desc">{selectedProject.desc}</p>

              <div className="project-highlights" style={{ margin: '1.25rem 0' }}>
                <span className="highlights-header-label">Architectural Highlights:</span>
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="project-highlight-item">
                    <FiCheck size={14} color={selectedProject.iconColor} className="highlight-check" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="project-tags" style={{ marginBottom: '1.5rem' }}>
                {selectedProject.tags.map(t => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>

              <div className="project-modal-actions">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FiGithub size={16} /> View Source Code
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <FiExternalLink size={16} /> Live Repository / Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}



