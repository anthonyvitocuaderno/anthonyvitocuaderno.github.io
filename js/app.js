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



var pager = $(document).ready(function() {

	
	const pages = $('.page').length
	var scroll = 0
	var page = 0
	var isScrolling = false
	// const pageBar = $('.fixed-bottom.page-bar')

	var pageAnimation = $(document).bind('mousewheel', function(e){
		const delta = e.originalEvent.wheelDelta
		// scroll = clamp(scroll - e.originalEvent.wheelDelta, 0, $(window).height())
		// pageBar.width($(window).width() * scroll / $(window).height())
		if (isScrolling || $('body.scroll-locked').length > 0) return

		// console.log(scroll)
		isScrolling = true
		if (delta < 0) {
			page = clamp(page + 1, 0, pages)
		} else {
			page = clamp(page - 1, 0, pages)
		}
		
		$('.page-' + page + ' .toAnimate').addClass('d-none')
		// $(document).scrollTop($(window).height() * page)
		var body = $('html, body').animate({scrollTop: $(window).height() * page}, 500, function() {
			isScrolling = false
			$('.navbar.fixed-bottom .nav-item').removeClass('active')
			if (page >= 1) {
				$($('.navbar.fixed-bottom .nav-item')[page - 1]).addClass('active')
				$('.page-' + page + ' .parallax').addClass('show')
				$('.page-' + page + ' .toAnimate.fromLeft').removeClass('d-none').addClass('animated fadeInLeft')
				$('.page-' + page + ' .toAnimate.fromRight').removeClass('d-none').addClass('animated fadeInRight')
				$('.page-' + page + ' .toAnimate.fromCenter').removeClass('d-none').addClass('animated fadeInDown')
						
			}
		});
	})

	var navbar = $(document).scroll(function() {
		const scroll = $(window).scrollTop();
		const navbarBottom = $('.navbar.fixed-bottom') 

		if(scroll > 0 && page == 1) {
			navbarBottom.addClass('bg-dark')
		} else {
			navbarBottom.removeClass('bg-dark')
		}
		
		const navbarTop = $('nav.fixed-top')
		if(scroll > $(window).height() - 30) {
			navbarTop.removeClass('d-none')
		} else {
			navbarTop.addClass('d-none')
		}
	})
})

$(document).ready(function() {
	
})
var splash = {
	constants: {
		splashDuration: 6000,
		quoteDelay: 2500,
		typewriterDelay: 300
	},
	animateQuote: function() {
		$('.splash .coffee .coffee-fill').addClass('full')
		setTimeout(function() {
			$('.splash .coffee .quote, .splash .coffee .quote-part-2').addClass('smoke-up')
		}, 250)
		const quoteLabel = $('.splash .coffee .quote>.text')
		const quoteLabel2 = $('.splash .coffee .quote-part-2>.text')
		const messageString = quoteLabel.text()
		const messageString2 = quoteLabel2.text()
		quoteLabel.text('')
		quoteLabel2.html('')
		setTimeout(function() {
			var typewriterAnimation = setInterval(function() {
				var slicedMessageString = messageString.slice(0, quoteLabel.text().length + 1)

				quoteLabel.html(slicedMessageString + '|')
				if (slicedMessageString.length >= messageString.length) {
					quoteLabel.html(slicedMessageString)

					slicedMessageString = messageString2.slice(0, quoteLabel2.text().length + 1)

					quoteLabel2.html(slicedMessageString + '|')

					if (slicedMessageString.length >= messageString2.length) {
						quoteLabel2.html(slicedMessageString)
						clearInterval(typewriterAnimation)

						setTimeout(function() {
							$('body').removeClass('scroll-locked')
							$('nav.fixed-top').addClass('animated fadeInRight')
							$('.hero .title-heading').addClass('animated fadeInLeft')
							$('.hero .ring').addClass('animated zoomIn')
						}, 2100)
					}
				}
			}, splash.constants.typewriterDelay / 5)
		}, splash.constants.quoteDelay)
	},
	animateProgressBar: function() {
		$('.splash .progress-bar>.fill').addClass('percent-100')
	}
}

$(document).ready(function () {
	const body = $('html, body');
    body.animate({scrollTop:0}, 500);

	splash.animateProgressBar()

	splash.animateQuote()
	

	setTimeout(function() {
		$('.splash').addClass('end')
	}, splash.constants.splashDuration)
})
function clamp(number, min, max) {
	if (number < min) number = min
	if (number > max) number = max
	return number
}