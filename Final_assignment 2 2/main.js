$(window).scroll(function(){
    var opacity = 1 - 2*$(window).scrollTop()/$(window).height()
    $('header h1, header div').css('opacity', opacity)
})