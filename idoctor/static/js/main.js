$(document).ready(function () {
    toggleHeaderSearch();
    togglers();
    diagnosis();
    sliders();
    showAllDefects();
    scrolls();
    mobileMenu();
    callMe();
    detailText();
});


function toggleHeaderSearch() {
    $('.js-show-header-search-bar').on('click', function (e) {
        e.preventDefault();
        $('.js-header-search-bar').addClass('header__search_visible');
    });

    $(document).click(function (event) {
        if ((!$(event.target).closest('.js-header-search-bar').length) && !$(event.target).closest('.js-show-header-search-bar').length) {
            if ($('.js-header-search-bar').hasClass('header__search_visible')) {
                $('.js-header-search-bar').removeClass('header__search_visible');
            }
        }
    });
}

function togglers() {
    var typeToggler = $('.js-toggler-type');
    var selectedType = typeToggler.attr('data-value');

    var modelToggler = $('.js-toggler-model');
    var selectedModel = modelToggler.attr('data-value');

    if (selectedType == 'ipad') {
        modelToggler.parent().css({opacity: 0});
    }

    var typesQuantity = typeToggler.find('[data-value]').length;
    refreshBack(typeToggler, typesQuantity);

    typeToggler.find('[data-value]').on('click', function (e) {
        //e.preventDefault();
        selectedType = $(this).attr('data-value');
        typeToggler.attr('data-value', selectedType);
        refreshBack(typeToggler, typesQuantity);
        refreshData(selectedType, selectedModel);

        if (selectedType == 'ipad') {
            modelToggler.parent().css({opacity: 0});
        } else {
            modelToggler.parent().css({opacity: 1});
        }

    });


    var modelsQuantity = modelToggler.find('[data-value]').length;

    refreshBack(modelToggler, modelsQuantity);

    modelToggler.find('[data-value]').on('click', function (e) {
        //e.preventDefault();
        selectedModel = $(this).attr('data-value');
        modelToggler.attr('data-value', selectedModel);
        refreshBack(modelToggler, modelsQuantity);
        refreshData(selectedType, selectedModel);
    });


    function refreshBack(el, q) {
        var index = el.find("[data-value='" + el.attr('data-value') + "']").index();
        el.find('.toggler__back').css({'left': el.width() / q * index});
    }
}

function refreshData(selectedType, selectedModel) {
    $('.js-diagnosis-mobile-slider').not('.slick-initialized').slick();

    if (selectedType == 'iphone') {
        var prices = price.types[selectedType][selectedModel];
    } else {
        var prices = price.types[selectedType];
    }

    var link = '';
    if (selectedType === 'ipad') {
        link = 'price-table-ipad.html';
    } else {
        link = 'price-table-' + selectedType + '-' + selectedModel + '.html';
    }

    $('.js-full-price-link').attr('href', link);


    for (var i in prices) {
        $('.js-pain').eq(i).attr('data-name', prices[i].name);
        $('.js-pain').eq(i).attr('data-time', prices[i].time);
        $('.js-pain').eq(i).attr('data-price', prices[i].price);


        $('.js-diagnosis-mobile-slider').append('<div class="diagnosis-mobile__item">\n' +
            '                <div class="diagnosis-mobile__name"><span class="like-h3 js-diagnosis-name">' + prices[i].name + '</span></div>\n' +
            '                <div class="diagnosis-mobile__time-price">\n' +
            '                  <div class="diagnosis-mobile__time"><span class="like-h6">Время ремонта от:</span><span class="like-h3 js-diagnosis-time">' + prices[i].time + '</span></div>\n' +
            '                  <div class="diagnosis-mobile__price"><span class="like-h6">Стоимость от:</span><span class="like-h3 js-diagnosis-price">' + prices[i].price + '</span></div>\n' +
            '                </div>\n' +
            '              </div>' +
            '');

    }


    $('.js-diagnosis-mobile-slider').slick('refresh');

}

function diagnosis() {
    var type = ($('.js-toggler-type').attr('data-value'));
    var model = ($('.js-toggler-model').attr('data-value'));

    refreshData(type, model);

    $('.js-pain').on('mouseover', function (e) {
        e.preventDefault();
        var name = '';
        var time = '';
        var price = '';

        name = $(this).attr('data-name');
        time = $(this).attr('data-time');
        price = $(this).attr('data-price');

        $('.js-diagnosis-name').text(name);
        $('.js-diagnosis-time').text(time);
        $('.js-diagnosis-price').text(price);
    });
}

