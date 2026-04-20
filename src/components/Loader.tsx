'use client';
import { useEffect, useRef, useState } from 'react';

export default function Loader() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasLoaded = sessionStorage.getItem('anyimmi_preloader_done');
    if (hasLoaded) {
      setVisible(false);
    } else {
      setVisible(true);
      sessionStorage.setItem('anyimmi_preloader_done', '1');
      const timer = setTimeout(() => {
        setVisible(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!mounted || !visible) return null;

  return (
    <div className="loader-wrap" ref={wrapRef}>
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <div className="loader-wrap-heading">
        <div className="load-text">
          <span>A</span><span>n</span><span>y</span><span>I</span><span>m</span><span>m</span><span>i</span>
        </div>
      </div>
    </div>
  );
}
