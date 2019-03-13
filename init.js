$(document).ready(function () {

    $('.tap-target').tapTarget('open');
    $('.tap-target').tapTarget('close');

    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    $('.button-collapse').sideNav({
        menuWidth: 310, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    }
    );
    $('select').formSelect();
});

var body = document.querySelector('body');
var btnDark = document.querySelector("#modo-dark");
btnDark.addEventListener("click", function (event) {

    var backgroundColor = body.style.backgroundColor;

    event.preventDefault();
    body.style.backgroundColor = "grey";

    if (backgroundColor == 'grey') {
        body.style.backgroundColor = "white";
    }
});

