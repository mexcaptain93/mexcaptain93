$(function() {
	datePickerInit();
	timePickerInit();
	addLoader();
	showParking();
	showDocumentParams();
	typeaheadFirstname();
	typeaheadNum();
});


function getDateString(d) {
	return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
}

function datePickerInit() {
	if ($(window).width() < 768) {
		$('.datepicker input').attr({'type':'date', 'min': getDateString(new Date())});
	}
	else {
		$('.datepicker').datepicker({
			format: "dd.mm.yyyy",
			language: "ru",
			startDate: new Date(),
			autoclose: true
		}).on('changeDate', function() {
			d = $(this).datepicker('getDate');
			dateSelected = getDateString(d);
		});
	}
	$('.datepicker-multi').datepicker({
		format: "dd.mm.yyyy",
		language: "ru",
		multidate: true,
		multidateSeparator: ', ',
		startDate: new Date()
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
		var h = e.time.hours;
		var m = e.time.minutes;
		if (h * 60 + m < 480) {
			$(this).timepicker('setTime', '08:00');
		}
		if (h * 60 + m > 1200) {
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

function showParking() {
	$('input:radio[name="parking"]').on('change', function(e) {
		if ($(this).val() == 'true') {
			$('.js-parking').slideDown();
		}
		else {
			$('.js-parking').slideUp();
		}
	});
}

function showDocumentParams() {
	$('input:radio[name="docType"]').on('change', function(e) {
		if ($(this).is(':checked')) {
			$('.js-docparams').slideDown();
		}

	});
}

var substringMatcher = function(strs) {
	return function findMatches(q, cb) {
		var matches, substrRegex;

		// an array that will be populated with substring matches
		matches = [];

		// regex used to determine if a string contains the substring `q`
		substrRegex = new RegExp(q, 'i');

		// iterate through the pool of strings and for any string that
		// contains the substring `q`, add it to the `matches` array
		$.each(strs, function(i, str) {
			if (substrRegex.test(str)) {
				matches.push(str);
			}
		});

		cb(matches);
	};
};

function typeaheadFirstname() {
	var firstnames = ['Иванов', 'Петров', 'Сидоров', 'Андреев', 'Аннин'];

	$('.js-typeahead-firstname').typeahead({
			hint: true,
			highlight: true,
			minLength: 1
		},
		{
			name: 'firstnames',
			source: substringMatcher(firstnames)
		});
}

function typeaheadNum() {
	var numbers = ['О111ОН77', 'А111МР00', 'К469ЕК123', 'В111ОР777'];

	$('.js-typeahead-number').typeahead({
			hint: true,
			highlight: true,
			minLength: 1
		},
		{
			name: 'numbers',
			source: substringMatcher(numbers)
		});
}