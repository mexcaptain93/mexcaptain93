function mobileMenu() {
	const bodyOverflow = $('body').css('overflow');
	$('.js-mobile-menu-btn').on('click', function(e) {
		e.preventDefault();
		$('.js-mobile-menu').slideDown(200);
		document.addEventListener('touchmove', forbidScroll);
		$('body').css({'overflow': 'hidden'});
	});
	$('.js-mobile-menu-close').on('click', function(e) {
		e.preventDefault();
		$('.js-mobile-menu').slideUp(200);
		document.removeEventListener('touchmove', forbidScroll);
		$('body').css({'overflow': bodyOverflow});
	});

	$('.js-mobile-menu-categories-btn').on('click', function(e) {
		e.preventDefault();
		$('.js-mobile-menu-categories').slideToggle(200);
		$(this).find('i').toggleClass('rotated');
	});
}

function menuSidebar() {
	$('.js-menu-sidebar-item > a').on('click', function(e) {
		e.preventDefault();
		var ul = $(this).parent().find('ul');
		if (ul.is(":visible")) {
			ul.slideUp();
		} else {
			$('.js-menu-sidebar').find('ul').slideUp();
			ul.slideDown();
		}
	});
}

function equalHeightHot() {
	if ($(window).width() < 980) {
		return;
	}
	$('.js-hot-table-row .category-small').matchHeight({});
}

function equalHeightBottom() {
	if ($(window).width() < 980 && $(window).width() >= 1440) {
		return;
	}
	$('.js-equal-bottom').matchHeight({});
}

function equalHeightBottom3() {
	if ($(window).width() < 1399) {
		return;
	}
	$('.js-equal-bottom-3').matchHeight({});
	console.log(123)
}


$(function() {
	mobileMenu();
	menuSidebar();
	equalHeightHot();
	equalHeightBottom3();
	equalHeightBottom();
});

$(window).resize(function() {
	equalHeightHot();
	equalHeightBottom3();
	equalHeightBottom();
});

function forbidScroll(e) {
	e.preventDefault();
}