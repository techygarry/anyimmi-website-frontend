import { V, MAX } from './tokens';

const PRODUCTS = [
  {
    name: 'AI Portal',
    tagline: 'Four AI tools for RCICs. CRS calculator, NOC finder, Express Entry draw tracker, SOP generator.',
    urlEnv: 'NEXT_PUBLIC_PRODUCT_URL_AI_TOOLS',
    fallback: 'http://localhost:3003',
  },
  {
    name: 'CRM',
    tagline: 'Case management built for Canadian immigration. Intake to landing — all in one stream.',
    urlEnv: 'NEXT_PUBLIC_PRODUCT_URL_CRM',
    fallback: 'http://localhost:3002',
  },
  {
    name: 'DOSSIAR',
    tagline: 'Client-facing document portal. Upload, sign, track. CICC-audit-ready.',
    urlEnv: 'NEXT_PUBLIC_PRODUCT_URL_DOSSIAR',
    fallback: 'http://localhost:3004',
  },
] as const;

function envUrl(name: string, fallback: string): string {
  // Only NEXT_PUBLIC_* env vars are available at build time on the server component.
  // Read them off process.env directly.
  return (process.env[name] as string | undefined) || fallback;
}

export function UpcomingProducts() {
  return (
    <section
      style={{
        background: V.bgDeep,
        padding: '140px 32px',
        borderBottom: `1px solid ${V.divider}`,
      }}
    >
      <div style={{ maxWidth: MAX, margin: '0 auto' }}>
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
          THE EXPANSION
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
            maxWidth: 900,
          }}
        >
          Three more products coming to the club.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
          }}
        >
          {PRODUCTS.map((p) => {
            const href = envUrl(p.urlEnv, p.fallback);
            return (
              <article
                key={p.name}
                style={{
                  background: V.card,
                  border: `1px solid ${V.cardBorder}`,
                  borderRadius: 12,
                  padding: 36,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                }}
              >
                <div
                  style={{
                    fontFamily: V.mono,
                    fontSize: 10,
                    letterSpacing: '0.2em',
                    color: V.gold,
                    background: 'rgba(212,175,55,0.1)',
                    padding: '4px 10px',
                    borderRadius: 2,
                    textTransform: 'uppercase',
                    alignSelf: 'flex-start',
                    fontWeight: 600,
                  }}
                >
                  90 days free with THE FOUNDER
                </div>
                <h3
                  style={{
                    fontFamily: V.serif,
                    fontWeight: 600,
                    fontSize: 36,
                    color: V.cream,
                    margin: 0,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    fontFamily: V.sans,
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: V.mutedSoft,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {p.tagline}
                </p>
                <a
                  href={href}
                  style={{
                    fontFamily: V.mono,
                    fontSize: 12,
                    letterSpacing: '0.15em',
                    color: V.gold,
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    borderBottom: `1px solid ${V.gold}`,
                    paddingBottom: 3,
                    alignSelf: 'flex-start',
                  }}
                >
                  Visit the site →
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
