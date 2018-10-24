$(function () {
    slider();
    phoneMask();
    scroll();
});

function slider() {
    var slider = $('.js-index-slider');

    if (slider.length) {
        slider.owlCarousel({
            nav: false,
            items: 1,
            loop: true,
            autoWidth: true,
            autoplay: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            mouseDrag: false,
            touchDrag: false,
            dots: false
        });
    }
}

function phoneMask() {
   var mask = new IMask($("[name='phone']")[0], {
       mask: '+{7}(000) 000-00-00'
   });
   mask.rawValue = '999-12-12-123';
}

function scroll() {
    var menu_selector = ".js-menu";

    function onScroll() {
        var scroll_top = $(document).scrollTop();

        $(menu_selector + " a").each(function () {
            var hash = $(this).attr("href");
            var target = $(hash);

            if (target.position().top - 83 <= scroll_top && target.position().top - 83 + target.outerHeight() > scroll_top) {
                $(menu_selector + " .menu__item_active").removeClass("menu__item_active");
                $(this).parent().addClass("menu__item_active");
            } else {
                $(this).parent().removeClass("menu__item_active");
            }
        });
    }

    $(document).ready(function () {
        $(document).on("scroll", onScroll);
        $('a[href^="#"]').click(function (e) {
            e.preventDefault();
            $(document).off("scroll");
            $(menu_selector + " .menu__item_active").removeClass("menu__item_active");
            $(this).parent().addClass("menu__item_active");
            var hash = $(this).attr("href");
            var target = $(hash);
            $("html, body").animate({
                scrollTop: target.offset().top - 83
            }, 500, function () {
                window.location.hash = hash;
                $(document).on("scroll", onScroll);
            });
        });
    });

}