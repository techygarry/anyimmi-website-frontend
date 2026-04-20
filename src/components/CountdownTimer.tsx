'use client';
import { useState, useEffect } from 'react';
import { getTargetTime } from '@/lib/countdown';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = getTargetTime();

    function update() {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
      if (diff <= 0) {
        localStorage.removeItem('anyimmi_countdown_target');
      }
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="anyimmi-countdown wow fadeInUp" data-wow-delay="0.35s">
      <span className="anyimmi-countdown__label">Limited Time Offer Ends In:</span>
      <div className="anyimmi-countdown__boxes">
        <div className="anyimmi-countdown__box">
          <span className="anyimmi-countdown__num">{pad(timeLeft.hours)}</span>
          <span className="anyimmi-countdown__unit">Hours</span>
        </div>
        <span className="anyimmi-countdown__sep">:</span>
        <div className="anyimmi-countdown__box">
          <span className="anyimmi-countdown__num">{pad(timeLeft.minutes)}</span>
          <span className="anyimmi-countdown__unit">Mins</span>
        </div>
        <span className="anyimmi-countdown__sep">:</span>
        <div className="anyimmi-countdown__box">
          <span className="anyimmi-countdown__num">{pad(timeLeft.seconds)}</span>
          <span className="anyimmi-countdown__unit">Secs</span>
        </div>
      </div>
    </div>
  );
}
