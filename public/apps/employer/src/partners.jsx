// Partners page — attorney partnership program
const { useState: useStatePT } = React;

function PartnersHero() {
  return (
    <section style={{ padding: '112px 0 56px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div className="eyebrow"><span className="dot" />Partnership program</div>
            <h1 className="display-xl" style={{ marginTop: 20, marginBottom: 22 }}>
              Built for teams that work with the best immigration attorneys.
            </h1>
            <p className="lede">
              ImmiHub is designed to augment your practice — not replace it. We're partnering with leading immigration firms to shape the product.
            </p>
            <div style={{ marginTop: 32 }}>
              <a href="#apply" className="btn btn-primary btn-lg">Become a launch partner</a>
            </div>
          </div>
          <div>
            <div className="card" style={{ padding: 28, background: 'var(--im-warm-white)' }}>
              <div style={{ fontSize: 13, color: PS.gray, fontStyle: 'italic', lineHeight: 1.6 }}>
                "We built ImmiHub to make immigration attorneys indispensable to their clients — with better records, cleaner handoffs, and fewer dropped balls. Not to replace what you do."
              </div>
              <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 999, background: 'linear-gradient(135deg, #4F9ED6, #34B87C)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600 }}>IT</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2, lineHeight: 1.3 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: PS.charcoal }}>ImmiHub team</div>
                  <div style={{ fontSize: 11, color: PS.gray }}>Founder's note</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerBenefits() {
  const items = [
    { t: 'Shared employee workspaces', d: 'Every client you represent can share read-only employee records with you. No more emailing spreadsheets.' },
    { t: 'Consolidated case visibility', d: 'See every case across every client in one dashboard. Filter by stage, deadline, RFE status.' },
    { t: 'Shared audit packets', d: 'Your client\'s HR team can share an audit binder with you in one click — redacted, auditable, read-only.' },
    { t: 'Referral program', d: 'Bring in clients, share revenue. Details at launch.' },
    { t: 'Co-branded deployment', d: 'Large firms can deploy ImmiHub under their own branding. White-label details on request.' },
    { t: 'Early product input', d: 'Launch partners shape the roadmap.' },
  ];
  return (
    <section className="section-alt" style={{ padding: '88px 0' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 48 }}>
          <div className="eyebrow"><span className="dot" />What partners get</div>
          <h2 className="section-title" style={{ marginTop: 14 }}>A partnership, not a channel program.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {items.map((it, i) => (
            <div key={i} className="card" style={{ padding: 28 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: PS.gray, letterSpacing: 0.06 * 11, textTransform: 'uppercase', fontVariantNumeric: 'tabular-nums' }}>0{i + 1}</div>
              <div className="serif" style={{ fontSize: 20, color: PS.charcoal, marginTop: 10, marginBottom: 10, letterSpacing: -0.01 * 20 }}>{it.t}</div>
              <div style={{ fontSize: 14, color: PS.slate, lineHeight: 1.55 }}>{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCohort() {
  return (
    <section style={{ padding: '88px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 40px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="dot" />Launch cohort</div>
          <h2 className="section-title" style={{ marginTop: 14 }}>Selected launch partners.</h2>
          <p className="lede" style={{ margin: '16px auto 0' }}>Full list announced Q1 2026.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ aspectRatio: '3 / 1.3', background: 'var(--im-cloud)', border: '1px dashed var(--im-mist)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--im-gray)', fontSize: 11, fontWeight: 500, letterSpacing: 0.04 * 11, textTransform: 'uppercase' }}>Firm logo</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerForm() {
  const [s, setS] = useStatePT({ firm: '', contact: '', role: '', size: '', caseload: '', notes: '' });
  const [errs, setErrs] = useStatePT({});
  const [ok, setOk] = useStatePT(false);
  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!s.firm.trim()) er.firm = 'Firm name required.';
    if (!s.contact || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.contact)) er.contact = 'Valid email required.';
    if (!s.role) er.role = 'Select a role.';
    if (!s.size) er.size = 'Select a firm size.';
    setErrs(er);
    if (!Object.keys(er).length) setOk(true);
  };
  if (ok) {
    return (
      <div className="card" style={{ padding: 40, textAlign: 'center', borderColor: 'var(--im-blue-ice)' }}>
        <div style={{ width: 44, height: 44, borderRadius: 999, background: 'var(--im-blue-ice)', margin: '0 auto 14px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: PS.blueDeep }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <div className="serif" style={{ fontSize: 24, color: PS.charcoal, marginBottom: 6 }}>Application received.</div>
        <div style={{ fontSize: 15, color: PS.slate, maxWidth: 440, margin: '0 auto' }}>
          We review partner applications weekly. We'll be in touch within 10 business days with next steps and partnership terms.
        </div>
      </div>
    );
  }
  return (
    <form onSubmit={submit} noValidate style={{ display: 'grid', gap: 14 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div className="field">
          <label>Firm name</label>
          <input className={'input' + (errs.firm ? ' error' : '')} value={s.firm} onChange={e => setS({ ...s, firm: e.target.value })} placeholder="Meridian Immigration" />
          {errs.firm && <div className="field-error">{errs.firm}</div>}
        </div>
        <div className="field">
          <label>Partner contact</label>
          <input className={'input' + (errs.contact ? ' error' : '')} type="email" value={s.contact} onChange={e => setS({ ...s, contact: e.target.value })} placeholder="partner@firm.com" />
          {errs.contact && <div className="field-error">{errs.contact}</div>}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
        <div className="field">
          <label>Role</label>
          <select className={'select' + (errs.role ? ' error' : '')} value={s.role} onChange={e => setS({ ...s, role: e.target.value })}>
            <option value="">Select</option>
            <option>Partner</option>
            <option>Managing attorney</option>
            <option>Of counsel</option>
            <option>Firm operations</option>
            <option>Other</option>
          </select>
          {errs.role && <div className="field-error">{errs.role}</div>}
        </div>
        <div className="field">
          <label>Firm size</label>
          <select className={'select' + (errs.size ? ' error' : '')} value={s.size} onChange={e => setS({ ...s, size: e.target.value })}>
            <option value="">Select</option>
            <option>Solo</option>
            <option>2–10 attorneys</option>
            <option>10–50 attorneys</option>
            <option>50–200 attorneys</option>
            <option>200+ attorneys</option>
          </select>
          {errs.size && <div className="field-error">{errs.size}</div>}
        </div>
        <div className="field">
          <label>Approx. H-1B caseload / year</label>
          <select className="select" value={s.caseload} onChange={e => setS({ ...s, caseload: e.target.value })}>
            <option value="">Select</option>
            <option>&lt; 50</option>
            <option>50–250</option>
            <option>250–1,000</option>
            <option>1,000+</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label>What would you want ImmiHub to do for your firm?</label>
        <textarea className="textarea" value={s.notes} onChange={e => setS({ ...s, notes: e.target.value })} placeholder="The one piece of your workflow you'd most want software to own. What's broken today."></textarea>
      </div>
      <div style={{ marginTop: 6 }}>
        <button type="submit" className="btn btn-primary btn-lg">Become a launch partner</button>
      </div>
    </form>
  );
}

function PartnersFormSection() {
  return (
    <section id="apply" className="section-alt" style={{ padding: '96px 0' }}>
      <div className="container-narrow">
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <h2 className="section-title">Apply to become a launch partner.</h2>
          <p className="lede" style={{ margin: '18px auto 0' }}>
            Launch partnerships are signed individually. We talk to every firm.
          </p>
        </div>
        <PartnerForm />
        <div className="tiny" style={{ textAlign: 'center', marginTop: 28, maxWidth: 620, margin: '28px auto 0' }}>
          Launch partnership terms are confidential and signed individually. Contact{' '}
          <a href="mailto:partners@getimmihub.com" style={{ color: PS.blueDeep, fontWeight: 500 }}>partners@getimmihub.com</a>for details.
        </div>
      </div>
    </section>
  );
}

function PartnersPage() {
  return (
    <div>
      <Nav active="partners" />
      <main data-screen-label="Partners">
        <PartnersHero />
        <PartnerBenefits />
        <PartnerCohort />
        <PartnersFormSection />
      </main>
      <Footer />
    </div>
  );
}

Object.assign(window, { PartnersPage });
