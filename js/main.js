// Toddle items

$('.btn-toddle').click(function(e){
    e.preventDefault();
    var menu = $($(this).attr("data-target"));
    console.log(menu);
    menu.slideToggle('fast');

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 768 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});

// Slider

$('.slider-body').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.widget-tabs').tabs();

$("input[type='checkbox']").ionCheckRadio();


// Screenshot

$('.screenshot-body').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    vertical: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1
});

$('.screenshot-nav.prev').click(function(){
    $('.screenshot-body').slick('slickPrev');
});

$('.screenshot-nav.next').click(function(){
    $('.screenshot-body').slick('slickNext');
});


$(".btn-modal").fancybox({
    'padding'    : 0
});