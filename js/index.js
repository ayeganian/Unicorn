// dropdown menu for desctop
const menuItemDropdown = document.querySelector('.menu-item-dropdown');
const dropdown = document.querySelector('.dropdown');


menuItemDropdown.addEventListener('click', () => {
    dropdown.classList.contains('dropdown-active')
        ? dropdown.classList.remove('dropdown-active')
        : dropdown.classList.add('dropdown-active');
});


// sidenavbar menu for mobile
const barIcon = document.querySelector('.icon-container');
const closeIcon = document.querySelector('.btn-close');
const pageBackground = document.querySelector('.page-wrapper');


barIcon.addEventListener('click', () => {
    document.querySelector('.navbar').classList.add('opened-navbar');
    pageBackground.classList.add('transparent');
});

closeIcon.addEventListener('click', () => {
    document.querySelector('.navbar').classList.remove('opened-navbar');
    pageBackground.classList.remove('transparent')
});

//select

// customSelect('select');