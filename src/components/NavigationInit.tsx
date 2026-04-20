'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function NavigationInit() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    // Let common.js / main.js handle the very first page load
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    // Scroll to top immediately on navigation
    window.scrollTo(0, 0);

    // Use requestAnimationFrame for fastest possible re-init after DOM paint
    const timer = requestAnimationFrame(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      const $ = w.$ || w.jQuery;
      if (!$) return;

      // 1. Data backgrounds
      $("[data-background]").each(function (this: HTMLElement) {
        ($(this) as any).css(
          'background-image',
          'url( ' + ($(this) as any).attr('data-background') + ' )'
        );
      });
      $("[data-bg-src]").each(function (this: HTMLElement) {
        const src = ($(this) as any).attr('data-bg-src');
        ($(this) as any).css('background-image', 'url(' + src + ')');
        ($(this) as any).removeAttr('data-bg-src').addClass('background-image');
      });

      // 2. WOW.js
      try {
        if (w.WOW) new w.WOW({ animateClass: 'animated', offset: 50 }).init();
      } catch (_) {}

      // 3. Nice select
      try { $('select').niceSelect('destroy'); } catch (_) {}
      try { $('select').niceSelect(); } catch (_) {}

      // 4. Mean menu — disabled: using custom React mobile nav instead

      // 5. Side toggle — use namespaced events to avoid duplicates
      $('.side-info-close, .offcanvas-overlay').off('click.nav').on('click.nav', function () {
        $('.side-info').removeClass('info-open');
        $('.offcanvas-overlay').removeClass('overlay-open');
      });
      $('.side-toggle').off('click.nav').on('click.nav', function () {
        $('.side-info').addClass('info-open');
        $('.offcanvas-overlay').addClass('overlay-open');
      });

      // 6. GSAP — kill stale triggers, recreate ScrollSmoother, re-run animations
      if (w.gsap && w.ScrollTrigger) {
        w.ScrollTrigger.getAll().forEach((t: any) => t.kill());

w.ScrollTrigger.refresh();

        // Fade animations
        const fadeItems: HTMLElement[] = w.gsap.utils.toArray('.fade-anim');
        fadeItems.forEach((item) => {
          const dir = item.getAttribute('data-direction') || 'bottom';
          const dur = parseFloat(item.getAttribute('data-duration') || '0.7');
          const off = parseFloat(item.getAttribute('data-offset') || '30');
          const del = parseFloat(item.getAttribute('data-delay') || '0.1');
          const ease = item.getAttribute('data-ease') || 'power2.out';
          const onScroll = item.getAttribute('data-on-scroll') || '1';

          const settings: any = { opacity: 0, ease, duration: dur, delay: del };
          if (dir === 'top') settings.y = -off;
          else if (dir === 'left') settings.x = -off;
          else if (dir === 'bottom') settings.y = off;
          else if (dir === 'right') settings.x = off;
          if (onScroll === '1') settings.scrollTrigger = { trigger: item, start: 'top 85%' };
          w.gsap.from(item, settings);
        });

        // Text invert
        try {
          if (w.SplitText && document.querySelectorAll('.text-invert').length > 0) {
            const split = new w.SplitText('.text-invert', { type: 'lines' });
            split.lines.forEach((target: Element) => {
              w.gsap.to(target, {
                backgroundPositionX: 0,
                ease: 'none',
                scrollTrigger: { trigger: target, scrub: 1, start: 'top 85%', end: 'bottom center' },
              });
            });
          }
        } catch (_) {}

        // Title split-text animations
        try {
          if (w.SplitText && document.querySelectorAll('.rr-title-anim-2').length > 0) {
            document.querySelectorAll<HTMLElement>('.rr-title-anim-2').forEach((el) => {
              const splitText = new w.SplitText(el, { type: 'chars, words' });
              w.gsap.from(splitText.chars, {
                duration: 0.8,
                delay: 0.2,
                x: 15,
                autoAlpha: 0,
                stagger: 0.04,
                ease: 'power2.out',
                scrollTrigger: { trigger: el, start: 'top 85%' },
              });
            });
          }
        } catch (_) {}
      }

      // 7. Swipers — destroy stale instances, then re-init from main.js helper
      document.querySelectorAll<any>('.swiper').forEach((el) => {
        try { if (el.swiper) el.swiper.destroy(true, true); } catch (_) {}
      });
      try { if (w.initSwipers) w.initSwipers(); } catch (_) {}

      // 8. Video popup
      if ($.fn.magnificPopup) {
        try { if ($('.video-popup').length) $('.video-popup').magnificPopup({ type: 'iframe' }); } catch (_) {}
        try { if ($('.popup-video').length) $('.popup-video').magnificPopup({ type: 'iframe' }); } catch (_) {}
      }

      // 9. Odometer via ScrollTrigger
      if (w.gsap && w.ScrollTrigger) {
        const odometers = document.querySelectorAll<HTMLElement>('.odometer');
        odometers.forEach((el) => {
          const count = el.getAttribute('data-count');
          if (!count) return;
          w.ScrollTrigger.create({
            trigger: el,
            start: 'top 90%',
            once: true,
            onEnter: () => { el.innerHTML = count; },
          });
        });
      }
    });

    return () => cancelAnimationFrame(timer);
  }, [pathname]);

  return null;
}
