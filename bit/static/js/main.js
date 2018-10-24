$(function () {
    slider();
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