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

	splash.animateProgressBar()

	splash.animateQuote()
	

	setTimeout(function() {
		$('.splash').addClass('end')
	}, splash.constants.splashDuration)
})