// Root Site component — composes sections, wires up Tweaks.

const { useState: useStateS, useEffect: useEffectS } = React;

function TweaksPanel({ state, setState, visible, onClose }) {
  if (!visible) return null;
  const upd = (k, v) => setState(s => ({ ...s, [k]: v }));
  const swatchRow = (k, opts) => (
    <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
      {opts.map(o => (
        <button key={o.v} onClick={() => upd(k, o.v)} style={{
          flex: 1, padding: '8px 10px', borderRadius: 8, cursor: 'pointer',
          background: state[k] === o.v ? T.charcoal : '#fff',
          color: state[k] === o.v ? '#fff' : T.slate,
          border: `1px solid ${state[k] === o.v ? T.charcoal : T.mist}`,
          fontSize: 12, fontWeight: 600,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>
          {o.dot && <span style={{ width: 10, height: 10, borderRadius: 999, background: o.dot }} />}
          {o.label}
        </button>
      ))}
    </div>
  );
  return (
    <div style={{
      position: 'fixed', top: 0, right: 0, bottom: 0, width: 340,
      background: '#fff', borderLeft: `1px solid ${T.mist}`,
      boxShadow: T.shadow.lg, zIndex: 1000,
      padding: 24, overflowY: 'auto',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div className="serif" style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em' }}>Tweaks</div>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: T.gray }}>
          <Icon name="x" size={18} />
        </button>
      </div>

      <div style={{ marginBottom: 22 }}>
        <div className="label" style={{ color: T.gray, marginBottom: 4 }}>Firm size</div>
        <div style={{ fontSize: 12, color: T.gray, marginBottom: 2 }}>Swaps proof points & highlights the pricing tier.</div>
        {swatchRow('firmTier', [
          { v: 'solo',     label: 'Solo' },
          { v: 'boutique', label: 'Boutique' },
          { v: 'midsize',  label: 'Mid-size' },
        ])}
      </div>

      <div style={{ marginBottom: 22 }}>
        <div className="label" style={{ color: T.gray, marginBottom: 4 }}>Accent tint</div>
        {swatchRow('accent', [
          { v: 'blue',   label: 'Blue',   dot: T.blue },
          { v: 'green',  label: 'Green',  dot: T.green },
          { v: 'violet', label: 'Violet', dot: T.violet },
        ])}
      </div>

      <div style={{ marginBottom: 22 }}>
        <div className="label" style={{ color: T.gray, marginBottom: 4 }}>Density</div>
        {swatchRow('density', [
          { v: 'comfortable', label: 'Comfortable' },
          { v: 'compact',     label: 'Compact' },
        ])}
      </div>

      <div style={{ marginBottom: 22 }}>
        <div className="label" style={{ color: T.gray, marginBottom: 4 }}>Hero product shot</div>
        {swatchRow('heroShot', [
          { v: 'dashboard', label: 'Dashboard' },
          { v: 'rfe',       label: 'RFE' },
          { v: 'cases',     label: 'Cases' },
        ])}
      </div>

      <div style={{ marginTop: 28, padding: 12, background: T.cloud, borderRadius: 10, fontSize: 12, color: T.slate, lineHeight: 1.5 }}>
        Changes persist across reloads. The firm-size tweak highlights the matching pricing tier and swaps the tone of the hero.
      </div>
    </div>
  );
}

function TierBadge({ firmTier }) {
  const map = {
    solo:     { label: 'Solo tier', bg: T.blueIce, fg: T.blueDeep },
    boutique: { label: 'Boutique tier', bg: T.mint, fg: '#1F7A4E' },
    midsize:  { label: 'Mid-size tier', bg: T.violetIce, fg: '#5B2FB8' },
  }[firmTier];
  return (
    <div style={{
      position: 'fixed', bottom: 20, left: 20, zIndex: 30,
      background: '#fff', border: `1px solid ${T.mist}`, boxShadow: T.shadow.md,
      borderRadius: 10, padding: '8px 12px', fontSize: 12,
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <span className="label" style={{ color: T.gray }}>Viewing as</span>
      <span style={{ background: map.bg, color: map.fg, padding: '2px 8px', borderRadius: 999, fontSize: 11, fontWeight: 700 }}>{map.label}</span>
    </div>
  );
}

function Site() {
  const defaults = window.__TWEAKS__ || { firmTier: 'boutique', accent: 'blue', density: 'comfortable', heroShot: 'dashboard' };
  const [tweaks, setTweaks] = useStateS(() => {
    try {
      const saved = localStorage.getItem('immihub-atty-tweaks');
      return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
    } catch (e) { return defaults; }
  });
  const [tweakOpen, setTweakOpen] = useStateS(false);

  // Persist
  useEffectS(() => {
    try { localStorage.setItem('immihub-atty-tweaks', JSON.stringify(tweaks)); } catch (e) {}
    window.parent && window.parent.postMessage({ type: '__edit_mode_set_keys', edits: tweaks }, '*');
  }, [tweaks]);

  // Tweaks protocol — listener FIRST, then announce
  useEffectS(() => {
    const onMsg = (e) => {
      if (!e.data || !e.data.type) return;
      if (e.data.type === '__activate_edit_mode') setTweakOpen(true);
      if (e.data.type === '__deactivate_edit_mode') setTweakOpen(false);
    };
    window.addEventListener('message', onMsg);
    // announce
    window.parent && window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const { accent, firmTier, heroShot } = tweaks;

  return (
    <div style={{ background: T.warmWhite, color: T.charcoal, minHeight: '100vh' }}>
      <Nav accent={accent} />
      <div data-screen-label="01 Hero"><Hero accent={accent} heroShot={heroShot} /></div>
      <div data-screen-label="02 Moat"><MoatSection /></div>
      <div data-screen-label="03 Product"><ProductSection /></div>
      <div data-screen-label="04 Receipt demo"><ReceiptDemo /></div>
      <div data-screen-label="05 Compare"><CompareSection /></div>
      <div data-screen-label="06 Pricing"><PricingSection firmTier={firmTier} setFirmTier={(v) => setTweaks(t => ({ ...t, firmTier: v }))} accent={accent} /></div>
      <div data-screen-label="07 Security"><SecuritySection /></div>
      <div data-screen-label="08 FAQ"><FaqSection /></div>
      <div data-screen-label="09 Waitlist"><WaitlistSection accent={accent} /></div>
      <Footer />

      <TierBadge firmTier={firmTier} />
      <TweaksPanel state={tweaks} setState={setTweaks} visible={tweakOpen} onClose={() => setTweakOpen(false)} />
    </div>
  );
}

Object.assign(window, { Site, TweaksPanel });
