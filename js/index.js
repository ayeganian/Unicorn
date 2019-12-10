// dropdown menu for desctop
const menuItemDropdown = document.querySelector('.menu-item-dropdown');
const dropdown = document.querySelector('.dropdown');


menuItemDropdown.addEventListener('click', () => {
    dropdown.classList.contains('dropdown-active') ? dropdown.classList.remove('dropdown-active') : dropdown.classList.add('dropdown-active');
});


// sidenavbar menu for mobile
const barIcon = document.querySelector('.icon-container');
const closeIcon = document.querySelector('.btn-close');
const pageBackground = document.querySelector('.page-wrapper');


barIcon.addEventListener('click', () => {
    document.querySelector('.navbar').classList.add('opened-navbar');
    pageBackground.classList.add('transparent');
    dropdown.style.display = "none";
});

closeIcon.addEventListener('click', () => {
    document.querySelector('.navbar').classList.remove('opened-navbar');
    pageBackground.classList.remove('transparent')
});

menuItemDropdown.addEventListener('click', () => {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});


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
