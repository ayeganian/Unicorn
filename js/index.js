// dropdown menu for desctop
const menuItemDropdown = document.querySelector('.menu-item-dropdown');
const dropdown = document.querySelector('.dropdown');


menuItemDropdown.addEventListener('click', () => {
    dropdown.classList.contains('dropdown-active') ? dropdown.classList.remove('dropdown-active') : dropdown.classList.add('dropdown-active');
});

//teamSwiper for mobile
let teamSwiper = new Swiper ('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});