// /institutions/deployment

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={onToggle}>
        <span>{q}</span>
        <Ico.Plus className="faq-toggle" />
      </button>
      <div className="faq-a">{a}</div>
    </div>
  );
}

function DeploymentPage() {
  const [open, setOpen] = useState(-1);
  const [modal, setModal] = useState(null);

  const faqs = [
    ['How does ImmiHub handle SEVIS?', 'We do not integrate directly with SEVIS. We coordinate the reporting workflow — your DSOs still file in SEVIS as they do today. The difference: they stop missing deadlines.'],
    ['How does ImmiHub handle FERPA?', 'Role-based access control with row-level permissions, PII masking for unauthorized roles, every student-record access audit-logged, and FERPA consent flows for third-party sharing. Full posture document available on request.'],
    ['Is ImmiHub SOC 2 certified?', 'SOC 2 Type II audit planned for 2026, following general-availability launch. Interim security posture documentation available under NDA to waitlist members.'],
    ['Where is data hosted?', 'AWS US-East. US-only data residency. No international data transfer.'],
    ['How does this integrate with Banner / Workday / Ellucian?', 'SIS import via nightly SFTP batch or REST API for supported systems. Real-time integration on the 2026 roadmap.'],
    ["What's the implementation timeline?", '4–8 weeks for small and mid-size institutions. 8–12 weeks for research universities. Data migration, SSO configuration, DSO training, and one academic cycle of parallel operation before cutover.'],
    ['Can we export our data if we leave?', 'Yes. Full data export in CSV and PDF formats at any time. Contract termination includes a guaranteed 90-day export window.'],
    ['Do you support J-1?', 'J-1 Responsible Officer workspace is on the 2026 roadmap, scheduled after initial F-1 launch.'],
    ['What about multi-campus systems with multiple SEVP school codes?', "Supported in the University System tier. Each campus's school code is preserved; consolidated reporting is available at the system level."],
    ['Is there a free trial?', 'Free trial is not practical at institutional scale due to integration work required. Instead: a 90-day pilot with a money-back guarantee if the deployment doesn\'t meet mutually agreed success criteria — available from launch cohort onward.'],
  ];

  const tiers = [
    { name: 'Small Institution', scope: 'Up to 200 F-1/J-1 students', amt: '$TBD', note: 'per student, per year', fit: 'Liberal arts colleges, community colleges, small private universities.', feats: ['Standard support', 'Standard integrations', 'Shared Slack channel'], cta: 'Join the waitlist' },
    { name: 'Mid-Size University', scope: '200 – 1,000 F-1/J-1 students', amt: '$TBD', note: 'per student, per year', fit: 'Teaching-focused universities and mid-size R2s.', feats: ['Dedicated onboarding', 'Direct Slack channel with product team', 'Priority email support'], cta: 'Join the waitlist', featured: true },
    { name: 'Research University', scope: '1,000 – 5,000 F-1/J-1 students', amt: 'Custom', note: 'volume-tiered', fit: 'R1 research universities with ISSS teams of 4+.', feats: ['Dedicated success manager', 'Quarterly roadmap input', 'Standard SSO (SAML)'], cta: 'Join the waitlist' },
    { name: 'University System', scope: '5,000+ students · multi-campus', amt: 'Custom', note: 'multi-campus pricing', fit: 'State systems and multi-campus institutions.', feats: ['Multi-campus deployment', 'Consolidated reporting', 'Custom SLA · dedicated infra'], cta: 'Contact the team' },
  ];

  // Feature comparison rows
  const compareRows = [
    ['Overview dashboard', 1, 1, 1, 1],
    ['Student directory', 1, 1, 1, 1],
    ['SEVIS reporting queue', 1, 1, 1, 1],
    ['Batch I-20 reprint', 1, 1, 1, 1],
    ['What-If simulator', '', 1, 1, 1],
    ['Full audit trail', 1, 1, 1, 1],
    ['Report templates', 1, 1, 1, 1],
    ['Multi-DSO caseload', 1, 1, 1, 1],
    ['Auto-assignment rules', '', 1, 1, 1],
    ['Message templates', 1, 1, 1, 1],
    ['SSO / SAML 2.0', '', '', 1, 1],
    ['Multi-campus consolidation', '', '', '', 1],
    ['Dedicated success manager', '', '', 1, 1],
    ['Custom SLA', '', '', '', 1],
  ];

  return (
    <>
      {mockupStyleTag()}
      <Nav active="deployment" />

      <section className="hero">
        <div className="container">
          <div className="eyebrow">Deployment · pricing · procurement</div>
          <h1>Deployment and pricing,<br/>for procurement committees.</h1>
          <p className="lede">Per-F-1/J-1 student per year, tiered by institution size. Launch pricing is being finalized with our first partner institutions. Waitlist members lock in founding rates.</p>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="section-sm" style={{background:'#fff'}}>
        <div className="container-wide">
          <div className="price-grid">
            {tiers.map((t, i) => (
              <div key={i} className={`price-card ${t.featured ? 'featured' : ''}`}>
                <div>
                  <div className="tier">{t.name}</div>
                  <div className="scope">{t.scope}</div>
                </div>
                <div>
                  <div className="amt">{t.amt} <small>{t.note}</small></div>
                </div>
                <div style={{fontSize: 13, color:'var(--fg-3)', lineHeight: 1.55}}>{t.fit}</div>
                <ul>{t.feats.map((f, j) => <li key={j}>{f}</li>)}</ul>
                <a href="#waitlist" className={`btn ${t.featured ? 'btn-primary' : 'btn-ghost'}`}>{t.cta}</a>
              </div>
            ))}
          </div>
          <p style={{fontSize: 13, color:'var(--fg-3)', marginTop: 20, fontStyle:'italic', fontFamily:'var(--font-serif)'}}>
            Pricing is per student per year, billed annually. Implementation is a one-time fee quoted during procurement.
          </p>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section section-alt">
        <div className="container-wide">
          <div className="section-head">
            <div className="eyebrow-muted">What's included</div>
            <h2>Feature availability by tier.</h2>
          </div>
          <table className="compare">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Small</th>
                <th>Mid-Size</th>
                <th>Research</th>
                <th>System</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((r, i) => (
                <tr key={i}>
                  <td>{r[0]}</td>
                  {r.slice(1).map((c, j) => (
                    <td key={j}>{c === 1 ? <span className="chk"><Ico.Check style={{width:16, height:16}}/></span> : <span className="dash">—</span>}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* WAITLIST BENEFITS */}
      <section className="section" style={{background:'#fff'}}>
        <div className="container" style={{maxWidth: 960}}>
          <div className="benefits">
            <div className="eyebrow">Founding cohort</div>
            <h3 style={{marginTop: 8}}>What waitlist members get.</h3>
            <ul>
              <li>First access to product alpha builds in Q1 2026.</li>
              <li>Founding pricing locked in for the life of the contract.</li>
              <li>Monthly roadmap updates, ahead of general availability.</li>
              <li>Direct feedback channel — your input shapes what ships.</li>
              <li>Priority consideration for the 2026 launch cohort.</li>
              <li>Option to be named on the "Launch partners" page at go-live (opt-in).</li>
            </ul>
            <a href="#waitlist" className="btn btn-primary btn-lg">Join the institutional waitlist</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container" style={{maxWidth: 880}}>
          <div className="section-head">
            <div className="eyebrow-muted">Procurement FAQ</div>
            <h2>Ten questions that come up in every procurement review.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f[0]} a={f[1]} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ARTIFACTS */}
      <section className="section" style={{background:'#fff'}}>
        <div className="container">
          <div className="section-head" style={{textAlign:'center', margin:'0 auto 48px'}}>
            <div className="eyebrow-muted">Downloadable artifacts</div>
            <h2>Three documents to forward internally.</h2>
            <p style={{margin:'0 auto'}}>Each is a short PDF written for a specific institutional audience. Drop your email and we'll send it.</p>
          </div>
          <div className="artifact-grid">
            {[
              ['Institutional overview', 'A 2-page PDF for Provosts and Vice Provosts. Strategic framing, pricing model, 2026 roadmap.'],
              ['FERPA & security posture', 'Technical document for General Counsel and CIOs. RBAC, data residency, audit logging, SOC 2 roadmap.'],
              ['Sample audit report', 'An example of the audit binder ImmiHub generates — DSO activity, student events, signature history.'],
            ].map((a, i) => (
              <div key={i} className="artifact-card">
                <div className="artifact-doc"><span>PDF</span></div>
                <h4>{a[0]}</h4>
                <p>{a[1]}</p>
                <button className="btn btn-ghost" onClick={() => setModal(a[0])}><Ico.Download style={{width:14, height:14}}/>Download</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM WAITLIST */}
      <section id="waitlist" className="section section-alt">
        <div className="container" style={{maxWidth: 860}}>
          <div className="section-head" style={{textAlign:'center', margin:'0 auto 40px'}}>
            <div className="eyebrow-muted">Institutional waitlist</div>
            <h2>Ready for your institution to evaluate?</h2>
          </div>
          <div className="form-card">
            <WaitlistForm variant="deployment" />
          </div>
        </div>
      </section>

      <Footer />
      <DownloadModal open={!!modal} onClose={() => setModal(null)} title={modal || 'Institutional overview'} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<DeploymentPage />);
