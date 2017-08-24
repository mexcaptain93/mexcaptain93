$(function() {
	datePickerInit();
	timePickerInit();
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