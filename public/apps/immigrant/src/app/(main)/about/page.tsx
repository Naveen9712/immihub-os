"use client";

import { AnimatedSection } from "@/components/ui";
import { colors, layout } from "@/lib/design-tokens";

/* ───────────────────────── stat pill ───────────────────────── */
function StatPill({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div style={{
      textAlign: "center",
      padding: "28px 20px",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.55)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: `1px solid ${colors.blueMist || "rgba(0,80,200,0.08)"}`,
      flex: "1 1 180px",
      minWidth: "160px",
    }}>
      <p style={{
        fontFamily: "'Satoshi', sans-serif",
        fontSize: "clamp(28px, 4vw, 40px)",
        fontWeight: 900,
        color: colors.blue,
        lineHeight: 1.1,
        marginBottom: "6px",
      }}>{value}</p>
      <p style={{
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: "13px",
        fontWeight: 600,
        color: colors.gray500,
        textTransform: "uppercase",
        letterSpacing: "1.2px",
      }}>{label}</p>
    </div>
  );
}

/* ───────────────────────── vision step ───────────────────────── */
function VisionStep({ number, phase, title, desc, isLast }: { number: number; phase: string; title: string; desc: string; isLast: boolean }) {
  return (
    <div style={{
      display: "flex",
      gap: "24px",
      position: "relative",
      paddingBottom: isLast ? "0" : "40px",
    }}>
      {/* timeline rail */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexShrink: 0,
        width: "48px",
      }}>
        <div style={{
          width: "48px",
          height: "48px",
          borderRadius: "14px",
          background: colors.blue,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Satoshi', sans-serif",
          fontSize: "18px",
          fontWeight: 800,
          color: "#fff",
          flexShrink: 0,
          boxShadow: `0 4px 20px ${colors.blue}33`,
        }}>
          {number}
        </div>
        {!isLast && (
          <div style={{
            width: "2px",
            flex: 1,
            background: `linear-gradient(to bottom, ${colors.blue}40, ${colors.blue}08)`,
            marginTop: "8px",
          }} />
        )}
      </div>

      {/* content */}
      <div style={{ paddingTop: "4px", flex: 1 }}>
        <p style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: "11px",
          fontWeight: 700,
          color: colors.blue,
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginBottom: "4px",
        }}>{phase}</p>
        <h3 style={{
          fontFamily: "'Satoshi', sans-serif",
          fontSize: "20px",
          fontWeight: 800,
          color: colors.navy,
          marginBottom: "6px",
          lineHeight: 1.3,
        }}>{title}</h3>
        <p style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: "15px",
          color: colors.gray500,
          lineHeight: 1.7,
          maxWidth: "520px",
        }}>{desc}</p>
      </div>
    </div>
  );
}

