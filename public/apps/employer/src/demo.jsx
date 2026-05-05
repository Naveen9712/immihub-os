// Demo page — scrollytelling product tour
const { useState: useStateDM, useEffect: useEffectDM, useRef: useRefDM } = React;

function DemoHero() {
  return (
    <section style={{ padding: '96px 0 40px' }}>
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="dot" />Product tour · Coming 2026</div>
        <h1 className="display-xl" style={{ marginTop: 20, marginBottom: 22 }}>See ImmiHub in action.</h1>
        <p className="lede" style={{ margin: '0 auto 32px' }}>
          A three-minute walkthrough of the product. No sign-up required. Launching 2026.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#tour" className="btn btn-primary btn-lg">Start the tour ↓</a>
          <a href="#waitlist" className="btn btn-ghost btn-lg">Request a live demo at launch</a>
        </div>
      </div>
    </section>
  );
}

const TOUR = [
  { k: 'dashboard', eyebrow: '01 · The Monday dashboard', title: 'Monday, 9:02am.',
    copy: "Ananya opens ImmiHub. Three employees need attention today. The risk feed tells her who, why, and what's due — before the first coffee.",
    Screen: ScreenDashboard },
  { k: 'employees', eyebrow: '02 · The whole workforce', title: 'One directory. Every visa.',
    copy: "A sortable list of every sponsored employee, their visa, their expiry, and a runway bar showing exactly how many days are left. Filter by visa type, sort by expiring-first, export CSV.",
    Screen: ScreenEmployees },
  { k: 'drawer', eyebrow: '03 · One employee, in depth', title: 'Zooming in on Rahul.',
    copy: "Click any employee. Every document, every case, every upcoming trip — all on one surface. The travel card flags his Bengaluru trip in 9 days: visa stamp expired, medium re-entry risk.",
    Screen: ScreenEmployeeDrawer },
  { k: 'grace', eyebrow: '04 · The 60-day grace period', title: 'When someone falls off status.',
    copy: "Mateo Rivas was terminated 12 days ago. He has 48 days to find a new sponsor or depart. The cockpit tracks his day-by-day countdown, the filing deadline, and the required HR actions — so nothing is missed.",
    Screen: ScreenGracePeriod },
  { k: 'travel', eyebrow: '05 · Before they board', title: 'The re-entry advisory.',
    copy: "Ananya Varma is flying to Bengaluru in 9 days. Her visa stamp expired 48 days ago. ImmiHub runs the pre-trip advisory automatically — MEDIUM risk — with stamping guidance and supporting documents to bring.",
    Screen: ScreenTravel },
  { k: 'cases', eyebrow: '06 · Cases, alongside counsel', title: 'Work with your attorney.',
    copy: "Draft. Filed. RFE. Approved. Every receipt number tracked. Every deadline counted down. Your immigration firm works in the same Kanban — read-only, time-bound, access-logged.",
    Screen: ScreenCases },
  { k: 'audit', eyebrow: '07 · Audit day', title: 'A redacted binder, in one click.',
    copy: "DOL audit? USCIS site visit? Generate an audit-ready binder of I-9s, LCAs, PAFs, and PWDs with configurable redaction. Share as a read-only link — access logged, expires in 14 days.",
    Screen: ScreenAudit },
];

function TourSection({ step, i }) {
  const ref = useRefDM();
  const [visible, setVisible] = useStateDM(false);
  useEffectDM(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting && e.intersectionRatio > 0.25), { threshold: [0, 0.25, 0.5] });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Screen = step.Screen;
  return (
    <section ref={ref} id={step.k} style={{ padding: '80px 0', background: i % 2 ? 'var(--im-cloud)' : 'transparent' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.45fr', gap: 64, alignItems: 'center' }}>
          <div style={{ opacity: visible ? 1 : 0.3, transform: visible ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity .6s var(--ease-out), transform .6s var(--ease-out)' }}>
            <div className="eyebrow"><span className="dot" />{step.eyebrow}</div>
            <h2 className="section-title" style={{ marginTop: 14, marginBottom: 20, fontSize: 'clamp(28px, 2.8vw, 40px)' }}>{step.title}</h2>
            <p className="lede">{step.copy}</p>
          </div>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity .8s var(--ease-out), transform .8s var(--ease-out)' }}>
            <div className="prod-window">
              <div className="prod-window-bar">
                <div className="dot" /><div className="dot" /><div className="dot" />
                <div className="addr">app.immihub.ai/employers/{step.k}</div>
              </div>
              <div style={{ position: 'relative' }}><Screen /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoClosing() {
  return (
    <section id="waitlist" style={{ padding: '112px 0' }}>
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="dot" />That's the tour</div>
        <h2 className="section-title" style={{ marginTop: 14 }}>That's ImmiHub for Employers.</h2>
        <p className="lede" style={{ margin: '20px auto 36px' }}>
          Early access opens mid-2026. Founding customers get first access and locked-in pricing.
        </p>
        <div style={{ maxWidth: 620, margin: '0 auto 24px', textAlign: 'left' }}>
          <WaitlistForm tag="demo" />
        </div>
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginTop: 20, flexWrap: 'wrap' }}>
          <a href="#" style={{ fontSize: 13, color: PS.gray, textDecoration: 'underline', textUnderlineOffset: 3 }}>Download the one-pager (PDF)</a>
          <a href="partners.html" style={{ fontSize: 13, color: PS.blueDeep, fontWeight: 500 }}>Attorney? See partners →</a>
        </div>
      </div>
    </section>
  );
}

function DemoPage() {
  return (
    <div>
      <Nav active="demo" />
      <main data-screen-label="Demo">
        <DemoHero />
        <div id="tour">
          {TOUR.map((s, i) => <TourSection key={s.k} step={s} i={i} />)}
        </div>
        <DemoClosing />
      </main>
      <Footer />
    </div>
  );
}

Object.assign(window, { DemoPage });
