$('.video-thumb:nth-child(1)').clone().appendTo('.video-thumbs').addClass('clone first-clone');

$('.video-thumbs').find('.video-thumb:nth-child(5)').removeClass('active thumb-1').attr('index', '5');

$('.video-thumb:nth-child(4)').clone().prependTo('.video-thumbs');

$('.video-thumbs').find('.video-thumb:nth-child(1)').removeClass('active').addClass('clone last-clone').attr('index', '0');


function nextVideoThumb() {
	var currentThumb = parseInt($('.video-thumbs').attr('current-thumb'));
	var totalThumbsInit = $('.video-thumb').length;
	var totalThumbs = parseInt(totalThumbsInit - 2);
	var activeClasses = $('.video-thumbs').attr('class');
	var splitClasses = activeClasses.split(' ');
	var thisClass = splitClasses[1];
	
	$('.video-thumb').removeClass('active');

	if (currentThumb < totalThumbs) {
		var nextThumb = parseInt(currentThumb + 1);
		var nextClass = 'position-' + nextThumb;
		$('.video-thumbs').attr('current-thumb', nextThumb);
		$('.video-thumbs').removeClass(thisClass);
		$('.video-thumbs').addClass(nextClass);
		$('.video-thumb[index='+nextThumb+']').addClass('active');

	} else if (currentThumb == totalThumbs) {
		var nextThumb = 1;
		var nextClass = 'position-1';
		$('.video-thumbs').attr('current-thumb', nextThumb);
		$('.video-thumbs').removeClass(thisClass);
		$('.video-thumbs').addClass(nextClass);
		$('.video-thumb[index='+nextThumb+']').addClass('active');
	}

};

function prevVideoThumb() {
	var currentThumb = parseInt($('.video-thumbs').attr('current-thumb'));
	var totalThumbsInit = $('.video-thumb').length;
	var totalThumbs = parseInt(totalThumbsInit - 2);
	var activeClasses = $('.video-thumbs').attr('class');
	var splitClasses = activeClasses.split(' ');
	var thisClass = splitClasses[1];

	if (currentThumb > 1) {
		var prevThumb = parseInt(currentThumb - 1);
		var prevClass = 'position-' + prevThumb;
		$('.video-thumbs').attr('current-thumb', prevThumb);
		$('.video-thumbs').removeClass(thisClass);
		$('.video-thumbs').addClass(prevClass);
		$('.video-thumb[index='+prevThumb+']').addClass('active');

	} else if (currentThumb == 1) {
		var prevThumb = totalThumbs;
		var prevClass = 'position-' + totalThumbs;
		$('.video-thumbs').attr('current-thumb', prevThumb);
		$('.video-thumbs').removeClass(thisClass);
		$('.video-thumbs').addClass(prevClass);
		$('.video-thumb[index='+prevThumb+']').addClass('active');
	}
};

$('.video-thumbs-frame').on('swipeleft', nextVideoThumb);
$('.video-thumbs-frame').on('swiperight', prevVideoThumb);