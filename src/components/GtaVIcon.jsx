export default function GtaVIcon({ size = 24, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      aria-label="Grand Theft Auto V"
    >
      <defs>
        {/* GTA V Roman numeral V gradient */}
        <linearGradient id="gtaVGreen" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#9be176" />
          <stop offset="35%" stopColor="#62a344" />
          <stop offset="70%" stopColor="#3d6c29" />
          <stop offset="100%" stopColor="#224215" />
        </linearGradient>
        
        {/* Metallic Bevel Outline */}
        <linearGradient id="gtaVBevel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#d4e8c8" />
          <stop offset="100%" stopColor="#557548" />
        </linearGradient>

        {/* Ribbon Gradient */}
        <linearGradient id="gtaRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#142c0f" />
          <stop offset="50%" stopColor="#1d4016" />
          <stop offset="100%" stopColor="#142c0f" />
        </linearGradient>

        <filter id="gtaGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.75" />
        </filter>
      </defs>

      {/* Main Roman Numeral V */}
      <g filter="url(#gtaGlow)">
        {/* Outer Beveled V */}
        <path
          d="M 6 8 L 14.5 8 L 22 28.5 L 29.5 8 L 38 8 L 27.5 35 L 16.5 35 Z"
          fill="url(#gtaVGreen)"
          stroke="url(#gtaVBevel)"
          strokeWidth="1.6"
          strokeLinejoin="miter"
        />

        {/* Left wing internal highlight */}
        <path
          d="M 10 9.5 L 13.5 9.5 L 20 27.5 L 17 27.5 Z"
          fill="#c8f5ab"
          opacity="0.38"
        />

        {/* Right wing internal shadow */}
        <path
          d="M 27 27.5 L 24 27.5 L 30.5 9.5 L 34 9.5 Z"
          fill="#17310e"
          opacity="0.45"
        />

        {/* The classic GTA V decorative banner reading "FIVE" */}
        <g transform="translate(0, 0)">
          {/* Banner backing */}
          <rect
            x="4"
            y="18.5"
            width="36"
            height="9"
            rx="1.8"
            fill="url(#gtaRibbon)"
            stroke="#ffffff"
            strokeWidth="1.1"
          />
          {/* Inner banner trim line */}
          <rect
            x="5.2"
            y="19.7"
            width="33.6"
            height="6.6"
            rx="1"
            fill="none"
            stroke="#7cb864"
            strokeWidth="0.6"
            opacity="0.8"
          />
          {/* Authentic FIVE serif text */}
          <text
            x="22"
            y="25.4"
            textAnchor="middle"
            fontFamily="'Times New Roman', Times, 'Cinzel', serif"
            fontSize="6.4"
            fontWeight="bold"
            fontStyle="italic"
            letterSpacing="2.2"
            fill="#f6eed8"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.85)' }}
          >
            FIVE
          </text>
        </g>
      </g>
    </svg>
  );
}
