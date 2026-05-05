import React from 'react'
import { Nav, Hero, StatsStrip, ProductCards, MarketByAudience, IM } from './components'
import { WhyOS, HowItConnects, InvestorCTA, Footer } from './os-sections'

const TWEAK_DEFAULTS = {
  "firmTier": "solo",
  "accent": "blue",
  "density": "comfortable",
  "heroShot": "dashboard"
};

function App() {
  return (
    <div style={{ background: IM.warmWhite, minHeight: '100vh' }} data-screen-label="ImmiHub OS">
      <Nav />
      <Hero />
      <StatsStrip />
      <ProductCards />
      <MarketByAudience />
      <WhyOS />
      <HowItConnects />
      <InvestorCTA />
      <Footer />
      <TweaksPanel />
    </div>
  );
}

function TweaksPanel() {
  const [active, setActive] = React.useState(false);
  const [vals, setVals] = React.useState(TWEAK_DEFAULTS);

  React.useEffect(() => {
    function onMsg(e) {
      if (!e.data) return;
      if (e.data.type === '__activate_edit_mode') setActive(true);
      if (e.data.type === '__deactivate_edit_mode') setActive(false);
    }
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  function update(key, val) {
    const next = { ...vals, [key]: val };
    setVals(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: val } }, '*');
  }

  if (!active) return null;

  return (
    <div style={{
      position: 'fixed', right: 20, bottom: 20, zIndex: 200,
      width: 280, background: '#fff',
      border: `1px solid ${IM.mist}`, borderRadius: 14,
      boxShadow: '0 12px 32px rgba(26,35,50,0.12), 0 4px 8px rgba(26,35,50,0.06)',
      padding: 18, fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: IM.charcoal, marginBottom: 14 }}>Tweaks</div>
      <TweakGroup label="Firm tier" options={['seed', 'boutique', 'enterprise']} value={vals.firmTier} onChange={v => update('firmTier', v)} />
      <TweakGroup label="Accent" options={['blue', 'green', 'mixed']} value={vals.accent} onChange={v => update('accent', v)} />
      <TweakGroup label="Density" options={['compact', 'comfortable', 'spacious']} value={vals.density} onChange={v => update('density', v)} />
      <TweakGroup label="HeroShot" options={['dashboard', 'constellation', 'minimal']} value={vals.heroShot} onChange={v => update('heroShot', v)} />
    </div>
  );
}

function TweakGroup({ label, options, value, onChange }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: IM.gray, marginBottom: 6 }}>{label}</div>
      <div style={{ display: 'flex', gap: 4, background: IM.cloud, borderRadius: 8, padding: 3 }}>
        {options.map(o => (
          <button key={o} onClick={() => onChange(o)}
            style={{
              flex: 1, padding: '6px 8px',
              background: value === o ? '#fff' : 'transparent',
              border: 'none', borderRadius: 6,
              fontSize: 11, fontWeight: 500,
              color: value === o ? IM.charcoal : IM.slate,
              cursor: 'pointer', fontFamily: 'inherit',
              boxShadow: value === o ? '0 1px 2px rgba(26,35,50,0.08)' : 'none',
              transition: 'all 200ms',
              textTransform: 'capitalize',
            }}>{o}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
