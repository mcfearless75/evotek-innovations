/* ============================================================
   EVOTEK INNOVATIONS — Main JS
   ============================================================ */
(function () {
  'use strict';

  /* ── Scroll Progress ─────────────────────────────────────── */
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.prepend(bar);
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });

  /* ── Nav Scroll ──────────────────────────────────────────── */
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* ── Hamburger ───────────────────────────────────────────── */
  const ham = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (ham && mobileNav) {
    ham.addEventListener('click', () => {
      const open = ham.classList.toggle('open');
      mobileNav.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    document.addEventListener('click', (e) => {
      if (!ham.contains(e.target) && !mobileNav.contains(e.target)) {
        ham.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        ham.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Active Nav ──────────────────────────────────────────── */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if ((link.getAttribute('href') || '').split('/').pop() === page) {
      link.classList.add('active');
    }
  });

  /* ── Scroll Reveal ───────────────────────────────────────── */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* ── Animated Counters ───────────────────────────────────── */
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.target);
      const decimal = el.dataset.decimal || 0;
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      const start = performance.now();
      function tick(now) {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        el.textContent = (target * ease).toFixed(decimal) + suffix;
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = target.toFixed(decimal) + suffix;
      }
      requestAnimationFrame(tick);
      counterObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach(el => counterObs.observe(el));

  /* ── FAQ Accordion ───────────────────────────────────────── */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Particle Canvas ─────────────────────────────────────── */
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-canvas';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function mkParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.6 ? '0,229,255' : '0,255,136'
    };
  }
  for (let i = 0; i < 80; i++) particles.push(mkParticle());

  function drawParticles() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      ctx.fill();
    });
    // Connect nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,229,255,${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }
  drawParticles();

  /* ── Bio Tabs ────────────────────────────────────────────── */
  const bioTabBtns = document.querySelectorAll('.bio-tab-btn');
  if (bioTabBtns.length) {
    function activateBioTab(btn) {
      bioTabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.bio-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(btn.dataset.tab);
      if (panel) { panel.classList.add('active'); }
    }
    bioTabBtns.forEach(btn => btn.addEventListener('click', () => activateBioTab(btn)));
    activateBioTab(bioTabBtns[0]);
  }

  /* ── Currency Ticker (terminal $ signs) ─────────────────── */
  const currencies = ['$', '£', '€', '¥', '₹', '₩', '₿', '₴', '฿', '₦'];
  const cmdSpans = document.querySelectorAll('.t-cmd');
  if (cmdSpans.length) {
    cmdSpans.forEach((span, i) => {
      let idx = Math.floor(Math.random() * currencies.length);
      setInterval(() => {
        idx = (idx + 1) % currencies.length;
        span.textContent = currencies[idx] + ' ';
      }, 1400 + i * 220);
    });
  }

  /* ── Typewriter (hero only) ──────────────────────────────── */
  const typer = document.getElementById('typewriter');
  if (typer) {
    const words = ['HEALTHCARE', 'FOOD SERVICE', 'TRANSPORT', 'EDUCATION', 'HOSPITALITY'];
    let wi = 0, ci = 0, deleting = false;
    function type() {
      const word = words[wi];
      if (!deleting) {
        typer.textContent = word.slice(0, ci + 1);
        ci++;
        if (ci === word.length) { deleting = true; setTimeout(type, 2000); return; }
      } else {
        typer.textContent = word.slice(0, ci - 1);
        ci--;
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
      }
      setTimeout(type, deleting ? 60 : 120);
    }
    type();
  }

  /* ── Contact form intercept ──────────────────────────────── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      btn.textContent = 'TRANSMITTING...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'MESSAGE SENT';
        btn.style.background = 'var(--green)';
        form.reset();
      }, 1800);
    });
  }

})();
