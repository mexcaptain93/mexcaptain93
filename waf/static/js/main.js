$(document).ready(function () {
    indexVideos();
    mobileMenu();
    catalogFilters();
    mobileFilter();
    productPhotos();
    quantityElement();
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
    })

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
        sort_values = $('.js-catalog-sort-values');

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
        sort_values.toggleClass('value__list_opened')
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
        var val_el = $(this).siblings('.js-quantity-value');
        val_el.val(parseInt(val_el.val()) + 1);
    });

    minus.on('click', function (e) {
        e.preventDefault();
        var val_el = $(this).siblings('.js-quantity-value');
        if (val_el.val() > 1) {
            val_el.val(parseInt(val_el.val()) - 1);
        }
    });
}