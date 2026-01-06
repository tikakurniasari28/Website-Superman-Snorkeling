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

// ===== Package WhatsApp Message Auto Fill =====
document.querySelectorAll(".wa-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const pack = btn.dataset.package;
    const price = btn.dataset.price;
    const spots = btn.dataset.spots;

    const text = `
Hello Superman Snorkeling! 

I want to book this package:

Package: ${pack}
Price: ${price}
Spot/Details: ${spots}

Trip date:
Number of people:

Thank you!
    `.trim();

    const url = `https://wa.me/6282339536671?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  });
});

// ===== Hero Slider =====
const slides = document.querySelectorAll(".hero-slider img");
const prevBtn = document.querySelector(".hero-slider .prev");
const nextBtn = document.querySelector(".hero-slider .next");
const dotsContainer = document.querySelector(".hero-slider .dots");

let currentSlide = 0;
let slideInterval;

// buat dots otomatis
slides.forEach((_, index) => {
  const dot = document.createElement("button");
  if(index === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);

  dot.addEventListener("click", () => {
    goToSlide(index);
    resetInterval();
  });
});

const dots = dotsContainer.querySelectorAll("button");

function goToSlide(index){
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");

  currentSlide = index;

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

function nextSlide(){
  let next = (currentSlide + 1) % slides.length;
  goToSlide(next);
}

function prevSlide(){
  let prev = (currentSlide - 1 + slides.length) % slides.length;
  goToSlide(prev);
}

nextBtn?.addEventListener("click", () => {
  nextSlide();
  resetInterval();
});

prevBtn?.addEventListener("click", () => {
  prevSlide();
  resetInterval();
});

function startInterval(){
  slideInterval = setInterval(nextSlide, 3500);
}

function resetInterval(){
  clearInterval(slideInterval);
  startInterval();
}

// mulai autoplay
startInterval();
