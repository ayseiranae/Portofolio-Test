let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slides img").length;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Looping otomatis
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop ke akhir jika mundur dari slide pertama
  updateSlide();
}

function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 3000);
