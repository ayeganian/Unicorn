//teamSwiper for mobile
let teamSwiper = new Swiper ('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//main content sliders
const swiperBusiness = new Swiper('.swiper-container-business', {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next-bus',
    prevEl: '.swiper-button-prev-bus',
  },
});

const swiperEducation = new Swiper('.swiper-container-education', {
  autoplay: {
    delay: 4000,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next-ed',
    prevEl: '.swiper-button-prev-ed',
  },
});

const swiperSport = new Swiper('.swiper-container-sport', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next-sp',
    prevEl: '.swiper-button-prev-sp',
  },
});

const swiperMarketing = new Swiper('.swiper-container-marketing', {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next-mark',
    prevEl: '.swiper-button-prev-mark',
  },
});

