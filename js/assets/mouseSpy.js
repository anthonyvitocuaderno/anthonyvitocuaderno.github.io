$(document).ready(function() {

	$(document).on('mousemove', function(e) {

		var parallaxDampingX = 0.925
		var parallaxDampingY = 0.90
		var x = e.clientX
		var y = e.clientY

		var clearDarkenCooldown = true
		if ($('.navbar.fixed-bottom .nav-item:nth-child(1)').hasClass('active')) {
			if (clearDarkenCooldown) {
				$('.page-1 .clear').addClass('darken')
				clearDarkenCooldown = false
				setTimeout(function() {
					clearDarkenCooldown = true

					$('.page-1 .clear').removeClass('darken')
				}, 1000)
			} else {
				alert('cd')
			}

			$('.page-1 .ring').removeClass('d-none')
			$('.page-1 .ring').css('left', x-50 + 'px');
			$('.page-1 .ring').css('top', y-50 + 'px');
			$('.page-1 .ring.bladed-red').css('left', x-30 + 'px');
			$('.page-1 .ring.bladed-red').css('top', y-30 + 'px');
			$('.page-1 .ring.ring-75').css('left', x-20 + 'px');
			$('.page-1 .ring.ring-75').css('top', y-20 + 'px');
			$('.page-1 .ring.ring-50').css('left', x-10 + 'px');
			$('.page-1 .ring.ring-50').css('top', y-10 + 'px');

		}
		if ($('.navbar.fixed-bottom .nav-item:nth-child(2)').hasClass('active')) {
			
			var xPos = (x - ($(window).width())) - (x - ($(window).width() * 1.5 / 2)) * parallaxDampingX + 'px'
			var yPos = (y - ($(window).height())) - (y - ($(window).height() * 1.5 / 2)) * parallaxDampingY + 'px'
			const position = xPos + ' ' + yPos

			$('.page-2 .parallax').css('background-position', position);
		}
	
	});
})