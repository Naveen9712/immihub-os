"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { colors, layout } from "@/lib/design-tokens";
import { WaitlistForm } from "@/components/ui";
import { MenuIcon, CloseIcon } from "./icons";

const navItems: { label: string; href: string; section?: string }[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/", section: "features" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faqs" },
];

const linkBase = {
  background: "none" as const,
  border: "none" as const,
  cursor: "pointer" as const,
  fontFamily: "'Source Sans 3', sans-serif",
  fontSize: "15px",
  fontWeight: 500,
  color: colors.textDark,
  transition: "color 0.2s",
  padding: 0,
  textDecoration: "none" as const,
};

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string, section?: string) => {
    if (section) return pathname === "/" && false;
    return pathname === href;
  };

  const renderNavLink = (item: (typeof navItems)[0]) => {
    const active = isActive(item.href, item.section);
    const color = active ? colors.brandPrimary : colors.textDark;
    const handlers = {
      onMouseOver: (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = colors.brandPrimary;
      },
      onMouseOut: (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = active ? colors.brandPrimary : colors.textDark;
      },
    };
    return (
      <Link
        key={item.label}
        href={item.section ? "/#features" : item.href}
        style={{ ...linkBase, color }}
        {...handlers}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <>
      {/* ── Nav bar ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "12px 0" : "16px 0",
          background: scrolled
            ? "rgba(255, 255, 255, 0.65)"
            : "rgba(255, 255, 255, 0.45)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: scrolled
            ? `1px solid ${colors.border}`
            : "1px solid rgba(0,0,0,0.06)",
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
          transition:
            "padding 0.25s ease, box-shadow 0.25s ease, background 0.25s ease",
        }}
      >
        <div
          style={{
            maxWidth: layout.pageMaxWidth,
            margin: "0 auto",
            /* Tighter horizontal padding on small screens */
            padding: "0 clamp(16px, 5vw, 140px)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            minHeight: 44,
            gap: 8,
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              position: "relative",
              zIndex: 2,
              display: "inline-flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <Image
              src="/Images/immihub-icon.png"
              alt="ImmiHub"
              width={180}
              height={56}
              style={{
                height: "clamp(32px, 5vw, 42px)",
                width: "auto",
                objectFit: "contain",
              }}
              priority
            />
          </Link>

          {/* Desktop centre nav links */}
          <div
            className="desktop-nav"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(18px, 3vw, 36px)",
                pointerEvents: "auto",
              }}
            >
              {navItems.map((item) => renderNavLink(item))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div
            className="desktop-nav"
            style={{ marginLeft: "auto", position: "relative", zIndex: 2 }}
          >
            <WaitlistForm variant="button" buttonLabel="Get Early Access" />
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none", /* overridden by CSS at ≤768px */
              background: "none",
              border: "none",
              cursor: "pointer",
              color: colors.textDark,
              padding: "6px",
              marginLeft: "auto",
              position: "relative",
              zIndex: 2,
              borderRadius: "8px",
              transition: "background 0.18s",
            }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* ── Mobile drawer — only rendered when open ── */}
        {mobileOpen && (
          <div
            className="mobile-menu-drawer"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              padding: "12px clamp(16px, 5vw, 32px) 20px",
              background: "rgba(255, 255, 255, 0.72)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              borderTop: `1px solid ${colors.border}`,
              boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
              animation: "mobileMenuSlide 0.22s ease",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.section ? "/#features" : item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "17px",
                  fontWeight: 500,
                  color: isActive(item.href, item.section)
                    ? colors.brandPrimary
                    : colors.textDark,
                  padding: "12px 4px",
                  textDecoration: "none",
                  borderBottom: `1px solid rgba(0,0,0,0.05)`,
                  display: "block",
                }}
              >
                {item.label}
              </Link>
            ))}
            <div style={{ marginTop: "12px" }} onClick={() => setMobileOpen(false)}>
              <WaitlistForm variant="button" buttonLabel="Get Early Access" />
            </div>
          </div>
        )}
      </nav>

      {/* ── Tap-outside overlay ── */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="mobile-menu-overlay"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "rgba(0,0,0,0.18)",
          }}
          aria-hidden
        />
      )}

      {/* ── Slide animation keyframe (injected inline) ── */}
      <style>{`
        @keyframes mobileMenuSlide {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}