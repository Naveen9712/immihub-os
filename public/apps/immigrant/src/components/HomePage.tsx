"use client";

import { Fragment, useState, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import { AnimatedSection, HeroFade, WaitlistForm } from "@/components/ui";
import { colors, layout } from "@/lib/design-tokens";
import { WAITLIST_VISA_TYPES } from "@/lib/waitlist-options";
import {
  ShieldIcon,
  LockIcon,
  TrashIcon,
  AzureMarkIcon,
  FingerprintProhibitedIcon,
  DatabaseIcon,
  BrainIcon,
  DocIcon,
  FolderPlusIcon,
  BuildingIcon,
} from "@/components/icons";

// Immigration-relevant imagery: Unsplash (passport, travel docs, diverse professionals). Attribution in footer.
const IMAGES = {
  // Hero: warm, personal (WhatsApp-style) — person with smartphone
  hero: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=85",
  // Feature cards — curated Unsplash (documents, calendar, desk work, phone, team, onboarding)
  features: [
    "/Images/secure-image.png",
    "/Images/smart-expiry.png",
    "/Images/ocr-date.png",
    "/Images/push-email.png",
    "/Images/purpose-built.png",
    "/Images/guided-onboarding.png",
  ],
} as const;

/** Horizontal alignment with `Navigation` — vertical padding stays on `<section>` */
const PAGE_INNER: CSSProperties = {
  maxWidth: layout.pageMaxWidth,
  margin: "0 auto",
  width: "100%",
  padding: `0 ${layout.pagePaddingX}`,
};

const FEATURE_ITEMS = [
  {
    title: "Secure Document Vault",
    desc: "All your immigration documents in one encrypted vault, hosted on Amazon AWS. Access them anytime, from any device.",
    image: IMAGES.features[0],
  },
  {
    title: "Smart Expiry Tracking",
    desc: "Every document type monitored automatically. See exactly what's expiring and when — at a glance, on your dashboard.",
    image: IMAGES.features[1],
  },
  {
    title: "OCR Date Extraction",
    desc: "Take a photo of any document and our AI reads the expiry dates for you. You review and confirm before anything is saved.",
    image: IMAGES.features[2],
  },
  {
    title: "Push + Email Reminders",
    desc: "Get notified at 180 days and 90 days before every deadline. Enough lead time to renew, file, or consult your attorney.",
    image: IMAGES.features[3],
  },
  {
    title: "Purpose-Built for H-1B",
    desc: "Not a generic file manager. ImmiHub understands Passport, I-94, I-797, Visa Stamp, and EAD — and what each deadline means for you.",
    image: IMAGES.features[4],
  },
  {
    title: "Guided Onboarding",
    desc: "Our Immi Bot walks you through setup with a simple conversation. No confusing forms, no guesswork — just answer a few questions and you're ready.",
    image: IMAGES.features[5],
  },
] as const;

const DATA_SECURED_TRUST_ITEMS = [
  { icon: <AzureMarkIcon />, text: "Hosted on Amazon AWS" },
  { icon: <LockIcon />, text: "Encrypted at rest and in transit" },
  { icon: <FingerprintProhibitedIcon />, text: "No biometric data collected" },
  { icon: <DatabaseIcon />, text: "Data stored in the United States" },
  { icon: <TrashIcon />, text: "Delete all your data anytime" },
] as const;

type DataSecuredTrustItem = { icon: ReactNode; text: string };

function DataSecuredTrustCell({ item, delay }: { item: DataSecuredTrustItem; delay: number }) {
  return (
    <AnimatedSection delay={delay}>
      <div
        className="data-secured-cell"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          textAlign: "left",
          minWidth: 0,
        }}
      >
        <span
          className="data-secured-icon"
          style={{
            color: colors.brandPrimary,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
          }}
          aria-hidden
        >
          {item.icon}
        </span>
        <span
          className="data-secured-cell-text"
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "15px",
            fontWeight: 500,
            color: colors.textDark,
            lineHeight: 1.45,
            minWidth: 0,
          }}
        >
          {item.text}
        </span>
      </div>
    </AnimatedSection>
  );
}

