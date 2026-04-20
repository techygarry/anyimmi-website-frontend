import Link from 'next/link';
import { Lock } from 'lucide-react';

/**
 * Gold-locked tease for THE MILLION DOLLAR VAULT bonus pack.
 * Server component — renders on the home page (hero of categories grid)
 * and at the top of the categories page.
 *
 * Visual: gold gradient border, large lock icon, hover shimmer. Links to
 * the FOUNDER tier section on the pricing page.
 */
export default function MillionDollarVaultCard() {
  return (
    <div className="mdv-card-wrap">
      <Link href="/pricing#founder" className="mdv-card" aria-label="Unlock the Million Dollar Vault at THE FOUNDER tier">
        <div className="mdv-card__inner">
          <div className="mdv-card__icon">
            <Lock size={48} strokeWidth={2} />
          </div>
          <h3 className="mdv-card__title">The Million Dollar Vault</h3>
          <p className="mdv-card__subtitle">
            12 assets that took us 8 years and $1M+ to figure out
          </p>
          <p className="mdv-card__body">
            Locked. You only get them at THE FOUNDER tier.
          </p>
          <div className="mdv-card__chip">$2,997 value</div>
          <div className="mdv-card__cta">
            Unlock at THE FOUNDER <span aria-hidden>→</span>
          </div>
        </div>
        <span className="mdv-card__shimmer" aria-hidden />
      </Link>

      {/* Scoped styles (no global CSS file). */}
      <style>{`
        .mdv-card-wrap {
          width: 100%;
          padding: 4px;
          border-radius: 24px;
          background: linear-gradient(135deg, #D4AF37, #FFD700, #B8860B);
          box-shadow: 0 0 0 1px rgba(212, 175, 55, 0.25), 0 20px 60px -20px rgba(184, 134, 11, 0.55), 0 8px 30px -10px rgba(212, 175, 55, 0.45);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .mdv-card-wrap:hover {
          box-shadow: 0 0 0 1px rgba(212, 175, 55, 0.4), 0 28px 70px -18px rgba(184, 134, 11, 0.7), 0 12px 40px -8px rgba(255, 215, 0, 0.55);
          transform: translateY(-2px);
        }
        .mdv-card {
          position: relative;
          display: block;
          border-radius: 20px;
          background: radial-gradient(ellipse at top left, #1a1305 0%, #0b0804 55%, #000 100%);
          color: #f5e9c6;
          text-decoration: none;
          overflow: hidden;
        }
        .mdv-card__inner {
          position: relative;
          z-index: 2;
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }
        .mdv-card__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 88px;
          height: 88px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(255, 215, 0, 0.08));
          border: 1px solid rgba(212, 175, 55, 0.35);
          color: #FFD700;
          margin-bottom: 8px;
        }
        .mdv-card__title {
          font-size: 36px;
          font-weight: 800;
          margin: 0;
          line-height: 1.1;
          background: linear-gradient(135deg, #FFD700 0%, #D4AF37 55%, #B8860B 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.5px;
        }
        .mdv-card__subtitle {
          font-size: 18px;
          color: #e8d9a8;
          margin: 0;
          font-weight: 500;
          max-width: 640px;
          line-height: 1.4;
        }
        .mdv-card__body {
          font-size: 15px;
          color: rgba(245, 233, 198, 0.7);
          margin: 0;
          max-width: 540px;
          line-height: 1.5;
        }
        .mdv-card__chip {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 999px;
          border: 1px solid rgba(212, 175, 55, 0.5);
          background: rgba(212, 175, 55, 0.12);
          color: #FFD700;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-top: 4px;
        }
        .mdv-card__cta {
          margin-top: 12px;
          padding: 12px 24px;
          border-radius: 10px;
          background: linear-gradient(135deg, #D4AF37, #FFD700, #B8860B);
          color: #1a1305;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.3px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: filter 0.25s ease, transform 0.25s ease;
        }
        .mdv-card:hover .mdv-card__cta {
          filter: brightness(1.08);
          transform: translateX(2px);
        }
        .mdv-card__shimmer {
          position: absolute;
          top: 0;
          left: -60%;
          width: 40%;
          height: 100%;
          background: linear-gradient(
            100deg,
            transparent 0%,
            rgba(255, 215, 0, 0) 30%,
            rgba(255, 215, 0, 0.18) 50%,
            rgba(255, 215, 0, 0) 70%,
            transparent 100%
          );
          transform: skewX(-12deg);
          pointer-events: none;
          transition: left 0.9s ease;
        }
        .mdv-card:hover .mdv-card__shimmer {
          left: 120%;
        }
        @media (max-width: 768px) {
          .mdv-card__inner { padding: 32px 24px; }
          .mdv-card__title { font-size: 28px; }
          .mdv-card__subtitle { font-size: 16px; }
          .mdv-card__icon { width: 72px; height: 72px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .mdv-card-wrap, .mdv-card__cta, .mdv-card__shimmer { transition: none; }
          .mdv-card:hover .mdv-card__shimmer { left: -60%; }
        }
      `}</style>
    </div>
  );
}
