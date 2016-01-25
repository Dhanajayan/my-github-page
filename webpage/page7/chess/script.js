
$(document).ready(function() {
    
    $('.fa-bars').click(function() {
        $('.menu').slideToggle('1000');
  /*  $('.menu > div').each(function() {
        $(this).animate({function() { $(this).slideToggle('slow')}},'slow');
    }); */
     
    });
    

// code for disable right click menu

$(this).bind('contextmenu', function() {
    return false;
    });
});