function CtaWaitlistMock() {
  const [email, setEmail] = useState("");
  const [visaType, setVisaType] = useState<(typeof WAITLIST_VISA_TYPES)[number] | "">(WAITLIST_VISA_TYPES[0]);
  const visaOptions = WAITLIST_VISA_TYPES;

  const borderGradient = "linear-gradient(135deg, #4F9ED6 0%, #34B87C 100%)";

  return (
    <section className="cta-mock-section" style={{ padding: "clamp(60px, 8vw, 100px) 0", background: colors.white }}>
      <div style={{ ...PAGE_INNER, maxWidth: "1500px" }}>
        <div
          className="home-cta-mock-outer"
          style={{
            background: borderGradient,
            padding: "6px",
            borderRadius: "26px",
            boxShadow: "0 18px 44px rgba(26,35,50,0.10)",
          }}
        >
          <div
            className="home-cta-mock-inner"
            style={{
              background: colors.white,
              borderRadius: "22px",
              padding: "clamp(32px, 4vw, 52px)",
            }}
          >
            <div
              className="home-cta-mock-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
                gap: "clamp(32px, 5vw, 60px)",
                alignItems: "center",
              }}
            >
              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    margin: "0 0 18px 0",
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: colors.textMuted,
                  }}
                >
                  REQUEST EARLY ACCESS
                </p>

                <h2
                  style={{
                    margin: 0,
                    fontFamily: "'Satoshi', sans-serif",
                    fontSize: "clamp(32px, 4.5vw, 54px)",
                    fontWeight: 700,
                    lineHeight: 1.04,
                    letterSpacing: "-0.02em",
                    color: colors.textDark,
                  }}
                >
                  <span style={{ display: "block" }}>Stop worrying about</span>
                  <span style={{ display: "block" }}>deadlines.</span>
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: "6px",
                      background: borderGradient,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontStyle: "italic",
                      fontWeight: 800,
                      paddingRight: "0.15em",
                      paddingBottom: "0.1em",
                    }}
                  >
                    Start living your life.
                  </span>
                </h2>

                <p
                  style={{
                    margin: "14px 0 18px 0",
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: colors.textBody,
                    maxWidth: "560px",
                  }}
                >
                  We let a small group in each month. Join the list and we&apos;ll send an invite when there&apos;s a seat for you.
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    marginTop: "14px",
                    color: colors.textMuted,
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {[
                    "3 minutes to set up",
                    "Delete anytime",
                  ].map((t) => (
                    <div key={t} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span aria-hidden style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "rgba(52,184,124,0.14)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: colors.accentGreen,
                        flexShrink: 0,
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    background: "#F6F7F9",
                    border: "1px solid rgba(26,35,50,0.08)",
                    borderRadius: "20px",
                    padding: "28px",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 14px 0",
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                      color: colors.textMuted,
                    }}
                  >
                    WAITLIST · BETA 1.0
                  </p>

                  <div style={{ marginBottom: "12px" }}>
                    <label
                      htmlFor="cta-email"
                      style={{
                        display: "block",
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: colors.textBody,
                        marginBottom: "8px",
                      }}
                    >
                      Email address
                    </label>
                    <input
                      id="cta-email"
                      className="cta-email-input"
                      type="email"
                      autoComplete="email"
                      placeholder="priya@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "16px 18px",
                        borderRadius: "12px",
                        border: "1.5px solid rgba(26,35,50,0.12)",
                        background: colors.white,
                        color: colors.textDark,
                        fontSize: "15px",
                        fontFamily: "'Source Sans 3', sans-serif",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#4F9ED6"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(26,35,50,0.12)"; }}
                    />
                  </div>

                  <div style={{ marginBottom: "12px" }}>
                    <p
                      style={{
                        margin: "0 0 10px 0",
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: colors.textBody,
                      }}
                    >
                      Visa type
                    </p>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {visaOptions.map((v) => {
                        const active = v === visaType;
                        return (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setVisaType(v)}
                            style={{
                              padding: "10px 14px",
                              borderRadius: "12px",
                              border: active ? "1.5px solid rgba(79,158,214,0.75)" : "1.5px solid rgba(26,35,50,0.12)",
                              background: active ? "rgba(79,158,214,0.12)" : colors.white,
                              color: colors.textDark,
                              fontFamily: "'Source Sans 3', sans-serif",
                              fontSize: "15px",
                              fontWeight: 650,
                              cursor: "pointer",
                              lineHeight: 1,
                            }}
                            className="visa-type-btn"
                          >
                            {v}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div style={{ marginTop: "4px" }}>
                    <div style={{ position: "relative" }}>
                      <WaitlistForm
                        variant="button"
                        buttonLabel="Request invite"
                        buttonBg="#34B87C"
                        buttonShadow="0 10px 22px rgba(52,184,124,0.28)"
                        initialEmail={email}
                        initialVisaType={visaType}
                      />
                      <span
                        aria-hidden
                        style={{
                          position: "absolute",
                          right: "14px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none",
                          color: colors.white,
                          display: "inline-flex",
                          alignItems: "center",
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12h12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                          <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>

                    <p
                      style={{
                        margin: "10px 0 0 0",
                        textAlign: "center",
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "11px",
                        color: colors.textMuted,
                      }}
                    >
                      No spam. No resale. Unsubscribe in one click.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 980px) {
          .home-cta-mock-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 640px) {
          .home-cta-mock-outer {
            padding: 0 !important;
            background: transparent !important;
            box-shadow: none !important;
          }
          .home-cta-mock-inner {
            padding: 32px 16px 20px !important;
            border-radius: 16px !important;
            border: 1px solid rgba(26,35,50,0.08) !important;
          }
          .cta-mock-section {
            padding: 40px 0 !important;
          }
          .cta-email-input {
            padding: 18px 20px !important;
            font-size: 16px !important;
          }
          .visa-type-btn {
            padding: 12px 14px !important;
            flex: 1 1 calc(50% - 10px) !important;
            justify-content: center !important;
            display: flex !important;
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}

const HIW_SIDEBAR_BG = "#EBF2F8";

function HiwStepIcon({ kind, active }: { kind: "upload" | "extract" | "remind"; active: boolean }) {
  const bg = active ? colors.brandPrimary : "#D5DEE8";
  const fg = active ? colors.white : colors.textMuted;
  const box = { width: 48, height: 48, borderRadius: 12, background: bg, display: "flex" as const, alignItems: "center" as const, justifyContent: "center" as const, flexShrink: 0 };
  if (kind === "upload") {
    return (
      <div style={box} aria-hidden>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 4v12M8 8l4-4 4 4" stroke={fg} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 20h14" stroke={fg} strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  if (kind === "extract") {
    return (
      <div style={box} aria-hidden>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 9V6a2 2 0 012-2h3M20 9V6a2 2 0 00-2-2h-3M4 15v3a2 2 0 002 2h3M20 15v3a2 2 0 01-2 2h-3" stroke={fg} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  return (
    <div style={box} aria-hidden>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 8a6 6 0 1112 0c0 6-6 10-6 10S6 14 6 8z" stroke={fg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5v3" stroke={fg} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function HowItWorksInteractive() {
  const [activeStep, setActiveStep] = useState(0);
  const [spouseOn, setSpouseOn] = useState(true);

  const steps = [
    {
      id: 0,
      stepLabel: "STEP 01",
      title: "Upload",
      desc: "Passport, I-94, I-797, visa stamp, or EAD. Less than a minute to get everything in one secure place.",
      icon: "upload" as const,
      panelTitle: "Snap a photo, drop a file.",
      panelDesc: "Passport, I-94, I-797, visa stamp, or EAD. Less than a minute to get everything in one secure place."
    },
    {
      id: 1,
      stepLabel: "STEP 02",
      title: "Extract",
      desc: "Immi Bot reads your dates using secure OCR. Your documents are encrypted in transit and at rest on AWS - nothing is shared.",
      icon: "extract" as const,
      panelTitle: "Immi Bot reads the dates for you.",
      panelDesc: "Immi Bot reads your dates using secure OCR. Your documents are encrypted in transit and at rest on AWS - nothing is shared.",
    },
    {
      id: 2,
      stepLabel: "STEP 03",
      title: "Remind",
      desc: "Reminders 180 and 90 days before every deadline. Push and email - no SMS, no spam.",
      icon: "remind" as const,
      panelTitle: "We nudge you — months ahead.",
      panelDesc: "Reminders 180 and 90 days before every deadline. Push and email - no SMS, no spam.",
    },
  ];

  const cur = steps[activeStep];

  const goNext = () => setActiveStep((s) => (s + 1) % 3);

  const labelFont: CSSProperties = {
    fontFamily: "'Source Sans 3', sans-serif",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "2.5px",
    color: colors.textMuted,
    textTransform: "uppercase",
    margin: "0 0 8px 0",
  };

  return (
    <section id="how-it-works" className="home-section-stack hiw-v2-section" style={{ padding: "50px 0 60px", background: colors.bgWhite }}>
      <div style={{ ...PAGE_INNER, maxWidth: "1200px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <div style={{ marginBottom: "clamp(36px, 5vw, 56px)" }}>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                color: colors.brandPrimary,
                textTransform: "uppercase",
                letterSpacing: "2.5px",
                margin: "0 0 16px 0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span aria-hidden style={{ width: 10, height: 10, borderRadius: "50%", background: colors.brandPrimary }} />
              HOW IT WORKS
            </p>
            <h2
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                color: colors.textDark,
                margin: "0 0 16px 0",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
              }}
            >
              Three steps. Then silence.
            </h2>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "16px",
                color: colors.textBody,
                lineHeight: 1.65,
                maxWidth: "680px",
                margin: 0,
              }}
            >
              Set it up once. ImmiHub does the watching, so you can stop refreshing USCIS at midnight.
            </p>
          </div>

          <div
            className="hiw-v2-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(320px, 35%) minmax(0, 1fr)",
              border: `1px solid ${colors.border}`,
              borderRadius: 20,
              overflow: "hidden",
              background: colors.white,
              boxShadow: "0 10px 40px rgba(26,35,50,0.06)",
            }}
          >
            <div
              className="hiw-v2-sidebar"
              style={{
                background: HIW_SIDEBAR_BG,
                borderRight: `1px solid ${colors.border}`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {steps.map((s, i) => {
                const active = activeStep === i;
                return (
                  <div key={s.id} className="hiw-v2-step-wrapper" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <button
                      type="button"
                      onClick={() => setActiveStep(i)}
                      className="hiw-v2-step-btn"
                      style={{
                        flex: 1,
                        display: "flex",
                        gap: 14,
                        alignItems: "flex-start",
                        textAlign: "left",
                        width: "100%",
                        border: "none",
                        cursor: "pointer",
                        padding: "16px 20px",
                        background: active ? colors.white : "transparent",
                        borderBottom: i < 2 ? `1px solid ${colors.border}` : "none",
                        transition: "background 0.15s ease",
                      }}
                    >
                      <HiwStepIcon kind={s.icon} active={active} />
                      <div style={{ minWidth: 0 }}>
                        <p style={labelFont}>{s.stepLabel}</p>
                        <p
                          style={{
                            fontFamily: "'Satoshi', sans-serif",
                            fontSize: "20px",
                            fontWeight: 800,
                            color: colors.textDark,
                            margin: "0 0 4px 0",
                            lineHeight: 1.2,
                          }}
                        >
                          {s.title}
                        </p>
                        <p
                          style={{
                            fontFamily: "'Source Sans 3', sans-serif",
                            fontSize: "15px",
                            color: colors.textBody,
                            lineHeight: 1.55,
                            margin: 0,
                          }}
                        >
                          {s.desc}
                        </p>
                      </div>
                    </button>
                    {/* Mobile-only: show detail content directly under the active step */}
                    {active && (
                      <div className="hiw-v2-mobile-detail">
                        <h3
                          style={{
                            fontFamily: "'Satoshi', sans-serif",
                            fontSize: "clamp(22px, 2.5vw, 28px)",
                            fontWeight: 800,
                            color: colors.textDark,
                            margin: "0 0 10px 0",
                            lineHeight: 1.2,
                          }}
                        >
                          {s.panelTitle}
                        </h3>
                        <p
                          style={{
                            fontFamily: "'Source Sans 3', sans-serif",
                            fontSize: "17px",
                            color: colors.textMuted,
                            lineHeight: 1.6,
                            margin: "0 0 16px 0",
                            maxWidth: "640px",
                          }}
                        >
                          {s.panelDesc}
                        </p>

                        {i === 0 && (
                          <div>
                            <div
                              style={{
                                border: `2px dashed ${colors.border}`,
                                borderRadius: 16,
                                padding: "36px 24px",
                                textAlign: "center",
                                background: colors.bgAlt,
                                marginBottom: 20,
                              }}
                            >
                              <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
                                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden>
                                  <path d="M12 5v10M8 9l4-4 4 4" stroke={colors.brandPrimary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M5 19h14" stroke={colors.brandPrimary} strokeWidth="2.2" strokeLinecap="round" />
                                </svg>
                              </div>
                              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "17px", color: colors.textDark, fontWeight: 600, margin: "0 0 8px 0" }}>
                                Drop a document or{" "}
                                <span style={{ color: colors.brandPrimary, cursor: "pointer" }}>browse files</span>
                              </p>
                              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px", color: colors.textMuted, margin: 0 }}>
                                PDF, JPG, PNG · max 25MB
                              </p>
                            </div>
                            {[
                              { name: "I-797 Approval Notice.pdf", size: "1.2 MB" },
                              { name: "Passport Scan.jpg", size: "840 KB" },
                            ].map((f) => (
                              <div
                                key={f.name}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 16,
                                  padding: "16px 18px",
                                  borderRadius: 12,
                                  border: `1px solid ${colors.border}`,
                                  background: colors.white,
                                  marginBottom: 12,
                                }}
                              >
                                <div
                                  style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: 10,
                                    background: colors.brandPrimaryPale,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: colors.brandPrimary,
                                    flexShrink: 0,
                                  }}
                                  aria-hidden
                                >
                                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M6 7h12v11a2 2 0 01-2 2H8a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.8" />
                                  </svg>
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <p style={{ margin: 0, fontFamily: "'Source Sans 3', sans-serif", fontSize: "16px", fontWeight: 700, color: colors.textDark }}>
                                    {f.name}
                                  </p>
                                  <p style={{ margin: "4px 0 0 0", fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px", color: colors.textMuted }}>{f.size}</p>
                                </div>
                                <span
                                  style={{
                                    fontFamily: "'Source Sans 3', sans-serif",
                                    fontSize: "13px",
                                    fontWeight: 700,
                                    color: "#1F7A55",
                                    background: "rgba(52,184,124,0.14)",
                                    padding: "8px 12px",
                                    borderRadius: 999,
                                    flexShrink: 0,
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 8,
                                  }}
                                >
                                  <span aria-hidden style={{ width: 8, height: 8, borderRadius: "50%", background: colors.accentGreen }} />
                                  Ready
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {i === 1 && (
                          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24, alignItems: "start" }}>
                            <div
                              style={{
                                borderRadius: 12,
                                border: `1px solid ${colors.border}`,
                                background: colors.bgAlt,
                                padding: "20px 16px",
                                position: "relative",
                                overflow: "hidden",
                                height: 280,
                              }}
                            >
                              <style>{`
                                @keyframes document-scan-mobile {
                                  0% { top: 5%; opacity: 0; }
                                  5% { opacity: 1; }
                                  95% { top: 95%; opacity: 1; }
                                  100% { top: 95%; opacity: 0; }
                                }
                              `}</style>
                              <p style={{ margin: "0 0 8px 0", fontSize: "10px", fontWeight: 800, letterSpacing: "1px", color: colors.textMuted, fontFamily: "'Source Sans 3', sans-serif" }}>
                                DEPARTMENT OF HOMELAND SECURITY
                              </p>
                              <p style={{ margin: "0 0 20px 0", fontSize: "18px", fontWeight: 700, color: colors.textDark, fontFamily: "'Satoshi', sans-serif" }}>
                                Notice of Action
                              </p>
                              {[0.6, 0.75, 0.85, 0.7, 0.8, 0.65, 0.72, 0.6, 0.75, 0.85].map((w, j) => (
                                <div
                                  key={j}
                                  style={{
                                    height: 4,
                                    borderRadius: 2,
                                    background: "#D1D9E2",
                                    width: `${w * 100}%`,
                                    marginBottom: 10,
                                    opacity: 0.6,
                                  }}
                                />
                              ))}
                              <div
                                style={{
                                  position: "absolute",
                                  left: "10%",
                                  width: "80%",
                                  height: 2,
                                  background: "#519DD6",
                                  animation: "document-scan-mobile 2s ease-in-out infinite alternate",
                                  boxShadow: "0 0 16px 4px rgba(81, 157, 214, 0.4)"
                                }}
                              />
                            </div>
                            <div style={{ minWidth: 0 }}>
                              <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 16 }}>
                                <span
                                  style={{
                                    fontFamily: "'Source Sans 3', sans-serif",
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    color: "#1F7A55",
                                    background: "#E8F5EE",
                                    padding: "6px 12px",
                                    borderRadius: 999,
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 6,
                                  }}
                                >
                                  <span aria-hidden style={{ width: 6, height: 6, borderRadius: "50%", background: colors.accentGreen }} />
                                  Extracted in 0.6s
                                </span>
                              </div>
                              <div style={{ display: "flex", flexDirection: "column" }}>
                                {[
                                  ["Document type", "I-797 Approval Notice"],
                                  ["Receipt number", "EAC-24-091-11453"],
                                  ["Beneficiary", "Priya S."],
                                  ["Classification", "H-1B"],
                                  ["Valid from", "13 Aug 2023"],
                                  ["Valid until", "12 Aug 2026"],
                                ].map(([k, v]) => (
                                  <div
                                    key={k}
                                    style={{
                                      display: "grid",
                                      gridTemplateColumns: "120px 1fr",
                                      gap: 12,
                                      padding: "10px 0",
                                      borderTop: `1px solid ${colors.border}`,
                                      alignItems: "center",
                                    }}
                                  >
                                    <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", color: colors.textMuted, textTransform: "uppercase" }}>
                                      {k}
                                    </span>
                                    <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: "14px", fontWeight: 700, color: colors.textDark }}>
                                      {v}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {i === 2 && (
                          <div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
                              <p style={{ margin: 0, fontFamily: "'Source Sans 3', sans-serif", fontSize: "13px", fontWeight: 800, letterSpacing: "2px", color: colors.textMuted }}>
                                REMINDER SCHEDULE · I-797
                              </p>
                              <span
                                style={{
                                  fontFamily: "'Source Sans 3', sans-serif",
                                  fontSize: "13px",
                                  fontWeight: 700,
                                  color: "#1F7A55",
                                  background: "rgba(52,184,124,0.14)",
                                  padding: "6px 10px",
                                  borderRadius: 999,
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: 6,
                                }}
                              >
                                <span aria-hidden style={{ width: 8, height: 8, borderRadius: "50%", background: colors.accentGreen }} />
                                Active
                              </span>
                            </div>
                            <div style={{ border: `1px solid ${colors.border}`, borderRadius: 16, overflow: "hidden", marginBottom: 12 }}>
                              {[
                                { days: "90 days", copy: "Start talking to your employer about the I-797 renewal.", chan: "Email" },
                                { days: "60 days", copy: "Confirm your attorney has the paperwork in motion.", chan: "Email + Push" },
                                { days: "30 days", copy: "File the renewal if not already submitted.", chan: "Push" },
                                { days: "7 days", copy: "Final reminder — last chance to act.", chan: "SMS + Push" },
                              ].map((row, rIdx) => (
                                <div
                                  key={row.days}
                                  style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr",
                                    gap: 8,
                                    padding: "12px 16px",
                                    borderTop: rIdx === 0 ? "none" : `1px solid ${colors.border}`,
                                    background: colors.white,
                                  }}
                                  className="hiw-v2-remind-row-mobile"
                                >
                                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "16px", fontWeight: 800, color: colors.brandPrimary }}>
                                      {row.days}
                                    </span>
                                    <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px", fontWeight: 700, color: colors.textMuted }}>
                                      {row.chan}
                                    </span>
                                  </div>
                                  <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "15px", color: colors.textBody, lineHeight: 1.45 }}>
                                    {row.copy}
                                  </span>
                                </div>
                              ))}
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 12,
                                padding: "12px 16px",
                                borderRadius: 14,
                                background: colors.brandPrimaryPale,
                                border: `1px solid ${colors.brandPrimaryLight}55`,
                              }}
                            >
                              <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "16px", fontWeight: 700, color: colors.textDark }}>
                                Also loop in my spouse
                              </span>
                              <button
                                type="button"
                                role="switch"
                                aria-checked={spouseOn}
                                onClick={() => setSpouseOn((v) => !v)}
                                style={{
                                  width: 48,
                                  height: 28,
                                  borderRadius: 999,
                                  border: "none",
                                  cursor: "pointer",
                                  background: spouseOn ? colors.accentGreen : colors.border,
                                  position: "relative",
                                  flexShrink: 0,
                                  transition: "background 0.15s ease",
                                }}
                              >
                                <span
                                  style={{
                                    position: "absolute",
                                    top: 3,
                                    left: spouseOn ? 24 : 3,
                                    width: 22,
                                    height: 22,
                                    borderRadius: "50%",
                                    background: colors.white,
                                    boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
                                    transition: "left 0.15s ease",
                                  }}
                                />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="hiw-v2-detail" style={{ display: "flex", flexDirection: "column", padding: "clamp(24px, 4vw, 40px)", minWidth: 0, background: colors.white }}>
              <div style={{ display: "grid", flex: 1, alignItems: "start" }}>
                {steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={step.id}
                      style={{
                        gridArea: "1/1",
                        visibility: isActive ? "visible" : "hidden",
                        opacity: isActive ? 1 : 0,
                        transition: "opacity 0.25s ease",
                        pointerEvents: isActive ? "auto" : "none",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Satoshi', sans-serif",
                          fontSize: "clamp(22px, 2.5vw, 28px)",
                          fontWeight: 800,
                          color: colors.textDark,
                          margin: "0 0 10px 0",
                          lineHeight: 1.2,
                        }}
                      >
                        {step.panelTitle}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: "17px",
                          color: colors.textMuted,
                          lineHeight: 1.6,
                          margin: "0 0 16px 0",
                          maxWidth: "640px",
                        }}
                      >
                        {step.panelDesc}
                      </p>

                      {idx === 0 && (
                        <div>
                          <div
                            style={{
                              border: `2px dashed ${colors.border}`,
                              borderRadius: 16,
                              padding: "36px 24px",
                              textAlign: "center",
                              background: colors.bgAlt,
                              marginBottom: 20,
                            }}
                          >
                            <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
                              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden>
                                <path d="M12 5v10M8 9l4-4 4 4" stroke={colors.brandPrimary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 19h14" stroke={colors.brandPrimary} strokeWidth="2.2" strokeLinecap="round" />
                              </svg>
                            </div>
                            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "17px", color: colors.textDark, fontWeight: 600, margin: "0 0 8px 0" }}>
                              Drop a document or{" "}
                              <span style={{ color: colors.brandPrimary, cursor: "pointer" }}>browse files</span>
                            </p>
                            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px", color: colors.textMuted, margin: 0 }}>
                              PDF, JPG, PNG · max 25MB
                            </p>
                          </div>
                          {[
                            { name: "I-797 Approval Notice.pdf", size: "1.2 MB" },
                            { name: "Passport Scan.jpg", size: "840 KB" },
                          ].map((f) => (
                            <div
                              key={f.name}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 16,
                                padding: "16px 18px",
                                borderRadius: 12,
                                border: `1px solid ${colors.border}`,
                                background: colors.white,
                                marginBottom: 12,
                              }}
                            >
                              <div
                                style={{
                                  width: 44,
                                  height: 44,
                                  borderRadius: 10,
                                  background: colors.brandPrimaryPale,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: colors.brandPrimary,
                                  flexShrink: 0,
                                }}
                                aria-hidden
                              >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                  <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M6 7h12v11a2 2 0 01-2 2H8a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.8" />
                                </svg>
                              </div>
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <p style={{ margin: 0, fontFamily: "'Source Sans 3', sans-serif", fontSize: "16px", fontWeight: 700, color: colors.textDark }}>
                                  {f.name}
                                </p>
                                <p style={{ margin: "4px 0 0 0", fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px", color: colors.textMuted }}>{f.size}</p>
                              </div>
                              <span
                                style={{
                                  fontFamily: "'Source Sans 3', sans-serif",
                                  fontSize: "13px",
                                  fontWeight: 700,
                                  color: "#1F7A55",
                                  background: "rgba(52,184,124,0.14)",
                                  padding: "8px 12px",
                                  borderRadius: 999,
                                  flexShrink: 0,
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: 8,
                                }}
                              >
                                <span aria-hidden style={{ width: 8, height: 8, borderRadius: "50%", background: colors.accentGreen }} />
                                Ready
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {idx === 1 && (
                        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.15fr)", gap: 24, alignItems: "start" }} className="hiw-v2-extract-grid">
                          <div
                            style={{
                              borderRadius: 12,
                              border: `1px solid ${colors.border}`,
                              background: colors.bgAlt,
                              padding: "20px 16px",
                              position: "relative",
                              overflow: "hidden",
                              height: 380,
                            }}
                          >
                            <style>{`
                              @keyframes document-scan {
                                0% { top: 5%; opacity: 0; }
                                5% { opacity: 1; }
                                95% { top: 95%; opacity: 1; }
                                100% { top: 95%; opacity: 0; }
                              }
                            `}</style>
                            <p style={{ margin: "0 0 8px 0", fontSize: "10px", fontWeight: 800, letterSpacing: "1px", color: colors.textMuted, fontFamily: "'Source Sans 3', sans-serif" }}>
                              DEPARTMENT OF HOMELAND SECURITY
                            </p>
                            <p style={{ margin: "0 0 20px 0", fontSize: "18px", fontWeight: 700, color: colors.textDark, fontFamily: "'Satoshi', sans-serif" }}>
                              Notice of Action
                            </p>
                            {[0.6, 0.75, 0.85, 0.7, 0.8, 0.65, 0.72, 0.6, 0.75, 0.85, 0.68, 0.72, 0.8, 0.65, 0.75].map((w, j) => (
                              <div
                                key={j}
                                style={{
                                  height: 4,
                                  borderRadius: 2,
                                  background: "#D1D9E2",
                                  width: `${w * 100}%`,
                                  marginBottom: 10,
                                  opacity: 0.6,
                                }}
                              />
                            ))}
                            <div
                              style={{
                                position: "absolute",
                                left: "10%",
                                width: "80%",
                                height: 2,
                                background: "#519DD6",
                                animation: "document-scan 2s ease-in-out infinite alternate",
                                boxShadow: "0 0 16px 4px rgba(81, 157, 214, 0.4)"
                              }}
                            />
                          </div>
                          <div style={{ minWidth: 0 }}>
                            <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 16 }}>
                              <span
                                style={{
                                  fontFamily: "'Source Sans 3', sans-serif",
                                  fontSize: "12px",
                                  fontWeight: 700,
                                  color: "#1F7A55",
                                  background: "#E8F5EE",
                                  padding: "6px 12px",
                                  borderRadius: 999,
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: 6,
                                }}
                              >
                                <span aria-hidden style={{ width: 6, height: 6, borderRadius: "50%", background: colors.accentGreen }} />
                                Extracted in 0.6s
                              </span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                              {[
                                ["Document type", "I-797 Approval Notice"],
                                ["Receipt number", "EAC-24-091-11453"],
                                ["Beneficiary", "Priya S."],
                                ["Classification", "H-1B"],
                                ["Valid from", "13 Aug 2023"],
                                ["Valid until", "12 Aug 2026"],
                              ].map(([k, v], cIdx) => (
                                <div
                                  key={k}
                                  style={{
                                    display: "grid",
                                    gridTemplateColumns: "140px 1fr",
                                    gap: 16,
                                    padding: "12px 0",
                                    borderTop: `1px solid ${colors.border}`,
                                    alignItems: "center",
                                  }}
                                >
                                  <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", color: colors.textMuted, textTransform: "uppercase" }}>
                                    {k}
                                  </span>
                                  <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: "14px", fontWeight: 700, color: colors.textDark }}>
                                    {v}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {idx === 2 && (
                        <div>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
                            <p style={{ margin: 0, fontFamily: "'Source Sans 3', sans-serif", fontSize: "13px", fontWeight: 800, letterSpacing: "2px", color: colors.textMuted }}>
                              REMINDER SCHEDULE · I-797
                            </p>
                            <span
                              style={{
                                fontFamily: "'Source Sans 3', sans-serif",
                                fontSize: "13px",
                                fontWeight: 700,
                                color: "#1F7A55",
                                background: "rgba(52,184,124,0.14)",
                                padding: "6px 10px",
                                borderRadius: 999,
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 6,
                              }}
                            >
                              <span aria-hidden style={{ width: 8, height: 8, borderRadius: "50%", background: colors.accentGreen }} />
                              Active
                            </span>
                          </div>
                          <div style={{ border: `1px solid ${colors.border}`, borderRadius: 16, overflow: "hidden", marginBottom: 12 }}>
                            {[
                              { days: "90 days", copy: "Start talking to your employer about the I-797 renewal.", chan: "Email" },
                              { days: "60 days", copy: "Confirm your attorney has the paperwork in motion.", chan: "Email + Push" },
                              { days: "30 days", copy: "File the renewal if not already submitted.", chan: "Push" },
                              { days: "7 days", copy: "Final reminder — last chance to act.", chan: "SMS + Push" },
                            ].map((row, rIdx) => (
                              <div
                                key={row.days}
                                style={{
                                  display: "grid",
                                  gridTemplateColumns: "100px 1fr auto",
                                  gap: 12,
                                  padding: "12px 16px",
                                  borderTop: rIdx === 0 ? "none" : `1px solid ${colors.border}`,
                                  alignItems: "center",
                                  background: colors.white,
                                }}
                                className="hiw-v2-remind-row"
                              >
                                <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "16px", fontWeight: 800, color: colors.brandPrimary }}>
                                  {row.days}
                                </span>
                                <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "15px", color: colors.textBody, lineHeight: 1.45 }}>
                                  {row.copy}
                                </span>
                                <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px", fontWeight: 700, color: colors.textMuted, textAlign: "right", whiteSpace: "nowrap" }}>
                                  {row.chan}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: 12,
                              padding: "12px 16px",
                              borderRadius: 14,
                              background: colors.brandPrimaryPale,
                              border: `1px solid ${colors.brandPrimaryLight}55`,
                            }}
                          >
                            <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "16px", fontWeight: 700, color: colors.textDark }}>
                              Also loop in my spouse
                            </span>
                            <button
                              type="button"
                              role="switch"
                              aria-checked={spouseOn}
                              onClick={() => setSpouseOn((v) => !v)}
                              style={{
                                width: 48,
                                height: 28,
                                borderRadius: 999,
                                border: "none",
                                cursor: "pointer",
                                background: spouseOn ? colors.accentGreen : colors.border,
                                position: "relative",
                                flexShrink: 0,
                                transition: "background 0.15s ease",
                              }}
                            >
                              <span
                                style={{
                                  position: "absolute",
                                  top: 3,
                                  left: spouseOn ? 24 : 3,
                                  width: 22,
                                  height: 22,
                                  borderRadius: "50%",
                                  background: colors.white,
                                  boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
                                  transition: "left 0.15s ease",
                                }}
                              />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, borderTop: `1px solid ${colors.border}` }}>
                <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "2px", color: colors.textMuted }}>
                  STEP 0{activeStep + 1} OF 03
                </span>
                <button
                  type="button"
                  onClick={goNext}
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: colors.brandPrimary,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: 0,
                  }}
                >
                  Next step
                  <span aria-hidden>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hiw-v2-mobile-detail {
          display: none;
        }
        @media (max-width: 900px) {
          .hiw-v2-grid {
            grid-template-columns: 1fr !important;
          }
          .hiw-v2-sidebar {
            border-right: none !important;
          }
          .hiw-v2-detail {
            display: none !important;
          }
          .hiw-v2-mobile-detail {
            display: flex !important;
            flex-direction: column;
            padding: 20px;
            background: ${colors.white};
            border-bottom: 1px solid ${colors.border};
          }
          .hiw-v2-extract-grid {
            grid-template-columns: 1fr !important;
          }
          .hiw-v2-remind-row {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}

const HERO_NOISIEST_GRADIENT = "linear-gradient(135deg, #4F9ED6 0%, #34B87C 100%)";

const HERO_MARQUEE_ITEMS: Array<{
  title: string;
  meta: string;
  date: string;
  tone: "blue" | "red" | "yellow" | "green";
}> = [
    { title: "I-94 Arrival", meta: "Current", date: "Jan 12 2024", tone: "blue" },
    { title: "Visa stamp · H-1B", meta: "Valid", date: "Mar 03 2027", tone: "green" },
    { title: "EAD · Spouse", meta: "61 days", date: "Jun 18 2026", tone: "yellow" },
    { title: "I-797 Approval", meta: "Valid", date: "Aug 12 2026", tone: "green" },
    { title: "Passport · IND", meta: "42 days", date: "Nov 30 2026", tone: "yellow" },
    { title: "I-94 Departure", meta: "Current", date: "Jun 02 2025", tone: "blue" },
    { title: "Visa stamp · H-4", meta: "Valid", date: "Sep 14 2027", tone: "green" },
  ];

function HeroMarqueeChip({
  title,
  meta,
  date,
  tone,
}: (typeof HERO_MARQUEE_ITEMS)[number]) {
  const dot =
    tone === "blue"
      ? colors.brandPrimary
      : tone === "red"
        ? colors.danger
        : tone === "yellow"
          ? colors.warning
          : colors.accentGreen;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexShrink: 0,
        padding: "4px 4px 4px 0",
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: 10,
          background: colors.bgAlt,
          border: `1px solid ${colors.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: colors.textMuted,
        }}
        aria-hidden
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M6 7h12v11a2 2 0 01-2 2H8a2 2 0 01-2-2V7z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
        <span
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            color: colors.textDark,
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "12px",
            color: colors.textMuted,
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span aria-hidden style={{ width: 7, height: 7, borderRadius: "50%", background: dot }} />
            {meta}
            <span style={{ opacity: 0.5 }}>·</span>
            {date}
          </span>
        </span>
      </div>
    </div>
  );
}

function HeroBannerV2() {
  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const pillStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 18px",
    borderRadius: 9999,
    background: colors.brandPrimaryPale,
    color: colors.brandPrimaryDark,
    fontFamily: "'Source Sans 3', sans-serif",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.02em",
    marginBottom: "20px",
    border: `1px solid ${colors.brandPrimaryLight}`,
  };

  return (
    <section
      className="home-hero hero-v2"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: colors.white,
        position: "relative",
        overflow: "hidden",
        padding: 0,
        paddingTop: "50px",
      }}
    >
      <div
        className="home-hero-inner"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: "88px 0 clamp(32px, 5vw, 56px)",
        }}
      >
        <div style={{ ...PAGE_INNER, position: "relative", width: "100%" }}>
          <HeroFade>
            <div
              className="hero-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(40px, 7vw, 100px)",
                alignItems: "center",
              }}
            >
              <div style={{ minWidth: 0 }}>
                <div style={pillStyle}>
                  <span aria-hidden style={{ width: 6, height: 6, borderRadius: "50%", background: colors.brandPrimary }} />
                  Private beta opening soon
                </div>
                <h1
                  className="hero-v2-headline"
                  style={{
                    margin: 0,
                    fontFamily: "'Satoshi', sans-serif",
                    letterSpacing: "-0.03em",
                    marginBottom: "24px",
                    fontSize: "clamp(40px, 6vw, 64px)",
                    fontWeight: 800,
                    color: colors.textDark,
                    lineHeight: 1.06,
                  }}
                >
                  Never miss an{" "}
                  <em
                    style={{
                      display: "inline-block",
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontStyle: "italic",
                      fontWeight: 800,
                      background: HERO_NOISIEST_GRADIENT,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      paddingRight: "0.2em",
                      paddingBottom: "0.1em",
                    }}
                  >
                    immigration
                  </em>{" "}
                  deadline again.
                </h1>
                <p
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "18px",
                    color: colors.textBody,
                    lineHeight: 1.65,
                    marginBottom: "32px",
                    maxWidth: "580px",
                  }}
                >
                  ImmiHub keeps every H-1B document, deadline, and renewal date in one encrypted vault. We read the dates so you don't have to and nudge you months before anything expires.
                </p>
                <div
                  className="hero-v2-btns"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 14,
                    alignItems: "stretch",
                    marginBottom: "28px",
                  }}
                >
                  <div style={{ flex: "1 1 200px", minWidth: 0 }}>
                    <WaitlistForm
                      variant="button"
                      buttonLabel="Request early access"
                      buttonBg={colors.accentGreen}
                      buttonShadow="0 10px 24px rgba(52,184,124,0.28)"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={scrollToHowItWorks}
                    style={{
                      flex: "0 1 auto",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "16px 26px",
                      borderRadius: 14,
                      border: `1.5px solid ${colors.border}`,
                      background: colors.white,
                      color: colors.textDark,
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "17px",
                      fontWeight: 700,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      boxSizing: "border-box",
                    }}
                  >
                    See how it works
                    <span aria-hidden style={{ fontSize: "18px", lineHeight: 1 }}>
                      ↓
                    </span>
                  </button>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                  <div style={{ display: "flex", marginLeft: 4 }}>
                    {[
                      { initials: "PS", bg: "#4F9ED6" },
                      { initials: "RM", bg: "#34B87C" },
                      { initials: "AK", bg: "#7BB8E2" },
                      { initials: "LT", bg: "#2B7AB8" },
                    ].map((a, i) => (
                      <div
                        key={a.initials}
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          background: a.bg,
                          color: colors.white,
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: "14px",
                          fontWeight: 800,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginLeft: i === 0 ? 0 : -12,
                          border: `2px solid ${colors.white}`,
                          boxShadow: "0 2px 8px rgba(26,35,50,0.08)",
                        }}
                      >
                        {a.initials}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p style={{ margin: 0, fontFamily: "'Satoshi', sans-serif", fontSize: "18px", fontWeight: 800, color: colors.textDark }}>
                      Private beta - limited invites
                    </p>
                    <p style={{ margin: "4px 0 0 0", fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px", color: colors.textMuted }}>
                      Only 29 spots available
                    </p>
                  </div>
                </div>
              </div>

              <div className="hero-v2-vault-col" style={{ minWidth: 0, display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: 480, position: "relative" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 12,
                      marginBottom: 20,
                      paddingLeft: 4,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "13px",
                        fontWeight: 800,
                        letterSpacing: "2.5px",
                        color: colors.textMuted,
                        textTransform: "uppercase",
                        paddingTop: 6,
                      }}
                    >
                      YOUR VAULT · 8 DOCUMENTS
                    </span>

                  </div>

                  <div
                    className="hero-v2-card-stack"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      paddingBottom: 32,
                      position: "relative",
                    }}
                  >
                    <style>{`
                      .hover-stack-card {
                        transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease;
                        cursor: pointer;
                      }
                      .hover-stack-card:hover {
                        z-index: 10 !important;
                        transform: translateY(-8px) !important;
                        box-shadow: 0 24px 56px rgba(26,35,50,0.16) !important;
                      }
                    `}</style>
                    {/* Back card — I-797 */}
                    <div
                      className="hover-stack-card"
                      style={{
                        width: "100%",
                        maxWidth: 310,
                        background: colors.white,
                        borderRadius: 16,
                        padding: "15px 18px",
                        border: `1px solid ${colors.border}`,
                        boxShadow: "0 8px 28px rgba(26,35,50,0.08)",
                        zIndex: 1,
                        position: "relative",
                        marginLeft: 0,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          top: -18,
                          right: 12,
                          background: colors.white,
                          color: colors.accentGreen,
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: "11px",
                          fontWeight: 800,
                          letterSpacing: "1px",
                          padding: "4px 10px",
                          borderRadius: 6,
                          transform: "rotate(-10deg)",
                          boxShadow: "0 6px 16px rgba(52,184,124,0.12)",
                          border: `2px solid ${colors.accentGreen}`,
                          zIndex: 20,
                          whiteSpace: "nowrap",
                          pointerEvents: "none",
                        }}
                      >
                        MONITORED ✓
                      </span>
                      <div style={{ display: "flex", gap: "16px" }}>
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            background: colors.brandPrimaryPale,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: colors.brandPrimary,
                            flexShrink: 0,
                          }}
                          aria-hidden
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M6 7h12v11a2 2 0 01-2 2H8a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.8" />
                            <path d="M10 11h4M10 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                            <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", color: colors.textMuted }}>
                              DOCUMENT · 01
                            </span>
                            <span
                              className="hero-v2-card-badge"
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 6,
                                fontFamily: "'Source Sans 3', sans-serif",
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#1F7A55",
                                background: colors.accentGreenLight,
                                padding: "4px 10px",
                                borderRadius: 999,
                              }}
                            >
                              <span aria-hidden style={{ width: 6, height: 6, borderRadius: "50%", background: colors.accentGreen }} />
                              Valid
                            </span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                            <h3 style={{ margin: 0, fontFamily: "'Satoshi', sans-serif", fontSize: "clamp(18px, 2.5vw, 21px)", fontWeight: 800, color: colors.textDark }}>
                              I-797
                            </h3>
                            <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "12px", fontWeight: 500, color: colors.textMuted }}>
                              Exp · 12 Aug 2026
                            </span>
                          </div>
                          <p style={{ margin: "2px 0 0 0", fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px", color: colors.textBody }}>
                            Approval Notice
                          </p>
                        </div>
                      </div>
                      <div style={{ marginTop: 14 }}>
                        <div style={{ height: 6, borderRadius: 999, background: colors.bgAlt, overflow: "hidden", position: "relative" }}>
                          <div
                            style={{
                              width: "70%",
                              height: "100%",
                              borderRadius: 999,
                              background: colors.accentGreen,
                            }}
                          />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                          <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "12px", fontWeight: 600, color: colors.textMuted }}>Issued</span>
                          <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "12px", fontWeight: 600, color: colors.textMuted }}>Expiry</span>
                        </div>
                      </div>
                    </div>

                    {/* Middle card — I-94 */}
                    <div
                      className="hover-stack-card hero-v2-card-middle"
                      style={{
                        width: "100%",
                        maxWidth: 310,
                        marginTop: -40,
                        marginLeft: 40,
                        background: colors.white,
                        borderRadius: 16,
                        padding: "15px 18px",
                        border: `1px solid ${colors.border}`,
                        boxShadow: "0 14px 36px rgba(26,35,50,0.10)",
                        zIndex: 2,
                        position: "relative",
                      }}
                    >
                      <div style={{ display: "flex", gap: "16px" }}>
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            background: colors.brandPrimaryPale,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: colors.brandPrimary,
                            flexShrink: 0,
                          }}
                          aria-hidden
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M6 7h12v11a2 2 0 01-2 2H8a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.8" />
                            <path d="M10 11h4M10 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                            <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", color: colors.textMuted }}>
                              DOCUMENT · 02
                            </span>
                            <span
                              className="hero-v2-card-badge"
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 6,
                                fontFamily: "'Source Sans 3', sans-serif",
                                fontSize: "12px",
                                fontWeight: 700,
                                color: colors.brandPrimaryDark,
                                background: colors.brandPrimaryPale,
                                padding: "4px 10px",
                                borderRadius: 999,
                              }}
                            >
                              <span aria-hidden style={{ width: 6, height: 6, borderRadius: "50%", background: colors.brandPrimary }} />
                              Current
                            </span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                            <h3 style={{ margin: 0, fontFamily: "'Satoshi', sans-serif", fontSize: "clamp(18px, 2.5vw, 21px)", fontWeight: 800, color: colors.textDark }}>
                              I-94
                            </h3>
                            <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "12px", fontWeight: 500, color: colors.textMuted }}>
                              Exp · 04 Feb 2026
                            </span>
                          </div>
                          <p style={{ margin: "2px 0 0 0", fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px", color: colors.textBody }}>
                            Arrival Record
                          </p>
                        </div>
                      </div>
                      <div style={{ marginTop: 14 }}>
                        <div style={{ height: 6, borderRadius: 999, background: colors.bgAlt, overflow: "hidden", position: "relative" }}>
                          <div
                            style={{
                              width: "80%",
                              height: "100%",
                              borderRadius: 999,
                              background: colors.brandPrimary,
                            }}
                          />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                          <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "12px", fontWeight: 600, color: colors.textMuted }}>Issued</span>
                          <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "12px", fontWeight: 600, color: colors.textMuted }}>Expiry</span>
                        </div>
                      </div>
                    </div>

                    {/* Front card — Passport */}
                    <div
                      className="hover-stack-card hero-v2-card-front"
                      style={{
                        width: "100%",
                        maxWidth: 310,
                        marginTop: -40,
                        marginLeft: 60,
                        background: colors.white,
                        borderRadius: 16,
                        padding: "15px 18px",
                        border: `1px solid ${colors.border}`,
                        boxShadow: "0 20px 48px rgba(26,35,50,0.14)",
                        zIndex: 3,
                        position: "relative",
                      }}
                    >
                      <div style={{ display: "flex", gap: "16px" }}>
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            background: colors.brandPrimaryPale,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: colors.brandPrimary,
                            flexShrink: 0,
                          }}
                          aria-hidden
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M6 7h12v11a2 2 0 01-2 2H8a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.8" />
                            <path d="M10 11h4M10 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                            <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", color: colors.textMuted }}>
                              DOCUMENT · 03
                            </span>
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 6,
                                fontFamily: "'Source Sans 3', sans-serif",
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#9A6B00",
                                background: colors.warningLight,
                                padding: "4px 10px",
                                borderRadius: 999,
                              }}
                            >
                              <span aria-hidden style={{ width: 6, height: 6, borderRadius: "50%", background: colors.warning }} />
                              42 days
                            </span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                            <h3 style={{ margin: 0, fontFamily: "'Satoshi', sans-serif", fontSize: "clamp(18px, 2.5vw, 21px)", fontWeight: 800, color: colors.textDark }}>
                              PPT
                            </h3>
                            <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "13px", fontWeight: 500, color: colors.textMuted }}>
                              Exp · 30 Nov 2026
                            </span>
                          </div>
                          <p style={{ margin: "2px 0 0 0", fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px", color: colors.textBody }}>
                            Passport — IND
                          </p>
                        </div>
                      </div>
                      <div style={{ marginTop: 14 }}>
                        <div style={{ height: 6, borderRadius: 999, background: colors.bgAlt, overflow: "hidden", position: "relative" }}>
                          <div
                            style={{
                              width: "85%",
                              height: "100%",
                              borderRadius: 999,
                              background: colors.warning,
                            }}
                          />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                          <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "13px", fontWeight: 600, color: colors.textMuted }}>Issued</span>
                          <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "13px", fontWeight: 600, color: colors.textMuted }}>Expiry</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HeroFade>
        </div>
      </div>

      <div className="hero-marquee-shell" aria-hidden>
        <div className="hero-marquee-track">
          {[0, 1].map((loop) => (
            <Fragment key={loop}>
              {HERO_MARQUEE_ITEMS.map((item, i) => (
                <HeroMarqueeChip key={`${loop}-${i}`} {...item} />
              ))}
            </Fragment>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .hero-v2-card-middle {
            margin-left: 32px !important;
          }
          .hero-v2-card-front {
            margin-left: 52px !important;
          }
          .hero-v2-card-badge {
            padding: 2px 8px !important;
            font-size: 11px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-v2-card-middle {
            margin-left: 12px !important;
          }
          .hero-v2-card-front {
            margin-left: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

export function HomePage() {
  return (
    <div>
      <HeroBannerV2 />


      {/* ===== THE PROBLEM — centered phone with 4 surrounding cards ===== */}
      <section className="home-section-stack" style={{ padding: "56px 0 72px", background: colors.bgWhite, overflow: "hidden" }}>
        <div style={PAGE_INNER}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <AnimatedSection>
              <div className="problem-section-header" style={{ textAlign: "center", marginBottom: "64px" }}>
                <p style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: colors.brandPrimary,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "16px",
                }}>
                  The Problem
                </p>
                <h2 style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: "clamp(32px, 4vw, 44px)",
                  fontWeight: 800,
                  color: colors.textDark,
                  marginBottom: "8px",
                  lineHeight: 1.2,
                }}>
                  780,000+ H-1B Holders.
                </h2>
                <h2 style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: "clamp(32px, 4vw, 44px)",
                  fontWeight: 800,
                  color: colors.textDark,
                  marginBottom: "20px",
                  lineHeight: 1.2,
                }}>
                  <span style={{ color: colors.brandPrimary }}>No One Looking Out for Their Deadlines.</span>
                </h2>
                <p style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "16px",
                  color: colors.textBody,
                  lineHeight: 1.7,
                  maxWidth: "560px",
                  margin: "0 auto",
                }}>
                  A single missed date can cost you your job, your status, and your life in the US. And nothing has been built to help you stay on top of it - until now.
                </p>
              </div>
            </AnimatedSection>

            <div className="problem-phone-layout" style={{ position: "relative" }}>
              <div className="problem-phone" style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "280px",
                zIndex: 2,
                pointerEvents: "none",
              }}>
                <Image
                  src="/Images/immihub-mobile.png"
                  alt="ImmiHub app dashboard on mobile"
                  width={560}
                  height={1120}
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>

              <div className="problem-cards-row" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "360px",
                marginBottom: "40px",
                position: "relative",
                zIndex: 1,
              }}>
                <AnimatedSection>
                  <div className="problem-card problem-card-top-left" style={{
                    background: colors.bgWhite,
                    borderRadius: "16px",
                    padding: "28px 28px 32px",
                    boxShadow: "0 4px 20px rgba(26,35,50,0.08), 0 0 0 1px rgba(26,35,50,0.04)",
                    position: "relative",
                  }}>
                    <h3 style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: colors.textDark,
                      marginBottom: "12px",
                      lineHeight: 1.3,
                    }}>
                      A Renewal Deadline Lost in Your Inbox
                    </h3>
                    <p style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "14px",
                      color: colors.textBody,
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      Your I-797 approval notice arrived a year ago. The renewal date was buried somewhere in that email. By the time you realize it, you're filing on an emergency basis and hoping for the best.
                    </p>
                    <div className="card-arrow card-arrow-right" style={{
                      position: "absolute",
                      right: "-16px",
                      bottom: "32px",
                      width: 0,
                      height: 0,
                      borderTop: "10px solid transparent",
                      borderBottom: "10px solid transparent",
                      borderLeft: `16px solid ${colors.bgWhite}`,
                      filter: "drop-shadow(2px 0 2px rgba(26,35,50,0.06))",
                    }} aria-hidden />
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.08}>
                  <div className="problem-card problem-card-top-right" style={{
                    background: colors.bgWhite,
                    borderRadius: "16px",
                    padding: "28px 28px 32px",
                    boxShadow: "0 4px 20px rgba(26,35,50,0.08), 0 0 0 1px rgba(26,35,50,0.04)",
                    position: "relative",
                  }}>
                    <h3 style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: colors.textDark,
                      marginBottom: "12px",
                      lineHeight: 1.3,
                    }}>
                      An Expired Passport You Didn&apos;t See Coming
                    </h3>
                    <p style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "14px",
                      color: colors.textBody,
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      You&apos;re at the boarding gate, bags checked, ready to go — and the agent tells you your passport expired last month. Trip cancelled, money gone, and a stressful renewal ahead.
                    </p>
                    <div className="card-arrow card-arrow-left" style={{
                      position: "absolute",
                      left: "-16px",
                      bottom: "32px",
                      width: 0,
                      height: 0,
                      borderTop: "10px solid transparent",
                      borderBottom: "10px solid transparent",
                      borderRight: `16px solid ${colors.bgWhite}`,
                      filter: "drop-shadow(-2px 0 2px rgba(26,35,50,0.06))",
                    }} aria-hidden />
                  </div>
                </AnimatedSection>
              </div>

              <div className="problem-cards-row" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "360px",
                position: "relative",
                zIndex: 1,
              }}>
                <AnimatedSection delay={0.12}>
                  <div className="problem-card problem-card-bottom-left" style={{
                    background: colors.bgWhite,
                    borderRadius: "16px",
                    padding: "28px 28px 32px",
                    boxShadow: "0 4px 20px rgba(26,35,50,0.08), 0 0 0 1px rgba(26,35,50,0.04)",
                    position: "relative",
                  }}>
                    <h3 style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: colors.textDark,
                      marginBottom: "12px",
                      lineHeight: 1.3,
                    }}>
                      Critical Documents Scattered Everywhere
                    </h3>
                    <p style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "14px",
                      color: colors.textBody,
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      Some are in your email, some in phone photos, some in a folder at home you haven&apos;t opened in months. When you need something urgently, you can never find it fast enough.
                    </p>
                    <div className="card-arrow card-arrow-right" style={{
                      position: "absolute",
                      right: "-16px",
                      top: "32px",
                      width: 0,
                      height: 0,
                      borderTop: "10px solid transparent",
                      borderBottom: "10px solid transparent",
                      borderLeft: `16px solid ${colors.bgWhite}`,
                      filter: "drop-shadow(2px 0 2px rgba(26,35,50,0.06))",
                    }} aria-hidden />
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.16}>
                  <div className="problem-card problem-card-bottom-right" style={{
                    background: colors.bgWhite,
                    borderRadius: "16px",
                    padding: "28px 28px 32px",
                    boxShadow: "0 4px 20px rgba(26,35,50,0.08), 0 0 0 1px rgba(26,35,50,0.04)",
                    position: "relative",
                  }}>
                    <h3 style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: colors.textDark,
                      marginBottom: "12px",
                      lineHeight: 1.3,
                    }}>
                      Spreadsheets and Calendar Reminders That Fail You
                    </h3>
                    <p style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "14px",
                      color: colors.textBody,
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      You&apos;ve tried tracking dates in Google Sheets and setting phone reminders. But life gets busy, entries go stale, and the one date you forgot to add is the one that matters most.
                    </p>
                    <div className="card-arrow card-arrow-left" style={{
                      position: "absolute",
                      left: "-16px",
                      top: "32px",
                      width: 0,
                      height: 0,
                      borderTop: "10px solid transparent",
                      borderBottom: "10px solid transparent",
                      borderRight: `16px solid ${colors.bgWhite}`,
                      filter: "drop-shadow(-2px 0 2px rgba(26,35,50,0.06))",
                    }} aria-hidden />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorksInteractive />

      {/* Features — centered header, 2×3 grid; horizontal cards (visual left, copy right) */}
      <section id="features" className="home-section-stack features-section" style={{ padding: "56px 0 72px", background: colors.white, overflowX: "hidden" }}>
        <div style={PAGE_INNER}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", width: "100%", minWidth: 0 }}>
            <AnimatedSection>
              <div className="home-section-header-tight" style={{ textAlign: "center", marginBottom: "48px" }}>
                <p style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: colors.brandPrimary,
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  marginBottom: "14px",
                }}>
                  Features
                </p>
                <h2 style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: "clamp(28px, 3.6vw, 42px)",
                  fontWeight: 800,
                  color: colors.textDark,
                  marginBottom: "16px",
                  lineHeight: 1.15,
                }}>
                  Everything You Need,{" "}
                  <span style={{ color: colors.brandPrimary }}>Nothing You Don&apos;t</span>
                </h2>
                <p style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "16px",
                  color: colors.textBody,
                  lineHeight: 1.7,
                  maxWidth: "560px",
                  margin: "0 auto",
                }}>
                  Built from the ground up for H-1B holders. One secure home for your documents, your deadlines, and your peace of mind.
                </p>
              </div>
            </AnimatedSection>
            <div
              className="features-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "28px",
              }}
            >
              {FEATURE_ITEMS.map((item, i) => (
                <AnimatedSection key={i}>
                  <div
                    className="feature-card-row"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "stretch",
                      gap: "20px",
                      height: "100%",
                      width: "100%",
                      minWidth: 0,
                      maxWidth: "100%",
                      boxSizing: "border-box",
                      background: colors.white,
                      borderRadius: "18px",
                      padding: "18px 20px",
                      boxShadow: "0 6px 24px rgba(26,35,50,0.06), 0 0 0 1px rgba(26,35,50,0.04)",
                    }}
                  >
                    <div
                      className="feature-card-image-wrap"
                      style={{
                        flex: "0 0 42%",
                        maxWidth: "200px",
                        minWidth: 0,
                        borderRadius: "14px",
                        background: "#E8EAED",
                        aspectRatio: "1.05",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 900px) calc(100vw - 80px), 200px"
                        style={{
                          objectFit: "cover",
                          transform: "scale(1.12)",
                          transformOrigin: "center",
                        }}
                      />
                    </div>
                    <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left" }}>
                      <h3 style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: colors.textDark,
                        marginBottom: "8px",
                        lineHeight: 1.3,
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "14px",
                        color: colors.textBody,
                        lineHeight: 1.6,
                        margin: 0,
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap — vertical timeline, alternating cards */}
      <section className="roadmap-section home-section-stack" style={{ padding: "56px 0 72px", background: colors.white }}>
        <div style={PAGE_INNER}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <AnimatedSection>
              <div className="home-section-header-tight-lg" style={{ textAlign: "center", marginBottom: "64px" }}>
                <p style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: colors.brandPrimary,
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  marginBottom: "14px",
                }}>
                  Roadmap
                </p>
                <h2 style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: "clamp(28px, 3.8vw, 40px)",
                  fontWeight: 800,
                  color: colors.textDark,
                  marginBottom: "16px",
                  lineHeight: 1.2,
                }}>
                  What&apos;s Coming{" "}
                  <span style={{ color: colors.brandPrimary }}>Next</span>
                </h2>
                <p style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "16px",
                  color: colors.textBody,
                  lineHeight: 1.75,
                  maxWidth: "560px",
                  margin: "0 auto",
                }}>
                  The document vault is just the beginning. Here&apos;s where ImmiHub is headed — built around what H-1B holders actually need.
                </p>
              </div>
            </AnimatedSection>

            <div className="roadmap-timeline" style={{ position: "relative", paddingBottom: "8px" }}>
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "12px",
                  bottom: "12px",
                  width: 0,
                  borderLeft: `2px dashed ${colors.border}`,
                  transform: "translateX(-50%)",
                  zIndex: 0,
                }}
                className="roadmap-center-line"
              />

              {[
                {
                  side: "left" as const,
                  title: "AI-Powered Visa Assistant",
                  desc: "Ask questions about your immigration situation in plain English and get clear, personalized guidance.",
                  icon: <BrainIcon />,
                },
                {
                  side: "right" as const,
                  title: "Compliance Engine",
                  desc: "Track your visa status, monitor days spent in the US, and understand your travel risks before you book a flight.",
                  icon: <ShieldIcon />,
                },
                {
                  side: "left" as const,
                  title: "Multi-Visa Support",
                  desc: "F-1, Green Card, O-1, L-1 — every visa type gets its own tailored toolkit and deadline tracking.",
                  icon: <DocIcon />,
                },
                {
                  side: "right" as const,
                  title: "Family Vault",
                  desc: "Manage documents and deadlines for your spouse and dependents alongside your own, all in one place.",
                  icon: <FolderPlusIcon />,
                },
                {
                  side: "left" as const,
                  title: "Attorney & Employer Portals",
                  desc: "Share documents securely with your immigration lawyer or HR team. No more emailing sensitive files back and forth.",
                  icon: <BuildingIcon />,
                },
              ].map((item, i) => {
                const iconBox = (
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: colors.brandPrimaryPale,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: colors.brandPrimary,
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                );
                const cardInner = (
                  <div
                    className="roadmap-card"
                    style={{
                      background: colors.white,
                      borderRadius: 16,
                      padding: "22px 24px",
                      boxShadow: "0 8px 28px rgba(26,35,50,0.08), 0 0 0 1px rgba(26,35,50,0.05)",
                      maxWidth: "380px",
                      display: "flex",
                      alignItems: "center",
                      gap: 18,
                      flexDirection: item.side === "left" ? "row-reverse" : "row",
                      textAlign: item.side === "left" ? "right" : "left",
                    }}
                  >
                    {iconBox}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: colors.brandPrimary,
                        marginBottom: "8px",
                        lineHeight: 1.3,
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "14px",
                        color: colors.textBody,
                        lineHeight: 1.65,
                        margin: 0,
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
                const node = (
                  <div style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    border: `2px solid ${colors.brandPrimary}`,
                    background: colors.white,
                    flexShrink: 0,
                    zIndex: 2,
                    boxShadow: `0 0 0 4px ${colors.white}`,
                  }} aria-hidden />
                );

                return (
                  <AnimatedSection key={item.title} delay={i * 0.06}>
                    <div
                      className="roadmap-row"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 48px 1fr",
                        alignItems: "center",
                        marginBottom: i < 4 ? 40 : 0,
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {item.side === "left" ? (
                        <>
                          <div className="roadmap-card-wrap roadmap-card-wrap-left" style={{ justifySelf: "end", paddingRight: 20 }}>{cardInner}</div>
                          <div className="roadmap-node-col" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{node}</div>
                          <div />
                        </>
                      ) : (
                        <>
                          <div />
                          <div className="roadmap-node-col" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{node}</div>
                          <div className="roadmap-card-wrap roadmap-card-wrap-right" style={{ justifySelf: "start", paddingLeft: 20 }}>{cardInner}</div>
                        </>
                      )}
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What people say — three testimonial cards */}
      <section className="home-section-stack" style={{ padding: "52px 0 68px", background: colors.white }}>
        <div style={PAGE_INNER}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <AnimatedSection>
              <div className="home-section-header-tight" style={{ textAlign: "center", marginBottom: "48px" }}>
                <p style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: colors.brandPrimary,
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  marginBottom: "14px",
                }}>
                  What People Say
                </p>
                <h2 style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  margin: 0,
                }}>
                  <span style={{ color: colors.brandPrimary }}>Stories</span>
                  {" "}
                  <span style={{ color: colors.textDark }}>We Hear Every Day</span>
                </h2>
              </div>
            </AnimatedSection>
            <div
              className="testimonials-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "28px",
              }}
            >
              {[
                {
                  name: "Priya S",
                  role: "Software Engineer",
                  quote: "My I-797 renewal date was sitting in a year-old email I never thought to check. I found out two weeks before it expired. Something like ImmiHub would have caught that months in advance.",
                  avatar: "/Images/testimonials/priya.png",
                },
                {
                  name: "Rahul M",
                  role: "Data Analyst",
                  quote: "Every time I travel, I&apos;m scrambling to find my passport, visa stamp, and I-94 across three different apps and folders. Having everything in one secure place — that&apos;s all I&apos;ve ever wanted.",
                  avatar: "/Images/testimonials/rahul.png",
                },
                {
                  name: "Amit K",
                  role: "Product Manager",
                  quote: "My wife&apos;s EAD renewal crept up on us and she couldn&apos;t work for three months while we waited for a new card. A simple reminder at 180 days would have changed everything.",
                  avatar: "/Images/testimonials/amit.png",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.name} delay={i * 0.06}>
                  <div className="home-testimonial-card" style={{
                    background: colors.white,
                    borderRadius: "18px",
                    padding: "24px 22px 26px",
                    boxShadow: "0 8px 32px rgba(26,35,50,0.08), 0 0 0 1px rgba(26,35,50,0.05)",
                    textAlign: "left",
                    height: "100%",
                  }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "16px" }}>
                      <div
                        aria-hidden
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: "12px",
                          background: colors.bgAlt,
                          flexShrink: 0,
                          border: `1px solid ${colors.border}`,
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        <Image
                          src={item.avatar}
                          alt={`${item.name} avatar`}
                          fill
                          sizes="48px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <p style={{
                          fontFamily: "'Satoshi', sans-serif",
                          fontSize: "16px",
                          fontWeight: 700,
                          color: colors.textDark,
                          margin: "0 0 4px 0",
                          lineHeight: 1.25,
                        }}>
                          {item.name}
                        </p>
                        <p style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontSize: "13px",
                          fontWeight: 400,
                          fontStyle: "italic",
                          color: colors.textMuted,
                          margin: 0,
                          lineHeight: 1.35,
                        }}>
                          {item.role}
                        </p>
                      </div>
                    </div>
                    <p style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "14px",
                      color: colors.textBody,
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data secured — centered headline + 3×2 trust grid (icons in brand blue) */}
      <section className="data-secured-section" style={{ padding: "52px 0 68px", background: colors.white }}>
        <div style={PAGE_INNER}>
          <div style={{ maxWidth: "960px", margin: "0 auto", width: "100%", minWidth: 0 }}>
            <AnimatedSection>
              <div className="data-secured-head" style={{ textAlign: "center", marginBottom: "48px" }}>
                <p className="data-secured-label" style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: colors.brandPrimaryLight,
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  marginBottom: "14px",
                }}>
                  Data Secured
                </p>
                <h2 className="data-secured-title" style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: "clamp(28px, 3.8vw, 42px)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  margin: "0 0 18px 0",
                }}>
                  <span style={{ color: colors.textDark, display: "block" }}>
                    Your Documents Deserve
                  </span>
                  <span style={{ color: colors.brandPrimary, display: "block" }}>
                    Serious Protection
                  </span>
                </h2>
                <p className="data-secured-copy" style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "16px",
                  color: colors.textBody,
                  lineHeight: 1.7,
                  maxWidth: "560px",
                  margin: "0 auto",
                }}>
                  We know how sensitive immigration documents are. That&apos;s why security isn&apos;t an afterthought — it&apos;s the foundation.
                </p>
              </div>
            </AnimatedSection>
            <div className="data-secured-grid">
              {DATA_SECURED_TRUST_ITEMS.slice(0, 3).map((item, i) => (
                <DataSecuredTrustCell key={item.text} item={item} delay={i * 0.05} />
              ))}
              <div className="data-secured-grid-bottom">
                {DATA_SECURED_TRUST_ITEMS.slice(3).map((item, j) => (
                  <DataSecuredTrustCell key={item.text} item={item} delay={0.15 + j * 0.05} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — replaced with provided design */}
      <CtaWaitlistMock />
    </div>
  );
}