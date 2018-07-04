


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
		
		// $(document).scrollTop($(window).height() * page)
		scrollToPage()
	})


    scrollToPage()

    $('.ring').click(function() {
    	page = 1
    	scrollToPage()
    })

	function scrollToPage() {
		var speed = 500
		if ($(window).width() < 768) {

			$('html, body').animate({scrollTop: $(window).height() * page}, speed)

			isScrolling = false
			$('.navbar.fixed-bottom .nav-item').removeClass('active')
			if (page >= 1) {
				$($('.navbar.fixed-bottom .nav-item')[page - 1]).addClass('active')
				setTimeout(function() {
				$(document).mousemove()

				}, 200)
			}
			return
		}


		$('.page-' + page + ' .toAnimate').addClass('d-none')
		$('html, body').animate({scrollTop: $(window).height() * page}, speed, function() {
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
	}

	var navbar = $(document).scroll(function() {
		if ($(window).width() < 768) {
			return
		}
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

    $('.navbar.fixed-bottom .nav-item .nav-link').click(function(event){

        //prevent the default action for the click event
        event.preventDefault();

        //get the full url - like mysitecom/index.htm#home
        var full_url = this.href;

        //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
        var parts = full_url.split('#');
        var trgt = '.' + parts[1];
        page = parts[1].split('-')[1]
        //get the top offset of the target anchor
        // var target_offset = $(trgt).offset();
        // var target_top = target_offset.top;
        //goto that anchor by setting the body scroll top to anchor Itop
        // $('html, body').animate({scrollTop: target_top}, 500, function() {

        // });
        scrollToPage()

        $('.navbar.fixed-bottom .navbar-toggler').click()
    });
})
