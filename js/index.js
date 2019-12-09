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
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});