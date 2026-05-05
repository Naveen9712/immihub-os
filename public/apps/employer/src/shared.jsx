// Shared components for ImmiHub for Employers marketing site
// Nav, Footer, Waitlist form, Product screen mockups

const { useState, useEffect, useRef } = React;

// ================ NAV ================
function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { k: 'product', label: 'Product', href: 'index.html' },
    { k: 'features', label: 'Features', href: 'features.html' },
    { k: 'pricing', label: 'Pricing', href: 'pricing.html' },
    { k: 'demo', label: 'Demo', href: 'demo.html' },
    { k: 'partners', label: 'Partners', href: 'partners.html' },
  ];
  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="nav-inner">
        <a className="nav-logo" href="index.html" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1, lineHeight: 1 }}>
          <img src="assets/logo-immihub.png" alt="ImmiHub" style={{ height: 20, width: 'auto', display: 'block' }} />
          <span style={{ fontFamily: 'Source Serif 4, Georgia, serif', fontSize: 12, fontStyle: 'italic', color: 'var(--im-slate)', paddingLeft: 2, whiteSpace: 'nowrap' }}>for Employers</span>
        </a>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.k} href={l.href} className={'nav-link' + (active === l.k ? ' active' : '')}>{l.label}</a>
          ))}
        </div>
        <div className="nav-right">
          <a className="btn btn-primary btn-sm" href="#waitlist">Join the waitlist</a>
        </div>
      </div>
    </nav>
  );
}

// ================ FOOTER ================
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ImmiHubOSFamily homeHref="../../index.html" />
        <div className="footer-grid">
          <div>
            <img src="assets/logo-immihub.png" alt="ImmiHub" style={{ height: 22, width: 'auto', display: 'block' }} />
            <p style={{ marginTop: 16, fontSize: 14, color: 'var(--im-slate)', maxWidth: 300, lineHeight: 1.6 }}>
              An immigration operating system for the teams that sponsor, and the people they sponsor.
            </p>
          </div>
          <div>
            <h5>For employers</h5>
            <a href="index.html">Product</a>
            <a href="features.html">Features</a>
            <a href="pricing.html">Pricing</a>
            <a href="demo.html">Demo</a>
            <a href="partners.html">Partners</a>
          </div>
          <div>
            <h5>Company</h5>
            <a href="#">About</a>
            <a href="#">Mission</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 ImmiHub, Inc. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
            <a href="#" aria-label="LinkedIn" style={{ padding: 4, display: 'inline-flex' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" style={{ padding: 4, display: 'inline-flex' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="mailto:partners@getimmihub.com" style={{ color: 'var(--im-gray)', fontSize: 12 }}>partners@getimmihub.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ================ WAITLIST FORM ================
function WaitlistForm({ tag = 'employer', compact = false, onSuccess }) {
  const [state, setState] = useState({ email: '', company: '', role: '', size: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!state.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) errs.email = 'A valid work email is required.';
    if (!state.company.trim()) errs.company = 'Company is required.';
    if (!state.role) errs.role = 'Select your role.';
    if (!state.size) errs.size = 'Select company size.';
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      onSuccess && onSuccess(state);
    }
  };

  if (submitted) {
    return (
      <div className="card" style={{ padding: 32, textAlign: 'center', background: '#fff', borderColor: 'var(--im-blue-ice)' }}>
        <div style={{ width: 44, height: 44, borderRadius: 999, background: 'var(--im-blue-ice)', margin: '0 auto 14px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--im-blue-deep)' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <div className="serif" style={{ fontSize: 24, color: 'var(--im-charcoal)', marginBottom: 6 }}>You're on the list.</div>
        <div style={{ fontSize: 15, color: 'var(--im-slate)', maxWidth: 420, margin: '0 auto' }}>
          We'll be in touch as early access opens. In the meantime, check your inbox — we've sent a note with what happens next.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate style={{ display: 'grid', gap: 14 }}>
      <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr 1fr' : '1fr 1fr', gap: 14 }}>
        <div className="field">
          <label>Work email</label>
          <input
            className={'input' + (errors.email ? ' error' : '')}
            type="email"
            value={state.email}
            placeholder="you@company.com"
            onChange={e => setState({ ...state, email: e.target.value })}
          />
          {errors.email && <div className="field-error">{errors.email}</div>}
        </div>
        <div className="field">
          <label>Company</label>
          <input
            className={'input' + (errors.company ? ' error' : '')}
            value={state.company}
            placeholder="Your company"
            onChange={e => setState({ ...state, company: e.target.value })}
          />
          {errors.company && <div className="field-error">{errors.company}</div>}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div className="field">
          <label>Role</label>
          <select className={'select' + (errors.role ? ' error' : '')} value={state.role} onChange={e => setState({ ...state, role: e.target.value })}>
            <option value="">Select a role</option>
            <option>HR / People operations</option>
            <option>Immigration lead</option>
            <option>Legal / General counsel</option>
            <option>Founder / Executive</option>
            <option>Other</option>
          </select>
          {errors.role && <div className="field-error">{errors.role}</div>}
        </div>
        <div className="field">
          <label>Sponsored employees</label>
          <select className={'select' + (errors.size ? ' error' : '')} value={state.size} onChange={e => setState({ ...state, size: e.target.value })}>
            <option value="">Select a range</option>
            <option>1–10</option>
            <option>10–50</option>
            <option>50–200</option>
            <option>200–500</option>
            <option>500+</option>
          </select>
          {errors.size && <div className="field-error">{errors.size}</div>}
        </div>
      </div>
      <input type="hidden" name="tag" value={tag} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 4, flexWrap: 'wrap' }}>
        <button type="submit" className="btn btn-primary btn-lg">Join the waitlist</button>
        <div className="tiny">No cold outreach. No sales spam. We'll email when early access opens.</div>
      </div>
    </form>
  );
}

Object.assign(window, { Nav, Footer, WaitlistForm });
