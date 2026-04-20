import Link from 'next/link';
import { V, MAX } from './tokens';

export function ManifestoClose() {
  return (
    <section
      id="manifesto"
      style={{
        background: V.bg,
        padding: '160px 32px',
        borderBottom: `1px solid ${V.divider}`,
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          border: `1px solid ${V.gold}`,
          borderRadius: 12,
          padding: 'clamp(48px, 7vw, 96px)',
          background: V.bgDeep,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 360,
            height: 360,
            background: 'radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0) 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            fontFamily: V.mono,
            fontSize: 11,
            letterSpacing: '0.22em',
            color: V.gold,
            textTransform: 'uppercase',
            marginBottom: 32,
            position: 'relative',
          }}
        >
          THE MANIFESTO
        </div>
        <blockquote
          style={{
            fontFamily: V.serif,
            fontWeight: 500,
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: V.cream,
            margin: 0,
            marginBottom: 40,
            fontStyle: 'italic',
            position: 'relative',
          }}
        >
          &ldquo;Every RCIC deserves to launch from the same starting line as
          someone with 8 years of practice.&rdquo;
        </blockquote>
        <div
          style={{
            fontFamily: V.serif,
            fontSize: 18,
            color: V.gold,
            marginBottom: 56,
            position: 'relative',
          }}
        >
          — AnyImmi Founder
        </div>
        <div
          style={{
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
            position: 'relative',
          }}
        >
          <Link href="#pricing" style={primaryCta}>ENTER FOR $197</Link>
          <Link href="#pricing" style={secondaryCta}>CLAIM FIRM — $397</Link>
          <Link href="#pricing" style={{ ...secondaryCta, borderColor: V.gold, color: V.gold }}>
            LOCK FOUNDER — $697
          </Link>
        </div>
      </div>
    </section>
  );
}

const primaryCta: React.CSSProperties = {
  background: V.gold,
  color: V.bg,
  padding: '18px 28px',
  borderRadius: 4,
  fontFamily: V.sans,
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: '0.08em',
  textDecoration: 'none',
};

const secondaryCta: React.CSSProperties = {
  background: 'transparent',
  color: V.cream,
  padding: '18px 28px',
  borderRadius: 4,
  fontFamily: V.sans,
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: '0.08em',
  textDecoration: 'none',
  border: `1px solid ${V.divider}`,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _max = MAX;
