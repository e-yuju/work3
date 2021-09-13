$(function(){
    var excuted = false;

    $(window).scroll(function(){
        var threshold = $('.since').offset().top - 300;
        // console.log(threshold);

        if(!excuted){
                if($(window).scrollTop() >= threshold){
                    var progressRate = $('.animate').attr('data-rate');
                    $({percent: 0}).animate({percent:progressRate},{
                        duration: 1500,
                        progress: function(){
                            var now = this.percent;
                            $('.animate').text(Math.ceil(now));
                        }
                    });
                    excuted = true;
                }//if조건문
            }//excuted if조건문
        });
    });

/*
$('.box').animate({width:100%,height:100%},1500,
    easeOutQuint,function(){...끝나고 할일});

    $('.box').animate({width: 100%,height:100%},
        {
            duration: 1500,
            easing: 'easeOutQuint',
            complate: function(){...끝나고 할일},
            progress: function(){...진행중 할일}
        });
 */