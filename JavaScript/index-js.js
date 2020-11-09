$(document).ready(function () {

    function media(x) {
        if (x.matches) {
            $("#content-medio").removeClass("justify-content-center");
        } else {
            $("#content-medio").addClass("justify-content-center");
        }
    }
    var x = window.matchMedia("(min-width:992px)")

    media(x);
    x.addListener(media);

    $(".info").click(function () {
        $(".info").addClass("active");
        $(".active").fadeIn();
        $(".categorias").removeClass("active")

    });

    $(".categorias").click(function () {
        $(".categorias").addClass("active");
        $(".info").removeClass("active")
        $(".active").fadeIn();
    });

    $(".list1").click(function () {
        $(".menu-info").show();
        $(".menu-cate").hide();
    })

    $(".list2").click(function () {
        $(".menu-cate").show();
        $(".menu-info").hide();
    })

    var sub = [0, 1, 2, 3];

    $(".menu").click(function () {
        $(".menu-dezplegable").css("left", "0");
        $(".xox").css("display", "block");
        $("html body").css("overflow", "hidden");
    });
    $(".xox").click(function () {
        $(".menu-dezplegable").css("left", "-1000px");
        $(".xox").css("display", "none");
        $("html body").css("overflow", "auto");
    });
    $("#flexiselDemo3").flexisel({
        visibleItems: 5,
        itemsToScroll: 1,
        navigationTargetSelector: null,  
        autoPlay: {
            enable: false,
            interval: 6000,
            pauseOnHover: true
        }
    });
    $("#flexiselDemo2").flexisel({
        visibleItems: 5,
        itemsToScroll: 1,
        navigationTargetSelector: null,  
        autoPlay: {
            enable: false,
            interval: 6000,
            pauseOnHover: true
        }
    });
    $("#flexiselDemo1").flexisel({
        visibleItems: 5,
        itemsToScroll: 1,
        autoPlay: {
            enable: false,
            interval: 6000,
            pauseOnHover: true
        }
    });
    $("#flexiselDemo4").flexisel({
        visibleItems: 5,
        itemsToScroll: 1,
        navigationTargetSelector: null,     
        autoPlay: {
            enable: true,
            interval: 4000,
            pauseOnHover: true
        }       
    });
})