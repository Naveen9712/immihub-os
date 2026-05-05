// immihub-os-family.jsx — shared cross-nav strip for all sub-site footers
// Renders a 4-card row linking to each sibling product + back to ImmiHub OS umbrella.

function ImmiHubOSFamily({ homeHref = '../../index.html', umbrella = false }) {
  // homeHref is the path to ImmiHub OS index.html from the current page.
  // Sibling app paths are derived by stripping "index.html" and appending "apps/<id>/index.html".
  const baseRoot = homeHref.replace(/index\.html$/, '');
  const apps = [
    { id: 'immigrant', tag: 'Consumer',        label: 'For Immigrants',  dot: '#4F9ED6' },
    { id: 'employer',  tag: 'HR & compliance', label: 'For Employers',   dot: '#7A6BE8' },
    { id: 'dso',       tag: 'DSO portal',      label: 'For Institutions', dot: '#E8843C' },
    { id: 'attorney',  tag: 'Case mgmt',       label: 'For Attorneys',   dot: '#2B7AB8' },
  ];

  const cardStyle = {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '12px 14px',
    background: '#FAFBFD', border: '1px solid #DFE4EA', borderRadius: 10,
    textDecoration: 'none', color: '#1A2332',
    transition: 'all 200ms cubic-bezier(0.2,0.8,0.2,1)',
  };

  return (
    <div className="immi-os-family" style={{
      borderBottom: '1px solid #DFE4EA',
      padding: '24px 0 28px',
      marginBottom: 28,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 16, flexWrap: 'wrap', marginBottom: 14,
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.1em', color: '#8896A6',
          }}>Part of the</span>
          <a href={homeHref} style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            textDecoration: 'none', color: '#1A2332',
            fontWeight: 600, fontSize: 13,
          }}>
            ImmiHub
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              height: 16, padding: '0 6px',
              fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
              color: '#2B7AB8', background: '#E8F2FA',
              border: '1px solid rgba(79,158,214,0.25)',
              borderRadius: 4,
            }}>OS</span>
            family
          </a>
        </div>
        <a href={homeHref} style={{
          fontSize: 12, color: '#2B7AB8', textDecoration: 'none', fontWeight: 500,
          display: umbrella ? 'none' : 'inline',
        }}>Visit ImmiHub OS →</a>
      </div>

      <div className="immi-os-family-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10,
      }}>
        {apps.map(a => (
          <a key={a.id} href={`${baseRoot}apps/${a.id}/index.html`} style={cardStyle}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = a.dot;
              e.currentTarget.style.background = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#DFE4EA';
              e.currentTarget.style.background = '#FAFBFD';
            }}
          >
            <span style={{
              width: 8, height: 8, borderRadius: 999,
              background: a.dot, flexShrink: 0,
            }} />
            <span>
              <span style={{
                display: 'block', fontSize: 10, fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8896A6',
              }}>{a.tag}</span>
              <span style={{
                display: 'block', fontSize: 13, fontWeight: 600, marginTop: 1,
              }}>{a.label}</span>
            </span>
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 760px) {
          .immi-os-family-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}

window.ImmiHubOSFamily = ImmiHubOSFamily;
