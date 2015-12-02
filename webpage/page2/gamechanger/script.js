$(document).ready(function() {
	
	$(".first").mouseenter(function() {
		$(".first-hide").css("z-index","1").fadein(3000);
	});

	$(".first").mouseleave(function() {
		$(".first-hide").css("z-index","-1").fadeout(3000);
	});
	
	$(".second").mouseenter(function() {
		$(".second-hide").css("z-index","1").fadein(3000);
	});

	$(".second").mouseleave(function() {
		$(".second-hide").css("z-index","-1").fadeout(3000);
	});

	$(".third").mouseenter(function() {
		$(".third-hide").css("z-index","1").fadein(3000);
	});

	$(".third").mouseleave(function() {
		$(".third-hide").css("z-index","-1").fadeout(3000);
	});
});
