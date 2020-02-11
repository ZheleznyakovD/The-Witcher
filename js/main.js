var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {
    // when window width is >= 480px
    475: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});

var feedbackSwiper = new Swiper('.swiper-feedback', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.bowandarrow',
  },
  breakpoints: {
    // when window width is >= 480px
    600: {
      slidesPerView: 2,
      spaceBetween: 45
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 45
    }
  }
});

var menuButton = document.querySelector('.burger');
var menu = document.querySelector('.nav-bar');

menuButton.addEventListener('click', function() {
  menu.classList.toggle('nav-bar-active');
  menuButton.classList.toggle('burger-active');
});