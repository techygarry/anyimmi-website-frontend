/***************************************************
==================== JS INDEX ======================
01. Data Background Set
02. Sticky Header
03. GSAP Plugins Register
04. Smooth Scroll
05. Fade Animation
06. Preloader
07. Side Info Toggle
08. Mean Menu Init
09. Video Popup
10. Text Invert Scroll Effect
11. Smooth Anchor Scroll
12. Nice Select Init
****************************************************/

(function ($) {
    "use strict";

    var windowOn = $(window);
    let mm = gsap.matchMedia();

    /* === Data Css Js (index 01) === */
    $("[data-background]").each(function () {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    /* === sticky header Js (index 02) === */
    function pinned_header() {
        var lastScrollTop = 0;

        windowOn.on('scroll', function () {
            var currentScrollTop = $(this).scrollTop();
            if (currentScrollTop > lastScrollTop) {
                $('.header-sticky').removeClass('sticky');
                $('.header-sticky').addClass('transformed');
            } else if ($(this).scrollTop() <= 500) {
                $('.header-sticky').removeClass('sticky');
                $('.header-sticky').removeClass('transformed');
            } else {
                // Scrolling up, remove the class
                $('.header-sticky').addClass('sticky');
                $('.header-sticky').removeClass('transformed');
            }
            lastScrollTop = currentScrollTop;
        });
    }
    pinned_header();

    /* === Register GSAP Plugins Js (index 02) === */
    gsap.registerPlugin(ScrollTrigger, CustomEase);

    /* === GSAP Fade Animation Js (index 04) === */
    let fadeArray_items = document.querySelectorAll(".fade-anim");
    if (fadeArray_items.length > 0) {
        const fadeArray = gsap.utils.toArray(".fade-anim")
        fadeArray.forEach((item, i) => {
            var fade_direction = "bottom"
            var onscroll_value = 1
            var duration_value = 0.7
            var fade_offset = 30
            var delay_value = 0.1
            var ease_value = "power2.out"
            if (item.getAttribute("data-offset")) {
                fade_offset = item.getAttribute("data-offset");
            }
            if (item.getAttribute("data-duration")) {
                duration_value = item.getAttribute("data-duration");
            }
            if (item.getAttribute("data-direction")) {
                fade_direction = item.getAttribute("data-direction");
            }
            if (item.getAttribute("data-on-scroll")) {
                onscroll_value = item.getAttribute("data-on-scroll");
            }
            if (item.getAttribute("data-delay")) {
                delay_value = item.getAttribute("data-delay");
            }
            if (item.getAttribute("data-ease")) {
                ease_value = item.getAttribute("data-ease");
            }
            let animation_settings = {
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
            }
            if (fade_direction == "top") {
                animation_settings['y'] = -fade_offset
            }
            if (fade_direction == "left") {
                animation_settings['x'] = -fade_offset;
            }
            if (fade_direction == "bottom") {
                animation_settings['y'] = fade_offset;
            }
            if (fade_direction == "right") {
                animation_settings['x'] = fade_offset;
            }
            if (onscroll_value == 1) {
                animation_settings['scrollTrigger'] = {
                    trigger: item,
                    start: 'top 85%',
                }
            }
            gsap.from(item, animation_settings);
        })
    }

/* === Preloader Animation  Js (index 05) === */
if (document.querySelectorAll(".loader-wrap").length > 0) {
  $(document).ready(function () {

    // Preloader timing + fadeout (fast)
    setTimeout(function () {
      $('#container').addClass('loaded');
    }, 300);

    // === Odometer counter trigger ===
    $('.odometer').waypoint(function (direction) {
      if (direction === 'down') {
        let countNumber = $(this.element).attr("data-count");
        $(this.element).html(countNumber);
      }
    }, { offset: '80%' });

    // === Fast preloader animation ===
    const svg = document.getElementById("svg");
    const tl = gsap.timeline();

    tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
      delay: 0.4,
      duration: 0.3,
      y: -60,
      opacity: 0,
    });
    tl.to(".loader-wrap", {
      duration: 0.4,
      opacity: 0,
      ease: "power2.out",
      onComplete: function () {
        $('.loader-wrap').css({ display: 'none', zIndex: -1 });
        startTextAnimation();
      }
    });
  });

  // GSAP Text Animation (runs after preloader ends)
  function startTextAnimation() {
    if ($('.rr-title-anim-2').length) {
      gsap.registerPlugin(ScrollTrigger, SplitText);

      let staggerAmount = 0.03,
        translateXValue = 15,
        delayValue = 0.1,
        easeType = "power2.out",
        animatedTextElements = document.querySelectorAll('.rr-title-anim-2');

      animatedTextElements.forEach((element) => {
        let animationSplitText = new SplitText(element, { type: "chars, words" });
        gsap.from(animationSplitText.chars, {
          duration: 0.6,
          delay: delayValue,
          x: translateXValue,
          autoAlpha: 0,
          stagger: staggerAmount,
          ease: easeType,
          scrollTrigger: { trigger: element, start: "top 85%" },
        });
      });
    }
  }
}


    /* === Side Info  Js (index 06) === */
    $(".side-info-close,.offcanvas-overlay").on("click", function () {
        $(".side-info").removeClass("info-open");
        $(".offcanvas-overlay").removeClass("overlay-open");
    });
    $(".side-toggle").on("click", function () {
        $(".side-info").addClass("info-open");
        $(".offcanvas-overlay").addClass("overlay-open");
    });

    $(window).scroll(function () {
        if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
            $(".side-info").removeClass("info-open");
            $(".offcanvas-overlay").removeClass("overlay-open");
        }
    });

    /* === Mean menu activation  Js (index 07) === */
    $('.main-menu').meanmenu({
        meanScreenWidth: "1199",
        meanMenuContainer: '.mobile-menu',
        meanMenuCloseSize: '28px',
    });
    $('.main-menu-all').meanmenu({
        meanScreenWidth: "5000",
        meanMenuContainer: '.mobile-menu',
        meanMenuCloseSize: '28px',
    });

    /* === Magnific Video popup Js (index 08) === */
    if ($('.video-popup').length && 'magnificPopup' in jQuery) {
        $('.video-popup').magnificPopup({
            type: 'iframe',
        });
    }

    /* === Text Invert With Scroll Js (index 09) === */
    const split = new SplitText(".text-invert", { type: "lines" });
    split.lines.forEach((target) => {
        gsap.to(target, {
            backgroundPositionX: 0,
            ease: "none",
            scrollTrigger: {
                trigger: target,
                scrub: 1,
                start: 'top 85%',
                end: "bottom center",
            }
        });
    });



    /* === gsap nav Js (index 10) === */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth',
                });
            }
        });
    });

    /* === Nice Select Js (index 11) === */
    $("select").niceSelect();


    /* ========  main Js ======== */


})(jQuery);

