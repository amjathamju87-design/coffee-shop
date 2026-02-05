document.addEventListener("DOMContentLoaded", () => {

  const navLinks = document.querySelectorAll(".nav-menu .nav-link");
  const menuOpenButton = document.querySelector("#menu-open-button");
  const menuCloseButton = document.querySelector("#menu-close-button");

  // Open mobile menu
  if (menuOpenButton) {
    menuOpenButton.addEventListener("click", () => {
      document.body.classList.add("show-mobile-menu");
    });
  }

  // Close mobile menu
  if (menuCloseButton) {
    menuCloseButton.addEventListener("click", () => {
      document.body.classList.remove("show-mobile-menu");
    });
  }

  // Close menu when any nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      document.body.classList.remove("show-mobile-menu");
    });
  });

  // Initialize Swiper
  const swiper = new Swiper(".slider-wrapper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

});