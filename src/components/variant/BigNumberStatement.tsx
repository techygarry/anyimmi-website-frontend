import { V, MAX } from './tokens';

export function BigNumberStatement() {
  return (
    <section
      style={{
        background: V.bgDeep,
        borderTop: `1px solid ${V.divider}`,
        borderBottom: `1px solid ${V.divider}`,
        padding: '120px 32px',
      }}
    >
      <div style={{ maxWidth: MAX, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
            gap: 64,
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: V.mono,
                fontSize: 11,
                letterSpacing: '0.2em',
                color: V.gold,
                textTransform: 'uppercase',
                marginBottom: 24,
              }}
            >
              THE MATH OF THE THING
            </div>
            <div
              style={{
                fontFamily: V.serif,
                fontWeight: 700,
                fontSize: 'clamp(96px, 14vw, 196px)',
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                color: V.gold,
              }}
            >
              $24,812
            </div>
          </div>
          <div>
            <p
              style={{
                fontFamily: V.serif,
                fontWeight: 500,
                fontSize: 'clamp(24px, 3vw, 36px)',
                lineHeight: 1.35,
                color: V.cream,
                margin: 0,
                marginBottom: 32,
              }}
            >
              is what an RCIC would spend assembling this vault asset by asset. Our members pay{' '}
              <span style={{ color: V.gold, fontStyle: 'italic' }}>$197.</span>
            </p>
            <div
              style={{
                borderTop: `1px solid ${V.divider}`,
                paddingTop: 32,
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 24,
              }}
            >
              {[
                { n: '305', l: 'Assets' },
                { n: '27', l: 'Categories' },
                { n: '8 yrs', l: 'Of practice' },
                { n: '500', l: 'Founder seats' },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    style={{
                      fontFamily: V.serif,
                      fontSize: 32,
                      fontWeight: 600,
                      color: V.cream,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      fontFamily: V.mono,
                      fontSize: 11,
                      letterSpacing: '0.15em',
                      color: V.muted,
                      textTransform: 'uppercase',
                      marginTop: 6,
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
