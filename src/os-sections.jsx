// os-sections.jsx — "Why an OS" diagram, OS connection flow, investor CTA, footer
// Depends on IM, AUDIENCES from components.jsx
import React from 'react';
import { IM, AUDIENCES, AudienceGlyph } from './components.jsx';
import ImmiHubOSFamily from './components/ImmiHubOSFamily.jsx';

// ---------- Why an OS, not four apps ----------

function WhyOS() {
  return (
    <section id="why-os" className="im-section-pad" style={{ background: '#fff', borderTop: `1px solid ${IM.mist}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
          <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: IM.blueDeep }}>The network effect</div>
          <h2 className="im-section-h2">
            Why an OS, not four apps.
          </h2>
          <p style={{ fontSize: 17, color: IM.slate, lineHeight: 1.55, margin: 0 }}>
            Today, an H-1B approval notice lives in a scanned email, a spreadsheet, an HR platform and an
            attorney's dropbox — four copies, four versions of the truth. ImmiHub replaces them with one.
          </p>
        </div>

        <OSFlowDiagram />

        <div className="im-grid-3" style={{ marginTop: 72 }}>
          <ValueProp
            n="01"
            title="One document, many dashboards"
            body="An immigrant uploads their I-797 once. It flows to their employer's compliance roster, their DSO's SEVIS view, and their attorney's case file — automatically."
          />
          <ValueProp
            n="02"
            title="Every stakeholder stays aligned"
            body="When USCIS issues an RFE, every surface updates in the same heartbeat. No more forwarded PDFs, no more 'which version is latest'."
          />
          <ValueProp
            n="03"
            title="Compounding data moat"
            body="Each new immigrant brings an employer. Each employer, an attorney. Each DSO, thousands of students. The graph gets denser with every signup."
          />
        </div>
      </div>
    </section>
  );
}

function ValueProp({ n, title, body }) {
  return (
    <div style={{
      background: IM.warmWhite, border: `1px solid ${IM.mist}`,
      borderRadius: 16, padding: 28,
    }}>
      <div style={{
        fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
        color: IM.blue, fontVariantNumeric: 'tabular-nums', marginBottom: 14,
      }}>{n}</div>
      <div style={{ fontSize: 19, fontWeight: 600, color: IM.charcoal, letterSpacing: '-0.01em', lineHeight: 1.25, marginBottom: 10 }}>{title}</div>
      <div style={{ fontSize: 14, color: IM.slate, lineHeight: 1.6 }}>{body}</div>
    </div>
  );
}

// The diagram — four surfaces feeding a shared identity + document layer
function OSFlowDiagram() {
  const [hoverIdx, setHoverIdx] = React.useState(null);

  return (
    <div id="platform" className="im-os-flowbox">
      {/* Top: four surfaces */}
      <div className="im-os-surfaces">
        {AUDIENCES.map((a, i) => {
          const hover = hoverIdx === i;
          return (
            <div
              key={a.id}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              style={{
                background: '#fff',
                border: `1px solid ${hover ? a.accent : IM.mist}`,
                borderRadius: 14, padding: 18,
                boxShadow: hover
                  ? '0 8px 24px rgba(26,35,50,0.08), 0 2px 4px rgba(26,35,50,0.04)'
                  : '0 1px 3px rgba(26,35,50,0.05)',
                transition: 'all 200ms cubic-bezier(0.2,0.8,0.2,1)',
                cursor: 'default',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 9,
                  background: a.accent + '18',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <AudienceGlyph id={a.id} color={a.accent} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: IM.charcoal }}>{a.navLabel}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <MiniRow label="Active cases" value="24" accent={a.accent} />
                <MiniRow label="This week" value="+3" accent={a.accent} />
                <MiniRow label="Action needed" value="2" accent={a.accent} warn />
              </div>
            </div>
          );
        })}
      </div>

      {/* Connecting arrows */}
      <svg viewBox="0 0 1100 80" preserveAspectRatio="none" style={{ width: '100%', height: 56, display: 'block' }}>
        <defs>
          <linearGradient id="flow-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={IM.blue} stopOpacity="0.6" />
            <stop offset="100%" stopColor={IM.green} stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {[137.5, 412.5, 687.5, 962.5].map((x, i) => (
          <g key={i}>
            <path d={`M ${x} 0 Q ${x} 40 ${550} 70`} stroke="url(#flow-grad)" strokeWidth="1.5" fill="none" strokeDasharray="5 4"
              opacity={hoverIdx === null || hoverIdx === i ? 1 : 0.25}
              style={{ transition: 'opacity 200ms' }} />
          </g>
        ))}
      </svg>

      {/* Shared layer */}
      <div style={{
        marginTop: -4,
        borderRadius: 18, padding: '28px 32px',
        background: 'linear-gradient(135deg, #4F9ED6 0%, #34B87C 100%)',
        color: '#fff',
        boxShadow: '0 12px 32px rgba(79,158,214,0.25)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.9 }}>The ImmiHub OS layer</div>
            <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', marginTop: 4 }}>One identity. One document vault. One case timeline.</div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Identity', 'Documents', 'Timeline', 'Notifications', 'Audit log'].map(p => (
              <span key={p} style={{
                fontSize: 12, fontWeight: 500,
                padding: '6px 12px', borderRadius: 999,
                background: 'rgba(255,255,255,0.18)', color: '#fff',
                border: '1px solid rgba(255,255,255,0.25)',
              }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniRow({ label, value, accent, warn }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '6px 10px', borderRadius: 6,
      background: IM.warmWhite, border: `1px solid ${IM.mist}`,
      fontSize: 11,
    }}>
      <span style={{ color: IM.gray }}>{label}</span>
      <span style={{
        fontWeight: 600, fontVariantNumeric: 'tabular-nums',
        color: warn ? IM.warnFg : IM.charcoal,
      }}>{value}</span>
    </div>
  );
}

// ---------- How the OS connects — narrative walkthrough ----------

function HowItConnects() {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % 4), 4500);
    return () => clearInterval(t);
  }, []);

  const steps = [
    {
      title: 'Priya updates her I-797 in the ImmiHub app',
      who: 'Immigrant',
      accent: IM.blue,
      surfaces: { immigrant: 'active', employer: 'idle', university: 'idle', attorney: 'idle' },
      detail: 'Valid through March 12, 2028 — extension approved.',
    },
    {
      title: 'Her employer\'s compliance roster updates in real time',
      who: 'Employer',
      accent: '#7A6BE8',
      surfaces: { immigrant: 'sent', employer: 'active', university: 'idle', attorney: 'idle' },
      detail: 'HR closes the amendment task — no follow-up email.',
    },
    {
      title: 'If she enrolls in a program, her DSO sees it next',
      who: 'University',
      accent: '#E8843C',
      surfaces: { immigrant: 'sent', employer: 'sent', university: 'active', attorney: 'idle' },
      detail: 'SEVIS status synced with the same source document.',
    },
    {
      title: 'Her attorney files the next petition, pre-organized',
      who: 'Attorney',
      accent: IM.blueDeep,
      surfaces: { immigrant: 'sent', employer: 'sent', university: 'sent', attorney: 'active' },
      detail: 'Evidence binder assembled from the shared vault.',
    },
  ];

  const cur = steps[step];

  return (
    <section className="im-section-pad" style={{ background: IM.cloud }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="im-how-grid">
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: IM.blueDeep }}>How the OS connects</div>
            <h2 className="im-section-h2-sm" style={{ fontSize: 40, margin: '14px 0 20px' }}>
              One source of truth, routed to where it matters.
            </h2>
            <p style={{ fontSize: 16, color: IM.slate, lineHeight: 1.6, margin: 0, marginBottom: 28 }}>
              A single action by an immigrant ripples through the surfaces that need it — never to the ones
              that don't. Permissions are granular, auditable and revocable.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {steps.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  style={{
                    display: 'flex', gap: 14, alignItems: 'flex-start',
                    textAlign: 'left', padding: '14px 16px',
                    background: i === step ? '#fff' : 'transparent',
                    border: `1px solid ${i === step ? IM.mist : 'transparent'}`,
                    borderRadius: 12, cursor: 'pointer',
                    fontFamily: 'inherit',
                    boxShadow: i === step ? '0 1px 3px rgba(26,35,50,0.06)' : 'none',
                    transition: 'all 200ms cubic-bezier(0.2,0.8,0.2,1)',
                  }}
                >
                  <div style={{
                    width: 24, height: 24, borderRadius: 999, flexShrink: 0,
                    background: i === step ? s.accent : '#fff',
                    border: `1.5px solid ${i === step ? s.accent : IM.mist}`,
                    color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 600, fontVariantNumeric: 'tabular-nums',
                    marginTop: 2,
                  }}>{i === step ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  ) : i + 1}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em',
                      color: s.accent, marginBottom: 3,
                    }}>{s.who}</div>
                    <div style={{ fontSize: 14, fontWeight: i === step ? 600 : 500, color: i === step ? IM.charcoal : IM.slate, lineHeight: 1.4 }}>{s.title}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <FlowVisual cur={cur} />
        </div>
      </div>
    </section>
  );
}

function FlowVisual({ cur }) {
  // Four surface tiles arranged in a 2x2, with the shared vault in the middle.
  const surfaces = [
    { id: 'immigrant', label: 'Immigrant', accent: IM.blue, pos: 'tl' },
    { id: 'employer', label: 'Employer', accent: '#7A6BE8', pos: 'tr' },
    { id: 'university', label: 'University', accent: '#E8843C', pos: 'bl' },
    { id: 'attorney', label: 'Attorney', accent: IM.blueDeep, pos: 'br' },
  ];

  return (
    <div className="im-flow-visual">
      {/* Central shared vault */}
      <div data-flow-hub style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 200, padding: '16px 20px',
        background: 'linear-gradient(135deg, rgba(79,158,214,0.08) 0%, rgba(52,184,124,0.08) 100%)',
        border: `1.5px solid ${IM.blue}40`,
        borderRadius: 14, zIndex: 3,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: IM.blueDeep }}>Shared vault</div>
        <div style={{ fontSize: 14, fontWeight: 600, color: IM.charcoal, marginTop: 6 }}>I-797 · Priya S.</div>
        <div style={{ fontSize: 11, color: IM.gray, marginTop: 2, fontVariantNumeric: 'tabular-nums' }}>Updated just now</div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: IM.mint, color: IM.green,
          padding: '3px 10px', borderRadius: 999,
          fontSize: 11, fontWeight: 500, marginTop: 10,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: IM.green }} />
          Valid · ext. approved
        </div>
      </div>

      {/* Flow lines */}
      <svg viewBox="0 0 500 416" preserveAspectRatio="none" style={{ position: 'absolute', inset: 32, width: 'calc(100% - 64px)', height: 'calc(100% - 64px)', zIndex: 1 }}>
        <defs>
          <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={IM.blue} stopOpacity="0.1" />
            <stop offset="50%" stopColor={IM.blue} stopOpacity="0.8" />
            <stop offset="100%" stopColor={IM.blue} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {surfaces.map(s => {
          const state = cur.surfaces[s.id];
          const start = s.pos === 'tl' ? [90, 60] : s.pos === 'tr' ? [410, 60] : s.pos === 'bl' ? [90, 356] : [410, 356];
          const end = [250, 208];
          const strokeColor = state === 'active' ? s.accent : state === 'sent' ? s.accent : IM.mist;
          const strokeOpacity = state === 'idle' ? 0.5 : 1;
          return (
            <line
              key={s.id}
              x1={start[0]} y1={start[1]} x2={end[0]} y2={end[1]}
              stroke={strokeColor} strokeWidth={state === 'active' ? 2 : 1.25}
              strokeDasharray={state === 'active' ? '0' : '4 4'}
              opacity={strokeOpacity}
              style={{ transition: 'all 320ms cubic-bezier(0.2,0.8,0.2,1)' }}
            />
          );
        })}
      </svg>

      {/* Four tiles */}
      {surfaces.map(s => {
        const state = cur.surfaces[s.id];
        const isActive = state === 'active';
        const isSent = state === 'sent';
        return (
          <div
            key={s.id}
            className={`im-flow-tile ${s.pos}`}
            style={{
              background: isActive ? s.accent + '0D' : '#fff',
              border: `1.5px solid ${isActive ? s.accent : isSent ? s.accent + '50' : IM.mist}`,
              boxShadow: isActive
                ? `0 8px 20px ${s.accent}30, 0 2px 4px rgba(26,35,50,0.04)`
                : '0 1px 3px rgba(26,35,50,0.06)',
              transition: 'all 320ms cubic-bezier(0.2,0.8,0.2,1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 26, height: 26, borderRadius: 7,
                background: s.accent + '18',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <AudienceGlyph id={s.id} color={s.accent} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: IM.charcoal }}>{s.label}</div>
            </div>
            <div style={{
              marginTop: 10, fontSize: 11, color: IM.gray,
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: 999,
                background: isActive ? s.accent : isSent ? s.accent + '80' : IM.mist,
                animation: isActive ? 'im-pulse 1.6s ease-in-out infinite' : 'none',
              }} />
              {isActive ? 'Syncing…' : isSent ? 'Up to date' : 'Connected'}
            </div>
          </div>
        );
      })}

      {/* Detail caption */}
      <div style={{
        position: 'absolute', left: 24, right: 24, bottom: -16,
        display: 'flex', justifyContent: 'center',
      }}>
        <div style={{
          background: '#fff', border: `1px solid ${IM.mist}`,
          borderRadius: 999, padding: '8px 16px',
          fontSize: 12, color: IM.slate,
          boxShadow: '0 4px 12px rgba(26,35,50,0.06)',
          display: 'inline-flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: cur.accent }} />
          {cur.detail}
        </div>
      </div>
    </div>
  );
}

// ---------- Investor CTA ----------

function InvestorCTA() {
  const [email, setEmail] = React.useState('');
  const [firm, setFirm] = React.useState('');
  const [sent, setSent] = React.useState(false);

  function submit(e) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  }

  return (
    <section id="investors" className="im-section-pad">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="im-investor-card">
          {/* subtle pattern */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.06,
            backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
            backgroundSize: '22px 22px', pointerEvents: 'none',
          }} />
          <div className="im-investor-grid">
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.14)',
                padding: '6px 12px', borderRadius: 999,
                fontSize: 12, fontWeight: 500, color: '#fff',
                border: '1px solid rgba(255,255,255,0.2)',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: IM.green }} />
                Seed round · $6M target · open
              </div>
              <h2 className="im-section-h2-sm" style={{ fontSize: 40, color: '#fff', margin: '16px 0' }}>
                Want the full thesis?
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0, maxWidth: 440 }}>
                Request our investor deck for market sizing, unit economics, the four-surface go-to-market,
                and why the immigration graph is a defensible moat.
              </p>

              <div style={{ display: 'flex', gap: 24, marginTop: 28, fontSize: 13, color: 'rgba(255,255,255,0.75)', flexWrap: 'wrap' }}>
                <span>· 18-slide deck</span>
                <span>· Unit economics model</span>
                <span>· Customer letters of intent</span>
              </div>
            </div>

            <form onSubmit={submit} style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: 18, padding: 24,
              backdropFilter: 'blur(8px)',
            }}>
              {!sent ? (
                <>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 14 }}>Request investor deck</div>
                  <InvestorInput placeholder="you@firm.vc" value={email} onChange={setEmail} type="email" />
                  <InvestorInput placeholder="Firm (optional)" value={firm} onChange={setFirm} />
                  <button type="submit" style={{
                    width: '100%', background: IM.green, color: '#fff', border: 'none',
                    padding: '13px 18px', borderRadius: 10, fontSize: 15, fontWeight: 600,
                    cursor: 'pointer', fontFamily: 'inherit', marginTop: 6,
                    transition: 'background 200ms',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#2CA26E'}
                  onMouseLeave={e => e.currentTarget.style.background = IM.green}
                  >Send me the deck →</button>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 12, textAlign: 'center' }}>
                    Or email <a href="mailto:investors@immihub.com" style={{ color: '#fff', textDecoration: 'underline' }}>investors@immihub.com</a>
                  </div>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '32px 8px' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 999,
                    background: IM.green,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 16,
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 6 }}>On its way.</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                    We'll send the deck to <span style={{ color: '#fff' }}>{email}</span> within the hour.
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function InvestorInput({ placeholder, value, onChange, type = 'text' }) {
  return (
    <input
      type={type} value={value} onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        width: '100%', boxSizing: 'border-box',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.18)',
        borderRadius: 10, padding: '12px 14px',
        fontSize: 14, color: '#fff',
        fontFamily: 'inherit',
        marginBottom: 10,
        outline: 'none',
      }}
      onFocus={e => {
        e.target.style.borderColor = IM.blue;
        e.target.style.background = 'rgba(255,255,255,0.12)';
      }}
      onBlur={e => {
        e.target.style.borderColor = 'rgba(255,255,255,0.18)';
        e.target.style.background = 'rgba(255,255,255,0.08)';
      }}
    />
  );
}

// ---------- Footer ----------

function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${IM.mist}`, background: IM.warmWhite, padding: '56px 32px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <ImmiHubOSFamily homeHref="index.html" umbrella />
        <div className="im-footer-grid">
          <div>
            <img src="assets/logo-immihub.png" alt="ImmiHub" style={{ height: 24, width: 'auto' }} />
            <p style={{ fontSize: 13, color: IM.gray, lineHeight: 1.6, margin: '16px 0 0', maxWidth: 320 }}>
              The operating system for every person, institution and professional navigating US immigration.
            </p>
          </div>
          <FooterCol title="Surfaces" links={[
            { label: 'Immigrants', href: 'apps/immigrant/index.html' },
            { label: 'Employers', href: 'apps/employer/index.html' },
            { label: 'Universities', href: 'apps/dso/index.html' },
            { label: 'Attorneys', href: 'apps/attorney/index.html' },
          ]} />
          <FooterCol title="Company" links={[
            { label: 'About' }, { label: 'Careers' }, { label: 'Press' }, { label: 'Security' },
          ]} />
          <FooterCol title="Resources" links={[
            { label: 'Investors', href: '#investors' },
            { label: 'Blog' }, { label: 'Help center' }, { label: 'Contact' },
          ]} />
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24, flexWrap: 'wrap',
          paddingTop: 28, borderTop: `1px solid ${IM.mist}`,
        }}>
          <div style={{ fontSize: 12, color: IM.gray }}>© 2026 ImmiHub, Inc. · Not a law firm. Information here is not legal advice.</div>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy', 'Terms', 'Security', 'Trust center'].map(l => (
              <a key={l} href="#" style={{ fontSize: 12, color: IM.slate, textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: IM.charcoal, marginBottom: 14 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map(l => (
          <a key={l.label} href={l.href || '#'} style={{ fontSize: 13, color: IM.slate, textDecoration: 'none' }}>{l.label}</a>
        ))}
      </div>
    </div>
  );
}

export {
  WhyOS, OSFlowDiagram, HowItConnects, InvestorCTA, Footer,
  ValueProp, MiniRow, FlowVisual, InvestorInput, FooterCol,
};
