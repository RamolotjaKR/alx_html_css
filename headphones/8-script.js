document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  if (!btn || !nav) return;

  function toggleMenu() {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
    btn.classList.toggle('is-active');
  }

  btn.addEventListener('click', toggleMenu);

  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('open')) return;
    if (e.target === btn || btn.contains(e.target) || nav.contains(e.target)) return;
    btn.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    btn.classList.remove('is-active');
  });

  // close with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      btn.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
      btn.classList.remove('is-active');
      btn.focus();
    }
  });
});
