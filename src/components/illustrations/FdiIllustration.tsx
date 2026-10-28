import React from 'react';

interface Props {
  isHovered?: boolean;
}

export const FdiIllustration: React.FC<Props> = ({ isHovered = false }) => {
  return (
    <div className="relative w-40 h-32 flex items-center justify-center">
      <svg viewBox="0 0 200 160" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="factoryWall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="factoryRoof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id="greenArrow" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          <linearGradient id="fdiCoin" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
        </defs>

        {/* Factory Chimneys */}
        <g>
          {/* Chimney 1 */}
          <rect x="135" y="45" width="12" height="40" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          <rect x="133" y="42" width="16" height="4" fill="#64748b" />
          {/* Smoke 1 */}
          <circle cx="146" cy="28" r="6" fill="#f1f5f9" opacity="0.6" />

          {/* Chimney 2 */}
          <rect x="155" y="35" width="14" height="50" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
          <rect x="153" y="32" width="18" height="4" fill="#475569" />
          {/* Smoke 2 */}
          <circle cx="162" cy="22" r="6" fill="#e2e8f0" opacity="0.7" />
          <circle cx="168" cy="12" r="8" fill="#f8fafc" opacity="0.5" />
        </g>

        {/* Main Factory Building */}
        <g transform="translate(90, 60)">
          {/* Sawtooth Roof */}
          <polygon points="0,25 20,10 20,25 40,10 40,25 60,10 60,25 80,10 80,70 0,70" fill="url(#factoryWall)" stroke="#0284c7" strokeWidth="1.5" />
          
          {/* Windows */}
          <rect x="10" y="35" width="12" height="12" fill="#0284c7" rx="1" />
          <rect x="30" y="35" width="12" height="12" fill="#0284c7" rx="1" />
          <rect x="50" y="35" width="12" height="12" fill="#0284c7" rx="1" />

          <rect x="10" y="52" width="12" height="12" fill="#0284c7" rx="1" />
          <rect x="30" y="52" width="12" height="12" fill="#0284c7" rx="1" />
          <rect x="50" y="52" width="12" height="12" fill="#0284c7" rx="1" />
        </g>

        {/* Curved Green Growth Arrow */}
        <path
          d="M 30 115 Q 70 85 125 40"
          fill="none"
          stroke="url(#greenArrow)"
          strokeWidth="7"
          strokeLinecap="round"
          className="transition-all duration-500"
        />
        {/* Arrowhead */}
        <polygon points="120,32 138,36 128,52" fill="#16a34a" />

        {/* Large Gold FDI Coin */}
        <g
          transform="translate(45, 95)"
          className="transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.1) translate(40px, 90px)' : 'scale(1) translate(45px, 95px)' }}
        >
          <ellipse cx="24" cy="20" rx="22" ry="10" fill="url(#fdiCoin)" stroke="#a16207" strokeWidth="1.5" />
          <rect x="2" y="10" width="44" height="10" fill="#eab308" />
          <ellipse cx="24" cy="10" rx="22" ry="10" fill="url(#fdiCoin)" stroke="#a16207" strokeWidth="1.5" />
          <circle cx="24" cy="10" r="14" fill="none" stroke="#ca8a04" strokeWidth="1" strokeDasharray="2 2" />
          <text x="24" y="14" textAnchor="middle" fill="#78350f" fontSize="13" fontWeight="bold">$</text>
        </g>
      </svg>
    </div>
  );
};
