$(document).ready(function () {

    $('.slider_area').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true
    });


    //TABS
    $(".tab_item").not(":first").hide();
    $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    //____________________________________________________________________-

});
$(document).ready(function () {
    //ADAPTIVE NAVIGATION

    $(document).ready(function () {
        $(".menu-trigger").click(function () {
            $("nav ul").slideToggle(500);
        });
        $(window).resize(function () {
            if($(window).width()>700){
                $("nav ul").removeAttr("style");
            }
        });
    });
});
