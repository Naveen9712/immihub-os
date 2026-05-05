// Page sections for the ImmiHub for Attorneys marketing site.
// Each top-level export renders one section; Site composes them.

const { useState, useEffect, useRef } = React;

/* ─────────────────────── NAV ─────────────────────── */
function Nav({ accent }) {
  const A = accentColor(accent);
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: 'rgba(250,251,253,0.82)', backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)', borderBottom: `1px solid ${T.mist}`,
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '14px 32px',
        display: 'flex', alignItems: 'center', gap: 32,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2, lineHeight: 1 }}>
          <img src="assets/logo-immihub.png" alt="ImmiHub" style={{ height: 24 }} />
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: T.gray, paddingLeft: 2 }}>For attorneys</span>
        </div>
        <div style={{ display: 'flex', gap: 24, flex: 1, marginLeft: 20 }}>
          {[
            ['The moat', '#moat'],
            ['Product', '#product'],
            ['Compare', '#compare'],
            ['Pricing', '#pricing'],
            ['Security', '#security'],
            ['FAQ', '#faq'],
          ].map(([l,h]) => (
            <a key={l} href={h} style={{ fontSize: 13.5, color: T.slate, fontWeight: 500 }}>{l}</a>
          ))}
        </div>
        <a href="#waitlist" style={{
          background: A.primary, color: '#fff',
          padding: '9px 16px', borderRadius: 8, fontSize: 13.5, fontWeight: 600,
        }}>Join the waitlist →</a>
      </div>
    </div>
  );
}

