$(document).ready(function () {
    indexVideos();
    mobileMenu();
    catalogFilters();
    mobileFilter();
    productPhotos();
    quantityElement();
    instaSlider();
    suggestSlider();
    zoomProductImg();
    productTabs();
    masks();
    orderPage();
    popupCart();
    whereBuyMap();
    selects();
    wholesalePage();
    textPagePopup();
    instaPopup();
});

function indexVideos() {
    var videos = $('.js-index-videos'),
        prev = $('.js-index-videos-prev'),
        next = $('.js-index-videos-next');
    if (videos.length) {
        videos.slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        dots: true
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
            ]
        });

        prev.on('click', function (e) {
            e.preventDefault();
            videos.slick('slickPrev');
        });

        next.on('click', function (e) {
            e.preventDefault();
            videos.slick('slickNext');
        });
    }
}

function mobileMenu() {

    var burger = $('.js-burger'),
        dropdown = $('.js-dropdown'),
        item = $('.js-mobile-menu-has-sub').find('> a'),
        submenu = $('.js-mobile-menu-submenu');

    item.on('click', function (e) {
        e.preventDefault();
        $(this).siblings(submenu).slideToggle();
    });

    burger.on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('burger_opened');
        dropdown.toggle();
    })

}

function catalogFilters() {
    var opener = $('.js-catalog-filters li'),
        values = $('.js-catalog-filters-value ul'),
        sort = $('.js-catalog-sort'),
        sortValues = $('.js-catalog-sort-values');

    opener.on('click', function (e) {
        e.preventDefault();
        sort.removeClass('filters__item_opened');
        if ($(this).hasClass('filters__item_opened')) {
            $(this).removeClass('filters__item_opened');
            values.removeClass('value__list_opened');
        } else {
            opener.removeClass('filters__item_opened');
            $(this).addClass('filters__item_opened');
            var num = $(this).index();
            values.removeClass('value__list_opened');
            values.eq(num).addClass('value__list_opened');
        }
    });

    sort.on('click', function (e) {
        opener.removeClass('filters__item_opened');
        values.removeClass('value__list_opened');
        $(this).toggleClass('filters__item_opened');
        sortValues.toggleClass('value__list_opened')
    });


}

function mobileFilter() {
    var opener = $('.js-mobile-filter'),
        values = $('.js-mobile-filter-value');

    opener.on('click', function (e) {
        e.preventDefault();
        $(this).siblings(values).slideToggle();
        $(this).parent().toggleClass('filters-sort-mobile__item_opened')
    });
}

function productPhotos() {
    var photos = $('.js-product-photos'),
        prev = $('.js-product-photos-prev'),
        next = $('.js-product-photos-next');
    if (photos.length) {
        photos.slick({
            dots: true,
            infinite: false
        });

        prev.on('click', function (e) {
            e.preventDefault();
            photos.slick('slickPrev');
        });

        next.on('click', function (e) {
            e.preventDefault();
            photos.slick('slickNext');
        });

        photos.on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.photos__arrow_inactive').removeClass('photos__arrow_inactive');

            if ($('.slick-prev').hasClass('slick-disabled')) {
                prev.addClass('photos__arrow_inactive');
            }

            if ($('.slick-next').hasClass('slick-disabled')) {
                next.addClass('photos__arrow_inactive');
            }

        });
    }
}

function quantityElement() {
    var plus = $('.js-quantity-plus'),
        minus = $('.js-quantity-minus');

    plus.on('click', function (e) {
        e.preventDefault();
        var valEl = $(this).siblings('.js-quantity-value');
        valEl.val(parseInt(valEl.val()) + 1);
    });

    minus.on('click', function (e) {
        e.preventDefault();
        var valEl = $(this).siblings('.js-quantity-value');
        if (valEl.val() > 1) {
            valEl.val(parseInt(valEl.val()) - 1);
        }
    });
}

function instaSlider() {
    var instaSlider = $('.js-insta-slider'),
        next = $('.js-insta-slider-next');
    if (instaSlider.length) {
        instaSlider.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            variableWidth: true,
            touchThreshold: 450
        });

        next.on('click', function (e) {
            e.preventDefault();
            instaSlider.slick('slickNext');
        });
    }
}

