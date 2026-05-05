// components.jsx — ImmiHub OS umbrella marketing site components
import React from 'react';


const IM = {
  blue: '#4F9ED6', blueDeep: '#2B7AB8', sky: '#7BB8E2', ice: '#E8F2FA',
  green: '#34B87C', mint: '#D4F0E3',
  charcoal: '#1A2332', slate: '#4A5568', gray: '#8896A6',
  warmWhite: '#FAFBFD', cloud: '#F2F5F8', mist: '#DFE4EA',
  warnFg: '#E5A318', warnBg: '#FEF5E0',
  dangerFg: '#D94F4F', dangerBg: '#FDE8E8',
};

const AUDIENCES = [
  {
    id: 'immigrant',
    navLabel: 'Immigrant',
    cardTitle: 'ImmiHub for Immigrants',
    tag: 'Consumer app',
    url: 'apps/immigrant/index.html',
    desc: 'Secure document vault, deadline tracking and reminders for visa holders and their families.',
    for: 'For H-1B, F-1, OPT & GC applicants',
    bullets: ['Encrypted document vault', '90 / 60 / 30-day renewal reminders', 'Family profiles & dependents'],
    accent: IM.blue,
  },
  {
    id: 'employer',
    navLabel: 'Employer',
    cardTitle: 'ImmiHub for Employers',
    tag: 'HR & compliance',
    url: 'apps/employer/index.html',
    desc: 'Compliance, sponsorship tracking and HR tooling for teams hiring on H-1B and other work visas.',
    for: 'For HR & global mobility teams',
    bullets: ['Sponsorship pipeline', 'LCA & I-9 audit trail', 'Public access file, ready to print'],
    accent: '#7A6BE8',
  },
  {
    id: 'university',
    navLabel: 'University (DSO)',
    cardTitle: 'ImmiHub for Institutions',
    tag: 'DSO portal',
    url: 'apps/dso/index.html',
    desc: 'F-1 and J-1 compliance for international-student offices at universities and colleges.',
    for: 'For international student offices',
    bullets: ['SEVIS roster & batch actions', 'CPT / OPT approvals', 'Travel signature queue'],
    accent: '#E8843C',
  },
  {
    id: 'attorney',
    navLabel: 'Attorney',
    cardTitle: 'ImmiHub for Attorneys',
    tag: 'Case management',
    url: 'apps/attorney/index.html',
    desc: 'Cases that arrive pre-organized — client intake, evidence binders and filing prep, built in.',
    for: 'For immigration attorneys & firms',
    bullets: ['Pre-organized client binders', 'Questionnaires auto-populate forms', 'Filing-ready evidence packets'],
    accent: '#2B7AB8',
  },
];

// ---------- Nav ----------

