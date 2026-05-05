// /institutions/leadership

function LeadCard({ tag, roleNote, bullets, cta, onDownload }) {
  return (
    <div className="lead-card">
      <div>
        <div className="tag">{tag}</div>
        <div className="role-note">{roleNote}</div>
      </div>
      <div>
        <ul>{bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
        {cta && <button className="btn btn-ghost" onClick={onDownload}><Ico.Download style={{width:14, height:14}}/>{cta}</button>}
      </div>
    </div>
  );
}

function LeadershipForm() {
  const [data, setData] = useState({name:'', role:'', institution:'', email:'', note:''});
  const [done, setDone] = useState(false);
  const [err, setErr] = useState({});
  const set = (k) => (e) => setData(d => ({...d, [k]: e.target.value}));
  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (!data.name) x.name = 'Required';
    if (!data.role) x.role = 'Required';
    if (!data.institution) x.institution = 'Required';
    if (!data.email || !/^[^@]+@[^@]+\.[^@]+$/.test(data.email)) x.email = 'Please enter a valid email';
    setErr(x);
    if (!Object.keys(x).length) setDone(true);
  };
  if (done) return (
    <div className="form-success">
      <h4>Thank you.</h4>
      <p>Your note is with the founding team. We'll reply within a week from partnerships@getimmihub.com with a short call to understand {data.institution}'s current situation.</p>
    </div>
  );
  return (
    <form className="form-grid" onSubmit={submit} noValidate>
      <div className="field">
        <label>Your name</label>
        <input value={data.name} onChange={set('name')} />
        {err.name && <div className="field-error">{err.name}</div>}
      </div>
      <div className="field">
        <label>Role</label>
        <select value={data.role} onChange={set('role')}>
          <option value="">Select…</option>
          <option>Provost</option>
          <option>VP International</option>
          <option>General Counsel</option>
          <option>CIO</option>
          <option>Registrar</option>
          <option>Other</option>
        </select>
        {err.role && <div className="field-error">{err.role}</div>}
      </div>
      <div className="field full">
        <label>Institution</label>
        <input value={data.institution} onChange={set('institution')} />
        {err.institution && <div className="field-error">{err.institution}</div>}
      </div>
      <div className="field full">
        <label>Work email</label>
        <input type="email" value={data.email} onChange={set('email')} />
        {err.email && <div className="field-error">{err.email}</div>}
      </div>
      <div className="field full">
        <label>What's your institution's current situation with SEVIS compliance tooling?</label>
        <textarea value={data.note} onChange={set('note')} placeholder="A few sentences is plenty — we're trying to understand whether we're a fit."></textarea>
      </div>
      <div className="full" style={{display:'flex', justifyContent:'flex-end', marginTop: 8}}>
        <button type="submit" className="btn btn-primary btn-lg">Join the leadership waitlist</button>
      </div>
    </form>
  );
}

function LeadershipPage() {
  const [modal, setModal] = useState(null);
  return (
    <>
      <Nav active="leadership" />
      <section className="hero">
        <div className="container" style={{maxWidth: 820}}>
          <div className="eyebrow">For university leadership</div>
          <h1>A brief for university leadership.</h1>
          <p className="lede">For Provosts, Vice Provosts for International Affairs, General Counsel, and Chief Information Officers. This page summarizes what ImmiHub is, what it is not, and what institutional evaluation will look like ahead of 2026 launch.</p>
        </div>
      </section>
      <section className="section" style={{background:'#fff'}}>
        <div className="container" style={{maxWidth: 1000}}>
          <LeadCard
            tag="For the Provost"
            roleNote="Strategic framing. International students are an institutional priority; this is the compliance layer your ISSS office has been asking for."
            bullets={[
              'ImmiHub is the compliance layer your ISSS office has been asking for. It does not replace advising, admissions, or your SIS.',
              'International students are a strategic institutional priority — ImmiHub reduces the risk of status violations that cost your institution tuition revenue, reputational harm, and in extreme cases, SEVP recertification findings.',
              'Waitlist members receive founding pricing, direct product-team access, and priority consideration for the 2026 launch cohort.',
            ]}
            cta="Download the Provost brief (PDF)"
            onDownload={() => setModal('Provost brief')}
          />
          <LeadCard
            tag="For General Counsel"
            roleNote="Compliance and risk posture. The honest answer on SEVIS is the headline."
            bullets={[
              'ImmiHub does not integrate with SEVIS. Your DSOs continue to file in SEVIS as they do today.',
              'FERPA posture: row-level RBAC, PII masking by role, audit-logged student record access, FERPA consent flows for third-party sharing.',
              'Every DSO action is logged with name, timestamp, and IP — DHS audit and SEVP recertification ready.',
              'SOC 2 Type II planned for 2026, following launch. Interim security posture documentation available under NDA.',
              'Data hosted in AWS US-East. US-only residency.',
              'Standard data processing agreement available; modifications negotiable during pilot.',
            ]}
            cta="Download the FERPA & security posture (PDF)"
            onDownload={() => setModal('FERPA & security posture')}
          />
          <LeadCard
            tag="For the CIO"
            roleNote="Integration, identity, and infrastructure. SaaS only, hosted in AWS US-East."
            bullets={[
              'SSO via SAML 2.0 (Okta, Azure AD, Shibboleth).',
              'SIS integration via SFTP nightly batch or REST API (Banner, Workday, Ellucian supported at launch).',
              'Standard VPN and IP allowlisting available for API access.',
              '99.9% uptime SLA in the Research University tier and above.',
              'No on-premises deployment — SaaS only, hosted in AWS US-East.',
              'Data export guaranteed in contract termination (90-day window).',
            ]}
            cta="Download the technical brief (PDF)"
            onDownload={() => setModal('Technical brief')}
          />
          <LeadCard
            tag="For the Registrar"
            roleNote="Read-only of your SIS. Never writes back. Course-linkage validation for CPT references your catalog."
            bullets={[
              'Import enrollment and program data from your SIS via nightly SFTP.',
              'Read-only of your SIS; ImmiHub never writes back to your student record.',
              'Termination events generated in ImmiHub are flagged for your confirmation before SEVIS filing.',
              'Course-linkage validation for CPT requests references your course catalog.',
            ]}
          />
        </div>
      </section>
      <section id="waitlist" className="section section-alt">
        <div className="container" style={{maxWidth: 820}}>
          <div className="section-head" style={{textAlign:'center', margin:'0 auto 40px'}}>
            <div className="eyebrow-muted">Leadership waitlist</div>
            <h2>Ready to have your ISSS team evaluate ImmiHub?</h2>
            <p style={{margin:'0 auto'}}>Drop a note and we'll get back to you within a week. Not a demo funnel — a direct line to the founding team.</p>
          </div>
          <div className="form-card">
            <LeadershipForm />
          </div>
          <p style={{textAlign:'center', fontSize: 13, color:'var(--fg-3)', marginTop: 20}}>
            Or write directly: <a href="mailto:partnerships@getimmihub.com" style={{color:'var(--im-blue-deep)'}}>partnerships@getimmihub.com</a>
          </p>
        </div>
      </section>
      <Footer />
      <DownloadModal open={!!modal} onClose={() => setModal(null)} title={modal || ''} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<LeadershipPage />);
