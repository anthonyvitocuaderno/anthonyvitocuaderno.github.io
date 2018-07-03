$(document).ready(function() {

	$(document).on('mousemove', function(e) {

		var parallaxDampingX = 0.925
		var parallaxDampingY = 0.90
		if ($('.navbar.fixed-bottom .nav-item:nth-child(2)').hasClass('active')) {
			var x = e.clientX
			var y = e.clientY
			var xPos = (x - ($(window).width())) - (x - ($(window).width() * 1.5 / 2)) * parallaxDampingX + 'px'
			var yPos = (y - ($(window).height())) - (y - ($(window).height() * 1.5 / 2)) * parallaxDampingY + 'px'
			const position = xPos + ' ' + yPos

			$('.page-2 .parallax').css('background-position', position);
		}
	
	});
})