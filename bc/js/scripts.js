$(function () {
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

var todayTime = 480;

function datePickerInit() {
    if ($(window).width() < 768) {
        $('.datepicker input').attr({'type': 'date', 'min': getDateString(new Date())});
    }
    else {
        $('.datepicker').datepicker({
            format: "dd.mm.yyyy",
            language: "ru",
            startDate: new Date(),
            autoclose: true
        }).on('changeDate', function () {
            d = $(this).datepicker('getDate');
            dateSelected = getDateString(d);
            todayTime = 480;
            if (getDateString(d) == getDateString(new Date())) {
                d = new Date();
                if (d.getHours() * 60 + d.getMinutes() > todayTime) {
                    todayTime = d.getHours() * 60 + d.getMinutes();
                    $('.timepicker-limited').timepicker('setTime', d.getHours() + ":" + d.getMinutes())
                }
            }
        });
    }
    $('.datepicker-multi').datepicker({
        format: "dd.mm.yyyy",
        language: "ru",
        multidate: true,
        multidateSeparator: ', ',
        startDate: new Date()
    });


    $('.datepicker input').on('change', function () {
        todayTime = 480;
        if ($(this).val() == getDateString(new Date())) {
            d = new Date();
            if (d.getHours() * 60 + d.getMinutes() > todayTime) {
                todayTime = d.getHours() * 60 + d.getMinutes();
                $('.timepicker-limited').timepicker('setTime', d.getHours() + ":" + d.getMinutes())
            }
        }
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
        defaultTime: '08:00'
    }).on('show.timepicker', function () {
    }).on('changeTime.timepicker', function (e) {
        var h = e.time.hours;
        var m = e.time.minutes;
        if (h * 60 + m < todayTime) {
            var hours = ('0' + Math.floor(todayTime / 60)).slice(-2);
            var minutes = ('0' + todayTime % 60).slice(-2);
            $(this).timepicker('setTime', hours + ':' + minutes);
        }
        if (h * 60 + m > 1200) {
            $(this).timepicker('setTime', '20:00');
        }
    });

    $('.js-visit-time .timepicker-limited').eq(0).timepicker().on('changeTime.timepicker', function (e) {
        var h1 = e.time.hours;
        var m1 = e.time.minutes;

        var timepicker2 = $(this).parents().find('.timepicker-limited').eq(1);
        var h2 = timepicker2.val().split(':')[0]*1;
        var m2 = timepicker2.val().split(':')[1]*1;

        if ((h1*60 + m1) > (h2*60 + m2)) {
            timepicker2.timepicker('setTime', h1 + ':' + m1);
        }
    });

    $('.js-visit-time .timepicker-limited').eq(1).timepicker().on('changeTime.timepicker', function (e) {
        var h2 = e.time.hours;
        var m2 = e.time.minutes;

        var timepicker1 = $(this).parents().find('.timepicker-limited').eq(0);
        var h1 = timepicker1.val().split(':')[0]*1;
        var m1 = timepicker1.val().split(':')[1]*1;

        if ((h1*60 + m1) > (h2*60 + m2)) {
            $(this).timepicker('setTime', h1 + ':' + m1);
        }
    });
}

function addLoader() {
    var loaders = 0;
    $('.js-add-loader').on('click', function (e) {
        loaders++;
        e.preventDefault();
        $('.js-loaders-item').eq(0).clone().appendTo('.js-loaders-list').find('.form-group').each(function () {
            $(this).find('input').each(function () {
                $(this).val('').attr('id', $(this).attr('id') + '_' + loaders);
            });
            $(this).find('label').each(function () {
                $(this).attr('for', $(this).attr('for') + '_' + loaders);
            });
        })
    });
}

function showParking() {
    $('input:radio[name="parking"]').on('change', function (e) {
        if ($(this).val() == 'true') {
            $('.js-parking').slideDown();
        }
        else {
            $('.js-parking').slideUp();
        }
    });
}

function showDocumentParams() {
    $('input:radio[name="docType"]').on('change', function (e) {
        if ($(this).is(':checked')) {
            $('.js-docparams').slideDown();
        }

    });
}

var substringMatcher = function (strs) {
    return function findMatches(q, cb) {
        var matches, substrRegex;

        // an array that will be populated with substring matches
        matches = [];

        // regex used to determine if a string contains the substring `q`
        substrRegex = new RegExp(q, 'i');

        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function (i, str) {
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