$(document).ready(function() {
	
	$('li').mouseenter(function() {
		$('<audio src="beepp.mp3" type="audio/mp3" autoplay>helllo</audio>').appendTo('body');
	});
	
	$('li').mouseleave(function() {
		$('audio').remove();
	});
});
