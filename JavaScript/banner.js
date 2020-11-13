var slider = $("#slider");
var next = $("#btn-next");
var prev = $("#btn-prev");

$("#slider section:last").insertBefore("#slider section:first");

slider.css('margin-left','-'+100+'%');

function moverD() {
    slider.animate({
        marginLeft: '-'+200+'%'
    } ,700, function () {
        $('#slider section:first').insertAfter("#slider section:last")
        slider.css('margin-left','-'+100+'%');
     })
}

function moverI() {
    slider.animate({
        marginLeft: 0
    } ,700, function () {
        $('#slider section:last').insertBefore("#slider section:first")
        slider.css('margin-left','-'+100+'%');
     })
}

next.on('click', function() {
    moverD();
});

prev.on('click', function() {
    moverI();
});

function autoplay() {
    interval = setInterval(function () {
        moverD();
    }, 8000);
}

autoplay();