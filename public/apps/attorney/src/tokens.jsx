// Design tokens + global helpers
const T = {
  blue: '#4F9ED6', blueDeep: '#2B7AB8', blueSky: '#7BB8E2', blueIce: '#E8F2FA',
  green: '#34B87C', greenDeep: '#2CA26E', mint: '#D4F0E3',
  violet: '#8B5CF6', violetIce: '#F1ECFE',
  amber: '#E5A318', amberBg: '#FEF5E0',
  danger: '#D94F4F', dangerBg: '#FDE8E8',
  charcoal: '#1A2332', slate: '#4A5568', gray: '#8896A6', grayLight: '#B3BDC9',
  warmWhite: '#FAFBFD', cloud: '#F2F5F8', mist: '#DFE4EA', border: '#DFE4EA',
  // Source stripe palette (the MOAT visual vocabulary)
  src: {
    consumer: { bar: '#34B87C', bg: '#D4F0E3', fg: '#1F7A4E', label: 'Consumer app' },
    employer: { bar: '#4F9ED6', bg: '#E8F2FA', fg: '#1E5C8F', label: 'Employer Dashboard' },
    dso:      { bar: '#8B5CF6', bg: '#F1ECFE', fg: '#5B2FB8', label: 'DSO Portal' },
    attorney: { bar: '#1A2332', bg: '#ECEEF2', fg: '#1A2332', label: 'Attorney' },
    uscis:    { bar: '#E5A318', bg: '#FEF5E0', fg: '#8A6200', label: 'USCIS' },
  },
  shadow: {
    xs: '0 1px 2px rgba(26,35,50,0.04)',
    sm: '0 2px 8px rgba(26,35,50,0.06), 0 1px 2px rgba(26,35,50,0.04)',
    md: '0 8px 24px rgba(26,35,50,0.08), 0 2px 6px rgba(26,35,50,0.05)',
    lg: '0 24px 48px rgba(26,35,50,0.10), 0 6px 12px rgba(26,35,50,0.06)',
    xl: '0 40px 80px rgba(26,35,50,0.14)',
  },
};

// Accent swap helper — tweak changes which hue carries "primary" moments
function accentColor(accent) {
  if (accent === 'green') return { primary: T.green, primaryDeep: T.greenDeep, primaryIce: T.mint };
  if (accent === 'violet') return { primary: T.violet, primaryDeep: '#6D3AD1', primaryIce: T.violetIce };
  return { primary: T.blue, primaryDeep: T.blueDeep, primaryIce: T.blueIce };
}

// Source stripe — THE repeating moat motif
function SourceStripe({ src, children, pad = true, style }) {
  const s = T.src[src];
  return (
    <div style={{
      borderLeft: `3px solid ${s.bar}`,
      paddingLeft: pad ? 12 : 0,
      ...style,
    }}>{children}</div>
  );
}

function SourceChip({ src, small, style }) {
  const s = T.src[src];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontSize: small ? 10 : 11, fontWeight: 600,
      color: s.fg, background: s.bg,
      padding: small ? '2px 7px' : '3px 9px',
      borderRadius: 999, lineHeight: 1.4,
      ...style,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: 2, background: s.bar }} />
      {s.label}
    </span>
  );
}

function Pill({ tone = 'gray', children, small, style }) {
  const palette = {
    blue:   { bg: T.blueIce, fg: T.blueDeep },
    green:  { bg: T.mint, fg: '#1F7A4E' },
    amber:  { bg: T.amberBg, fg: '#8A6200' },
    red:    { bg: T.dangerBg, fg: '#A02A2A' },
    violet: { bg: T.violetIce, fg: '#5B2FB8' },
    gray:   { bg: T.cloud, fg: T.slate },
  }[tone] || { bg: T.cloud, fg: T.slate };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontSize: small ? 10 : 11, fontWeight: 600,
      color: palette.fg, background: palette.bg,
      padding: small ? '2px 8px' : '3px 10px',
      borderRadius: 999, lineHeight: 1.4,
      ...style,
    }}>{children}</span>
  );
}

function Avatar({ name, color, size = 28 }) {
  const initials = name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase();
  return (
    <span style={{
      width: size, height: size, borderRadius: 999,
      background: color, color: '#fff',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.4, fontWeight: 600, letterSpacing: '-0.01em',
    }}>{initials}</span>
  );
}

// Little icon set (outline, 1.5 stroke) — we do NOT load lucide
const Ico = {
  inbox:  <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13l3-8h12l3 8v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6z"/><path d="M3 13h5l1 2h6l1-2h5"/></g>,
  file:   <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></g>,
  shield: <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6z"/></g>,
  check:  <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6"/></g>,
  x:      <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6L6 18"/></g>,
  arrow:  <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></g>,
  clock:  <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g>,
  users:  <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 21a7 7 0 0 1 14 0M16 3a4 4 0 0 1 0 8M22 21a7 7 0 0 0-5-6.7"/></g>,
  cap:    <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L2 8l10 5 10-5-10-5z"/><path d="M6 10v6a6 3 0 0 0 12 0v-6"/></g>,
  build:  <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V7l9-4 9 4v14"/><path d="M9 21v-8h6v8M3 21h18"/></g>,
  phone:  <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M10 18h4"/></g>,
  dash:   <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></g>,
  kanban: <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="6" height="14" rx="1.5"/><rect x="11" y="3" width="6" height="10" rx="1.5"/><rect x="19" y="3" width="2" height="6" rx="1"/></g>,
  scale:  <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M6 21h12M6 8l-3 6a3 3 0 0 0 6 0l-3-6zM18 8l-3 6a3 3 0 0 0 6 0l-3-6z"/></g>,
  lock:   <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></g>,
  bolt:   <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></g>,
  list:   <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></g>,
};

function Icon({ name, size = 20, color = 'currentColor', style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ color, flexShrink: 0, ...style }}>
      {Ico[name]}
    </svg>
  );
}

Object.assign(window, { T, accentColor, SourceStripe, SourceChip, Pill, Avatar, Icon, Ico });
