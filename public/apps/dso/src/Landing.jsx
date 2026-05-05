// Landing page — /institutions

const { useState: useS, useEffect: useE } = React;

function Landing() {
  const [tab, setTab] = useS('overview');
  const tabs = [
    ['overview', 'Overview'],
    ['sevis', 'SEVIS Queue'],
    ['arrivals', 'New Arrivals'],
    ['drawer', 'Student Drawer'],
    ['whatif', 'What-If Simulator'],
    ['batch', 'Batch I-20'],
    ['audit', 'Audit Trail'],
  ];
  const caps = {
    overview: 'The Thursday 8am dashboard. KPI row, 30-day reporting calendar, and risk-first student list in one view.',
    sevis: 'Every reportable event ordered by days-left, with blockers surfaced inline. The DSO still files in SEVIS — ImmiHub just makes sure it happens on time.',
    arrivals: 'Initial registration 30-day federal window tracked from I-20 issue through SEVIS registration.',
    drawer: 'Student record with F-1 journey timeline, signature history, and one-click DSO actions.',
    whatif: 'Preview every downstream effect of a program-end change before committing — the single most differentiated screen in the product.',
    batch: 'Pre-departure season in one workflow. Select, review, sign, generate — audit-logged throughout.',
    audit: 'Every DSO action with actor, timestamp, and IP. Monospace timestamps. PDF-ready for DHS audits and SEVP recertification.',
  };

  return (
    <>
      {mockupStyleTag()}
      <Nav active="product" />

      {/* 1.1 HERO */}
      <section className="hero">
        <div className="container-wide" style={{display:'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems:'center'}}>
          <div>
            <div className="eyebrow">ImmiHub for Institutions · Coming 2026</div>
            <h1>International student compliance,<br/>without the spreadsheets.</h1>
            <p className="lede">Built for Designated School Officials, PDSOs, and ISSS advisors who are federally responsible for F-1 and J-1 student status — and spend their mornings reconstructing reporting deadlines from email.</p>
            <div className="hero-ctas">
              <a className="btn btn-primary btn-lg" href="#waitlist">Join the waitlist</a>
              <a className="btn btn-ghost btn-lg" href="#product-glimpse">See the product <Ico.ArrowRight style={{width:14, height:14}}/></a>
            </div>
            <div className="hero-trust">For SEVP-certified institutions. Waitlist opening now — launch cohort 2026.</div>
          </div>
          <div>
            <div className="product-shot">
              <Mockup kind="overview" />
            </div>
          </div>
        </div>
      </section>

      {/* 1.2 STAT BAND */}
      <section style={{background: '#fff'}}>
        <div className="container">
          <div style={{padding: '60px 0 20px'}}>
            <div className="eyebrow-muted">The domain we built for</div>
            <h2 className="serif" style={{fontSize: 32, fontWeight: 400, margin: '8px 0 0', color: 'var(--fg-1)'}}>Federal rules, not product features.</h2>
          </div>
          <div className="stat-band">
            {[
              ['21 days', 'the federal reporting window for SEVIS events. Miss it and the student\'s record is out of status.'],
              ['12 months', 'validity of a travel signature. Stale signatures ground students at the border.'],
              ['30 days', 'initial registration window for new arrivals. Miss it and the student never enters Active status.'],
            ].map((s, i) => (
              <div key={i} className="stat-row">
                <div className="stat-num">{s[0]}</div>
                <div className="stat-desc">— {s[1]}</div>
              </div>
            ))}
          </div>
          <p style={{fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 15, color: 'var(--fg-3)', margin: '20px 0 60px', maxWidth: 640}}>
            These are federal rules, not product features. We built ImmiHub around them.
          </p>
        </div>
      </section>

      {/* 1.3 FEATURE GRID */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-muted">What ImmiHub does</div>
            <h2>Six things an ISSS office stops reconstructing from email.</h2>
          </div>
          <div className="feat-grid">
            {[
              ['Calendar', 'Every SEVIS deadline, visualized.', 'The 30-day reporting calendar shows every federal filing ordered by days-left, with blockers surfaced inline. Reportable events surface before they\'re overdue, not after.', 'No more spreadsheets for reporting windows.'],
              ['FileText', 'The I-20 lifecycle, from issue to reprint.', 'Travel signature history with the 12-month USCIS rule built in. Batch reprint workflow for pre-travel season. Program extension as a first-class request type.', 'No more searching for who signed what, when.'],
              ['Inbox', 'Student requests, triaged.', 'CPT, OPT, travel signatures, program extensions, and reduced course loads submitted by students arrive in one inbox with urgency, documents, and summary.', 'Approve, decline, or request more info — with DSO name attached to every decision.'],
              ['AlertTriangle', 'Risk detection built for F-1/J-1.', 'Not generic at-risk flags — specific signals: i20-expiring, everify-overdue, termination-report, travel-sig-stale, registration-due, rcl-review, ead-expiring.', 'Your Thursday 8am dashboard shows exactly what falls out of status this week.'],
              ['Shield', 'Audit-defensible by design.', 'Every DSO action logged with name, timestamp, and IP. PDF export ready for DHS audits, SEVP recertification, and General Counsel reviews.', 'Monospace timestamps so auditors can read them.'],
              ['Users', 'Workload you can see.', 'Caseload visualization across your DSO team, auto-assignment rules for new I-20s, PDSO-level oversight.', 'No one is quietly drowning.'],
            ].map((f, i) => {
              const Ic = Ico[f[0]];
              return (
                <div key={i} className="feat-cell">
                  <Ic className="feat-ico" />
                  <h3>{f[1]}</h3>
                  <p>{f[2]}</p>
                  <em>{f[3]}</em>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 1.4 TAB SWITCHER */}
      <section id="product-glimpse" className="section" style={{background:'#fff'}}>
        <div className="container-wide">
          <div className="section-head" style={{maxWidth: 760, marginBottom: 40}}>
            <div className="eyebrow-muted">The product</div>
            <h2>Seven screens your ISSS team will use every day.</h2>
            <p>Real screens, real data shapes. Select a screen to see what a DSO actually works with.</p>
          </div>
          <div className="tabs-bar">
            {tabs.map(([id, label]) => (
              <button key={id} className={`tab-btn ${tab === id ? 'active' : ''}`} onClick={() => setTab(id)}>{label}</button>
            ))}
          </div>
          <div className="product-shot" style={{minHeight: 600}}>
            <Mockup kind={tab} />
          </div>
          <p style={{marginTop: 16, fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 15, color:'var(--fg-3)', maxWidth: 720}}>
            — {caps[tab]}
          </p>
        </div>
      </section>

      {/* 1.5 THREE COL — Built for */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-muted">Built for the way ISSS works</div>
            <h2>Three roles, one portal.</h2>
          </div>
          <div className="three-col">
            {[
              ['User', 'For DSOs', ['Student drawer with F-1 journey, risk signals, and one-click actions.', 'Message templates for consistent, defensible replies.', 'Appointment scheduling that writes back to the student record.']],
              ['Users', 'For PDSOs', ['Caseload dashboard across your DSO team, week over week.', 'Auto-assignment rules for incoming I-20s by program or cohort.', 'Activity feed and full audit trail, PDSO-scoped.']],
              ['BarChart', 'For ISSS Directors', ['Monthly compliance summary sized for the Provost\'s inbox.', 'Cohort analytics by program, country of origin, and status mix.', 'Procurement-ready reports — PDF and CSV, scheduled or ad-hoc.']],
            ].map((c, i) => {
              const Ic = Ico[c[0]];
              return (
                <div key={i}>
                  <Ic className="col-ico" />
                  <h3>{c[1]}</h3>
                  <ul>{c[2].map((b, j) => <li key={j}>{b}</li>)}</ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 1.6 NOT */}
      <section className="section" style={{background:'#fff'}}>
        <div className="container" style={{maxWidth: 960}}>
          <div className="not-card">
            <h2>What ImmiHub is not.</h2>
            <div className="not-list">
              {[
                ['Not a SEVIS integration.', 'SEVIS is a federal DHS system that requires SEVP certification. ImmiHub visualizes the reporting window and coordinates the workflow — the DSO still files in SEVIS. Any vendor claiming direct SEVIS integration is either misleading or doing unauthorized scraping.'],
                ['Not a student information system.', 'Banner, Workday Student, and Ellucian own academic records. ImmiHub lives alongside them, pulling enrollment and course data as needed.'],
                ['Not an advising CRM.', 'We track the federal compliance layer. Academic advising stays in your existing tools.'],
              ].map((n, i) => (
                <div key={i} className="not-item">
                  <strong>{n[0]}</strong>
                  <p>{n[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 1.7 ROADMAP */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-muted">What we're building toward</div>
            <h2>The 2026 roadmap.</h2>
            <p>Waitlist members shape the roadmap. Launch cohort invitations extended based on institutional fit, not order of signup.</p>
          </div>
          <div className="roadmap">
            {[
              ['Q1 2026', 'In alpha with founding team.', 'Waitlist open. Product demos with design partners underway.', true],
              ['Q2 2026', 'Institutional review period.', 'Provost briefs, security assessments, and procurement reviews with waitlist members.'],
              ['Q3 2026', 'Launch cohort.', '3–5 SEVP-certified institutions deployed with founding pricing and direct product-team access.'],
              ['Q4 2026', 'General availability.', 'Open for all SEVP-certified institutions. J-1 Responsible Officer workspace begins rolling out.'],
            ].map((q, i) => (
              <div key={i} className={`roadmap-card ${q[3] ? 'current' : ''}`}>
                <div className="qtr">{q[0]}</div>
                <h4>{q[1]}</h4>
                <p>{q[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.8 WAITLIST */}
      <section id="waitlist" className="section" style={{background:'#fff'}}>
        <div className="container" style={{maxWidth: 860}}>
          <div className="section-head" style={{textAlign: 'center', margin: '0 auto 40px'}}>
            <div className="eyebrow-muted">Institutional waitlist</div>
            <h2>Run an ISSS office? Get on the list.</h2>
            <p style={{margin:'0 auto'}}>We're building ImmiHub for institutions that take F-1 and J-1 compliance seriously. Waitlist members are the first to see alpha builds, shape the roadmap, and receive launch-cohort invitations.</p>
          </div>
          <div className="form-card">
            <WaitlistForm variant="landing" />
          </div>
          <p style={{textAlign: 'center', fontSize: 13, color:'var(--fg-3)', marginTop: 20}}>
            Representing the Provost, General Counsel, or CIO? <a href="leadership.html" style={{color:'var(--im-blue-deep)'}}>See our leadership brief →</a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Landing />);
