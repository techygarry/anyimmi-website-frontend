import Link from 'next/link';
import { V, MAX } from './tokens';

export function VariantFooter() {
  return (
    <footer
      style={{
        background: V.bgDeep,
        padding: '64px 32px 48px',
      }}
    >
      <div style={{ maxWidth: MAX, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) auto',
            gap: 40,
            alignItems: 'center',
            borderBottom: `1px solid ${V.divider}`,
            paddingBottom: 32,
          }}
        >
          <div
            style={{
              fontFamily: V.serif,
              fontWeight: 700,
              fontSize: 28,
              color: V.cream,
              letterSpacing: '-0.02em',
            }}
          >
            AnyImmi<span style={{ color: V.gold }}>.</span>
          </div>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            <Link href="/about" style={linkStyle}>About</Link>
            <Link href="/pricing" style={linkStyle}>Pricing</Link>
            <Link href="/contact" style={linkStyle}>Contact</Link>
            <Link href="/faq" style={linkStyle}>FAQ</Link>
            <Link href="/privacy" style={linkStyle}>Privacy</Link>
            <Link href="/terms" style={linkStyle}>Terms</Link>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
            marginTop: 32,
            fontFamily: V.mono,
            fontSize: 11,
            letterSpacing: '0.12em',
            color: V.muted,
            textTransform: 'uppercase',
          }}
        >
          <div>© 2026 ANYIMMI · BUILT FOR CANADIAN RCICs</div>
          <div>🇨🇦 CANADA DAY LAUNCH · JULY 1, 2026</div>
        </div>
      </div>
    </footer>
  );
}

const linkStyle: React.CSSProperties = {
  fontFamily: V.sans,
  fontSize: 14,
  color: V.mutedSoft,
  textDecoration: 'none',
};
