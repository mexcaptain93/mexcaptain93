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

function messageBar() {
	$('.js-message-bar-close').on('click', function(e) {
		e.preventDefault();
		$('.js-message-bar').slideUp();
	})
}

function inputQuantity() {
	$('.js-quantity-minus').on('click', function(e) {
		var input = $(this).siblings('input');
		if (input.val() > 1) {
			var val = input.val();
			input.val(--val);
		}
	});
	$('.js-quantity-plus').on('click', function(e) {
		var input = $(this).siblings('input');
		var val = input.val();
		input.val(++val);
	});
}
$(function() {
	menuSidebar();
	messageBar();
	inputQuantity();
});

