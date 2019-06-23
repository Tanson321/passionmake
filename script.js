$(".about-wrapper").click(function(){
    $("#cover").css('animation-duration', '2s');
    $('#cover').css("animation-name",'change');
    $("body").css('background-color', '#29b6f6');
    $("#header").css('animation-name', 'fadeOut');
    $(".links").css('animation-name', 'fadeOut');
    $(".produce-wrapper").css('animation-name', 'fadeOut');
    $(".story-wrapper").css('animation-delay', '0.3s');
    $(".story-wrapper").css('animation-name', 'fallDown');
    $(".about-wrapper").css('animation-delay', '0.6s');
    $(".about-wrapper").css('animation-name', 'fallDown');
});

$(".about-wrapper").click(function(){
    setTimeout(function(){
        $("#header").hide();
        $(".main").hide();
        $("#about-text").show();
        $(".header-small").show();
        $(".links").css('animation-name', "fadeIn");
        $(".landing-wrapper").css('height', 'auto');
        $(".header-small").css('animation-name', "fadeIn");
        $("#about-text").css('animation-name', 'fadeIn');   
    },1000);
});

$(".story-wrapper").click(function(){
    $("#cover").css('animation-duration', '2s');
    $("#cover").css('animation-name', 'change');
    $("body").css('background-color', '#FFC107');
    $("#header").css('animation-name', 'fadeOut');
    $(".links").css('animation-name', 'fadeOut');
    $(".about-wrapper").css('animation-name', 'fallDown');
    $(".produce-wrapper").css('animation-delay', '0.3s');
    $(".produce-wrapper").css('animation-name', 'fallDown');
    $(".story-wrapper").css('animation-delay', '0.6s');
    $(".story-wrapper").css('animation-name', 'fallDown');
});

$(".story-wrapper").click(function(){
    setTimeout(function(){
        $("#header").hide();
        $(".main").hide();
        $("#story-text").show();
        $(".header-small").show();
        $(".links").css('animation-name', "fadeIn");
        $(".landing-wrapper").css('height', 'auto');
        $(".header-small").css('animation-name', "fadeIn");
        $("#story-text").css('animation-name', 'fadeIn');   
    },1000);
});

$(".produce-wrapper").click(function(){
    $("#cover").css('animation-duration', '2s');
    $("#cover").css('animation-name', 'change');
    $("body").css('background-color', '#F06292');
    $("#header").css('animation-name', 'fadeOut');
    $(".links").css('animation-name', 'fadeOut');
    $(".about-wrapper").css('animation-name', 'fallDown');
    $(".story-wrapper").css('animation-delay', '0.3s');
    $(".story-wrapper").css('animation-name', 'fallDown');
    $(".produce-wrapper").css('animation-delay', '0.6s');
    $(".produce-wrapper").css('animation-name', 'fallDown');
});

$(".produce-wrapper").click(function(){
    setTimeout(function(){
        $("#header").hide();
        $(".main").hide();
        $("#produce-text").show();
        $(".header-small").show();
        $(".links").css('animation-name', "fadeIn");
        $(".landing-wrapper").css('height', 'auto');
        $(".header-small").css('animation-name', "fadeIn");
        $("#produce-text").css('animation-name', 'fadeIn');   
    },1000);
});