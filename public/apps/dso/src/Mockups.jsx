// DSO Portal product mockups — reusable React components rendered as inline SVG/HTML
// Styled to match ImmiHub DS. All are static visual mockups, not interactive.

const mockupCSS = `
.pm { font-family: var(--font-sans); color: var(--fg-1); font-size: 12px; }
.pm-app { display: grid; grid-template-columns: 200px 1fr; background: var(--bg-page); min-height: 560px; }
.pm-side { background: #fff; border-right: 1px solid var(--border-subtle); padding: 18px 14px; }
.pm-brand { display:flex; align-items:center; gap:8px; padding: 4px 8px 18px; border-bottom: 1px solid var(--border-subtle); margin-bottom: 14px; }
.pm-brand-plane { width: 22px; height:22px; background: var(--im-blue); border-radius: 6px; display:flex; align-items:center; justify-content:center; color:#fff; }
.pm-brand-wordmark { font-weight:600; font-size:14px; color: var(--fg-1); letter-spacing:-0.01em; }
.pm-brand-lockup { font-family: var(--font-serif); font-style: italic; font-size: 10.5px; color: var(--fg-3); padding-left: 6px; border-left: 1px solid var(--border-subtle); margin-left: 6px; }
.pm-nav { display:grid; gap:2px; }
.pm-nav-item { padding: 7px 10px; font-size: 12px; color: var(--fg-2); border-radius: 6px; display:flex; align-items:center; gap:8px; cursor: default; }
.pm-nav-item.on { background: var(--im-blue-ice); color: var(--im-blue-deep); font-weight: 500; }
.pm-nav-ico { width:14px; height: 14px; opacity: 0.9; }
.pm-nav-section { font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--fg-3); padding: 14px 10px 6px; font-weight: 500; }
.pm-main { padding: 20px 24px; overflow: hidden; }
.pm-topbar { display:flex; align-items:center; justify-content: space-between; margin-bottom: 20px; }
.pm-title { font-family: var(--font-serif); font-size: 20px; font-weight: 500; color: var(--fg-1); letter-spacing: -0.01em; }
.pm-crumb { font-size: 11px; color: var(--fg-3); margin-bottom: 4px; }
.pm-search { background: var(--bg-alt); border-radius: 6px; padding: 6px 12px; font-size: 11px; color: var(--fg-3); width: 220px; }
.pm-avatar { width: 26px; height: 26px; border-radius: 50%; background: var(--im-blue); color:#fff; font-size: 10px; font-weight:500; display:flex; align-items:center; justify-content:center; }
.pm-kpis { display:grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 18px; }
.pm-kpi { background: #fff; border:1px solid var(--border-subtle); border-radius: 10px; padding: 14px; }
.pm-kpi-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--fg-3); font-weight:500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.pm-kpi-num { font-family: var(--font-serif); font-size: 28px; font-weight: 500; color: var(--fg-1); letter-spacing: -0.02em; margin-top: 4px; }
.pm-kpi-delta { font-size: 10px; color: var(--fg-3); margin-top: 4px; }
.pm-kpi-delta.up { color: var(--im-status-danger-fg); }
.pm-card { background: #fff; border: 1px solid var(--border-subtle); border-radius: 10px; padding: 16px; }
.pm-card h4 { margin: 0 0 10px; font-family: var(--font-serif); font-size: 14px; font-weight: 500; color: var(--fg-1); letter-spacing: -0.01em; }
.pm-two-col { display: grid; grid-template-columns: 1.3fr 1fr; gap: 12px; }
.pm-pill { display:inline-flex; align-items:center; gap:4px; padding: 2px 8px; border-radius: 999px; font-size: 10px; font-weight:500; }
.pm-pill.crit { background: var(--im-status-danger-bg); color: var(--im-status-danger-fg); }
.pm-pill.warn { background: var(--im-status-warn-bg); color: var(--im-status-warn-fg); }
.pm-pill.ok { background: var(--im-status-valid-bg); color: var(--im-status-valid-fg); }
.pm-pill.muted { background: var(--bg-alt); color: var(--fg-2); }
.pm-pill.info { background: var(--im-blue-ice); color: var(--im-blue-deep); }
.pm-row { display:flex; align-items:center; padding: 8px 0; gap: 10px; border-bottom: 1px solid var(--border-subtle); font-size: 11.5px; }
.pm-row:last-child { border-bottom: 0; }
.pm-days { font-family: var(--font-mono); font-size: 11px; color: var(--fg-2); min-width: 52px; }
.pm-days.red { color: var(--im-status-danger-fg); }
.pm-days.amber { color: var(--im-status-warn-fg); }
.pm-stu { display:flex; align-items:center; gap:8px; flex: 1; min-width: 0; }
.pm-stu-avatar { width:22px; height:22px; border-radius: 50%; font-size: 9px; font-weight:500; color:#fff; display:flex; align-items:center; justify-content:center; flex-shrink: 0; }
.pm-stu-name { font-weight: 500; color: var(--fg-1); font-size: 11.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.pm-stu-sub { color: var(--fg-3); font-size: 10.5px; }
.pm-tbl { width: 100%; border-collapse: collapse; font-size: 11.5px; }
.pm-tbl th { text-align:left; padding: 6px 8px 10px; font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--fg-3); border-bottom: 1px solid var(--border-subtle); font-weight: 500; }
.pm-tbl td { padding: 9px 8px; border-bottom: 1px solid var(--border-subtle); color: var(--fg-2); }
.pm-cal { display:grid; grid-template-columns: repeat(30, 1fr); gap: 2px; margin-top: 10px; }
.pm-cal-day { aspect-ratio: 1; border-radius: 2px; background: var(--bg-alt); position: relative; }
.pm-cal-day.e1 { background: #B8D5EB; }
.pm-cal-day.e2 { background: var(--im-blue-sky); }
.pm-cal-day.e3 { background: var(--im-blue); }
.pm-cal-day.crit { background: var(--im-status-danger-fg); }
.pm-cal-day.warn { background: var(--im-status-warn-fg); }
.pm-cal-leg { display:flex; gap: 14px; margin-top: 10px; font-size: 10px; color: var(--fg-3); }
.pm-cal-leg span { display:inline-flex; align-items:center; gap:5px; }
.pm-cal-leg i { width:8px; height:8px; border-radius: 2px; background: var(--im-blue); display:inline-block; }
.pm-btn { display:inline-flex; align-items:center; gap:5px; padding: 5px 10px; border-radius: 6px; font-size: 11px; font-weight:500; border:1px solid var(--border-default); background:#fff; color: var(--fg-1); cursor: default; }
.pm-btn.primary { background: var(--im-blue); color: #fff; border-color: transparent; }
.pm-btn.ghost { background: transparent; border-color: var(--border-default); }
`;

