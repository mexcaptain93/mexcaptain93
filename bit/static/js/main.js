$(function () {
    slider();
    phoneMask();
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