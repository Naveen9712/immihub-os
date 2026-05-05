// Product screen mockups — reusable React components representing the ImmiHub Employer product
// Used on landing product-glimpse, features, and demo scrollytelling.

const PS = {
  blue: '#4F9ED6', blueDeep: '#2B7AB8', sky: '#7BB8E2', ice: '#E8F2FA',
  green: '#34B87C', mint: '#D4F0E3',
  charcoal: '#1A2332', slate: '#4A5568', gray: '#8896A6',
  warmWhite: '#FAFBFD', cloud: '#F2F5F8', mist: '#DFE4EA',
  warnFg: '#E5A318', warnBg: '#FEF5E0',
  dangerFg: '#D94F4F', dangerBg: '#FDE8E8',
};

// ----- Mini sidebar used inside screens -----
function MiniSidebar({ active }) {
  const items = [
    { k: 'dashboard', label: 'Dashboard', d: 'M3 12l9-9 9 9v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z' },
    { k: 'employees', label: 'Employees', d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87' },
    { k: 'risk', label: 'Risk feed', d: 'M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6z' },
    { k: 'cases', label: 'Cases', d: 'M3 4h18v4H3zM3 12h18v4H3z' },
    { k: 'grace', label: 'Grace period', d: 'M12 8v4l3 2M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z' },
    { k: 'travel', label: 'Travel', d: 'M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20' },
    { k: 'inbox', label: 'Smart inbox', d: 'M22 12h-6l-2 3h-4l-2-3H2M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z' },
    { k: 'audit', label: 'Audit mode', d: 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11' },
  ];
  return (
    <div style={{ width: 148, flexShrink: 0, background: '#fff', borderRight: `1px solid ${PS.mist}`, padding: '12px 8px', display: 'flex', flexDirection: 'column', gap: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '2px 8px 12px' }}>
        <img src="assets/logo-immihub.png" alt="ImmiHub" style={{ height: 16, width: 'auto', display: 'block' }} />
      </div>
      <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: 0.08 * 9, textTransform: 'uppercase', color: PS.gray, padding: '2px 10px 4px' }}>Workspace</div>
      {items.map(it => {
        const on = active === it.k;
        return (
          <div key={it.k} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '6px 10px', borderRadius: 5, fontSize: 11, fontWeight: on ? 600 : 500, color: on ? PS.blueDeep : PS.slate, background: on ? PS.ice : 'transparent' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={it.d}/></svg>
            {it.label}
          </div>
        );
      })}
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '8px 8px', borderTop: `1px solid ${PS.mist}`, marginTop: 8 }}>
        <div style={{ width: 20, height: 20, borderRadius: 999, background: PS.blue, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 600 }}>AK</div>
        <div style={{ fontSize: 10, fontWeight: 600, color: PS.charcoal }}>Ananya K.</div>
      </div>
    </div>
  );
}

function Pill({ variant = 'valid', children }) {
  const m = { valid: [PS.green, PS.mint], warn: [PS.warnFg, PS.warnBg], danger: [PS.dangerFg, PS.dangerBg], neutral: [PS.slate, PS.cloud] };
  const [fg, bg] = m[variant];
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '2px 8px', borderRadius: 999, background: bg, color: fg, fontSize: 10, fontWeight: 500 }}><span style={{ width: 5, height: 5, borderRadius: 999, background: fg }} />{children}</span>;
}

function Avatar({ name, color }) {
  const ini = name.split(' ').map(s => s[0]).slice(0, 2).join('');
  return <div style={{ width: 26, height: 26, borderRadius: 999, background: color, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 600, flexShrink: 0 }}>{ini}</div>;
}

// Little runway bar for expiry
function Runway({ days, total = 365 }) {
  const pct = Math.max(3, Math.min(100, (days / total) * 100));
  const color = days < 45 ? PS.dangerFg : days < 120 ? PS.warnFg : PS.green;
  return (
    <div style={{ width: 70, height: 5, background: PS.cloud, borderRadius: 99, overflow: 'hidden' }}>
      <div style={{ height: '100%', width: pct + '%', background: color, borderRadius: 99 }} />
    </div>
  );
}

