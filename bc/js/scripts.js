$(function() {
	datePickerInit();
	timePickerInit();
	addLoader();
});

function datePickerInit() {
	$('.datepicker').datepicker({
		format: "dd.mm.yyyy",
		language: "ru"
	});
	$('.datepicker-multi').datepicker({
		format: "dd.mm.yyyy",
		language: "ru",
		multidate: true,
		multidateSeparator: ', '
	});
}

function timePickerInit() {
	$('.timepicker').timepicker({
		showMeridian: false,
		minuteStep: 5,
		showInputs: true,
	})

	$('.timepicker-limited').timepicker({
		showMeridian: false,
		minuteStep: 5,
		showInputs: true,
	}).on('changeTime.timepicker', function(e) {
		var h  = e.time.hours;
		var m  = e.time.minutes;
		if (h*60+m  < 480) {
			$(this).timepicker('setTime', '08:00');
		}
		if (h*60+m > 1200) {
			$(this).timepicker('setTime', '20:00');
		}
	});
}

function addLoader() {
	var loaders = 0;
	$('.js-add-loader').on('click', function(e) {
		loaders++;
		e.preventDefault();
		$('.js-loaders-item').eq(0).clone().appendTo('.js-loaders-list').find('.form-group').each(function() {
			$(this).find('input').each(function() {
				$(this).val('').attr('id', $(this).attr('id') + '_' + loaders);
			});
			$(this).find('label').each(function() {
				$(this).attr('for', $(this).attr('for') + '_' + loaders);
			});
		})
	});
}