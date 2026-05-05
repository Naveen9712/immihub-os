"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui";
import { colors, layout } from "@/lib/design-tokens";

// ─── Types ─────────────────────────────────────────────────────────────────────

type FaqItem = { q: string; a: string };
type Category = { id: string; title: string; emoji: string; items: FaqItem[] };

// ─── FAQ Content (WEB-10) ──────────────────────────────────────────────────────

const categories: Category[] = [
  {
    id: "about",
    title: "About ImmiHub",
    emoji: "🏠",
    items: [
      {
        q: "What is ImmiHub?",
        a: "ImmiHub is a secure mobile app built for H-1B visa holders in the United States. It lets you upload and store your immigration documents, automatically extracts expiry dates using OCR, and sends you reminders before critical deadlines — so you're never caught off guard by an expiring I-797, visa stamp, or spouse EAD.",
      },
      {
        q: "Who is ImmiHub for?",
        a: "ImmiHub is built specifically for H-1B visa holders and their dependents. If you're on H-1B status and juggling multiple document expiry dates, ImmiHub is for you. Support for other visa types (O-1, L-1, TN) is on our roadmap.",
      },
      {
        q: "What documents does ImmiHub support?",
        a: "ImmiHub supports 7 document types. Five are fully tracked with expiry date extraction and reminders: Passport, Form I-94, Form I-797 Approval Notice, H-1B Visa Stamp, and Spouse EAD (Form I-766). Two are storage-only: Employment Letters and Other Documents.",
      },
      {
        q: "What visa types are supported right now?",
        a: "Currently, ImmiHub supports H-1B visa holders and their H-4 dependents (including H-4 EAD tracking). We intentionally built deep, accurate support for H-1B first rather than broad but shallow support across many visa types. Other visa categories are on our roadmap.",
      },
      {
        q: "Is ImmiHub free?",
        a: "Yes. ImmiHub is free for all individual immigrants — and always will be. We believe immigration document tools should be accessible to everyone navigating this process, regardless of income.",
      },
      {
        q: "Is ImmiHub affiliated with USCIS, DHS, or any government agency?",
        a: "No. ImmiHub is a private platform built to help immigrants manage their own documents. We have no affiliation with USCIS, the Department of Homeland Security, the State Department, or any government entity. ImmiHub does not file immigration applications or provide legal advice.",
      },
    ],
  },
  {
    id: "security",
    title: "Security & Privacy",
    emoji: "🔒",
    items: [
      {
        q: "How is my data stored?",
        a: "All your data is stored on Microsoft Azure cloud infrastructure hosted in the United States. We use Azure Blob Storage for documents and Azure SQL for structured data, both with enterprise-grade security configurations.",
      },
      {
        q: "Is my data encrypted?",
        a: "Yes. All documents and personal data are encrypted both at rest and in transit. We use AES-256 encryption at rest and TLS 1.2+ in transit — the same standards used by major financial institutions.",
      },
      {
        q: "Can ImmiHub employees see my documents?",
        a: "No. Your uploaded documents are stored encrypted and are only accessible through your authenticated account. ImmiHub employees cannot view, access, or review your personal documents. Our OCR processing is fully automated and does not involve human review.",
      },
      {
        q: "Who has access to my data?",
        a: "Only you. ImmiHub uses Azure Active Directory for authentication and role-based access controls that restrict all internal access to your personal data. We do not share your data with third parties except for core infrastructure providers (Azure, Twilio for SMS OTP) necessary to run the service.",
      },
      {
        q: "Does ImmiHub collect biometric, location, or financial data?",
        a: "No. ImmiHub does not collect biometric data, precise location data, or any financial or banking information. We collect only what's necessary to run the service: your name, email address, phone number (for OTP login), visa type, and documents you explicitly upload.",
      },
      {
        q: "Can I delete my account and all my data?",
        a: "Yes, at any time. You can request full account deletion and all associated data — including uploaded documents — will be permanently removed from our systems. Email support@getimmihub.com to submit a deletion request. We process all deletion requests within 7 business days.",
      },
      {
        q: "Does ImmiHub sell my data?",
        a: "No. We do not sell, rent, or trade your personal data to third parties. Period. We may share minimal data with infrastructure providers strictly to deliver the service, but we never monetize your personal information.",
      },
    ],
  },
  {
    id: "features",
    title: "Features & Usage",
    emoji: "⚙️",
    items: [
      {
        q: "How does OCR date extraction work?",
        a: "When you upload a photo or scan of your document, ImmiHub's OCR (powered by Azure Cognitive Services) automatically reads the text and identifies expiry-relevant dates. You always see the extracted dates and confirm them before anything is saved — ImmiHub never creates a reminder without your explicit confirmation. If the OCR gets something wrong, you can correct it manually at the confirmation step.",
      },
      {
        q: "What reminders will I receive?",
        a: "For each tracked document, ImmiHub sends two reminders: one at 180 days (6 months) before expiry and one at 90 days (3 months) before expiry. Reminders are delivered via push notification and email. This gives you enough lead time to start renewal processes — especially important for documents like the I-797 extension, which can take months to prepare.",
      },
      {
        q: "Can I use ImmiHub for my spouse's documents?",
        a: "Yes. During onboarding, if you select 'Have Dependents' as your goal, ImmiHub will include Spouse EAD (Form I-766) tracking in your vault. You can upload your spouse's EAD and receive expiry reminders for it alongside your own documents. Full multi-profile dependent support is on our roadmap.",
      },
      {
        q: "What if my document is already expired?",
        a: "You can still upload expired documents. ImmiHub will store them in your vault and flag them as expired, but no future reminders will be scheduled since the date has already passed. Keeping expired documents in your vault is still useful — older I-797 notices, for example, can matter for calculating H-1B cap-exempt years.",
      },
      {
        q: "Can I upload documents that don't have expiry dates?",
        a: "Yes. Employment letters, Social Security cards, and other documents without expiry dates can be uploaded as 'Storage Only' documents. These are stored securely in your vault for easy access but don't have date extraction or reminders associated with them.",
      },
      {
        q: "What happens if the OCR reads the wrong date?",
        a: "The OCR confirmation step exists specifically for this reason. After OCR processes your document, you'll see the extracted dates highlighted and can verify or correct them before saving. ImmiHub never creates reminders without your explicit confirmation — accuracy depends on your review, not ours.",
      },
    ],
  },
];

