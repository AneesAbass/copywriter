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

observer.observe(section);
