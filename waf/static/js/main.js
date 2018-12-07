$(document).ready(function () {
    indexVideos();
    mobileMenu();
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

        $('body').toggleClass('stop-scrolling');
        if ($('body').hasClass('stop-scrolling')) {
            console.log('1')
            $('body').bind('touchmove', function(e){e.preventDefault()})
        } else {
            console.log(2)
            $('body').unbind('touchmove')
        }

    })


}