// Deterministic avatar colors
const avatarColors = ['#4F9ED6', '#2B7AB8', '#7BB8E2', '#34B87C', '#E5A318', '#8896A6'];
const avatarColor = (name) => {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return avatarColors[h % avatarColors.length];
};
const initials = (name) => name.split(' ').map(s => s[0]).slice(0,2).join('').toUpperCase();

function SideNav({ active }) {
  const items = [
    ['Overview', 'Calendar', 'overview'],
    ['SEVIS Queue', 'AlertTriangle', 'sevis'],
    ['New Arrivals', 'Users', 'arrivals'],
    ['Students', 'User', 'students'],
    ['Requests', 'Inbox', 'requests'],
    ['Batch I-20', 'FileText', 'batch'],
    ['What-If Simulator', 'GitBranch', 'whatif'],
    ['Reports', 'BarChart', 'reports'],
    ['Audit Trail', 'Shield', 'audit'],
  ];
  return (
    <div className="pm-side">
      <div className="pm-brand">
        <div className="pm-brand-plane">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="#fff"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/></svg>
        </div>
        <div>
          <div className="pm-brand-wordmark">ImmiHub</div>
        </div>
        <span className="pm-brand-lockup">DSO Portal</span>
      </div>
      <div className="pm-nav">
        {items.map(([label, icon, id]) => {
          const Ic = Ico[icon];
          return (
            <div key={id} className={`pm-nav-item ${active === id ? 'on' : ''}`}>
              <Ic className="pm-nav-ico" />
              <span>{label}</span>
            </div>
          );
        })}
        <div className="pm-nav-section">Administration</div>
        <div className="pm-nav-item"><Ico.Users className="pm-nav-ico"/><span>DSO team</span></div>
        <div className="pm-nav-item"><Ico.Layers className="pm-nav-ico"/><span>Settings</span></div>
      </div>
    </div>
  );
}

function TopBar({ crumb, title, user = 'Priya Raman' }) {
  return (
    <div className="pm-topbar">
      <div>
        <div className="pm-crumb">{crumb}</div>
        <div className="pm-title">{title}</div>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:10}}>
        <div className="pm-search">Search students, I-20 numbers, SEVIS IDs…</div>
        <div className="pm-avatar" style={{background: avatarColor(user)}}>{initials(user)}</div>
      </div>
    </div>
  );
}

