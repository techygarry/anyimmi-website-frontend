'use client';
import { useState, useEffect } from 'react';
import { SOCIAL_PROOF_ROTATIONS, type SocialProofEntry } from '@/data/socialProof';

const SCROLL_THRESHOLD_PX = 800;
const VISIBLE_MS = 4000;           // fade in + stay ~4s
const GAP_MIN_MS = 60_000;         // 60s min gap between toasts
const GAP_MAX_MS = 90_000;         // 90s max gap

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const TIER_LABEL: Record<SocialProofEntry['tier'], string> = {
  TOOLKIT: 'THE TOOLKIT',
  FIRM: 'THE FIRM',
  FOUNDER: 'THE FOUNDER',
};

export default function SocialProofToast() {
  const [toast, setToast] = useState<SocialProofEntry | null>(null);
  const [visible, setVisible] = useState(false);
  const [armed, setArmed] = useState(false);

  // Arm the toast only once the user has scrolled past the threshold.
  useEffect(() => {
    if (armed) return;
    if (typeof window === 'undefined') return;

    function onScroll() {
      if (window.scrollY >= SCROLL_THRESHOLD_PX) {
        setArmed(true);
      }
    }

    onScroll(); // handle direct-deep-link case
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [armed]);

  // Rotation loop — only runs once armed.
  useEffect(() => {
    if (!armed) return;
    if (SOCIAL_PROOF_ROTATIONS.length === 0) return;

    let showTimeout: ReturnType<typeof setTimeout>;
    let hideTimeout: ReturnType<typeof setTimeout>;
    let index = randomBetween(0, SOCIAL_PROOF_ROTATIONS.length - 1);

    function showNext() {
      const item = SOCIAL_PROOF_ROTATIONS[index % SOCIAL_PROOF_ROTATIONS.length];
      index = (index + 1) % SOCIAL_PROOF_ROTATIONS.length;
      setToast(item);
      setVisible(true);

      hideTimeout = setTimeout(() => {
        setVisible(false);
        showTimeout = setTimeout(showNext, randomBetween(GAP_MIN_MS, GAP_MAX_MS));
      }, VISIBLE_MS);
    }

    // First toast: small initial delay after arming so it doesn't feel instant.
    showTimeout = setTimeout(showNext, randomBetween(3000, 6000));

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [armed]);

  if (!toast) return null;

  return (
    <div className={`anyimmi-toast ${visible ? 'anyimmi-toast--visible' : ''}`}>
      <div className="anyimmi-toast__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm-1 14.414L4.586 10l1.414-1.414L9 11.586l5-5L15.414 8l-6.414 6.414z" fill="#22c55e"/>
        </svg>
      </div>
      <div className="anyimmi-toast__content">
        <strong>{toast.name}</strong> from {toast.city}
        <br />
        <span>
          just got <strong>{TIER_LABEL[toast.tier]}</strong> · {toast.ago}
        </span>
      </div>
    </div>
  );
}