function AudienceDropdown({ open, setOpen }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    function onDoc(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [setOpen]);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: open ? IM.ice : 'transparent',
          color: IM.charcoal,
          border: `1px solid ${open ? IM.blue : IM.mist}`,
          padding: '9px 14px 9px 16px', borderRadius: 999,
          fontSize: 14, fontWeight: 500, cursor: 'pointer',
          fontFamily: 'inherit',
          transition: 'all 200ms cubic-bezier(0.2,0.8,0.2,1)',
        }}
      >
        <span style={{ color: IM.slate, fontWeight: 400 }}>I'm a</span>
        <span>…</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', right: 0,
          width: 320, background: '#fff',
          border: `1px solid ${IM.mist}`, borderRadius: 14,
          boxShadow: '0 12px 32px rgba(26,35,50,0.10), 0 4px 8px rgba(26,35,50,0.04)',
          padding: 8, zIndex: 50,
          animation: 'im-fade-in 200ms cubic-bezier(0.2,0.8,0.2,1)',
        }}>
          <div style={{
            fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em',
            color: IM.gray, padding: '8px 12px 6px',
          }}>Choose your surface</div>
          {AUDIENCES.map(a => (
            <a
              key={a.id} href={a.url}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 12px', borderRadius: 10,
                textDecoration: 'none', color: IM.charcoal,
              }}
              onMouseEnter={e => e.currentTarget.style.background = IM.ice}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 9,
                background: a.accent + '18',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <AudienceGlyph id={a.id} color={a.accent} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: IM.charcoal }}>{a.navLabel}</div>
                <div style={{ fontSize: 12, color: IM.gray, marginTop: 1 }}>{a.tag}</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={IM.gray} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" /><polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function AudienceGlyph({ id, color }) {
  const base = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (id === 'immigrant') return (<svg {...base}><circle cx="12" cy="8" r="3.5" /><path d="M4.5 20a7.5 7.5 0 0 1 15 0" /></svg>);
  if (id === 'employer') return (<svg {...base}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 13h18" /></svg>);
  if (id === 'university') return (<svg {...base}><path d="M12 3l10 5-10 5L2 8l10-5z" /><path d="M6 10v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /></svg>);
  if (id === 'attorney') return (<svg {...base}><path d="M12 3v18" /><path d="M4 7h16" /><path d="M7 7l-3 7a3 3 0 0 0 6 0l-3-7z" /><path d="M17 7l-3 7a3 3 0 0 0 6 0l-3-7z" /></svg>);
  return null;
}

function Nav() {
  const [open, setOpen] = React.useState(false);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: 'rgba(250,251,253,0.82)',
      backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
      borderBottom: `1px solid ${IM.mist}`,
    }}>
      <div className="im-nav-inner">
        <a href="#top" style={{ display: 'inline-flex', alignItems: 'baseline', gap: 8, textDecoration: 'none' }}>
          <img src="assets/logo-immihub.png" alt="ImmiHub" style={{ height: 26, width: 'auto', display: 'block', alignSelf: 'center' }} />
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            alignSelf: 'center',
            height: 18, padding: '0 7px', boxSizing: 'border-box',
            fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
            lineHeight: 1,
            color: IM.blueDeep, background: IM.ice, borderRadius: 5,
            border: `1px solid ${IM.blue}40`,
            transform: 'translateY(3px)',
          }}>OS</span>
        </a>
        <nav className="im-nav-links">
          {[
            { l: 'Platform', href: '#platform' },
            { l: 'Products', href: '#products' },
            { l: 'Why an OS', href: '#why-os' },
            { l: 'Investors', href: '#investors' },
          ].map(n => (
            <a key={n.l} href={n.href} style={{
              fontSize: 14, color: IM.slate, textDecoration: 'none', fontWeight: 500,
            }}>{n.l}</a>
          ))}
        </nav>
        <a href="#investors" className="im-nav-investor">Investor deck</a>
        <AudienceDropdown open={open} setOpen={setOpen} />
      </div>
    </header>
  );
}

// ---------- Hero ----------

function Hero() {
  return (
    <section id="top" className="im-hero-pad" style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div className="im-hero-grid">
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: IM.ice, color: IM.blueDeep,
            padding: '6px 12px', borderRadius: 999,
            fontSize: 12, fontWeight: 500,
            border: `1px solid ${IM.blue}33`,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: IM.blue }} />
            Introducing ImmiHub OS · Seed round open
          </div>
          <h1 className="im-hero-h1">
            The operating system for&nbsp;
            <span style={{
              background: 'linear-gradient(135deg, #4F9ED6 0%, #34B87C 100%)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            }}>US immigration.</span>
          </h1>
          <p style={{ fontSize: 19, color: IM.slate, lineHeight: 1.55, maxWidth: 540, margin: 0 }}>
            One platform. Four tailored surfaces. A shared identity and document layer for every person,
            employer, university and attorney in the immigration journey.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <a href="#products" style={{
              background: IM.green, color: '#fff', border: 'none',
              padding: '14px 22px', borderRadius: 10, fontSize: 15, fontWeight: 500,
              cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>See the four surfaces
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#investors" style={{
              background: '#fff', color: IM.blueDeep, border: `1px solid ${IM.mist}`,
              padding: '14px 22px', borderRadius: 10, fontSize: 15, fontWeight: 500,
              cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'none',
            }}>Request investor deck →</a>
          </div>
          <div style={{ display: 'flex', gap: 24, marginTop: 36, fontSize: 13, color: IM.gray, flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Dot c={IM.green} /> Built by immigrants, for immigrants
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Dot c={IM.blue} /> AES-256 encryption
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Dot c={IM.blue} /> Privacy first - we never sell your data
            </span>
          </div>
        </div>
        <HeroShot />
      </div>
    </section>
  );
}

function Dot({ c }) {
  return <span style={{ width: 6, height: 6, borderRadius: 999, background: c }} />;
}

// Hero visual: four surfaces stacked + connecting lines
function HeroShot() {
  return (
    <div className="im-hero-shot">
      <div data-hero-bg style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 45%, rgba(79,158,214,0.12), transparent 60%)',
      }} />
      {/* central hub */}
      <div data-hero-hub style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%,-50%)',
        width: 132, height: 132, borderRadius: 26,
        background: 'linear-gradient(135deg, #4F9ED6 0%, #34B87C 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        color: '#fff', boxShadow: '0 24px 56px rgba(79,158,214,0.35)',
        zIndex: 5,
      }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.9 }}>Shared layer</div>
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', marginTop: 6 }}>ImmiHub</div>
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}>OS</div>
      </div>

      {/* connecting lines SVG */}
      <svg viewBox="0 0 500 540" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        zIndex: 2, pointerEvents: 'none',
      }}>
        <defs>
          <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={IM.blue} stopOpacity="0.5" />
            <stop offset="100%" stopColor={IM.green} stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {/* diagonal lines from each corner card to center */}
        <line x1="85" y1="80" x2="250" y2="270" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="415" y1="80" x2="250" y2="270" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="85" y1="460" x2="250" y2="270" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="415" y1="460" x2="250" y2="270" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 4" />
      </svg>

      {/* four corner cards */}
      <SurfaceCorner pos="tl" aud={AUDIENCES[0]} />
      <SurfaceCorner pos="tr" aud={AUDIENCES[1]} />
      <SurfaceCorner pos="bl" aud={AUDIENCES[2]} />
      <SurfaceCorner pos="br" aud={AUDIENCES[3]} />
    </div>
  );
}

