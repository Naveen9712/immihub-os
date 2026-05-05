"use client";

import {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  useSyncExternalStore,
} from "react";
import { AnimatedSection, WaitlistForm } from "@/components/ui";
import { colors, layout } from "@/lib/design-tokens";

const NARROW_BREAKPOINT_PX = 900;

const NarrowLayoutContext = createContext(false);

function useNarrowLayout() {
  return useContext(NarrowLayoutContext);
}

function subscribeNarrow(breakpoint: number, onChange: () => void) {
  const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getNarrowSnapshot(breakpoint: number) {
  return window.matchMedia(`(max-width: ${breakpoint}px)`).matches;
}

function useMatchNarrow(breakpoint = NARROW_BREAKPOINT_PX) {
  return useSyncExternalStore(
    (onChange) => subscribeNarrow(breakpoint, onChange),
    () => getNarrowSnapshot(breakpoint),
    () => false
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────

type Section = {
  id: string;
  heading: string;
  content: React.ReactNode;
};

type Guide = {
  id: string;
  title: string;
  subtitle: string;
  readTime: string;
  sections: Section[];
};

// ─── Guide Content ────────────────────────────────────────────────────────────

const guides: Guide[] = [
  {
    id: "h1b-document-checklist",
    title: "H-1B Document Checklist",
    subtitle: "Every document you need, why it matters, and what happens when you lose track of it.",
    readTime: "7 min read",
    sections: [
      {
        id: "why-documents-matter",
        heading: "Why Keeping Track of Documents Is Critical",
        content: (
          <>
            <p>
              Maintaining H-1B status in the United States is not a passive activity. Your lawful presence here
              depends on a stack of overlapping documents — each with its own expiration date, renewal process,
              and consequences if mismanaged. Unlike citizens or green card holders, H-1B workers can fall out
              of status through seemingly minor administrative oversights.
            </p>
            <p>
              The good news: none of this is complicated once you know what you're looking at. This checklist
              covers every document you need to track, what each one actually does, and how ImmiHub helps you
              stay ahead of expirations before they become emergencies.
            </p>
          </>
        ),
      },
      {
        id: "seven-documents",
        heading: "The 7 Core Documents Every H-1B Holder Must Track",
        content: (
          <>
            <DocumentCard
              name="1. Passport"
              tag="Tracked by ImmiHub"
              tagColor="green"
              why="Your passport is the foundation of every other immigration document. Without it, you cannot travel internationally, re-enter the United States, or apply for most immigration benefits. Many countries — including the US — require your passport to be valid for at least six months beyond your intended stay. This means a passport expiring in four months can strand you internationally even if it technically hasn't expired yet."
              action="Renew through your home country's consulate or embassy in the US. Processing times vary widely — India's passport renewal, for example, can take 2–4 months. Don't wait until the last minute."
            />
            <DocumentCard
              name="2. Form I-94 (Arrival/Departure Record)"
              tag="Tracked by ImmiHub"
              tagColor="green"
              why="Your I-94 is the single most legally important date on your entire immigration record. It's not your visa stamp. It's not your I-797 approval. Your I-94 end date is the date you are legally authorized to remain in the United States. If you overstay your I-94 — even by one day — you begin accruing unlawful presence, which can trigger bars to re-entry of 3 or 10 years. The I-94 is generated automatically when you enter the US and is accessible at cbp.dhs.gov."
              action="Check your I-94 every time you re-enter the US. Errors happen, and it's your responsibility — not CBP's — to catch them."
            />
            <DocumentCard
              name="3. Form I-797 (Notice of Action / Approval Notice)"
              tag="Tracked by ImmiHub"
              tagColor="green"
              why="The I-797 is your H-1B petition approval, issued by USCIS to your employer. It contains your petition validity dates, your job classification, and your authorized employer. Your I-797 approval period defines how long your H-1B petition is valid, which in turn drives your I-94 end date. Extensions, employer transfers (portability), and amendments all generate new I-797 notices — each one superseding the last."
              action="Keep every I-797 you've ever received, not just the most recent one. Older notices can matter for calculating H-1B cap-exempt years and six-year limits."
            />
            <DocumentCard
              name="4. H-1B Visa Stamp"
              tag="Tracked by ImmiHub"
              tagColor="green"
              why="Contrary to common confusion, your visa stamp does not control how long you can stay in the US. It controls whether you can enter or re-enter. An expired visa stamp means you cannot board a flight to the US after international travel — but if you never leave the country, an expired stamp is largely irrelevant to your day-to-day status. Visas are issued by the State Department at US consulates abroad, entirely separately from your USCIS-approved petition."
              action="If your visa stamp expires and you plan to travel internationally, factor in visa appointment wait times — some consulates in certain countries have backlogs of 6–18 months."
            />
            <DocumentCard
              name="5. Spouse / Dependent EAD (Form I-766)"
              tag="Tracked by ImmiHub"
              tagColor="green"
              why="If your spouse has H-4 EAD (Employment Authorization Document), it expires independently of your H-1B. If their EAD lapses, they must stop working — immediately, with no grace period. USCIS processing times for EAD renewal currently average 3–6 months, meaning the application should be filed well in advance. There are automatic extension provisions in some cases (if filed timely), but these rules have changed in recent years and need to be verified."
              action="Set a renewal reminder 6 months before the EAD expiration date. File Form I-765 with the proper I-539A if applicable."
            />
            <DocumentCard
              name="6. Employment Letter"
              tag="Storage Only"
              tagColor="gray"
              why="An up-to-date employment letter from your employer — confirming your title, salary, employment dates, and work location — is not an immigration document per se, but it's required in almost every practical context: H-1B renewals, green card applications, apartment rentals, mortgage applications, and bank account openings. Many H-1B holders are caught off guard when they need one urgently and HR takes weeks to produce it."
              action="Request a current employment letter from HR once a year and store it alongside your immigration documents. It should be on company letterhead and signed."
            />
            <DocumentCard
              name="7. Social Security Card"
              tag="Storage Only"
              tagColor="gray"
              why="While not an immigration document, your Social Security card is tied to your work authorization and is required for employment onboarding, tax filing, and many government processes. Losing it can cause friction during job transitions or when completing Form I-9 for a new employer."
              action="Store a digital copy in a secure, encrypted location. Replacement takes 10–14 business days via the SSA."
            />
          </>
        ),
      },
      {
        id: "what-to-do-now",
        heading: "What You Should Do Right Now",
        content: (
          <>
            <p>
              Go through this list today and note the expiration date of each document. Specifically:
            </p>
            <ol style={{ paddingLeft: "20px", lineHeight: 2, color: colors.gray600, fontFamily: "'Source Sans 3', sans-serif", fontSize: "15px" }}>
              <li>Find your most recent I-797 and note the "Notice of Action" dates (validity period).</li>
              <li>Log into cbp.dhs.gov and check your current I-94 record — confirm the end date matches your I-797.</li>
              <li>Note your visa stamp expiration in your passport (look for the "Until" field next to the H-1B annotation).</li>
              <li>Note your passport expiration date and subtract 6 months — that's your effective travel window.</li>
              <li>If your spouse has H-4 EAD, find the I-766 card and note the "Card Expires" date.</li>
            </ol>
            <p>
              Once you have these five dates, you have a complete picture of your immigration timeline. ImmiHub
              tracks all of these for you and sends reminders before each deadline — so this becomes a one-time
              setup, not a recurring anxiety.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "understanding-expiry-dates",
    title: "Understanding Expiry Dates",
    subtitle: "I-797 vs Visa Stamp vs I-94 vs Passport — what expires when, and which one actually controls your status.",
    readTime: "6 min read",
    sections: [
      {
        id: "the-confusion",
        heading: "The Confusion That Trips Up Even Experienced H-1B Holders",
        content: (
          <>
            <p>
              H-1B workers are often surprised to learn that they hold multiple documents with multiple
              expiration dates — and that these dates can, and often do, fall apart from each other. A visa
              stamp that expired two years ago. An I-797 that runs through next October. An I-94 that ends
              in three weeks. Which one matters?
            </p>
            <p>
              The answer is: all of them, but for different things. Here's a clear breakdown of what each
              document controls, when it expires, and why the distinction matters more than most H-1B workers
              realize.
            </p>
          </>
        ),
      },
      {
        id: "expiry-breakdown",
        heading: "Document-by-Document Expiry Breakdown",
        content: (
          <>
            <ExpiryTable
              rows={[
                {
                  doc: "I-797 (Petition Approval)",
                  controls: "How long your H-1B petition is authorized",
                  typical: "3 years (extendable to 6)",
                  renewedBy: "Employer files Form I-129",
                  severity: "high",
                },
                {
                  doc: "I-94 (Admission Record)",
                  controls: "How long you're legally authorized to stay in the US",
                  typical: "Matches I-797 end date",
                  renewedBy: "Updated automatically at port of entry",
                  severity: "critical",
                },
                {
                  doc: "H-1B Visa Stamp",
                  controls: "Whether you can re-enter the US after international travel",
                  typical: "Varies (1–3+ years, often matches I-797)",
                  renewedBy: "Consular appointment abroad",
                  severity: "medium",
                },
                {
                  doc: "Passport",
                  controls: "Your primary identity + international travel",
                  typical: "10 years (varies by country)",
                  renewedBy: "Home country consulate in US",
                  severity: "high",
                },
                {
                  doc: "H-4 EAD (Spouse)",
                  controls: "Spouse's work authorization",
                  typical: "1–2 years",
                  renewedBy: "Spouse files Form I-765",
                  severity: "high",
                },
              ]}
            />
          </>
        ),
      },
      {
        id: "i94-is-king",
        heading: "The I-94 Is the Most Important Date — Here's Why",
        content: (
          <>
            <p>
              Many H-1B holders incorrectly believe their visa stamp expiration is the date they need to
              leave the US. This is one of the most common and consequential misunderstandings in immigration.
            </p>
            <p>
              Your visa stamp is issued by the State Department. It controls entry into the United States —
              think of it as a key that lets you knock on the door. But your I-94 record, issued by Customs
              and Border Protection at the port of entry, is the document that tells you how long you're
              allowed to stay once inside.
            </p>
            <p>
              If your visa stamp expired last year but your I-94 doesn't end until next June, you are
              in perfectly valid status. You simply cannot take an international trip without first renewing
              your visa stamp (or risking being unable to return). Conversely, if your I-94 ends in 30 days,
              that is an urgent issue regardless of when your visa stamp expires.
            </p>
            <Callout type="warning">
              Always check your I-94 at cbp.dhs.gov after every US entry. CBP makes mistakes, and
              an incorrect I-94 can cause serious problems months or years later if not corrected promptly.
            </Callout>
          </>
        ),
      },
      {
        id: "six-year-cap",
        heading: "The 6-Year Cap and What Comes After",
        content: (
          <>
            <p>
              H-1B status is generally capped at a total of six years: an initial three-year period plus
              a three-year extension. After six years, you generally must leave the US for at least a year
              before being eligible for a new H-1B — unless you qualify for an exemption.
            </p>
            <p>
              The two main exemptions that allow H-1B status beyond six years:
            </p>
            <ol style={{ paddingLeft: "20px", lineHeight: 2, color: colors.gray600, fontFamily: "'Source Sans 3', sans-serif", fontSize: "15px" }}>
              <li>
                <strong style={{ color: colors.gray800 }}>PERM Labor Certification filed 365+ days ago:</strong> You can receive 1-year extensions
                indefinitely until your priority date becomes current.
              </li>
              <li>
                <strong style={{ color: colors.gray800 }}>Approved I-140 (Immigrant Petition):</strong> You can receive 3-year extensions indefinitely
                while waiting for a green card.
              </li>
            </ol>
            <p>
              The practical implication: for many Indian and Chinese H-1B workers, green card backlogs mean
              waiting a decade or more for a priority date. Tracking your I-797 expiry in relation to your
              PERM/I-140 dates is therefore critical — a missed extension filing can disrupt years of
              accrued priority date history.
            </p>
          </>
        ),
      },
      {
        id: "timeline-summary",
        heading: "A Realistic Timeline for Managing Your Documents",
        content: (
          <>
            <p>Here's how to think about renewals in terms of lead time:</p>
            <TimelineList
              items={[
                { when: "12 months before I-797 expiry", action: "Remind your employer's HR/legal team. Extension preparation takes time." },
                { when: "9 months before I-797 expiry", action: "Employer should initiate extension filing with USCIS (Form I-129). Premium processing takes 15 days; standard can take months." },
                { when: "6 months before EAD expiry", action: "File EAD renewal (Form I-765). USCIS processing is slow — don't wait." },
                { when: "6 months before passport effective expiry", action: "Initiate renewal via home country consulate. India, China, and other nations vary widely in processing times." },
                { when: "Before any international travel", action: "Confirm your visa stamp is valid for re-entry. Check whether your destination country requires additional visas." },
              ]}
            />
          </>
        ),
      },
    ],
  },
  {
    id: "if-documents-expire",
    title: "What Happens If Your Documents Expire",
    subtitle: "Real consequences, grace periods (and where they don't exist), and your action steps.",
    readTime: "8 min read",
    sections: [
      {
        id: "not-all-equal",
        heading: "Not All Expirations Are Equal — Know the Difference",
        content: (
          <>
            <p>
              When an H-1B document expires, the consequences range from "minor inconvenience" to "you are
              now out of status and accruing unlawful presence." Understanding which scenario you're in is
              the first step to resolving it correctly.
            </p>
            <p>
              Some expirations are genuinely urgent and require immediate legal consultation. Others are
              administrative nuisances that only affect specific activities like international travel. This
              guide walks through each document, what an expiration actually means, and exactly what you
              should do about it.
            </p>
          </>
        ),
      },
      {
        id: "expired-i94",
        heading: "Expired I-94: The Most Serious Situation",
        content: (
          <>
            <Callout type="danger">
              An expired I-94 means you are out of status. You are accruing unlawful presence.
              Contact an immigration attorney immediately — do not delay.
            </Callout>
            <p>
              If your I-94 has expired and you have not filed an extension or change of status, you are
              technically out of status in the United States. Every day beyond the I-94 end date counts as
              unlawful presence unless you're covered by a pending timely-filed extension.
            </p>
            <p>
              <strong>The 240-day rule:</strong> If your employer filed an H-1B extension before your I-94
              expired, you are protected by a 240-day grace period while the extension is pending. During
              this window, you may continue working for the same employer. However, you cannot travel
              internationally without abandoning the pending petition.
            </p>
            <p>
              <strong>Unlawful presence consequences:</strong>
            </p>
            <ul style={{ paddingLeft: "20px", lineHeight: 2, color: colors.gray600, fontFamily: "'Source Sans 3', sans-serif", fontSize: "15px" }}>
              <li>180+ days of unlawful presence triggers a 3-year bar on re-entry to the US.</li>
              <li>365+ days of unlawful presence triggers a 10-year bar.</li>
              <li>These bars are triggered upon departure — meaning leaving the US once you've accumulated this time makes it permanent.</li>
            </ul>
          </>
        ),
      },
      {
        id: "expired-i797",
        heading: "Expired I-797: Your Employer's Responsibility (But Your Problem)",
        content: (
          <>
            <p>
              Your I-797 is filed by your employer, not you. This means the responsibility for timely
              extensions lies with your company's HR department or immigration counsel. Unfortunately,
              the consequences of a missed extension fall on you.
            </p>
            <p>
              If your I-797 has expired and no extension was filed before the expiration date, your I-94
              has also expired (they almost always share end dates). You are in the situation described
              above — out of status. The 240-day grace period does not apply if the extension wasn't
              filed before expiry.
            </p>
            <p>
              <strong>What to do:</strong> Contact your employer's HR and immigration attorney immediately.
              Depending on your situation, you may be able to apply for reinstatement of status, or you
              may need to leave the US and re-enter on a new H-1B visa. An attorney can assess your
              specific circumstances.
            </p>
            <Callout type="warning">
              Don't assume your employer is tracking this. Many H-1B workers have been left out of status
              because HR missed an extension deadline. Monitor your own I-797 expiry dates and raise the
              alarm 9–12 months before expiry.
            </Callout>
          </>
        ),
      },
      {
        id: "expired-visa-stamp",
        heading: "Expired Visa Stamp: Less Urgent, Still Important",
        content: (
          <>
            <p>
              An expired visa stamp while you're inside the United States does not affect your immigration
              status. You are not out of status. You can continue working, living, and renewing your H-1B
              normally — as long as your I-94 is valid.
            </p>
            <p>
              The problem arises the moment you leave the US. Without a valid H-1B visa stamp, you cannot
              re-enter — even if your I-797 petition is fully valid and your job is waiting for you. You
              would need to attend a US consular appointment abroad and obtain a new visa stamp before
              returning.
            </p>
            <p>
              <strong>Wait times matter:</strong> Visa appointment availability varies dramatically by
              location and geopolitical conditions. Some US embassies have reported wait times of 6–18 months
              for H-1B visa appointments. If you're planning international travel, check appointment
              availability well in advance — not the week before your flight.
            </p>
            <p>
              One exception: <strong>Canadian and Mexican H-1B holders</strong> can sometimes use Automatic
              Revalidation, which allows re-entry from Canada or Mexico with an expired visa stamp in
              certain circumstances. Consult your attorney before relying on this.
            </p>
          </>
        ),
      },
      {
        id: "expired-passport",
        heading: "Expired Passport: Don't Underestimate the Ripple Effects",
        content: (
          <>
            <p>
              You can remain in the US legally with an expired passport — your immigration status is tied
              to your I-94, not your passport. However, an expired passport creates a cascade of practical
              problems:
            </p>
            <ul style={{ paddingLeft: "20px", lineHeight: 2, color: colors.gray600, fontFamily: "'Source Sans 3', sans-serif", fontSize: "15px" }}>
              <li>You cannot board international flights.</li>
              <li>You cannot complete Form I-9 employment verification for a new employer.</li>
              <li>You cannot apply for a new US visa stamp (requires a valid passport).</li>
              <li>Many banks and agencies require a valid passport for identity verification.</li>
              <li>If you're in a green card process, USCIS and NVC correspondence often requires current passport details.</li>
            </ul>
            <p>
              Renew your passport through your home country's embassy or consulate in the US. India's
              passport renewal typically takes 4–8 weeks in normal conditions but can be longer. Factor
              this into your planning, especially if you have travel coming up.
            </p>
          </>
        ),
      },
      {
        id: "expired-ead",
        heading: "Expired Spouse EAD: Your Spouse Must Stop Working Immediately",
        content: (
          <>
            <Callout type="danger">
              There is no grace period for an expired EAD. Your spouse must stop working the day
              the card expires if no extension has been filed and approved.
            </Callout>
            <p>
              Unlike some other immigration benefits, there is no automatic grace period for a lapsed EAD.
              If the card expires and there is no pending timely-filed renewal with evidence of automatic
              extension eligibility, your spouse cannot legally work.
            </p>
            <p>
              <strong>Automatic extension rule (important):</strong> If Form I-765 was filed before the
              EAD expired, USCIS may grant an automatic extension of up to 540 days (as of recent rule
              changes) in certain categories. H-4 EAD holders may qualify. Your spouse should receive a
              receipt notice confirming the filing, which serves as temporary work authorization evidence
              when combined with the expired EAD. Always verify eligibility with your attorney — the rules
              have changed.
            </p>
            <p>
              The safest approach: treat the EAD renewal deadline as 6 months before expiry. File early,
              get the receipt notice, and carry it with the expired card as evidence of continued authorization
              during processing.
            </p>
          </>
        ),
      },
      {
        id: "summary-action-steps",
        heading: "Summary: What to Do Based on Your Situation",
        content: (
          <>
            <SituationTable
              rows={[
                { situation: "I-94 has expired, no extension filed", urgency: "Critical", action: "Contact immigration attorney today. Do not leave the US." },
                { situation: "I-94 expires in <60 days, extension not filed", urgency: "Urgent", action: "Alert your employer immediately. Start premium processing extension." },
                { situation: "I-797 expired, I-94 still valid", urgency: "Review needed", action: "Check if timely extension is pending. If not, consult attorney." },
                { situation: "Visa stamp expired, staying in US", urgency: "Low (until travel)", action: "No action needed now. Check availability for renewal before any travel." },
                { situation: "Passport expired", urgency: "Medium", action: "Renew via home country consulate. Do not book international flights until renewed." },
                { situation: "Spouse EAD expired, no renewal pending", urgency: "Critical", action: "Spouse must stop working. File I-765 immediately and consult attorney." },
                { situation: "Spouse EAD expired, renewal filed timely", urgency: "Low", action: "Confirm automatic extension eligibility. Carry receipt notice as work auth." },
              ]}
            />
            <p style={{ marginTop: "24px" }}>
              Immigration law is complex and fact-specific. This guide is for informational purposes — always
              consult a licensed immigration attorney for advice on your specific situation.
            </p>
          </>
        ),
      },
    ],
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function DocumentCard({
  name, tag, tagColor, why, action,
}: {
  name: string;
  tag: string;
  tagColor: "green" | "gray";
  why: string;
  action: string;
}) {
  const narrow = useNarrowLayout();
  return (
    <div style={{
      padding: narrow ? "18px 16px" : "24px",
      borderRadius: "16px",
      background: colors.white,
      border: `1px solid ${colors.gray100}`,
      borderLeft: `4px solid ${colors.blue}`,
      marginBottom: "16px",
      boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
        <h3 style={{
          fontFamily: "'Satoshi', sans-serif",
          fontSize: narrow ? "16px" : "17px", fontWeight: 700, color: colors.navy, margin: 0,
        }}>{name}</h3>
        <span style={{
          padding: "3px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: 700,
          fontFamily: "'Source Sans 3', sans-serif", letterSpacing: "0.5px",
          background: tagColor === "green" ? colors.greenLight : colors.gray100,
          color: tagColor === "green" ? colors.green : colors.gray500,
        }}>{tag}</span>
      </div>
      <p style={{
        fontFamily: "'Source Sans 3', sans-serif", fontSize: narrow ? "14px" : "15px",
        color: colors.gray600, lineHeight: 1.7, marginBottom: "12px",
      }}>{why}</p>
      <div style={{
        padding: "10px 14px", borderRadius: "8px",
        background: colors.bluePale, display: "flex", gap: "8px", alignItems: "flex-start",
      }}>
        <span style={{ fontSize: "14px", marginTop: "1px" }}>→</span>
        <p style={{
          fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px",
          color: colors.blue, lineHeight: 1.6, margin: 0, fontWeight: 600,
        }}>{action}</p>
      </div>
    </div>
  );
}

function ExpiryTable({ rows }: {
  rows: { doc: string; controls: string; typical: string; renewedBy: string; severity: "critical" | "high" | "medium" }[];
}) {
  const narrow = useNarrowLayout();
  const severityColor = {
    critical: "#dc2626",
    high: "#d97706",
    medium: colors.blue,
  };
  const severityLabel = { critical: "Critical", high: "Important", medium: "Situational" };

  const rowFields: { label: string; key: keyof (typeof rows)[number] }[] = [
    { label: "Controls", key: "controls" },
    { label: "Typical duration", key: "typical" },
    { label: "Renewed by", key: "renewedBy" },
  ];

  if (narrow) {
    return (
      <div style={{ marginTop: "8px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {rows.map((row, i) => (
          <div
            key={i}
            style={{
              padding: "16px",
              borderRadius: "14px",
              background: colors.white,
              border: `1px solid ${colors.gray100}`,
              boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <h4 style={{
                fontFamily: "'Satoshi', sans-serif", fontSize: "15px", fontWeight: 700,
                color: colors.navy, margin: 0, lineHeight: 1.35, flex: "1 1 12rem",
              }}>{row.doc}</h4>
              <span style={{
                padding: "3px 8px", borderRadius: "6px", fontSize: "11px", fontWeight: 700,
                background: `${severityColor[row.severity]}18`,
                color: severityColor[row.severity],
              }}>
                {severityLabel[row.severity]}
              </span>
            </div>
            {rowFields.map(({ label, key }) => (
              <p key={key} style={{
                fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px",
                color: colors.gray600, lineHeight: 1.55, margin: "0 0 10px",
              }}>
                <span style={{ display: "block", fontSize: "11px", fontWeight: 700, color: colors.gray400, textTransform: "uppercase", letterSpacing: "0.6px", marginBottom: "2px" }}>{label}</span>
                {row[key]}
              </p>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ overflowX: "auto", marginTop: "8px", WebkitOverflowScrolling: "touch" }}>
      <table style={{ width: "100%", minWidth: "720px", borderCollapse: "collapse", fontFamily: "'Source Sans 3', sans-serif" }}>
        <thead>
          <tr style={{ background: colors.bluePale }}>
            {["Document", "Controls", "Typical Duration", "Renewed By", "Priority"].map(h => (
              <th key={h} style={{
                padding: "12px 16px", textAlign: "left", fontSize: "12px",
                fontWeight: 700, color: colors.navy, textTransform: "uppercase",
                letterSpacing: "1px", borderBottom: `2px solid ${colors.blueMist}`,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? colors.white : colors.gray50 }}>
              <td style={{ padding: "14px 16px", fontSize: "14px", fontWeight: 700, color: colors.navy, verticalAlign: "top" }}>{row.doc}</td>
              <td style={{ padding: "14px 16px", fontSize: "14px", color: colors.gray600, lineHeight: 1.5, verticalAlign: "top" }}>{row.controls}</td>
              <td style={{ padding: "14px 16px", fontSize: "14px", color: colors.gray600, verticalAlign: "top" }}>{row.typical}</td>
              <td style={{ padding: "14px 16px", fontSize: "14px", color: colors.gray600, verticalAlign: "top" }}>{row.renewedBy}</td>
              <td style={{ padding: "14px 16px", verticalAlign: "top" }}>
                <span style={{
                  padding: "3px 8px", borderRadius: "6px", fontSize: "11px", fontWeight: 700,
                  background: `${severityColor[row.severity]}18`,
                  color: severityColor[row.severity],
                }}>
                  {severityLabel[row.severity]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TimelineList({ items }: { items: { when: string; action: string }[] }) {
  const narrow = useNarrowLayout();
  return (
    <div style={{ position: "relative", paddingLeft: narrow ? "20px" : "24px" }}>
      <div style={{
        position: "absolute", left: "8px", top: "4px", bottom: "4px",
        width: "2px", background: colors.blueMist,
      }} />
      {items.map((item, i) => (
        <div key={i} style={{ position: "relative", marginBottom: "20px" }}>
          <div style={{
            position: "absolute", left: "-20px", top: "4px",
            width: "10px", height: "10px", borderRadius: "50%",
            background: colors.blue, border: `2px solid ${colors.white}`,
            boxShadow: `0 0 0 2px ${colors.blue}`,
          }} />
          <p style={{
            fontFamily: "'Source Sans 3', sans-serif", fontSize: "13px",
            fontWeight: 700, color: colors.blue, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.5px",
          }}>{item.when}</p>
          <p style={{
            fontFamily: "'Source Sans 3', sans-serif", fontSize: "15px",
            color: colors.gray600, lineHeight: 1.6, margin: 0,
          }}>{item.action}</p>
        </div>
      ))}
    </div>
  );
}

function SituationTable({ rows }: {
  rows: { situation: string; urgency: string; action: string }[];
}) {
  const narrow = useNarrowLayout();
  const urgencyColor: Record<string, string> = {
    "Critical": "#dc2626",
    "Urgent": "#d97706",
    "Medium": colors.blue,
    "Low (until travel)": colors.gray500,
    "Low": colors.gray500,
    "Review needed": "#d97706",
  };

  if (narrow) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {rows.map((row, i) => (
          <div
            key={i}
            style={{
              padding: "16px",
              borderRadius: "14px",
              background: colors.white,
              border: `1px solid ${colors.gray100}`,
              boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
            }}
          >
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif", fontSize: "11px", fontWeight: 700,
              color: colors.gray400, textTransform: "uppercase", letterSpacing: "0.6px", margin: "0 0 6px",
            }}>Your situation</p>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif", fontSize: "15px", fontWeight: 600,
              color: colors.gray800, lineHeight: 1.45, margin: "0 0 12px",
            }}>{row.situation}</p>
            <span style={{
              display: "inline-block", padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: 700,
              background: `${urgencyColor[row.urgency] ?? colors.gray500}18`,
              color: urgencyColor[row.urgency] ?? colors.gray500,
              marginBottom: "12px",
            }}>{row.urgency}</span>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif", fontSize: "11px", fontWeight: 700,
              color: colors.gray400, textTransform: "uppercase", letterSpacing: "0.6px", margin: "0 0 6px",
            }}>Action</p>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px",
              color: colors.gray600, lineHeight: 1.6, margin: 0,
            }}>{row.action}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
      <table style={{ width: "100%", minWidth: "560px", borderCollapse: "collapse", fontFamily: "'Source Sans 3', sans-serif" }}>
        <thead>
          <tr style={{ background: colors.bluePale }}>
            {["Your Situation", "Urgency", "Action"].map(h => (
              <th key={h} style={{
                padding: "12px 16px", textAlign: "left", fontSize: "12px",
                fontWeight: 700, color: colors.navy, textTransform: "uppercase",
                letterSpacing: "1px", borderBottom: `2px solid ${colors.blueMist}`,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? colors.white : colors.gray50 }}>
              <td style={{ padding: "14px 16px", fontSize: "14px", fontWeight: 600, color: colors.gray800, verticalAlign: "top" }}>{row.situation}</td>
              <td style={{ padding: "14px 16px", verticalAlign: "top" }}>
                <span style={{
                  padding: "3px 8px", borderRadius: "6px", fontSize: "11px", fontWeight: 700,
                  background: `${urgencyColor[row.urgency] ?? colors.gray500}18`,
                  color: urgencyColor[row.urgency] ?? colors.gray500,
                  whiteSpace: "nowrap",
                }}>{row.urgency}</span>
              </td>
              <td style={{ padding: "14px 16px", fontSize: "14px", color: colors.gray600, lineHeight: 1.6, verticalAlign: "top" }}>{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Callout({ type, children }: { type: "warning" | "danger"; children: React.ReactNode }) {
  const isWarning = type === "warning";
  const narrow = useNarrowLayout();
  return (
    <div style={{
      padding: narrow ? "14px 14px" : "16px 20px",
      borderRadius: "12px",
      background: isWarning ? "#fffbeb" : "#fef2f2",
      border: `1px solid ${isWarning ? "#fcd34d" : "#fca5a5"}`,
      borderLeft: `4px solid ${isWarning ? "#f59e0b" : "#ef4444"}`,
      margin: "20px 0",
      display: "flex", gap: "12px", alignItems: "flex-start",
    }}>
      <span style={{ fontSize: "18px", flexShrink: 0 }}>{isWarning ? "⚠️" : "🚨"}</span>
      <p style={{
        fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px",
        color: isWarning ? "#92400e" : "#991b1b", lineHeight: 1.6, margin: 0, fontWeight: 600,
      }}>{children}</p>
    </div>
  );
}

// ─── Table of Contents ────────────────────────────────────────────────────────

function TableOfContents({
  guide,
  activeSection,
  onSectionClick,
  variant = "sidebar",
}: {
  guide: Guide;
  activeSection: string;
  onSectionClick: (id: string) => void;
  variant?: "sidebar" | "mobileRail";
}) {
  if (variant === "mobileRail") {
    return (
      <nav
        aria-label="On this page"
        style={{
          position: "sticky",
          top: "72px",
          zIndex: 20,
          marginLeft: "-16px",
          marginRight: "-16px",
          marginBottom: "8px",
          padding: "12px 16px 14px",
          background: colors.warmWhite,
          borderBottom: `1px solid ${colors.gray100}`,
          boxShadow: "0 6px 16px rgba(26,35,50,0.06)",
        }}
      >
        <p style={{
          fontFamily: "'Source Sans 3', sans-serif", fontSize: "10px",
          fontWeight: 700, color: colors.gray500, textTransform: "uppercase",
          letterSpacing: "1.2px", margin: "0 0 10px",
        }}>On this page</p>
        <div style={{
          display: "flex",
          gap: "8px",
          overflowX: "auto",
          paddingBottom: "4px",
          marginBottom: "-4px",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "thin",
        }}>
          {guide.sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => onSectionClick(section.id)}
              style={{
                flex: "0 0 auto",
                maxWidth: "min(280px, 85vw)",
                textAlign: "left",
                padding: "10px 14px",
                borderRadius: "10px",
                border: `1px solid ${activeSection === section.id ? colors.blue : colors.gray200}`,
                background: activeSection === section.id ? colors.bluePale : colors.white,
                color: activeSection === section.id ? colors.blue : colors.gray600,
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "13px",
                fontWeight: activeSection === section.id ? 700 : 500,
                cursor: "pointer",
                lineHeight: 1.35,
                whiteSpace: "normal",
              }}
            >
              {section.heading}
            </button>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav aria-label="On this page" style={{
      position: "sticky", top: "100px",
      padding: "24px",
      borderRadius: "16px",
      background: colors.white,
      border: `1px solid ${colors.gray100}`,
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    }}>
      <p style={{
        fontFamily: "'Source Sans 3', sans-serif", fontSize: "11px",
        fontWeight: 700, color: colors.gray500, textTransform: "uppercase",
        letterSpacing: "1.5px", marginBottom: "16px",
      }}>On this page</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {guide.sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => onSectionClick(section.id)}
            style={{
              display: "block", width: "100%", textAlign: "left",
              padding: "8px 12px", borderRadius: "8px", border: "none",
              background: activeSection === section.id ? colors.bluePale : "transparent",
              color: activeSection === section.id ? colors.blue : colors.gray600,
              fontFamily: "'Source Sans 3', sans-serif", fontSize: "13px",
              fontWeight: activeSection === section.id ? 700 : 400,
              cursor: "pointer", transition: "all 0.15s", lineHeight: 1.4,
              borderLeft: `3px solid ${activeSection === section.id ? colors.blue : "transparent"}`,
            }}
          >
            {section.heading}
          </button>
        ))}
      </div>
    </nav>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function ResourcesPage() {
  const isNarrow = useMatchNarrow();
  const [activeGuide, setActiveGuide] = useState(0);
  const [activeSection, setActiveSection] = useState(guides[0].sections[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const guide = guides[activeGuide];
  const scrollOffset = isNarrow ? 88 : 110;
  const sectionScrollMargin = isNarrow ? "96px" : "120px";

  // Scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeGuide]);

  // Reset on guide change
  useEffect(() => {
    setActiveSection(guide.sections[0].id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeGuide]);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - scrollOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <NarrowLayoutContext.Provider value={isNarrow}>
    <div style={{ paddingTop: isNarrow ? "64px" : "80px" }}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{
        padding: isNarrow ? `40px ${layout.pagePaddingX} 36px` : `80px ${layout.pagePaddingX} 60px`,
        background: colors.bluePale,
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: isNarrow ? "12px" : "13px", fontWeight: 700,
              color: colors.blue, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px",
            }}>H-1B Resources</p>
            <h1 style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "clamp(26px, 6vw, 46px)", fontWeight: 800,
              color: colors.navy, lineHeight: 1.15, marginBottom: "16px",
            }}>
              Your H-1B <span style={{ color: colors.blue }}>Knowledge Base</span>
            </h1>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif", fontSize: isNarrow ? "15px" : "17px",
              color: colors.gray500, lineHeight: 1.7, maxWidth: "560px", margin: "0 auto 40px",
            }}>
              Practical, accurate guides to help you understand your H-1B documents,
              track critical deadlines, and avoid costly mistakes.
            </p>

            {/* Guide selector tabs */}
            <div style={{
              display: "flex",
              gap: "8px",
              justifyContent: "center",
              flexWrap: isNarrow ? "nowrap" : "wrap",
              flexDirection: isNarrow ? "column" : "row",
              width: "100%",
              maxWidth: isNarrow ? "100%" : undefined,
              margin: "0 auto",
            }}>
              {guides.map((g, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveGuide(i)}
                  style={{
                    width: isNarrow ? "100%" : "auto",
                    padding: isNarrow ? "12px 18px" : "10px 22px",
                    borderRadius: "12px",
                    border: `2px solid ${activeGuide === i ? colors.blue : colors.gray200}`,
                    background: activeGuide === i ? colors.blue : colors.white,
                    color: activeGuide === i ? colors.white : colors.gray600,
                    fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px", fontWeight: 600,
                    cursor: "pointer", transition: "all 0.2s",
                    textAlign: "center",
                    minHeight: isNarrow ? 48 : undefined,
                  }}
                >
                  {g.title}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Article Layout ────────────────────────────────────────── */}
      <section style={{
        padding: isNarrow ? `32px ${layout.pagePaddingX} 72px` : `60px ${layout.pagePaddingX} 100px`,
        background: colors.warmWhite,
      }}>
        <div style={{
          maxWidth: "1100px", margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isNarrow ? "1fr" : "240px 1fr",
          gap: isNarrow ? 0 : "48px",
          alignItems: "start",
        }}>

          {/* Left: ToC (desktop) */}
          {!isNarrow && (
            <div style={{ display: "block" }}>
              <TableOfContents
                guide={guide}
                activeSection={activeSection}
                onSectionClick={scrollToSection}
                variant="sidebar"
              />
            </div>
          )}

          {/* Right: Article */}
          <article style={{ minWidth: 0 }}>
            {isNarrow && (
              <TableOfContents
                guide={guide}
                activeSection={activeSection}
                onSectionClick={scrollToSection}
                variant="mobileRail"
              />
            )}
            {/* Guide meta */}
            <div style={{
              marginBottom: isNarrow ? "28px" : "40px",
              paddingBottom: isNarrow ? "20px" : "28px",
              borderBottom: `1px solid ${colors.gray100}`,
            }}>
              <h2 style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: isNarrow ? "clamp(22px, 5.5vw, 30px)" : "clamp(24px, 4vw, 36px)",
                fontWeight: 800,
                color: colors.navy, marginBottom: "10px", lineHeight: 1.2,
              }}>{guide.title}</h2>
              <p style={{
                fontFamily: "'Source Sans 3', sans-serif", fontSize: "16px",
                color: colors.gray500, marginBottom: "12px", lineHeight: 1.6,
              }}>{guide.subtitle}</p>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontFamily: "'Source Sans 3', sans-serif", fontSize: "12px",
                color: colors.gray400, fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px",
              }}>
                📖 {guide.readTime}
              </span>
            </div>

            {/* Sections */}
            {guide.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                ref={(el) => { sectionRefs.current[section.id] = el; }}
                style={{ marginBottom: isNarrow ? "40px" : "52px", scrollMarginTop: sectionScrollMargin }}
              >
                <h2 style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: isNarrow ? "19px" : "22px", fontWeight: 800, color: colors.navy,
                  marginBottom: "20px", lineHeight: 1.3,
                }}>{section.heading}</h2>
                <div style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "15px", color: colors.gray600, lineHeight: 1.75,
                }}>
                  {section.content}
                </div>
              </section>
            ))}

            {/* ── CTA ─────────────────────────────────────────────── */}
            <div style={{
              padding: isNarrow ? "24px 18px" : "36px",
              borderRadius: "20px",
              background: `linear-gradient(135deg, ${colors.bluePale} 0%, ${colors.white} 100%)`,
              border: `1px solid ${colors.blueMist}`,
              textAlign: "center",
              marginTop: "16px",
            }}>
              <p style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: isNarrow ? "18px" : "22px", fontWeight: 800, color: colors.navy, marginBottom: "8px",
              }}>
                Want to track all these dates automatically?
              </p>
              <p style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "15px", color: colors.gray500, marginBottom: "24px", lineHeight: 1.6,
              }}>
                ImmiHub monitors your H-1B documents, sends reminders before deadlines, and keeps everything
                organized in one place — so you're never caught off guard.
              </p>
              <WaitlistForm
                variant="hero"
                buttonBg="#4f9ed6"
                buttonShadow="0 10px 18px rgba(79,158,214,0.28)"
              />
            </div>

            {/* Guide navigation */}
            <div style={{
              display: "flex",
              flexDirection: isNarrow ? "column" : "row",
              justifyContent: "space-between",
              marginTop: "40px",
              paddingTop: "24px", borderTop: `1px solid ${colors.gray100}`, gap: "12px",
            }}>
              {activeGuide > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveGuide(activeGuide - 1)}
                  style={{
                    display: "flex", flexDirection: "column", gap: "4px",
                    padding: "16px 20px", borderRadius: "12px",
                    border: `1px solid ${colors.gray200}`, background: colors.white,
                    cursor: "pointer", textAlign: "left",
                    flex: isNarrow ? "none" : 1,
                    maxWidth: isNarrow ? "100%" : "48%",
                    width: isNarrow ? "100%" : undefined,
                    minHeight: isNarrow ? 48 : undefined,
                  }}
                >
                  <span style={{
                    fontFamily: "'Source Sans 3', sans-serif", fontSize: "11px",
                    fontWeight: 700, color: colors.gray400, textTransform: "uppercase", letterSpacing: "1px",
                  }}>← Previous guide</span>
                  <span style={{
                    fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px",
                    fontWeight: 700, color: colors.navy,
                  }}>{guides[activeGuide - 1].title}</span>
                </button>
              )}
              {activeGuide < guides.length - 1 && (
                <button
                  type="button"
                  onClick={() => setActiveGuide(activeGuide + 1)}
                  style={{
                    display: "flex", flexDirection: "column", gap: "4px",
                    padding: "16px 20px", borderRadius: "12px",
                    border: `1px solid ${colors.gray200}`, background: colors.white,
                    cursor: "pointer",
                    textAlign: isNarrow ? "left" : "right",
                    flex: isNarrow ? "none" : 1,
                    maxWidth: isNarrow ? "100%" : "48%",
                    width: isNarrow ? "100%" : undefined,
                    marginLeft: isNarrow ? 0 : "auto",
                    minHeight: isNarrow ? 48 : undefined,
                  }}
                >
                  <span style={{
                    fontFamily: "'Source Sans 3', sans-serif", fontSize: "11px",
                    fontWeight: 700, color: colors.gray400, textTransform: "uppercase", letterSpacing: "1px",
                  }}>Next guide →</span>
                  <span style={{
                    fontFamily: "'Source Sans 3', sans-serif", fontSize: "14px",
                    fontWeight: 700, color: colors.navy,
                  }}>{guides[activeGuide + 1].title}</span>
                </button>
              )}
            </div>
          </article>
        </div>
      </section>
    </div>
    </NarrowLayoutContext.Provider>
  );
}