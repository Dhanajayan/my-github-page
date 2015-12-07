$(document).ready(function() {
	
	$('.first').mouseover(function() {

/**		$('#hidden div').each(function() {
		//	$(this).css("z-index","-1");
			alert($(this).attr('id'));
		}); */
		$(this).css("background-color", "white");
		$('#first-sub').css("z-index","1");
		
	});

	$('#first-sub').mouseleave(function() {
		$(this).css("z-index","-1");
	});
	

/**	$('.first').mouseleave(function() {
		$('#first-sub').css("z-index","-1");
	}); */
	$('#first-sub').click(function() {
		$(this).css("z-index","-1");
	});

	$('.second').mouseenter(function() {
/**		$('#hidden div').each(function() {
			$(this).css("z-index","-1");
		}); */
		$('#second-sub').css("z-index","1");
	});

	$('#second-sub').mouseleave(function() {
		$(this).css("z-index","-1");
	});
/**i
	$('.second').mouseleave(function() {
		$('#second-sub').css("z-index","-1");
	}); */
	$('#second-sub').click(function() {
		$(this).css("z-index","-1");
	});


	$('.third').mouseenter(function() {
		$('#third-sub').css("z-index","1");
	});

	$('#third-sub').mouseleave(function() {
		$(this).css("z-index","-1");
	});
	
	$('#third-sub').click(function() {
		$(this).css("z-index","-1");
	});

/**	$('.third').mouseleave(function() {
		$('#third-sub').css("z-index","-1");
	}); */
	
	$('.forth').mouseenter(function() {
		$('#forth-sub').css("z-index","1");
		$('#forth-sub').show();
	});
		
	$('#forth-sub').mouseleave(function() {
		$(this).css("z-index","-1");
	});

/**	$('.forth').mouseleave(function() {
		$('#forth-sub').css("z-index","-1");
	}); */
	
	$('#forth-sub').click(function() {
		$(this).css("z-index","-1");
	});	
});	
