// Testimonial slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const totalSlides = slides.length;

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "flex" : "none";
  });
};

document.querySelector(".testimonial-next").addEventListener("click", (e) => {
  e.preventDefault();
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

document.querySelector(".testimonial-prev").addEventListener("click", (e) => {
  e.preventDefault();
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

// Initialize
showSlide(currentSlide);

const video = document.getElementById('hero-video');
const section = document.getElementById('hero-video-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      video.play();
    } else {
      video.pause();
    }
  });
}, { threshold: 0.5 }); // 50% of section visible triggers play/pause

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const dropdowns = document.querySelectorAll('.dropdown');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Toggle dropdowns on mobile
dropdowns.forEach(drop => {
  const btn = drop.querySelector('.dropbtn');
  btn.addEventListener('click', (e) => {
    if(window.innerWidth <= 768){
      e.preventDefault();
      drop.classList.toggle('active');
    }
  });
});

