"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { track } from "@vercel/analytics";
import { colors } from "@/lib/design-tokens";
import { ChevronIcon, CheckCircleIcon, CloseIcon, MailIcon } from "./icons";
import { WAITLIST_INTEREST_OPTIONS as INTEREST_OPTIONS, WAITLIST_VISA_TYPES as VISA_TYPES } from "@/lib/waitlist-options";
import { getWaitlistApiBaseUrlForBrowser } from "@/lib/waitlist-entries";

/** Simple wrapper — no scroll-triggered animation. Kept for API compatibility. */
export function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <div className={className}>{children}</div>;
}

/** Optional: subtle fade on mount only. Use for hero or similar one-time effect. */
export function HeroFade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div
      className={className}
      style={{
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    >
      {children}
    </div>
  );
}

export function WaitlistForm({
  variant = "hero",
  buttonLabel,
  buttonBg,
  buttonShadow,
  initialEmail,
  initialVisaType,
}: {
  variant?: "hero" | "footer" | "banner" | "cta" | "button";
  buttonLabel?: string;
  buttonBg?: string;
  buttonShadow?: string;
  initialEmail?: string;
  initialVisaType?: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [visaType, setVisaType] = useState<(typeof VISA_TYPES)[number] | "">("");
  const [otherVisaType, setOtherVisaType] = useState("");
  const [interests, setInterests] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitSuccessMessage, setSubmitSuccessMessage] = useState<string | null>(null);
  const [fadingOut, setFadingOut] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Pre-fill email and visa type when provided from the CTA section
  useEffect(() => {
    if (initialEmail) setEmail(initialEmail);
  }, [initialEmail]);

  useEffect(() => {
    if (initialVisaType) setVisaType(initialVisaType as (typeof VISA_TYPES)[number]);
  }, [initialVisaType]);

  const isHero = variant === "hero";
  const isBanner = variant === "banner";
  const isFooter = variant === "footer";
  const isCta = variant === "cta";
  const isButtonOnly = variant === "button";
  const isPillShell = isBanner || isCta;
  const shouldRequireInlineEmail = isHero;
  const buttonPadding = isHero ? "18px 36px" : isPillShell ? (isCta ? "12px 24px" : "10px 18px") : "14px 28px";
  const buttonRadius = isHero ? "12px" : isPillShell ? "9999px" : "10px";
  const fontSize = isHero ? "17px" : isPillShell ? (isCta ? "15px" : "13px") : "15px";
  const resolvedButtonBg = buttonBg ?? (isHero ? colors.accentGreen : isPillShell ? colors.brandPrimary : colors.white);
  const resolvedButtonShadow =
    buttonShadow ??
    (isHero ? "0 4px 14px rgba(52,184,124,0.25)" : isPillShell ? "0 10px 18px rgba(79,158,214,0.28)" : "none");
  const resolvedButtonText = buttonLabel || "Join the Waitlist";
  const buttonOnlyIsSolid = !!buttonBg && buttonBg !== "transparent";
  const buttonOnlyTextColor = buttonOnlyIsSolid ? colors.white : colors.brandPrimary;
  const buttonOnlyBorder = buttonOnlyIsSolid ? "none" : `1.5px solid ${colors.brandPrimary}`;

  const resetModalFields = () => {
    setFirstName("");
    setVisaType("");
    setOtherVisaType("");
    setInterests({});
  };

  const resetAll = () => {
    setEmail("");
    setFirstName("");
    setVisaType("");
    setOtherVisaType("");
    setInterests({});
  };

  const closeModal = useCallback(() => {
    setModalOpen(false);
    resetModalFields();
    setSubmitError(null);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [modalOpen, closeModal]);

  const toggleInterest = (key: string) => {
    setInterests((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const extractErrorText = (data: unknown): string | undefined => {
    if (!data || typeof data !== "object") return undefined;
    const d = data as Record<string, unknown>;
    if (typeof d.error === "string" && d.error.trim()) return d.error.trim();
    if (typeof d.message === "string" && d.message.trim()) return d.message.trim();
    if (d.data && typeof d.data === "object") {
      const inner = d.data as Record<string, unknown>;
      if (typeof inner.message === "string" && inner.message.trim()) return inner.message.trim();
    }
    return undefined;
  };

  const isDuplicateEmailError = (msg: string | undefined, status: number) => {
    const m = (msg ?? "").toLowerCase();
    // Heuristics: WP plugins often return 400/409 with messages like "Email already exists".
    if (status === 409) return true;
    if (!m) return false;
    return (m.includes("already") || m.includes("exists") || m.includes("duplicate")) && m.includes("email");
  };

  const showSubmitSuccess = (message?: string) => {
    setSubmitSuccessMessage(message ?? null);
    setSubmitted(true);
    setFadingOut(false);
    resetAll();
    setModalOpen(false);
    setTimeout(() => setFadingOut(true), 4500);
    setTimeout(() => {
      setSubmitted(false);
      setSubmitSuccessMessage(null);
    }, 5000);
  };

  const handleModalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubmitError(null);
    setSubmitting(true);
    const selectedInterests = INTEREST_OPTIONS.filter((o) => interests[o]);

    try {
      const res = await fetch(getWaitlistApiBaseUrlForBrowser(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          firstName: firstName.trim(),
          visaType,
          otherVisaType: visaType === "Other" ? otherVisaType.trim() : "",
          interests: selectedInterests,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as unknown;
      const errText = extractErrorText(data);

      if (!res.ok) {
        if (isDuplicateEmailError(errText, res.status)) {
          showSubmitSuccess("You're already on the waitlist.");
          return;
        }
        setSubmitError(errText || "Something went wrong. Please try again.");
        return;
      }

      track("waitlist_signup", {
        variant,
        visa_type: visaType,
        other_visa_type: visaType === "Other" ? otherVisaType.trim() : undefined,
        interests: selectedInterests.join(", ") || undefined,
        interest_count: selectedInterests.length,
      });
      showSubmitSuccess();
    } catch {
      setSubmitError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "8px",
    border: `2px solid ${colors.border}`,
    background: colors.white,
    color: colors.textDark,
    fontSize: "15px",
    fontFamily: "'Source Sans 3', sans-serif",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: colors.textBody,
    marginBottom: "4px",
    fontFamily: "'Source Sans 3', sans-serif",
  };



  const inputPadding = isHero
    ? "18px 20px 18px 52px"
    : isPillShell
      ? isCta
        ? "12px 14px 12px 44px"
        : "12px 14px 12px 16px"
      : "14px 16px 14px 44px";
  const inputRadius = isHero ? "12px" : isPillShell ? "9999px" : "10px";

  const openModalFromInline = (e?: React.SyntheticEvent) => {
    e?.preventDefault();
    setModalOpen(true);
  };

  return (
    <>
      {isButtonOnly ? (
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="waitlist-open-btn"
          style={{
            padding: buttonPadding,
            borderRadius: "12px",
            border: buttonOnlyBorder,
            background: resolvedButtonBg ?? "transparent",
            color: buttonOnlyTextColor,
            fontWeight: 700,
            fontSize,
            fontFamily: "'Source Sans 3', sans-serif",
            cursor: "pointer",
            transition: "background 0.2s, border-color 0.2s, color 0.2s",
            whiteSpace: "nowrap",
            boxShadow: resolvedButtonShadow,
            width: "100%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
          onMouseOver={(e) => {
            if (buttonOnlyIsSolid) return;
            e.currentTarget.style.background = colors.brandPrimaryPale;
            e.currentTarget.style.borderColor = colors.brandPrimaryDark;
            e.currentTarget.style.color = colors.brandPrimaryDark;
          }}
          onMouseOut={(e) => {
            if (buttonOnlyIsSolid) return;
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = colors.brandPrimary;
            e.currentTarget.style.color = colors.brandPrimary;
          }}
        >
          {submitted ? (
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <CheckCircleIcon /> Done
            </span>
          ) : (
            resolvedButtonText
          )}
        </button>
      ) : (
        <form
          className={isCta ? "waitlist-form-cta" : undefined}
          noValidate={!shouldRequireInlineEmail}
          onSubmit={openModalFromInline}
          style={{
            display: "flex",
            gap: isHero ? "12px" : isPillShell ? "10px" : "8px",
            flexDirection: "row",
            flexWrap: isPillShell ? "nowrap" : "wrap",
            maxWidth: isHero ? "100%" : isPillShell ? (isCta ? "min(100%, 680px)" : "560px") : "480px",
            alignItems: "stretch",
            background: isPillShell ? (isCta ? colors.white : "#F3F5F7") : "transparent",
            border: isPillShell ? (isCta ? `1px solid ${colors.border}` : "1px solid #E6E9EF") : "none",
            borderRadius: isPillShell ? "9999px" : undefined,
            padding: isPillShell ? (isCta ? "8px" : "6px") : undefined,
            boxShadow: isPillShell ? (isCta ? "0 12px 28px rgba(26,35,50,0.10)" : "0 12px 28px rgba(26,35,50,0.08)") : "none",
          }}
        >
          <div
            style={{
              position: "relative",
              flex: isPillShell ? "1 1 auto" : "1 1 280px",
              minWidth: isPillShell ? 0 : "200px",
            }}
          >
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={shouldRequireInlineEmail}
              style={{
                width: "100%",
                padding: inputPadding,
                borderRadius: inputRadius,
                border: isPillShell ? "none" : `2px solid ${isHero ? colors.border : "rgba(255,255,255,0.3)"}`,
                background: isPillShell ? "transparent" : isHero ? colors.white : "rgba(255,255,255,0.1)",
                color: isHero || isPillShell ? colors.textDark : colors.white,
                fontSize,
                fontFamily: "'Source Sans 3', sans-serif",
                outline: "none",
                transition: "border-color 0.2s",
                boxSizing: "border-box",
              }}
              onFocus={(e) => {
                if (isPillShell) return;
                (e.target as HTMLElement).style.borderColor = colors.brandPrimary;
              }}
              onBlur={(e) => {
                if (isPillShell) return;
                (e.target as HTMLElement).style.borderColor = isHero ? colors.border : "rgba(255,255,255,0.3)";
              }}
            />
            {(isHero || isFooter || isCta) && (
              <div style={{
                position: "absolute",
                left: isHero ? "18px" : "14px",
                top: "50%",
                transform: "translateY(-50%)",
                color: isHero || isCta ? colors.textMuted : "rgba(255,255,255,0.5)",
                pointerEvents: "none",
              }}>
                <MailIcon />
              </div>
            )}
          </div>
          <button
            type={shouldRequireInlineEmail ? "submit" : "button"}
            onClick={shouldRequireInlineEmail ? undefined : openModalFromInline}
            style={{
              padding: buttonPadding,
              borderRadius: isPillShell ? "9999px" : buttonRadius,
              border: "none",
              background: resolvedButtonBg,
              color: isHero || isPillShell ? colors.white : colors.textDark,
              fontWeight: 700,
              fontSize,
              fontFamily: "'Source Sans 3', sans-serif",
              cursor: "pointer",
              whiteSpace: "nowrap",
              boxShadow: resolvedButtonShadow,
              width: undefined,
            }}
          >
            {submitted ? (
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <CheckCircleIcon /> Done
              </span>
            ) : (
              resolvedButtonText
            )}
          </button>
        </form>
      )}

      {modalOpen && mounted && typeof document !== "undefined" && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="waitlist-modal-title"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(26, 35, 50, 0.3)",
            backdropFilter: "blur(2px)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            style={{
              position: "relative",
              width: "calc(100% - 32px)",
              maxWidth: "480px",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "20px 24px 16px",
              borderRadius: "16px",
              background: colors.white,
              boxShadow: "0 24px 48px rgba(26, 35, 50, 0.18)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                padding: "8px",
                border: "none",
                background: "transparent",
                color: colors.textMuted,
                cursor: "pointer",
                borderRadius: "8px",
                lineHeight: 0,
              }}
            >
              <CloseIcon />
            </button>

            <h2
              id="waitlist-modal-title"
              style={{
                margin: "0 40px 4px 0",
                fontSize: "20px",
                fontWeight: 700,
                color: colors.textDark,
                fontFamily: "'Source Sans 3', sans-serif",
              }}
            >
              Join the waitlist
            </h2>
            <p style={{
              margin: "0 0 12px",
              fontSize: "14px",
              color: colors.textBody,
              lineHeight: 1.5,
              fontFamily: "'Source Sans 3', sans-serif",
            }}>
              Tell us a bit about you — we&apos;ll use your email as your signup reference.
            </p>

            <form onSubmit={handleModalSubmit}>
              <div style={{ marginBottom: "12px" }}>
                <label htmlFor="waitlist-email" style={labelStyle}>
                  Email address <span style={{ color: colors.danger }}>*</span>
                </label>
                <input
                  id="waitlist-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = colors.brandPrimary; }}
                  onBlur={(e) => { e.target.style.borderColor = colors.border; }}
                />
              </div>

              <div style={{ marginBottom: "12px" }}>
                <label htmlFor="waitlist-first" style={labelStyle}>
                  Full name <span style={{ color: colors.danger }}>*</span>
                </label>
                <input
                  id="waitlist-first"
                  name="firstName"
                  type="text"
                  autoComplete="name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name and Last name"
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = colors.brandPrimary; }}
                  onBlur={(e) => { e.target.style.borderColor = colors.border; }}
                />
              </div>

              <div style={{ marginBottom: "12px" }}>
                <label htmlFor="waitlist-visa" style={labelStyle}>
                  Visa type <span style={{ color: colors.danger }}>*</span>
                </label>
                <select
                  id="waitlist-visa"
                  name="visaType"
                  required
                  value={visaType}
                  onChange={(e) => setVisaType(e.target.value as (typeof VISA_TYPES)[number])}
                  style={{
                    ...inputStyle,
                    cursor: "pointer",
                    appearance: "auto",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = colors.brandPrimary; }}
                  onBlur={(e) => { e.target.style.borderColor = colors.border; }}
                >
                  <option value="" disabled>
                    Select visa type
                  </option>
                  {VISA_TYPES.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
                {visaType === "Other" && (
                  <div style={{ marginTop: "12px" }}>
                    <input
                      id="waitlist-other-visa"
                      name="otherVisaType"
                      type="text"
                      required
                      value={otherVisaType}
                      onChange={(e) => setOtherVisaType(e.target.value)}
                      placeholder="Enter the Current Visa Type"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = colors.brandPrimary; }}
                      onBlur={(e) => { e.target.style.borderColor = colors.border; }}
                    />
                  </div>
                )}
              </div>

              <fieldset style={{ margin: "0 0 16px", padding: 0, border: "none" }}>
                <legend style={{ ...labelStyle, marginBottom: "6px" }}>
                  What interests you most? <span style={{ fontWeight: 400, color: colors.textMuted }}>(optional)</span>
                </legend>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  {INTEREST_OPTIONS.map((opt) => (
                    <label
                      key={opt}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: colors.textDark,
                        fontFamily: "'Source Sans 3', sans-serif",
                        lineHeight: 1.3,
                      }}
                    >
                      <input
                        type="checkbox"
                        name="interests"
                        value={opt}
                        checked={!!interests[opt]}
                        onChange={() => toggleInterest(opt)}
                        style={{ marginTop: "1px", width: "16px", height: "16px", accentColor: colors.brandPrimary, cursor: "pointer" }}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </fieldset>

              {submitError && (
                <div
                  role="alert"
                  style={{
                    marginBottom: "16px",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    background: colors.dangerLight,
                    color: colors.danger,
                    fontSize: "14px",
                    fontFamily: "'Source Sans 3', sans-serif",
                    lineHeight: 1.45,
                  }}
                >
                  {submitError}
                </div>
              )}

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={submitting}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "8px",
                    border: `2px solid ${colors.border}`,
                    background: colors.bgAlt,
                    color: colors.textDark,
                    fontWeight: 600,
                    fontSize: "14px",
                    fontFamily: "'Source Sans 3', sans-serif",
                    cursor: submitting ? "not-allowed" : "pointer",
                    opacity: submitting ? 0.7 : 1,
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: "none",
                    background: colors.brandPrimary,
                    color: colors.white,
                    fontWeight: 700,
                    fontSize: "14px",
                    fontFamily: "'Source Sans 3', sans-serif",
                    cursor: submitting ? "not-allowed" : "pointer",
                    boxShadow: "0 4px 14px rgba(79,158,214,0.35)",
                    opacity: submitting ? 0.85 : 1,
                  }}
                >
                  {submitting ? "Submitting…" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}

      {submitted && mounted && typeof document !== "undefined" && createPortal(
        <div
          style={{
            position: "fixed",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 100000,
            opacity: fadingOut ? 0 : 1,
            transition: "all 0.4s ease",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              background: colors.white,
              color: colors.textDark,
              padding: "16px 24px",
              borderRadius: "16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              border: `1px solid ${colors.border}`,
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            <div style={{ color: colors.accentGreen, display: "flex" }}>
              <CheckCircleIcon />
            </div>
            {submitSuccessMessage ?? (isPillShell ? "Waitlist Joined!" : "You're on the list! We'll notify you.")}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {items.map((item, i) => (
        <div key={i} style={{
          border: `1px solid ${openIndex === i ? colors.brandPrimary : colors.border}`,
          borderRadius: "16px", overflow: "hidden", transition: "all 0.2s",
          background: openIndex === i ? colors.brandPrimaryPale : colors.white,
        }}>
          <button onClick={() => setOpenIndex(openIndex === i ? null : i)} style={{
            width: "100%", padding: "18px 20px", display: "flex", justifyContent: "space-between",
            alignItems: "center", background: "none", border: "none", cursor: "pointer",
            fontFamily: "'Source Sans 3', sans-serif", fontSize: "15px", fontWeight: 600,
            color: colors.textDark, textAlign: "left",
          }}>
            {item.q}
            <ChevronIcon open={openIndex === i} />
          </button>
          <div style={{
            maxHeight: openIndex === i ? "300px" : "0", overflow: "hidden",
            transition: "max-height 0.3s ease-in-out",
          }}>
            <div style={{
              padding: "0 20px 18px", fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "14px", color: colors.textBody, lineHeight: 1.7,
            }}>
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}