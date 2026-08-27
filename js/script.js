const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const backToTop = document.querySelector('.back-to-top');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function closeMenu() {
  menuToggle?.setAttribute('aria-expanded', 'false');
  navLinks?.classList.remove('open');
  menuToggle?.setAttribute('aria-label', 'Otvori meni');
}

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Otvori meni' : 'Zatvori meni');
  navLinks.classList.toggle('open', !isOpen);
});

document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});

const updateScrollUI = () => {
  const y = window.scrollY;
  header?.classList.toggle('scrolled', y > 18);
  backToTop?.classList.toggle('visible', y > 650);
};
window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();

backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' }));

document.querySelectorAll('.topic-head').forEach(button => {
  button.addEventListener('click', () => {
    const body = button.closest('.topic')?.querySelector('.topic-body');
    const plus = button.querySelector('.topic-plus');
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    body.classList.toggle('open', !expanded);
    plus.textContent = expanded ? '+' : '−';
  });
});

const revealItems = document.querySelectorAll('.reveal');
if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('in-view'));
}

const sections = [...document.querySelectorAll('main section[id]')];
const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];
if ('IntersectionObserver' in window) {
  const activeObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navAnchors.forEach(link => {
      const target = link.getAttribute('href').slice(1);
      link.classList.toggle('active', target === visible.target.id);
    });
  }, { threshold: [0.25, 0.5, 0.75], rootMargin: '-20% 0px -55% 0px' });
  sections.forEach(section => activeObserver.observe(section));
}

document.getElementById('year').textContent = new Date().getFullYear();