// ============= SCREEN: Hero (compact, sidebar-less) =============
function ScreenHero() {
  return (
    <div style={{ background: PS.warmWhite, fontFamily: 'Inter, system-ui', padding: 28 }}>
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: 'linear-gradient(135deg, #4F9ED6, #34B87C)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>i</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: PS.charcoal, letterSpacing: -0.2 }}>ImmiHub</div>
          <div style={{ fontSize: 11, color: PS.gray, marginLeft: 8 }}>Workspace · Dashboard</div>
        </div>
        <div style={{ fontSize: 11, color: PS.gray }}>Mon · Apr 19, 2026</div>
      </div>
      <div style={{ fontSize: 22, fontWeight: 700, color: PS.charcoal, letterSpacing: -0.4, fontFamily: 'Source Serif 4, Georgia, serif', marginTop: 18 }}>Good morning, Ananya.</div>
      <div style={{ fontSize: 13, color: PS.gray, marginTop: 3, marginBottom: 22 }}>You have 3 items that need attention today.</div>

      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 20 }}>
        {[
          { l: 'Total sponsored', v: '142', s: '+3 this month' },
          { l: 'Expiring · 90 d', v: '8', s: 'up from 5', c: PS.warnFg },
          { l: 'Action needed', v: '1', s: 'OPT · Nikhil P.', c: PS.dangerFg },
        ].map((k, i) => (
          <div key={i} style={{ background: '#fff', border: `1px solid ${PS.mist}`, borderRadius: 10, padding: '16px 18px' }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 0.06 * 10, textTransform: 'uppercase', color: PS.gray }}>{k.l}</div>
            <div style={{ fontSize: 30, fontWeight: 700, color: k.c || PS.charcoal, letterSpacing: -0.6, lineHeight: 1.1, marginTop: 10, fontVariantNumeric: 'tabular-nums' }}>{k.v}</div>
            <div style={{ fontSize: 11, color: PS.gray, marginTop: 6 }}>{k.s}</div>
          </div>
        ))}
      </div>

      {/* Risk feed — full width, generous padding */}
      <div style={{ background: '#fff', border: `1px solid ${PS.mist}`, borderRadius: 10, overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: `1px solid ${PS.mist}`, display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: PS.charcoal }}>Risk feed</div>
          <Pill variant="danger">3 critical</Pill>
          <Pill variant="warn">5 warning</Pill>
          <div style={{ flex: 1 }} />
          <div style={{ fontSize: 11, color: PS.blueDeep, fontWeight: 500 }}>View all →</div>
        </div>
        {[
          { n: 'Nikhil Patel', d: 'OPT expires in 3 days · cap-gap active', s: 'danger', c: PS.sky, date: 'Apr 22' },
          { n: 'Rahul Verma', d: 'H-1B expires in 42 days · no extension', s: 'warn', c: PS.green, date: 'May 30' },
          { n: 'Mateo Rivas', d: '60-day grace period · day 12 of 60', s: 'danger', c: PS.blue, date: 'Jun 18' },
          { n: 'Sanjay Gupta', d: 'H-1B expires in 48 days · draft started', s: 'warn', c: PS.blueDeep, date: 'Jun 5' },
        ].map((r, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', borderTop: i ? `1px solid ${PS.mist}` : 0 }}>
            <Avatar name={r.n} color={r.c} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: PS.charcoal }}>{r.n}</div>
              <div style={{ fontSize: 12, color: PS.slate, marginTop: 2 }}>{r.d}</div>
            </div>
            <div style={{ fontSize: 12, color: PS.slate, fontVariantNumeric: 'tabular-nums', fontWeight: 500 }}>{r.date}</div>
            <Pill variant={r.s}>{r.s === 'danger' ? 'Critical' : 'Warning'}</Pill>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============= SCREEN: Dashboard =============
function ScreenDashboard() {
  return (
    <div style={{ display: 'flex', background: PS.warmWhite, height: 520, fontFamily: 'Inter, system-ui' }}>
      <MiniSidebar active="dashboard" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px', borderBottom: `1px solid ${PS.mist}`, background: '#fff' }}>
          <div style={{ fontSize: 10, color: PS.gray }}>Workspace /</div>
          <div style={{ fontSize: 10, fontWeight: 600, color: PS.charcoal }}>Dashboard</div>
          <div style={{ flex: 1 }} />
          <div style={{ fontSize: 9, color: PS.gray }}>Mon · Apr 19, 2026</div>
        </div>
        <div style={{ flex: 1, padding: '16px 18px', overflow: 'hidden' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: PS.charcoal, letterSpacing: -0.2, fontFamily: 'Source Serif 4, Georgia, serif' }}>Good morning, Ananya.</div>
          <div style={{ fontSize: 10, color: PS.gray, marginBottom: 14, marginTop: 1 }}>You have 3 items that need attention today.</div>

          {/* KPI strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 14 }}>
            {[
              { l: 'Total sponsored', v: '142', s: '+3 this month' },
              { l: 'Expiring · 90 d', v: '8', s: 'up from 5', c: PS.warnFg },
              { l: 'Action needed', v: '1', s: 'OPT · Nikhil P.', c: PS.dangerFg },
              { l: 'GC in progress', v: '34', s: '12 at I-140' },
            ].map((k, i) => (
              <div key={i} style={{ background: '#fff', border: `1px solid ${PS.mist}`, borderRadius: 7, padding: '10px 11px' }}>
                <div style={{ fontSize: 8, fontWeight: 600, letterSpacing: 0.06 * 8, textTransform: 'uppercase', color: PS.gray }}>{k.l}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: k.c || PS.charcoal, letterSpacing: -0.4, lineHeight: 1.1, marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>{k.v}</div>
                <div style={{ fontSize: 9, color: PS.gray, marginTop: 2 }}>{k.s}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 10 }}>
            {/* Risk feed */}
            <div style={{ background: '#fff', border: `1px solid ${PS.mist}`, borderRadius: 7, overflow: 'hidden' }}>
              <div style={{ padding: '9px 12px', borderBottom: `1px solid ${PS.mist}`, display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: PS.charcoal }}>Risk feed</div>
                <Pill variant="danger">3 critical</Pill>
                <Pill variant="warn">5 warning</Pill>
              </div>
              {[
                { n: 'Nikhil Patel', d: 'OPT expires in 3 days · cap-gap active', s: 'danger', c: PS.sky },
                { n: 'Rahul Verma', d: 'H-1B expires in 42 days · no extension', s: 'warn', c: PS.green },
                { n: 'Mateo Rivas', d: '60-day grace period · day 12 of 60', s: 'danger', c: PS.blue },
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '8px 12px', borderTop: i ? `1px solid ${PS.mist}` : 0 }}>
                  <Avatar name={r.n} color={r.c} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: PS.charcoal }}>{r.n}</div>
                    <div style={{ fontSize: 10, color: PS.slate, marginTop: 1 }}>{r.d}</div>
                  </div>
                  <Pill variant={r.s}>{r.s === 'danger' ? 'Critical' : 'Warning'}</Pill>
                </div>
              ))}
            </div>

            {/* Right rail */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ background: '#fff', border: `1px solid ${PS.mist}`, borderRadius: 7, padding: '11px 13px' }}>
                <div style={{ fontSize: 10, fontWeight: 600, color: PS.charcoal, marginBottom: 8 }}>Next 90 days</div>
                {[
                  { t: 'OPT · N. Patel', d: 'Apr 22', c: PS.dangerFg },
                  { t: 'H-1B · R. Verma', d: 'May 30', c: PS.warnFg },
                  { t: 'H-1B · S. Gupta', d: 'Jun 5', c: PS.warnFg },
                ].map((d, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0', borderTop: i ? `1px solid ${PS.mist}` : 0, fontSize: 10 }}>
                    <div style={{ color: PS.slate }}>{d.t}</div>
                    <div style={{ color: d.c, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{d.d}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: PS.ice, border: `1px solid ${PS.ice}`, borderRadius: 7, padding: '12px 14px' }}>
                <div style={{ fontSize: 9, fontWeight: 600, color: PS.blueDeep, letterSpacing: 0.04 * 9, textTransform: 'uppercase' }}>Compliance</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: PS.charcoal, letterSpacing: -0.4, marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>94<span style={{ fontSize: 13, color: PS.slate }}>%</span></div>
                <div style={{ fontSize: 9, color: PS.slate, marginTop: 2 }}>Healthy · all visas, 30-day trend</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============= SCREEN: Employees table =============
function ScreenEmployees() {
  const rows = [
    { n: 'Priya Sharma', r: 'Senior SWE', v: 'H-1B', e: 'Sep 12, 2026', d: 248, s: 'valid', c: PS.blue },
    { n: 'Rahul Verma', r: 'Staff ML Engineer', v: 'H-1B', e: 'May 30, 2026', d: 42, s: 'warn', c: PS.green },
    { n: 'Nikhil Patel', r: 'Product Manager', v: 'OPT', e: 'Apr 22, 2026', d: 3, s: 'danger', c: PS.sky },
    { n: 'Aisha Khan', r: 'Data Scientist', v: 'H-1B', e: 'Jan 14, 2028', d: 637, s: 'valid', c: PS.blueDeep },
    { n: 'Vikram Singh', r: 'Eng Manager', v: 'GC · EB2', e: 'Jul 3, 2027', d: 438, s: 'valid', c: PS.green },
    { n: 'Meera Iyer', r: 'Design Engineer', v: 'F-1 OPT', e: 'Aug 19, 2026', d: 225, s: 'valid', c: PS.blue },
    { n: 'Arjun Reddy', r: 'Security Eng', v: 'H-1B', e: 'Nov 2, 2026', d: 299, s: 'valid', c: PS.sky },
    { n: 'Sanjay Gupta', r: 'Principal Arch', v: 'H-1B', e: 'Jun 5, 2026', d: 48, s: 'warn', c: PS.blueDeep },
    { n: 'Divya Menon', r: 'Staff Eng', v: 'H-1B', e: 'Feb 28, 2027', d: 316, s: 'valid', c: PS.green },
  ];
  return (
    <div style={{ display: 'flex', background: PS.warmWhite, height: 560, fontFamily: 'Inter, system-ui' }}>
      <MiniSidebar active="employees" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '10px 18px', borderBottom: `1px solid ${PS.mist}`, background: '#fff', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ fontSize: 11, color: PS.gray }}>Workspace /</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: PS.charcoal }}>Employees</div>
          <div style={{ flex: 1 }} />
          <div style={{ background: PS.cloud, borderRadius: 6, padding: '4px 10px', fontSize: 10, color: PS.gray, width: 200 }}>Search employees, documents…</div>
        </div>
        <div style={{ flex: 1, padding: 18 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: PS.charcoal, letterSpacing: -0.3, fontFamily: 'Source Serif 4, Georgia, serif' }}>Workforce compliance</div>
              <div style={{ fontSize: 11, color: PS.gray, marginTop: 2 }}>Track visa status and document expiry across your team</div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {['All visas', 'Expiring first ↓', 'Export'].map(x => <div key={x} style={{ background: '#fff', border: `1px solid ${PS.mist}`, padding: '5px 9px', borderRadius: 6, fontSize: 10, color: PS.slate, fontWeight: 500 }}>{x}</div>)}
            </div>
          </div>
          <div style={{ background: '#fff', border: `1px solid ${PS.mist}`, borderRadius: 10, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 0.9fr 1fr 0.9fr 0.9fr 0.7fr', padding: '9px 14px', background: PS.cloud, fontSize: 9, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.04 * 10, color: PS.gray }}>
              <div>Employee</div><div>Visa</div><div>Expires</div><div>Runway</div><div>Status</div><div style={{ textAlign: 'right' }}>Days</div>
            </div>
            {rows.map((r, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.8fr 0.9fr 1fr 0.9fr 0.9fr 0.7fr', padding: '9px 14px', alignItems: 'center', borderTop: `1px solid ${PS.mist}`, fontSize: 11 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Avatar name={r.n} color={r.c} />
                  <div>
                    <div style={{ fontWeight: 600, color: PS.charcoal }}>{r.n}</div>
                    <div style={{ fontSize: 10, color: PS.gray }}>{r.r}</div>
                  </div>
                </div>
                <div style={{ color: PS.charcoal, fontWeight: 500 }}>{r.v}</div>
                <div style={{ color: PS.slate, fontVariantNumeric: 'tabular-nums' }}>{r.e}</div>
                <div><Runway days={r.d} /></div>
                <div><Pill variant={r.s}>{r.s === 'valid' ? 'Valid' : r.s === 'warn' ? 'Expiring' : 'Action needed'}</Pill></div>
                <div style={{ textAlign: 'right', color: PS.slate, fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>{r.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============= SCREEN: Employee Drawer =============
function ScreenEmployeeDrawer() {
  const docs = [
    { n: 'I-797 (H-1B approval)', e: 'Sep 12, 2026', d: 248, s: 'valid' },
    { n: 'I-94', e: 'Sep 12, 2026', d: 248, s: 'valid' },
    { n: 'Passport', e: 'Jun 18, 2026', d: 60, s: 'warn' },
    { n: 'Visa stamp', e: 'Mar 2, 2026', d: -48, s: 'danger' },
    { n: 'EAD (spouse)', e: 'Apr 1, 2027', d: 347, s: 'valid' },
  ];
  return (
    <div style={{ display: 'flex', background: PS.warmWhite, height: 560, fontFamily: 'Inter, system-ui' }}>
      <MiniSidebar active="employees" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', opacity: 0.4 }}>
        <div style={{ padding: '10px 18px', borderBottom: `1px solid ${PS.mist}`, background: '#fff', height: 33 }} />
        <div style={{ flex: 1, background: PS.cloud }} />
      </div>
      {/* Drawer */}
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '64%', background: '#fff', borderLeft: `1px solid ${PS.mist}`, boxShadow: '-20px 0 40px rgba(26,35,50,0.06)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: 16, borderBottom: `1px solid ${PS.mist}`, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 999, background: PS.green, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 14 }}>RV</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: PS.charcoal, letterSpacing: -0.3, fontFamily: 'Source Serif 4, Georgia, serif' }}>Rahul Verma</div>
            <div style={{ fontSize: 11, color: PS.gray }}>Staff ML Engineer · Platform · Employee #10244</div>
          </div>
          <Pill variant="warn">H-1B expires in 42 days</Pill>
        </div>
        <div style={{ flex: 1, padding: 16, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8, marginBottom: 14 }}>
            {[
              { l: 'Current visa', v: 'H-1B' },
              { l: 'Sponsor since', v: 'Aug 2021' },
              { l: 'Extensions', v: '2 filed' },
              { l: 'Green card', v: 'PERM approved' },
            ].map((k, i) => (
              <div key={i} style={{ background: PS.warmWhite, border: `1px solid ${PS.mist}`, borderRadius: 8, padding: 10 }}>
                <div style={{ fontSize: 9, color: PS.gray, letterSpacing: 0.04 * 10, textTransform: 'uppercase', fontWeight: 600 }}>{k.l}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: PS.charcoal, marginTop: 3 }}>{k.v}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 0.06 * 10, textTransform: 'uppercase', color: PS.gray, marginBottom: 6 }}>Documents</div>
          <div style={{ border: `1px solid ${PS.mist}`, borderRadius: 8, overflow: 'hidden' }}>
            {docs.map((d, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 0.8fr', padding: '9px 14px', alignItems: 'center', borderTop: i ? `1px solid ${PS.mist}` : 0, fontSize: 11 }}>
                <div style={{ color: PS.charcoal, fontWeight: 500 }}>{d.n}</div>
                <div style={{ color: PS.slate, fontVariantNumeric: 'tabular-nums' }}>{d.e}</div>
                <div><Runway days={Math.max(d.d, 0)} /></div>
                <div style={{ textAlign: 'right' }}><Pill variant={d.s}>{d.s === 'valid' ? 'Valid' : d.s === 'warn' ? 'Expiring' : 'Expired'}</Pill></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div style={{ border: `1px solid ${PS.mist}`, borderRadius: 8, padding: 12 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: PS.gray, letterSpacing: 0.04 * 10, textTransform: 'uppercase' }}>Active case</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: PS.charcoal, marginTop: 2 }}>H-1B extension · LIN-26-147-99812</div>
              <div style={{ fontSize: 11, color: PS.slate, marginTop: 2 }}>Filed Mar 12 · attorney: Meridian Immigration</div>
            </div>
            <div style={{ border: `1px solid ${PS.mist}`, borderRadius: 8, padding: 12 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: PS.gray, letterSpacing: 0.04 * 10, textTransform: 'uppercase' }}>Upcoming trip</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: PS.charcoal, marginTop: 2 }}>Bengaluru · Apr 28 → May 9</div>
              <div style={{ fontSize: 11, color: PS.warnFg, marginTop: 2 }}>Medium risk · visa stamp lapsed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============= SCREEN: Grace Period =============
function ScreenGracePeriod() {
  return (
    <div style={{ display: 'flex', background: PS.warmWhite, height: 560, fontFamily: 'Inter, system-ui' }}>
      <MiniSidebar active="grace" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '10px 18px', borderBottom: `1px solid ${PS.mist}`, background: '#fff' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: PS.charcoal }}>Grace period cockpit</div>
        </div>
        <div style={{ flex: 1, padding: 18 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: PS.charcoal, letterSpacing: -0.3, fontFamily: 'Source Serif 4, Georgia, serif' }}>Mateo Rivas · 60-day grace period</div>
              <div style={{ fontSize: 11, color: PS.gray, marginTop: 2 }}>Terminated Apr 7, 2026 · H-1B · Principal Designer</div>
            </div>
            <Pill variant="danger">Day 12 of 60</Pill>
          </div>
          {/* Day timeline */}
          <div style={{ background: '#fff', border: `1px solid ${PS.mist}`, borderRadius: 10, padding: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: PS.gray, marginBottom: 6 }}>
              <div>Apr 7 · Day 0</div>
              <div style={{ color: PS.warnFg, fontWeight: 600 }}>Today · Day 12</div>
              <div>Jun 6 · Day 60</div>
            </div>
            <div style={{ height: 10, background: PS.cloud, borderRadius: 999, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, width: '20%', background: `linear-gradient(90deg, ${PS.warnBg}, ${PS.warnFg})` }} />
              <div style={{ position: 'absolute', top: -3, left: 'calc(20% - 8px)', width: 16, height: 16, borderRadius: 999, background: '#fff', border: `3px solid ${PS.warnFg}` }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginTop: 18 }}>
              {[
                { l: 'Days remaining', v: '48', c: PS.warnFg },
                { l: 'Deadline to file', v: 'May 27', c: PS.charcoal },
                { l: 'New sponsor', v: 'Not found', c: PS.dangerFg },
                { l: 'I-94 status', v: 'Valid', c: PS.green },
              ].map((k, i) => (
                <div key={i} style={{ borderLeft: `2px solid ${PS.mist}`, paddingLeft: 12 }}>
                  <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: 0.04 * 10, textTransform: 'uppercase', color: PS.gray }}>{k.l}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: k.c, marginTop: 3, letterSpacing: -0.4, fontVariantNumeric: 'tabular-nums' }}>{k.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div style={{ background: '#fff', border: `1px solid ${PS.mist}`, borderRadius: 10, padding: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: PS.charcoal, marginBottom: 10 }}>Required actions</div>
              {['Confirm termination effective date · Done', 'Notify USCIS via H-1B withdrawal', 'Final paycheck processed · return pending', 'Offboarding checklist · 4 of 7'].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0', fontSize: 11 }}>
                  <div style={{ width: 12, height: 12, borderRadius: 3, border: `1.5px solid ${i === 0 ? PS.green : PS.mist}`, background: i === 0 ? PS.green : '#fff' }} />
                  <div style={{ color: i === 0 ? PS.gray : PS.slate, textDecoration: i === 0 ? 'line-through' : 'none' }}>{s}</div>
                </div>
              ))}
            </div>
            <div style={{ background: PS.ice, border: `1px solid ${PS.ice}`, borderRadius: 10, padding: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 0.04 * 10, textTransform: 'uppercase', color: PS.blueDeep }}>Attorney note</div>
              <div style={{ fontSize: 11, color: PS.slate, marginTop: 6, lineHeight: 1.5 }}>
                "Mateo has until June 6 to secure a new H-1B transfer or depart. If no sponsor is identified by day 45, please schedule an exit interview to discuss departure logistics."
              </div>
              <div style={{ fontSize: 10, color: PS.gray, marginTop: 8 }}>— Meridian Immigration · Apr 14</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============= SCREEN: Travel Risk =============
function ScreenTravel() {
  return (
    <div style={{ display: 'flex', background: PS.warmWhite, height: 560, fontFamily: 'Inter, system-ui' }}>
      <MiniSidebar active="travel" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '10px 18px', borderBottom: `1px solid ${PS.mist}`, background: '#fff', fontSize: 11, fontWeight: 600, color: PS.charcoal }}>Travel risk advisor</div>
        <div style={{ flex: 1, padding: 18 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: PS.charcoal, letterSpacing: -0.3, fontFamily: 'Source Serif 4, Georgia, serif' }}>Pre-trip re-entry advisory</div>
          <div style={{ fontSize: 11, color: PS.gray, marginBottom: 14 }}>Ananya Varma · Bengaluru · Apr 28 → May 9, 2026</div>

          <div style={{ background: '#fff', border: `1px solid ${PS.mist}`, borderRadius: 10, padding: 16, marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <div style={{ width: 48, height: 48, borderRadius: 10, background: PS.warnBg, color: PS.warnFg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: PS.charcoal, letterSpacing: -0.2 }}>Medium risk · do not depart without stamping appointment</div>
                <div style={{ fontSize: 11, color: PS.slate, marginTop: 2 }}>Visa stamp expired Mar 2, 2026. Re-entry requires valid stamp in passport.</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              {[
                { l: 'Risk score', v: 'MEDIUM', c: PS.warnFg },
                { l: 'Destination', v: 'Bengaluru, India' },
                { l: 'Duration', v: '11 days' },
                { l: 'Visa stamp', v: 'Expired · 48 d ago', c: PS.dangerFg },
                { l: 'I-797 (H-1B)', v: 'Valid · 248 d', c: PS.green },
                { l: 'Advance Parole', v: 'N/A · not in GC' },
              ].map((k, i) => (
                <div key={i} style={{ background: PS.warmWhite, border: `1px solid ${PS.mist}`, borderRadius: 8, padding: 10 }}>
                  <div style={{ fontSize: 9, fontWeight: 600, color: PS.gray, letterSpacing: 0.04 * 10, textTransform: 'uppercase' }}>{k.l}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: k.c || PS.charcoal, marginTop: 3 }}>{k.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#fff', border: `1px solid ${PS.mist}`, borderRadius: 10, padding: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: PS.charcoal, marginBottom: 8 }}>Guidance</div>
            {[
              { t: 'Book a visa stamping appointment', d: 'US consulate Chennai or Hyderabad · earliest appointment Apr 25' },
              { t: 'Bring supporting documents', d: 'I-797, pay stubs (last 3), employment verification letter dated within 10 days' },
              { t: 'Check 221(g) risk', d: 'Previously issued stamps: 3. No prior 221(g) flags. Low administrative-processing risk.' },
            ].map((g, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderTop: i ? `1px solid ${PS.mist}` : 0, fontSize: 11 }}>
                <div style={{ width: 18, height: 18, borderRadius: 999, background: PS.ice, color: PS.blueDeep, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 10, flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <div style={{ fontWeight: 600, color: PS.charcoal }}>{g.t}</div>
                  <div style={{ color: PS.slate, marginTop: 1 }}>{g.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============= SCREEN: Cases Kanban =============
function ScreenCases() {
  const cols = [
    { l: 'Draft', c: PS.gray, cards: [
      { t: 'H-1B extension · K. Patel', p: 'LIN-26-147-99812', d: 'Filing due May 4', pr: 'high' },
      { t: 'O-1 · M. Iyer', p: 'Drafting', d: 'Filing due Jun 12', pr: 'med' },
    ]},
    { l: 'Filed', c: PS.blue, cards: [
      { t: 'H-1B extension · R. Verma', p: 'LIN-26-144-21807', d: 'RD Mar 12', pr: 'high' },
      { t: 'I-140 · A. Khan', p: 'EAC-26-121-44890', d: 'RD Feb 28', pr: 'med' },
      { t: 'I-485 · V. Singh', p: 'MSC-26-132-00871', d: 'RD Mar 3', pr: 'low' },
    ]},
    { l: 'RFE', c: PS.warnFg, cards: [
      { t: 'H-1B new · S. Gupta', p: 'EAC-26-129-00412', d: 'Response due May 1', pr: 'high' },
    ]},
    { l: 'Approved', c: PS.green, cards: [
      { t: 'H-1B ext · D. Menon', p: 'LIN-25-310-52108', d: 'Approved Feb 2', pr: 'med' },
      { t: 'GC · EB2 NIW · L. Chen', p: 'EAC-25-342-00994', d: 'Approved Jan 19', pr: 'low' },
      { t: 'H-1B trans · M. Rivas', p: 'EAC-25-301-18076', d: 'Approved Nov 12', pr: 'med' },
    ]},
  ];
  return (
    <div style={{ display: 'flex', background: PS.warmWhite, height: 560, fontFamily: 'Inter, system-ui' }}>
      <MiniSidebar active="cases" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '10px 18px', borderBottom: `1px solid ${PS.mist}`, background: '#fff', fontSize: 11, fontWeight: 600, color: PS.charcoal }}>Cases · 12 active</div>
        <div style={{ flex: 1, padding: 16, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, alignItems: 'flex-start' }}>
          {cols.map((col, ci) => (
            <div key={ci} style={{ background: PS.cloud, border: `1px solid ${PS.mist}`, borderRadius: 10, padding: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: 999, background: col.c }} />
                <div style={{ fontSize: 11, fontWeight: 600, color: PS.charcoal, letterSpacing: 0.04 * 10, textTransform: 'uppercase' }}>{col.l}</div>
                <div style={{ fontSize: 10, color: PS.gray, marginLeft: 'auto' }}>{col.cards.length}</div>
              </div>
              {col.cards.map((c, i) => (
                <div key={i} style={{ background: '#fff', border: `1px solid ${PS.mist}`, borderRadius: 8, padding: 10, marginBottom: 8, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: c.pr === 'high' ? PS.dangerFg : c.pr === 'med' ? PS.warnFg : PS.gray }} />
                  <div style={{ fontSize: 11, fontWeight: 600, color: PS.charcoal, marginLeft: 4 }}>{c.t}</div>
                  <div style={{ fontSize: 10, color: PS.gray, marginTop: 3, marginLeft: 4, fontVariantNumeric: 'tabular-nums' }}>{c.p}</div>
                  <div style={{ fontSize: 10, color: PS.slate, marginTop: 4, marginLeft: 4 }}>{c.d}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============= SCREEN: Smart Inbox =============
function ScreenInbox() {
  const rows = [
    { t: 'H-1B approval · I-797', f: 'USCIS Texas Service Center', r: 'LIN-26-144-21807', m: 'R. Verma', c: 98, s: 'Auto-filed' },
    { t: 'Receipt notice · I-797C', f: 'USCIS NSC', r: 'EAC-26-129-00412', m: 'S. Gupta', c: 96, s: 'Auto-filed' },
    { t: 'Request for Evidence', f: 'USCIS NSC', r: 'EAC-26-129-00412', m: 'S. Gupta', c: 89, s: 'Review' },
    { t: 'I-485 biometrics', f: 'USCIS ASC', r: 'MSC-26-132-00871', m: 'V. Singh', c: 92, s: 'Auto-filed' },
    { t: 'Unknown sender', f: 'legal@bluerockpartners.com', r: '—', m: '—', c: 34, s: 'Triage' },
  ];
  return (
    <div style={{ display: 'flex', background: PS.warmWhite, height: 560, fontFamily: 'Inter, system-ui' }}>
      <MiniSidebar active="inbox" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '10px 18px', borderBottom: `1px solid ${PS.mist}`, background: '#fff', fontSize: 11, fontWeight: 600, color: PS.charcoal }}>Smart inbox</div>
        <div style={{ flex: 1, padding: 18 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: PS.charcoal, letterSpacing: -0.3, fontFamily: 'Source Serif 4, Georgia, serif' }}>USCIS mail, auto-filed</div>
              <div style={{ fontSize: 11, color: PS.gray, marginTop: 2 }}>Forward notices to uscis@nimbus.immihub.mail · 142 items parsed this month</div>
            </div>
            <Pill variant="valid">94% auto-filed</Pill>
          </div>
          <div style={{ background: '#fff', border: `1px solid ${PS.mist}`, borderRadius: 10, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1.4fr 1.1fr 0.8fr 0.7fr 0.9fr', padding: '9px 14px', background: PS.cloud, fontSize: 9, fontWeight: 600, color: PS.gray, letterSpacing: 0.04 * 10, textTransform: 'uppercase' }}>
              <div>Form type</div><div>From</div><div>Receipt</div><div>Employee</div><div>Confidence</div><div>Status</div>
            </div>
            {rows.map((r, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1.4fr 1.1fr 0.8fr 0.7fr 0.9fr', padding: '11px 14px', alignItems: 'center', borderTop: `1px solid ${PS.mist}`, fontSize: 11 }}>
                <div style={{ fontWeight: 600, color: PS.charcoal }}>{r.t}</div>
                <div style={{ color: PS.slate, fontSize: 10 }}>{r.f}</div>
                <div style={{ color: PS.slate, fontVariantNumeric: 'tabular-nums', fontSize: 10 }}>{r.r}</div>
                <div style={{ color: PS.charcoal, fontWeight: 500 }}>{r.m}</div>
                <div>
                  <div style={{ width: 50, height: 4, background: PS.cloud, borderRadius: 99, overflow: 'hidden' }}>
                    <div style={{ width: r.c + '%', height: '100%', background: r.c > 90 ? PS.green : r.c > 70 ? PS.warnFg : PS.dangerFg }} />
                  </div>
                  <div style={{ fontSize: 9, color: PS.gray, marginTop: 2, fontVariantNumeric: 'tabular-nums' }}>{r.c}%</div>
                </div>
                <div><Pill variant={r.s === 'Auto-filed' ? 'valid' : r.s === 'Review' ? 'warn' : 'danger'}>{r.s}</Pill></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============= SCREEN: Audit Mode =============
function ScreenAudit() {
  return (
    <div style={{ display: 'flex', background: PS.warmWhite, height: 560, fontFamily: 'Inter, system-ui' }}>
      <MiniSidebar active="audit" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '10px 18px', borderBottom: `1px solid ${PS.mist}`, background: '#fff', fontSize: 11, fontWeight: 600, color: PS.charcoal, display: 'flex', alignItems: 'center', gap: 8 }}>
          Audit mode
          <Pill variant="neutral">Read-only</Pill>
        </div>
        <div style={{ flex: 1, padding: 18 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: PS.charcoal, letterSpacing: -0.3, fontFamily: 'Source Serif 4, Georgia, serif' }}>Generate audit binder</div>
              <div style={{ fontSize: 11, color: PS.gray, marginTop: 2 }}>12-month window · Apr 2025 → Apr 2026 · 142 employees · PII redacted</div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <div style={{ border: `1px solid ${PS.mist}`, background: '#fff', padding: '6px 10px', borderRadius: 6, fontSize: 11, fontWeight: 500, color: PS.slate }}>PDF</div>
              <div style={{ background: PS.blue, color: '#fff', padding: '6px 10px', borderRadius: 6, fontSize: 11, fontWeight: 500 }}>Generate binder</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 12 }}>
            <div style={{ background: '#fff', border: `1px solid ${PS.mist}`, borderRadius: 10, padding: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: PS.charcoal, marginBottom: 10 }}>Include</div>
              {[
                ['I-9 forms', '142 · full with §2', true],
                ['LCAs (H-1B)', '98 · all posted', true],
                ['Public Access Files', '98 · complete', true],
                ['PWDs (PERM)', '12 · 3 pending', true],
                ['Recruitment records (PERM)', '12 sets', false],
                ['Benefits parity', 'All roles', false],
              ].map(([t, d, on], i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', borderTop: i ? `1px solid ${PS.mist}` : 0 }}>
                  <div style={{ width: 14, height: 14, borderRadius: 4, border: `1.5px solid ${on ? PS.blue : PS.mist}`, background: on ? PS.blue : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>{on ? <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg> : null}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 500, color: PS.charcoal }}>{t}</div>
                    <div style={{ fontSize: 10, color: PS.gray }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', border: `1px solid ${PS.mist}`, borderRadius: 10, padding: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: PS.charcoal, marginBottom: 10 }}>Redact</div>
              {['SSN', 'Passport number', 'Date of birth', 'Home address', 'Bank account'].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '7px 0', borderTop: i ? `1px solid ${PS.mist}` : 0, fontSize: 12 }}>
                  <div style={{ flex: 1, color: PS.charcoal, fontWeight: 500 }}>{t}</div>
                  <div style={{ width: 26, height: 14, borderRadius: 999, background: PS.blue, position: 'relative' }}>
                    <div style={{ position: 'absolute', right: 1, top: 1, width: 12, height: 12, borderRadius: 999, background: '#fff' }} />
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 12, padding: 10, background: PS.ice, borderRadius: 8, fontSize: 10, color: PS.blueDeep, lineHeight: 1.5 }}>
                Binder is read-only, time-bound, and access-logged. Shared links expire after 14 days.
              </div>
            </div>
          </div>
          <div style={{ marginTop: 12, background: '#fff', border: `1px solid ${PS.mist}`, borderRadius: 10, padding: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: PS.charcoal }}>12-month compliance trend</div>
              <div style={{ fontSize: 10, color: PS.gray }}>· healthy %</div>
            </div>
            {/* Simple sparkline */}
            <svg width="100%" height="48" viewBox="0 0 400 48" preserveAspectRatio="none">
              <polyline points="0,32 33,28 66,30 99,24 132,22 165,26 198,20 231,16 264,14 297,18 330,12 363,8 400,10" stroke={PS.blue} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="0,32 33,28 66,30 99,24 132,22 165,26 198,20 231,16 264,14 297,18 330,12 363,8 400,10 400,48 0,48" fill="rgba(79,158,214,0.08)" stroke="none"/>
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: PS.gray, marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>
              <div>Apr '25</div><div>Jul '25</div><div>Oct '25</div><div>Jan '26</div><div>Apr '26</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  PS, Pill, Avatar, Runway, MiniSidebar,
  ScreenHero, ScreenDashboard, ScreenEmployees, ScreenEmployeeDrawer, ScreenGracePeriod,
  ScreenTravel, ScreenCases, ScreenInbox, ScreenAudit,
});
