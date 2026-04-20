'use client';
import { useState } from 'react';
import { bundleCheckout } from '@/lib/api';

interface CheckoutLinkProps {
  tier?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  'data-wow-delay'?: string;
}

export default function CheckoutLink({
  tier = 'starter',
  className,
  children,
  style,
  ...rest
}: CheckoutLinkProps) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout(e: React.MouseEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const url = await bundleCheckout(tier);
      window.location.href = url;
    } catch {
      alert('Checkout failed. Please try again.');
      setLoading(false);
    }
  }

  return (
    <a
      href="#"
      onClick={handleCheckout}
      className={className}
      style={{
        opacity: loading ? 0.7 : 1,
        pointerEvents: loading ? 'none' : 'auto',
        cursor: loading ? 'wait' : 'pointer',
        ...style,
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
