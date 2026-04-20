import { V, MAX } from './tokens';

const FAQ = [
  {
    q: 'Is this really another template bundle?',
    a: 'No. Templates are design files. The Arsenal is 305 pieces spanning templates, SOPs, scripts, playbooks, calculators, CICC compliance docs, funnel systems, and training kits — every one tested in a real practice for eight years.',
  },
  {
    q: 'I already pay for Canva. Why do I need this?',
    a: 'Canva is a blank page. The Arsenal fills it with 305 CICC-aware, immigration-specific pieces the night you buy it. Canva costs you 40 hours per template; this costs you none.',
  },
  {
    q: 'What makes the Million Dollar Vault different?',
    a: 'It\'s the 16 pieces we only used inside $1M+ firms — firm-scaling playbooks, retention engines, referral flywheels. Founder-tier only. Never unbundled.',
  },
  {
    q: 'Is this CICC-compliant?',
    a: 'Every compliance-adjacent asset (retainer templates, disclosures, LOE formats, intake scripts) has been reviewed against CICC\'s current code of professional conduct. You still need to apply judgment; we give you the starting line.',
  },
  {
    q: 'What happens on July 1, 2026?',
    a: 'The Founder window closes. Prices rise ($197 → $297, $397 → $597, $697 → $1,497). Pre-launch bonuses go away. Trial drops from 90 days to 30.',
  },
  {
    q: 'What if I hate it?',
    a: 'Email us within 30 days. Full refund. No form. No call. Just an email.',
  },
];

export function VariantFaq() {
  return (
    <section
      style={{
        background: V.bgDeep,
        padding: '140px 32px',
        borderBottom: `1px solid ${V.divider}`,
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div
          style={{
            fontFamily: V.mono,
            fontSize: 11,
            letterSpacing: '0.22em',
            color: V.gold,
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          FREQUENTLY ASKED
        </div>
        <h2
          style={{
            fontFamily: V.serif,
            fontWeight: 600,
            fontSize: 'clamp(40px, 6vw, 64px)',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            color: V.cream,
            margin: 0,
            marginBottom: 72,
          }}
        >
          What members ask before joining.
        </h2>
        <div>
          {FAQ.map((item, i) => (
            <details
              key={i}
              style={{
                borderBottom: `1px solid ${V.divider}`,
                padding: '28px 0',
              }}
            >
              <summary
                style={{
                  fontFamily: V.serif,
                  fontSize: 22,
                  fontWeight: 500,
                  color: V.cream,
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 24,
                }}
              >
                {item.q}
                <span style={{ color: V.gold, fontFamily: V.mono, fontSize: 18 }}>+</span>
              </summary>
              <p
                style={{
                  fontFamily: V.sans,
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: V.mutedSoft,
                  marginTop: 20,
                  marginBottom: 0,
                  maxWidth: 760,
                }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
