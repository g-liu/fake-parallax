(function () {
	// ... all vars and functions are in this scope only
	// still maintains access to all globals
	var PARALLAX_FACTOR = 4;

	window.onscroll = function(event) {
		var scrollPosition = document.getElementsByTagName("body")[0].scrollTop;
		document.getElementsByTagName("body")[0].style.backgroundPositionY = "-" + scrollPosition / PARALLAX_FACTOR + "px";
	}
}());
