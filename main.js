$(window).scroll(function()
 {
    var currPosition = $(document).scrollTop();
    $('nav a').each(function() {
        var activeLink = $(this);
        var element = $(activeLink.attr('href'));
        if (element.position().top-activeLink.height() <= currPosition && element.position().top + element.outerHeight() >= currPosition) {
            activeLink.addClass("active").siblings().removeClass('active');
        }
      
    })
 });
 $(function(){
    $('nav a').click(function(){
        $(this).addClass('active').siblings().removeClass('active')	
    })
})

$('#burger').click(function(){
    $('nav').show();
    $(this).hide();
    $('.small').attr('class','show');
    $('header').css('height','30vh');
    
})
