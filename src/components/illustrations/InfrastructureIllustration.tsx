import React from 'react';

interface Props {
  isHovered?: boolean;
}

export const InfrastructureIllustration: React.FC<Props> = ({ isHovered = false }) => {
  return (
    <div className="relative w-48 h-32 flex items-center justify-center">
      <svg viewBox="0 0 240 160" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="trainGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="trainStripe" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="highwayGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
        </defs>

        {/* Elevated Monorail Pillars */}
        <g stroke="#94a3b8" strokeWidth="1.5" fill="#cbd5e1">
          <rect x="35" y="55" width="14" height="65" rx="1" />
          <rect x="115" y="55" width="14" height="65" rx="1" />
          <rect x="195" y="55" width="14" height="65" rx="1" />
        </g>

        {/* Elevated Railway Track Beam */}
        <rect x="5" y="50" width="230" height="12" fill="#64748b" stroke="#334155" strokeWidth="1.5" rx="2" />
        {/* Overhead Catenary Lines */}
        <line x1="5" y1="18" x2="235" y2="18" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="6 3" />
        <line x1="50" y1="18" x2="50" y2="50" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="130" y1="18" x2="130" y2="50" stroke="#cbd5e1" strokeWidth="1" />
        <line x1="210" y1="18" x2="210" y2="50" stroke="#cbd5e1" strokeWidth="1" />

        {/* High-Speed Express Metro Train (Moving forward right) */}
        <g
          transform="translate(45, 20)"
          className="transition-transform duration-700 ease-out"
          style={{ transform: isHovered ? 'translate(75px, 20px)' : 'translate(45px, 20px)' }}
        >
          {/* Main Bullet Nose Train Body */}
          <path
            d="M 0 30 L 130 30 C 150 30, 165 24, 175 18 C 165 10, 150 4, 130 4 L 0 4 Z"
            fill="url(#trainGrad)"
            stroke="#0284c7"
            strokeWidth="1.5"
          />

          {/* Yellow/Blue Speed Stripe */}
          <path d="M 0 16 L 155 16 C 162 16, 168 14, 172 12 L 0 12 Z" fill="url(#trainStripe)" />

          {/* Windows */}
          <rect x="15" y="7" width="14" height="6" fill="#0284c7" rx="1" />
          <rect x="35" y="7" width="14" height="6" fill="#0284c7" rx="1" />
          <rect x="55" y="7" width="14" height="6" fill="#0284c7" rx="1" />
          <rect x="75" y="7" width="14" height="6" fill="#0284c7" rx="1" />
          <rect x="95" y="7" width="14" height="6" fill="#0284c7" rx="1" />
          <rect x="115" y="7" width="14" height="6" fill="#0284c7" rx="1" />

          {/* Driver Cockpit Windshield */}
          <path d="M 140 7 C 152 7, 162 10, 168 14 L 140 14 Z" fill="#0369a1" />

          {/* Speed Motion Lines */}
          <line x1="-15" y1="10" x2="-4" y2="10" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
          <line x1="-25" y1="20" x2="-8" y2="20" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Highway Road Below (Cao tốc) */}
        <g transform="translate(0, 115)">
          <rect x="0" y="5" width="240" height="30" fill="url(#highwayGrad)" />
          {/* White Center Dashed Line */}
          <line x1="0" y1="20" x2="240" y2="20" stroke="#ffffff" strokeWidth="2" strokeDasharray="10 8" />

          {/* Car 1 (Blue) */}
          <g transform="translate(30, 10)">
            <rect x="0" y="2" width="22" height="10" fill="#2563eb" rx="2" />
            <rect x="5" y="0" width="12" height="6" fill="#93c5fd" rx="1" />
            <circle cx="4" cy="12" r="2.5" fill="#0f172a" />
            <circle cx="18" cy="12" r="2.5" fill="#0f172a" />
          </g>

          {/* Car 2 (Yellow) */}
          <g transform="translate(100, 22)">
            <rect x="0" y="2" width="20" height="9" fill="#eab308" rx="2" />
            <rect x="4" y="0" width="10" height="5" fill="#fef08a" rx="1" />
            <circle cx="4" cy="11" r="2" fill="#0f172a" />
            <circle cx="16" cy="11" r="2" fill="#0f172a" />
          </g>

          {/* Car 3 (Green) */}
          <g transform="translate(170, 8)">
            <rect x="0" y="2" width="24" height="11" fill="#16a34a" rx="2" />
            <rect x="6" y="0" width="12" height="6" fill="#bbf7d0" rx="1" />
            <circle cx="5" cy="13" r="2.5" fill="#0f172a" />
            <circle cx="19" cy="13" r="2.5" fill="#0f172a" />
          </g>
        </g>
      </svg>
    </div>
  );
};
