let sidebar = document.getElementById("sidebar");
let overlay = document.getElementById("overlay");
let body = document.getElementById("body");

function openNav() {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  body.style.overflow = "hidden";
}

function closeBtn() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  body.style.overflow = "auto";
}

$(".team-slider").owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 450,
  margin: 20,
  responsive: {
    0: {
      items: 1,
    },
    529: {
      items: 2,
    },
    768: {
      items: 2,
    },
    991: {
      items: 3,
    },
    1200: {
      items: 4,
    },
    1920: {
      items: 5,
    },
  },
});
