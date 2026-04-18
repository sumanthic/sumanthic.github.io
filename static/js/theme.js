(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function getTheme() {
    return root.dataset.theme || (prefersDark.matches ? 'dark' : 'light');
  }

  function updateIcon(theme) {
    toggle.textContent = theme === 'dark' ? '☀' : '☾';
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  updateIcon(getTheme());

  toggle.addEventListener('click', function () {
    var next = getTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    updateIcon(next);
  });
})();
