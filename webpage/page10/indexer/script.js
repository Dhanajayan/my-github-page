
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

	/**	var pars = $('.divelement');
		for(i =0; i<pars.length; i++ ) {
			if(pars[0].id)
				alert('hello');
		}  */

	});

	//function for click on help icon

	$('span:last-child').click(function() {
			$('#indexe').removeAttr("style");
	});

	//click action to show content
});