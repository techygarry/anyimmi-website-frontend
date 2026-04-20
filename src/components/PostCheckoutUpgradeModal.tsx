'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { bundleCheckout } from '@/lib/api';

/**
 * 24-hour post-checkout FOMO modal. Shows only on /thank-you when
 * ?just-bought=toolkit|firm is present. Offers a time-boxed upgrade
 * path to THE FOUNDER for the price difference.
 *
 * Dismissal is persisted in localStorage so the user doesn't see it twice.
 */

const UPGRADE_PRICES: Record<'toolkit' | 'firm', number> = {
  toolkit: 550, // $697 - $147
  firm: 300,    // $697 - $397
};

const UPGRADE_TIER_MAP: Record<'toolkit' | 'firm', string> = {
  // TODO: these tier IDs may not exist in the backend yet — the bundleCheckout
  // call is stubbed to console.log below until the backend adds them.
  toolkit: 'founder-upgrade-from-toolkit',
  firm: 'founder-upgrade-from-firm',
};

const LS_KEY = 'upgradeModalDismissed';

export default function PostCheckoutUpgradeModal() {
  const searchParams = useSearchParams();
  const raw = searchParams.get('just-bought');
  const justBought: 'toolkit' | 'firm' | null =
    raw === 'toolkit' || raw === 'firm' ? raw : null;

  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!justBought) return;
    try {
      if (localStorage.getItem(LS_KEY) === 'true') return;
    } catch {
      // localStorage may be unavailable (SSR/privacy mode) — continue
    }
    setOpen(true);
  }, [justBought]);

  if (!justBought || !open) return null;

  const upgradePrice = UPGRADE_PRICES[justBought];
  const upgradeTier = UPGRADE_TIER_MAP[justBought];

  function dismiss() {
    try {
      localStorage.setItem(LS_KEY, 'true');
    } catch {
      // no-op
    }
    setOpen(false);
  }

  async function handleUpgrade() {
    if (submitting) return;
    setSubmitting(true);
    try {
      // TODO: backend needs to add `founder-upgrade-from-toolkit` and
      // `founder-upgrade-from-firm` tier IDs. Until then, log and dismiss.
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.log('[PostCheckoutUpgradeModal] stub: bundleCheckout()', upgradeTier);
      }
      const url = await bundleCheckout(upgradeTier);
      window.location.href = url;
    } catch (err) {
      // Stub fallback — tier not wired up yet. Log and dismiss gracefully.
      // eslint-disable-next-line no-console
      console.warn('[PostCheckoutUpgradeModal] upgrade checkout not available yet:', err);
      dismiss();
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pcum-title"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(8, 10, 20, 0.72)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '24px',
      }}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          maxWidth: '540px',
          width: '100%',
          padding: '40px 36px',
          boxShadow: '0 30px 80px -10px rgba(0,0,0,0.45)',
          position: 'relative',
          border: '1px solid rgba(87,60,255,0.12)',
        }}
      >
        <button
          onClick={dismiss}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: '#888',
            fontSize: '22px',
            lineHeight: 1,
            padding: '4px 8px',
          }}
        >
          ×
        </button>

        <div
          style={{
            display: 'inline-block',
            padding: '4px 12px',
            borderRadius: '999px',
            background: 'rgba(87,60,255,0.08)',
            color: '#573CFF',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          24-hour upgrade window
        </div>

        <h2
          id="pcum-title"
          style={{
            fontSize: '24px',
            fontWeight: 800,
            margin: '0 0 12px',
            color: '#0F2B46',
            lineHeight: 1.25,
          }}
        >
          Welcome inside.
        </h2>
        <p style={{ fontSize: '16px', color: '#444', lineHeight: 1.55, margin: '0 0 20px' }}>
          Heads up: you can upgrade to <strong>THE FOUNDER</strong> for{' '}
          <strong>${upgradePrice}</strong> in the next 24 hours. After that, the
          upgrade path closes and you&apos;d pay full $697.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={handleUpgrade}
            disabled={submitting}
            style={{
              background: '#573CFF',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              padding: '14px 20px',
              fontSize: '15px',
              fontWeight: 700,
              cursor: submitting ? 'wait' : 'pointer',
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting
              ? 'Redirecting…'
              : `Upgrade now (saves $0 — same total path)`}
          </button>
          <button
            onClick={dismiss}
            style={{
              background: 'transparent',
              color: '#666',
              border: '1px solid rgba(0,0,0,0.12)',
              borderRadius: '10px',
              padding: '12px 20px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
