'use client';

import { useEffect, useState } from 'react';

/**
 * Scroll-progress ring. The trexa-template vendor JS manipulates this
 * element's DOM (stroke-dashoffset, visibility toggles) on scroll, which
 * runs BEFORE React hydration completes and causes "server HTML doesn't
 * match client" errors.
 *
 * Fix: render nothing on the server and only mount after the client has
 * finished hydrating. The suppressHydrationWarning flag handles the
 * single-tick gap safely.
 */
export default function ProgressBar() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="progress-wrap" suppressHydrationWarning>
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
      </svg>
    </div>
  );
}
