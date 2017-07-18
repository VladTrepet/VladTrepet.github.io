$(document).ready(function(){
    /*Slider 1*/
    $('#about-slider').owlCarousel({
        items:1,
        loop:true,
        navigation:true
    });
    /*Slider 2*/
    $('#team-slider').owlCarousel({
        loop:true,
        smartSpeed:750,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:3
            }
        }
    });
    $('.arrow.next').click(function() {
        $('#team-slider').trigger('next.owl.carousel');
    });
    $('.arrow.prev').click(function() {
        $('#team-slider').trigger('prev.owl.carousel');
    });
    /*Mobile menu*/
    $('.navtoggle').click(function(){
        $('.menu-list').slideToggle(100);
    });
    /*About panel*/
    $('.service-link').click(function(e){
        var currentPanel = $(this).parent().parent();
        var currentBody = currentPanel.find('.panel-body');
        if( !currentPanel.hasClass('active-panel') ){
            currentBody.slideDown(250);
            currentPanel.addClass('active-panel');
        }
        else{
            currentBody.slideUp(250);
            currentPanel.removeClass('active-panel')
        }
        e.preventDefault();
    });
    /*Scroll Top*/
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if( scroll >= 400 ){
            $('.scroll-top').fadeIn(500);
        }
        else{
            $('.scroll-top').fadeOut(500);
        }
    });
    $('.scroll-top').click(function(){
        $('html,body').animate({
            scrollTop:0
        },550);
    });
    /*Sroll to block*/
    $('.link-nav').click(function(e){
        var attr = $(this).attr('href');
        var elemTop = $(attr).offset().top;
        $('html,body').animate({
            scrollTop:elemTop
        },500);
        e.preventDefault();
    });

});
