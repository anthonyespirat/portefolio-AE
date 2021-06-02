let hamIcon = document.querySelector('.hamburger_icon');
let menuMobile = document.querySelector('.menu_mobile');
let p = document.querySelectorAll('.ability p');
let apropos = document.getElementById("apropos");
let btnTop = document.querySelector(".onTop");


// MENU MOBILE OPEN
function menu () {
    hamIcon.childNodes[1].classList.toggle("open");
    hamIcon.childNodes[2].classList.toggle("open");
    hamIcon.childNodes[3].classList.toggle("open");
    menuMobile.classList.toggle("toggle");

}
// MENU MOBILE CLOSE > CLICK ON LINK
function remove() {
    if (hamIcon.childNodes[1].classList.contains("open") == true || hamIcon.childNodes[2].classList.contains("open") == true || hamIcon.childNodes[3].classList.contains("open") == true) {
        menuMobile.classList.remove("toggle")
        hamIcon.childNodes[1].classList.remove("open");
        hamIcon.childNodes[2].classList.remove("open");
        hamIcon.childNodes[3].classList.remove("open");
    }
}
// EVENT MENU
hamIcon.addEventListener('click', menu);
// FUN
console.log('Et non, pas d\'erreur !');

// DISPLAY ON > onTop BUTTON
window.onscroll = function() {
    if (window.pageYOffset > 300) {
        btnTop.style.display = "flex";
    }
    else {
        btnTop.style.display = "none";
    }
}