function suggestSlider() {
    var suggestSlider = $('.js-suggest-slider'),
        next = $('.js-suggest-slider-next'),
        prev = $('.js-suggest-slider-prev');

    init();
    $(window).resize(function () {
        init();
    });

    function init() {
        if ($(window).width() < 481) {

            if (suggestSlider.length && !suggestSlider.hasClass('slick-initialized')) {

                suggestSlider.slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 481,
                            settings: {
                                slidesToShow: 1,
                                infinite: false
                            }
                        },
                    ]
                });

                prev.on('click', function (e) {
                    e.preventDefault();
                    suggestSlider.slick('slickPrev');
                });

                next.on('click', function (e) {
                    e.preventDefault();
                    suggestSlider.slick('slickNext');
                });

                suggestSlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
                    $('.suggest__arrow_inactive').removeClass('suggest__arrow_inactive');
                    if (suggestSlider.find('.slick-prev').hasClass('slick-disabled')) {
                        prev.addClass('suggest__arrow_inactive');
                    }

                    if (suggestSlider.find('.slick-next').hasClass('slick-disabled')) {
                        next.addClass('suggest__arrow_inactive');
                    }

                });
            }

        } else {
            if (suggestSlider.hasClass('slick-initialized')) {
                suggestSlider.slick('destroy');
            }
        }
    }
}

function zoomProductImg() {
    var img = $('.js-product-photos img');

    if (img.length && $.fn.okzoom && $(window).width() > 480) {
        img.okzoom({
            width: 300,
            height: 300,
            round: false,
            background: "#fff",
            backgroundRepeat: "no-repeat",
            shadow: "0 5px 30px rgba(0,0,0,.2)",
            border: "none"
        });
    }
}

function productTabs() {
    var tabs = $('.js-product-tabs');

    if (tabs) {
        tabs.find('label').on('click', function (e) {
            if ($(window).width() < 769) {
                e.preventDefault();
                var f = $(this).attr('for');
                var inp = $('#' + f);

                console.log(inp.prop('checked'))
                if (inp.prop('checked')) {
                    inp.removeAttr("checked");
                } else {
                    inp.prop('checked', true);
                }


            }
        });
    }
}

function masks() {

    $('.js-phone-input').each(function (index, elem) {
        new IMask(elem, {
            mask: '+{7}(000)000-00-00'
        });
    });

    $('.js-email-input').each(function (index, elem) {
        new IMask(elem, {
            mask: /^\S*@?\S*$/
        });
    });
}

function orderPage() {
    var details = $('.js-order-details');

    details.find('.details__head').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('.details__content').slideToggle();
        $(this).siblings('.details__summary').toggle();
    })

}

function popupCart() {
    var cartPopup = $('.js-cart-popup'),
        cartClose = $('.js-cart-popup-close'),
        cartOpen = $('.js-cart-popup-open');

    cartOpen.on('click', function (e) {
        e.preventDefault();

        if (cartPopup.length) {
            cartPopup.show();
        }
    });

    cartClose.on('click', function (e) {
        e.preventDefault();

        if (cartPopup.length) {
            cartPopup.hide();
        }
    })
}

