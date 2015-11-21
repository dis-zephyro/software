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


$("input[type='checkbox']").ionCheckRadio();