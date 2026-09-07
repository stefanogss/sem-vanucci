(function () {
  'use strict';

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Schedule tabs (Manhã / Tarde)
  var tabButtons = document.querySelectorAll('.tab-btn');
  var tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-tab');

      tabButtons.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');

      tabPanels.forEach(function (panel) {
        panel.classList.toggle('is-active', panel.id === 'tab-' + target);
      });
    });
  });

  // Accordion toggles for workshop modules
  document.querySelectorAll('.accordion-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var content = toggle.nextElementSibling;
      var isOpen = content.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.textContent = isOpen ? 'Ocultar tópicos' : 'Ver tópicos abordados';
    });
  });
})();
