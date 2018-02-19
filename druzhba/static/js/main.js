$(document).ready(function () {
    popup();
});

function popup() {
    $('.js-want').on('click', function (e) {
        e.preventDefault();
        $('.js-popup-want').show();
        $('body').addClass('stop-scrolling')

    });



    $($('.js-popup-want')).click(function(event) {
        if($('.js-popup-want').is(":visible")) {

            if (!$(event.target).closest('.js-popup-want .popup__content').length) {
                $('.js-popup-want').hide();
                $('body').removeClass('stop-scrolling')

            }
        }
    });
}