function sliders() {
    $('.js-action-day').slick({
        autoplay: true,
        nextArrow: '<i class="action-day__arrow action-day__arrow_next">' +
        '<div class="arrow arrow_white">\n' +
        '  <svg width="33.518211mm" height="26.823923mm" viewBox="0 0 33.518211 26.823923" version="1.1" id="svg21">\n' +
        '   \n' +
        '    <g transform="translate(-55.812324,-107.45111)">\n' +
        '      <path id="path20" style="fill:#e22325;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.03527778" d="m 88.808437,122.26758 c 0.726615,-0.72672 0.689293,-1.9117 -0.07758,-2.59327 L 77.344112,107.9894 c -0.684389,-0.7039 -1.810103,-0.71949 -2.513895,-0.0348 -0.703791,0.68477 -0.719314,1.81049 -0.03493,2.51428 l 8.53299,8.75559 H 57.59491 c -0.984603,0 -1.782586,0.79834 -1.782586,1.78259 0,0.9846 0.797983,1.78294 1.782586,1.78294 h 25.649057 l -8.441619,8.44161 c -0.696031,0.69674 -0.696031,1.82492 0,2.52166 0.69603,0.69568 1.824919,0.69568 2.52095,0 l 11.485139,-11.48574"></path>\n' +
        '    </g>\n' +
        '  </svg>\n' +
        '\n' +
        '</div>' +
        '</i>',
        prevArrow: '<i class="action-day__arrow action-day__arrow_prev">' +
        '<div class="arrow arrow_white">\n' +
        '  <svg width="33.518211mm" height="26.823923mm" viewBox="0 0 33.518211 26.823923" version="1.1" id="svg21">\n' +
        '   \n' +
        '    <g transform="translate(-55.812324,-107.45111)">\n' +
        '      <path id="path20" style="fill:#e22325;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.03527778" d="m 88.808437,122.26758 c 0.726615,-0.72672 0.689293,-1.9117 -0.07758,-2.59327 L 77.344112,107.9894 c -0.684389,-0.7039 -1.810103,-0.71949 -2.513895,-0.0348 -0.703791,0.68477 -0.719314,1.81049 -0.03493,2.51428 l 8.53299,8.75559 H 57.59491 c -0.984603,0 -1.782586,0.79834 -1.782586,1.78259 0,0.9846 0.797983,1.78294 1.782586,1.78294 h 25.649057 l -8.441619,8.44161 c -0.696031,0.69674 -0.696031,1.82492 0,2.52166 0.69603,0.69568 1.824919,0.69568 2.52095,0 l 11.485139,-11.48574"></path>\n' +
        '    </g>\n' +
        '  </svg>\n' +
        '\n' +
        '</div>' +
        '</i>',
    });
    $('.js-additional-service').slick({
        autoplay: false,
        adaptiveHeight: true,
        nextArrow: '<i class="additional-service__arrow additional-service__arrow_next slick-next">' +
        '<div class="arrow arrow_red-hover">\n' +
        '  <svg width="33.518211mm" height="26.823923mm" viewBox="0 0 33.518211 26.823923" version="1.1" id="svg21">\n' +
        '   \n' +
        '    <g transform="translate(-55.812324,-107.45111)">\n' +
        '      <path id="path20" style="fill:#e22325;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.03527778" d="m 88.808437,122.26758 c 0.726615,-0.72672 0.689293,-1.9117 -0.07758,-2.59327 L 77.344112,107.9894 c -0.684389,-0.7039 -1.810103,-0.71949 -2.513895,-0.0348 -0.703791,0.68477 -0.719314,1.81049 -0.03493,2.51428 l 8.53299,8.75559 H 57.59491 c -0.984603,0 -1.782586,0.79834 -1.782586,1.78259 0,0.9846 0.797983,1.78294 1.782586,1.78294 h 25.649057 l -8.441619,8.44161 c -0.696031,0.69674 -0.696031,1.82492 0,2.52166 0.69603,0.69568 1.824919,0.69568 2.52095,0 l 11.485139,-11.48574"></path>\n' +
        '    </g>\n' +
        '  </svg>\n' +
        '\n' +
        '</div>' +
        '</i>',
        prevArrow: '<i class="additional-service__arrow additional-service__arrow_prev slick-prev">' +
        '<div class="arrow arrow_red-hover">\n' +
        '  <svg width="33.518211mm" height="26.823923mm" viewBox="0 0 33.518211 26.823923" version="1.1" id="svg21">\n' +
        '   \n' +
        '    <g transform="translate(-55.812324,-107.45111)">\n' +
        '      <path id="path20" style="fill:#e22325;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.03527778" d="m 88.808437,122.26758 c 0.726615,-0.72672 0.689293,-1.9117 -0.07758,-2.59327 L 77.344112,107.9894 c -0.684389,-0.7039 -1.810103,-0.71949 -2.513895,-0.0348 -0.703791,0.68477 -0.719314,1.81049 -0.03493,2.51428 l 8.53299,8.75559 H 57.59491 c -0.984603,0 -1.782586,0.79834 -1.782586,1.78259 0,0.9846 0.797983,1.78294 1.782586,1.78294 h 25.649057 l -8.441619,8.44161 c -0.696031,0.69674 -0.696031,1.82492 0,2.52166 0.69603,0.69568 1.824919,0.69568 2.52095,0 l 11.485139,-11.48574"></path>\n' +
        '    </g>\n' +
        '  </svg>\n' +
        '\n' +
        '</div>' +
        '</i>',
    });
    $('.js-reviews').slick({
        autoplay: false
    });


    $('.js-additional-slider-prev').on('click', function (e) {
        e.preventDefault();
        $('.js-additional-service').find('.slick-prev').click();
    });
    $('.js-additional-slider-next').on('click', function (e) {
        e.preventDefault();
        $('.js-additional-service').find('.slick-next').click();
    });

    $('.js-reviews-prev').on('click', function (e) {
        e.preventDefault();
        $('.js-reviews').find('.slick-prev').click();
    });
    $('.js-reviews-next').on('click', function (e) {
        e.preventDefault();
        $('.js-reviews').find('.slick-next').click();
    });


    $('.js-diagnosis-prev').on('click', function (e) {
        e.preventDefault();
        $('.js-diagnosis-mobile-slider').find('.slick-prev').click();
    });
    $('.js-diagnosis-next').on('click', function (e) {
        e.preventDefault();
        $('.js-diagnosis-mobile-slider').find('.slick-next').click();
    });
}

