$(document).ready(function () {
    indexVideos();
});

function indexVideos() {
    var videos =  $('.js-index-videos'),
        prev = $('.js-index-videos-prev'),
        next = $('.js-index-videos-next');
    if (videos.length) {
        videos.slick({
            slidesToShow: 2,
            slidesToScroll: 2
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