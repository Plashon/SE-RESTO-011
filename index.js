//show menu
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector("header .flex .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};
//show search
let search = document.querySelector("#search-icon");
search.onclick = () => {
  let search_form = document.querySelector("#search-form");
  search_form.classList.toggle("active");
};
//close search
let close_icon = document.querySelector("#close");
close_icon.onclick = () => {
  let search_form = document.querySelector("#search-form");
  search_form.classList.remove("active");
};
//swiper function
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

//review 
var swiper = new Swiper(".review-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    640:{
      slidesPerView:2,
    },
    768:{
      slidesPerView:2,
    },
    1024:{
      slidesPerView:3,
    }
  }
});