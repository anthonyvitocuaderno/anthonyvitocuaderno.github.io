$(document).ready(function() {

	$('.explore').click(function() {
		gotoPage('summary')
	})
	$('.to-home').click(function() {
		gotoPage('intro')
	})

	function gotoPage(page) {
		$('section.active').removeClass('active')
		$('section.' + page).addClass('active')
	}
})

