$(document).ready(function() {
	setTimeout(function() {
		$('section.intro.splash').removeClass('splash')
	}, 1000)

	// Automatic drops
	var raindrops = setInterval(function() {
		var $el = $('section.intro');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.04 + Math.random() * 0.04;
		$el.ripples('drop', x, y, dropRadius, strength);
	}, 400);


	setTimeout(function() {
		clearInterval(raindrops)
	}, 15000)

	setTimeout(function() {
		const firstName = 'ito'
		const lastName = 'uaderno'

		firstName.split('').forEach(function(char,i) {
			setTimeout(function () {
				const fname = $('.istName')
				fname.html(fname.html() + char)
			}, 100 * i)
		})

		lastName.split('').forEach(function(char,i) {
			setTimeout(function () {
				const lname = $('.astName')
				lname.html(lname.html() + char)
			}, 100 * i)
		})
	}, 100)
	
})