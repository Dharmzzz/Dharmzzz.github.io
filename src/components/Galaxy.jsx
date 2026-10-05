import { useEffect, useRef, useState } from 'react';
import {
  SiPython, SiJavascript, SiHtml5, SiCss, SiReact,
  SiNodedotjs, SiFlutter, SiLua, SiExpress, SiPostgresql,
  SiCplusplus, SiC, SiScikitlearn, SiLangchain, SiMongodb, SiDiscord,
  SiBlender, SiN8N, SiRoblox, SiFivem,
} from 'react-icons/si';
import { FaBullhorn } from 'react-icons/fa';
import { FiX, FiCheck, FiZap, FiInfo, FiActivity } from 'react-icons/fi';
import VectorDbIcon from './VectorDbIcon';

/* ── 4-TIER CELESTIAL SPIRAL GALAXY (22 TECHS) ── */
const TECHS = [
  /* ── Ring 0: Core Primary Foundations (Inner Galactic Bulge) ── */
  {
    name: 'Python',
    Icon: SiPython,
    color: '#4B8BBE',
    ring: 0,
    startAngle: 0,
    category: 'Core Foundation & Backend',
    tagline: 'Rapid backend APIs, intelligent automation & AI workflows.',
    description: 'Python is a high-level, expressive multi-paradigm programming language known for clean readable syntax. It powers scalable web backends, automated bot architectures, data processing pipelines, and machine learning models.',
    useCases: [
      'High-throughput RESTful APIs with FastAPI, Flask, & Django',
      'Asynchronous Discord bots & real-time event webhooks',
      'Scikit-learn statistical ML & LangChain AI agent pipelines',
      'n8n custom script nodes & automated task orchestration',
    ],
    strengths: ['Rapid Prototyping', 'Vast Library Ecosystem', 'Clean Syntax', 'Async I/O'],
    connections: ['SQL', 'C', 'C++', 'JavaScript', 'Node.js', 'Scikit-learn', 'LangChain', 'Vector DB', 'Discord', 'n8n', 'Blender'],
  },
  {
    name: 'JavaScript',
    Icon: SiJavascript,
    color: '#F7DF1E',
    ring: 0,
    startAngle: (Math.PI * 2) * (1 / 4),
    category: 'Core Web & Runtime',
    tagline: 'The universal language of the web, powering frontend & backend systems.',
    description: 'JavaScript is the bedrock of interactive web experiences. Supported by every web browser and supercharged on servers by the V8 engine, it enables unified full-stack web applications, real-time communication, and cross-platform clients.',
    useCases: [
      'Dynamic single-page applications & interactive browser interfaces',
      'High-concurrency Node.js microservices & REST APIs',
      'Real-time WebSocket event listeners & live dashboards',
      'In-game FiveM NUI web interfaces with React and HTML5',
    ],
    strengths: ['Universal Web Standard', 'Huge npm Ecosystem', 'Asynchronous Loop', 'Full-Stack Sharing'],
    connections: ['HTML', 'CSS', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Discord', 'SQL', 'Python', 'FiveM', 'n8n', 'Digital Marketing'],
  },
  {
    name: 'C++',
    Icon: SiCplusplus,
    color: '#659AD2',
    ring: 0,
    startAngle: (Math.PI * 2) * (2 / 4),
    category: 'Core Systems & Game Engine',
    tagline: 'Zero-cost abstractions & hardware speed for game engines and simulation.',
    description: 'C++ blends the low-level efficiency of C with modern object-oriented and generic paradigms. It is the undisputed industry standard for game development engines, 3D graphics rendering, and real-time multiplayer servers.',
    useCases: [
      'AAA Game engines, real-time physics & rendering (DirectX/Vulkan)',
      'High-frequency trading & latency-sensitive server backends',
      'FiveM GTA V native server extensions & memory injectors',
      'Blender native C++ core & real-time rendering pipelines',
    ],
    strengths: ['Zero-Cost Abstractions', 'Deterministic Memory', 'Maximum Throughput', 'Multi-Threading'],
    connections: ['C', 'Python', 'Lua', 'SQL', 'Blender', 'FiveM', 'Scikit-learn'],
  },
  {
    name: 'SQL',
    Icon: SiPostgresql,
    color: '#336791',
    ring: 0,
    startAngle: (Math.PI * 2) * (3 / 4),
    category: 'Core Data Architecture',
    tagline: 'Declarative queries, ACID transactions & relational data storage.',
    description: 'Structured Query Language (SQL) is the global standard for designing, querying, and managing relational databases like PostgreSQL. It guarantees transactional consistency, rapid indexing across millions of rows, and complex analytical reporting.',
    useCases: [
      'Relational database architecture & complex multi-table joins',
      'ACID transactional financial, inventory & user account data',
      'Persistent storage for FiveM servers & Roblox backend databases',
      'n8n automated database ETL & vector extension querying (pgvector)',
    ],
    strengths: ['ACID Compliance', 'Relational Integrity', 'Indexed Speed', 'Complex Analytics'],
    connections: ['Python', 'Node.js', 'Express.js', 'Lua', 'JavaScript', 'Vector DB', 'Discord', 'MongoDB', 'FiveM', 'Roblox', 'n8n'],
  },

  /* ── Ring 1: Full-Stack Web & Services (Mid-Inner Spiral Arms) ── */
  {
    name: 'React',
    Icon: SiReact,
    color: '#61DAFB',
    ring: 1,
    startAngle: 0,
    category: 'Frontend UI Framework',
    tagline: 'Component-driven reactive user interfaces & scalable web applications.',
    description: 'React is Meta’s industry-defining component-based library for crafting user interfaces. With declarative state handling and virtual DOM reconciliation, React makes creating dynamic, modular, and performant web apps effortless.',
    useCases: [
      'Modern Single-Page Applications (SPAs) & interactive portfolios',
      'Complex administrative dashboards, charts & data visualization',
      'Modular reusable UI component design systems',
      'FiveM NUI in-game computer/tablet roleplay interfaces',
    ],
    strengths: ['Virtual DOM Speed', 'Reusable Components', 'Vibrant Ecosystem', 'Declarative State'],
    connections: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'MongoDB', 'FiveM'],
  },
  {
    name: 'Node.js',
    Icon: SiNodedotjs,
    color: '#3C873A',
    ring: 1,
    startAngle: (Math.PI * 2) * (1 / 5),
    category: 'Server-Side Runtime',
    tagline: 'Event-driven, non-blocking asynchronous JavaScript on the server.',
    description: 'Node.js runs JavaScript on the server via Chrome’s V8 engine. Its non-blocking, event-driven I/O model is uniquely suited for data-intensive, real-time distributed applications, microservice architectures, and REST APIs.',
    useCases: [
      'High-concurrency RESTful APIs and backend microservices',
      'Real-time WebSockets, chat servers & Discord bot backends',
      'Custom n8n nodes & automated developer pipelines',
      'Backend middleware paired with React, MongoDB, and Express',
    ],
    strengths: ['Event-Driven I/O', 'Massive npm Registry', 'Unified Codebase', 'High Concurrency'],
    connections: ['JavaScript', 'Express.js', 'React', 'MongoDB', 'Discord', 'SQL', 'Python', 'LangChain', 'n8n'],
  },
  {
    name: 'HTML',
    Icon: SiHtml5,
    color: '#E34C26',
    ring: 1,
    startAngle: (Math.PI * 2) * (2 / 5),
    category: 'Markup & Structure',
    tagline: 'Semantic structure, accessibility & content hierarchy of the web.',
    description: 'HTML5 is the standard markup language for creating web documents and user interfaces. It defines the semantic structure, media embedding, accessibility tags, and SEO metadata that power all modern web experiences.',
    useCases: [
      'Semantic document architecture & web accessibility (WCAG)',
      'Component UI markup in React (JSX) and standard web apps',
      'SEO optimization, meta tags & Open Graph link previews for Digital Marketing',
      'In-game FiveM browser user interface overlays (NUI)',
    ],
    strengths: ['Native Browser Standard', 'SEO-Friendly', 'Semantic Hierarchy', 'Universal Compatibility'],
    connections: ['CSS', 'JavaScript', 'React', 'Flutter', 'FiveM', 'Digital Marketing'],
  },
  {
    name: 'CSS',
    Icon: SiCss,
    color: '#264DE4',
    ring: 1,
    startAngle: (Math.PI * 2) * (3 / 5),
    category: 'Styling & Motion Design',
    tagline: 'Responsive grid layouts, neon lighting effects & smooth animations.',
    description: 'CSS3 transforms structural HTML into visually stunning, responsive designs. Leveraging modern Flexbox, CSS Grid, custom properties, and GPU-accelerated transforms, it delivers fluid animations and bespoke aesthetic themes.',
    useCases: [
      'Mobile-first responsive layouts with CSS Grid & Flexbox',
      'Glassmorphism, neon glowing effects & dark-mode themes',
      'High-converting landing page styling for Digital Marketing campaigns',
      'Custom in-game FiveM HUD overlays and inventory displays',
    ],
    strengths: ['Hardware-Accelerated', 'Responsive Layouts', 'CSS Grid & Flexbox', 'Custom Properties'],
    connections: ['HTML', 'JavaScript', 'React', 'FiveM', 'Digital Marketing'],
  },
  {
    name: 'Express.js',
    Icon: SiExpress,
    color: '#68D391',
    ring: 1,
    startAngle: (Math.PI * 2) * (4 / 5),
    category: 'Backend Web API Framework',
    tagline: 'Fast, minimalist & unopinionated routing middleware for Node.js.',
    description: 'Express.js is the standard web framework for Node.js. It provides a lightweight, robust set of HTTP routing and middleware features, making it the premier choice for building REST APIs, authentication services, and microservice endpoints.',
    useCases: [
      'RESTful API endpoints & CRUD microservice backends',
      'JWT user authentication, CORS & rate-limiting middleware',
      'Webhook processing & third-party API integration layers',
      'Backend servers connecting React and Flutter frontends to MongoDB & SQL',
    ],
    strengths: ['Minimalist & Fast', 'Flexible Middleware', 'Intuitive Routing', 'Battle-Tested'],
    connections: ['Node.js', 'JavaScript', 'React', 'MongoDB', 'SQL'],
  },

  /* ── Ring 2: AI, Data & Automation (Mid-Outer Spiral Arms) ── */
  {
    name: 'LangChain',
    Icon: SiLangchain,
    color: '#10B981',
    ring: 2,
    startAngle: 0,
    category: 'LLM Orchestration & AI Agents',
    tagline: 'Chaining LLMs, vector memory, autonomous agents & prompt workflows.',
    description: 'LangChain is the premier framework for building context-aware generative AI applications. It connects Large Language Models to external knowledge bases, vector search databases, API computation tools, and autonomous multi-agent pipelines.',
    useCases: [
      'Retrieval-Augmented Generation (RAG) knowledge retrieval systems',
      'Autonomous agent orchestration with dynamic tool calling',
      'Prompt engineering templates, memory buffers & chain sequencing',
      'n8n automated AI workflows & Vector Database integration',
    ],
    strengths: ['RAG Pipeline Architecture', 'Tool-Calling Orchestration', 'Multi-Agent Framework', 'Extensible Providers'],
    connections: ['Python', 'Vector DB', 'Scikit-learn', 'Node.js', 'MongoDB', 'SQL', 'n8n'],
  },
  {
    name: 'Vector DB',
    Icon: VectorDbIcon,
    color: '#A855F7',
    ring: 2,
    startAngle: (Math.PI * 2) * (1 / 6),
    category: 'Semantic Embeddings & AI Search',
    tagline: 'High-dimensional vector similarity search for semantic AI memory.',
    description: 'Vector Databases are specialized database engines engineered for storing, indexing, and querying high-dimensional embedding vectors using Approximate Nearest Neighbor (ANN) search algorithms (HNSW, IVF). They constitute the long-term semantic memory of modern AI.',
    useCases: [
      'Millisecond vector similarity search across millions of embeddings',
      'Contextual knowledge retrieval for LangChain RAG architectures',
      'Recommendation engines based on cosine similarity & semantic proximity',
      'Multimodal search indexing across text, audio, and visual data',
    ],
    strengths: ['Sub-Millisecond ANN Search', 'High-Dimensional Indexing', 'Long-Term AI Memory', 'Scalable Embeddings'],
    connections: ['LangChain', 'Python', 'Scikit-learn', 'Node.js', 'SQL', 'n8n'],
  },
  {
    name: 'Scikit-learn',
    Icon: SiScikitlearn,
    color: '#F7931E',
    ring: 2,
    startAngle: (Math.PI * 2) * (2 / 6),
    category: 'Machine Learning & Analytics',
    tagline: 'Predictive data modeling, statistical algorithms & feature engineering.',
    description: 'Scikit-learn is Python’s gold-standard library for classical machine learning and data science. Built atop NumPy, SciPy, and matplotlib, it delivers battle-tested algorithms for classification, regression, clustering, and dimensional reduction.',
    useCases: [
      'Predictive classification, regression models & time-series analysis',
      'Data preprocessing pipelines, feature engineering & normalizers',
      'Clustering algorithms (K-Means, DBSCAN) & anomaly detection',
      'Integration into automated Python data pipelines and AI systems',
    ],
    strengths: ['Clean Consistent API', 'Efficient NumPy/SciPy Integration', 'Production Proven', 'Comprehensive Toolset'],
    connections: ['Python', 'LangChain', 'Vector DB', 'SQL', 'C++'],
  },
  {
    name: 'MongoDB',
    Icon: SiMongodb,
    color: '#47A248',
    ring: 2,
    startAngle: (Math.PI * 2) * (3 / 6),
    category: 'NoSQL & Document Database',
    tagline: 'Flexible JSON-like document storage for scalable modern web apps.',
    description: 'MongoDB is a premier document-oriented NoSQL database. It stores dynamic, JSON-like documents with flexible schemas, enabling agile iterative development, horizontal sharding, and powerful multi-stage aggregation pipelines.',
    useCases: [
      'Flexible schema application persistence for web and mobile apps',
      'Full-stack MERN stack architectures with React, Node & Express',
      'Real-time event logging, telemetry & Discord bot guild settings',
      'n8n automated workflow data stores & lead databases',
    ],
    strengths: ['Flexible Document Model', 'Horizontal Sharding', 'Rich Aggregations', 'High Write Throughput'],
    connections: ['Node.js', 'Express.js', 'JavaScript', 'Python', 'React', 'Discord', 'n8n'],
  },
  {
    name: 'n8n',
    Icon: SiN8N,
    color: '#FF6D5A',
    ring: 2,
    startAngle: (Math.PI * 2) * (4 / 6),
    category: 'Workflow Automation & ETL',
    tagline: 'Node-based workflow automation connecting APIs, AI agents & databases.',
    description: 'n8n is a powerful extendable workflow automation platform. With fair-code licensing and self-hosting capabilities, it enables building sophisticated multi-step automations connecting webhooks, LLM agents, Discord bots, and databases.',
    useCases: [
      'Autonomous multi-agent workflows integrating LangChain & Vector DBs',
      'Webhook listener automation for Discord, GitHub, and email triggers',
      'Automated database sync & ETL pipelines across MongoDB and SQL',
      'Marketing lead routing, CRM synchronization & scheduled cron jobs',
    ],
    strengths: ['Self-Hosted Privacy', '200+ Native Integrations', 'Visual Flow Builder', 'Custom JS/Python Nodes'],
    connections: ['Python', 'Node.js', 'Discord', 'LangChain', 'MongoDB', 'SQL', 'Digital Marketing', 'JavaScript'],
  },
  {
    name: 'Discord',
    Icon: SiDiscord,
    color: '#5865F2',
    ring: 2,
    startAngle: (Math.PI * 2) * (5 / 6),
    category: 'Bot Platform & WebSockets',
    tagline: 'Interactive community bots, slash command engines & guild orchestration.',
    description: 'Discord’s developer platform and WebSocket Gateway API empower developers to build interactive automation bots, server economy engines, community moderation tools, and game server notification bridges.',
    useCases: [
      'Feature-rich Discord bots with custom slash commands and interactive modals',
      'Live FiveM & Roblox game server status integrations & player counters',
      'Automated community moderation, leveling & role assignment systems',
      'n8n automated notification triggers & marketing community funnels',
    ],
    strengths: ['Real-Time Gateway WebSockets', 'Rich Interactive Components', 'Large Community Reach', 'Event-Driven Architecture'],
    connections: ['Python', 'Node.js', 'JavaScript', 'MongoDB', 'SQL', 'Lua', 'Roblox', 'FiveM', 'n8n', 'Digital Marketing'],
  },

  /* ── Ring 3: Specialized Systems: Gaming, 3D, Mobile & Growth (Outer Celestial Rim) ── */
  {
    name: 'C',
    Icon: SiC,
    color: '#A8B9CC',
    ring: 3,
    startAngle: 0,
    category: 'Systems & Low-Level',
    tagline: 'Bare-metal performance, memory management & foundational computing.',
    description: 'C is the foundational systems programming language that built the modern digital world. With direct memory access and zero runtime overhead, it is unmatched for kernels, drivers, high-speed extensions, and game engines.',
    useCases: [
      'Operating system kernels & low-level hardware drivers',
      'High-performance C-extensions for Python & Lua runtimes',
      'Embedded devices, microcontrollers & IoT firmware',
      'Foundational algorithms requiring microsecond precision',
    ],
    strengths: ['Bare-Metal Speed', 'Direct Memory Control', 'Zero Overhead', 'Universal Portability'],
    connections: ['C++', 'Python', 'Lua', 'SQL'],
  },
  {
    name: 'Lua',
    Icon: SiLua,
    color: '#9B7FD4',
    ring: 3,
    startAngle: (Math.PI * 2) * (1 / 7),
    category: 'Game Scripting & Modding',
    tagline: 'Lightweight, ultra-fast embedded scripting for Roblox & FiveM GTA V.',
    description: 'Lua is an exceptionally fast, compact scripting language engineered specifically for embedding into game engines. It is the premier language powering Roblox Studio experiences and custom FiveM GTA V multiplayer frameworks.',
    useCases: [
      'Roblox Studio core gameplay mechanics, inventory & combat systems',
      'FiveM GTA V roleplay frameworks (OX, ESX, QBCore servers)',
      'Server-side net event handling & database synchronization',
      'Lightweight game physics, custom vehicles & player attributes',
    ],
    strengths: ['Blazing Fast JIT', 'Tiny Memory Footprint', 'Seamless C/C++ Binding', 'Game Engine Standard'],
    connections: ['Roblox', 'FiveM', 'C', 'C++', 'SQL', 'JavaScript', 'Discord'],
  },
  {
    name: 'Roblox',
    Icon: SiRoblox,
    color: '#00A2FF',
    ring: 3,
    startAngle: (Math.PI * 2) * (2 / 7),
    category: 'Game Development & Metaverse',
    tagline: 'Multiplayer game systems, economics & immersive 3D experiences.',
    description: 'Roblox Studio is a comprehensive game creation engine and global multiplayer platform. Powered by Luau, it allows developers to architect complex multiplayer games with replicated networking, datastore persistence, and in-game economies.',
    useCases: [
      'Full-featured multiplayer games with custom character combat & physics',
      'Scalable client-server replicated state architecture with Luau',
      'Persistent inventory & transaction systems with DataStore2',
      'Custom 3D Blender asset imports, UI HUDs & monetized game passes',
    ],
    strengths: ['Instant Global Multiplayer', 'Built-In Physics Engine', 'Cloud Datastores', 'Cross-Platform Reach'],
    connections: ['Lua', 'Blender', 'Discord', 'SQL', 'Digital Marketing'],
  },
  {
    name: 'FiveM',
    Icon: SiFivem,
    color: '#F06529',
    ring: 3,
    startAngle: (Math.PI * 2) * (3 / 7),
    category: 'GTA V Multiplayer Frameworks',
    tagline: 'Custom GTA V roleplay servers, network scripts & in-game NUI web apps.',
    description: 'FiveM is the premier GTA V multiplayer modification framework allowing custom server scripts, dedicated roleplay frameworks (OX, ESX, QBCore), bespoke networking events, and full HTML/JS/CSS embedded web user interfaces (NUI).',
    useCases: [
      'Custom roleplay server mechanics, jobs, law enforcement & housing systems',
      'Embedded NUI web interfaces with React, HTML5, and CSS',
      'Server-side network event sync & relational SQL persistence (oxmysql)',
      'Custom 3D vehicle handling, weapon tuning & Blender map streaming',
    ],
    strengths: ['Deep Game Engine Hooking', 'Embedded Chromium NUI', 'High Player Capacity', 'Extensible Scripting Ecosystem'],
    connections: ['Lua', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Blender', 'Discord', 'C++'],
  },
  {
    name: 'Blender',
    Icon: SiBlender,
    color: '#EA7600',
    ring: 3,
    startAngle: (Math.PI * 2) * (4 / 7),
    category: '3D Modeling & Animation',
    tagline: '3D modeling, texturing, rigging & asset creation for game worlds.',
    description: 'Blender is the industry-leading open-source 3D creation suite. It supports the entire 3D pipeline — modeling, rigging, animation, simulation, rendering, compositing, and motion tracking — powering custom assets for Roblox Studio and FiveM GTA V.',
    useCases: [
      'Low-poly & high-fidelity 3D asset modeling for Roblox & FiveM',
      'UV unwrapping, PBR texturing & custom material shaders',
      'Custom vehicle modeling, weapon tuning & environment props',
      'Skeletal rigging, character animation & physics simulation',
    ],
    strengths: ['Complete 3D Pipeline', 'Python Scripting API', 'PBR Shading', 'Real-Time Eevee/Cycles Rendering'],
    connections: ['Roblox', 'FiveM', 'Python', 'C++'],
  },
  {
    name: 'Flutter',
    Icon: SiFlutter,
    color: '#54C5F8',
    ring: 3,
    startAngle: (Math.PI * 2) * (5 / 7),
    category: 'Cross-Platform Native UI',
    tagline: 'Beautiful natively compiled iOS, Android & desktop apps from one codebase.',
    description: 'Flutter is Google’s open-source UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. It renders directly via Skia/Impeller for buttery-smooth 60/120 FPS performance.',
    useCases: [
      'Cross-platform iOS and Android mobile app development',
      'Companion mobile apps for servers, communities & businesses',
      'High-framerate custom animated UIs with native gesture handling',
      'Single-codebase deployment across Mobile, Web, and Desktop',
    ],
    strengths: ['Single Codebase', '60/120 FPS Rendering', 'Hot Reload Speed', 'Rich Widget Catalog'],
    connections: ['Node.js', 'SQL', 'JavaScript', 'Express.js', 'Python'],
  },
  {
    name: 'Digital Marketing',
    Icon: FaBullhorn,
    color: '#EC4899',
    ring: 3,
    startAngle: (Math.PI * 2) * (6 / 7),
    category: 'Growth, SEO & Analytics',
    tagline: 'Conversion rate optimization, technical SEO, paid campaigns & analytics.',
    description: 'Digital Marketing combines data analytics, technical SEO, conversion rate optimization (CRO), automated marketing funnels, and targeted audience acquisition to scale products, community engagement, and digital revenue streams.',
    useCases: [
      'Technical SEO & Open Graph optimization for maximum organic reach',
      'Conversion-focused landing page architecture & A/B testing',
      'Automated lead generation pipelines with n8n & email workflows',
      'Discord community growth, game launch marketing & engagement campaigns',
    ],
    strengths: ['Data-Driven Growth', 'Technical SEO & Meta Optimization', 'Funnel Automation', 'Audience Acquisition'],
    connections: ['n8n', 'HTML', 'CSS', 'JavaScript', 'Discord', 'Roblox'],
  },
];

/* ── 4 EXPANSIVE CONCENTRIC ORBITAL RINGS ── */
const RINGS = [
  { radiusFactor: 0.13, speed:  0.00065, tilt: 0.55 }, // Ring 0: Core Foundation
  { radiusFactor: 0.23, speed: -0.00045, tilt: 0.54 }, // Ring 1: Full-Stack Web
  { radiusFactor: 0.33, speed:  0.00030, tilt: 0.52 }, // Ring 2: AI, Data & Automation
  { radiusFactor: 0.44, speed: -0.00020, tilt: 0.50 }, // Ring 3: Gaming, 3D, Mobile & Growth
];

const DK_TECH = {
  name: 'DK (Dharmith Kishan)',
  category: 'Full-Stack & Systems Architecture Nexus',
  tagline: 'The supermassive galactic core connecting all languages, frameworks, game engines & AI systems.',
  description: 'Dharmith Kishan (DK) is the architect and engineer behind this ecosystem. Specializing in Python automation, scalable full-stack web applications, game server development in FiveM and Roblox, 3D asset creation in Blender, workflow automation with n8n, and modern generative AI/LLM pipelines with LangChain and Vector Databases.',
  useCases: [
    'Unified engineering across frontend, backend, databases, 3D modeling, and game engines',
    'Autonomous AI agent orchestration with LangChain, Scikit-learn, n8n & Vector Databases',
    'High-performance game logic, networking & native extensions in C++, C, Lua, and FiveM',
    'Automated Discord bots, cron pipelines, 3D asset pipelines & digital marketing funnels',
  ],
  strengths: ['Systems Architecture', 'Full-Stack Mastery', 'Generative AI & Embeddings', 'Game Dev Pipelines', 'Automation & Growth'],
  connections: TECHS.map(t => t.name),
  isDkCore: true,
};

export default function Galaxy() {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const nodeRefs = useRef([]);
  const drag = useRef({ active: false, startX: 0, rotOffset: 0 });

  const [hoveredTech, setHoveredTech] = useState(null);
  const [selectedTech, setSelectedTech] = useState(null);
  const [connectAll, setConnectAll] = useState(false);

  /* All mutable animation state lives here to prevent re-renders */
  const S = useRef({
    W: 0, H: 0, cx: 0, cy: 0, DPR: 1,
    angles: TECHS.map(t => t.startAngle),
    rotYaw: 0,
    bgStars: [],
    spiralStars: [],
    nebulaPockets: [],
    ready: false,
    startTS: null,
    hoveredIndex: null,
    connectAll: false,
  });

  // Keep S.current in sync with state
  useEffect(() => {
    S.current.connectAll = connectAll;
  }, [connectAll]);

  useEffect(() => {
    if (hoveredTech) {
      if (hoveredTech.isDkCore) {
        S.current.hoveredIndex = 'DK';
      } else {
        const idx = TECHS.findIndex(t => t.name === hoveredTech.name);
        S.current.hoveredIndex = idx !== -1 ? idx : null;
      }
    } else {
      S.current.hoveredIndex = null;
    }
  }, [hoveredTech]);

  // Close modal on Escape key
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setSelectedTech(null);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;
    const ctx = canvas.getContext('2d');
    let RAF;
    let isVisible = true;

    function setup() {
      const s = S.current;
      s.DPR = Math.min(window.devicePixelRatio || 1, 2);
      const rect = wrapper.getBoundingClientRect();
      const currentW = Math.round(rect.width || wrapper.clientWidth || 1000);
      const currentH = Math.round(rect.height || wrapper.clientHeight || 780);
      if (currentW === 0 || currentH === 0) return;
      s.W = currentW;
      s.H = currentH;
      canvas.width = s.W * s.DPR;
      canvas.height = s.H * s.DPR;
      canvas.style.width = `${s.W}px`;
      canvas.style.height = `${s.H}px`;
      ctx.setTransform(s.DPR, 0, 0, s.DPR, 0, 0);
      s.cx = s.W / 2;
      s.cy = s.H / 2;

      // 1. Distant Universe Background Stars
      s.bgStars = Array.from({ length: 180 }, () => ({
        x: Math.random() * s.W,
        y: Math.random() * s.H,
        r: Math.random() * 0.9 + 0.2,
        a: Math.random() * 0.5 + 0.1,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.012 + 0.003,
      }));

      // 2. Astronomical Galactic Spiral Arms (600 Spiral Stars)
      const numArms = 4;
      const maxR = Math.min(s.W, s.H) * 0.47;
      s.spiralStars = Array.from({ length: 580 }, (_, idx) => {
        const arm = idx % numArms;
        const armOffsetAngle = (arm * (Math.PI * 2)) / numArms;
        // Non-linear density: concentrated in bulge, spreading along arms
        const rFrac = Math.pow(Math.random(), 1.35);
        const r = Math.max(12, rFrac * maxR);
        // Logarithmic spiral angle
        const spiralTheta = armOffsetAngle + 2.6 * Math.pow(r / maxR, 0.68);
        // Dispersion width (arms flare out gently at the edges)
        const spread = (Math.random() - 0.5) * (0.30 + (r / maxR) * 0.42);
        const theta = spiralTheta + spread;

        // Stellar Spectral Type & Color Temperature
        let colorRGB;
        if (rFrac < 0.16) {
          colorRGB = '255, 244, 220'; // Warm Golden White Core Bulge
        } else if (rFrac < 0.45) {
          colorRGB = Math.random() > 0.35 ? '56, 189, 248' : '224, 242, 254'; // Hot Cyan-Blue OB Star Clusters
        } else if (rFrac < 0.75) {
          colorRGB = Math.random() > 0.5 ? '96, 165, 250' : '192, 132, 252'; // Electric Blue & Violet Stellar Nursery
        } else {
          colorRGB = Math.random() > 0.4 ? '168, 85, 247' : '59, 130, 246'; // Deep Purple & Indigo Outer Rim
        }

        return {
          r,
          theta,
          baseTheta: theta,
          rFrac,
          size: Math.random() < 0.06 ? Math.random() * 1.5 + 1.2 : Math.random() * 0.9 + 0.3,
          alpha: Math.random() * 0.65 + 0.25,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.015 + 0.004,
          colorRGB,
          tilt: 0.54,
        };
      });

      // 3. Interstellar Nebula Dust Clouds along the Spiral Arms
      s.nebulaPockets = [
        { armAngle: 0,                dist: maxR * 0.30, color: 'rgba(56, 189, 248, 0.14)', radius: maxR * 0.36 },
        { armAngle: Math.PI * 0.5,    dist: maxR * 0.38, color: 'rgba(99, 102, 241, 0.12)', radius: maxR * 0.42 },
        { armAngle: Math.PI,          dist: maxR * 0.32, color: 'rgba(192, 132, 252, 0.13)', radius: maxR * 0.38 },
        { armAngle: Math.PI * 1.5,    dist: maxR * 0.40, color: 'rgba(6, 182, 212, 0.11)', radius: maxR * 0.44 },
      ];

      s.ready = true;
    }

    function getPos(i) {
      const s = S.current;
      const tech = TECHS[i];
      const ring = RINGS[tech.ring];
      const base = Math.min(s.W, s.H);
      const rx = ring.radiusFactor * base;
      const ry = rx * ring.tilt;
      const a = s.angles[i] + s.rotYaw;
      return { x: s.cx + Math.cos(a) * rx, y: s.cy + Math.sin(a) * ry };
    }

    function frame(ts) {
      const s = S.current;
      if (!s.ready) { RAF = requestAnimationFrame(frame); return; }
      if (!s.startTS) s.startTS = ts;
      const t = ts - s.startTS;
      const { W, H, cx, cy } = s;

      ctx.clearRect(0, 0, W, H);

      // ── 1. DEEP SPACE VOID GRADIENT ──
      const bg = ctx.createRadialGradient(cx, cy * 0.9, 0, cx, cy, Math.max(W, H) * 0.75);
      bg.addColorStop(0, 'rgba(4, 16, 42, 0.98)');
      bg.addColorStop(0.35, 'rgba(3, 11, 30, 0.99)');
      bg.addColorStop(0.75, 'rgba(2, 6, 18, 1)');
      bg.addColorStop(1, 'rgba(1, 4, 12, 1)');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // ── 2. DISTANT BACKGROUND STARS ──
      for (const st of s.bgStars) {
        st.phase += st.speed;
        const a = st.a * (0.5 + 0.5 * Math.sin(st.phase));
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 225, 255, ${a.toFixed(2)})`;
        ctx.fill();
      }

      // Natural continuous galactic rotation
      const galacticSpin = t * 0.00012;
      const totalRot = s.rotYaw + galacticSpin;

      // ── 3. INTERSTELLAR NEBULA GAS CLOUDS (Swirling in 3D Galaxy Plane) ──
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (const neb of s.nebulaPockets) {
        const curAngle = neb.armAngle + totalRot + 2.4 * Math.pow(neb.dist / (Math.min(W, H) * 0.47), 0.68);
        const nx = cx + Math.cos(curAngle) * neb.dist;
        const ny = cy + Math.sin(curAngle) * (neb.dist * 0.54);
        const ng = ctx.createRadialGradient(nx, ny, 0, nx, ny, neb.radius);
        ng.addColorStop(0, neb.color);
        ng.addColorStop(0.5, neb.color.replace('0.1', '0.04').replace('0.12', '0.04').replace('0.13', '0.05').replace('0.14', '0.05'));
        ng.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = ng;
        ctx.beginPath();
        ctx.ellipse(nx, ny, neb.radius, neb.radius * 0.54, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // ── 4. SPIRAL ARM STARS & DUST LANES ──
      for (const star of s.spiralStars) {
        star.phase += star.speed;
        const twinkle = star.alpha * (0.65 + 0.35 * Math.sin(star.phase));
        const curAngle = star.baseTheta + totalRot;
        const sx = cx + Math.cos(curAngle) * star.r;
        const sy = cy + Math.sin(curAngle) * (star.r * star.tilt);

        ctx.beginPath();
        ctx.arc(sx, sy, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.colorRGB}, ${twinkle.toFixed(2)})`;
        ctx.fill();

        // Subtle diffraction glow for largest stars
        if (star.size > 1.8) {
          ctx.beginPath();
          ctx.arc(sx, sy, star.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${star.colorRGB}, ${(twinkle * 0.25).toFixed(2)})`;
          ctx.fill();
        }
      }

      // ── 5. SUBTLE CELESTIAL ORBIT TRACKS (Faint Gravitational Flow) ──
      for (let i = 0; i < RINGS.length; i++) {
        const ring = RINGS[i];
        const rx = ring.radiusFactor * Math.min(W, H);
        const ry = rx * ring.tilt;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = s.connectAll
          ? `rgba(56, 189, 248, ${0.22 - i * 0.035})`
          : `rgba(59, 130, 246, ${0.075 - i * 0.012})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 10]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      }

      // Collect positions and update orbit angles
      const pos = TECHS.map((tech, i) => {
        s.angles[i] += RINGS[tech.ring].speed;
        return getPos(i);
      });

      const hIdx = s.hoveredIndex;

      // ── 6. CONNECTION BEAMS & PURPLE SNAKE RAY ──
      if (s.connectAll) {
        // [ALL CONNECTED MODE]: Only appears when DK center is CLICKED!
        for (let i = 0; i < TECHS.length; i++) {
          const toP = pos[i];
          const tech = TECHS[i];

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(toP.x, toP.y);

          const grad = ctx.createLinearGradient(cx, cy, toP.x, toP.y);
          grad.addColorStop(0, '#38bdf8');
          grad.addColorStop(0.4, '#60a5fa');
          grad.addColorStop(1, tech.color);

          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.8;
          ctx.shadowColor = tech.color;
          ctx.shadowBlur = 10;
          ctx.stroke();

          // Animated energy particle streaming outward from DK to node
          const progress = (t * 0.0016 + i * (1 / TECHS.length)) % 1;
          const px = cx + (toP.x - cx) * progress;
          const py = cy + (toP.y - cy) * progress;

          ctx.beginPath();
          ctx.arc(px, py, 2.8, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 8;
          ctx.fill();

          // Pulsing halo around target node
          ctx.beginPath();
          ctx.arc(toP.x, toP.y, 28 + Math.sin(t * 0.005 + i) * 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = tech.color;
          ctx.lineWidth = 1.6;
          ctx.shadowColor = tech.color;
          ctx.shadowBlur = 14;
          ctx.stroke();

          ctx.restore();

          // ── PURPLE RAY SNAKE (coiling around the line like an electric snake) ──
          const dx = toP.x - cx;
          const dy = toP.y - cy;
          const dist = Math.hypot(dx, dy);

          if (dist > 10) {
            const ux = dx / dist;
            const uy = dy / dist;
            const nx = -uy; // Perpendicular normal
            const ny = ux;

            const steps = Math.min(50, Math.max(26, Math.floor(dist / 5)));
            const freq = 0.055;
            const phase = -t * 0.0075 + i * 0.55;
            const maxAmp = 8.5;

            ctx.save();
            ctx.beginPath();

            for (let sIdx = 0; sIdx <= steps; sIdx++) {
              const frac = sIdx / steps;
              const d = frac * dist;
              // Smooth envelope: 0 at ends, 1 in middle
              const envelope = Math.sin(frac * Math.PI);
              const offset = Math.sin(d * freq + phase) * (maxAmp * envelope);

              const sx = cx + ux * d + nx * offset;
              const sy = cy + uy * d + ny * offset;

              if (sIdx === 0) {
                ctx.moveTo(sx, sy);
              } else {
                ctx.lineTo(sx, sy);
              }
            }

            // Glowing Purple Ray Gradient
            const purpleGrad = ctx.createLinearGradient(cx, cy, toP.x, toP.y);
            purpleGrad.addColorStop(0, '#f472b6'); // Pinkish glow near DK
            purpleGrad.addColorStop(0.4, '#c084fc'); // Electric purple body
            purpleGrad.addColorStop(1, '#a855f7'); // Deep violet near target

            ctx.strokeStyle = purpleGrad;
            ctx.lineWidth = 2.4;
            ctx.shadowColor = '#d946ef';
            ctx.shadowBlur = 12;
            ctx.stroke();

            // Traveling glowing "snake head" orb slithering along the wavy path
            const headProgress = (t * 0.0022 + i * (1 / TECHS.length)) % 1;
            const headD = headProgress * dist;
            const headEnv = Math.sin(headProgress * Math.PI);
            const headOffset = Math.sin(headD * freq + phase) * (maxAmp * headEnv);
            const hx = cx + ux * headD + nx * headOffset;
            const hy = cy + uy * headD + ny * headOffset;

            // Glowing snake head orb
            ctx.beginPath();
            ctx.arc(hx, hy, 3.4, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = '#f0abfc';
            ctx.shadowBlur = 14;
            ctx.fill();

            // Outer purple aura around head
            ctx.beginPath();
            ctx.arc(hx, hy, 6.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(192, 132, 252, 0.35)';
            ctx.fill();

            ctx.restore();
          }
        }

        // Faint mesh between connected pairs
        ctx.save();
        ctx.lineWidth = 0.7;
        for (let i = 0; i < TECHS.length; i++) {
          for (let j = i + 1; j < TECHS.length; j++) {
            if (TECHS[i].connections.includes(TECHS[j].name)) {
              const dx = pos[i].x - pos[j].x, dy = pos[i].y - pos[j].y;
              const d = Math.sqrt(dx * dx + dy * dy);
              if (d < 160) {
                ctx.beginPath();
                ctx.moveTo(pos[i].x, pos[i].y);
                ctx.lineTo(pos[j].x, pos[j].y);
                ctx.strokeStyle = `rgba(96, 165, 250, ${(1 - d / 160) * 0.18})`;
                ctx.stroke();
              }
            }
          }
        }
        ctx.restore();

      } else if (typeof hIdx === 'number' && hIdx >= 0 && hIdx < TECHS.length) {
        // ACTIVE HOVER STATE: Glowing lines to compatible pairing languages
        const hTech = TECHS[hIdx];
        const fromP = pos[hIdx];

        hTech.connections.forEach(targetName => {
          const targetIdx = TECHS.findIndex(t => t.name === targetName);
          if (targetIdx !== -1) {
            const toP = pos[targetIdx];
            const targetTech = TECHS[targetIdx];

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(fromP.x, fromP.y);
            ctx.lineTo(toP.x, toP.y);

            const grad = ctx.createLinearGradient(fromP.x, fromP.y, toP.x, toP.y);
            grad.addColorStop(0, hTech.color);
            grad.addColorStop(1, targetTech.color);

            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.7;
            ctx.shadowColor = hTech.color;
            ctx.shadowBlur = 9;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(toP.x, toP.y, 30 + Math.sin(t * 0.005) * 2, 0, Math.PI * 2);
            ctx.strokeStyle = targetTech.color;
            ctx.lineWidth = 1.4;
            ctx.shadowColor = targetTech.color;
            ctx.shadowBlur = 12;
            ctx.stroke();

            ctx.restore();
          }
        });
      } else {
        // DEFAULT AMBIENT STATE: Subtle nearby proximity web
        ctx.lineWidth = 0.6;
        for (let i = 0; i < TECHS.length; i++) {
          for (let j = i + 1; j < TECHS.length; j++) {
            const dx = pos[i].x - pos[j].x, dy = pos[i].y - pos[j].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 140) {
              ctx.beginPath();
              ctx.moveTo(pos[i].x, pos[i].y);
              ctx.lineTo(pos[j].x, pos[j].y);
              ctx.strokeStyle = `rgba(59,130,246,${((1 - d / 140) * 0.08).toFixed(3)})`;
              ctx.stroke();
            }
          }
        }
      }

      // ── 7. SUPERMASSIVE GALACTIC CORE (Bulge & Accretion Halo) ──
      const pulse = 0.5 + 0.3 * Math.sin(t * 0.0018);
      const coreR = s.connectAll ? 44 + 8 * Math.sin(t * 0.003) : 36 + 6 * Math.sin(t * 0.0018);

      ctx.save();
      // Outer Accretion Aura
      ctx.beginPath();
      ctx.arc(cx, cy, coreR * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = s.connectAll ? 'rgba(56, 189, 248, 0.15)' : 'rgba(56, 189, 248, 0.08)';
      ctx.fill();

      // Coronal Ring
      ctx.beginPath();
      ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
      ctx.strokeStyle = s.connectAll ? 'rgba(56, 189, 248, 0.75)' : `rgba(59, 130, 246, ${((pulse * 0.45) + 0.1).toFixed(2)})`;
      ctx.lineWidth = s.connectAll ? 3 : 2;
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = s.connectAll ? 24 : 12;
      ctx.stroke();

      // Blinding Golden-Cyan Core
      const cG = ctx.createRadialGradient(cx, cy - 2, 0, cx, cy, s.connectAll ? 32 : 26);
      cG.addColorStop(0, '#ffffff');
      cG.addColorStop(0.25, '#fef08a'); // Warm star core
      cG.addColorStop(0.55, s.connectAll ? 'rgba(56, 189, 248, 0.95)' : 'rgba(56, 189, 248, 0.8)');
      cG.addColorStop(0.85, 'rgba(14, 165, 233, 0.4)');
      cG.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, s.connectAll ? 32 : 26, 0, Math.PI * 2);
      ctx.fillStyle = cG;
      ctx.fill();
      ctx.restore();

      // Update DOM node positions
      for (let i = 0; i < TECHS.length; i++) {
        const el = nodeRefs.current[i];
        if (el) {
          el.style.left = `${pos[i].x}px`;
          el.style.top = `${pos[i].y}px`;
        }
      }

      if (isVisible) {
        RAF = requestAnimationFrame(frame);
      } else {
        RAF = null;
      }
    }

    setup();
    RAF = requestAnimationFrame(frame);

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !RAF) {
        RAF = requestAnimationFrame(frame);
      }
    }, { rootMargin: '120px' });
    observer.observe(wrapper);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
          cancelAnimationFrame(RAF);
          setup();
          if (isVisible) {
            RAF = requestAnimationFrame(frame);
          }
        }
      }
    });
    resizeObserver.observe(wrapper);

    const onResize = () => {
      cancelAnimationFrame(RAF);
      setup();
      if (isVisible) {
        RAF = requestAnimationFrame(frame);
      }
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(RAF);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  /* ─ Drag to rotate ─────────────────────────── */
  const onMD = e => { drag.current = { active: true, startX: e.clientX, rotOffset: S.current.rotYaw }; };
  const onMM = e => {
    if (drag.current.active) {
      S.current.rotYaw = drag.current.rotOffset + (e.clientX - drag.current.startX) * 0.006;
    }
  };
  const onMU = () => { drag.current.active = false; };
  const onTS = e => { drag.current = { active: true, startX: e.touches[0].clientX, rotOffset: S.current.rotYaw }; };
  const onTM = e => {
    if (drag.current.active) {
      S.current.rotYaw = drag.current.rotOffset + (e.touches[0].clientX - drag.current.startX) * 0.006;
    }
  };

  // Center DK Click Handler: Toggles "Connect All"
  function handleDkClick(e) {
    e.stopPropagation();
    const next = !connectAll;
    setConnectAll(next);
    S.current.connectAll = next;
  }

  function handleNodeEnter(tech, i) {
    setHoveredTech(tech);
    S.current.hoveredIndex = i;
  }

  function handleNodeLeave() {
    setHoveredTech(null);
    S.current.hoveredIndex = null;
  }

  function handleDkEnter() {
    setHoveredTech(DK_TECH);
    S.current.hoveredIndex = 'DK';
  }

  function handleDkLeave() {
    setHoveredTech(null);
    S.current.hoveredIndex = null;
  }

  return (
    <div
      className="galaxy-wrapper"
      ref={wrapperRef}
      onMouseDown={onMD}
      onMouseMove={onMM}
      onMouseUp={onMU}
      onMouseLeave={() => { onMU(); handleNodeLeave(); }}
      onClick={() => {
        if (connectAll) {
          setConnectAll(false);
          S.current.connectAll = false;
        }
      }}
      onTouchStart={onTS}
      onTouchMove={onTM}
      onTouchEnd={onMU}
      style={{ cursor: drag.current.active ? 'grabbing' : 'crosshair' }}
    >
      <canvas ref={canvasRef} className="galaxy-canvas" />

      {/* Floating Hover Panel HUD */}
      {hoveredTech && (
        <div
          className="galaxy-hover-panel"
          style={{
            '--accent-color': hoveredTech.color || '#38bdf8',
          }}
        >
          <div className="hover-panel-header">
            <div
              className="hover-panel-icon"
              style={{
                background: hoveredTech.isDkCore
                  ? 'radial-gradient(circle at 30% 30%, #38bdf8ee, #0284c755)'
                  : `radial-gradient(circle at 30% 30%, ${hoveredTech.color}ee, ${hoveredTech.color}55)`,
                boxShadow: `0 0 18px ${hoveredTech.color || '#38bdf8'}66`,
              }}
            >
              {hoveredTech.isDkCore ? (
                <span style={{ fontWeight: 900, color: '#fff', fontSize: '15px' }}>DK</span>
              ) : (
                <hoveredTech.Icon size={20} color="#fff" />
              )}
            </div>
            <div className="hover-panel-info">
              <div className="hover-panel-title-row">
                <span className="hover-panel-name">{hoveredTech.name}</span>
                <span
                  className="hover-panel-category"
                  style={{
                    color: hoveredTech.color || '#38bdf8',
                    borderColor: `${hoveredTech.color || '#38bdf8'}44`,
                    background: `${hoveredTech.color || '#38bdf8'}15`,
                  }}
                >
                  {hoveredTech.category}
                </span>
              </div>
              <p className="hover-panel-tagline">{hoveredTech.tagline}</p>
            </div>
          </div>

          <div className="hover-panel-connections">
            <span className="connections-label">
              {hoveredTech.isDkCore ? 'Unified Across Full Stack:' : 'Pairs & Connects With:'}
            </span>
            <div className="connections-chips">
              {hoveredTech.connections.slice(0, hoveredTech.isDkCore ? 10 : 8).map(cName => {
                const cTech = TECHS.find(t => t.name === cName);
                return (
                  <span
                    key={cName}
                    className="connection-chip"
                    style={{
                      borderColor: cTech ? `${cTech.color}66` : 'rgba(59,130,246,0.3)',
                      color: cTech ? cTech.color : '#93c5fd',
                      background: cTech ? `${cTech.color}18` : 'rgba(59,130,246,0.1)',
                    }}
                  >
                    {cTech && <cTech.Icon size={11} style={{ marginRight: 4 }} />}
                    {cName}
                  </span>
                );
              })}
              {hoveredTech.isDkCore && <span className="connection-chip" style={{ color: '#38bdf8' }}>+12 more</span>}
            </div>
          </div>

          <div className="hover-panel-hint">
            <span>
              {hoveredTech.isDkCore ? (
                <>
                  <FiZap size={12} style={{ marginRight: 5, verticalAlign: '-1px' }} />
                  Click DK center to toggle universal connection
                </>
              ) : (
                <>
                  <FiInfo size={12} style={{ marginRight: 5, verticalAlign: '-1px' }} />
                  Click icon to view full details & use cases
                </>
              )}
            </span>
          </div>
        </div>
      )}

      {/* Orbiting Tech Nodes & Center DK */}
      <div className="galaxy-nodes">
        {/* ── CENTER DK INTERACTIVE CORE ── */}
        <div
          className={`center-dk-node ${connectAll ? 'dk-active-all' : ''}`}
          onClick={handleDkClick}
          onMouseEnter={handleDkEnter}
          onMouseLeave={handleDkLeave}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 40,
            cursor: 'pointer',
            pointerEvents: 'all',
          }}
          title="Click DK to connect to everything!"
        >
          <div className="center-dk-ring outer-ring" />
          <div className="center-dk-ring mid-ring" />
          <div className="center-dk-core">
            <span className="center-dk-text">DK</span>
          </div>
          <span className="center-dk-label">
            {connectAll ? (
              <>
                <FiZap size={11} style={{ marginRight: 4, verticalAlign: '-1px' }} />
                Connected to All
              </>
            ) : (
              'Click: Connect All'
            )}
          </span>
        </div>

        {/* 22 Tech Nodes */}
        {TECHS.map((tech, i) => {
          const isHovered = hoveredTech?.name === tech.name;
          const isConnected = (hoveredTech && hoveredTech.connections.includes(tech.name)) || connectAll;
          const isDimmed = hoveredTech && !isHovered && !isConnected && !connectAll;

          let nodeClass = 'tech-node';
          if (isHovered) nodeClass += ' node-hovered';
          else if (isConnected) nodeClass += ' node-connected';
          else if (isDimmed) nodeClass += ' node-dimmed';

          return (
            <div
              key={tech.name}
              className={nodeClass}
              ref={el => { nodeRefs.current[i] = el; }}
              onMouseEnter={() => handleNodeEnter(tech, i)}
              onMouseLeave={handleNodeLeave}
              onClick={() => setSelectedTech(tech)}
              style={{
                transform: 'translate(-50%,-50%)',
                left: 0,
                top: 0,
                willChange: 'left,top',
              }}
            >
              <div
                className="node-circle"
                style={{
                  background: `radial-gradient(circle at 35% 35%, ${tech.color}ee, ${tech.color}66)`,
                  boxShadow: isHovered
                    ? `0 0 28px ${tech.color}aa, 0 0 50px ${tech.color}55, inset 0 0 10px rgba(0,0,0,.3)`
                    : isConnected
                    ? `0 0 22px ${tech.color}99, inset 0 0 8px rgba(0,0,0,.3)`
                    : `0 0 16px ${tech.color}44, inset 0 0 10px rgba(0,0,0,.3)`,
                  borderColor: isHovered || isConnected ? '#ffffff' : 'rgba(255,255,255,.25)',
                }}
              >
                <tech.Icon size={20} color="#fff" />
              </div>
              <span
                className="node-label"
                style={isConnected ? { color: tech.color, borderColor: `${tech.color}66` } : {}}
              >
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>

      <p className="galaxy-hint">
        {connectAll ? (
          <>
            <FiZap size={12} style={{ marginRight: 5, verticalAlign: '-1px' }} />
            DK Core: Connected to all 22 technologies · Click DK to disconnect
          </>
        ) : (
          <>
            <FiActivity size={12} style={{ marginRight: 5, verticalAlign: '-1px' }} />
            Click center DK to connect all · Hover nodes to see connections · Drag to rotate
          </>
        )}
      </p>

      {/* ── POPUP WINDOW / MODAL FOR CLICKED LANGUAGE ── */}
      {selectedTech && (
        <div
          className="galaxy-modal-backdrop"
          onClick={() => setSelectedTech(null)}
        >
          <div
            className="galaxy-modal"
            style={{
              '--modal-accent': selectedTech.color,
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-header-left">
                <div
                  className="modal-icon-badge"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${selectedTech.color}ee, ${selectedTech.color}55)`,
                    boxShadow: `0 0 24px ${selectedTech.color}66`,
                  }}
                >
                  <selectedTech.Icon size={32} color="#fff" />
                </div>
                <div>
                  <div className="modal-title-row">
                    <h3 className="modal-title">{selectedTech.name}</h3>
                    <span
                      className="modal-category"
                      style={{
                        color: selectedTech.color,
                        borderColor: `${selectedTech.color}55`,
                        background: `${selectedTech.color}15`,
                      }}
                    >
                      {selectedTech.category}
                    </span>
                  </div>
                  <p className="modal-tagline">{selectedTech.tagline}</p>
                </div>
              </div>

              <button
                className="modal-close-btn"
                onClick={() => setSelectedTech(null)}
                aria-label="Close modal"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Overview */}
              <div className="modal-section">
                <h4 className="modal-section-title">Brief Description</h4>
                <p className="modal-description">{selectedTech.description}</p>
              </div>

              {/* What It Can Be Used For */}
              <div className="modal-section">
                <h4 className="modal-section-title">What It Can Be Used For</h4>
                <ul className="modal-use-cases">
                  {selectedTech.useCases.map((uc, idx) => (
                    <li key={idx} className="use-case-item">
                      <span
                        className="use-case-bullet"
                        style={{ color: selectedTech.color, background: `${selectedTech.color}22` }}
                      >
                        <FiCheck size={13} />
                      </span>
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Synergies / Connections */}
              <div className="modal-section">
                <h4 className="modal-section-title">Works Great With (Tech Pairings)</h4>
                <p className="modal-subtext">Click any connected language to inspect its breakdown:</p>
                <div className="modal-connections">
                  {selectedTech.connections.map(cName => {
                    const cTech = TECHS.find(t => t.name === cName);
                    if (!cTech) return null;
                    return (
                      <button
                        key={cName}
                        type="button"
                        className="modal-tech-chip"
                        style={{
                          borderColor: `${cTech.color}66`,
                          background: `${cTech.color}15`,
                          color: cTech.color,
                        }}
                        onClick={() => setSelectedTech(cTech)}
                      >
                        <cTech.Icon size={14} />
                        <span>{cName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Core Strengths */}
              {selectedTech.strengths && (
                <div className="modal-section">
                  <h4 className="modal-section-title">Core Strengths</h4>
                  <div className="modal-strengths">
                    {selectedTech.strengths.map(st => (
                      <span key={st} className="strength-pill">
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
