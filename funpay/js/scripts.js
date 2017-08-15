function sliders() {
	$('.js-profile-slider').slick({
		dots: true,
		nextArrow: '<i class="slider__arrow slider__arrow_right"></i>',
		prevArrow: '<i class="slider__arrow slider__arrow_left"></i>'
	});
}

function hearts() {
	var rellax = new Rellax('.rellax');
}

function userMenu() {
	var opened = false;
	$('.js-user-menu-open').on('click', function(e) {
		e.preventDefault();
		if (opened) {
			$('.js-user-menu').slideUp('fast');
			$('.js-user-menu-open > i').removeClass('rotated');
		}
		else {
			$('.js-user-menu').slideDown('fast');
			$('.js-user-menu-open > i').addClass('rotated');
		}

		opened = !opened;
	});

	$(document).mouseup(function (e) {
		var container = $('.js-user-menu');
		if (container.parent().has(e.target).length === 0){
			container.slideUp('fast');
			$('.js-user-menu-open > i').removeClass('rotated');
			opened = false;
		}
	});
}

function placeInfo() {
	$('.js-show-place-to-slide').on('click', function(e) {
		e.preventDefault();
		$(this).find('i').toggleClass('rotated');
		$(this).parents('.place__main').siblings('.js-place-to-slide').slideToggle();

		var sl = $(this).parents('.place__main').siblings('.js-place-to-slide').find('.js-places-slider');
		if (sl.hasClass('slick-initialized')) {
			sl.slick('destroy');
		}
		sl.slick({
			nextArrow: '<i class="actions__arrow actions__arrow_right"></i>',
			prevArrow: '<i class="actions__arrow actions__arrow_left"></i>'
		});


	});
}

function promoPopup() {
	$('.js-promo-show').on('click', function(e) {
		e.preventDefault();
		$('.js-promo').addClass('show');
	});

	$('.js-promo-close').on('click', function(e) {
		e.preventDefault();
		$('.js-promo').removeClass('show');
	});
}
function popup404() {
	$('.js-popup-404-show').on('click', function(e) {
		e.preventDefault();
		$('.js-popup-404').addClass('show');
	});

	$('.js-popup-404-close').on('click', function(e) {
		e.preventDefault();
		$('.js-popup-404').removeClass('show');
	});
}

function bonusPopularToggle() {
	$('.js-btn-popular').on('click', function(e) {
		e.preventDefault();
		$('.js-popular').show();
		$('.js-bonus').hide();
	});

	$('.js-btn-bonus').on('click', function(e) {
		e.preventDefault();
		$('.js-bonus').show();
		$('.js-popular').hide();
	});
}

function select() {
	$(".js-select-city-list").niceScroll({
		cursorcolor:"#c6c6c6",
		cursorwidth: '7px',
		cursorborderradius: '4px',
		railpadding: {
			right: 13
		}
	});

	var opened = false;
	$('.js-city-select-open').on('click', function(e) {
		e.preventDefault();
		if (opened) {
			$('.js-city-select').slideUp('fast');
			$('.js-city-select-open > i').removeClass('rotated');
		}
		else {
			$('.js-city-select').slideDown('fast');
			$('.js-city-select-open > i').addClass('rotated');
		}

		opened = !opened;
	});


	$(document).mouseup(function (e) {
		var container = $('.js-city-select');
		if (container.parent().has(e.target).length === 0){
			container.slideUp('fast');
			$('.js-city-select-open > i').removeClass('rotated');
			opened = false;
		}
	});

}

$(function() {
	sliders();
	hearts();
	userMenu();
	placeInfo();
	promoPopup();
	popup404();
	bonusPopularToggle();
	select();

});