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

const cursor = document.querySelector(".custom-cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// animasi scroll
document.addEventListener("scroll", () => {
  const card = document.querySelector(".card");
  const cardPosition = card.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (cardPosition < screenHeight - 100) {
    card.classList.add("visible");
    card.classList.remove("hidden");
  } else {
    card.classList.add("hidden");
    card.classList.remove("visible");
  }
});