function whereBuyMap() {

    var places = [];
    var myMap = false;

    if ($('#map-wherebuy').length && $(window).width() > 767) {
        initMap();
    }

    $(window).on('resize', function () {
        if (!myMap && $(window).width() > 767 && $('#map-wherebuy').length) {
            initMap();
        }
    });

    function initMap() {
        ymaps.ready(function () {
            if (!myMap && dataMap) {
                myMap = new ymaps.Map('map-wherebuy', {
                    center: dataMap.center,
                    zoom: dataMap.zoom,
                    behaviors: ['default', 'scrollZoom'],
                    controls: ['zoomControl', 'fullscreenControl']
                }, {
                    searchControlProvider: 'yandex#search'
                });
                clusterer = new ymaps.Clusterer();
                myMap.geoObjects.add(clusterer)
                if (dataMap.items.length > 0) {
                    dataMap.items.forEach(function (item) {
                        var custom_html = '';
                        if (item.custom) {
                            custom_html = '<div class=\"shop__custom\">' + item.custom + '</div>';
                        }
                        var hours = '';
                        if (item.hours) {
                            hours = item.hours;
                        }

                        myPlacemark = new ymaps.Placemark(item.coordinates,


                            {
                                balloonContentBody: "<div class=\"shop\">\n" +
                                    "                  <div class=\"shop__info\">\n" +
                                    "                    <div class=\"shop__name\"><span>" + item.name + "</span></div>\n" +
                                    custom_html + "                    <div class=\"shop__address\"><span>" + item.address + "</span></div>\n" +
                                    hours + "                    <div class=\"shop__phone\">Тел: " + item.phone + "</div>" +
                                    "                  </div>\n" +
                                    "                </div>"
                            },

                            {

                                iconImageSize: [66, 90],
                                iconImageOffset: [-33, -90]
                            });
                        places[item.id] = myPlacemark;


                    });

                    places.forEach(function (shop, index) {
                        clusterer.add(shop);

                        shop.events.add('click', function (e) {
                            if (index) {
                                $('.shop_bordered').removeClass('shop_bordered');
                                $('[data-shop-id=' + index + ']').closest('.shop').addClass('shop_bordered');
                            }
                        })
                    });


                }
            }
        });
    }

    $('.js-map-show-shop').on('click', function (e) {
        e.preventDefault();
        if ($(this).data('shop-id') && myMap) {
            var id_shop = $(this).data('shop-id');
            places[id_shop].balloon.open();
            $('.shop_bordered').removeClass('shop_bordered');
            $(this).closest('.shop').addClass('shop_bordered');
        }
    });

}

function selects() {
    function init() {

        if ($('.js-select').length) {

            $('.js-select').select2({
                minimumResultsForSearch: -1
            });
        }
    }

    init();

    $(window).on('resize', function () {
        init();
    })
}

function wholesalePage() {
    $('.js-wholesale-reason').find('.reason__btn').on('click', function (e) {
        e.preventDefault();
        $('.reason_opened').removeClass('reason_opened');

        $(this).closest('.js-wholesale-reason').addClass('reason_opened');
    });

    $('.js-wholesale-reason').find('.more__close').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.js-wholesale-reason').removeClass('reason_opened');
    });

    $('.js-wholesale-reason .more__text').each(function (index, elem) {
        new SimpleBar(elem, {
            autoHide: false
        });
    });

}

function textPagePopup() {
    $('.js-text-page-btn').on('click', function (e) {
        e.preventDefault();
        $(this).parent().siblings('.js-text-page-popup').show();
    });

    $('.js-text-page-popup-close').on('click', function (e) {
        e.preventDefault();
        $(this).parent().hide();
    });
}

function instaPopup() {
    var instaPopupSlider = $('.js-insta-popup-slick');



    $('.js-insta-popup-close').on('click', function (e) {
        e.preventDefault();
        $('.js-insta-popup').hide();
        if (instaPopupSlider) {
            instaPopupSlider.slick('unslick');
        }
    });

    $('.js-insta-popup').find('.insta-popup__overlay').on('click', function (e) {
        if (e.target == this) {
            $('.js-insta-popup').hide();
            if (instaPopupSlider) {
                instaPopupSlider.slick('unslick');
            }
        }
    });

    $('.instagram__btn, .insta-slider__item, .instagram__item').on('click', function (e) {
        e.preventDefault();
        if ($('.js-insta-popup').length) {
            $('.js-insta-popup').show();

            if (instaPopupSlider) {
                instaPopupSlider.slick({
                    infinite: false
                });

                var prev = instaPopupSlider.find('.product__arrow_prev'),
                    next = instaPopupSlider.find('.product__arrow_next')

                prev.on('click', function (e) {
                    e.preventDefault();
                    instaPopupSlider.slick('slickPrev');
                });

                next.on('click', function (e) {
                    e.preventDefault();
                    instaPopupSlider.slick('slickNext');
                });

                instaPopupSlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
                    $('.product__arrow_inactive').removeClass('product__arrow_inactive');
                    if (instaPopupSlider.find('.slick-prev').hasClass('slick-disabled')) {
                        prev.addClass('product__arrow_inactive');
                    }

                    if (instaPopupSlider.find('.slick-next').hasClass('slick-disabled')) {
                        next.addClass('product__arrow_inactive');
                    }

                });

            }

        }

    })
}

