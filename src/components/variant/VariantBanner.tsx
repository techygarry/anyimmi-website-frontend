import { V } from './tokens';

export function VariantBanner() {
  return (
    <div
      style={{
        background: V.bgDeep,
        borderBottom: `1px solid ${V.divider}`,
        color: V.gold,
        textAlign: 'center',
        padding: '10px 16px',
        fontFamily: V.mono,
        fontSize: 12,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}
    >
      🇨🇦 An exclusive arsenal for Canadian immigration consultants. Membership closes July 1, 2026.
    </div>
  );
}
