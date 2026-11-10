/* Slushpaw theme JS: progressive enhancement only. The site is fully usable without it. */
(function () {
  'use strict';

  // Close the mobile navigation with Escape and when a link is chosen.
  var nav = document.querySelector('.mobile-nav');
  if (nav) {
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.hasAttribute('open')) {
        nav.removeAttribute('open');
        var toggle = nav.querySelector('summary');
        if (toggle) { toggle.focus(); }
      }
    });
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) { nav.removeAttribute('open'); }
    });
  }
})();
