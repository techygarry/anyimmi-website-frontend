import { V, MAX } from './tokens';

export function OriginStory() {
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
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)',
            gap: 80,
            alignItems: 'center',
          }}
        >
          <div
            aria-label="Founder portrait"
            style={{
              aspectRatio: '3 / 4',
              background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)',
              borderRadius: 8,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.45)',
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(circle at 30% 20%, rgba(212,175,55,0.22) 0%, rgba(212,175,55,0) 55%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 32,
                left: 32,
                right: 32,
                fontFamily: V.mono,
                fontSize: 11,
                letterSpacing: '0.2em',
                color: V.gold,
                textTransform: 'uppercase',
              }}
            >
              The Founder · RCIC-IRB · Toronto
            </div>
          </div>
          <div>
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
              THE ORIGIN
            </div>
            <h2
              style={{
                fontFamily: V.serif,
                fontWeight: 600,
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: V.cream,
                margin: 0,
                marginBottom: 32,
              }}
            >
              8 years ago, I was you.
            </h2>
            <div
              style={{
                fontFamily: V.serif,
                fontSize: 20,
                lineHeight: 1.65,
                color: V.cream,
                fontWeight: 500,
              }}
            >
              <p style={{ margin: '0 0 20px' }}>
                Canva trial expired. $40 website. Zero idea how to market legally
                under CICC. Watching ghost consultants rack up bookings on Instagram
                while I waited for referrals that didn&apos;t come.
              </p>
              <p style={{ margin: '0 0 20px' }}>
                So I stopped trying to be a designer. I built the firm one template,
                one SOP, one email sequence at a time — 305 of them over eight years.
                Every piece tested in real practice. Every piece CICC-aware.
              </p>
              <p style={{ margin: '0 0 32px', color: V.mutedSoft }}>
                The goldmine of Canadian immigration assets was sitting on my hard
                drive. It belongs to every RCIC who&apos;s tired of starting over.
              </p>
            </div>
            <div
              style={{
                fontFamily: V.serif,
                fontStyle: 'italic',
                fontSize: 18,
                color: V.gold,
                borderTop: `1px solid ${V.divider}`,
                paddingTop: 24,
              }}
            >
              — The Founder, RCIC-IRB, Toronto
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
