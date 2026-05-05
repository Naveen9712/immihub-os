// Shared — Nav, Footer, Icons, utility components
// Exposes to window for cross-script use

const { useState, useEffect, useRef } = React;

// ---------- Icons (inline SVG, lucide-style 1.5 stroke) ----------
const Ico = {
  Calendar: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
  FileText: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M10 13h4M10 17h4M10 9h1"/></svg>,
  Inbox: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>,
  AlertTriangle: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>,
  Shield: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Users: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  ArrowRight: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  ArrowLeft: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>,
  Download: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>,
  Plus: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 5v14M5 12h14"/></svg>,
  Check: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6 9 17l-5-5"/></svg>,
  Linkedin: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  Instagram: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/></svg>,
  Layers: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m12 2-10 5 10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  Clipboard: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>,
  User: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  BarChart: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 20V10M18 20V4M6 20v-4"/></svg>,
  GitBranch: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>,
};

// ---------- Logo ----------
function Logo({ link = true }) {
  const body = (
    <div className="nav-logo nav-logo-stacked">
      <img src="assets/logo-immihub.png" alt="ImmiHub" />
      <span className="nav-logo-lockup">for Institutions</span>
    </div>
  );
  return link ? <a href="index.html" style={{textDecoration: 'none'}}>{body}</a> : body;
}

