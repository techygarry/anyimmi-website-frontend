'use client';
import { useState, useEffect } from 'react';
import { getTargetTime } from '@/lib/countdown';
import CheckoutLink from './CheckoutLink';

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = getTargetTime();

    function updateCountdown() {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (dismissed || !visible) return null;

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="anyimmi-sticky-cta">
      <div className="anyimmi-sticky-cta__inner">
        <span className="anyimmi-sticky-cta__text">
          <strong>Get the AnyImmi Bundle</strong> — Starting at just $97
        </span>
        {mounted && (
          <span className="anyimmi-sticky-cta__timer">
            {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
          </span>
        )}
        <CheckoutLink className="anyimmi-sticky-cta__btn">Get Instant Access</CheckoutLink>
        <button
          className="anyimmi-sticky-cta__close"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
