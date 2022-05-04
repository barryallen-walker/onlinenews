var mybutton = document.getElementById("myBtn");
var myNav = document.getElementById('navbar');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // "use strict";
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120 ) {
        myNav.classList.add("navbar-dark");
        myNav.classList.add("bg-dark");
        myNav.classList.remove("navbar-light");
        mybutton.style.display = "block";
    }
    else {
        myNav.classList.add("navbar-light");
        myNav.classList.remove("navbar-dark");
        myNav.classList.remove("bg-dark");
        mybutton.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}