// ---------- OVERVIEW ----------
function OverviewMockup() {
  const students = [
    ['Yuki Tanaka', 'PhD · Mech Eng · Program ends 17d', 'crit', 'i20-expiring', 17],
    ['Aisha Patel', 'STEM OPT · E-Verify 19d overdue', 'crit', 'everify-overdue', -19],
    ['Jian Li', 'F-1 · Termination report due', 'crit', 'termination', 3],
    ['Naledi Mokoena', 'OPT ending · STEM OPT eligible', 'warn', 'ead-expiring', 89],
    ['Rohan Mehta', 'CPT request · Summer 2026', 'warn', 'cpt-pending', 6],
    ['Ming Chen', 'Travel signature stale', 'warn', 'travel-sig-stale', 11],
    ['Sara Okonkwo', 'New arrival · Registration due', 'info', 'registration-due', 8],
  ];
  return (
    <div className="pm pm-app">
      <SideNav active="overview" />
      <div className="pm-main">
        <TopBar crumb="Thursday, April 16 · 2026" title="Overview" />
        <div className="pm-kpis">
          <div className="pm-kpi"><div className="pm-kpi-label">Active F-1 / J-1</div><div className="pm-kpi-num">2,847</div><div className="pm-kpi-delta">+12 this week</div></div>
          <div className="pm-kpi"><div className="pm-kpi-label">SEVIS events · 30d</div><div className="pm-kpi-num">142</div><div className="pm-kpi-delta up">11 due this week</div></div>
          <div className="pm-kpi"><div className="pm-kpi-label">Open requests</div><div className="pm-kpi-num">38</div><div className="pm-kpi-delta">8 awaiting DSO</div></div>
          <div className="pm-kpi"><div className="pm-kpi-label">At risk</div><div className="pm-kpi-num" style={{color:'var(--im-status-danger-fg)'}}>9</div><div className="pm-kpi-delta">3 critical</div></div>
        </div>
        <div className="pm-two-col">
          <div className="pm-card">
            <h4>30-day SEVIS reporting calendar</h4>
            <div className="pm-cal">
              {Array.from({length: 30}).map((_, i) => {
                const map = { 2:'e1', 3:'crit', 5:'e2', 7:'warn', 9:'e1', 10:'e3', 12:'e2', 14:'warn', 17:'crit', 19:'e1', 21:'e2', 24:'warn', 27:'e1', 28:'e2', 29:'e3' };
                return <div key={i} className={`pm-cal-day ${map[i] || ''}`} title={`Day ${i+1}`} />;
              })}
            </div>
            <div className="pm-cal-leg">
              <span><i style={{background:'var(--im-status-danger-fg)'}}/>Overdue</span>
              <span><i style={{background:'var(--im-status-warn-fg)'}}/>Due this week</span>
              <span><i style={{background:'var(--im-blue)'}}/>Reportable</span>
              <span><i style={{background:'var(--bg-alt)'}}/>Clear</span>
            </div>
            <div style={{marginTop: 16, padding: 12, background: 'var(--bg-alt)', borderRadius: 8, fontSize: 11, color: 'var(--fg-2)', lineHeight: 1.5}}>
              <strong style={{color:'var(--fg-1)', fontWeight: 500}}>Next 7 days:</strong> 3 termination reports, 2 program extensions, 6 travel signature reissues, 2 STEM OPT validations.
            </div>
          </div>
          <div className="pm-card">
            <h4>Risk-first · students</h4>
            <div>
              {students.map((s, i) => (
                <div key={i} className="pm-row">
                  <div className={`pm-days ${s[2] === 'crit' ? 'red' : s[2] === 'warn' ? 'amber' : ''}`}>
                    {s[4] < 0 ? `${-s[4]}d over` : `${s[4]}d left`}
                  </div>
                  <div className="pm-stu">
                    <div className="pm-stu-avatar" style={{background: avatarColor(s[0])}}>{initials(s[0])}</div>
                    <div style={{minWidth:0, flex:1}}>
                      <div className="pm-stu-name">{s[0]}</div>
                      <div className="pm-stu-sub">{s[1]}</div>
                    </div>
                  </div>
                  <span className={`pm-pill ${s[2]}`}>{s[3]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- SEVIS QUEUE ----------
function SevisQueueMockup() {
  const rows = [
    ['3d', 'red', 'Termination report', 'Jian Li', 'N0034567890', 'Unauthorized employment', 'Registrar confirm pending'],
    ['5d', 'amber', 'Program extension', 'Yuki Tanaka', 'N0045612388', 'New end date 2027-09-01', 'Advisor form pending'],
    ['6d', 'amber', 'CPT authorization', 'Rohan Mehta', 'N0038821104', 'Grafton Capital · ECON 498', 'Ready to file'],
    ['9d', '', 'Initial registration', 'Sara Okonkwo', 'N0049110023', '—', 'Arrived · check-in complete'],
    ['11d', '', 'Travel signature', 'Ming Chen', 'N0031290045', '12-month window', 'Ready to sign'],
    ['14d', '', 'STEM OPT validation', 'Naledi Mokoena', 'N0029887712', '6-month E-Verify check', 'Employer verified'],
    ['19d', '', 'Program extension', 'Aditya Singh', 'N0045921667', 'Dept approval on file', 'Ready to file'],
    ['23d', '', 'CPT authorization', 'Hana Kim', 'N0046110885', 'Boston Sci · BIO 590', 'Course map pending'],
  ];
  return (
    <div className="pm pm-app">
      <SideNav active="sevis" />
      <div className="pm-main">
        <TopBar crumb="Reporting · 30-day window" title="SEVIS reporting queue" />
        <div style={{display:'flex', gap: 8, marginBottom: 14}}>
          <span className="pm-pill info">All · 142</span>
          <span className="pm-pill crit">Overdue · 2</span>
          <span className="pm-pill warn">Due this week · 11</span>
          <span className="pm-pill muted">Next 30 days · 129</span>
        </div>
        <div className="pm-card" style={{padding: 4}}>
          <table className="pm-tbl">
            <thead>
              <tr>
                <th>Due</th>
                <th>Event</th>
                <th>Student</th>
                <th>SEVIS ID</th>
                <th>Detail</th>
                <th>Blocker</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td><span className={`pm-days ${r[1]}`} style={{display:'inline-block'}}>{r[0]}</span></td>
                  <td style={{color:'var(--fg-1)', fontWeight:500}}>{r[2]}</td>
                  <td>
                    <div style={{display:'flex', alignItems:'center', gap:6}}>
                      <div className="pm-stu-avatar" style={{background: avatarColor(r[3]), width: 18, height: 18, fontSize: 8}}>{initials(r[3])}</div>
                      {r[3]}
                    </div>
                  </td>
                  <td className="mono" style={{fontFamily:'var(--font-mono)', fontSize: 10.5}}>{r[4]}</td>
                  <td>{r[5]}</td>
                  <td><span className={`pm-pill ${r[6].includes('Ready') ? 'ok' : r[6].includes('pending') ? 'warn' : 'muted'}`}>{r[6]}</span></td>
                  <td><span className="pm-btn primary">File in SEVIS →</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ---------- STUDENT DRAWER ----------
function StudentDrawerMockup() {
  const timeline = [
    ['2023-08-21', 'I-20 issued', 'Active · Initial'],
    ['2023-09-04', 'Program start · check-in', 'Active'],
    ['2024-05-12', 'Travel signature', '12-mo window'],
    ['2025-04-03', 'Travel signature (reissue)', 'Current'],
    ['2026-04-02', 'Program extension requested', 'In review'],
  ];
  return (
    <div className="pm pm-app">
      <SideNav active="students" />
      <div className="pm-main" style={{padding: 0, display: 'grid', gridTemplateColumns: '1fr 360px'}}>
        <div style={{padding: '20px 24px', borderRight: '1px solid var(--border-subtle)'}}>
          <div className="pm-crumb">Students · PhD candidates · Active</div>
          <div style={{display:'flex', alignItems:'center', gap:12, marginTop: 4, marginBottom: 14}}>
            <div className="pm-stu-avatar" style={{background: avatarColor('Yuki Tanaka'), width: 40, height: 40, fontSize: 13}}>YT</div>
            <div>
              <div className="pm-title" style={{fontSize: 22}}>Yuki Tanaka</div>
              <div style={{fontSize: 11.5, color: 'var(--fg-3)'}}>F-1 · PhD Mechanical Engineering · SEVIS N0045612388 · Cohort AY23</div>
            </div>
            <span className="pm-pill crit" style={{marginLeft: 'auto'}}>17 days to program end</span>
          </div>
          <div style={{display:'flex', gap: 8, marginBottom: 14}}>
            <span className="pm-btn primary">Approve extension</span>
            <span className="pm-btn ghost">Sign travel endorsement</span>
            <span className="pm-btn ghost">Send message</span>
            <span className="pm-btn ghost">···</span>
          </div>
          <div style={{display:'flex', gap: 16, borderBottom: '1px solid var(--border-subtle)', marginBottom: 14, fontSize: 11.5}}>
            <div style={{padding:'8px 0', borderBottom: '2px solid var(--im-blue)', color:'var(--fg-1)', fontWeight:500}}>Overview</div>
            <div style={{padding:'8px 0', color: 'var(--fg-3)'}}>I-20 lifecycle</div>
            <div style={{padding:'8px 0', color: 'var(--fg-3)'}}>Requests</div>
            <div style={{padding:'8px 0', color: 'var(--fg-3)'}}>Employment</div>
            <div style={{padding:'8px 0', color: 'var(--fg-3)'}}>Messages</div>
            <div style={{padding:'8px 0', color: 'var(--fg-3)'}}>Audit</div>
          </div>
          <div className="pm-card" style={{marginBottom: 12}}>
            <h4>F-1 journey timeline</h4>
            <div>
              {timeline.map((t, i) => (
                <div key={i} className="pm-row">
                  <div className="pm-days">{t[0]}</div>
                  <div style={{flex: 1, fontSize: 11.5, color: 'var(--fg-1)'}}>{t[1]}</div>
                  <span className="pm-pill muted">{t[2]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pm-card">
            <h4>Risk signals</h4>
            <div className="pm-row">
              <span className="pm-pill crit">i20-expiring</span>
              <div style={{flex:1, fontSize: 11.5, color:'var(--fg-2)', marginLeft: 6}}>Program end 2026-05-03 · extension filed but advisor form pending</div>
            </div>
            <div className="pm-row">
              <span className="pm-pill warn">advisor-form-pending</span>
              <div style={{flex:1, fontSize: 11.5, color:'var(--fg-2)', marginLeft: 6}}>Prof. Harding · overdue 4 days · 2 reminders sent</div>
            </div>
          </div>
        </div>
        <div style={{padding: '20px 18px', background: '#fff'}}>
          <div style={{fontSize: 10, textTransform:'uppercase', letterSpacing: '0.06em', color:'var(--fg-3)', marginBottom: 10, fontWeight:500}}>At a glance</div>
          <div style={{display:'grid', gap: 10, fontSize: 11.5}}>
            <div style={{display:'flex', justifyContent:'space-between', color:'var(--fg-2)'}}><span>Status</span><span className="pm-pill ok">Active</span></div>
            <div style={{display:'flex', justifyContent:'space-between', color:'var(--fg-2)'}}><span>Program end</span><span className="mono" style={{fontFamily:'var(--font-mono)', color:'var(--im-status-danger-fg)'}}>2026-05-03</span></div>
            <div style={{display:'flex', justifyContent:'space-between', color:'var(--fg-2)'}}><span>Last travel sig</span><span className="mono" style={{fontFamily:'var(--font-mono)'}}>2025-04-03</span></div>
            <div style={{display:'flex', justifyContent:'space-between', color:'var(--fg-2)'}}><span>I-94 admit until</span><span className="mono" style={{fontFamily:'var(--font-mono)'}}>D/S</span></div>
            <div style={{display:'flex', justifyContent:'space-between', color:'var(--fg-2)'}}><span>DSO assigned</span><span>P. Raman</span></div>
            <div style={{display:'flex', justifyContent:'space-between', color:'var(--fg-2)'}}><span>Dept</span><span>Mech Engineering</span></div>
            <div style={{display:'flex', justifyContent:'space-between', color:'var(--fg-2)'}}><span>Funding</span><span>RA · NSF GRFP</span></div>
          </div>
          <div style={{marginTop: 20, padding: 12, background: 'var(--im-blue-ice)', borderRadius: 8, fontSize: 11, color: 'var(--im-blue-deep)', lineHeight: 1.5}}>
            <strong>Next action:</strong> Reissue I-20 once advisor form arrives. Estimated SEVIS report in 3 days.
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- WHAT-IF SIMULATOR ----------
function WhatIfMockup() {
  return (
    <div className="pm pm-app">
      <SideNav active="whatif" />
      <div className="pm-main">
        <TopBar crumb="Yuki Tanaka · Program extension simulation" title="What-If · program end change" />
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.4fr', gap: 14}}>
          <div className="pm-card">
            <h4>Proposed change</h4>
            <div style={{display:'grid', gap: 12, fontSize: 11.5}}>
              <div>
                <div style={{fontSize: 10, textTransform:'uppercase', letterSpacing: '0.06em', color:'var(--fg-3)', marginBottom: 4, fontWeight: 500}}>Current program end</div>
                <div className="mono" style={{fontFamily:'var(--font-mono)', fontSize: 16, color: 'var(--fg-1)'}}>2026-05-03</div>
              </div>
              <div>
                <div style={{fontSize: 10, textTransform:'uppercase', letterSpacing: '0.06em', color:'var(--fg-3)', marginBottom: 4, fontWeight: 500}}>New program end</div>
                <div style={{padding: '10px 12px', border: '1px solid var(--im-blue)', borderRadius: 6, background: 'var(--im-blue-ice)', fontFamily:'var(--font-mono)', fontSize: 16, color: 'var(--im-blue-deep)'}}>2026-09-01</div>
                <div style={{fontSize: 10.5, color: 'var(--fg-3)', marginTop: 4}}>+4 months · advisor-approved</div>
              </div>
              <div style={{padding: 10, background: 'var(--bg-alt)', borderRadius: 6, fontSize: 10.5, color: 'var(--fg-3)', lineHeight: 1.5}}>
                This is a preview. No change will be filed with SEVIS until you confirm.
              </div>
              <div style={{display:'flex', gap: 6}}>
                <span className="pm-btn ghost">Reset</span>
                <span className="pm-btn primary">Commit change →</span>
              </div>
            </div>
          </div>
          <div style={{display:'grid', gap: 10}}>
            <div className="pm-card">
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 8}}>
                <h4 style={{margin:0}}>Downstream effects</h4>
                <span className="pm-pill info">5 derived changes</span>
              </div>
              <div>
                {[
                  ['Grace period', '60 days ends 2026-07-02', '60 days ends 2026-10-31', 'ok'],
                  ['OPT earliest start', '2026-02-03 (90d before)', '2026-06-03 (shifted)', 'warn'],
                  ['OPT latest start', '2026-08-02', '2026-11-30', 'ok'],
                  ['SEVIS report', 'Program extension · due by 2026-05-03', 'Extended to 2026-09-01', 'info'],
                  ['CPT eligibility', '4 CPT-eligible courses summer 2026', 'Remains eligible', 'ok'],
                ].map((r, i) => (
                  <div key={i} className="pm-row" style={{fontSize: 11.5}}>
                    <div style={{flex: '0 0 130px', color:'var(--fg-1)', fontWeight:500}}>{r[0]}</div>
                    <div style={{flex: 1, color:'var(--fg-3)', fontFamily:'var(--font-mono)', fontSize: 10.5}}>{r[1]}</div>
                    <svg width="10" height="10" viewBox="0 0 10 10" style={{color:'var(--fg-3)', flexShrink:0, margin:'0 6px'}}><path d="M2 5h6M5 2l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    <div style={{flex: 1.2, color:'var(--fg-1)', fontFamily:'var(--font-mono)', fontSize: 10.5}}>{r[2]}</div>
                    <span className={`pm-pill ${r[3]}`}>{r[3] === 'ok' ? 'safe' : r[3] === 'warn' ? 'review' : 'report'}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pm-card">
              <h4>Risk signal impact</h4>
              <div style={{display:'flex', gap: 8, flexWrap:'wrap'}}>
                <span className="pm-pill crit" style={{textDecoration:'line-through'}}>i20-expiring</span>
                <svg width="12" height="12" viewBox="0 0 12 12" style={{color:'var(--fg-3)'}}><path d="M2 6h8M6 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                <span className="pm-pill ok">cleared</span>
                <div style={{flex:1}}/>
                <span className="pm-pill info">+ new: opt-window-shift</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- BATCH I-20 ----------
function BatchI20Mockup() {
  const steps = ['Select', 'Review & sign', 'Generate PDFs', 'Ready for pickup'];
  return (
    <div className="pm pm-app">
      <SideNav active="batch" />
      <div className="pm-main">
        <TopBar crumb="Spring 2026 · pre-departure" title="Batch I-20 reprint" />
        <div style={{display:'flex', gap: 0, background:'#fff', border:'1px solid var(--border-subtle)', borderRadius: 10, padding: 14, marginBottom: 14}}>
          {steps.map((s, i) => (
            <div key={i} style={{flex: 1, display:'flex', alignItems:'center', gap:8, paddingLeft: i === 0 ? 0 : 16, borderLeft: i === 0 ? 0 : '1px dashed var(--border-subtle)'}}>
              <div style={{width:22, height:22, borderRadius:'50%', background: i <= 1 ? 'var(--im-blue)' : 'var(--bg-alt)', color: i <= 1 ? '#fff' : 'var(--fg-3)', fontSize: 10, fontWeight: 600, display:'flex', alignItems:'center', justifyContent:'center'}}>{i+1}</div>
              <div style={{fontSize: 12, fontWeight: i === 1 ? 600 : 500, color: i <= 1 ? 'var(--fg-1)' : 'var(--fg-3)'}}>{s}</div>
            </div>
          ))}
        </div>
        <div className="pm-card" style={{padding: 4}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding: '12px 14px'}}>
            <div style={{fontSize: 12, color:'var(--fg-2)'}}><strong style={{color:'var(--fg-1)'}}>45 students selected</strong> · pre-departure window · spring break 2026</div>
            <div style={{display:'flex', gap:6}}>
              <span className="pm-btn ghost">Filter</span>
              <span className="pm-btn primary">Sign all 45 travel endorsements</span>
            </div>
          </div>
          <table className="pm-tbl">
            <thead>
              <tr>
                <th style={{width: 28}}></th>
                <th>Student</th>
                <th>Program</th>
                <th>Last signature</th>
                <th>Travel window</th>
                <th>Page 2 text</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Ming Chen', 'MS Computer Science', '2025-03-11', 'Mar 14 – Apr 4', '12-mo · OK', 'Signed · Ready'],
                ['Aditya Singh', 'PhD Chemistry', '2024-12-02', 'Mar 14 – Mar 28', '12-mo · OK', 'Signed · Ready'],
                ['Priya Iyer', 'MBA', '2025-04-18', 'Mar 15 – Mar 29', '12-mo · OK', 'Signed · Ready'],
                ['Jin Park', 'PhD Economics', '2025-02-07', 'Mar 16 – Apr 12', '12-mo · OK', 'Signed · Ready'],
                ['Liam O\'Brien', 'MS Data Science', '2024-09-14', 'Mar 14 – Mar 23', 'Expires mid-trip', 'Needs review'],
                ['Fatima Al-Sayed', 'PhD Biology', '2025-03-02', 'Mar 14 – Apr 3', '12-mo · OK', 'Signed · Ready'],
              ].map((r, i) => (
                <tr key={i}>
                  <td><div style={{width: 14, height:14, border:'1.5px solid var(--im-blue)', borderRadius: 3, background: i !== 4 ? 'var(--im-blue)' : '#fff', display:'flex', alignItems:'center', justifyContent:'center'}}>{i !== 4 && <svg width="8" height="8" viewBox="0 0 10 10"><path d="M2 5l2 2 4-5" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>}</div></td>
                  <td style={{color:'var(--fg-1)', fontWeight:500}}>{r[0]}</td>
                  <td>{r[1]}</td>
                  <td className="mono" style={{fontFamily:'var(--font-mono)', fontSize:10.5}}>{r[2]}</td>
                  <td>{r[3]}</td>
                  <td><span className={`pm-pill ${r[4].includes('Expires') ? 'warn' : 'ok'}`}>{r[4]}</span></td>
                  <td>{r[5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{padding: '10px 14px', fontSize: 11, color:'var(--fg-3)', borderTop:'1px solid var(--border-subtle)', display:'flex', justifyContent:'space-between'}}>
            <span>Showing 6 of 45</span>
            <span className="mono" style={{fontFamily:'var(--font-mono)'}}>Generated PDFs will be available in ~90s · audit-logged</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- AUDIT TRAIL ----------
function AuditMockup() {
  const rows = [
    ['2026-04-16 08:14:02', '10.24.19.88', 'P. Raman', 'Signed travel endorsement', 'Ming Chen · N0031290045'],
    ['2026-04-16 08:11:47', '10.24.19.88', 'P. Raman', 'Approved CPT', 'Rohan Mehta · N0038821104 · ECON 498'],
    ['2026-04-16 08:04:21', '10.24.19.88', 'P. Raman', 'Viewed student record', 'Yuki Tanaka · N0045612388'],
    ['2026-04-15 17:42:09', '10.24.19.44', 'M. Delacroix', 'Filed termination report', 'Jian Li · N0034567890 · unauthorized-employment'],
    ['2026-04-15 15:22:36', '10.24.19.44', 'M. Delacroix', 'Issued I-20', 'Sara Okonkwo · N0049110023 · Initial'],
    ['2026-04-15 14:18:02', '10.24.19.88', 'P. Raman', 'Batch signed 42 endorsements', 'Pre-departure spring 2026'],
    ['2026-04-15 11:03:58', '10.24.19.12', 'D. Watanabe', 'Updated program dates', 'Yuki Tanaka · N0045612388 · +4mo'],
    ['2026-04-14 16:31:14', '10.24.19.44', 'M. Delacroix', 'Auto-assigned to DSO queue', '12 new arrivals'],
  ];
  return (
    <div className="pm pm-app">
      <SideNav active="audit" />
      <div className="pm-main">
        <TopBar crumb="Compliance · full trail" title="Audit trail" />
        <div style={{display:'flex', gap: 8, alignItems:'center', marginBottom: 14}}>
          <span className="pm-pill muted">Filter · all DSOs</span>
          <span className="pm-pill muted">Range · last 30 days</span>
          <span className="pm-pill muted">Action · all</span>
          <div style={{flex:1}}/>
          <span className="pm-btn ghost"><Ico.Download style={{width:11, height:11}}/>Export PDF</span>
          <span className="pm-btn ghost">Export CSV</span>
        </div>
        <div className="pm-card" style={{padding: 4}}>
          <table className="pm-tbl">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>IP</th>
                <th>Actor</th>
                <th>Action</th>
                <th>Target</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td className="mono" style={{fontFamily:'var(--font-mono)', fontSize: 10.5, color:'var(--fg-2)'}}>{r[0]}</td>
                  <td className="mono" style={{fontFamily:'var(--font-mono)', fontSize: 10.5, color:'var(--fg-3)'}}>{r[1]}</td>
                  <td style={{color:'var(--fg-1)'}}>{r[2]}</td>
                  <td>{r[3]}</td>
                  <td style={{color:'var(--fg-3)'}}>{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{marginTop: 10, fontSize: 10.5, color:'var(--fg-3)', fontFamily:'var(--font-mono)'}}>
          Showing 8 of 1,284 entries · AY 2025–26 · SHA-256 integrity verified
        </div>
      </div>
    </div>
  );
}

// ---------- NEW ARRIVALS ----------
function NewArrivalsMockup() {
  return (
    <div className="pm pm-app">
      <SideNav active="arrivals" />
      <div className="pm-main">
        <TopBar crumb="Fall 2026 · cohort" title="New arrivals" />
        <div className="pm-kpis" style={{gridTemplateColumns:'repeat(5,1fr)'}}>
          {[
            ['Issued', '214', 'I-20s'],
            ['In transit', '57', 'not yet arrived'],
            ['Arrived', '128', 'awaiting check-in'],
            ['Registered', '89', 'active in SEVIS'],
            ['Window open', '23', 'days remaining'],
          ].map(([l, n, s], i) => (
            <div key={i} className="pm-kpi">
              <div className="pm-kpi-label">{l}</div>
              <div className="pm-kpi-num">{n}</div>
              <div className="pm-kpi-delta">{s}</div>
            </div>
          ))}
        </div>
        <div className="pm-card" style={{padding: 4}}>
          <div style={{padding: '12px 14px', borderBottom:'1px solid var(--border-subtle)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{fontSize: 12.5, fontWeight:500, color:'var(--fg-1)'}}>Initial registration · 30-day federal window</div>
            <div style={{display:'flex', gap: 6}}>
              <span className="pm-pill warn">Day 7 of 30</span>
            </div>
          </div>
          <table className="pm-tbl">
            <thead>
              <tr><th>Student</th><th>Program</th><th>Arrival</th><th>Check-in</th><th>SEVIS registered</th><th>Days left</th></tr>
            </thead>
            <tbody>
              {[
                ['Sara Okonkwo', 'PhD Public Health', '2026-04-09', 'Complete', '—', 8, 'warn'],
                ['Takeshi Yamamoto', 'MS Civil Eng', '2026-04-10', 'Complete', 'Active', 0, 'ok'],
                ['Diya Chatterjee', 'PhD Physics', '2026-04-11', 'Complete', '—', 9, 'warn'],
                ['Lee Min-jun', 'MBA', '2026-04-12', 'Scheduled 04-17', '—', 11, ''],
                ['Ngozi Adebayo', 'MS Biotech', '2026-04-13', 'Complete', 'Active', 0, 'ok'],
                ['Raúl Vázquez', 'PhD History', '2026-04-14', 'No-show', '—', 4, 'crit'],
              ].map((r, i) => (
                <tr key={i}>
                  <td style={{color:'var(--fg-1)', fontWeight:500}}>{r[0]}</td>
                  <td>{r[1]}</td>
                  <td className="mono" style={{fontFamily:'var(--font-mono)', fontSize: 10.5}}>{r[2]}</td>
                  <td>{r[3]}</td>
                  <td>{r[4]}</td>
                  <td><span className={`pm-pill ${r[6] || 'muted'}`}>{r[5] === 0 ? 'Registered' : `${r[5]}d`}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ---------- REQUESTS INBOX ----------
function RequestsMockup() {
  return (
    <div className="pm pm-app">
      <SideNav active="requests" />
      <div className="pm-main">
        <TopBar crumb="Student-submitted · inbox" title="Requests" />
        <div className="pm-two-col" style={{gridTemplateColumns:'320px 1fr'}}>
          <div className="pm-card" style={{padding: 4, alignSelf:'start'}}>
            <div style={{padding: '10px 14px', display:'flex', justifyContent:'space-between', borderBottom:'1px solid var(--border-subtle)', fontSize: 11}}><span style={{color:'var(--fg-1)', fontWeight: 500}}>All requests · 38</span><span className="pm-pill warn">8 awaiting DSO</span></div>
            {[
              ['Rohan Mehta', 'CPT · Summer 2026', 'high', 'on', '2h'],
              ['Naledi Mokoena', 'STEM OPT extension', 'high', '', '4h'],
              ['Ming Chen', 'Travel signature', 'med', '', '1d'],
              ['Fatima Al-Sayed', 'Program extension', 'high', '', '1d'],
              ['Liam O\'Brien', 'Reduced course load', 'med', '', '2d'],
              ['Jin Park', 'Travel signature', 'low', '', '3d'],
            ].map((r, i) => (
              <div key={i} style={{padding:'10px 14px', borderBottom:'1px solid var(--border-subtle)', background: r[3] ? 'var(--im-blue-ice)' : '#fff', borderLeft: r[3] ? '2px solid var(--im-blue)' : '2px solid transparent'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 3}}>
                  <div style={{fontWeight:500, color:'var(--fg-1)', fontSize: 12}}>{r[0]}</div>
                  <span className={`pm-pill ${r[2] === 'high' ? 'crit' : r[2] === 'med' ? 'warn' : 'muted'}`} style={{fontSize: 9}}>{r[2]}</span>
                </div>
                <div style={{fontSize: 11, color:'var(--fg-2)'}}>{r[1]}</div>
                <div style={{fontSize: 10, color:'var(--fg-3)', marginTop: 3, fontFamily:'var(--font-mono)'}}>Submitted {r[4]} ago</div>
              </div>
            ))}
          </div>
          <div className="pm-card">
            <div style={{display:'flex', alignItems:'center', gap:10, marginBottom: 14, paddingBottom: 12, borderBottom:'1px solid var(--border-subtle)'}}>
              <div className="pm-stu-avatar" style={{background: avatarColor('Rohan Mehta'), width: 32, height: 32, fontSize: 11}}>RM</div>
              <div>
                <div style={{fontSize: 15, fontWeight: 500, color:'var(--fg-1)', fontFamily:'var(--font-serif)'}}>Rohan Mehta · CPT request</div>
                <div style={{fontSize: 11, color:'var(--fg-3)'}}>MS Computer Science · submitted 2h ago · 3 documents attached</div>
              </div>
              <span className="pm-pill crit" style={{marginLeft:'auto'}}>Priority</span>
            </div>
            <div style={{display:'grid', gap: 10, fontSize: 12}}>
              <div><span style={{color:'var(--fg-3)'}}>Employer · </span><span style={{color:'var(--fg-1)', fontWeight: 500}}>Grafton Capital, New York NY</span></div>
              <div><span style={{color:'var(--fg-3)'}}>Role · </span>Quantitative Analyst Intern (Summer 2026)</div>
              <div><span style={{color:'var(--fg-3)'}}>Dates · </span>2026-05-19 → 2026-08-15 · 20hrs/wk academic year, 40hrs/wk summer</div>
              <div><span style={{color:'var(--fg-3)'}}>Course link · </span><span className="mono" style={{fontFamily:'var(--font-mono)', color:'var(--im-blue-deep)'}}>ECON 498 · Directed Research</span> · <span className="pm-pill ok">Department confirmed</span></div>
              <div style={{padding: 10, background:'var(--bg-alt)', borderRadius: 6, color:'var(--fg-2)', lineHeight: 1.5, marginTop: 4}}>
                <strong style={{color:'var(--fg-1)'}}>Summary:</strong> First CPT · eligible (completed 1 academic year) · offer letter, course syllabus, faculty advisor approval on file. Course map validates directly with ECON 498 spring-26 enrollment. Ready to authorize.
              </div>
            </div>
            <div style={{display:'flex', gap: 8, marginTop: 16}}>
              <span className="pm-btn primary">Approve and issue I-20</span>
              <span className="pm-btn ghost">Request more info</span>
              <span className="pm-btn ghost">Decline</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mockup({ kind }) {
  switch (kind) {
    case 'overview': return <OverviewMockup />;
    case 'sevis': return <SevisQueueMockup />;
    case 'drawer': return <StudentDrawerMockup />;
    case 'whatif': return <WhatIfMockup />;
    case 'batch': return <BatchI20Mockup />;
    case 'audit': return <AuditMockup />;
    case 'arrivals': return <NewArrivalsMockup />;
    case 'requests': return <RequestsMockup />;
    default: return <OverviewMockup />;
  }
}

const mockupStyleTag = () => <style>{mockupCSS}</style>;

Object.assign(window, { Mockup, mockupStyleTag });
