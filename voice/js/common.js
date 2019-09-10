var sha256 = function sha256(ascii) {
	function rightRotate(value, amount) {
		return (value>>>amount) | (value<<(32 - amount));
	};
	
	var mathPow = Math.pow;
	var maxWord = mathPow(2, 32);
	var lengthProperty = 'length'
	var i, j; // Used as a counter across the whole file
	var result = ''

	var words = [];
	var asciiBitLength = ascii[lengthProperty]*8;
	
	//* caching results is optional - remove/add slash from front of this line to toggle
	// Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
	// (we actually calculate the first 64, but extra values are just ignored)
	var hash = sha256.h = sha256.h || [];
	// Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
	var k = sha256.k = sha256.k || [];
	var primeCounter = k[lengthProperty];
	/*/
	var hash = [], k = [];
	var primeCounter = 0;
	//*/

	var isComposite = {};
	for (var candidate = 2; primeCounter < 64; candidate++) {
		if (!isComposite[candidate]) {
			for (i = 0; i < 313; i += candidate) {
				isComposite[i] = candidate;
			}
			hash[primeCounter] = (mathPow(candidate, .5)*maxWord)|0;
			k[primeCounter++] = (mathPow(candidate, 1/3)*maxWord)|0;
		}
	}
	
	ascii += '\x80' // Append Ƈ' bit (plus zero padding)
	while (ascii[lengthProperty]%64 - 56) ascii += '\x00' // More zero padding
	for (i = 0; i < ascii[lengthProperty]; i++) {
		j = ascii.charCodeAt(i);
		if (j>>8) return; // ASCII check: only accept characters in range 0-255
		words[i>>2] |= j << ((3 - i)%4)*8;
	}
	words[words[lengthProperty]] = ((asciiBitLength/maxWord)|0);
	words[words[lengthProperty]] = (asciiBitLength)
	
	// process each chunk
	for (j = 0; j < words[lengthProperty];) {
		var w = words.slice(j, j += 16); // The message is expanded into 64 words as part of the iteration
		var oldHash = hash;
		// This is now the undefinedworking hash", often labelled as variables a...g
		// (we have to truncate as well, otherwise extra entries at the end accumulate
		hash = hash.slice(0, 8);
		
		for (i = 0; i < 64; i++) {
			var i2 = i + j;
			// Expand the message into 64 words
			// Used below if 
			var w15 = w[i - 15], w2 = w[i - 2];

			// Iterate
			var a = hash[0], e = hash[4];
			var temp1 = hash[7]
				+ (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) // S1
				+ ((e&hash[5])^((~e)&hash[6])) // ch
				+ k[i]
				// Expand the message schedule if needed
				+ (w[i] = (i < 16) ? w[i] : (
						w[i - 16]
						+ (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15>>>3)) // s0
						+ w[i - 7]
						+ (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2>>>10)) // s1
					)|0
				);
			// This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
			var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) // S0
				+ ((a&hash[1])^(a&hash[2])^(hash[1]&hash[2])); // maj
			
			hash = [(temp1 + temp2)|0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
			hash[4] = (hash[4] + temp1)|0;
		}
		
		for (i = 0; i < 8; i++) {
			hash[i] = (hash[i] + oldHash[i])|0;
		}
	}
	
	for (i = 0; i < 8; i++) {
		for (j = 3; j + 1; j--) {
			var b = (hash[i]>>(j*8))&255;
			result += ((b < 16) ? 0 : '') + b.toString(16);
		}
	}
	return result;
};


