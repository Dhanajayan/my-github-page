$(document).ready(function() {
    $('.show').mouseover(function() {
        var $titleval = $(this).prev().text();
        $(this).next()
        .html('<h1>'+$titleval+'</h1><p>327 shares</p><span class="fa fa-facebook fa-2x" style="padding: 8px;"></span><span style="padding: 8px;" class="fa fa-twitter fa-2x"></span><span style="padding: 10px;"class="fa fa-google-plus fa-2x"></span> ')
        .fadeIn();
        });
    $('.show').mouseout(function() {
            $(this).next().fadeOut(); 
        });
});
