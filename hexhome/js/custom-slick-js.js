$(document).ready(function() {

        	$('.responsiv').slick({
        		
        		infinite: true,
        		arrows: true,
        		asNavFor: null,
        		slidesToShow: 3,
        		slidesToScroll: 1,
        		autoplay: true,
        		autoplaySpeed: 1000,
            centerMode: true,
            centerPadding: '100px',
        		responsive: [{
        			breakpoint: 1024,
        			settings: {
        				slidesToShow: 2,
        				slidesToScroll: 2,
        			}
        		}, {
        			breakpoint: 600,
        			settings: {
        				slidesToShow: 1,
        				slidesToScroll: 1,

        			}
        		
        		}]
        	});
   		/**	$('.responsive').slick({
   				infinite: true,
   				speed: 300,
   				slidesToShow: 1,
   				slidesToScroll: 1,
   				responsive: [{
   					breakpoint: 1024,
   					settings: {
   						slidesToShow: 5,
   						slidesToScroll: 1,
   					}
   				}, {
   					breakpoint: 800,
   					settings: {
   						slidesToShow: 3,
   						slidesToScroll: 2,
   						dots: true,
   						infinite: true,
   					}
   				}, {
   					breakpoint: 600,
   					settings: {
   						slidesToShow: 4,
   						slidesToScroll: 2,
   						dots: true,
   						infinite: true,

   					}
   				}, {
   					breakpoint: 480,
   					settings: {
   						slidesToShow: 1,
   						slidesToScroll: 1,
   						dots: true,
   						infinite: true,
   						autoplay: true,
   						autoplaySpeed: 2000,
   					}

   					
   				
   				}]
   			}); */
    }); 