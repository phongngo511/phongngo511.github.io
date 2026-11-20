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
  function copy(text, btn) {
    function done() { btn.textContent = 'Copied ✓'; btn.classList.add('done'); setTimeout(function () { btn.textContent = 'Copy'; btn.classList.remove('done'); }, 1800); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallback(); });
    } else { fallback(); }
    function fallback() {
      var ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (e) {} document.body.removeChild(ta);
    }
  }
  function reveal(el) {
    var addr = user + '@' + domain;
    var wrap = document.createElement('span');
    wrap.className = 'email-wrap';
    var a = document.createElement('a');
    a.href = 'mailto:' + addr;
    a.innerHTML = '<svg class="ic"><use href="#i-mail"/></svg>';
    a.appendChild(document.createTextNode(addr));
    a.className = el.className;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'copy-btn'; b.textContent = 'Copy';
    b.setAttribute('aria-label', 'Copy email address');
    b.addEventListener('click', function () { copy(addr, b); });
    wrap.appendChild(a); wrap.appendChild(b);
    el.replaceWith(wrap);
    copy(addr, b);
  }
  ['revealEmail', 'revealEmail2'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('click', function () { reveal(el); });
  });
})();

document.getElementById('year').textContent = new Date().getFullYear();
