
// script for fade out of menu div
$(document).ready(function() {

	//fade out using animation in menu
	$('li').click(function() {
		$('#indexe').animate({
			width: "0%",
			opacity: 0.4,
			marginLeft: "0px",
			fontSize: "10px",
		}, 800);

		$('#glass-sheet').fadeOut('slow');

	//function for click on help icon
	/**$('#home').click(function() {
			$('#div3').scrollTop();
	}); */

	$('span:last-child').click(function() {
			$('#indexe').removeAttr("style");
	});

	//click action to show content
});

//end of script
