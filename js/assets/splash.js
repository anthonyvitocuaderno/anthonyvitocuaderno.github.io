$(document).ready(function() {
	setTimeout(function() {
		$('section.intro.splash').removeClass('splash')
	}, 2000)

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