function showAllDefects() {
    $('.js-show-all-defects').on('click', function (e) {
        e.preventDefault();
        $('.js-all-defects').slideToggle();
        $(this).toggleClass('opened')
    });
}

function scrolls() {
    function scroll(link, object, time) {
        link.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: object.offset().top - 30
            }, time);
        });
    }

    scroll($('.js-about-price'), $('.js-price'), 500);
    scroll($('.js-action-day-btn'), $('.js-action-day-section'), 500);
    scroll($('.js-service-btn'), $('.js-service-section'), 500);
    scroll($('.js-additional-btn'), $('.js-additional-section'), 500);
    scroll($('.js-reviews-btn'), $('.js-reviews-section'), 500);
    scroll($('.js-partners-btn'), $('.js-partners-section'), 500);


}

function mobileMenu() {
    $('.js-open-mobile-menu').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('header-mobile__burger_active');
        $('.js-mobile-menu').slideToggle();


    });

    $('.js-mobile-menu').find('a').on('click', function (e) {
        $('.js-mobile-menu').slideUp();
        $('.js-open-mobile-menu').removeClass('header-mobile__burger_active');

    });
}

function callMe() {
    var form = $('.js-call-me-form');
    form.find('button').on('click', function (e) {
        e.preventDefault();
        var phone = form.find('.js-call-me-form-phone').val();
        var name = form.find('.js-call-me-form-name').val();
        if (phone) {
            var data = 'phone=' + phone;

            if (name) {
                data += '&name=' + name
            }


            $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: data,
                success: function (msg) {
                    if (name) {
                        form.find('.js-call-me-form-name').val('');
                        form.find('.js-call-me-form-phone').val('');
                        form.parent().append('<br><p>Заявка успешно отправлена! Мы ответим на нее в ближайшее время</p>');
                    } else {
                        form.find('.js-call-me-form-phone').val(msg);
                    }
                }
            });
        }
    });
}

function detailText() {
    $('.js-defects-list .defects__item').on("click" ,function(e) {
        e.preventDefault();
        var self = $(this);
        if ($(window).width() <= 990) {
            $(self).find('.defect__text').slideToggle();
        } else {
            if (!$('.js-detail-popup').length) {
                var popup = '<div class="popup js-detail-popup"><div class="popup__overlay"><div class="popup__wrap"></div></div></div>';
                $('body').append(popup);
            }
            var text = '<div class="like-h2">' + self.find('.defect__name span').html() + '</div>' + self.find('.defect__text').html();
            $('.js-detail-popup').find('.popup__wrap').html(text);
        }
    });

    $(document).keyup(function(e) {   // enter
        if (e.keyCode === 27) {
            if ($('.js-detail-popup').length) {
                $('.js-detail-popup').remove();
            }
        }
    });

    $(document).on('click', '.js-detail-popup', function(e) {
        e.preventDefault();
        $(this).remove();
    })
    
}
