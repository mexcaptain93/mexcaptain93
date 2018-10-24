$(function () {
    slider();
    phoneMask();
    smoothScroll();
    lightActiveMenu();
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

function smoothScroll() {
    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        var el = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(el).offset().top - $('.js-header').height()
        }, 1000);
    });
}

function lightActiveMenu() {
    $(window).on('scroll', function () {
        var sections = $('section'),
            lastId = sections.last().attr('id');
        sections.each(function(i,el){
            var top  = $(el).offset().top - $('.js-header').height(),
                bottom = top +$(el).height(),
                scroll = $(window).scrollTop(),
                id = $(el).attr('id');

            if (lastId === id) {
                top -= 300;
            }


            if( scroll > top && scroll < bottom){
                $('.js-menu .menu__item_active').removeClass('menu__item_active');
                $('a[href="#'+id+'"]').parent().addClass('menu__item_active');
            }
        })

    })
}