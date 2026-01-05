const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile menu after clicking a link
mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Contact form: send to WhatsApp =====
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  const phone = data.get('phone');
  const message = data.get('message');

  const text = `Halo Superman Snorkeling!%0A%0ANama: ${encodeURIComponent(name)}%0ANo. WA: ${encodeURIComponent(phone)}%0A%0APesan:%0A${encodeURIComponent(message)}`;
  const url = `https://wa.me/6282339536671?text=${text}`;
  window.open(url, '_blank');
});
