
$(document).scroll(function() {
	const scroll = $(window).scrollTop();
	const navbar = $('.navbar.fixed-bottom') 

	if(scroll > 30) {
		navbar.addClass('bg-dark')
	} else {
		navbar.removeClass('bg-dark')
	}
	
	// const navbarSmall = $('nav.fixed-top')
	// if(scroll > $(window).height() - 30) {
	// 	navbarSmall.removeClass('d-none')
	// } else {
	// 	navbarSmall.addClass('d-none')
	// }
});