// ---------- Nav ----------
function Nav({ active = 'product' }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { id: 'product', label: 'Product', href: 'index.html' },
    { id: 'features', label: 'Features', href: 'features.html' },
    { id: 'deployment', label: 'Deployment', href: 'deployment.html' },
    { id: 'demo', label: 'Demo', href: 'demo.html' },
    { id: 'leadership', label: 'Leadership', href: 'leadership.html' },
  ];
  return (
    <header className={`nav-root ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Logo />
        <nav className="nav-links">
          {links.map(l => (
            <a key={l.id} href={l.href} className={`nav-link ${active === l.id ? 'active' : ''}`}>{l.label}</a>
          ))}
        </nav>
        <div className="nav-right">
          <a className="btn btn-primary btn-sm" href="#waitlist">Join the waitlist</a>
        </div>
      </div>
    </header>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide">
        <ImmiHubOSFamily homeHref="../../index.html" />
        <div className="footer-grid">
          <div className="footer-col">
            <Logo link={false} />
            <p className="footer-mission">Immigration infrastructure for the way US higher education actually works. Mobile-first for students; desktop-first for the offices that support them.</p>
          </div>
          <div className="footer-col">
            <h5>For Individuals</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Download</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>For Employers</h5>
            <ul>
              <li><a href="#">Product</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Demo</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>For Institutions</h5>
            <ul>
              <li><a href="index.html">Product</a></li>
              <li><a href="features.html">Features</a></li>
              <li><a href="deployment.html">Deployment</a></li>
              <li><a href="demo.html">Demo</a></li>
              <li><a href="leadership.html">Leadership</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Mission</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 ImmiHub. All rights reserved. · <a href="mailto:partnerships@getimmihub.com" style={{color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--border-default)', textUnderlineOffset: '3px'}}>partnerships@getimmihub.com</a></div>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn"><Ico.Linkedin style={{width:18,height:18}}/></a>
            <a href="#" aria-label="Instagram"><Ico.Instagram style={{width:18,height:18}}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------- Waitlist Form ----------
function WaitlistForm({ variant = 'landing' }) {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    institution: '', name: '', role: '', email: '', type: '', enrollment: ''
  });
  const [errors, setErrors] = useState({});
  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!data.institution) err.institution = 'Required';
    if (!data.name) err.name = 'Required';
    if (!data.email) err.email = 'Required';
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(data.email)) err.email = 'Please enter a valid email';
    if (!data.role) err.role = 'Required';
    setErrors(err);
    if (Object.keys(err).length === 0) setSubmitted(true);
  };
  const set = (k) => (e) => setData(d => ({...d, [k]: e.target.value}));

  if (submitted) {
    return (
      <div className="form-success">
        <h4>You're on the list.</h4>
        <p>We'll be in touch within a week with an alpha-access schedule and a short call to understand {data.institution || 'your institution'}'s SEVIS tooling situation. In the meantime, the institutional overview is on its way to {data.email}.</p>
      </div>
    );
  }

  return (
    <form className="form-grid" onSubmit={submit} noValidate>
      <div className="field">
        <label>Institution</label>
        <input type="text" value={data.institution} onChange={set('institution')} placeholder="e.g. Purdue University" />
        {errors.institution && <div className="field-error">{errors.institution}</div>}
      </div>
      <div className="field">
        <label>Your name</label>
        <input type="text" value={data.name} onChange={set('name')} placeholder="First Last" />
        {errors.name && <div className="field-error">{errors.name}</div>}
      </div>
      <div className="field">
        <label>Role</label>
        <select value={data.role} onChange={set('role')}>
          <option value="">Select…</option>
          <option>PDSO</option>
          <option>DSO</option>
          <option>ISSS Director</option>
          <option>Vice Provost</option>
          <option>General Counsel</option>
          <option>CIO</option>
          <option>Registrar</option>
          <option>Other</option>
        </select>
        {errors.role && <div className="field-error">{errors.role}</div>}
      </div>
      <div className="field">
        <label>Work email</label>
        <input type="email" value={data.email} onChange={set('email')} placeholder="you@institution.edu" />
        {errors.email && <div className="field-error">{errors.email}</div>}
      </div>
      <div className="field">
        <label>Institution type</label>
        <select value={data.type} onChange={set('type')}>
          <option value="">Select…</option>
          <option>Public R1</option>
          <option>Public R2</option>
          <option>Private R1</option>
          <option>Liberal arts college</option>
          <option>Community college</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field">
        <label>F-1 / J-1 enrollment</label>
        <select value={data.enrollment} onChange={set('enrollment')}>
          <option value="">Select…</option>
          <option>Under 200</option>
          <option>200 – 1,000</option>
          <option>1,000 – 5,000</option>
          <option>5,000+</option>
        </select>
      </div>
      <div className="full" style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16, marginTop:8}}>
        <p style={{margin:0, fontSize:12.5, color:'var(--fg-3)', maxWidth:380, lineHeight:1.55}}>We won't share your details. No pilot calls unless you ask for one.</p>
        <button type="submit" className="btn btn-primary btn-lg">Join the institutional waitlist</button>
      </div>
    </form>
  );
}

// ---------- Download modal ----------
function DownloadModal({ open, onClose, title = 'Institutional overview' }) {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => { if (!open) { setDone(false); setEmail(''); } }, [open]);
  const submit = (e) => {
    e.preventDefault();
    if (/^[^@]+@[^@]+\.[^@]+$/.test(email)) setDone(true);
  };
  return (
    <div className={`modal-scrim ${open ? 'show' : ''}`} onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {!done ? (
          <>
            <h3>{title}</h3>
            <p style={{fontSize:14.5, color:'var(--fg-2)', margin:'0 0 20px', lineHeight:1.55}}>
              The document is being finalized ahead of launch. Drop your work email and we'll send it as soon as it's ready — typically within 48 hours.
            </p>
            <form onSubmit={submit}>
              <div className="field">
                <label>Work email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@institution.edu" autoFocus />
              </div>
              <div style={{display:'flex', gap:10, marginTop:16, justifyContent:'flex-end'}}>
                <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
                <button type="submit" className="btn btn-primary">Email it to me</button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h3>Sent.</h3>
            <p style={{fontSize:14.5, color:'var(--fg-2)', margin:'0 0 20px', lineHeight:1.55}}>
              {title} will arrive at <strong>{email}</strong> within 48 hours. If you'd like, you can also <a href="#waitlist" style={{color:'var(--im-blue-deep)'}}>join the institutional waitlist</a>.
            </p>
            <div style={{display:'flex', justifyContent:'flex-end'}}>
              <button className="btn btn-ghost" onClick={onClose}>Close</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Nav, Footer, Logo, Ico, WaitlistForm, DownloadModal });
