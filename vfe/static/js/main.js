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


    $('.js-send-mail').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: "name="+ $('.js-name').val() + "&phone="+ $('.js-phone').val(),
            success: function(msg){
                $('.js-popup-want .popup__list').hide();
                $('.js-popup-want').append('<span class="like-h3 popup__answer">' + msg + '</span>');
                setTimeout(function() {
                    $('.js-popup-want').hide();
                    $('.js-popup-want .popup__list').show();
                    $('.js-popup-want .popup__answer').remove();
                    $('body').removeClass('stop-scrolling')
                }, 3000);

            }
        });
    });
}