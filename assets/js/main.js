// Import Swiper and categoriesData
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// Assuming categoriesData is in a separate file
import categoriesData from "./categories-data";

// Function to initialize the categories swiper
function initCategoriesSwiper() {
  // First, populate the swiper with slides from our data
  const swiperWrapper = document.querySelector(
    ".categories-swiper .swiper-wrapper"
  );

  if (swiperWrapper && typeof categoriesData !== "undefined") {
    // Generate HTML for each category
    categoriesData.forEach((category) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";

      slide.innerHTML = `
        <div class="rounded-2xl bg-white p-4 flex flex-col gap-8 hover:shadow-2xl transition-all">
          <img
            src="${category.image}"
            loading="lazy"
            class="w-full"
            alt="Food Category"
          />
          <div class="flex flex-col gap-1 items-center justify-center">
            <h3 class="font-medium text-lg">${category.title}</h3>
            <p class="text-secondary capitalize">${category.places} place${
        category.places !== 1 ? "s" : ""
      }</p>
          </div>
        </div>
      `;

      swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper
    const categoriesSwiper = new Swiper(".categories-swiper", {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // Pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        // when window width is >= 1280px
        1280: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });
  }
}

// Initialize when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  initCategoriesSwiper();
});
