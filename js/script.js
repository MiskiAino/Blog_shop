$(document).ready(function () {

    //TABS
    $(".tab_item").not(":first").hide();
    $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    //____________________________________________________________________-

//slick
    $('.slider-for').slick({
        arrows: false,
        asNavFor: '.slider-nav',
        adaptiveHeight:true,
        autoplay: true
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        focusOnSelect: true,
        autoplay: true
    });

});