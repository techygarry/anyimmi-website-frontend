'use client';
import { useState, useEffect } from 'react';

const PROOF_DATA = [
  { name: 'Amandeep S.', city: 'Toronto', bundle: 'Agency' },
  { name: 'Maria L.', city: 'Vancouver', bundle: 'Professional' },
  { name: 'James W.', city: 'Calgary', bundle: 'Starter' },
  { name: 'Priya K.', city: 'Edmonton', bundle: 'Professional' },
  { name: 'Michael T.', city: 'Ottawa', bundle: 'Agency' },
  { name: 'Sarah C.', city: 'Montreal', bundle: 'Starter' },
  { name: 'Raj P.', city: 'Winnipeg', bundle: 'Professional' },
  { name: 'Emily R.', city: 'Halifax', bundle: 'Agency' },
];

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function SocialProofToast() {
  const [toast, setToast] = useState<{ name: string; city: string; bundle: string } | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let showTimeout: ReturnType<typeof setTimeout>;
    let hideTimeout: ReturnType<typeof setTimeout>;

    function showNext() {
      const item = PROOF_DATA[randomBetween(0, PROOF_DATA.length - 1)];
      setToast(item);
      setVisible(true);

      hideTimeout = setTimeout(() => {
        setVisible(false);
        showTimeout = setTimeout(showNext, randomBetween(8000, 15000));
      }, 4000);
    }

    showTimeout = setTimeout(showNext, randomBetween(10000, 20000));

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

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
        <span>just purchased the <strong>{toast.bundle}</strong> bundle</span>
      </div>
    </div>
  );
}