$(function() {

	"use strict";

	var wind = $(window);

	//  PageScroll  start
  $('.menu a, a.link').mPageScroll2id();
	//  PageScroll end  

	// animation mobile menu start
	(function () {
		jQuery('.mob_button').on('click', function() {
			jQuery('.mob_button').toggleClass('active');
			jQuery('.header .menu').toggleClass('active');
			jQuery('body').toggleClass('hidden');
		});
		jQuery('.menu').on('click', function() {
			jQuery('.mob_button').toggleClass('active');
			jQuery('.header .menu').toggleClass('active');
			jQuery('body').toggleClass('hidden');
		});
	})();
	// animation mobile menu end


	// animation mobile faq start
	(function () {
		jQuery('.list_faq .title').on('click', function() {

			if (jQuery(this).hasClass('active')) {
				jQuery(this).removeClass('active');
				jQuery(this).next('.text').removeClass('active');
			} else {
				jQuery('.list_faq .title').removeClass('active');
				jQuery('.list_faq .text').removeClass('active');

				jQuery(this).addClass('active');
				jQuery('.list_faq .title.active + .text').addClass('active');
			}

		});
	})();
	// animation mobile faq end


	 $('.audio_player').mediaelementplayer({
		 alwaysShowControls: true,
		 features: ['playpause','duration','current','progress'],
		 audioVolume: 'horizontal',
		 audioHeight: 90
	 });



	//  slide_works  start
  $('.slide_works_for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slide_works_nav'
	});
	$('.slide_works_nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slide_works_for',
	  arrows: false,
	  centerMode: true,
	  focusOnSelect: true,
	  swipe: false
	});
	//  slide_works end

	// reviews_slider start
	$('.js-reviews-slider').slick({
        infinite: true,
		arrows: false,
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        touchThreshold: 450,
		dots: true,
		autoPlay: false,
        autoPlaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
	});
	// reviews_slider end


	// Svg start
  jQuery('#home_1').load(jQuery('#home_1').data("url"));
  jQuery('#home_2').load(jQuery('#home_2').data("url"));
  // jQuery('#facebook').load(jQuery('#facebook').data("url"));
  // jQuery('#instagram').load(jQuery('#instagram').data("url"));
  // jQuery('#youtube').load(jQuery('#youtube').data("url"));
  // jQuery('#twitter').load(jQuery('#twitter').data("url"));
  // jQuery('#soundcoud').load(jQuery('#soundcoud').data("url"));
	//  Svg end 

	// Svg id start
	(function() {
		var i=0;
		jQuery(".list_about li").each(function(){
			i++;
			jQuery(this).find('.box_icon').attr("id","icons"+i);	

		  jQuery("#icons"+i).load(jQuery("#icons"+i).data("url"));
		});
	})();
	//  Svg id end  



});

// price slick start
var priceIsSlick;

function checkMedia() {
	if(window.matchMedia('(max-width: 1295px)').matches) {
		if (priceIsSlick) {
			priceIsSlick = false;
			$('.list_price').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				adaptiveHeight: true,
			});
		}
	} else {
		if (!priceIsSlick) {
			priceIsSlick = true;
			$('.list_price').slick('unslick');
		}
	}
}

$(document).ready(function() {

	priceIsSlick = window.matchMedia('(max-width: 1295px)').matches;

	$('.list_price').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		adaptiveHeight: true,
	});

	checkMedia(); // запускаем при открытии страницы
	$(window).on('resize', function() { // запускаем при каждом ресайзе окна
		checkMedia();
	});

});
// price slick end

function b64EncodeUnicode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
}


$('form#callback').submit(function(e) {

	e.preventDefault();
	
	$.ajax({
		type: "post",
		url: "/mail.php",
		data: $(this).serialize(),
		success: function (res) {
			alert('Success!');
		}
	});

});

$('form#paypal').submit(function(e) {

	$('#vc').val($('input[name="Voice"]:checked').attr('id'));

	$('#want').val($('#__sd7').val());

	$('#wish').val($('#__sd8').val());

	$('#data_email').val($('#form_email').val());

	$('#t_count').val( $('label[for="' + $('input[name="amount"]:checked').attr('id') + '"').find('.desc').html() );

	var price = $('input[name="amount"]:checked').data('price');

	var payz = $('input[name="pay"]:checked').attr('id');
	if (payz == 'pay_1')
		$("#paypal").attr("action", "https://www.paypal.com/cgi-bin/webscr");
	else
		$("#paypal").attr("action", "/stripe-payment.php");

	var data = new FormData(this);


	// $.ajax({
	// 	type: "post",
	// 	url: "/payment.php",
	// 	data: data,
	// 	processData: false, 
	// 	contentType: false
	// });

});

$('.mail').click(function (e) {
	navigator.clipboard.writeText(this.textContent).then(() => {
		$('#copied').css({'left':e.pageX+10, 'top':e.pageY+7});
		$('#copied').finish();
		$('#copied').show();
		$('#copied').fadeOut(2000);
	});
});
  // navigator.clipboard.writeText('123')
  //   .then(text => {
  //     resultsEl.innerText = text;
  //   })
  //   .catch(err => {
  //     console.log('Something went wrong', err);
  //   })