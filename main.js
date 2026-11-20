// Theme toggle: light by default; remembers a visitor's choice of dark.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  function isDark() {
    var t = root.getAttribute('data-theme');
    return t === 'dark';
  }
  btn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

// Email is assembled on click so simple scrapers don't pick it up.
(function () {
  var user = 'phongngo0511';
  var domain = 'gmail.com';
  function reveal(el) {
    var addr = user + '@' + domain;
    var a = document.createElement('a');
    a.href = 'mailto:' + addr;
    a.innerHTML = '<svg class="ic"><use href="#i-mail"/></svg>';
    a.appendChild(document.createTextNode(addr));
    a.className = el.className;
    el.replaceWith(a);
  }
  ['revealEmail', 'revealEmail2'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('click', function () { reveal(el); });
  });
})();

document.getElementById('year').textContent = new Date().getFullYear();