/* ───────────────────────── approach card ───────────────────────── */
function ApproachCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div style={{
      padding: "32px 28px",
      borderRadius: "20px",
      background: colors.bluePale,
      border: `1px solid ${colors.blueMist || "rgba(0,80,200,0.08)"}`,
      flex: "1 1 260px",
      minWidth: "240px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 12px 40px ${colors.blue}12`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{
        width: "48px",
        height: "48px",
        borderRadius: "14px",
        background: `${colors.blue}12`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "22px",
        marginBottom: "20px",
      }}>{icon}</div>
      <h3 style={{
        fontFamily: "'Satoshi', sans-serif",
        fontSize: "18px",
        fontWeight: 800,
        color: colors.navy,
        marginBottom: "10px",
        lineHeight: 1.3,
      }}>{title}</h3>
      <p style={{
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: "15px",
        color: colors.gray500,
        lineHeight: 1.7,
      }}>{desc}</p>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━ PAGE ━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function AboutPage() {

  const visionSteps = [
    {
      phase: "Now",
      title: "Secure Vault + Smart Reminders",
      desc: "A secure, encrypted document vault with automated OCR extraction and intelligent expiry reminders — purpose-built for H-1B visa holders.",
    },
    {
      phase: "Next",
      title: "AI-Powered Immigration Assistant",
      desc: "A conversational AI engine trained on U.S. immigration policy to answer questions, flag compliance risks, and guide users through complex timelines.",
    },
    {
      phase: "Then",
      title: "Multi-Visa Compliance Engine",
      desc: "Expanding coverage to F-1/OPT, Green Card, O-1, L-1, and other visa categories — creating a unified compliance platform for every immigration pathway.",
    },
    {
      phase: "Beyond",
      title: "Enterprise & Global Expansion",
      desc: "Family vault sharing, attorney collaboration portals, employer compliance dashboards, and expansion to serve immigrant communities worldwide.",
    },
  ];

  const approachCards = [
    {
      icon: "🛡️",
      title: "Free for Every Immigrant",
      desc: "Immigration tools should never be a luxury. Individual immigrants will always have free access to ImmiHub's core features — because protecting your status shouldn't depend on your ability to pay.",
    },
    {
      icon: "🔒",
      title: "Privacy Without Compromise",
      desc: "Your documents are encrypted end-to-end, stored on U.S.-based Microsoft Azure infrastructure, and never shared with third parties without your explicit consent. Your data belongs to you — period.",
    },
    {
      icon: "💙",
      title: "Built from Lived Experience",
      desc: "ImmiHub is built by a team that has personally navigated the U.S. immigration system. Every feature is designed with an intimate understanding of the anxieties, deadlines, and high stakes immigrants face daily.",
    },
  ];

  return (
    <div style={{ paddingTop: "80px" }}>

      {/* ── HERO / MISSION ── */}
      <section style={{
        padding: `100px ${layout.pagePaddingX} 80px`,
        background: colors.bluePale,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* subtle decorative accent */}
        <div style={{
          position: "absolute",
          top: "-120px",
          right: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.blue}08, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-100px",
          left: "-60px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.blue}06, transparent 70%)`,
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "820px", margin: "0 auto", position: "relative" }}>
          <AnimatedSection>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              color: colors.blue,
              textTransform: "uppercase",
              letterSpacing: "3px",
              marginBottom: "16px",
            }}>Our Mission</p>

            <h1 style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 900,
              color: colors.navy,
              lineHeight: 1.12,
              marginBottom: "28px",
              maxWidth: "700px",
            }}>
              No Immigrant Should Lose Their Status Because of a{" "}
              <span style={{
                color: colors.blue,
                textDecoration: "underline",
                textDecorationColor: `${colors.blue}30`,
                textUnderlineOffset: "6px",
                textDecorationThickness: "3px",
              }}>Missed Deadline</span>
            </h1>

            <p style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "18px",
              color: colors.gray500,
              lineHeight: 1.85,
              maxWidth: "660px",
              marginBottom: "48px",
            }}>
              More than 780,000 H-1B visa holders in the United States manage their most critical immigration deadlines with spreadsheets, calendar reminders, and scattered files across email threads, phones, and filing cabinets. There is no centralized, purpose-built tool designed to protect them. A single missed date — a lapsed EAD, an overlooked I-94 expiry, a late H-1B extension — can mean job loss, status violation, and the unraveling of years of work, sacrifice, and contribution to this country.
            </p>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "18px",
              color: colors.gray500,
              lineHeight: 1.85,
              maxWidth: "660px",
            }}>
              ImmiHub exists to solve this. We are building the infrastructure that the U.S. immigration system should have provided long ago — a secure, intelligent platform that ensures no skilled worker falls through the cracks of a complex bureaucratic process.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── IMPACT STATS ── */}
      <section style={{
        padding: `0 ${layout.pagePaddingX}`,
        background: colors.warmWhite,
        position: "relative",
      }}>
        <div style={{
          maxWidth: "820px",
          margin: "0 auto",
          transform: "translateY(-44px)",
        }}>
          <AnimatedSection delay={0.05}>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
            }}>
              <StatPill value="780K+" label="H-1B Workers at Risk" />
              <StatPill value="$0" label="Cost to Immigrants" />
              <StatPill value="Zero" label="Documents Shared Without Consent" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHAT WE'RE BUILDING ── */}
      <section style={{
        padding: `40px ${layout.pagePaddingX} 100px`,
        background: colors.warmWhite,
      }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <AnimatedSection delay={0.1}>
            <div style={{
              padding: "48px 40px",
              borderRadius: "24px",
              background: colors.gray50 || "#f9fafb",
              border: `1px solid ${colors.gray100}`,
              position: "relative",
              overflow: "hidden",
            }}>
              {/* decorative corner accent */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "4px",
                height: "80px",
                background: colors.blue,
                borderRadius: "0 0 4px 0",
              }} />

              <p style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                color: colors.blue,
                textTransform: "uppercase",
                letterSpacing: "3px",
                marginBottom: "14px",
              }}>What We're Building</p>

              <h2 style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "clamp(24px, 3.5vw, 32px)",
                fontWeight: 900,
                color: colors.navy,
                marginBottom: "20px",
                lineHeight: 1.2,
              }}>
                A Secure Immigration Document Vault — Built for Peace of Mind
              </h2>

              <p style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "16px",
                color: colors.gray500,
                lineHeight: 1.85,
                marginBottom: "16px",
                maxWidth: "620px",
              }}>
                ImmiHub is a secure, cloud-based document vault that stores your critical immigration documents — Passports, I-797 Approval Notices, I-94 Travel Records, Visa Stamps, and EAD cards — in one encrypted, accessible location.
              </p>
              <p style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "16px",
                color: colors.gray500,
                lineHeight: 1.85,
                maxWidth: "620px",
              }}>
                Using intelligent OCR technology, ImmiHub automatically extracts key dates from uploaded documents and creates a personalized compliance timeline with proactive reminders — weeks and months before critical deadlines. Upload a photo of your document. We handle the rest. It's like having a personal immigration assistant that never forgets a date and never takes a day off.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── VISION / ROADMAP ── */}
      <section style={{
        padding: `100px ${layout.pagePaddingX}`,
        background: colors.bluePale,
      }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <AnimatedSection delay={0.1}>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              color: colors.blue,
              textTransform: "uppercase",
              letterSpacing: "3px",
              marginBottom: "14px",
            }}>Our Vision</p>
            <h2 style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "clamp(24px, 3.5vw, 32px)",
              fontWeight: 900,
              color: colors.navy,
              marginBottom: "12px",
              lineHeight: 1.2,
            }}>
              From Document Vault to Full-Scale Immigration Infrastructure
            </h2>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "16px",
              color: colors.gray500,
              lineHeight: 1.8,
              marginBottom: "48px",
              maxWidth: "600px",
            }}>
              ImmiHub's roadmap is designed to systematically close every gap in the immigrant experience — starting with the most urgent need and scaling to serve millions.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div>
              {visionSteps.map((step, i) => (
                <VisionStep
                  key={i}
                  number={i + 1}
                  phase={step.phase}
                  title={step.title}
                  desc={step.desc}
                  isLast={i === visionSteps.length - 1}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── OUR APPROACH ── */}
      <section style={{
        padding: `100px ${layout.pagePaddingX}`,
        background: colors.warmWhite,
      }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <AnimatedSection delay={0.1}>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              color: colors.blue,
              textTransform: "uppercase",
              letterSpacing: "3px",
              marginBottom: "14px",
            }}>Our Approach</p>
            <h2 style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "clamp(24px, 3.5vw, 32px)",
              fontWeight: 900,
              color: colors.navy,
              marginBottom: "12px",
              lineHeight: 1.2,
            }}>
              Principles That Guide Everything We Build
            </h2>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "16px",
              color: colors.gray500,
              lineHeight: 1.8,
              marginBottom: "48px",
              maxWidth: "600px",
            }}>
              ImmiHub is built on the belief that protecting immigrant rights and status is a matter of national interest. Our values are non-negotiable.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
            }}>
              {approachCards.map((card, i) => (
                <ApproachCard
                  key={i}
                  icon={card.icon}
                  title={card.title}
                  desc={card.desc}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── NATIONAL INTEREST CLOSING ── */}
      <section style={{
        padding: `80px ${layout.pagePaddingX}`,
        background: colors.bluePale,
      }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <h2 style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "clamp(22px, 3vw, 28px)",
              fontWeight: 900,
              color: colors.navy,
              lineHeight: 1.3,
              marginBottom: "20px",
            }}>
              Strengthening the Workforce That Strengthens America
            </h2>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "16px",
              color: colors.gray500,
              lineHeight: 1.85,
            }}>
              Skilled immigrants power America's most critical industries — from technology and healthcare to research and engineering. When these workers lose status due to preventable administrative failures, the entire nation loses. ImmiHub's mission is to ensure that the United States retains the talent it has already invested in — by giving every immigrant the tools to stay compliant, informed, and protected. This is not just an immigration problem. It is an American competitiveness problem, and ImmiHub is purpose-built to solve it.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}