function SurfaceCorner({ pos, aud }) {
  return (
    <div className={`im-surface-corner ${pos}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: aud.accent + '18',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <AudienceGlyph id={aud.id} color={aud.accent} />
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: IM.gray }}>{aud.tag}</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: IM.charcoal, marginTop: 1 }}>{aud.navLabel}</div>
        </div>
      </div>
      <div style={{ marginTop: 10, display: 'flex', gap: 4 }}>
        <div style={{ flex: 1, height: 6, borderRadius: 3, background: IM.cloud }} />
        <div style={{ flex: 1, height: 6, borderRadius: 3, background: IM.cloud }} />
        <div style={{ width: 22, height: 6, borderRadius: 3, background: aud.accent + '60' }} />
      </div>
    </div>
  );
}

// ---------- Stats strip ----------

const VISA_CATEGORIES = [
  {
    id: 'work', label: 'Work', sub: 'Employment-based',
    stats: [
      { n: '780K+', l: 'H-1B holders', s: 'Active specialty occupation workers' },
      { n: '190K', l: 'L-1 transferees', s: 'Intra-company transfers' },
      { n: '110K', l: 'O-1 & EB-1A', s: 'Extraordinary ability' },
      { n: '85K', l: 'TN · E-3 · H-1B1', s: 'Treaty-based professionals' },
    ],
  },
  {
    id: 'student', label: 'Student & exchange', sub: 'F-1 · J-1 · M-1',
    stats: [
      { n: '1.1M', l: 'International students', s: 'F-1 enrolled, 2024–25' },
      { n: '340K', l: 'J-1 exchange visitors', s: 'Scholars, trainees, au pairs' },
      { n: '260K', l: 'OPT & STEM OPT', s: 'Post-completion work auth' },
      { n: '8,200', l: 'SEVP-certified schools', s: 'Authorized to enroll F/M' },
    ],
  },
  {
    id: 'family', label: 'Family', sub: 'IR · F · K · V',
    stats: [
      { n: '710K', l: 'Family-sponsored GCs', s: 'Issued per year, on average' },
      { n: '3.8M', l: 'Family backlog', s: 'Approved petitions awaiting visa' },
      { n: '45K', l: 'K-1 fiancé(e) visas', s: 'Issued annually' },
      { n: '220K', l: 'Spousal adjustments', s: 'I-485 filings per year' },
    ],
  },
  {
    id: 'gc', label: 'Green card', sub: 'Adjustment & consular',
    stats: [
      { n: '1.03M', l: 'LPRs added / year', s: 'New green cards issued' },
      { n: '9.6M', l: 'Total LPR population', s: 'Currently residing in US' },
      { n: '1.8M', l: 'Employment-based backlog', s: 'Indian & Chinese beneficiaries' },
      { n: '140K', l: 'EB-5 investors & family', s: 'Regional center program' },
    ],
  },
  {
    id: 'humanitarian', label: 'Humanitarian', sub: 'Asylum · TPS · U · T',
    stats: [
      { n: '1.1M', l: 'Asylum backlog', s: 'Pending affirmative cases' },
      { n: '860K', l: 'TPS beneficiaries', s: 'From 17 designated countries' },
      { n: '300K', l: 'U-visa waitlist', s: 'Victims of crime, capped at 10K/yr' },
      { n: '125K', l: 'Refugee admissions', s: 'FY2024 ceiling' },
    ],
  },
];

function StatsStrip() {
  const [cat, setCat] = React.useState('work');
  const active = VISA_CATEGORIES.find(c => c.id === cat);
  const totalTam = '6.8M+';

  return (
    <section style={{ padding: '48px 32px 56px', background: IM.cloud, borderTop: `1px solid ${IM.mist}`, borderBottom: `1px solid ${IM.mist}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 20 }}>
          <div>
            <div style={{
              fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em',
              color: IM.blueDeep,
            }}>The market, in one glance</div>
            <div style={{ fontSize: 22, fontWeight: 600, color: IM.charcoal, letterSpacing: '-0.01em', marginTop: 4 }}>
              Every visa category. One platform.
            </div>
          </div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#fff', border: `1px solid ${IM.mist}`,
            borderRadius: 999, padding: '6px 14px 6px 6px',
            fontSize: 12, color: IM.slate,
          }}>
            <span style={{
              background: IM.ice, color: IM.blueDeep,
              padding: '4px 10px', borderRadius: 999,
              fontWeight: 600, fontSize: 11, letterSpacing: '0.04em',
            }}>TAM</span>
            <span style={{ fontWeight: 600, color: IM.charcoal, fontVariantNumeric: 'tabular-nums' }}>{totalTam}</span>
            <span>people across all visa categories</span>
          </div>
        </div>

        <div className="im-grid-stats-4">
          {active.stats.map((s, i) => (
            <div key={`${cat}-${i}`} style={{ background: IM.warmWhite, padding: '24px 24px', animation: 'im-fade-in 280ms cubic-bezier(0.2,0.8,0.2,1)' }}>
              <div style={{
                fontSize: 36, fontWeight: 700, color: IM.charcoal,
                letterSpacing: '-0.025em', lineHeight: 1, fontVariantNumeric: 'tabular-nums',
              }}>{s.n}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: IM.charcoal, marginTop: 8 }}>{s.l}</div>
              <div style={{ fontSize: 12, color: IM.gray, marginTop: 3 }}>{s.s}</div>
            </div>
          ))}
        </div>

        {/* Toggle row */}
        <div style={{
          marginTop: 20,
          display: 'flex', flexWrap: 'wrap', gap: 8,
          background: '#fff', border: `1px solid ${IM.mist}`,
          borderRadius: 12, padding: 6,
        }}>
          {VISA_CATEGORIES.map(c => {
            const isActive = c.id === cat;
            return (
              <button key={c.id} onClick={() => setCat(c.id)}
                style={{
                  flex: '1 1 120px',
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2,
                  padding: '10px 14px',
                  background: isActive ? IM.ice : 'transparent',
                  border: `1px solid ${isActive ? IM.blue + '55' : 'transparent'}`,
                  borderRadius: 8, cursor: 'pointer',
                  fontFamily: 'inherit', textAlign: 'left',
                  transition: 'all 200ms cubic-bezier(0.2,0.8,0.2,1)',
                }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: isActive ? IM.blueDeep : IM.charcoal }}>{c.label}</span>
                <span style={{ fontSize: 11, color: IM.gray }}>{c.sub}</span>
              </button>
            );
          })}
        </div>

        <div style={{
          marginTop: 14, fontSize: 12, color: IM.gray, textAlign: 'center',
        }}>
          Sources: USCIS, DHS, DOS, SEVP annual reports & IIE Open Doors (2024).
        </div>
      </div>
    </section>
  );
}

