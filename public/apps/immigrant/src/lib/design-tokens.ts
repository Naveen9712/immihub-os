/**
 * ImmiHub Brand Color Palette — Official (Feb 2026)
 * Source: Extracted from official ImmiHub logo (#4F9ED6)
 * ImmiHub Blue = anchor color. Warm Green = CTAs only. Warm White = page bg. Charcoal = headings/footer.
 */
export const colors = {
  // Brand Primary (from logo)
  brandPrimary: "#4F9ED6",        // ImmiHub Blue — logo, primary buttons, links, headings, active nav
  brandPrimaryDark: "#2B7AB8",   // Deep Blue — button hover, emphasized headings, dark accents
  brandPrimaryLight: "#7BB8E2",  // Sky Blue — secondary buttons, highlights, light accents
  brandPrimaryPale: "#E8F2FA",   // Ice Blue — section backgrounds, card fills, hover backgrounds

  // Action / CTA (green for CTAs only)
  accentGreen: "#34B87C",        // Warm Green — Join Waitlist, Get Early Access
  accentGreenLight: "#D4F0E3",   // CTA success state, light green bg

  // Text (typography hierarchy)
  textDark: "#1A2332",           // Charcoal — main headings, footer background, dark text
  textBody: "#4A5568",           // Slate — body text, descriptions, paragraphs
  textMuted: "#8896A6",         // Gray — captions, placeholders, secondary text

  // Backgrounds & borders
  bgWhite: "#FAFBFD",            // Warm White — page background (NOT pure white)
  bgAlt: "#F2F5F8",             // Cloud — alternate sections, card surfaces
  border: "#DFE4EA",             // Mist — card borders, dividers, input borders

  // Status (document expiry badges, alerts, website consistency)
  warning: "#E5A318",           // Amber — expiring soon, Coming Soon tags, warnings
  warningLight: "#FEF5E0",      // Cream — warning backgrounds
  danger: "#D94F4F",            // Coral Red — expired, critical alerts, errors
  dangerLight: "#FDE8E8",       // Blush — error backgrounds

  // Legacy aliases (same values — for existing code)
  blue: "#4F9ED6",
  blueLight: "#7BB8E2",
  bluePale: "#E8F2FA",
  blueMist: "#DFE4EA",
  green: "#34B87C",
  greenLight: "#D4F0E3",
  warmWhite: "#FAFBFD",
  navy: "#1A2332",
  white: "#FFFFFF",
  gray50: "#FAFBFD",
  gray100: "#F2F5F8",
  gray200: "#DFE4EA",
  gray400: "#8896A6",
  gray500: "#4A5568",
  gray600: "#4A5568",
  gray800: "#1A2332",
  amber: "#E5A318",
  amberLight: "#FEF5E0",
  red: "#D94F4F",
};

/**
 * Shared horizontal gutters for the marketing site (nav, footer, sections).
 * ~10–12vw on large viewports, capped so content stays readable; ~28px floor on small screens.
 */
export const layout = {
  pagePaddingX: "clamp(28px, 11vw, 140px)",
  /** Matches Navigation inner shell — use with `padding: 0 pagePaddingX` for aligned gutters */
  pageMaxWidth: "1280px",
} as const;
