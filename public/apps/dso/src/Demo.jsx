// /institutions/demo — scrollytelling

function Scene({ stamp, title, body, shot, idx, total }) {
  const ref = React.useRef(null);
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVis(e.isIntersecting), { threshold: 0.25 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} className="scroll-scene" style={{opacity: vis ? 1 : 0.25, transition: 'opacity 520ms var(--ease-out)'}}>
      <div className="narr">
        <div className="stamp">Scene {idx} of {total} · {stamp}</div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div style={{transform: vis ? 'translateY(0)' : 'translateY(12px)', transition: 'transform 520ms var(--ease-out)'}}>
        <div className="product-shot">
          <Mockup kind={shot} />
        </div>
      </div>
    </section>
  );
}

function DemoPage() {
  const scenes = [
    ['Thursday, April 16 · 08:02', 'The 8am dashboard.', 'Priya, ISSS Director, opens Overview before her team arrives. Two SEVIS reports due this week. Forty-five new arrivals awaiting check-in. Nine students flagged at risk. She knows where the day goes before her coffee is done.', 'overview'],
    ['08:14 · Yuki Tanaka', '17 days to program end.', 'Yuki — PhD candidate in Mechanical Engineering — has an extension on file with the graduate school since April 2. The advisor form is pending. The risk pill is red. Priya knows this because the drawer tells her, not because she remembered.', 'drawer'],
    ['08:22 · Aisha Patel', 'STEM OPT, 19 days overdue.', 'Aisha\'s employer missed the six-month E-Verify validation. Priya emailed HR twice. The risk signal has been escalating since Monday. It will keep escalating — audibly, on the dashboard — until someone confirms.', 'overview'],
    ['08:34 · Rohan Mehta', 'Summer CPT, ready to approve.', 'Offer letter from Grafton Capital uploaded. ECON 498 course mapping confirmed by the department. Faculty advisor approval on file. One-click approve. The decision is logged with Priya\'s name, timestamp, and IP before she takes the next sip.', 'requests'],
    ['09:10 · Naledi Mokoena', 'OPT ending in 89 days.', 'Naledi is eligible for a STEM OPT extension. Her employer is E-Verify registered. Priya opens the Employment tab in the drawer, confirms eligibility, and starts the pre-filled 2-month timeline.', 'drawer'],
    ['11:20 · Pre-departure', 'Forty-five students need travel signatures.', 'Spring break is three weeks away. The batch I-20 reprint workflow runs through four steps: Select, Review & sign, Generate PDFs, Ready for pickup. Each signature audit-logged. Forty-five envelopes sorted by pickup window.', 'batch'],
    ['14:02 · Back to Yuki', 'What if the program end shifts by four months?', 'Before filing anything, Priya runs the What-If simulator. New grace period. OPT earliest start shifts. SEVIS report becomes "program extension" instead of "completion." CPT eligibility holds. Five downstream effects, zero surprises.', 'whatif'],
    ['Friday, 16:40', 'The audit log.', 'Every action Priya and her team took this week, with timestamps, IPs, and targets. Monospace, chronological, PDF-ready. When SEVP recertification comes around, this is the binder General Counsel wants.', 'audit'],
  ];
  return (
    <>
      {mockupStyleTag()}
      <Nav active="demo" />
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Guided demo · no signup</div>
          <h1>A Thursday morning in an ISSS office,<br/>in three minutes.</h1>
          <p className="lede">A guided walkthrough of ImmiHub. No sign-up, no sales call, no scheduled demo. Scroll through the day below.</p>
          <div className="hero-ctas">
            <a className="btn btn-primary btn-lg" href="#scene-1">Start the tour <Ico.ArrowRight style={{width:14, height:14}}/></a>
          </div>
          <div className="hero-trust">Based on a composite of the work ISSS offices do every week. Names and IDs are fictional.</div>
        </div>
      </section>
      <section style={{background:'#fff'}} id="scene-1">
        <div className="container-wide">
          {scenes.map((s, i) => (
            <Scene key={i} idx={i+1} total={scenes.length} stamp={s[0]} title={s[1]} body={s[2]} shot={s[3]} />
          ))}
        </div>
      </section>
      <section className="section section-alt">
        <div className="container" style={{maxWidth: 780, textAlign:'center'}}>
          <div className="eyebrow-muted">Closing frame</div>
          <h2 className="serif" style={{fontSize: 44, fontWeight: 400, margin: '8px 0 20px', letterSpacing:'-0.02em'}}>This is ImmiHub for Institutions.</h2>
          <p style={{fontSize: 17, color:'var(--fg-2)', maxWidth: 620, margin:'0 auto 28px'}}>Coming 2026. Join the waitlist to see alpha builds and shape the roadmap.</p>
          <div style={{display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap'}}>
            <a className="btn btn-primary btn-lg" href="index.html#waitlist">Join the waitlist</a>
            <a className="btn btn-ghost btn-lg" href="deployment.html">Download the institutional overview</a>
            <a className="btn btn-ghost btn-lg" href="features.html">See features <Ico.ArrowRight style={{width:14, height:14}}/></a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<DemoPage />);