// ---------- Market by audience — ranked leaderboards ----------

const AUDIENCE_MARKETS = {
  immigrant: {
    id: 'immigrant',
    label: 'Immigrants',
    accent: '#4F9ED6',
    eyebrow: 'Immigrants',
    title: 'Every visa holder, in every metro.',
    body: (
      <>Across work, study, family and humanitarian visas, roughly{' '}
      <strong style={{ color: '#1A2332' }}>46.2 million foreign-born residents</strong> live in the US today —
      including 24.5M on some form of active visa or LPR status. ImmiHub for Immigrants keeps each person's
      documents, deadlines and family profiles in one secure vault.</>
    ),
    stats: [
      { n: '46.2M', l: 'Foreign-born in US' },
      { n: '24.5M', l: 'Active visas / LPRs' },
      { n: '72%', l: 'Manage via spreadsheets' },
    ],
    cta: 'Open the consumer app',
    listTitle: 'Top US metros by immigrant population',
    listMeta: '2024 · ACS 5-year',
    columns: ['metro', 'state', 'count', 'share'],
    rows: [
      { metro: 'New York–Newark',    state: 'NY–NJ–PA', count: '5.80M', share: '29% of metro' },
      { metro: 'Los Angeles',        state: 'CA',       count: '4.55M', share: '34%' },
      { metro: 'Miami–Fort Lauderdale', state: 'FL',    count: '2.85M', share: '45%' },
      { metro: 'San Francisco Bay',  state: 'CA',       count: '2.10M', share: '30%' },
      { metro: 'Houston',            state: 'TX',       count: '1.72M', share: '24%' },
      { metro: 'Chicago',            state: 'IL',       count: '1.64M', share: '18%' },
      { metro: 'Washington DC',      state: 'DC–VA–MD', count: '1.48M', share: '23%' },
      { metro: 'Dallas–Fort Worth',  state: 'TX',       count: '1.40M', share: '18%' },
    ],
    tail: '+ 380 more metros and every rural county',
  },
  employer: {
    id: 'employer',
    label: 'Employers',
    accent: '#7A6BE8',
    eyebrow: 'Employers',
    title: 'Every US company that sponsors work visas.',
    body: (
      <>More than <strong style={{ color: '#1A2332' }}>53,000 employers</strong> filed at least one H-1B, L-1,
      O-1 or PERM in the last fiscal year — from Amazon and Google down to 10-person startups. ImmiHub for
      Employers is the compliance workbench for every HR, global-mobility and immigration-counsel team in this
      cohort.</>
    ),
    stats: [
      { n: '53K', l: 'Visa-sponsoring firms' },
      { n: '$9.1B', l: 'Annual legal spend' },
      { n: '780K', l: 'H-1B workforce' },
    ],
    cta: 'Explore the HR dashboard',
    listTitle: 'Top H-1B sponsors by approvals',
    listMeta: 'FY2024 · USCIS disclosure',
    columns: ['name', 'industry', 'count', 'sub'],
    rows: [
      { name: 'Amazon',        industry: 'Cloud · retail',       hq: 'Seattle, WA',     count: '9,265', sub: 'initial + renewals' },
      { name: 'Cognizant',     industry: 'IT services',          hq: 'Teaneck, NJ',     count: '6,321', sub: 'initial + renewals' },
      { name: 'Infosys',       industry: 'IT services',          hq: 'Bengaluru (US HQ Plano)', count: '5,917', sub: 'initial + renewals' },
      { name: 'Google',        industry: 'Software · AI',        hq: 'Mountain View, CA', count: '5,103', sub: 'initial + renewals' },
      { name: 'TCS',           industry: 'IT services',          hq: 'Mumbai (US HQ NYC)', count: '4,560', sub: 'initial + renewals' },
      { name: 'Meta',          industry: 'Social · AR/VR',       hq: 'Menlo Park, CA',  count: '4,405', sub: 'initial + renewals' },
      { name: 'Microsoft',     industry: 'Software · cloud',     hq: 'Redmond, WA',     count: '4,182', sub: 'initial + renewals' },
      { name: 'Apple',         industry: 'Devices · services',   hq: 'Cupertino, CA',   count: '3,840', sub: 'initial + renewals' },
    ],
    tail: '+ 52,000 more sponsoring firms across every industry',
  },
  institution: {
    id: 'institution',
    label: 'Institutions',
    accent: '#E8843C',
    eyebrow: 'Institutions',
    title: 'Every US school sponsoring international students.',
    body: (
      <>More than <strong style={{ color: '#1A2332' }}>8,200 SEVP-certified institutions</strong> enroll F-1
      and M-1 students today — from the Ivies to community colleges and language academies. ImmiHub for
      Institutions gives each DSO team one compliance workbench for SEVIS, travel signatures, CPT/OPT and
      status audits.</>
    ),
    stats: [
      { n: '8,200', l: 'SEVP schools' },
      { n: '1.1M', l: 'F-1 students' },
      { n: '$43.8B', l: 'Economic impact' },
    ],
    cta: 'Explore the DSO portal',
    listTitle: 'Top institutions by F-1 enrollment',
    listMeta: '2024–25 · SEVIS',
    columns: ['name', 'city', 'count', 'sub'],
    rows: [
      { name: 'New York University',            industry: 'Private research',   hq: 'New York, NY',        count: '27,200', sub: 'F-1 students' },
      { name: 'Northeastern University',        industry: 'Private research',   hq: 'Boston, MA',          count: '21,100', sub: 'F-1 students' },
      { name: 'Columbia University',            industry: 'Ivy · private',      hq: 'New York, NY',        count: '20,800', sub: 'F-1 students' },
      { name: 'University of Southern California', industry: 'Private research', hq: 'Los Angeles, CA',   count: '17,500', sub: 'F-1 students' },
      { name: 'Arizona State University',       industry: 'Public R1',          hq: 'Tempe, AZ',           count: '15,900', sub: 'F-1 students' },
      { name: 'Carnegie Mellon University',     industry: 'Private research',   hq: 'Pittsburgh, PA',      count: '12,400', sub: 'F-1 students' },
      { name: 'Purdue University',              industry: 'Public R1',          hq: 'West Lafayette, IN',  count: '11,100', sub: 'F-1 students' },
      { name: 'UC San Diego',                   industry: 'Public R1',          hq: 'San Diego, CA',       count: '10,800', sub: 'F-1 students' },
    ],
    tail: '+ 8,192 more SEVP-certified institutions nationwide',
  },
  attorney: {
    id: 'attorney',
    label: 'Attorneys',
    accent: '#2B7AB8',
    eyebrow: 'Attorneys',
    title: 'Every immigration law firm in practice.',
    body: (
      <>Roughly <strong style={{ color: '#1A2332' }}>15,400 immigration attorneys</strong> across 3,100
      practicing firms — from Fragomen and Berry Appleman at the top, to solo shops in every state. ImmiHub
      for Attorneys delivers pre-organized client binders, intake questionnaires and filing-ready evidence
      packets from the shared vault.</>
    ),
    stats: [
      { n: '15.4K', l: 'Immigration attorneys' },
      { n: '3.1K', l: 'Practicing firms' },
      { n: '1.2M', l: 'Cases filed / year' },
    ],
    cta: 'Explore the case workbench',
    listTitle: 'Top immigration firms by case volume',
    listMeta: '2024 · Law360 · AILA',
    columns: ['name', 'practice', 'count', 'sub'],
    rows: [
      { name: 'Fragomen Del Rey',           industry: 'Business immigration · global',     hq: 'New York, NY',    count: '620+', sub: 'attorneys · 63 offices' },
      { name: 'Berry Appleman & Leiden',    industry: 'Corporate · mobility',              hq: 'Dallas, TX',      count: '210+', sub: 'attorneys · 28 offices' },
      { name: 'Ogletree Deakins',           industry: 'Labor & employment',                hq: 'Atlanta, GA',     count: '180+', sub: 'immigration-focused' },
      { name: 'Jackson Lewis',              industry: 'Labor · immigration',               hq: 'White Plains, NY', count: '130+', sub: 'immigration-focused' },
      { name: 'Envoy Global (Corporate)',   industry: 'Tech-enabled corporate',            hq: 'Chicago, IL',     count: '120+', sub: 'attorneys' },
      { name: 'Seyfarth Shaw',              industry: 'Full-service · immigration',        hq: 'Chicago, IL',     count: '95+',  sub: 'immigration-focused' },
      { name: 'Klasko Immigration Law',     industry: 'EB-5 · business immigration',       hq: 'Philadelphia, PA', count: '85+', sub: 'attorneys' },
      { name: 'Erickson Immigration Group', industry: 'Corporate · family',                hq: 'Arlington, VA',   count: '70+',  sub: 'attorneys' },
    ],
    tail: '+ 3,090 more immigration firms across all 50 states',
  },
};

