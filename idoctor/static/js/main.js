$(document).ready(function () {
    toggleHeaderSearch();
    togglers();
    diagnosis();
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
    $('.js-pain').on('click', function (e) {
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