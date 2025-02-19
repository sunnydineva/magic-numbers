let slideIndex = 0;
let slides =  [];

function showSlides() {
  slides = document.querySelectorAll(".slide-img");
  if (slides.length === 0) return;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

function changeSlide(n) {
  slides = document.querySelectorAll(".slide-img");
  if (slides.length === 0) return;

  slideIndex += n;
  if (slideIndex > slides.length) slideIndex = 1;
  if (slideIndex < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  slides = document.querySelectorAll(".slide-img");

  if (slides.length === 0) {
    console.log("Слайдърът не съществува на тази страница.");
    return;
  }

  let prevButton = document.querySelector(".prev");
  let nextButton = document.querySelector(".next");

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", function () {
      changeSlide(-1);
    });

    nextButton.addEventListener("click", function () {
      changeSlide(1);
    });
  }

  showSlides();
});
