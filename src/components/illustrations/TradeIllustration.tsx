import React from 'react';

interface Props {
  isHovered?: boolean;
}

export const TradeIllustration: React.FC<Props> = ({ isHovered = false }) => {
  return (
    <div className="relative w-44 h-32 flex items-center justify-center">
      <svg viewBox="0 0 220 160" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="oceanGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="shipHull" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#172554" />
          </linearGradient>
          <linearGradient id="globeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#bae6fd" opacity="0.8" />
            <stop offset="100%" stopColor="#0284c7" opacity="0.9" />
          </linearGradient>
        </defs>

        {/* Floating Translucent Globe with Orbit Lines */}
        <g transform="translate(110, 42)">
          <circle cx="0" cy="0" r="32" fill="url(#globeGrad)" stroke="#60a5fa" strokeWidth="1.5" />
          {/* Latitude Lines */}
          <ellipse cx="0" cy="0" rx="32" ry="12" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
          <ellipse cx="0" cy="0" rx="32" ry="22" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
          <line x1="0" y1="-32" x2="0" y2="32" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
          
          {/* Curved Upward Export Trade Arrow around globe */}
          <path
            d="M -38 15 C -45 -15, -10 -40, 30 -30"
            fill="none"
            stroke="#22c55e"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <polygon points="28,-36 40,-26 26,-22" fill="#22c55e" />
        </g>

        {/* Cargo Container Ship */}
        <g
          transform="translate(15, 65)"
          className="transition-transform duration-700 ease-out"
          style={{ transform: isHovered ? 'translate(25px, 63px)' : 'translate(15px, 65px)' }}
        >
          {/* Stacked Cargo Containers */}
          {/* Row 1 */}
          <rect x="40" y="22" width="22" height="12" fill="#ef4444" rx="1" stroke="#b91c1c" strokeWidth="0.5" />
          <rect x="64" y="22" width="22" height="12" fill="#3b82f6" rx="1" stroke="#1d4ed8" strokeWidth="0.5" />
          <rect x="88" y="22" width="22" height="12" fill="#eab308" rx="1" stroke="#a16207" strokeWidth="0.5" />

          {/* Row 2 (Top) */}
          <rect x="52" y="8" width="22" height="12" fill="#10b981" rx="1" stroke="#047857" strokeWidth="0.5" />
          <rect x="76" y="8" width="22" height="12" fill="#f97316" rx="1" stroke="#c2410c" strokeWidth="0.5" />

          {/* Ship Bridge / Tower */}
          <rect x="115" y="0" width="18" height="34" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" rx="1" />
          <rect x="117" y="4" width="14" height="6" fill="#0284c7" />
          <rect x="117" y="14" width="14" height="4" fill="#64748b" />

          {/* Ship Main Hull */}
          <path d="M 10 34 L 145 34 L 135 55 L 25 55 Z" fill="url(#shipHull)" stroke="#0f172a" strokeWidth="1.5" />
          {/* Red Bottom Hull Stripe */}
          <path d="M 25 55 L 135 55 L 128 62 L 32 62 Z" fill="#dc2626" />
        </g>

        {/* Ocean Waves */}
        <g transform="translate(0, 122)">
          <path
            d="M 0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10 T 250 10"
            fill="none"
            stroke="url(#oceanGrad)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M 10 18 Q 35 8, 60 18 T 110 18 T 160 18 T 210 18"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3"
            opacity="0.7"
          />
        </g>
      </svg>
    </div>
  );
};
