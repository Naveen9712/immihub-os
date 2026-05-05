// Landing page — /employers
const { useState: useStateLP, useEffect: useEffectLP } = React;

function LandingHero() {
  return (
    <section style={{ padding: '72px 0 48px', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.25fr', gap: 72, alignItems: 'center' }}>
          <div>
            <div className="eyebrow"><span className="dot" />ImmiHub for Employers · Coming 2026</div>
            <h1 className="display-xl" style={{ marginTop: 20, marginBottom: 22 }}>
              Immigration compliance,<br />finally in one place.
            </h1>
            <p className="lede" style={{ marginBottom: 28 }}>
              Built for HR and immigration teams sponsoring H-1B, L-1, O-1, TN, STEM OPT, and green-card employees — and tired of tracking expiries in spreadsheets.
            </p>
            <div style={{ display: 'flex', gap: 12, marginBottom: 18, flexWrap: 'wrap' }}>
              <a href="#waitlist" className="btn btn-primary btn-lg">Join the waitlist</a>
              <a href="#glimpse" className="btn btn-ghost btn-lg">See the product →</a>
            </div>
            <div className="tiny" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'flex' }}>
                {[PS.blue, PS.green, PS.sky, PS.blueDeep].map((c, i) =>
                <div key={i} style={{ width: 22, height: 22, borderRadius: 999, background: c, border: '2px solid var(--im-warm-white)', marginLeft: i ? -6 : 0 }} />
                )}
              </div>
              Join 10+ HR and immigration teams on the waitlist.
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            {/* Hero product shot — tilted, original design */}
            <div style={{ transform: 'perspective(1800px) rotateY(-3deg) rotateX(2deg)', transformOrigin: 'left center' }}>
              <div className="prod-window" style={{ borderRadius: 14, boxShadow: '0 40px 80px -20px rgba(26,35,50,0.22)' }}>
                <div className="prod-window-bar">
                  <div className="dot" /><div className="dot" /><div className="dot" />
                  <div className="addr">app.immihub.ai/employers</div>
                </div>
                <ScreenDashboard />
              </div>
            </div>
            {/* Floating notification card */}
            <div style={{ position: 'absolute', right: -18, top: 72, width: 208 }}>
              <div className="prod-window" style={{ borderRadius: 10, boxShadow: '0 24px 50px -14px rgba(26,35,50,0.28)' }}>
                <div style={{ padding: 12, background: '#fff' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 6, height: 6, borderRadius: 999, background: PS.dangerFg }} />
                    <div style={{ fontSize: 9, fontWeight: 600, color: PS.dangerFg, letterSpacing: 0.08 * 9, textTransform: 'uppercase' }}>Action needed</div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: PS.charcoal, marginTop: 6, fontFamily: 'Source Serif 4, Georgia, serif' }}>Nikhil Patel · OPT</div>
                  <div style={{ fontSize: 10, color: PS.slate, marginTop: 2, lineHeight: 1.4 }}>Expires in 3 days. Cap-gap active. Attorney notified.</div>
                  <div style={{ height: 3, background: PS.cloud, borderRadius: 99, marginTop: 8, overflow: 'hidden' }}>
                    <div style={{ width: '5%', height: '100%', background: PS.dangerFg }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function ProblemBand() {
  const items = [
  { n: '4+', d: 'disconnected tools the average HR team uses to track visa status.' },
  { n: '60%', d: 'of sponsoring companies miss at least one immigration deadline per year.' },
  { n: '$50K+', d: 'the cost of a single expired I-797 — legal fees, lost hire, lost project.' }];

  return (
    <section className="section-alt" style={{ padding: '80px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
          {items.map((it, i) =>
          <div key={i} style={{ padding: '12px 32px', borderLeft: i ? '1px solid var(--im-mist)' : 'none' }}>
              <div className="serif-display" style={{ fontSize: 'clamp(52px, 5vw, 80px)', color: PS.charcoal, lineHeight: 1 }}>{it.n}</div>
              <div style={{ fontSize: 16, color: PS.slate, lineHeight: 1.5, marginTop: 12, maxWidth: 300 }}>{it.d}</div>
            </div>
          )}
        </div>
        <div style={{ marginTop: 36, fontSize: 13, color: PS.gray, fontStyle: 'italic', maxWidth: 680 }}>
          Illustrative — sourced from HR and immigration-attorney conversations during product development.
        </div>
      </div>
    </section>);

}

function FeatureGrid() {
  const items = [
  {
    t: 'Every visa, every deadline.',
    d: 'Per-employee runway bars show exactly how many days until each document expires.',
    det: 'H-1B · L-1 · TN · STEM OPT · Green Card · EAD · Advance Parole · I-94 · Passport.',
    i: <g><path d="M3 7h18M3 12h18M3 17h18" /><path d="M8 4v3M16 4v3M6 14h4" /></g>
  },
  {
    t: 'Risks before crises.',
    d: 'A 3-tier risk model automatically surfaces at-risk employees.',
    det: '60-day grace periods · 3-day I-9 §2 windows · cap-gap timers.',
    i: <g><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6z" /><path d="M12 8v4M12 16v.01" /></g>
  },
  {
    t: 'Know before they travel.',
    d: 'Pre-trip re-entry advisories flag HIGH/MEDIUM/LOW risk per planned trip.',
    det: 'Visa stamp lapses · Advance Parole timing · destination guidance.',
    i: <g><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></g>
  },
  {
    t: 'Case management that matches how attorneys work.',
    d: 'Draft → Filed → RFE → Approved Kanban.',
    det: 'USCIS receipt tracking · deadline countdowns · attorney assignment.',
    i: <g><rect x="3" y="4" width="7" height="16" rx="1.5" /><rect x="14" y="4" width="7" height="10" rx="1.5" /></g>
  },
  {
    t: 'USCIS mail, auto-filed.',
    d: 'Forward notices to a dedicated inbox — ImmiHub parses form, receipt, and employee.',
    det: 'Confidence-scored · manual-review fallback.',
    i: <g><path d="M4 6l8 6 8-6" /><rect x="3" y="5" width="18" height="14" rx="2" /></g>
  },
  {
    t: 'Audit-ready in one click.',
    d: 'Generate redacted audit binders for I-9s, PAFs, LCAs, PWDs.',
    det: 'Configurable PII redaction · attorney-shareable · read-only.',
    i: <g><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></g>
  }];

  return (
    <section className="section">
      <div className="container">
        <div style={{ maxWidth: 760, marginBottom: 56 }}>
          <div className="eyebrow"><span className="dot" />What ImmiHub does</div>
          <h2 className="section-title" style={{ marginTop: 16 }}>
            One surface for the whole immigration program.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {items.map((it, i) =>
          <div key={i} className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: PS.ice, color: PS.blueDeep, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{it.i}</svg>
              </div>
              <div className="serif" style={{ fontSize: 20, color: PS.charcoal, lineHeight: 1.25, marginBottom: 10, letterSpacing: -0.01 * 20 }}>{it.t}</div>
              <div style={{ fontSize: 14, color: PS.slate, lineHeight: 1.55 }}>{it.d}</div>
              <div style={{ fontSize: 12, color: PS.gray, fontStyle: 'italic', marginTop: 'auto', paddingTop: 16, lineHeight: 1.5 }}>{it.det}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function ProductGlimpse() {
  const tabs = [
  { k: 'dashboard', l: 'Dashboard', caption: "Monday-morning view: what's at risk, what's due, what's healthy.", C: ScreenDashboard },
  { k: 'risk', l: 'Risk feed', caption: "A 3-tier risk model surfaces at-risk employees automatically — no spreadsheets, no Monday panic.", C: ScreenDashboard },
  { k: 'cases', l: 'Cases', caption: 'Draft → Filed → RFE → Approved. Every case, every receipt number, every countdown.', C: ScreenCases },
  { k: 'grace', l: 'Grace period', caption: 'Track the 60-day window day by day — with a deadline to file, required actions, and attorney notes.', C: ScreenGracePeriod },
  { k: 'travel', l: 'Travel', caption: 'Pre-trip re-entry advisories flag HIGH / MEDIUM / LOW risk before an employee boards.', C: ScreenTravel },
  { k: 'audit', l: 'Audit mode', caption: 'Generate redacted binders for I-9s, PAFs, LCAs, and PWDs — configurable, read-only, access-logged.', C: ScreenAudit },
  { k: 'inbox', l: 'Smart inbox', caption: 'Forward USCIS mail to a dedicated address. ImmiHub parses form, receipt, and employee with a confidence score.', C: ScreenInbox }];

  const [active, setActive] = useStateLP('dashboard');
  const cur = tabs.find((t) => t.k === active);
  const Comp = cur.C;
  return (
    <section id="glimpse" style={{ background: PS.charcoal, padding: '104px 0', color: '#fff' }}>
      <div className="container">
        <div style={{ maxWidth: 760, marginBottom: 36 }}>
          <div className="eyebrow" style={{ color: '#7BB8E2' }}><span className="dot" style={{ background: '#7BB8E2' }} />A glimpse of the product</div>
          <h2 className="section-title" style={{ marginTop: 16, color: '#fff' }}>
            Seven screens, one source of truth.
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', padding: 6, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, marginBottom: 20 }}>
          {tabs.map((t) =>
          <button
            key={t.k}
            onClick={() => setActive(t.k)}
            style={{
              padding: '10px 16px', borderRadius: 8, border: 0,
              background: active === t.k ? '#fff' : 'transparent',
              color: active === t.k ? PS.charcoal : 'rgba(255,255,255,0.8)',
              fontSize: 13, fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer',
              transition: 'background .2s var(--ease-out), color .2s var(--ease-out)'
            }}>
              {t.l}
            </button>
          )}
        </div>
        <div className="prod-window" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <div className="prod-window-bar">
            <div className="dot" /><div className="dot" /><div className="dot" />
            <div className="addr">app.immihub.ai/employers/{cur.k}</div>
          </div>
          <div key={active} style={{ animation: 'fadeIn .32s var(--ease-out)' }}>
            <Comp />
          </div>
        </div>
        <div style={{ maxWidth: 720, margin: '28px auto 0', textAlign: 'center', fontSize: 17, color: 'rgba(255,255,255,0.78)', fontFamily: 'Source Serif 4, Georgia, serif', fontStyle: 'italic', lineHeight: 1.5 }}>
          "{cur.caption}"
        </div>
      </div>
    </section>);

}

function WhoUsesIt() {
  const cols = [
  {
    t: 'For HR',
    i: <g><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></g>,
    bullets: ['Sortable directory of sponsored employees', 'Bulk reminders and onboarding checklists', 'New-hire I-9 tracking with the 3-day window']
  },
  {
    t: 'For immigration leads',
    i: <g><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M9 14h6" /></g>,
    bullets: ['Case Kanban across your whole program', 'RFE tracking with deadline countdowns', 'Attorney assignment and grace-period cockpit']
  },
  {
    t: 'For leadership',
    i: <g><path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-6" /></g>,
    bullets: ['12-month compliance trends', 'Per-attorney performance', 'One-click audit binders — PII redacted']
  }];

  return (
    <section className="section">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 48 }}>
          <div className="eyebrow"><span className="dot" />Who uses it</div>
          <h2 className="section-title" style={{ marginTop: 16 }}>Three workflows. One shared source of truth.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {cols.map((c, i) =>
          <div key={i} style={{ borderTop: `2px solid ${PS.blue}`, paddingTop: 24 }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: PS.ice, color: PS.blueDeep, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{c.i}</svg>
              </div>
              <div className="serif" style={{ fontSize: 24, color: PS.charcoal, marginBottom: 16, letterSpacing: -0.01 * 24 }}>{c.t}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {c.bullets.map((b, j) =>
              <li key={j} style={{ padding: '10px 0', borderTop: j ? '1px solid var(--im-mist)' : 'none', fontSize: 15, color: PS.slate, lineHeight: 1.5 }}>{b}</li>
              )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function SecurityCard() {
  const items = [
  'Data never sold, never shared with your employee\'s home country, never shared with any government system.',
  'Attorney workspaces are read-only, time-bound, and access-logged.',
  'Configurable redaction on every export.',
  'Hosted on AWS US-East. Encrypted at rest and in transit.',
  'SOC 2 Type II planned for 2026.'];

  return (
    <section style={{ padding: '48px 0 96px' }}>
      <div className="container">
        <div className="card" style={{ padding: 40, display: 'flex', gap: 40, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: PS.blue }} />
          <div style={{ flex: '0 0 220px' }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: PS.ice, color: PS.blueDeep, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
            </div>
            <div className="serif" style={{ fontSize: 24, color: PS.charcoal, letterSpacing: -0.01 * 24, lineHeight: 1.2 }}>Security and trust, by design.</div>
          </div>
          <ul style={{ flex: 1, listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 32px' }}>
            {items.map((s, i) =>
            <li key={i} style={{ fontSize: 14, color: PS.slate, lineHeight: 1.5, display: 'flex', gap: 10 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={PS.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 4 }}><path d="M20 6L9 17l-5-5" /></svg>
                {s}
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}

function WaitlistCTA() {
  return (
    <section id="waitlist" className="section-alt" style={{ padding: '96px 0' }}>
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Compliance should feel calm.</h2>
        <p className="lede" style={{ margin: '20px auto 36px' }}>
          Join the waitlist — we'll be in touch when early access opens.
        </p>
        <div style={{ maxWidth: 620, margin: '0 auto', textAlign: 'left' }}>
          <WaitlistForm tag="landing" />
        </div>
        <div style={{ marginTop: 24, fontSize: 13, color: PS.gray }}>
          Are you an immigration attorney? <a href="partners.html" style={{ color: PS.blueDeep, fontWeight: 500 }}>See our partnership program →</a>
        </div>
      </div>
    </section>);

}

function LandingPage() {
  return (
    <div>
      <Nav active="product" />
      <main data-screen-label="Landing">
        <LandingHero />
        <ProblemBand />
        <FeatureGrid />
        <ProductGlimpse />
        <WhoUsesIt />
        <SecurityCard />
        <WaitlistCTA />
      </main>
      <Footer />
    </div>);

}

Object.assign(window, { LandingPage });