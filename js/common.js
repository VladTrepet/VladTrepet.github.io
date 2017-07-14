$(document).ready(function(){
    /*Slider 1*/
    $("#banner-carousel").owlCarousel({
        items:1,
        loop:true,
        mouseDrag:false,
        touchDrag:false,
        nav:false,
        dots:false,
        autoplay:3200,
        autoplayTimeout : 3200,
        smartSpeed:450
    });
    /*Slider 2*/
    $('#about-slider').owlCarousel({
        items:1,
        loop:true,
        navigation:true
    });
    /*Slider 3*/
    $('#team-slider').owlCarousel({
        loop:true,
        smartSpeed:650,
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
    })
    /*Mobile menu*/
    $('.navtoggle').click(function(){
        $('.menu-list').slideToggle(100);
    });
    /*About panel*/
    $('.about-link').click(function(e){
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
    /*Service tabs*/
    var tabs = $('.info-list li a');
    tabs.click(function(e){
        var elem = $( $(this).attr('href') );
        if( !elem.hasClass('active-service') ){
            $('.info-list li a.active-tab-serv').removeClass('active-tab-serv');
            $('.info-item.active-service').removeClass('active-service');
            $(this).addClass('active-tab-serv');
            elem.addClass('active-service');
        };
        e.preventDefault();
    });
});
