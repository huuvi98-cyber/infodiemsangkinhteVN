import React from 'react';

interface Props {
  isHovered?: boolean;
}

export const BusinessIllustration: React.FC<Props> = ({ isHovered = false }) => {
  return (
    <div className="relative w-48 h-36 flex items-center justify-center">
      <svg viewBox="0 0 240 160" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="skyscraperGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="50%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
          <linearGradient id="roofAwning" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="hairDark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="hairBrown" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#78350f" />
            <stop offset="100%" stopColor="#451a03" />
          </linearGradient>
        </defs>

        {/* Modern Skyscraper Office Building (Tòa nhà cao ốc) */}
        <g transform="translate(130, 15)">
          {/* Main Tower Body */}
          <rect x="10" y="10" width="85" height="130" rx="4" fill="url(#skyscraperGrad)" stroke="#0284c7" strokeWidth="2" />
          
          {/* Top Architectural Antenna / Roof spire */}
          <rect x="47" y="0" width="10" height="10" fill="#0284c7" />
          <line x1="52" y1="0" x2="52" y2="-10" stroke="#0284c7" strokeWidth="2" />

          {/* Floors & Glass Windows Grid */}
          {/* Floor 1 */}
          <g transform="translate(18, 20)">
            <rect x="0" y="0" width="18" height="14" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" rx="1" />
            <rect x="25" y="0" width="18" height="14" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" rx="1" />
            <rect x="50" y="0" width="18" height="14" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" rx="1" />
          </g>

          {/* Floor 2 */}
          <g transform="translate(18, 40)">
            <rect x="0" y="0" width="18" height="14" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" rx="1" />
            <rect x="25" y="0" width="18" height="14" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" rx="1" />
            <rect x="50" y="0" width="18" height="14" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" rx="1" />
          </g>

          {/* Floor 3 */}
          <g transform="translate(18, 60)">
            <rect x="0" y="0" width="18" height="14" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" rx="1" />
            <rect x="25" y="0" width="18" height="14" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" rx="1" />
            <rect x="50" y="0" width="18" height="14" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" rx="1" />
          </g>

          {/* Floor 4 */}
          <g transform="translate(18, 80)">
            <rect x="0" y="0" width="18" height="14" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" rx="1" />
            <rect x="25" y="0" width="18" height="14" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" rx="1" />
            <rect x="50" y="0" width="18" height="14" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" rx="1" />
          </g>

          {/* Main Entrance Awning */}
          <rect x="12" y="102" width="80" height="6" fill="url(#roofAwning)" rx="1" />

          {/* Main Entrance Glass Doors */}
          <rect x="38" y="108" width="28" height="32" fill="#0369a1" stroke="#38bdf8" strokeWidth="1" rx="1" />
          <line x1="52" y1="108" x2="52" y2="140" stroke="#bae6fd" strokeWidth="1.5" />

          {/* Potted Trees in front of Building */}
          <circle cx="5" cy="135" r="9" fill="#22c55e" />
          <rect x="2" y="138" width="6" height="6" fill="#78350f" rx="1" />

          <circle cx="100" cy="135" r="9" fill="#16a34a" />
          <rect x="97" y="138" width="6" height="6" fill="#78350f" rx="1" />
        </g>

        {/* 2 Businesspeople Shaking Hands (Có tóc chi tiết & tay xách túi da dịch xuống dưới) */}
        <g
          transform="translate(10, 40)"
          className="transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.05) translate(12px, 38px)' : 'scale(1) translate(10px, 40px)' }}
        >
          {/* Businessperson 1 (Left - Blue suit, dark hair) */}
          <g transform="translate(10, 10)">
            {/* Styled Dark Hair */}
            <path d="M 10 3 C 6 3, 4 8, 4 15 C 4 17, 7 18, 9 18 C 11 18, 14 16, 17 16 C 20 16, 23 18, 25 18 C 26 14, 25 6, 20 3 C 16 1, 12 1, 10 3 Z" fill="url(#hairDark)" />

            {/* Head & Face */}
            <circle cx="15" cy="16" r="9.5" fill="#fed7aa" stroke="#ea580c" strokeWidth="0.5" />

            {/* Side Hair Lock */}
            <path d="M 6 12 C 6 8, 12 5, 18 6 C 21 8, 23 12, 23 15 C 19 14, 15 12, 10 13 Z" fill="url(#hairDark)" />

            {/* Eyes & Smile */}
            <circle cx="18" cy="16" r="1.2" fill="#0f172a" />
            <path d="M 16 20 Q 18 22 20 20" fill="none" stroke="#9a3412" strokeWidth="1" strokeLinecap="round" />

            {/* Suit Jacket Body */}
            <path d="M 4 28 L 26 28 L 29 70 L 1 70 Z" fill="#1e3a8a" stroke="#1d4ed8" strokeWidth="0.5" />

            {/* White Shirt Collar & Red Tie */}
            <polygon points="12,28 18,28 15,44" fill="#ffffff" />
            <polygon points="14,30 16,30 15,40" fill="#dc2626" />

            {/* Trousers */}
            <rect x="5" y="70" width="9" height="30" fill="#0f172a" />
            <rect x="16" y="70" width="9" height="30" fill="#0f172a" />

            {/* Extended Arm for Handshake */}
            <path d="M 22 34 L 42 42" stroke="#1e3a8a" strokeWidth="6" strokeLinecap="round" />
            {/* Hand for Handshake */}
            <circle cx="44" cy="43" r="3.5" fill="#fed7aa" />

            {/* Left Arm holding Briefcase (Duỗi xuống dưới) */}
            <path d="M 4 34 L -1 54" stroke="#1e3a8a" strokeWidth="5" strokeLinecap="round" />
            {/* Hand holding handle */}
            <circle cx="-1" cy="56" r="3" fill="#fed7aa" />

            {/* Leather Briefcase (Shifted down) */}
            <g transform="translate(-7, 56)">
              {/* Handle */}
              <path d="M 4 0 C 4 -4, 8 -4, 8 0" fill="none" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
              {/* Bag Body */}
              <rect x="0" y="0" width="13" height="18" rx="2" fill="#78350f" stroke="#451a03" strokeWidth="1" />
              {/* Gold Buckle */}
              <rect x="5" y="6" width="3" height="4" fill="#fde047" rx="0.5" />
            </g>
          </g>

          {/* Businessperson 2 (Right - Dark Suit, brown hair) */}
          <g transform="translate(62, 10)">
            {/* Styled Brown Hair */}
            <path d="M 5 3 C 2 6, 2 12, 5 16 C 8 18, 12 17, 15 17 C 18 17, 22 18, 25 15 C 27 10, 26 4, 21 2 C 16 0, 10 1, 5 3 Z" fill="url(#hairBrown)" />

            {/* Head & Face */}
            <circle cx="15" cy="16" r="9.5" fill="#fbcfe8" stroke="#be185d" strokeWidth="0.5" />

            {/* Front Hair Bangs */}
            <path d="M 5 11 C 9 7, 16 6, 22 9 C 24 13, 23 16, 19 15 C 14 14, 9 13, 5 11 Z" fill="url(#hairBrown)" />

            {/* Eyes & Smile */}
            <circle cx="11" cy="16" r="1.2" fill="#0f172a" />
            <path d="M 10 20 Q 12 22 14 20" fill="none" stroke="#be185d" strokeWidth="1" strokeLinecap="round" />

            {/* Suit Jacket Body */}
            <path d="M 4 28 L 26 28 L 29 70 L 1 70 Z" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />

            {/* White Shirt & Blue Tie */}
            <polygon points="12,28 18,28 15,44" fill="#ffffff" />
            <polygon points="14,30 16,30 15,40" fill="#0284c7" />

            {/* Trousers */}
            <rect x="5" y="70" width="9" height="30" fill="#1e293b" />
            <rect x="16" y="70" width="9" height="30" fill="#1e293b" />

            {/* Extended Arm for Handshake */}
            <path d="M 8 34 L -12 42" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />
            {/* Hand for Handshake */}
            <circle cx="-14" cy="43" r="3.5" fill="#fbcfe8" />

            {/* Right Arm holding Briefcase (Duỗi xuống dưới bên phải) */}
            <path d="M 26 34 L 31 54" stroke="#0f172a" strokeWidth="5" strokeLinecap="round" />
            {/* Hand holding handle */}
            <circle cx="31" cy="56" r="3" fill="#fbcfe8" />

            {/* Leather Briefcase (Shifted down) */}
            <g transform="translate(25, 56)">
              {/* Handle */}
              <path d="M 4 0 C 4 -4, 8 -4, 8 0" fill="none" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
              {/* Bag Body */}
              <rect x="0" y="0" width="13" height="18" rx="2" fill="#451a03" stroke="#180e04" strokeWidth="1" />
              {/* Gold Buckle */}
              <rect x="5" y="6" width="3" height="4" fill="#fde047" rx="0.5" />
            </g>
          </g>


        </g>
      </svg>
    </div>
  );
};
