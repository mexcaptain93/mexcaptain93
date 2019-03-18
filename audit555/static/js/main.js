$(function () {
   checklist();
   problems();
});

function checklist() {

    var slider = $('.js-checklist-slider'),
        elem = $('.js-checklist-item'),
        current = $('.js-checklist-slider-current'),
        total = $('.js-checklist-slider-total'),
        amount = slider.find('> *').length,
        currentSlide,
        prev = $('.js-checklist-slider-prev'),
        next = $('.js-checklist-slider-next');

    if (slider.length && $.fn.slick) {
        slider.slick({
            arrows: false,
            adaptiveHeight: true
        });
    }

    if (amount < 10) {
        amount = '0' + amount;
    }
    total.text(amount);


    slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        console.log(currentSlide);
        if (currentSlide++ < 9) {
            currentSlide = '0' + currentSlide;
        }
        current.text(currentSlide);
    });

    prev.on('click', function (e) {
        e.preventDefault();
        slider.slick('slickPrev');
    });
    next.on('click', function (e) {
        e.preventDefault();
        slider.slick('slickNext');
    });

    elem.on('click', function (e) {
        e.preventDefault();
        elem.removeClass('schema__item_active');
        $(this).addClass('schema__item_active');

        var index = $(this).index();

        if (slider.find('.slider__item').eq(index).length) {
            slider.slick('slickGoTo', index);

        }
    })





}

function problems() {
    var slider = $('.js-problems-slider');
    
    function initProblemsSlider() {
        if ($(window).width() < 768) {
            if (slider.length && $.fn.slick) {
                slider.slick({
                    arrows: false,
                    dots: true,
                    adaptiveHeight: true
                });
            }
        }
    }

    $(window).on('resize',function() {
        if ($(window).width() < 768) {
            if (!slider.hasClass('slick-initialized')) {
                initProblemsSlider();
            }
        } else {
            slider.slick('unslick');
        }
    });

    initProblemsSlider();


}