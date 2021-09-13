$(function(){
    var counters = $('.maincountBox');
    var countersData = counters.find('h2');
    var countersExecuted = false;


    $(window).scroll(function(){
        var curentSct = $(this).scrollTop();
        var $offset = 750;
        var countersThreshold = counters.offset().top - $offset;

    if(curentSct > countersThreshold){
        if(!countersExecuted){

            countersData.each(function(){
                var current = $(this);
                var target = current.attr('data-rate');
                $({rate: 0}).animate({rate : target},{
                    duration: 2500,
                    progress: function(){
                        var now = this.rate;
                        current.text(Math.ceil(now));
                    }
                });
            });
            countersExecuted = true;
        }
    }

    });


    
});