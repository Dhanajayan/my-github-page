$(document).ready(function() {
	
	$('.first').mouseover(function() {

		$('.hidden div').each(function() {
			$(this).css("z-index","-1");
		//	alert($(this).attr('id'));
		});

		
		$(this).css("background-color", "white");
		$('#first-sub').css("z-index","1");
		
	});
	
	
	$('#first-sub').mouseleave(function() {
		$(this).css("z-index","-1");
	});
	

	$('#first-sub').click(function() {
		$(this).css("z-index","-1");
	});

	$('.second').mouseenter(function() {
		$('.hidden div').each(function() {
			$(this).css("z-index","-1");
		//	alert($(this).attr('id'));
		});
		
		$('#second-sub').css("z-index","1");
	});

	$('#second-sub').mouseleave(function() {
		$(this).css("z-index","-1");
	});
	$('#second-sub').click(function() {
		$(this).css("z-index","-1");
	});


	$('.third').mouseenter(function() {
		$('.hidden div').each(function() {
			$(this).css("z-index","-1");
		//	alert($(this).attr('id'));
		});
		
		$('#third-sub').css("z-index","1");
	});

	$('#third-sub').mouseleave(function() {
		$(this).css("z-index","-1");
	});
	
	$('#third-sub').click(function() {
		$(this).css("z-index","-1");
	});

	
	$('.forth').mouseenter(function() {
		$('.hidden div').each(function() {
			$(this).css("z-index","-1");
		//	alert($(this).attr('id'));
		});
		
		$('#forth-sub').css("z-index","1");
	});
		
	$('#forth-sub').mouseleave(function() {
		$(this).css("z-index","-1");
	});

	
	$('#forth-sub').click(function() {
		$(this).css("z-index","-1");
	});	
});	
