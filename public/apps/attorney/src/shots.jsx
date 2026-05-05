// Product screenshot mocks — rendered as compact SVG/HTML so source stripes remain crisp.

function BrowserChrome({ url = 'attorneys.immihub.com/dashboard', children, style }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 14, overflow: 'hidden',
      border: `1px solid ${T.mist}`, boxShadow: T.shadow.xl,
      ...style,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 14px', background: T.cloud,
        borderBottom: `1px solid ${T.mist}`,
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#FF5F57','#FEBC2E','#28C840'].map(c => (
            <span key={c} style={{ width: 11, height: 11, borderRadius: 999, background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, textAlign: 'center',
          background: '#fff', borderRadius: 6,
          padding: '4px 10px', fontSize: 11, color: T.gray,
          fontFamily: 'JetBrains Mono, ui-monospace, monospace',
          border: `1px solid ${T.mist}`,
        }}>{url}</div>
        <div style={{ width: 44 }} />
      </div>
      {children}
    </div>
  );
}

function AppSidebar({ active }) {
  const items = [
    ['Dashboard', 'dash'], ['Cases', 'kanban'], ['Inbox', 'inbox'],
    ['Documents', 'file'], ['Calendar', 'clock'], ['Clients', 'users'],
    ['Billing', 'scale'], ['Settings', 'lock'],
  ];
  return (
    <div style={{
      width: 200, borderRight: `1px solid ${T.mist}`,
      background: T.warmWhite, padding: '18px 12px',
      display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 8px 16px' }}>
        <img src="assets/logo-immihub.png" alt="" style={{ height: 18 }} />
        <span style={{ fontSize: 10, color: T.gray, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Attorney</span>
      </div>
      {items.map(([label, icon]) => {
        const isActive = active === label;
        return (
          <div key={label} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '7px 10px', borderRadius: 8,
            background: isActive ? T.blueIce : 'transparent',
            color: isActive ? T.blueDeep : T.slate,
            fontSize: 12, fontWeight: isActive ? 600 : 500,
          }}>
            <Icon name={icon} size={15} />
            {label}
          </div>
        );
      })}
      <div style={{ flex: 1 }} />
      <div style={{ padding: '8px 10px', fontSize: 10, color: T.gray }}>
        <div style={{ fontWeight: 600, color: T.charcoal }}>Hernandez &amp; Co.</div>
        <div>Boutique tier</div>
      </div>
    </div>
  );
}

/* ============= DASHBOARD SHOT ============= */
function DashboardShot() {
  const kpis = [
    { label: 'Active matters', n: '37', sub: '+4 this month' },
    { label: 'RFE deadlines', n: '3', sub: '≤ 21 days', tone: 'red' },
    { label: 'Unbilled time', n: '$28.4k', sub: 'across 19 matters' },
    { label: 'Trust balance', n: '$412k', sub: 'IOLTA segregated' },
  ];
  const incoming = [
    { src: 'employer', actor: 'Aperture Systems', act: 'shared signed I-129 + LCA', doc: 'Hassan · H-1B extension', t: '12m' },
    { src: 'consumer', actor: 'Omar Hassan',      act: 'uploaded passport + I-94', doc: 'Hassan · H-1B extension', t: '34m' },
    { src: 'dso',      actor: 'Stanford ISSS',    act: 'shared CPT authorization',  doc: 'Mehta · F-1 CPT',         t: '1h' },
    { src: 'uscis',    actor: 'USCIS',            act: 'forwarded RFE notice',      doc: 'EAC-24-189-45201',       t: '2h' },
    { src: 'employer', actor: 'Grafton Capital',  act: 'shared org chart + worksite', doc: 'Mehta · F-1 CPT',       t: '3h' },
  ];
  return (
    <div style={{ display: 'flex', background: T.warmWhite, fontSize: 12, color: T.charcoal }}>
      <AppSidebar active="Dashboard" />
      <div style={{ flex: 1, padding: 18, display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <div>
            <div className="serif" style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em' }}>Good morning, Maria</div>
            <div style={{ fontSize: 11, color: T.gray, marginTop: 2 }}>Tuesday, April 21 · 3 things need you today</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ padding: '5px 10px', border: `1px solid ${T.mist}`, borderRadius: 8, fontSize: 11, color: T.slate, background: '#fff' }}>⌘K Search</div>
            <div style={{ padding: '5px 10px', background: T.green, color: '#fff', borderRadius: 8, fontSize: 11, fontWeight: 600 }}>+ New matter</div>
          </div>
        </div>

        {/* KPI row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
          {kpis.map(k => (
            <div key={k.label} style={{
              background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 10, padding: 12,
              borderLeft: k.tone === 'red' ? `3px solid ${T.danger}` : `1px solid ${T.mist}`,
            }}>
              <div style={{ fontSize: 9, fontWeight: 600, color: T.gray, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{k.label}</div>
              <div className="mono" style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 4, color: k.tone === 'red' ? T.danger : T.charcoal }}>{k.n}</div>
              <div style={{ fontSize: 10, color: T.gray, marginTop: 2 }}>{k.sub}</div>
            </div>
          ))}
        </div>

        {/* Incoming + Today grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 12, minHeight: 0 }}>
          <div style={{ background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 10 }}>
            <div style={{ padding: '10px 14px', borderBottom: `1px solid ${T.mist}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600 }}>ImmiHub Incoming</div>
                <div style={{ fontSize: 10, color: T.gray }}>Auto-organized documents from connected counterparties</div>
              </div>
              <Pill tone="blue" small>Live</Pill>
            </div>
            <div>
              {incoming.map((it, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '8px 1fr auto',
                  gap: 10, padding: '10px 14px',
                  borderBottom: i < incoming.length - 1 ? `1px dashed ${T.mist}` : 'none',
                  alignItems: 'center',
                }}>
                  <span style={{ width: 3, height: 28, background: T.src[it.src].bar, borderRadius: 2 }} />
                  <div>
                    <div style={{ fontSize: 11.5, fontWeight: 500 }}>
                      <span style={{ color: T.charcoal, fontWeight: 600 }}>{it.actor}</span> <span style={{ color: T.slate }}>{it.act}</span>
                    </div>
                    <div style={{ fontSize: 10, color: T.gray, marginTop: 2, display: 'flex', gap: 8, alignItems: 'center' }}>
                      <SourceChip src={it.src} small />
                      <span className="mono">{it.doc}</span>
                    </div>
                  </div>
                  <div className="mono" style={{ fontSize: 10, color: T.gray }}>{it.t}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 10, padding: '10px 14px' }}>
              <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>What needs you</div>
              {[
                { t: 'Hassan RFE · 21 days', sub: 'Omar Hassan · H-1B', tone: 'red' },
                { t: 'Premium processing · 11 days', sub: 'Varma · I-129', tone: 'amber' },
                { t: 'Conflict review pending', sub: 'Park intake', tone: 'amber' },
              ].map((x, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, padding: '6px 0', alignItems: 'center', borderTop: i ? `1px dashed ${T.mist}` : 'none' }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: x.tone === 'red' ? T.danger : T.amber }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, fontWeight: 500 }}>{x.t}</div>
                    <div style={{ fontSize: 10, color: T.gray }}>{x.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 10, padding: '10px 14px' }}>
              <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Today · Apr 21</div>
              {[
                { t: '10:30', label: 'Intake · Daniel Park', type: 'Initial consult' },
                { t: '14:00', label: 'Prep · Li Chen I-485 interview', type: 'Case review' },
              ].map((x, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, padding: '6px 0', borderTop: i ? `1px dashed ${T.mist}` : 'none' }}>
                  <div className="mono" style={{ fontSize: 10, color: T.gray, width: 32 }}>{x.t}</div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 500 }}>{x.label}</div>
                    <div style={{ fontSize: 10, color: T.gray }}>{x.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============= RFE WORKSPACE SHOT ============= */
function RfeShot() {
  const reqs = [
    { n: '1', t: 'Beneficiary\u2019s educational credentials', done: true },
    { n: '2', t: 'Detailed position description', done: true },
    { n: '3', t: 'Specialty occupation evidence', done: false, cur: true },
    { n: '4', t: 'Employer-employee relationship', done: false },
  ];
  const evidence = [
    { src: 'employer', t: 'Signed I-129 petition', d: 'Aperture Systems · Apr 3' },
    { src: 'employer', t: 'Labor Condition Application', d: 'LCA I-200-24103 · certified' },
    { src: 'consumer', t: 'Master\u2019s diploma + transcripts', d: 'Omar Hassan · uploaded' },
    { src: 'consumer', t: 'Passport + I-94', d: 'Omar Hassan · uploaded' },
    { src: 'attorney', t: 'Position description memo', d: 'Maria H. · draft', priv: true },
    { src: 'employer', t: 'Org chart · Engineering', d: 'Aperture HR · Apr 5' },
  ];
  return (
    <div style={{ display: 'flex', background: T.warmWhite, fontSize: 11, color: T.charcoal }}>
      <AppSidebar active="Cases" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* header */}
        <div style={{ padding: '12px 18px', borderBottom: `1px solid ${T.mist}`, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div>
            <div style={{ fontSize: 10, color: T.gray }}>Cases · Hassan, Omar</div>
            <div className="serif" style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.02em' }}>RFE response · H-1B specialty occupation</div>
          </div>
          <Pill tone="red" small>21 days</Pill>
          <div style={{ flex: 1 }} />
          <div className="mono" style={{ fontSize: 10, color: T.gray }}>EAC-24-189-45201</div>
          <div style={{ padding: '4px 10px', background: T.charcoal, color: '#fff', borderRadius: 6, fontSize: 10, fontWeight: 600 }}>Assemble packet</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr 260px', flex: 1, minHeight: 0 }}>
          {/* left — requests */}
          <div style={{ borderRight: `1px solid ${T.mist}`, padding: 12, background: T.warmWhite }}>
            <div style={{ fontSize: 9, fontWeight: 600, color: T.gray, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>USCIS requests (4)</div>
            {reqs.map(r => (
              <div key={r.n} style={{
                padding: '8px 10px', marginBottom: 6, borderRadius: 8,
                background: r.cur ? T.blueIce : '#fff',
                border: `1px solid ${r.cur ? T.blue : T.mist}`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{
                    width: 14, height: 14, borderRadius: 999,
                    background: r.done ? T.green : (r.cur ? T.blue : T.cloud),
                    color: '#fff', fontSize: 8, fontWeight: 700,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  }}>{r.done ? '✓' : r.n}</span>
                  <span style={{ fontSize: 10.5, fontWeight: 500 }}>{r.t}</span>
                </div>
              </div>
            ))}
          </div>

          {/* center — quoted text + draft */}
          <div style={{ padding: 14, overflow: 'hidden' }}>
            <div style={{ fontSize: 9, fontWeight: 600, color: T.gray, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>USCIS quoted text</div>
            <div style={{
              padding: 10, background: T.amberBg, borderLeft: `3px solid ${T.amber}`,
              borderRadius: 6, fontSize: 10.5, color: '#6B4A0F', lineHeight: 1.5,
              fontFamily: 'Fraunces, Georgia, serif',
            }}>
              "The record does not establish that the proffered position qualifies as a <b>specialty occupation</b> within the meaning of section 214(i)(1) of the Act. Submit additional evidence..."
            </div>
            <div style={{ fontSize: 9, fontWeight: 600, color: T.gray, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '14px 0 6px' }}>Draft response</div>
            <div className="serif" style={{ fontSize: 11, lineHeight: 1.55, color: T.charcoal }}>
              The proffered position, <b>Senior Machine Learning Engineer</b>, satisfies the specialty occupation criteria under 8 C.F.R. § 214.2(h)(4)(iii)(A). The position requires the theoretical and practical application of a body of highly specialized knowledge <span style={{ background: T.blueIce, padding: '0 3px', color: T.blueDeep }}>[cite Dhanasar, position description]</span>, and a bachelor's degree or higher in a directly related field is a normal minimum requirement for entry into the occupation...
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 10, fontSize: 10 }}>
              <div style={{ padding: '4px 9px', background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 6 }}>Attach evidence →</div>
              <div style={{ padding: '4px 9px', background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 6 }}>Insert template</div>
            </div>
          </div>

          {/* right — evidence locker */}
          <div style={{ borderLeft: `1px solid ${T.mist}`, padding: 12, background: T.warmWhite, overflow: 'hidden' }}>
            <div style={{ fontSize: 9, fontWeight: 600, color: T.gray, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Evidence locker</div>
            {evidence.map((e, i) => (
              <div key={i} style={{
                display: 'flex', gap: 8, alignItems: 'flex-start',
                padding: '8px 0',
                borderBottom: i < evidence.length - 1 ? `1px dashed ${T.mist}` : 'none',
              }}>
                <span style={{ width: 3, alignSelf: 'stretch', background: T.src[e.src].bar, borderRadius: 2, minHeight: 24 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 10.5, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {e.t} {e.priv && <Pill tone="gray" small style={{ fontSize: 8 }}>Privileged</Pill>}
                  </div>
                  <div style={{ fontSize: 9.5, color: T.gray, marginTop: 1 }}>{e.d}</div>
                </div>
              </div>
            ))}
            <div style={{
              marginTop: 12, padding: 10, background: T.cloud, borderRadius: 8,
              fontSize: 10, color: T.slate, lineHeight: 1.5,
            }}>
              <b style={{ color: T.charcoal }}>5 of 6</b> exhibits arrived pre-organized from connected counterparties.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============= CASES KANBAN SHOT ============= */
function CasesShot() {
  const cols = [
    { t: 'Inquiry', n: 3, cards: [
      { src: 'consumer', who: 'D. Park', visa: 'O-1 inquiry', by: 'MH' },
    ]},
    { t: 'Consultation', n: 2, cards: [
      { src: 'consumer', who: 'A. Varma', visa: 'EB-2 NIW', by: 'JR' },
    ]},
    { t: 'Retained', n: 5, cards: [
      { src: 'employer', who: 'Aperture · Chen', visa: 'H-1B transfer', by: 'MH', pri: 'high' },
      { src: 'dso',      who: 'R. Mehta',        visa: 'F-1 CPT',        by: 'JR' },
    ]},
    { t: 'Prep', n: 7, cards: [
      { src: 'employer', who: 'Aperture · Singh', visa: 'I-140 EB-2',    by: 'MH' },
    ]},
    { t: 'Filed', n: 9, cards: [
      { src: 'consumer', who: 'L. Chen',         visa: 'I-485 AOS',      by: 'JR', rcpt: 'MSC-25-104-88210' },
    ]},
    { t: 'RFE', n: 3, cards: [
      { src: 'employer', who: 'Aperture · Hassan', visa: 'H-1B ext',     by: 'MH', pri: 'critical', rcpt: 'EAC-24-189-45201' },
    ]},
  ];
  return (
    <div style={{ display: 'flex', background: T.warmWhite, fontSize: 11 }}>
      <AppSidebar active="Cases" />
      <div style={{ flex: 1, padding: 14, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
          <div className="serif" style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.02em' }}>Cases</div>
          <div style={{ fontSize: 10, color: T.gray }}>37 active · 8 stages</div>
          <div style={{ flex: 1 }} />
          <Pill tone="gray" small>Kanban</Pill>
          <Pill tone="gray" small>Table</Pill>
        </div>
        {/* filter bar */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
          {['All attorneys', 'All stages', 'All priorities', 'Source: any', 'Visa type: any'].map(f => (
            <div key={f} style={{ padding: '4px 10px', background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 999, fontSize: 10, color: T.slate }}>{f} ▾</div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0,1fr))', gap: 8 }}>
          {cols.map(c => (
            <div key={c.t} style={{ background: T.cloud, borderRadius: 10, padding: 8, minHeight: 260 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, padding: '2px 4px' }}>
                <div style={{ fontSize: 10, fontWeight: 600, color: T.slate }}>{c.t}</div>
                <div className="mono" style={{ fontSize: 9, color: T.gray }}>{c.n}</div>
              </div>
              {c.cards.map((card, i) => (
                <div key={i} style={{
                  background: '#fff', borderRadius: 8, padding: 8, marginBottom: 6,
                  border: `1px solid ${T.mist}`,
                  borderLeft: `3px solid ${T.src[card.src].bar}`,
                  boxShadow: T.shadow.xs,
                }}>
                  <div style={{ fontSize: 10.5, fontWeight: 600, color: T.charcoal }}>{card.who}</div>
                  <div style={{ fontSize: 10, color: T.slate, marginTop: 2 }}>{card.visa}</div>
                  {card.rcpt && <div className="mono" style={{ fontSize: 9, color: T.gray, marginTop: 3 }}>{card.rcpt}</div>}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 6 }}>
                    <SourceChip src={card.src} small />
                    {card.pri && <Pill tone={card.pri === 'critical' ? 'red' : 'amber'} small>{card.pri}</Pill>}
                    <span style={{ width: 18, height: 18, borderRadius: 999, background: T.blueIce, color: T.blueDeep, fontSize: 9, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{card.by}</span>
                  </div>
                </div>
              ))}
              {c.cards.length === 0 && (
                <div style={{ padding: 10, fontSize: 10, color: T.gray, textAlign: 'center' }}>—</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============= INBOX (USCIS forwarding) SHOT ============= */
function InboxShot() {
  const notices = [
    { subj: 'Request for Evidence', rcpt: 'EAC-24-189-45201', match: 'Hassan · H-1B ext', conf: 98, cur: true },
    { subj: 'I-797 Notice of Action', rcpt: 'LIN-25-077-12089', match: 'Singh · I-140', conf: 96 },
    { subj: 'Biometrics appointment', rcpt: 'MSC-25-104-88210', match: 'Chen · I-485', conf: 94 },
    { subj: 'Fee-related · no receipt', rcpt: '—', match: 'Unmatched', conf: 0 },
    { subj: 'NOID · moral turpitude', rcpt: 'SRC-26-118-00491', match: 'No active matter', conf: 0 },
  ];
  return (
    <div style={{ display: 'flex', background: T.warmWhite, fontSize: 11 }}>
      <AppSidebar active="Inbox" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <div style={{ padding: 14, borderBottom: `1px solid ${T.mist}` }}>
          <div className="serif" style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.02em' }}>USCIS inbox</div>
          <div style={{
            marginTop: 6, padding: '8px 12px', background: T.amberBg, borderLeft: `3px solid ${T.amber}`,
            borderRadius: 6, fontSize: 11, color: '#6B4A0F',
          }}>
            Forward notices to <span className="mono" style={{ fontWeight: 600 }}>casebox@hco-immigration.immihub.com</span> — receipt numbers auto-route to the matching case.
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', flex: 1, minHeight: 0 }}>
          <div style={{ borderRight: `1px solid ${T.mist}` }}>
            {notices.map((n, i) => (
              <div key={i} style={{
                padding: '10px 14px',
                borderBottom: i < notices.length - 1 ? `1px solid ${T.mist}` : 'none',
                background: n.cur ? T.blueIce : 'transparent',
                borderLeft: n.cur ? `3px solid ${T.blue}` : 'none',
                paddingLeft: n.cur ? 11 : 14,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: 11.5, fontWeight: 600 }}>{n.subj}</div>
                  <div className="mono" style={{ fontSize: 9.5, color: T.gray }}>{n.rcpt}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                  {n.conf === 0
                    ? <Pill tone="red" small>Unmatched</Pill>
                    : <Pill tone={n.conf > 95 ? 'green' : 'amber'} small>{n.conf}% match · {n.match}</Pill>}
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: 14 }}>
            <div style={{ fontSize: 9, fontWeight: 600, color: T.gray, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Notice detail</div>
            <div style={{ marginTop: 8, padding: 12, background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 10 }}>
              <div style={{ fontSize: 12, fontWeight: 600 }}>Request for Evidence · I-129</div>
              <div className="mono" style={{ fontSize: 10, color: T.gray, marginTop: 2 }}>EAC-24-189-45201 · Vermont Service Center</div>
              <div style={{ marginTop: 10, fontSize: 11, color: T.slate, lineHeight: 1.5 }}>
                Extracted receipt number matched to <b>Hassan · H-1B extension</b> at 98% confidence. Deadline computed from notice date: <b>May 12, 2026</b> (87-day rule).
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <div style={{ padding: '6px 12px', background: T.green, color: '#fff', borderRadius: 6, fontSize: 10.5, fontWeight: 600 }}>Accept match</div>
                <div style={{ padding: '6px 12px', background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 6, fontSize: 10.5 }}>Reassign</div>
                <div style={{ padding: '6px 12px', background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 6, fontSize: 10.5 }}>Create new matter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { BrowserChrome, AppSidebar, DashboardShot, RfeShot, CasesShot, InboxShot });