/* ─────────────────────── HERO ─────────────────────── */
function Hero({ accent, heroShot }) {
  const A = accentColor(accent);
  const Shot = heroShot === 'rfe' ? RfeShot : heroShot === 'cases' ? CasesShot : DashboardShot;
  const url = heroShot === 'rfe'
    ? 'attorneys.immihub.com/cases/hassan/rfe'
    : heroShot === 'cases'
    ? 'attorneys.immihub.com/cases'
    : 'attorneys.immihub.com/dashboard';
  return (
    <div style={{ padding: '80px 32px 60px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40 }}>
        <div style={{ maxWidth: 900 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', color: T.slate,
            padding: '6px 12px', borderRadius: 999, fontSize: 12, fontWeight: 500,
            border: `1px solid ${T.mist}`,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: A.primary }} />
            Pre-launch · Waitlist open for founding firms
          </div>
          <h1 className="serif" style={{
            fontSize: 76, fontWeight: 500, color: T.charcoal,
            letterSpacing: '-0.03em', lineHeight: 1.02,
            margin: '28px 0 0',
          }}>
            Cases that arrive<br/>
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: T.slate }}>pre-organized.</span>
          </h1>
          <p style={{ fontSize: 20, color: T.slate, lineHeight: 1.5, maxWidth: 680, margin: '28px 0 0', fontWeight: 400 }}>
            A practice-management platform for US immigration attorneys — where new matters walk in the door with passports, petition data, I-20s, and receipt notices already sorted by source. You spend time on legal judgment, not intake.
          </p>

          <div style={{ display: 'flex', gap: 12, marginTop: 32, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#waitlist" style={{
              background: A.primary, color: '#fff',
              padding: '14px 24px', borderRadius: 10, fontSize: 15, fontWeight: 600,
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>Join the waitlist <Icon name="arrow" size={16}/></a>
            <a href="#product" style={{
              background: '#fff', color: T.charcoal, border: `1px solid ${T.mist}`,
              padding: '13px 22px', borderRadius: 10, fontSize: 15, fontWeight: 500,
            }}>See how a matter arrives →</a>
            <div style={{ fontSize: 12, color: T.gray, marginLeft: 12 }}>
              No credit card · Founding-firm pricing locked for 2 years
            </div>
          </div>

          {/* Source-stripe legend — establishes the visual vocabulary immediately */}
          <div style={{
            marginTop: 40, padding: '14px 18px',
            background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 12,
            display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
            boxShadow: T.shadow.sm,
          }}>
            <span className="label" style={{ color: T.gray }}>The vocabulary</span>
            {['consumer','employer','dso','attorney','uscis'].map(s => (
              <SourceChip key={s} src={s} />
            ))}
          </div>
        </div>

        {/* Big browser shot */}
        <div style={{ position: 'relative' }}>
          <BrowserChrome url={url}>
            <div style={{ height: 560, overflow: 'hidden' }}>
              <Shot />
            </div>
          </BrowserChrome>

          {/* Floating callout */}
          <div style={{
            position: 'absolute', right: -12, top: 120,
            background: '#fff', padding: '12px 16px', borderRadius: 12,
            border: `1px solid ${T.mist}`, boxShadow: T.shadow.lg,
            maxWidth: 260,
          }}>
            <div className="label" style={{ color: T.blueDeep }}>ImmiHub Incoming</div>
            <div style={{ fontSize: 13, color: T.charcoal, marginTop: 6, lineHeight: 1.45 }}>
              Every document carries a source stripe. At a glance you know where it came from and whether you can trust it.
            </div>
          </div>

          <div style={{
            position: 'absolute', left: -16, bottom: 60,
            background: '#fff', padding: '12px 16px', borderRadius: 12,
            border: `1px solid ${T.mist}`, boxShadow: T.shadow.lg,
            maxWidth: 240,
          }}>
            <div className="label" style={{ color: '#8A6200' }}>USCIS inbox</div>
            <div style={{ fontSize: 13, color: T.charcoal, marginTop: 6, lineHeight: 1.45 }}>
              Forward notices to <span className="mono" style={{ fontSize: 11 }}>casebox@…</span> — receipt numbers auto-route.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── MOAT DIAGRAM ─────────────────── */
function MoatSection() {
  const sources = [
    { src: 'consumer', name: 'Consumer app',     who: 'The beneficiary',           brings: ['Passports · I-94s · EADs', 'Pay stubs · credentials', 'Identity documents'] },
    { src: 'employer', name: 'Employer Dashboard', who: 'The sponsoring employer', brings: ['Signed I-129s · LCAs', 'I-797s · org charts', 'Worksite + role data'] },
    { src: 'dso',      name: 'DSO Portal',        who: 'The university ISSS',      brings: ['I-20s · SEVIS records', 'CPT / OPT authorizations', 'Travel signatures'] },
  ];
  return (
    <div id="moat" style={{ background: T.cloud, padding: '96px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 760, marginBottom: 56 }}>
          <div className="label" style={{ color: T.blueDeep }}>The moat</div>
          <h2 className="serif" style={{ fontSize: 52, fontWeight: 500, color: T.charcoal, letterSpacing: '-0.02em', lineHeight: 1.08, margin: '14px 0 20px' }}>
            Three products feed every case.<br/>
            <span style={{ fontStyle: 'italic', color: T.slate }}>Yours is the fourth.</span>
          </h2>
          <p style={{ fontSize: 17, color: T.slate, lineHeight: 1.6 }}>
            Other attorney tools inherit empty shells. ImmiHub is building all four products at once — so by the time a matter reaches your desk, the client, the employer, and (for students) the DSO are already on-platform. Their documents land in your case with a source tag you can see at a glance.
          </p>
        </div>

        {/* Diagram */}
        <div style={{
          background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 20,
          padding: 40, boxShadow: T.shadow.sm,
          display: 'grid', gridTemplateColumns: '1fr 80px 1fr', alignItems: 'center', gap: 0,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {sources.map((s, i) => (
              <div key={s.src} style={{
                background: T.src[s.src].bg,
                borderLeft: `4px solid ${T.src[s.src].bar}`,
                borderRadius: 10, padding: '16px 18px',
                position: 'relative',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: T.src[s.src].fg }}>{s.name}</div>
                  <div style={{ fontSize: 12, color: T.slate }}>{s.who}</div>
                </div>
                <ul style={{ margin: '8px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {s.brings.map(b => (
                    <li key={b} style={{ fontSize: 13, color: T.slate, display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span style={{ width: 4, height: 4, background: T.src[s.src].bar, borderRadius: 999 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <svg viewBox="0 0 80 300" style={{ width: '100%', height: 280 }}>
            <defs>
              <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill={T.slate} />
              </marker>
            </defs>
            <path d="M0 50 Q 40 50, 40 150 Q 40 250, 80 250" fill="none" stroke={T.src.consumer.bar} strokeWidth="1.5" markerEnd="url(#arr)" />
            <path d="M0 150 L 80 150" fill="none" stroke={T.src.employer.bar} strokeWidth="1.5" markerEnd="url(#arr)" />
            <path d="M0 250 Q 40 250, 40 150 Q 40 50, 80 50" fill="none" stroke={T.src.dso.bar} strokeWidth="1.5" markerEnd="url(#arr)" />
          </svg>

          <div style={{
            background: T.charcoal, color: '#fff',
            borderRadius: 14, padding: '32px 28px',
            display: 'flex', flexDirection: 'column', gap: 12,
            boxShadow: T.shadow.md,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src="assets/logo-immihub.png" alt="" style={{ height: 20, filter: 'brightness(0) invert(1)' }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A3B0C0' }}>Attorney Portal</span>
            </div>
            <div className="serif" style={{ fontSize: 26, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#fff', margin: '6px 0 4px' }}>
              A new matter walks in the door with the evidence already sorted.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 10 }}>
              {[
                'Documents auto-filed under the right case',
                'Receipt numbers routed from the USCIS inbox',
                'Deadlines generated from rule engine',
                'Conflicts surfaced for partner review',
              ].map(t => (
                <div key={t} style={{ fontSize: 13, color: '#E2E7EE', display: 'flex', gap: 8 }}>
                  <Icon name="check" size={16} color={T.blueSky} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 24, fontSize: 13, color: T.gray, maxWidth: 760, lineHeight: 1.6 }}>
          USCIS itself can't be directly connected — there is no public case-status API. ImmiHub handles this the only way it can be handled: a per-firm <span className="mono" style={{ fontSize: 12, color: T.slate }}>casebox@…</span> forwarding address, receipt-number auto-match, and human triage for unmatched notices.
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── PRODUCT SHOWCASE ─────────────────── */
function ProductSection() {
  const [tab, setTab] = useState('dash');
  const tabs = [
    { k: 'dash',  label: 'Dashboard',      desc: 'Morning triage with ImmiHub Incoming — a chronological feed of documents that arrived overnight from connected counterparties.', shot: DashboardShot, url: 'attorneys.immihub.com/dashboard' },
    { k: 'rfe',   label: 'RFE workspace',  desc: 'Three-pane: USCIS request list, draft response, evidence locker with source stripes. The moment you feel the platform most.',    shot: RfeShot,       url: 'attorneys.immihub.com/cases/hassan/rfe' },
    { k: 'cases', label: 'Cases',          desc: 'Eight-stage lifecycle from Inquiry to Closed. Filter by source, priority, attorney. Drag across stages.',                           shot: CasesShot,     url: 'attorneys.immihub.com/cases' },
    { k: 'inbox', label: 'USCIS inbox',    desc: 'Forward notices to <span class="mono" style="font-family:JetBrains Mono">casebox@…immihub.com</span>. Receipt numbers auto-route; unmatched triage to human.', shot: InboxShot, url: 'attorneys.immihub.com/inbox' },
  ];
  const current = tabs.find(t => t.k === tab);
  const Shot = current.shot;

  return (
    <div id="product" style={{ padding: '96px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ maxWidth: 760, marginBottom: 36 }}>
        <div className="label" style={{ color: T.blueDeep }}>The product</div>
        <h2 className="serif" style={{ fontSize: 48, fontWeight: 500, color: T.charcoal, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '14px 0 16px' }}>
          Built around how immigration cases <span style={{ fontStyle: 'italic', color: T.slate }}>actually move.</span>
        </h2>
        <p style={{ fontSize: 16, color: T.slate, lineHeight: 1.6 }}>
          The same source-stripe vocabulary runs through every screen. An LCA from the Employer Dashboard shows up in the evidence locker with the same blue stripe it had on the dashboard feed.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {tabs.map(t => (
          <button key={t.k} onClick={() => setTab(t.k)} style={{
            padding: '9px 16px', borderRadius: 999,
            background: tab === t.k ? T.charcoal : '#fff',
            color: tab === t.k ? '#fff' : T.slate,
            border: `1px solid ${tab === t.k ? T.charcoal : T.mist}`,
            fontSize: 13, fontWeight: 600, cursor: 'pointer',
          }}>{t.label}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24, alignItems: 'start' }}>
        <BrowserChrome url={current.url}>
          <div style={{ height: 520, overflow: 'hidden' }}>
            <Shot />
          </div>
        </BrowserChrome>
        <div style={{ position: 'sticky', top: 100 }}>
          <div className="serif" style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em', color: T.charcoal }}>
            {current.label}
          </div>
          <div style={{ fontSize: 14, color: T.slate, lineHeight: 1.6, marginTop: 10 }}
               dangerouslySetInnerHTML={{ __html: current.desc }} />
          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Source stripes on every row',
              'USCIS receipt-prefix validation',
              'Deadline rule engine (14 triggers)',
              'Conflict surfacing · partner sign-off required',
            ].map(t => (
              <div key={t} style={{ fontSize: 13, color: T.slate, display: 'flex', gap: 8 }}>
                <Icon name="check" size={16} color={T.green} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── LIVE DEMO: RECEIPT VALIDATOR ─────────────────── */
const SERVICE_CENTERS = {
  EAC: 'Vermont Service Center',
  LIN: 'Nebraska Service Center',
  MSC: 'National Benefits Center',
  WAC: 'California Service Center',
  NBC: 'National Benefits Center',
  SRC: 'Texas Service Center',
  YSC: 'Potomac Service Center',
  IOE: 'USCIS Electronic Immigration System',
};

function ReceiptDemo() {
  const [val, setVal] = useState('EAC-24-189-45201');
  const parsed = (() => {
    const v = val.trim().toUpperCase().replace(/\s/g, '');
    const m = v.match(/^([A-Z]{3})[-]?(\d{2})[-]?(\d{3})[-]?(\d{5})$/);
    if (!m) return { ok: false, err: v.length === 0 ? 'Enter a receipt number' : 'Format: 3 letters + 10 digits (e.g. EAC-24-189-45201)' };
    const [, prefix, yy, day, seq] = m;
    const center = SERVICE_CENTERS[prefix];
    if (!center) return { ok: false, err: `Unknown service-center prefix "${prefix}". Expected one of ${Object.keys(SERVICE_CENTERS).join(', ')}.` };
    const filingYear = 2000 + parseInt(yy, 10);
    return {
      ok: true, prefix, center,
      filingYear,
      dayOfYear: parseInt(day, 10),
      seq,
    };
  })();

  const samples = ['EAC-24-189-45201', 'LIN-25-077-12089', 'MSC-25-104-88210', 'XYZ-23-000-00000'];

  return (
    <div style={{ background: T.charcoal, color: '#fff', padding: '96px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <div className="label" style={{ color: T.blueSky }}>Try it now</div>
          <h2 className="serif" style={{ fontSize: 44, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '14px 0 16px' }}>
            Paste a receipt number.<br/>
            <span style={{ fontStyle: 'italic', color: '#B7C4D1' }}>Watch it resolve.</span>
          </h2>
          <p style={{ fontSize: 15.5, color: '#B7C4D1', lineHeight: 1.6, maxWidth: 480 }}>
            Every USCIS receipt carries a three-letter service-center prefix. ImmiHub validates the format live, resolves the center, and routes the notice to the matching case by receipt when a forwarded email arrives in your <span className="mono" style={{ color: '#fff' }}>casebox@…</span>.
          </p>
          <div style={{ marginTop: 22, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, color: '#8896A6', marginRight: 4, alignSelf: 'center' }}>Try:</span>
            {samples.map(s => (
              <button key={s} onClick={() => setVal(s)} style={{
                padding: '5px 10px', borderRadius: 6, cursor: 'pointer',
                background: 'rgba(255,255,255,0.06)', color: '#E2E7EE', border: `1px solid rgba(255,255,255,0.14)`,
                fontSize: 11, fontFamily: 'JetBrains Mono, monospace',
              }}>{s}</button>
            ))}
          </div>
        </div>

        <div style={{
          background: '#0F1621', border: `1px solid rgba(255,255,255,0.08)`,
          borderRadius: 16, padding: 28, boxShadow: T.shadow.xl,
        }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#8896A6', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>USCIS receipt number</div>
          <input
            value={val} onChange={e => setVal(e.target.value)}
            spellCheck={false}
            style={{
              width: '100%', padding: '14px 16px',
              background: '#1A2332', color: '#fff',
              border: `1px solid ${parsed.ok ? T.green : T.danger}`,
              borderRadius: 10, fontFamily: 'JetBrains Mono, monospace',
              fontSize: 18, letterSpacing: '0.04em', outline: 'none',
              boxShadow: `0 0 0 3px ${parsed.ok ? 'rgba(52,184,124,0.18)' : 'rgba(217,79,79,0.18)'}`,
            }}
          />
          <div style={{ marginTop: 18 }}>
            {parsed.ok ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Pill tone="green">✓ Valid format</Pill>
                  <span style={{ fontSize: 12, color: '#8896A6' }}>Prefix recognized</span>
                </div>
                <DemoRow k="Service center"   v={`${parsed.prefix} · ${parsed.center}`} />
                <DemoRow k="Filing fiscal year" v={parsed.filingYear} />
                <DemoRow k="Day of year"       v={parsed.dayOfYear} />
                <DemoRow k="Case sequence"     v={parsed.seq} />
                <DemoRow k="Auto-match status" v="Would route to: Hassan · H-1B ext" highlight />
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Pill tone="red">× {parsed.err.startsWith('Unknown') ? 'Unknown prefix' : 'Invalid format'}</Pill>
                <div style={{ fontSize: 13, color: '#E2E7EE', lineHeight: 1.55 }}>{parsed.err}</div>
                <div style={{ fontSize: 11, color: '#8896A6', marginTop: 4 }}>Valid prefixes: {Object.keys(SERVICE_CENTERS).join(' · ')}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoRow({ k, v, highlight }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', gap: 12,
      padding: '8px 12px', borderRadius: 8,
      background: highlight ? 'rgba(79,158,214,0.12)' : 'rgba(255,255,255,0.03)',
      borderLeft: highlight ? `3px solid ${T.blue}` : `3px solid transparent`,
    }}>
      <span style={{ fontSize: 11, color: '#8896A6', fontWeight: 500 }}>{k}</span>
      <span className="mono" style={{ fontSize: 12, color: highlight ? T.blueSky : '#E2E7EE' }}>{v}</span>
    </div>
  );
}

/* ─────────────────── COMPARE ─────────────────── */
function CompareSection() {
  const rows = [
    ['Cases arrive with documents pre-sorted by source', 'inszoom-', 'docketwise-', 'clio-', 'mycase-', 'immihub'],
    ['Connected Employer Dashboard sharing signed I-129s / LCAs', 'inszoom-', 'docketwise-', 'clio-', 'mycase-', 'immihub'],
    ['Connected DSO Portal for student I-20 / CPT cases',          'inszoom-', 'docketwise-', 'clio-', 'mycase-', 'immihub'],
    ['Consumer app the client already uses for their own status', 'inszoom-', 'docketwise-', 'clio-', 'mycase-', 'immihub'],
    ['USCIS receipt format validation + auto-match by prefix',    'inszoom+', 'docketwise+', 'clio-', 'mycase-', 'immihub'],
    ['Immigration-native case lifecycle (8 stages, RFE, NOID, AOS)', 'inszoom+', 'docketwise+', 'clio-', 'mycase-', 'immihub'],
    ['Visa bulletin + priority-date tracking',                   'inszoom+', 'docketwise+', 'clio-', 'mycase-', 'immihub'],
    ['IOLTA trust accounting',                                   'inszoom+', 'docketwise+', 'clio+', 'mycase+',  'immihub'],
    ['Conflict surfacing with required partner sign-off',        'inszoom+', 'docketwise+', 'clio+', 'mycase+',  'immihub'],
    ['LEDES task codes on time entries',                         'inszoom+', 'docketwise+', 'clio+', 'mycase-',  'immihub'],
  ];
  const cols = [
    { k: 'feat', label: '' },
    { k: 'inszoom',    label: 'INSZoom' },
    { k: 'docketwise', label: 'Docketwise' },
    { k: 'clio',       label: 'Clio' },
    { k: 'mycase',     label: 'MyCase' },
    { k: 'immihub',    label: 'ImmiHub', self: true },
  ];
  const cell = (code) => {
    if (code === 'immihub') return <Icon name="check" size={16} color={T.green} />;
    if (code.endsWith('+')) return <Icon name="check" size={16} color={T.gray} />;
    return <Icon name="x" size={16} color={T.grayLight} />;
  };
  return (
    <div id="compare" style={{ padding: '96px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ maxWidth: 760, marginBottom: 32 }}>
        <div className="label" style={{ color: T.blueDeep }}>Compare</div>
        <h2 className="serif" style={{ fontSize: 48, fontWeight: 500, color: T.charcoal, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '14px 0 16px' }}>
          Other tools manage cases.<br/>
          <span style={{ fontStyle: 'italic', color: T.slate }}>We sort them before they arrive.</span>
        </h2>
        <p style={{ fontSize: 16, color: T.slate, lineHeight: 1.6 }}>
          INSZoom, Docketwise, Clio, MyCase — all competent case managers. None of them are building the three counterparty products that would let cases show up pre-organized.
        </p>
      </div>

      <div style={{ background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 16, overflow: 'hidden', boxShadow: T.shadow.sm }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr repeat(5, 1fr)', alignItems: 'center' }}>
          {cols.map((c, i) => (
            <div key={c.k} style={{
              padding: i === 0 ? '18px 20px' : '18px 0',
              textAlign: i === 0 ? 'left' : 'center',
              fontSize: 12, fontWeight: 700,
              color: c.self ? T.blueDeep : T.slate,
              borderBottom: `1px solid ${T.mist}`,
              background: c.self ? T.blueIce : 'transparent',
              letterSpacing: c.self ? '-0.01em' : 0,
            }}>{c.label}</div>
          ))}
          {rows.map((r, i) => (
            <React.Fragment key={i}>
              <div style={{ padding: '14px 20px', fontSize: 13.5, color: T.charcoal, borderBottom: i < rows.length - 1 ? `1px solid ${T.mist}` : 'none' }}>
                {r[0]}
              </div>
              {r.slice(1).map((code, j) => (
                <div key={j} style={{
                  padding: '14px 0', textAlign: 'center',
                  borderBottom: i < rows.length - 1 ? `1px solid ${T.mist}` : 'none',
                  background: code === 'immihub' ? T.blueIce : 'transparent',
                }}>
                  {cell(code)}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 16, fontSize: 12, color: T.gray, lineHeight: 1.6 }}>
        <Icon name="check" size={12} color={T.gray} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> Supported ·
        <Icon name="x" size={12} color={T.grayLight} style={{ display: 'inline', verticalAlign: 'middle', margin: '0 4px' }} /> Not available.
        Comparison based on each vendor's publicly marketed capabilities as of 2026. Features evolve; verify with the vendor before signing.
      </div>
    </div>
  );
}

/* ─────────────────── PRICING (tier-aware) ─────────────────── */
function PricingSection({ firmTier, setFirmTier, accent }) {
  const A = accentColor(accent);
  const tiers = [
    {
      k: 'solo',
      name: 'Solo',
      price: '$129',
      per: 'per attorney / month',
      tagline: 'For solo immigration attorneys.',
      incl: [
        'Unlimited matters',
        'USCIS inbox + receipt validation',
        'Consumer-app integration',
        'Deadline rule engine',
        'IOLTA trust accounting',
      ],
      excl: ['DSO Portal (off by default)', 'Firm activity feed', 'LEDES billing export'],
    },
    {
      k: 'boutique',
      name: 'Boutique',
      price: '$99',
      per: 'per seat / month · 2–10 seats',
      tagline: 'Shared visibility for small firms.',
      popular: true,
      incl: [
        'Everything in Solo',
        'Firm activity feed + shared matters',
        'Employer Dashboard integration',
        'DSO Portal integration',
        'Conflict engine + partner sign-off',
        'Retainer + trust management',
      ],
      excl: ['Multi-office routing', 'Custom conflict rules'],
    },
    {
      k: 'midsize',
      name: 'Mid-size',
      price: 'Custom',
      per: '10–50 seats',
      tagline: 'For firms with offices, practice groups, and LEDES requirements.',
      incl: [
        'Everything in Boutique',
        'Multi-office routing',
        'LEDES 98B billing export',
        'Custom conflict rules',
        'Role-based privilege access',
        'Single sign-on · dedicated onboarding',
      ],
      excl: [],
    },
  ];

  return (
    <div id="pricing" style={{ background: T.cloud, padding: '96px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 760, marginBottom: 36 }}>
          <div className="label" style={{ color: T.blueDeep }}>Pricing</div>
          <h2 className="serif" style={{ fontSize: 48, fontWeight: 500, color: T.charcoal, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '14px 0 16px' }}>
            Founding-firm pricing, <span style={{ fontStyle: 'italic', color: T.slate }}>locked for two years.</span>
          </h2>
          <p style={{ fontSize: 16, color: T.slate, lineHeight: 1.6 }}>
            Join the waitlist during pre-launch and the first 12 months are free. The next 24 are at founding-firm rates. Cancel any time; export your data in standard formats.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {tiers.map(t => {
            const isActive = firmTier === t.k;
            return (
              <div key={t.k} onClick={() => setFirmTier(t.k)} style={{
                background: '#fff', borderRadius: 16, padding: 28, cursor: 'pointer',
                border: `1px solid ${isActive ? A.primary : T.mist}`,
                boxShadow: isActive ? `0 0 0 3px ${A.primary}22, ${T.shadow.md}` : T.shadow.sm,
                position: 'relative', transition: 'all 160ms',
              }}>
                {t.popular && (
                  <div style={{
                    position: 'absolute', top: -10, right: 20,
                    background: T.charcoal, color: '#fff',
                    padding: '4px 10px', borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase',
                  }}>Most common</div>
                )}
                <div className="serif" style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em', color: T.charcoal }}>{t.name}</div>
                <div style={{ fontSize: 13, color: T.slate, marginTop: 4, lineHeight: 1.5, minHeight: 40 }}>{t.tagline}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 18 }}>
                  <span className="serif" style={{ fontSize: 44, fontWeight: 500, color: T.charcoal, letterSpacing: '-0.03em' }}>{t.price}</span>
                </div>
                <div style={{ fontSize: 12, color: T.gray, marginTop: 2 }}>{t.per}</div>
                <div style={{ height: 1, background: T.mist, margin: '20px 0' }} />
                <div className="label" style={{ color: T.gray, marginBottom: 10 }}>Included</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {t.incl.map(x => (
                    <div key={x} style={{ fontSize: 13, color: T.slate, display: 'flex', gap: 8, lineHeight: 1.4 }}>
                      <Icon name="check" size={15} color={T.green} />
                      {x}
                    </div>
                  ))}
                  {t.excl.map(x => (
                    <div key={x} style={{ fontSize: 13, color: T.grayLight, display: 'flex', gap: 8, lineHeight: 1.4 }}>
                      <Icon name="x" size={15} />
                      <span style={{ textDecoration: 'line-through' }}>{x}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 24 }}>
                  <a href="#waitlist" style={{
                    display: 'block', textAlign: 'center',
                    background: isActive ? A.primary : '#fff',
                    color: isActive ? '#fff' : T.charcoal,
                    border: `1px solid ${isActive ? A.primary : T.mist}`,
                    padding: '11px 16px', borderRadius: 10,
                    fontSize: 13.5, fontWeight: 600,
                  }}>
                    {t.k === 'midsize' ? 'Talk to us' : 'Join the waitlist'}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── SECURITY + COMPLIANCE ─────────────────── */
function SecuritySection() {
  const items = [
    { icon: 'shield', t: 'Privilege-aware by design', d: 'Attorney work product carries a privileged flag on every document and audit-log event. Role-based access enforces who can see what.' },
    { icon: 'scale',  t: 'IOLTA trust accounting',     d: 'Per-matter trust balances segregated in line with state IOLTA rules. Automatic flagging when a retainer goes negative.' },
    { icon: 'list',   t: 'Full audit log',             d: 'Every view, export, status change, and communication is logged with timestamp, actor, and IP. Export for bar audit at any time.' },
    { icon: 'lock',   t: 'ABA MR compliance framing',  d: 'Conflicts surfaced, never adjudicated — MR 1.7 / 1.9. Co-counsel splits display MR 1.5(e) compliance notes.' },
    { icon: 'users',  t: 'Conflict surfacing',         d: 'Scan across prior matters at intake. Partner sign-off gates engagement. We do not auto-clear — that judgment belongs to a partner.' },
    { icon: 'check',  t: 'No data sold. Ever.',        d: 'Beneficiaries own their documents. Firms own their matters. We are paid by firms, not by selling data to third parties.' },
  ];
  return (
    <div id="security" style={{ padding: '96px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 100 }}>
          <div className="label" style={{ color: T.blueDeep }}>Security &amp; compliance</div>
          <h2 className="serif" style={{ fontSize: 44, fontWeight: 500, color: T.charcoal, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '14px 0 16px' }}>
            The ethics rules <span style={{ fontStyle: 'italic', color: T.slate }}>are the product.</span>
          </h2>
          <p style={{ fontSize: 15, color: T.slate, lineHeight: 1.6 }}>
            ImmiHub is software built by immigration attorneys. The model rules aren't a feature spec — they're the boundary condition. When something requires partner judgment, the product asks for it.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {items.map(it => (
            <div key={it.t} style={{
              background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 14,
              padding: 24,
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: T.blueIce, color: T.blueDeep,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 14,
              }}>
                <Icon name={it.icon} size={20} />
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, color: T.charcoal, marginBottom: 6, letterSpacing: '-0.01em' }}>{it.t}</div>
              <div style={{ fontSize: 13, color: T.slate, lineHeight: 1.55 }}>{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── FAQ ─────────────────── */
function FaqSection() {
  const items = [
    { q: 'When does ImmiHub for Attorneys launch?',
      a: 'Beta opens in 2026 for founding firms on the waitlist. General availability follows once the beta cohort is stable. The consumer app launches Beta 1.0 in June 2026 and the Employer Dashboard and DSO Portal follow — the attorney portal depends on all three being live.' },
    { q: 'What exactly arrives "pre-organized"?',
      a: 'If your client has the ImmiHub consumer app, their passport, I-94, EAD, and credential uploads land in the matter with a green Consumer stripe. If the sponsoring employer uses the Employer Dashboard, signed I-129s, LCAs, and org charts land with a blue stripe. University F-1 cases from connected DSOs bring I-20s and CPT authorizations in with a violet stripe. USCIS notices forwarded to your firm casebox auto-match by receipt number.' },
    { q: 'Can I migrate from INSZoom, Docketwise, Clio, or MyCase?',
      a: 'Migration support is included for founding firms. We export from your current system via CSV/PDF packets, map to the ImmiHub case model, and verify the first five matters with you before flipping over. Historical matters become searchable for conflict checks from day one.' },
    { q: 'Does ImmiHub pull case status from USCIS automatically?',
      a: 'No — USCIS.gov does not expose a public case-status API. That is a hard limit on every tool in this category, including ours. ImmiHub handles it with a per-firm forwarding address: your paralegal or the system forwards USCIS notice emails to casebox@your-firm.immihub.com, and ImmiHub extracts the receipt number and routes the notice to the matching matter.' },
    { q: 'How do conflicts work?',
      a: 'At new-matter intake, ImmiHub scans across your historical matters (name, aliases, prior employers, family members) and surfaces high / medium / low matches with a reasoning note per match. It does not auto-clear. A partner must tick "I have personally reviewed" to proceed to engagement. The audit log captures who signed off and when.' },
    { q: 'What about IOLTA and trust accounting?',
      a: 'Per-matter trust balances are displayed and flagged when negative. Production integrations with bank ACH rails are planned; during beta, trust accounting is ledger-visible but reconciliation happens in your existing bank workflow.' },
    { q: 'Is my data used to train AI?',
      a: 'No. Firm data is not used for model training. The AI features (case brief generation, draft response assistance) run against your matter context at request time and do not persist into any training corpus. Privileged documents are excluded from any AI context by default.' },
    { q: 'What does the waitlist get me?',
      a: 'Early access in order of signup, 12 months free during beta, 24 months at founding-firm rates, and a standing spot in our monthly feedback call with the product team. Founding firms shape what ships.' },
  ];
  const [open, setOpen] = useState(0);
  return (
    <div id="faq" style={{ background: T.cloud, padding: '96px 32px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="label" style={{ color: T.blueDeep, textAlign: 'center' }}>FAQ</div>
        <h2 className="serif" style={{ fontSize: 44, fontWeight: 500, color: T.charcoal, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '14px 0 36px', textAlign: 'center' }}>
          Answers for skeptical attorneys.
        </h2>
        <div style={{ background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 16, overflow: 'hidden' }}>
          {items.map((it, i) => (
            <div key={i} style={{ borderBottom: i < items.length - 1 ? `1px solid ${T.mist}` : 'none' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: '100%', textAlign: 'left', background: 'transparent', border: 'none',
                padding: '20px 28px', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
              }}>
                <span className="serif" style={{ fontSize: 17, fontWeight: 500, color: T.charcoal, letterSpacing: '-0.01em' }}>{it.q}</span>
                <span style={{
                  width: 28, height: 28, borderRadius: 999,
                  background: open === i ? T.charcoal : T.cloud,
                  color: open === i ? '#fff' : T.slate,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, flexShrink: 0, transition: 'all 160ms',
                }}>{open === i ? '–' : '+'}</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 28px 22px', fontSize: 14.5, color: T.slate, lineHeight: 1.65 }}>
                  {it.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── WAITLIST ─────────────────── */
function WaitlistSection({ accent }) {
  const A = accentColor(accent);
  const [form, setForm] = useState({ name: '', email: '', firm: '', size: 'boutique', role: 'partner' });
  const [submitted, setSubmitted] = useState(false);
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };

  const field = (k, placeholder, extraProps = {}) => (
    <input
      value={form[k]} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))}
      placeholder={placeholder}
      {...extraProps}
      style={{
        width: '100%', padding: '12px 14px',
        background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 10,
        fontSize: 14, color: T.charcoal, fontFamily: 'inherit', outline: 'none',
      }}
    />
  );

  return (
    <div id="waitlist" style={{ padding: '96px 32px 120px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{
        background: T.charcoal, color: '#fff',
        borderRadius: 24, padding: '56px 56px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* subtle source stripes as decorative bleed */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: 12, height: '100%', background: `linear-gradient(180deg, ${T.src.consumer.bar} 0%, ${T.src.consumer.bar} 33%, ${T.src.employer.bar} 33%, ${T.src.employer.bar} 66%, ${T.src.dso.bar} 66%, ${T.src.dso.bar} 100%)` }} />
        <div>
          <div className="label" style={{ color: T.blueSky }}>Join the waitlist</div>
          <h2 className="serif" style={{ fontSize: 42, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '14px 0 16px', color: '#fff' }}>
            Founding firms <span style={{ fontStyle: 'italic', color: '#B7C4D1' }}>shape what ships.</span>
          </h2>
          <p style={{ fontSize: 15, color: '#B7C4D1', lineHeight: 1.6 }}>
            We're onboarding a small cohort of solo, boutique, and mid-size immigration firms for beta. 12 months free, founding-firm pricing locked for 24 months after that, and a standing seat in the monthly product call.
          </p>
          <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Priority order based on signup date',
              'Migration help from your current system',
              'Direct line to the product team during beta',
              'No sales call required to join',
            ].map(t => (
              <div key={t} style={{ fontSize: 13.5, color: '#E2E7EE', display: 'flex', gap: 8 }}>
                <Icon name="check" size={17} color={T.blueSky} />
                {t}
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', color: T.charcoal, borderRadius: 16, padding: 32 }}>
          {submitted ? (
            <div style={{ padding: '40px 0', textAlign: 'center' }}>
              <div style={{ width: 56, height: 56, margin: '0 auto 16px', borderRadius: 999, background: T.mint, color: '#1F7A4E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="check" size={28} />
              </div>
              <div className="serif" style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em' }}>You're on the list.</div>
              <div style={{ fontSize: 14, color: T.slate, marginTop: 8, maxWidth: 320, margin: '8px auto 0', lineHeight: 1.6 }}>
                We'll email {form.email || 'you'} when your firm's slot opens. Founding firms get 12 months free.
              </div>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 4 }}>Your details</div>
              {field('name', 'Full name', { required: true })}
              {field('email', 'Work email', { type: 'email', required: true })}
              {field('firm', 'Firm name', { required: true })}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <select value={form.size} onChange={e => setForm(f => ({ ...f, size: e.target.value }))} style={{
                  padding: '12px 14px', background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 10,
                  fontSize: 14, color: T.charcoal, fontFamily: 'inherit',
                }}>
                  <option value="solo">Solo</option>
                  <option value="boutique">Boutique (2–10)</option>
                  <option value="midsize">Mid-size (10–50)</option>
                  <option value="larger">Larger (50+)</option>
                </select>
                <select value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value }))} style={{
                  padding: '12px 14px', background: '#fff', border: `1px solid ${T.mist}`, borderRadius: 10,
                  fontSize: 14, color: T.charcoal, fontFamily: 'inherit',
                }}>
                  <option value="partner">Partner</option>
                  <option value="associate">Associate</option>
                  <option value="of-counsel">Of counsel</option>
                  <option value="paralegal">Paralegal / ops</option>
                </select>
              </div>
              <button type="submit" style={{
                background: A.primary, color: '#fff', border: 'none',
                padding: '14px 16px', borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: 'pointer',
                marginTop: 6,
              }}>Join the waitlist →</button>
              <div style={{ fontSize: 11.5, color: T.gray, textAlign: 'center', lineHeight: 1.5 }}>
                We'll never sell your data. Unsubscribe any time from any email.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── FOOTER ─────────────────── */
function Footer() {
  const groups = [
    { t: 'Product', links: ['The moat', 'Dashboard', 'RFE workspace', 'Cases', 'USCIS inbox', 'Pricing'] },
    { t: 'Platform', links: ['Consumer app', 'Employer Dashboard', 'DSO Portal', 'Attorney Portal'] },
    { t: 'Company', links: ['About', 'Roadmap', 'Blog', 'Contact'] },
    { t: 'Legal', links: ['Privacy', 'Terms', 'Security', 'DPA'] },
  ];
  return (
    <div style={{ borderTop: `1px solid ${T.mist}`, background: T.warmWhite, padding: '56px 32px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <ImmiHubOSFamily homeHref="../../index.html" />
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 32 }}>
          <div>
            <img src="assets/logo-immihub.png" alt="ImmiHub" style={{ height: 24 }} />
            <div style={{ fontSize: 13, color: T.slate, marginTop: 14, lineHeight: 1.6, maxWidth: 280 }}>
              An immigration operating system. Four connected products: the consumer app, the Employer Dashboard, the DSO Portal, and the Attorney Portal.
            </div>
          </div>
          {groups.map(g => (
            <div key={g.t}>
              <div className="label" style={{ color: T.gray, marginBottom: 12 }}>{g.t}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {g.links.map(l => (
                  <a key={l} href="#" style={{ fontSize: 13, color: T.slate }}>{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 40, paddingTop: 24, borderTop: `1px solid ${T.mist}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{ fontSize: 12, color: T.gray }}>© 2026 ImmiHub. Built for immigration attorneys.</div>
          <div style={{ fontSize: 12, color: T.gray }}>
            ImmiHub is not a law firm and does not provide legal advice. We are a software platform used by licensed attorneys.
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  Nav, Hero, MoatSection, ProductSection, ReceiptDemo,
  CompareSection, PricingSection, SecuritySection, FaqSection,
  WaitlistSection, Footer,
});
