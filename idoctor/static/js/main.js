$(document).ready(function () {
    toggleHeaderSearch();
    togglers();
    diagnosis();
    sliders();
    showAllDefects();
    scrolls();
});


function toggleHeaderSearch() {
    $('.js-show-header-search-bar').on('click', function (e) {
        e.preventDefault();
        $('.js-header-search-bar').addClass('header__search_visible');
        console.log('dich')
    });

    $(document).click(function (event) {
        if ((!$(event.target).closest('.js-header-search-bar').length) && !$(event.target).closest('.js-show-header-search-bar').length ) {
           if ($('.js-header-search-bar').hasClass('header__search_visible')) {
               $('.js-header-search-bar').removeClass('header__search_visible');
           }
        }
    });
}

function togglers() {
    var selectedType = '';
    var typeToggler = $('.js-toggler-type');
    var typesQuantity = typeToggler.find('[data-value]').length;
    refreshBack(typeToggler, typesQuantity);

    typeToggler.find('[data-value]').on('click',function (e) {
        e.preventDefault();
        selectedType = $(this).attr('data-value');
        typeToggler.attr('data-value', selectedType);
        refreshBack(typeToggler, typesQuantity);
    });


    var selectedModel = '';
    var modelToggler = $('.js-toggler-model');
    var modelsQuantity = modelToggler.find('[data-value]').length;

    refreshBack(modelToggler, modelsQuantity);

    modelToggler.find('[data-value]').on('click',function (e) {
        e.preventDefault();
        selectedModel = $(this).attr('data-value');
        modelToggler.attr('data-value', selectedModel);
        refreshBack(modelToggler, modelsQuantity);
    });


    function refreshBack(el, q) {
        var index = el.find("[data-value='" + el.attr('data-value') + "']").index();
        el.find('.toggler__back').css({'left':el.width() / q * index});
    }
}

function diagnosis() {
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
        autoplay: true,
        nextArrow: '<i class="additional-service__arrow additional-service__arrow_next">' +
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
        prevArrow: '<i class="additional-service__arrow additional-service__arrow_prev">' +
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
        autoplay: false,
        nextArrow: '<i class="reviews__arrow reviews__arrow_next">' +
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
        prevArrow: '<i class="reviews__arrow reviews__arrow_prev">' +
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
}

function showAllDefects() {
    $('.js-show-all-defects').on('click', function (e) {
        e.preventDefault();
        $('.js-all-defects').slideToggle();
        $(this).toggleClass('opened')
    });
}

function scrolls() {
    function template(link, object, time) {
        link.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: object.offset().top - 30
            }, time);
        });
    }

    template($('.js-how-to-drive'), $('.js-map'), 2000);
    template($('.js-about-price'), $('.js-price'), 500);


}