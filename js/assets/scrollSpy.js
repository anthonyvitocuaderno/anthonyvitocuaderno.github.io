


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
