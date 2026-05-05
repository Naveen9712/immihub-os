// Features page — /employers/features
function FeaturesHero() {
  return (
    <section style={{ padding: '96px 0 48px' }}>
      <div className="container">
        <div style={{ maxWidth: 820 }}>
          <div className="eyebrow"><span className="dot" />Features</div>
          <h1 className="display-xl" style={{ marginTop: 20, marginBottom: 22 }}>
            Everything your team needs.<br/>Nothing you don't.
          </h1>
          <p className="lede" style={{ maxWidth: 720 }}>
            We built ImmiHub for teams that already work with immigration attorneys and want software that doesn't replace them, but makes sure nothing falls through the cracks.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 36, borderTop: '1px solid var(--im-mist)', paddingTop: 24 }}>
          {[
            ['compliance', 'Compliance'],
            ['risk', 'Risk & deadlines'],
            ['cases', 'Case management'],
            ['intake', 'Smart intake'],
            ['audit', 'Audit & reporting'],
          ].map(([k, l]) => (
            <a key={k} href={'#' + k} style={{ padding: '8px 14px', borderRadius: 999, border: '1px solid var(--im-mist)', fontSize: 13, color: 'var(--im-slate)', fontWeight: 500, background: '#fff', textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureSection({ id, eyebrow, title, bullets, Screen, alt, flip }) {
  // Scale the product screen down so its exact layout + content fit comfortably
  // in the right column without cramping. CSS transform preserves everything.
  const SCALE = 0.78;
  // Actual rendered height ≈ 640 * SCALE — we reserve that so the scaled
  // window doesn't leave whitespace below it.
  return (
    <section id={id} style={{ padding: '64px 0', background: alt ? 'var(--im-cloud)' : 'transparent' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 56, alignItems: 'center', direction: flip ? 'rtl' : 'ltr' }}>
          <div style={{ direction: 'ltr' }}>
            <div className="eyebrow"><span className="dot" />{eyebrow}</div>
            <h2 className="section-title" style={{ marginTop: 14, marginBottom: 22, fontSize: 'clamp(28px, 2.8vw, 36px)' }}>{title}</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {bullets.map((b, i) => (
                <li key={i} style={{ padding: '12px 0', borderTop: i ? '1px solid var(--im-mist)' : 'none', fontSize: 15, color: 'var(--im-slate)', lineHeight: 1.55, display: 'flex', gap: 12 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={PS.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}><path d="M20 6L9 17l-5-5"/></svg>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ direction: 'ltr', overflow: 'hidden' }}>
            <div className="prod-window" style={{ transform: `scale(${SCALE})`, transformOrigin: flip ? 'right center' : 'left center', width: (100 / SCALE) + '%' }}>
              <div className="prod-window-bar">
                <div className="dot" /><div className="dot" /><div className="dot" />
                <div className="addr">app.immihub.ai/employers</div>
              </div>
              <Screen />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesBottomCTA() {
  return (
    <section style={{ padding: '96px 0' }}>
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <h2 className="section-title" style={{ marginBottom: 18 }}>This is what we're building.<br/>Come see it live.</h2>
        <p className="lede" style={{ margin: '0 auto 32px' }}>Walk through the product in a three-minute scrollable tour. No sign-up required.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="demo.html" className="btn btn-primary btn-lg">See the demo</a>
          <a href="#waitlist" className="btn btn-ghost btn-lg">Join the waitlist</a>
        </div>
      </div>
    </section>
  );
}

function FeaturesPage() {
  return (
    <div>
      <Nav active="features" />
      <main data-screen-label="Features">
        <FeaturesHero />
        <hr className="hairline" />
        <FeatureSection id="compliance" eyebrow="01 · Compliance tracking" title="Track every document, every visa, every deadline."
          bullets={[
            'Per-employee expiry runway bars with color-coded urgency.',
            'Automatic tracking for H-1B, L-1A/B, O-1, TN, STEM OPT, green card, EAD, Advance Parole, I-94, passport, and visa stamps.',
            'Per-visa compliance rollups — percent of H-1Bs healthy, percent in warning.',
            'Worksite-level LCA posting status and Public Access File readiness.',
            'Acknowledgment tracking per employee for policy, NDA, handbook.',
          ]} Screen={ScreenEmployees} />
        <FeatureSection id="risk" alt flip eyebrow="02 · Risk & deadlines" title="The deadlines you can't miss — surfaced automatically."
          bullets={[
            '3-tier risk model: Critical, Warning, Healthy.',
            '60-day grace-period tracker with day-by-day countdown.',
            '3-day I-9 §2 hard deadline with an overdue state.',
            'Cap-gap detection for STEM OPT → H-1B transitions.',
            'Pre-travel re-entry risk scoring per trip.',
            'Live compliance ticker — optional, toggleable.',
          ]} Screen={ScreenGracePeriod} />
        <FeatureSection id="cases" eyebrow="03 · Case management" title="Work alongside your attorney, not in isolation."
          bullets={[
            '4-stage Kanban: Draft → Filed → RFE → Approved.',
            'USCIS receipt number tracking — EAC-, LIN-, MSC-.',
            'Attorney assignment per case.',
            'Deadline countdowns with overdue states.',
            'Priority stripe: high, medium, low.',
            'Read-only shared workspace for your immigration firm.',
          ]} Screen={ScreenCases} />
        <FeatureSection id="intake" alt flip eyebrow="04 · Smart intake" title="Stop forwarding USCIS mail by hand."
          bullets={[
            'Dedicated forwarding address per organization.',
            'Auto-parsed form type, receipt number, employee match.',
            'Confidence scoring — high confidence auto-files; low confidence flags for review.',
            'Unrecognized sender pill for manual triage.',
          ]} Screen={ScreenInbox} />
        <FeatureSection id="audit" eyebrow="05 · Audit & reporting" title="One-click audit binders. Twelve-month trends."
          bullets={[
            'Generate redacted audit binders: I-9s, PAFs, LCAs, PWDs, recruitment records, benefits parity.',
            'Configurable PII redaction — SSN, passport, DOB, address, bank.',
            '12-month compliance trend with sparkline charts.',
            'Per-attorney performance — RFE rate, approval rate, avg time in stage.',
            'Six report templates with CSV and PDF export.',
          ]} Screen={ScreenAudit} />
        <FeaturesBottomCTA />
      </main>
      <Footer />
    </div>
  );
}

Object.assign(window, { FeaturesPage });
