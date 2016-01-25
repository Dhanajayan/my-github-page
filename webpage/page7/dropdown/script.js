
$(function() {
    $('span').click(function() {
        $('.list').slideToggle();

    }); 

    $('.list > h4').click(function() {
        $('.inputval').val($(this).text());
        var before = "'";
        var after = "'";

        var coloring = $(this).attr('value');
        var fullString = before.concat(coloring,after);
        alert(coloring);
        $('.wrap').css('backgroundColor','yellow'); 

        $('.list').fadeOut();
    });

});
