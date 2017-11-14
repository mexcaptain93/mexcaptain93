$(function(){

    let checked = localStorage.getItem('checked');

    if (checked != null) {
        starsAddColor(checked);
    }

    $('.js-star').on('click', function(e) {
        e.preventDefault();
        let value = $(this).index();
        starsAddColor(value);
        checked = value;
    });

    $('.js-star').on('mouseover', function(e) {
        e.preventDefault();
        let value = $(this).index();
        starsAddColor(value);
    });

    $('.stars__list').on('mouseout', function (e) {
        e.preventDefault();
        if (checked == null) {
            $('.js-star').removeClass('stars__item_checked');
        }
    });

    $('.js-save').on('click', function (e) {
        e.preventDefault();
        localStorage.setItem('checked', checked)
    });

    // Подсветка необходимого кол-ва звёзд
    function starsAddColor(val) {
        $('.js-star').removeClass('stars__item_checked');
        for (let i=0; i<=val; i++) {
            $('.js-star').eq(i).addClass('stars__item_checked');
        }
    }
});