// Loads vendor scripts sequentially to guarantee dependency order.
// common.js and main.js depend on jQuery plugins (meanmenu, magnificPopup,
// waypoints, niceSelect, etc.) which must be available before they execute.
(function () {
  var scripts = [
    '/assets/vandor/bootstrap/bootstrap.bundle.min.js',
    '/assets/vandor/gsap/gsap.min.js',
    '/assets/vandor/gsap/ScrollTrigger.min.js',
    '/assets/vandor/gsap/SplitText.min.js',
    '/assets/vandor/gsap/SplitType.js',
    '/assets/vandor/gsap/customEase.js',
    '/assets/vandor/swiper/swiper-bundle.min.js',
    '/assets/vandor/wow/wow.min.js',
    '/assets/vandor/popup/jquery.magnific-popup.min.js',
    '/assets/vandor/odometer/odometer.min.js',
    '/assets/vandor/odometer/waypoints.min.js',
    '/assets/vandor/menu/jquery.meanmenu.min.js',
    '/assets/vandor/nice-select/nice-select.js',
    '/assets/vandor/backtop/backToTop.js',
    // Init scripts — must come last
    '/assets/vandor/common-js/common.js',
    '/assets/js/main.js',
  ];

  var i = 0;
  function loadNext() {
    if (i >= scripts.length) return;
    var s = document.createElement('script');
    s.src = scripts[i];
    s.onload = function () {
      i++;
      loadNext();
    };
    s.onerror = function () {
      console.warn('[vendor-loader] Failed to load: ' + scripts[i]);
      i++;
      loadNext();
    };
    document.body.appendChild(s);
  }
  loadNext();
})();
