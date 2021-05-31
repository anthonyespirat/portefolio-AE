let hamIcon = document.querySelector('.hamburger_icon');
let menuMobile = document.querySelector('.menu_mobile')
function menu () {
    hamIcon.childNodes[1].classList.toggle("open");
    hamIcon.childNodes[2].classList.toggle("open");
    hamIcon.childNodes[3].classList.toggle("open");
    menuMobile.classList.toggle("toggle");

}
hamIcon.addEventListener('click', menu);
console.log(menuMobile);