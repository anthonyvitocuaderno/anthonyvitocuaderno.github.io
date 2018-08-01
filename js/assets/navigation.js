$(document).ready(function() {

	$('.explore').click(function() {
		gotoPage('summary')
	})
	$('.to-home').click(function() {
		if ($(document).scrollTop() >= $(window).height() / 2) {

			$('section.summary.active.scrolled').removeClass('scrolled')
			$('html').animate({
	            scrollTop: 0}, 200);
			return
		}
		gotoPage('intro')
	})

	function gotoPage(page) {
		$('section.summary.active.scrolled').removeClass('scrolled')
		$('html').animate({
            scrollTop: 0}, 1000);
		$('section.active').removeClass('active')
		$('section.' + page).addClass('active')
	}
	document.addEventListener('scroll', function (event) {
	    $('section.summary.active').addClass('scrolled')
	    const scrollTop = $('html').scrollTop()
	    const docHeight = $( document ).height();
	    if (scrollTop > 0) {
	    	$('section.summary.active').addClass('scrolled')
	    } else {
	    	$('section.summary.active.scrolled').removeClass('scrolled')
	    }

	}, true);
})

