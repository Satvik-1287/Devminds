/*=============== SHOW MENU ===============*/
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the bg-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__img-2', 1.2, {opacity: 0, y: 200, delay: .1})
gsap.from('.home__img-3', 1.2, {opacity: 0, y: 200, delay: .1})
gsap.from('.home__data', 1.2, {opacity: 0, y: -60, delay: .1})
gsap.from('.home__bird-1', 1.2, {opacity: 0, x: -80, delay: 1.1})
gsap.from('.home__bird-2', 1.2, {opacity: 0, x: 80, delay: 1.2})
gsap.from('.home__img-4', 1.2, {opacity: 0, x: 200, delay: 1.3})

document.getElementById('github').onclick = function() {
    window.open('https://github.com/Satvik-1287/', '_blank');
}

const images = document.getElementsByTagName('img');
images.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);