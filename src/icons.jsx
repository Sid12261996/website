// Custom thematic SVG motifs. Kept simple — no faces, no complex illustration.

const Auto = ({size=120, color="#1F1410", accent="#F4C95D", ...rest}) => (
  <svg viewBox="0 0 200 130" width={size} height={size*130/200} {...rest}>
    {/* canopy */}
    <path d="M30,55 Q40,15 100,15 Q160,15 170,55 L170,80 L30,80 Z" fill={accent} stroke={color} strokeWidth="3"/>
    <rect x="35" y="55" width="130" height="6" fill={color}/>
    {/* body */}
    <rect x="40" y="60" width="120" height="35" rx="6" fill="#F2C9CF" stroke={color} strokeWidth="3"/>
    {/* windshield */}
    <path d="M55,55 L70,30 L130,30 L145,55 Z" fill="#cfe9f0" stroke={color} strokeWidth="2.5"/>
    <line x1="100" y1="30" x2="100" y2="55" stroke={color} strokeWidth="2"/>
    {/* door split */}
    <line x1="100" y1="60" x2="100" y2="95" stroke={color} strokeWidth="2"/>
    {/* light */}
    <circle cx="160" cy="72" r="4" fill="#fff" stroke={color} strokeWidth="2"/>
    {/* wheels */}
    <circle cx="60" cy="100" r="14" fill={color}/>
    <circle cx="60" cy="100" r="6" fill="#ddd"/>
    <circle cx="140" cy="100" r="14" fill={color}/>
    <circle cx="140" cy="100" r="6" fill="#ddd"/>
    {/* exhaust puff */}
    <circle cx="22" cy="85" r="5" fill="#fff" opacity=".7"/>
    <circle cx="14" cy="78" r="4" fill="#fff" opacity=".5"/>
    <circle cx="8" cy="88" r="3" fill="#fff" opacity=".4"/>
  </svg>
);

const Waffle = ({size=120, drip=true, ...rest}) => (
  <svg viewBox="0 0 120 120" width={size} height={size} {...rest}>
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect width="20" height="20" fill="#F4C95D"/>
        <rect width="20" height="2" y="0" fill="#5C3A1E" opacity=".5"/>
        <rect width="2" height="20" x="0" fill="#5C3A1E" opacity=".5"/>
      </pattern>
    </defs>
    <rect x="14" y="14" width="92" height="80" rx="10" fill="url(#grid)" stroke="#1F1410" strokeWidth="3"/>
    {drip && (
      <path d="M14,50 Q20,80 26,68 Q32,90 40,72 Q50,100 60,78 Q70,98 82,75 Q92,90 100,70 Q108,84 106,52 L106,30 L14,30 Z" fill="#5C3A1E" stroke="#1F1410" strokeWidth="2.5"/>
    )}
    <circle cx="40" cy="22" r="3" fill="#fff" opacity=".6"/>
    <circle cx="76" cy="40" r="2" fill="#fff" opacity=".5"/>
  </svg>
);

const Handbag = ({size=110, color="#E5447A", ...rest}) => (
  <svg viewBox="0 0 120 120" width={size} height={size} {...rest}>
    <path d="M40,40 Q40,18 60,18 Q80,18 80,40" fill="none" stroke="#1F1410" strokeWidth="3"/>
    <rect x="22" y="40" width="76" height="64" rx="10" fill={color} stroke="#1F1410" strokeWidth="3"/>
    <rect x="22" y="50" width="76" height="3" fill="#1F1410" opacity=".25"/>
    <rect x="55" y="62" width="10" height="14" rx="2" fill="#F4C95D" stroke="#1F1410" strokeWidth="2"/>
  </svg>
);

const Murukku = ({size=110, ...rest}) => (
  <svg viewBox="0 0 120 120" width={size} height={size} {...rest}>
    <g fill="none" stroke="#7A4A22" strokeWidth="6" strokeLinecap="round">
      <circle cx="60" cy="60" r="42"/>
      <circle cx="60" cy="60" r="30"/>
      <circle cx="60" cy="60" r="18"/>
      <path d="M60,18 L60,102 M18,60 L102,60 M30,30 L90,90 M90,30 L30,90"/>
    </g>
    <g fill="#E5447A">
      <circle cx="60" cy="14" r="3"/>
      <circle cx="60" cy="106" r="3"/>
      <circle cx="14" cy="60" r="3"/>
      <circle cx="106" cy="60" r="3"/>
    </g>
  </svg>
);

const Dress = ({size=110, color="#FF6FA1", ...rest}) => (
  <svg viewBox="0 0 120 120" width={size} height={size} {...rest}>
    <path d="M48,18 L72,18 L78,38 L98,108 L22,108 L42,38 Z" fill={color} stroke="#1F1410" strokeWidth="3"/>
    <path d="M48,18 Q60,28 72,18" fill="none" stroke="#1F1410" strokeWidth="3"/>
    <path d="M42,38 Q60,52 78,38" fill="none" stroke="#1F1410" strokeWidth="2" opacity=".5"/>
    <circle cx="60" cy="62" r="3" fill="#1F1410"/>
    <circle cx="60" cy="76" r="3" fill="#1F1410"/>
  </svg>
);

const Heart = ({size=24, color="#E5447A", ...rest}) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...rest}>
    <path d="M12,21 C12,21 3,14 3,8.5 C3,5.4 5.4,3 8.5,3 C10.3,3 11.7,4 12,5 C12.3,4 13.7,3 15.5,3 C18.6,3 21,5.4 21,8.5 C21,14 12,21 12,21 Z" fill={color} stroke="#1F1410" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const Sparkle = ({size=18, color="#F4C95D", ...rest}) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...rest}>
    <path d="M12,2 L13.5,10.5 L22,12 L13.5,13.5 L12,22 L10.5,13.5 L2,12 L10.5,10.5 Z" fill={color} stroke="#1F1410" strokeWidth="1"/>
  </svg>
);

const Cake = ({size=120, ...rest}) => (
  <svg viewBox="0 0 120 120" width={size} height={size} {...rest}>
    <rect x="20" y="60" width="80" height="38" rx="4" fill="#FCE7E0" stroke="#1F1410" strokeWidth="3"/>
    <path d="M20,72 Q30,82 40,72 Q50,82 60,72 Q70,82 80,72 Q90,82 100,72" fill="none" stroke="#E5447A" strokeWidth="3"/>
    <rect x="56" y="38" width="8" height="22" fill="#F4C95D" stroke="#1F1410" strokeWidth="2"/>
    <path d="M60,30 Q57,34 60,38 Q63,34 60,30 Z" fill="#E5447A"/>
  </svg>
);

export { Auto, Waffle, Handbag, Murukku, Dress, Heart, Sparkle, Cake };
