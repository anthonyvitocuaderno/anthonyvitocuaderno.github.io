$(document).ready(function() {
	$('.back, .forward').hover(function() {
		$('section.summary .overlay').addClass('darken')
	},
	function() {
		$('section.summary .overlay').removeClass('darken')
	})

	$('.btn-educ').click(function() {
		$('.paper').toggleClass('page-2')
		event.preventDefault()
	})

})