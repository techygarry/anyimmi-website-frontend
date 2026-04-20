'use client';
import { useState, useEffect } from 'react';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('anyimmi_exit_shown')) return;

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        sessionStorage.setItem('anyimmi_exit_shown', '1');
        setShow(true);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    }

    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="anyimmi-exit-overlay" onClick={() => setShow(false)}>
      <div className="anyimmi-exit-popup" onClick={(e) => e.stopPropagation()}>
        <button className="anyimmi-exit-popup__close" onClick={() => setShow(false)} aria-label="Close">
          &times;
        </button>
        <h3 className="anyimmi-exit-popup__title">Wait! Before You Go...</h3>
        <p className="anyimmi-exit-popup__text">
          Get <strong>10% off</strong> your AnyImmi bundle! Enter your email and we&apos;ll send
          you an exclusive discount code.
        </p>
        <form className="anyimmi-exit-popup__form" onSubmit={(e) => { e.preventDefault(); setShow(false); }}>
          <input
            type="email"
            className="anyimmi-exit-popup__input"
            placeholder="Enter your email address"
            required
          />
          <button type="submit" className="anyimmi-exit-popup__btn">Send My Discount</button>
        </form>
        <p className="anyimmi-exit-popup__note">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
