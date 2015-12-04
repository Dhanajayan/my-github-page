$(document).ready(function() {
	
	$(".first").mouseenter(function() {
		$(".first-hide").css("z-index","1").fadeIn('slow');
	});

	$(".first").mouseleave(function() {
		$(".first-hide").fadeOut('slow');
	});
	
	$(".second").mouseenter(function() {
		$(".second-hide").css("z-index","1").fadeIn('slow');
	});

	$(".second").mouseleave(function() {
		$(".second-hide").fadeOut('slow');
	});

	$(".third").mouseenter(function() {
		$(".third-hide").css("z-index","1").fadeIn('slow');
	});

	$(".third").mouseleave(function() {
		$(".third-hide").fadeOut('slow');
	});
});
