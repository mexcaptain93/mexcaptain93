$(document).ready(function () {
    slider();
    photoslider();
});

function slider() {
    var slider = $('.js-slider'),
        total = slider.find('> *').length;

    slider.slick({
        autoplay: true
    });

    if (total < 10) {
        total = '0' + total;
    }
    $('.js-slider-total').text(total);


    slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        console.log(currentSlide);
        if (currentSlide++ < 9) {
            currentSlide = '0' + currentSlide;
        }
        $('.js-slider-current').text(currentSlide);
    });

    $('.js-slider-prev').on('click', function (e) {
        e.preventDefault();
        slider.find('.slick-prev').click();
    });
    $('.js-slider-next').on('click', function (e) {
        e.preventDefault();
        slider.find('.slick-next').click();
    });
}

function photoslider() {

    var photoslider = $('.js-photoslider');
    photoslider.slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true

    });

    $('.js-photoslider-prev').on('click', function (e) {
        e.preventDefault();
        photoslider.find('.slick-prev').click();
    });
    $('.js-photoslider-next').on('click', function (e) {
        e.preventDefault();
        photoslider.find('.slick-next').click();
    });
}