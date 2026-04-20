import Link from 'next/link';
import { V, MAX } from './tokens';

export function VariantNav() {
  return (
    <nav
      style={{
        background: V.bg,
        borderBottom: `1px solid ${V.divider}`,
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        style={{
          maxWidth: MAX,
          margin: '0 auto',
          padding: '20px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/variant"
          style={{
            fontFamily: V.serif,
            fontWeight: 700,
            fontSize: 26,
            color: V.cream,
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          AnyImmi
          <span style={{ color: V.gold, marginLeft: 4 }}>.</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <Link href="#arsenal" style={navLinkStyle}>Arsenal</Link>
          <Link href="#pricing" style={navLinkStyle}>Pricing</Link>
          <Link href="#members" style={navLinkStyle}>Members</Link>
          <Link href="#login" style={navLinkStyle}>Log in</Link>
          <Link
            href="#pricing"
            style={{
              background: V.gold,
              color: V.bg,
              padding: '10px 20px',
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.04em',
              textDecoration: 'none',
              fontFamily: V.sans,
            }}
          >
            ENTER THE VAULT
          </Link>
        </div>
      </div>
    </nav>
  );
}

const navLinkStyle: React.CSSProperties = {
  color: V.cream,
  fontFamily: V.sans,
  fontSize: 14,
  fontWeight: 500,
  textDecoration: 'none',
  opacity: 0.8,
};
