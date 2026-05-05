/* Shared nav + waitlist modal behavior for all ImmiHub pages */
(function () {
  'use strict';

  // ── Nav scroll state
  var nav = document.getElementById('siteNav');
  if (nav) {
    var setScrolled = function () {
      if (window.scrollY > 20) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    setScrolled();
    window.addEventListener('scroll', setScrolled, { passive: true });
  }

  // ── Mobile drawer toggle
  var btn = document.getElementById('mobileMenuBtn');
  var drawer = document.getElementById('mobileDrawer');
  if (btn && drawer) {
    btn.addEventListener('click', function () {
      drawer.classList.toggle('open');
      var open = drawer.classList.contains('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    drawer.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        drawer.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── Highlight active nav link based on filename
  var path = window.location.pathname.split('/').pop() || 'ImmiHub.html';
  document.querySelectorAll('.nav-links a, .nav-mobile-drawer a').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    // Exact filename match (no anchor) or root match
    if (
      (href === path) ||
      (href.indexOf('#') === -1 && href === path) ||
      (path === '' && href === 'ImmiHub.html')
    ) {
      a.classList.add('active');
    }
  });

  // ── Waitlist modal
  var modal = document.getElementById('waitlistModal');
  var openers = document.querySelectorAll('[data-waitlist-open]');
  var closers = document.querySelectorAll('[data-waitlist-close]');
  var toast = document.getElementById('waitlistToast');

  function openModal() {
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openers.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });
  closers.forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (e.target === el || el.dataset.waitlistClose === 'force') closeModal();
    });
  });
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    var form = modal.querySelector('form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        closeModal();
        if (toast) {
          toast.classList.add('show');
          setTimeout(function () { toast.classList.remove('show'); }, 4000);
        }
        form.reset();
      });
    }
  }
})();
