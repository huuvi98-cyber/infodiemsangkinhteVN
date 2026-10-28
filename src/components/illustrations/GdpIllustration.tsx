import React from 'react';

interface Props {
  isHovered?: boolean;
}

export const GdpIllustration: React.FC<Props> = ({ isHovered = false }) => {
  return (
    <div className="relative w-48 h-36 flex items-center justify-center">
      <svg viewBox="0 0 200 160" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="gdpBarGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <linearGradient id="goldCoin" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
          <linearGradient id="blueBadge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1d63b8" />
            <stop offset="100%" stopColor="#0f3c78" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* Chart Base Line */}
        <path d="M 15 135 L 135 135" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />

        {/* Bar 1 */}
        <rect
          x="22"
          y="105"
          width="18"
          height="30"
          rx="3"
          fill="url(#gdpBarGrad)"
          className="transition-all duration-500 ease-out"
          style={{
            transform: isHovered ? 'scaleY(1.08)' : 'scaleY(1)',
            transformOrigin: 'bottom'
          }}
        />
        {/* Bar 2 */}
        <rect
          x="46"
          y="85"
          width="18"
          height="50"
          rx="3"
          fill="url(#gdpBarGrad)"
          className="transition-all duration-500 ease-out delay-75"
          style={{
            transform: isHovered ? 'scaleY(1.1)' : 'scaleY(1)',
            transformOrigin: 'bottom'
          }}
        />
        {/* Bar 3 */}
        <rect
          x="70"
          y="65"
          width="18"
          height="70"
          rx="3"
          fill="url(#gdpBarGrad)"
          className="transition-all duration-500 ease-out delay-150"
          style={{
            transform: isHovered ? 'scaleY(1.12)' : 'scaleY(1)',
            transformOrigin: 'bottom'
          }}
        />

        {/* Growth Curve Line */}
        <path
          d="M 20 110 C 40 95, 60 75, 90 45"
          fill="none"
          stroke="#16a34a"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />

        {/* Coin Stack 1 */}
        <g transform="translate(95, 95)">
          <ellipse cx="20" cy="35" rx="16" ry="7" fill="url(#goldCoin)" stroke="#a16207" strokeWidth="1" />
          <rect x="4" y="27" width="32" height="8" fill="#eab308" />
          <ellipse cx="20" cy="27" rx="16" ry="7" fill="url(#goldCoin)" stroke="#a16207" strokeWidth="1" />
          <rect x="4" y="19" width="32" height="8" fill="#eab308" />
          <ellipse cx="20" cy="19" rx="16" ry="7" fill="url(#goldCoin)" stroke="#a16207" strokeWidth="1" />
          <text x="20" y="22" textAnchor="middle" fill="#78350f" fontSize="10" fontWeight="bold">$</text>
        </g>

        {/* Coin Stack 2 (Big front coin) */}
        <g transform="translate(62, 105)">
          <ellipse cx="22" cy="20" rx="20" ry="9" fill="url(#goldCoin)" stroke="#a16207" strokeWidth="1.5" />
          <rect x="2" y="10" width="40" height="10" fill="#eab308" />
          <ellipse cx="22" cy="10" rx="20" ry="9" fill="url(#goldCoin)" stroke="#a16207" strokeWidth="1.5" />
          <text x="22" y="13" textAnchor="middle" fill="#78350f" fontSize="12" fontWeight="bold">$</text>
        </g>

        {/* Main Blue Circular Badge with Upward Arrow & 9,01% */}
        <g
          transform="translate(140, 40)"
          className="transition-transform duration-500 ease-out"
          style={{ transform: isHovered ? 'scale(1.12) translate(132px, 32px)' : 'scale(1) translate(140px, 40px)' }}
        >
          <circle cx="32" cy="32" r="36" fill="url(#blueBadge)" filter="url(#shadow)" stroke="#ffffff" strokeWidth="3.5" />
          <circle cx="32" cy="32" r="33" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
          
          {/* Triangle Arrow Up */}
          <polygon points="32,9 23,23 41,23" fill="#ffffff" />
          
          {/* 9,01% Text */}
          <text x="32" y="44" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="900" fontFamily="sans-serif">
            9,01%
          </text>
        </g>
      </svg>
    </div>
  );
};
