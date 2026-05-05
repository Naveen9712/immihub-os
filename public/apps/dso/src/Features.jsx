// /institutions/features — Feature deep-dive

function DeepRow({ id, title, bullets, shots }) {
  return (
    <div className="deep-row" id={id}>
      <div>
        <div className="eyebrow-muted">{title.eyebrow}</div>
        <h3>{title.main}</h3>
        <ul>{bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
      </div>
      <div className="shots">
        {shots.map((s, i) => (
          <div key={i} className="product-shot">
            <Mockup kind={s} />
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturesPage() {
  const [modal, setModal] = useState(false);
  const sections = [
    {
      id: 'compliance-calendar',
      title: { eyebrow: 'Compliance calendar', main: 'Every federal deadline, in one place.' },
      bullets: [
        '30-day SEVIS reporting calendar on the Overview dashboard',
        'Every reportable event ordered by days-left',
        'Blocker reasons surfaced inline (employer response pending, registrar confirm, advisor form pending)',
        'Termination report workflow with federal window tracking',
        'Initial registration 30-day window tracker (New Arrivals funnel)',
        'STEM OPT E-Verify 6-month validation surfacing',
      ],
      shots: ['overview', 'sevis'],
    },
    {
      id: 'student-lifecycle',
      title: { eyebrow: 'Student lifecycle', main: 'From Initial to Completed, tracked in one record.' },
      bullets: [
        'F-1 statuses tracked: Active, Initial, CPT, OPT, STEM OPT, Terminated, Completed, Transfer In, Transfer Out',
        'J-1 support on roadmap: Responsible Officer workspace, DS-2019 lifecycle, Two-Year Home Residency flags',
        'Days-remaining pill computed from program end',
        'F-1 journey timeline visualization in the student drawer',
        'Status mix analytics per cohort and program',
      ],
      shots: ['drawer'],
    },
    {
      id: 'requests',
      title: { eyebrow: 'Requests & approvals', main: 'Student-submitted requests, triaged.' },
      bullets: [
        'Inbox for student-submitted requests: CPT, OPT, travel signatures, program extensions, RCL',
        'Urgency tiering, attached document count, and one-line summary on every card',
        'Approve / decline / request more info — all with DSO name attached',
        'Every decision logged with actor, timestamp, and IP',
        'Pre-approved message templates for consistent DSO replies',
      ],
      shots: ['requests'],
    },
    {
      id: 'i20',
      title: { eyebrow: 'I-20 management', main: 'The I-20 lifecycle, from issue to reprint.' },
      bullets: [
        'Issue a new I-20 directly from the student drawer',
        'Travel signature history with the 12-month USCIS validity window built in',
        'Sign travel endorsements with one click',
        'Batch I-20 reprint workflow for pre-travel season: Select → Review & sign → Generate PDFs → Ready for pickup',
        'Program extension as a first-class request type',
      ],
      shots: ['batch', 'drawer'],
    },
    {
      id: 'audit',
      title: { eyebrow: 'Audit & reporting', main: 'Audit-defensible by design.' },
      bullets: [
        'Every DSO action logged with actor, timestamp, and IP',
        'Monospace timestamp display, because auditors read them that way',
        'PDF export of the full audit trail',
        'Report templates: Monthly compliance summary (Provost), OPT placement (Career Services), Country-of-origin mix (DEI/GC), Termination log (Registrar), DSO activity audit (Internal Audit)',
        'Scheduled and ad-hoc exports — PDF and CSV',
      ],
      shots: ['audit'],
    },
    {
      id: 'risk',
      title: { eyebrow: 'Risk detection', main: 'Specific signals, not a generic at-risk score.' },
      bullets: [
        'Risk flags specific to F-1/J-1: i20-expiring, everify-overdue, cpt-pending, termination-report, travel-sig-stale, registration-due, rcl-review, ead-expiring',
        'Per-student risk level (none / medium / high / critical)',
        'Risk-first dashboard layout option',
        'What-If simulator: preview downstream effects of a program-end change before committing — new grace period, OPT earliest start, SEVIS report required, CPT impact',
      ],
      shots: ['whatif'],
    },
  ];
  return (
    <>
      {mockupStyleTag()}
      <Nav active="features" />
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Features · documentation</div>
          <h1>The specifics, for people who want them.</h1>
          <p className="lede">Feature documentation for DSOs, Registrars, and General Counsel evaluating ImmiHub ahead of 2026 launch. Use the anchor pills to jump to a section; download the full set as a PDF.</p>
          <div className="hero-ctas">
            <button className="btn btn-primary btn-lg" onClick={() => setModal(true)}><Ico.Download style={{width:14, height:14}}/> Download all features (PDF)</button>
            <a className="btn btn-ghost btn-lg" href="#waitlist">Join the waitlist</a>
          </div>
        </div>
        <div className="container" style={{marginTop: 32}}>
          <div className="anchor-pills">
            {sections.map(s => <a key={s.id} href={`#${s.id}`} className="anchor-pill">{s.title.eyebrow}</a>)}
          </div>
        </div>
      </section>
      <section style={{background:'#fff'}}>
        <div className="container">
          {sections.map(s => <DeepRow key={s.id} {...s} />)}
        </div>
      </section>
      <section id="waitlist" className="section section-alt">
        <div className="container" style={{maxWidth: 720, textAlign:'center'}}>
          <div className="eyebrow-muted">Closing</div>
          <h2 className="serif" style={{fontSize: 44, fontWeight: 400, margin:'8px 0 20px', letterSpacing:'-0.02em'}}>Questions? Good.</h2>
          <p style={{fontSize: 17, color:'var(--fg-2)', margin:'0 auto 28px', maxWidth: 560}}>Feature-level questions are the first signal an institution is serious. We answer them directly, not through a demo funnel.</p>
          <div style={{display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap'}}>
            <a className="btn btn-primary btn-lg" href="index.html#waitlist">Join the waitlist</a>
            <a className="btn btn-ghost btn-lg" href="demo.html">See the guided demo <Ico.ArrowRight style={{width:14, height:14}}/></a>
          </div>
        </div>
      </section>
      <Footer />
      <DownloadModal open={modal} onClose={() => setModal(false)} title="Feature documentation PDF" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FeaturesPage />);
