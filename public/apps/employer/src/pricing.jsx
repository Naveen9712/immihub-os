// Pricing page — /employers/pricing
const { useState: useStatePR } = React;

function PricingHero() {
  return (
    <section style={{ padding: '96px 0 48px' }}>
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="dot" />Pricing · Launching 2026</div>
        <h1 className="display-xl" style={{ marginTop: 20, marginBottom: 22 }}>
          Simple, transparent pricing.<br/>Launching 2026.
        </h1>
        <p className="lede" style={{ margin: '0 auto' }}>
          Per-employee per-month. Founding customers on the waitlist lock in 2026 pricing for life.
        </p>
      </div>
    </section>
  );
}

function PricingCard({ name, fit, price, suffix, items, cta, highlight }) {
  return (
    <div className="card" style={{ padding: 32, paddingTop: highlight ? 52 : 32, display: 'flex', flexDirection: 'column', border: highlight ? `2px solid ${PS.blue}` : '1px solid var(--im-mist)', position: 'relative', boxShadow: highlight ? '0 20px 40px -10px rgba(79,158,214,0.2)' : 'var(--shadow-sm)' }}>
      {highlight && <div style={{ position: 'absolute', top: 16, left: 24, padding: '4px 12px', borderRadius: 999, background: PS.blue, color: '#fff', fontSize: 11, fontWeight: 600, letterSpacing: 0.06 * 11, textTransform: 'uppercase' }}>Most popular</div>}
      <div style={{ fontSize: 13, fontWeight: 600, color: PS.blueDeep, letterSpacing: 0.04 * 13, textTransform: 'uppercase' }}>{name}</div>
      <div style={{ fontSize: 14, color: PS.gray, marginTop: 6, lineHeight: 1.5 }}>{fit}</div>
      <div style={{ marginTop: 22, display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <div className="serif-display" style={{ fontSize: 52, color: PS.charcoal, letterSpacing: -0.02 * 52 }}>{price}</div>
        {suffix && <div style={{ fontSize: 13, color: PS.gray }}>{suffix}</div>}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 28px' }}>
        {items.map((it, i) => (
          <li key={i} style={{ padding: '8px 0', fontSize: 14, color: PS.slate, lineHeight: 1.5, display: 'flex', gap: 10 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={highlight ? PS.blue : PS.green} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 4 }}><path d="M20 6L9 17l-5-5"/></svg>
            <span>{it}</span>
          </li>
        ))}
      </ul>
      <a href="#waitlist" className={'btn ' + (highlight ? 'btn-primary' : 'btn-ghost')} style={{ marginTop: 'auto' }}>{cta}</a>
    </div>
  );
}

function PricingTiers() {
  return (
    <section style={{ padding: '24px 0 64px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          <PricingCard name="Starter" fit="For teams sponsoring 10–50 employees."
            price="$TBD" suffix="/ employee / month"
            items={[
              'Dashboard',
              'Employees directory',
              'Document tracking',
              'Expiry reminders',
              'Case Kanban · up to 25 active cases',
              'CSV export',
            ]}
            cta="Join the waitlist" />
          <PricingCard name="Growth" highlight fit="For teams sponsoring 50–200 employees."
            price="$TBD" suffix="/ employee / month"
            items={[
              'Everything in Starter',
              'Grace Period cockpit',
              'Travel Risk Advisor',
              'Smart Inbox',
              'Audit Mode',
              'Trends · 12-month',
              'Attorney workspace shares',
              'Priority support',
            ]}
            cta="Join the waitlist" />
          <PricingCard name="Enterprise" fit="For teams sponsoring 200+ employees or multi-entity organizations."
            price="Custom" suffix=""
            items={[
              'Everything in Growth',
              'Multi-org support',
              'SSO / SAML',
              'Dedicated success manager',
              'SOC 2 report access',
              'Custom integrations',
              'SLA',
            ]}
            cta="Talk to our team" />
        </div>
      </div>
    </section>
  );
}

function FeatureTable() {
  const rows = [
    ['Dashboard', 1, 1, 1],
    ['Employees directory', 1, 1, 1],
    ['Document tracking', 1, 1, 1],
    ['Expiry reminders', 1, 1, 1],
    ['Case Kanban', '25 active', 'Unlimited', 'Unlimited'],
    ['Grace Period cockpit', 0, 1, 1],
    ['Travel Risk Advisor', 0, 1, 1],
    ['Smart Inbox', 0, 1, 1],
    ['Audit Mode', 0, 1, 1],
    ['Trends · 12-month', 0, 1, 1],
    ['Attorney workspace shares', 0, 1, 1],
    ['Multi-org support', 0, 0, 1],
    ['SSO / SAML', 0, 0, 1],
    ['Dedicated success manager', 0, 0, 1],
    ['SOC 2 report access', 0, 0, 1],
    ['Custom integrations', 0, 0, 1],
    ['SLA', 0, 0, 1],
  ];
  const Cell = ({ v }) => {
    if (v === 1) return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={PS.blue} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>;
    if (v === 0) return <span style={{ color: 'var(--im-mist)' }}>—</span>;
    return <span style={{ fontSize: 13, color: PS.slate }}>{v}</span>;
  };
  return (
    <section className="section-alt" style={{ padding: '80px 0' }}>
      <div className="container">
        <div style={{ maxWidth: 640, marginBottom: 40 }}>
          <div className="eyebrow"><span className="dot" />What's included</div>
          <h2 className="section-title" style={{ marginTop: 14 }}>The full feature comparison.</h2>
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--im-mist)', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '14px 24px', background: 'var(--im-warm-white)', fontSize: 11, fontWeight: 600, letterSpacing: 0.06 * 11, textTransform: 'uppercase', color: PS.gray }}>
            <div>Feature</div><div>Starter</div><div>Growth</div><div>Enterprise</div>
          </div>
          {rows.map(([t, a, b, c], i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '14px 24px', borderTop: '1px solid var(--im-mist)', alignItems: 'center', fontSize: 14, color: PS.charcoal, fontWeight: 500 }}>
              <div>{t}</div>
              <div><Cell v={a} /></div>
              <div><Cell v={b} /></div>
              <div><Cell v={c} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FoundingPerks() {
  return (
    <section style={{ padding: '96px 0' }}>
      <div className="container-narrow">
        <div className="card" style={{ padding: 0, overflow: 'hidden', borderColor: PS.blue }}>
          <div style={{ height: 6, background: `linear-gradient(90deg, ${PS.blue}, ${PS.green})` }} />
          <div style={{ padding: 40 }}>
            <div className="eyebrow"><span className="dot" />Founding customer program</div>
            <h2 className="section-title" style={{ marginTop: 14, fontSize: 'clamp(28px, 3vw, 36px)' }}>Founding customer benefits.</h2>
            <p className="lede" style={{ margin: '16px 0 28px' }}>
              The first 50 companies on the waitlist become our founding cohort — the ones whose feedback shapes the product.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 32px' }}>
              {[
                'Lock in 2026 launch pricing — for life, across every tier.',
                'Direct Slack channel with the product team.',
                'Feature requests prioritized in the roadmap.',
                'Quarterly product roadmap previews.',
                'Named on the "Founding customers" page at launch — opt-in.',
              ].map((s, i) => (
                <li key={i} style={{ fontSize: 15, color: PS.slate, lineHeight: 1.55, display: 'flex', gap: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={PS.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 4 }}><path d="M20 6L9 17l-5-5"/></svg>
                  {s}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 32, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="#waitlist" className="btn btn-primary btn-lg">Join the waitlist</a>
              <div className="tiny">Founding cohort closes at 50 companies.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ['When is pricing finalized?', "We'll confirm final pricing 60 days before launch. Waitlist members get first notice and founding-customer rates."],
    ['Is there a free tier?', "No free tier at launch — this is professional compliance software for teams with real immigration caseloads. We're working on a limited-use tier for small companies."],
    ['What about a trial?', '30-day trial at launch for every tier.'],
    ['Do you bill per sponsored employee or per total headcount?', "Per sponsored employee only — if an employee doesn't hold a work visa or green card case, they don't count."],
    ["What's included in Enterprise custom pricing?", 'Multi-org deployments, dedicated infrastructure, custom SSO, audit report access, and SLA. Usually starts at $TBD/month.'],
  ];
  const [open, setOpen] = useStatePR(0);
  return (
    <section className="section-alt" style={{ padding: '80px 0' }}>
      <div className="container-narrow">
        <div className="eyebrow"><span className="dot" />Pricing FAQ</div>
        <h2 className="section-title" style={{ marginTop: 14, marginBottom: 32 }}>Questions we get asked.</h2>
        <div>
          {faqs.map(([q, a], i) => (
            <div key={i} className={'accordion-item' + (open === i ? ' open' : '')}>
              <button className="accordion-btn" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{q}</span>
                <span className="plus">+</span>
              </button>
              <div className="accordion-body"><p>{a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingBottomCTA() {
  return (
    <section id="waitlist" style={{ padding: '96px 0' }}>
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Ready to lock in founding pricing?</h2>
        <p className="lede" style={{ margin: '20px auto 36px' }}>Founding cohort closes at 50 companies. Early customers keep 2026 pricing for the life of their account.</p>
        <div style={{ maxWidth: 620, margin: '0 auto', textAlign: 'left' }}>
          <WaitlistForm tag="pricing" />
        </div>
      </div>
    </section>
  );
}

function PricingPage() {
  return (
    <div>
      <Nav active="pricing" />
      <main data-screen-label="Pricing">
        <PricingHero />
        <PricingTiers />
        <FeatureTable />
        <FoundingPerks />
        <FAQ />
        <PricingBottomCTA />
      </main>
      <Footer />
    </div>
  );
}

Object.assign(window, { PricingPage });