// ─── Accordion Item ────────────────────────────────────────────────────────────

function AccordionItem({ item, isOpen, onToggle }: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{
      borderRadius: "12px",
      border: `1px solid ${isOpen ? colors.blue : colors.gray100}`,
      background: colors.white,
      overflow: "hidden",
      transition: "border-color 0.2s",
      boxShadow: isOpen ? `0 4px 16px rgba(0,0,0,0.06)` : "0 1px 4px rgba(0,0,0,0.03)",
    }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between",
          alignItems: "center", padding: "20px 24px", border: "none",
          background: "transparent", cursor: "pointer", gap: "16px", textAlign: "left",
        }}
      >
        <span style={{
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: "15px", fontWeight: 700,
          color: isOpen ? colors.blue : colors.navy,
          lineHeight: 1.4, flex: 1,
        }}>{item.q}</span>
        <span style={{
          width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0,
          background: isOpen ? colors.blue : colors.gray100,
          color: isOpen ? colors.white : colors.gray500,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "16px", fontWeight: 700,
          transition: "all 0.2s",
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
        }}>+</span>
      </button>

      <div style={{
        maxHeight: isOpen ? "600px" : "0",
        overflow: "hidden",
        transition: "max-height 0.3s ease",
      }}>
        <div style={{
          padding: "0 24px 20px",
          borderTop: `1px solid ${colors.gray100}`,
          paddingTop: "16px",
        }}>
          <p style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "15px", color: colors.gray600, lineHeight: 1.75, margin: 0,
          }}>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function FaqsPage() {
  const [openItem, setOpenItem] = useState<string | null>("about-0");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const toggle = (key: string) => setOpenItem(openItem === key ? null : key);

  const visibleCategories = activeCategory === "all"
    ? categories
    : categories.filter((c) => c.id === activeCategory);

  return (
    <div style={{ paddingTop: "80px" }}>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section style={{ padding: `100px ${layout.pagePaddingX} 60px`, background: colors.bluePale }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif", fontSize: "13px", fontWeight: 700,
              color: colors.blue, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px",
            }}>Support</p>
            <h1 style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "clamp(32px, 5vw, 46px)", fontWeight: 800,
              color: colors.navy, lineHeight: 1.15, marginBottom: "16px",
            }}>
              Frequently Asked <span style={{ color: colors.blue }}>Questions</span>
            </h1>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif", fontSize: "17px",
              color: colors.gray500, lineHeight: 1.7,
            }}>
              Everything you need to know about ImmiHub — how it works,
              how your data is protected, and what features are available.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Category filter ───────────────────────────────────────── */}
      <div style={{
        background: colors.white,
        borderBottom: `1px solid ${colors.gray100}`,
        padding: `16px ${layout.pagePaddingX}`,
        position: "sticky", top: "80px", zIndex: 10,
      }}>
        <div style={{
          maxWidth: "700px", margin: "0 auto",
          display: "flex", gap: "8px", flexWrap: "wrap",
        }}>
          {[{ id: "all", label: "All Questions", emoji: "✨" }, ...categories.map(c => ({ id: c.id, label: c.title, emoji: c.emoji }))].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              style={{
                padding: "8px 16px", borderRadius: "10px",
                border: `2px solid ${activeCategory === tab.id ? colors.blue : colors.gray200}`,
                background: activeCategory === tab.id ? colors.blue : "transparent",
                color: activeCategory === tab.id ? colors.white : colors.gray600,
                fontFamily: "'Source Sans 3', sans-serif", fontSize: "13px", fontWeight: 600,
                cursor: "pointer", transition: "all 0.2s",
                display: "flex", alignItems: "center", gap: "6px",
              }}
            >
              <span>{tab.emoji}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── FAQ Content ───────────────────────────────────────────── */}
      <section style={{ padding: `60px ${layout.pagePaddingX} 100px`, background: colors.warmWhite }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>

          {visibleCategories.map((cat, ci) => (
            <AnimatedSection key={cat.id} delay={ci * 0.08}>
              <div style={{ marginBottom: "48px" }}>
                {/* Category header */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  marginBottom: "20px", paddingBottom: "12px",
                  borderBottom: `2px solid ${colors.bluePale}`,
                }}>
                  <span style={{
                    width: "36px", height: "36px", borderRadius: "10px",
                    background: colors.bluePale,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "18px",
                  }}>{cat.emoji}</span>
                  <h2 style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontSize: "22px", fontWeight: 800, color: colors.navy, margin: 0,
                  }}>{cat.title}</h2>
                  <span style={{
                    marginLeft: "auto",
                    fontFamily: "'Source Sans 3', sans-serif", fontSize: "12px",
                    fontWeight: 700, color: colors.gray400,
                  }}>{cat.items.length} questions</span>
                </div>

                {/* Accordion items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {cat.items.map((item, ii) => {
                    const key = `${cat.id}-${ii}`;
                    return (
                      <AccordionItem
                        key={key}
                        item={item}
                        isOpen={openItem === key}
                        onToggle={() => toggle(key)}
                      />
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Still have questions CTA */}
          <div style={{
            padding: "32px", borderRadius: "20px",
            background: colors.gray50, border: `1px solid ${colors.gray200}`,
            textAlign: "center",
          }}>
            <p style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "20px", fontWeight: 800, color: colors.navy, marginBottom: "8px",
            }}>Still have questions?</p>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif", fontSize: "15px",
              color: colors.gray500, marginBottom: "16px", lineHeight: 1.6,
            }}>
              Our team typically responds within 24 hours.
            </p>
            <a
              href="mailto:support@getimmihub.com"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "12px 24px", borderRadius: "12px",
                background: colors.blue, color: colors.white,
                fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px", fontWeight: 700,
                textDecoration: "none", transition: "opacity 0.2s",
              }}
            >
              ✉️ support@getimmihub.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}