function clamp(number, min, max) {
	if (number < min) number = min
	if (number > max) number = max
	return number
}