const AUDIENCE_MARKET_ORDER = ['immigrant', 'employer', 'institution', 'attorney'];

function MarketByAudience() {
  const [activeId, setActiveId] = React.useState('immigrant');
  const active = AUDIENCE_MARKETS[activeId];
  const AUDIENCE_BY_MARKET = { immigrant: 0, employer: 1, institution: 2, attorney: 3 };
  const visitUrl = AUDIENCES[AUDIENCE_BY_MARKET[activeId]].url;

  return (
    <section id="institutions" className="im-section-pad" style={{ background: '#fff', borderTop: `1px solid ${IM.mist}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header + tab switcher */}
        <div className="im-market-header">
          <div style={{ maxWidth: 620 }}>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: IM.blueDeep }}>Market by audience</div>
            <h2 className="im-section-h2-sm">
              A named, ranked market for each of the four surfaces.
            </h2>
          </div>

          <div style={{
            display: 'inline-flex', gap: 4,
            background: IM.cloud, border: `1px solid ${IM.mist}`,
            borderRadius: 12, padding: 4,
          }}>
            {AUDIENCE_MARKET_ORDER.map(id => {
              const m = AUDIENCE_MARKETS[id];
              const isActive = id === activeId;
              return (
                <button key={id} onClick={() => setActiveId(id)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '9px 14px', borderRadius: 8,
                    border: 'none', cursor: 'pointer',
                    background: isActive ? '#fff' : 'transparent',
                    boxShadow: isActive ? '0 1px 3px rgba(26,35,50,0.08)' : 'none',
                    fontFamily: 'inherit', fontSize: 13, fontWeight: 500,
                    color: isActive ? IM.charcoal : IM.slate,
                    transition: 'all 200ms cubic-bezier(0.2,0.8,0.2,1)',
                  }}>
                  <span style={{
                    width: 8, height: 8, borderRadius: 999,
                    background: isActive ? m.accent : IM.mist,
                  }} />
                  {m.label}
                </button>
              );
            })}
          </div>
        </div>

        <div key={activeId} className="im-market-grid">
          {/* Left: intro + stats + CTA */}
          <div className="im-market-sticky">
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: active.accent }}>{active.eyebrow}</div>
            <h3 className="im-section-h2-sm" style={{ fontSize: 32, margin: '12px 0 16px' }}>
              {active.title}
            </h3>
            <p style={{ fontSize: 15, color: IM.slate, lineHeight: 1.65, margin: 0 }}>
              {active.body}
            </p>
            <div className="im-grid-stats-3">
              {active.stats.map((s, i) => (
                <div key={i} style={{ background: '#fff', padding: '16px 18px' }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: IM.charcoal, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: IM.gray, marginTop: 3 }}>{s.l}</div>
                </div>
              ))}
            </div>
            <a href={visitUrl} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              marginTop: 24,
              background: active.accent, color: '#fff',
              padding: '12px 18px', borderRadius: 10,
              fontSize: 14, fontWeight: 500, textDecoration: 'none',
            }}>
              {active.cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><polyline points="7 7 17 7 17 17" /></svg>
            </a>
          </div>

          {/* Right: ranked list */}
          <div>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 18px',
              background: IM.warmWhite, border: `1px solid ${IM.mist}`,
              borderRadius: '12px 12px 0 0', borderBottom: 'none',
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: IM.gray }}>{active.listTitle}</div>
              <div style={{ fontSize: 11, color: IM.gray }}>{active.listMeta}</div>
            </div>
            <div style={{
              border: `1px solid ${IM.mist}`, borderRadius: '0 0 12px 12px',
              overflow: 'hidden', background: '#fff',
            }}>
              {active.rows.map((r, i) => (
                <MarketRow key={`${activeId}-${i}`} rank={i + 1} row={r} audienceKey={activeId} accent={active.accent} />
              ))}
              <div style={{
                padding: '14px 18px',
                background: IM.warmWhite, borderTop: `1px solid ${IM.mist}`,
                fontSize: 12, color: IM.gray, textAlign: 'center',
              }}>
                {active.tail}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarketRow({ rank, row, audienceKey, accent }) {
  // Determine primary + secondary text based on audience
  let primary, secondary;
  if (audienceKey === 'immigrant') { primary = row.metro; secondary = row.state; }
  else { primary = row.name; secondary = row.industry || row.hq; }
  const tertiary = row.hq && audienceKey !== 'immigrant' ? row.hq : null;

  return (
    <div className="im-market-row" style={{ borderTop: rank === 1 ? 'none' : `1px solid ${IM.mist}` }}>
      <div style={{
        width: 28, height: 28, borderRadius: 7,
        background: rank <= 3 ? accent + '1A' : IM.cloud,
        color: rank <= 3 ? accent : IM.slate,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, fontWeight: 600, fontVariantNumeric: 'tabular-nums',
      }}>{rank}</div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: IM.charcoal }}>{primary}</div>
        <div style={{ fontSize: 12, color: IM.gray, marginTop: 1 }}>
          {secondary}{tertiary ? <span style={{ color: IM.mist, margin: '0 6px' }}>·</span> : null}
          {tertiary && <span>{tertiary}</span>}
        </div>
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: IM.charcoal, fontVariantNumeric: 'tabular-nums' }}>
          {row.count || row.share}
        </div>
        <div style={{ fontSize: 11, color: IM.gray, marginTop: 1 }}>
          {row.sub || row.share || ''}
        </div>
      </div>
      <div style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 28, height: 28, borderRadius: 999,
        background: IM.cloud, color: IM.slate,
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </div>
    </div>
  );
}

// ---------- Product cards ----------

function ProductCards() {
  const [hover, setHover] = React.useState(null);
  return (
    <section id="products" className="im-section-pad" style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ maxWidth: 720, marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: IM.blueDeep }}>One platform · Four surfaces</div>
        <h2 className="im-section-h2">
          A dedicated surface for everyone in the journey.
        </h2>
        <p style={{ fontSize: 17, color: IM.slate, lineHeight: 1.55, margin: 0 }}>
          Each product is purpose-built for its audience — but they all sit on one shared identity and
          document layer. When an immigrant updates their I-797, their employer, DSO and attorney see it too.
        </p>
      </div>

      <div className="im-grid-2">
        {AUDIENCES.map((a, i) => {
          const isHover = hover === i;
          return (
            <a
              key={a.id} href={a.url}
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
              style={{
                background: '#fff', border: `1px solid ${IM.mist}`,
                borderRadius: 16, padding: 28,
                textDecoration: 'none', color: 'inherit',
                display: 'flex', flexDirection: 'column',
                boxShadow: isHover
                  ? '0 12px 32px rgba(26,35,50,0.08), 0 4px 8px rgba(26,35,50,0.04)'
                  : '0 1px 3px rgba(26,35,50,0.06), 0 1px 2px rgba(26,35,50,0.04)',
                transition: 'all 200ms cubic-bezier(0.2,0.8,0.2,1)',
                transform: isHover ? 'translateY(-2px)' : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 18 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 11,
                  background: a.accent + '18',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <AudienceGlyph id={a.id} color={a.accent} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: a.accent }}>{a.tag}</div>
                  <div style={{ fontSize: 20, fontWeight: 600, color: IM.charcoal, letterSpacing: '-0.01em', marginTop: 3 }}>{a.cardTitle}</div>
                  <div style={{ fontSize: 13, color: IM.gray, marginTop: 3 }}>{a.for}</div>
                </div>
              </div>
              <p style={{ fontSize: 15, color: IM.slate, lineHeight: 1.55, margin: 0, marginBottom: 20 }}>
                {a.desc}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {a.bullets.map((b, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: IM.slate }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={a.accent} strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: `1px solid ${IM.mist}` }}>
                <span style={{ fontSize: 14, fontWeight: 500, color: a.accent }}>Visit site</span>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 32, height: 32, borderRadius: 999,
                  background: isHover ? a.accent : a.accent + '18',
                  color: isHover ? '#fff' : a.accent,
                  transition: 'all 200ms cubic-bezier(0.2,0.8,0.2,1)',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export {
  IM, AUDIENCES, VISA_CATEGORIES, AUDIENCE_MARKETS, AUDIENCE_MARKET_ORDER,
  Nav, Hero, StatsStrip, ProductCards, MarketByAudience, MarketRow,
  AudienceGlyph, Dot,
};
