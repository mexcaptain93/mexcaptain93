$(function() {
	datePickerInit();
});

function datePickerInit() {
	$('.datepicker').datepicker({
		format: "dd.mm.yyyy",
		language: "ru"
	});
}