"use client";

import Image from "next/image";
import Link from "next/link";
import { layout } from "@/lib/design-tokens";

const productLinks = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Security", href: "/#security" },
  { label: "Get the app", href: "/#get-the-app" },
] as const;

const audiencesLinks = [
  { label: "For H-1B holders", href: "/#for-h1b-holders" },
  { label: "For employers", href: "/#for-employers" },
  { label: "For universities", href: "/#for-universities" },
  { label: "For attorneys", href: "/#for-attorneys" },
] as const;

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
] as const;

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
] as const;

export function Footer() {
  return (
    <footer className="site-footer" style={{ background: "#ffffff" }}>
      <div
        className="site-footer-shell"
        style={{ maxWidth: layout.pageMaxWidth, margin: "0 auto", padding: `0 ${layout.pagePaddingX}` }}
      >
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <Link href="/" className="site-footer-logo-link">
              <Image
                src="/Images/immihub-icon.png"
                alt="ImmiHub"
                width={140}
                height={40}
                className="site-footer-logo"
                priority={false}
              />
            </Link>
            <p className="site-footer-blurb">
              A calmer way to manage your status. The secure document vault built for H-1B holders and their families.
            </p>
            <p className="site-footer-location">Plano, Texas - United States</p>
          </div>

          <div className="site-footer-col">
            <h4 className="site-footer-heading">Product</h4>
            <nav aria-label="Footer product" className="site-footer-links">
              {productLinks.map((l) => (
                <Link key={l.href} href={l.href} className="site-footer-link">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer-col">
            <h4 className="site-footer-heading">Audiences</h4>
            <nav aria-label="Footer audiences" className="site-footer-links">
              {audiencesLinks.map((l) => (
                <Link key={l.href} href={l.href} className="site-footer-link">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer-col">
            <h4 className="site-footer-heading">Company</h4>
            <nav aria-label="Footer company" className="site-footer-links">
              {companyLinks.map((l) => (
                <Link key={l.href} href={l.href} className="site-footer-link">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer-col">
            <h4 className="site-footer-heading">Legal</h4>
            <nav aria-label="Footer legal" className="site-footer-links">
              {legalLinks.map((l) => (
                <Link key={l.href} href={l.href} className="site-footer-link">
                  {l.label}
                </Link>
              ))}
            </nav>
            <a href="mailto:support@getimmihub.com" className="site-footer-link site-footer-email">
              support@getimmihub.com
            </a>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p className="site-footer-copy">
            © {new Date().getFullYear()} ImmiHub, Inc. - Not affiliated with USCIS or any government agency.
          </p>
          <p className="site-footer-madefor">Made for people navigating US immigration</p>
        </div>
      </div>
    </footer>
  );
}

