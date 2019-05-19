$(function () {
    checklist();
    problems();
    services();
    selects();
    steps();
    reviews();
    map();
    popups();
});

function checklist() {

    var slider = $('.js-checklist-slider'),
        elem = $('.js-checklist-item'),
        current = $('.js-checklist-slider-current'),
        total = $('.js-checklist-slider-total'),
        amount = slider.find('> *').length,
        currentSlide,
        prev = $('.js-checklist-slider-prev'),
        next = $('.js-checklist-slider-next'),
        problems = $('.js-problems-slider');

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


    slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        problems.removeClass('problems__list_visible');
        ;
        problems.eq(currentSlide).addClass('problems__list_visible');

        problems.each(function (index, e) {
            if ($(e).hasClass('slick-initialized')) {
                $(e).slick('unslick')
            }
        });

        initProblemsSlider(problems, currentSlide);


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

    slider.eq(0).addClass('problems__list_visible');

    $(window).on('resize', function () {
        if ($(window).width() < 768) {
            if (!$('.problems__list_visible').hasClass('slick-initialized')) {
                initProblemsSlider(slider, $('.problems__list_visible').index() - 1);
            }
        } else {
            if ($('.problems__list_visible.slick-initialized').length) {
                $('.problems__list_visible').slick('unslick');
            }
        }
    });

    initProblemsSlider(slider, 0);


}

function initProblemsSlider(slider, num) {
    if ($(window).width() < 768) {
        if (slider.eq(num).length && $.fn.slick) {
            slider.eq(num).slick({
                arrows: false,
                dots: true,
                adaptiveHeight: true
            });
        }
    }
}

function services() {
    var slider = $('.js-services-list');

    if (slider.length && $.fn.slick) {
        slider.slick({
            arrows: false,
            dots: true,
            adaptiveHeight: true,
            slidesToScroll: 3,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        adaptiveHeight: true
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    },
                }
            ]
        });
    }
}

function selects() {
    var select = $('.js-select');

    if (select.length && $.fn.select2) {
        select.select2({
            width: '100%',
            minimumResultsForSearch: -1
        });
    }
}

function steps() {
    var slider = $('.js-steps-slider');

    function initStepsSlider() {
        if (slider.length && $.fn.slick && !slider.hasClass('slick-initialized') && $(window).width() < 1024) {
            slider.slick({
                arrows: false,
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        },
                    }
                ]
            });
        }
    }

    initStepsSlider();

    $(window).on('resize', function () {
        if ($(window).width() < 1024) {
            initStepsSlider();
        } else {
            if (slider.length && slider.hasClass('slick-initialized')) {
                slider.slick('unslick');
            }
        }
    });


}

function reviews() {
    var slider = $('.js-reviews-slider'),
        prev = $('.js-reviews-prev'),
        next = $('.js-reviews-next');

    if (slider.length && $.fn.slick) {
        slider.slick({
            arrows: false,
            dots: false,
            slidesToScroll: 1,
            slidesToShow: 1,
            variableWidth: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        dots: true,
                        variableWidth: false
                    }
                },
            ]
        });

        prev.on('click', function (e) {
            e.preventDefault();
            slider.slick('slickPrev');
        });
        next.on('click', function (e) {
            e.preventDefault();
            slider.slick('slickNext');
        });
    }
}

function map() {

    center = {lat: 64.544696, lng: 40.51629066};

    if ($(window).width() < 1024) {
        center = {lat: 64.54464989, lng: 40.51231119};
    }

    if ($(window).width() < 768) {
        center = {lat: 64.54564989, lng: 40.51629066};
    }


    var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 16,
        disableDefaultUI: true,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    });

    var marker = new google.maps.Marker({
        position: {lat: 64.544696, lng: 40.51629066},
        map: map,
        title: 'Аудитавто',
        icon: {
            url: 'static/img/general/pin.png',
            scaledSize: new google.maps.Size(63, 90)
        },
    });


}

function popups() {
    var popupRequest = $('.js-popup-request'),
        popupRequestClose = $('.js-popup-request-close'),
        popupRequestOpener = $('.js-popup-request-opener');

    if (popupRequest.length) {
        popupRequestOpener.on('click', function (e) {
            e.preventDefault();
            popupRequest.show();
            $('body').addClass('stop-scroll');
        });

        popupRequestClose.on('click', function (e) {
            e.preventDefault();
            popupRequest.hide();
            $('body').removeClass('stop-scroll');
        });
    }

    var popupRequestOk = $('.js-popup-request-ok'),
        popupRequestOkClose = $('.js-popup-request-ok-close'),
        popupRequestOkOpener = $('.js-popup-request-ok-opener');

    if (popupRequestOk.length) {
        popupRequestOpener.on('click', function (e) {
            e.preventDefault();
            popupRequest.show();
            $('body').addClass('stop-scroll');
        });

        popupRequestOkClose.on('click', function (e) {
            e.preventDefault();
            popupRequestOk.hide();
            $('body').removeClass('stop-scroll');
        });
    }

    var popupService = $('.js-popup-service'),
        popupServiceClose = $('.js-popup-service-close'),
        popupServiceOpener = $('.js-popup-service-btn'),
        popupServiceImg = $('.js-service-popup-img'),
        popupServiceTitle = $('.js-service-popup-title'),
        popupServiceDescr = $('.js-service-popup-descr'),
        popupServiceLastText = $('.js-service-popup-lastText');

    popupServiceClose.on('click', function (e) {
        e.preventDefault();
        popupService.hide();
        $('body').removeClass('stop-scroll');
    });

    popupServiceOpener.on('click', function (e) {
        e.preventDefault();

        if ($(this).data('title')) {
            var title = $(this).data('title');
        }
        if ($(this).data('descr')) {
            var descr = $(this).data('descr');
        }
        if ($(this).data('title')) {
            var lastText = $(this).data('lastText');
        }
        if ($(this).data('img')) {
            var img = $(this).data('img');
        }

        if (title && descr) {
            popupService.show();
            $('body').addClass('stop-scroll');
            popupServiceImg.css('background-image', 'url("' + img + '")');
            popupServiceTitle.html(title);
            popupServiceDescr.html(descr);
            popupServiceLastText.html(lastText);
        }
    });

    var burger = $('.js-burger'),
        menu = $('.js-menu');

    burger.on('click', function (e) {
        e.preventDefault();
        menu.toggle();
        burger.toggleClass('welcome__burger_opened');
    });
}

