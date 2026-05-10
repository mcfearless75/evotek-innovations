/* ── Cookie Consent Banner ─────────────────────────────────── */
(function () {
  if (localStorage.getItem('evo-cookie-consent')) return;

  var banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML =
    '<p>We use cookies to analyse site traffic and improve your experience. ' +
    'See our <a href="privacy.html" style="color:var(--cyan)">Privacy & Cookie Policy</a>.</p>' +
    '<div style="display:flex;gap:10px;margin-top:10px;">' +
    '<button id="cookie-accept">Accept</button>' +
    '<button id="cookie-decline">Decline</button>' +
    '</div>';

  var s = banner.style;
  s.cssText = [
    'position:fixed', 'bottom:20px', 'left:50%', 'transform:translateX(-50%)',
    'background:#0D2040', 'border:1px solid rgba(0,229,255,0.2)',
    'border-radius:8px', 'padding:16px 20px', 'max-width:480px', 'width:calc(100% - 40px)',
    'z-index:9999', 'font-family:var(--font-body,Inter,sans-serif)',
    'font-size:0.82rem', 'color:#c8d8f0', 'box-shadow:0 4px 24px rgba(0,0,0,0.5)',
    'line-height:1.5'
  ].join(';');

  var btnStyle = [
    'padding:7px 18px', 'border-radius:6px', 'border:none',
    'font-weight:600', 'font-size:0.78rem', 'cursor:pointer'
  ].join(';');

  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(banner);
    var accept = document.getElementById('cookie-accept');
    var decline = document.getElementById('cookie-decline');

    accept.style.cssText = btnStyle + ';background:#00e5ff;color:#0A1628;';
    decline.style.cssText = btnStyle + ';background:transparent;color:#7a9ab5;border:1px solid rgba(255,255,255,0.15);';

    accept.addEventListener('click', function () {
      localStorage.setItem('evo-cookie-consent', 'accepted');
      banner.remove();
    });
    decline.addEventListener('click', function () {
      localStorage.setItem('evo-cookie-consent', 'declined');
      banner.remove();
    });
  });
})();
