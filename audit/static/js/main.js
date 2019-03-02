$(function () {
   checklist();
});

function checklist() {

    var slider = $('.js-checklist-slider'),
        elem = $('.js-checklist-item');

    if (slider.length && $.fn.slick) {
        slider.slick({
            arrows: false
        });
    }

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