
$(function() {
    $('span').click(function() {
        $('.list').slideToggle();

    }); 

  
   
    $('.list > h4').click(function() {
        $('.inputval').val($(this).text());
  /**      var before = "'";
        var after = "'";

        var coloring = $(this).attr('value');
        var fullString = before.concat(coloring,after);
        alert(coloring);
        $('.wrap').css('backgroundColor',fullString); */
              $.arrayLoader = function(selectColor) {
                    alert(selectColor);
                    /*
                    var arrayOfColor = ['#2ECC71', '#3498DB', '#9B59B6', '#E74C3C'];
                    var i=0;
                    $(arrayOfColor).each(function() {
                    if($(arrayOfColor)[i]==selectColor)
                    $('body').css({background-color : $(arrayOfColor)[i]);
                    ++i;
                    });

                    */
                };


        $.arrayLoader('hello');
        $('.list').fadeOut();
    });



});
