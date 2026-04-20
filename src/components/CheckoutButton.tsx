'use client';
import { useState } from 'react';
import { bundleCheckout } from '@/lib/api';

interface CheckoutButtonProps {
  tier: string;
  label: string;
  className?: string;
}

export default function CheckoutButton({ tier, label, className }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout(e: React.MouseEvent) {
    e.preventDefault();
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
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={className}
      style={{ border: 'none', cursor: loading ? 'not-allowed' : 'pointer' }}
    >
      {loading ? 'Redirecting to checkout…' : label}
    </button>
  );
}
