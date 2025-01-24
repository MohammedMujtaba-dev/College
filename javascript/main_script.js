let navLinks = document.getElementById("navLinks");

function showmenu() {
  navLinks.style.right = "0";
}
function hidemenu() {
  navLinks.style.right = "-200px";
}
let currentIndex = 0;

function moveCarousel(direction) {
  const carouselInner = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".course-col");
  const itemWidth = items[0].offsetWidth + 20; // Box width + gap
  const visibleItems = Math.floor(carouselInner.offsetWidth / itemWidth);
  const maxIndex = Math.ceil(items.length / visibleItems) - 1;

  currentIndex = (currentIndex + direction + maxIndex + 1) % (maxIndex + 1);
  carouselInner.style.transform = `translateX(-${
    currentIndex * itemWidth * visibleItems
  }px)`;
}

// Automatic carousel movement
setInterval(() => {
  moveCarousel(1);
}, 3000);
