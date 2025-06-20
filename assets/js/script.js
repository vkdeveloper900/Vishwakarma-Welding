// // custom.js

// document.addEventListener("DOMContentLoaded", () => {
//   // Hero Carousel: autoplay with pause on hover
//   const carousel = document.querySelector('#heroCarousel');
//   if (carousel) {
//     new bootstrap.Carousel(carousel, {
//       interval: 4000,
//       pause: 'hover'
//     });
//   }

//   // Example: Smooth scroll for navbar links
//   document.querySelectorAll('a.nav-link').forEach(link => {
//     link.addEventListener('click', e => {
//       if (link.hash && document.querySelector(link.hash)) {
//         e.preventDefault();
//         document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' });
//       }
//     });
//   });

//   // Future custom JS can go here
// });




 window.addEventListener("load", function () {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hidden");
  }, 300); // ultra short delay
});







function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



  // Show/hide button on scroll
  const goTopBtn = document.getElementById("goTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      goTopBtn.style.display = "block";
    } else {
      goTopBtn.style.display = "none";
    }
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

