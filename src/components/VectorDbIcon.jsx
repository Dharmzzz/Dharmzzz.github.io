export default function VectorDbIcon({ size = 22, color = '#A855F7', className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      aria-label="Vector Database"
    >
      <defs>
        <linearGradient id="vdbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#7E22CE" />
        </linearGradient>
      </defs>

      {/* Database bottom cylinder */}
      <path
        d="M8 26 C8 29.5 13.5 32 20 32 C26.5 32 32 29.5 32 26 V30 C32 33.5 26.5 36 20 36 C13.5 36 8 33.5 8 30 Z"
        fill="url(#vdbGrad)"
        opacity="0.8"
      />

      {/* Database middle cylinder */}
      <path
        d="M8 20 C8 23.5 13.5 26 20 26 C26.5 26 32 23.5 32 20 V23 C32 26.5 26.5 29 20 29 C13.5 29 8 26.5 8 23 Z"
        fill="url(#vdbGrad)"
        opacity="0.95"
      />

      {/* 3D Vector coordinate cluster overlay */}
      {/* Connector lines between vector nodes */}
      <line x1="20" y1="9" x2="12" y2="18" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
      <line x1="20" y1="9" x2="28" y2="18" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
      <line x1="12" y1="18" x2="28" y2="18" stroke="#ffffff" strokeWidth="1.6" strokeDasharray="2 2" opacity="0.75" />
      <line x1="20" y1="9" x2="20" y2="23" stroke="#A855F7" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.85" />

      {/* Top Vector Node */}
      <circle cx="20" cy="9" r="4.2" fill="#ffffff" stroke="#9333EA" strokeWidth="1.8" />
      <circle cx="20" cy="9" r="1.8" fill="#7E22CE" />

      {/* Left Vector Node */}
      <circle cx="12" cy="18" r="3.6" fill="#F3E8FF" stroke="#A855F7" strokeWidth="1.6" />
      <circle cx="12" cy="18" r="1.4" fill="#9333EA" />

      {/* Right Vector Node */}
      <circle cx="28" cy="18" r="3.6" fill="#F3E8FF" stroke="#A855F7" strokeWidth="1.6" />
      <circle cx="28" cy="18" r="1.4" fill="#9333EA" />
    </svg>
  );
}
