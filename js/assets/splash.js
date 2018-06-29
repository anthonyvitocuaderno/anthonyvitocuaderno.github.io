let constants = {
	splashDuration: 15000
}

$(document).ready(function () {
	$('.splash .coffee .coffee-fill').addClass('full')

	setTimeout(function() {
		$('.splash').addClass('end')
	}, constants.splashDuration)
})