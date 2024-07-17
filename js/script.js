// sticky-header
var body = document.body;
var sticky = body.offsetTop;

function headerFunction() {
  if (window.pageYOffset > 550) {
    body.classList.add("sticky");
  } else {
    body.classList.remove("sticky");
  }
}
window.onscroll = function () {
  headerFunction();
};

// scolling-animation
AOS.init();

// moment-slider
$(".events-slider").slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: true,
  prevArrow: "<i class='fa fa-angle-left' aria-hidden='true'></i>",
  nextArrow: "<i class='fa-solid fa-angle-right'></i>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".coment-section").slick({
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: true,
  prevArrow: "<i class='fa fa-angle-left' aria-hidden='true'></i>",
  nextArrow: "<i class='fa-solid fa-angle-right'></i>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// navlinks-activating-whiling-scrollig
const sections = document.querySelectorAll("section");
const navList = document.querySelectorAll("header div.wrapper div.nav li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });
  navList.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
