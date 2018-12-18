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
    phoneMask();
    orderPage();
    popupCart();
});

function indexVideos() {
    var videos =  $('.js-index-videos'),
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

        prev.on('click', function (e)  {
            e.preventDefault();
           videos.slick('slickPrev');
        });

        next.on('click', function (e)  {
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

    burger.on('click', function(e) {
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
    var photos =  $('.js-product-photos'),
        prev = $('.js-product-photos-prev'),
        next = $('.js-product-photos-next');
    if (photos.length) {
        photos.slick({
            dots: true,
            infinite: false
        });

        prev.on('click', function (e)  {
            e.preventDefault();
            photos.slick('slickPrev');
        });

        next.on('click', function (e)  {
            e.preventDefault();
            photos.slick('slickNext');
        });

        photos.on('afterChange', function(event, slick, currentSlide, nextSlide){
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
    var instaSlider =  $('.js-insta-slider'),
        next = $('.js-insta-slider-next');
    if (instaSlider.length) {
        instaSlider.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            variableWidth: true
        });

        next.on('click', function (e)  {
            e.preventDefault();
            instaSlider.slick('slickNext');
        });
    }
}

function suggestSlider() {
    var suggestSlider =  $('.js-suggest-slider'),
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
           if ($(window).width() < 769 ) {
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

function phoneMask() {

    $('.js-phone-input').each(function (index, elem) {
        new IMask(elem, {
            mask: '+{7}(000)000-00-00'
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

        if(cartPopup.length) {
            cartPopup.show();
        }
    });

    cartClose.on('click', function (e) {
        e.preventDefault();

       if(cartPopup.length) {
           cartPopup.hide();
       }
    })
}