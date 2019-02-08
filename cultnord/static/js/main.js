$(function () {
    indexSliders();
    categoryDropdown();
    paginationNoline();
    headerSearch();
    headerDropdown();
    selects();
});

$(window).resize(function () {
    paginationNoline();
});

function indexSliders() {
    var sliderTop = $('.js-index-slider-top'),
        sliderMain = $('.js-index-slider-main'),
        sliderMainPrev = $('.js-index-slider-main-prev'),
        sliderMainNext = $('.js-index-slider-main-next'),
        sliderFest = $('.js-index-slider-fest'),
        sliderLinks = $('.js-index-slider-links'),
        sliderLinksPrev = $('.js-index-slider-links-prev'),
        sliderLinksNext = $('.js-index-slider-links-next');

    if (sliderTop.length) {
        sliderTop.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoPlay: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ],


        });
    }

    if (sliderMain.length) {
        sliderMain.slick({
            arrows: false,
            adaptiveHeight: true
        });
    }

    sliderMainPrev.on('click', function (e) {
        e.preventDefault();
        sliderMain.slick('slickPrev');
    });

    sliderMainNext.on('click', function (e) {
        e.preventDefault();
        sliderMain.slick('slickNext');
    });


    if (sliderFest.length) {
        sliderFest.slick({
            arrows: false,
            adaptiveHeight: true,
            dots: true
        });
    }

    if (sliderLinks.length) {
        sliderLinks.slick({
            arrows: true,
            adaptiveHeight: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            autoPlay: true,
            responsive: [
                {
                    breakpoint: 1281,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 661,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 381,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ],
        });
    }

    sliderLinksPrev.on('click', function (e) {
        e.preventDefault();
        sliderLinks.slick('slickPrev');
    });

    sliderLinksNext.on('click', function (e) {
        e.preventDefault();
        sliderLinks.slick('slickNext');
    });
}

function categoryDropdown() {
    $('.js-category-dd-link').on('click', function (e) {
        e.preventDefault();
        $('.js-category-dd').not($(this).siblings('.js-category-dd')).hide();
        $(this).siblings('.js-category-dd').toggle();
        $(this).parents('.subcat').toggleClass('subcat_opened');
        $(this).find('.js-category-dd-link-show').toggle();
        $(this).find('.js-category-dd-link-hide').toggle();
    });
}

function paginationNoline() {
    var pagination = $('.js-pagination-noline li');

    if (pagination.length) {
        var topLast = pagination.eq(0).offset().top;
        $('.pagination__item_noline').removeClass('pagination__item_noline');

        pagination.each(function () {
            var top = $(this).offset().top;

            if (top > topLast) {
                $(this).prev().addClass('pagination__item_noline');
                topLast = top;
            }
        });
    }
}

function headerSearch() {
    var opener = $('.js-header-search-open'),
        closer = $('.js-header-search-close'),
        form = $('.js-header-search');

    opener.on('click', function () {
       form.addClass('search-form_opened');
       console.log()
    });

    closer.on('click', function () {
       form.removeClass('search-form_opened');
    });
}

function headerDropdown() {
    var opener = $('.js-header-dropdown-open'),
        closer = $('.js-header-dropdown-close'),
        dd = $('.js-header-dropdown');

    opener.on('click', function () {
        dd.addClass('dropdown_opened');
        $('body').addClass('stop-scroll');
    });

    closer.on('click', function () {
        dd.removeClass('dropdown_opened');
        $('body').removeClass('stop-scroll');
    });
}

function selects() {
    if($().select2) {
        $('.select').select2();
    }
}