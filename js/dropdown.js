$(document).ready(function(){
    $('.mainmenu > li').mouseover(function(){
        $(this).children('.sub').stop().slideDown();
    });
    $('.mainmenu > li').mouseleave(function(){
        $(this).children('.sub').stop().slideUp();
    });
});