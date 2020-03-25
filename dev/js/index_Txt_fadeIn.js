$(document).ready(function () {

    var runtime = 0;
    var runInterval = setInterval(function () {
        runtime =  runtime+1;
        $('.text-anim').addClass('animate');
        if(runtime == 1){
            clearInterval(runInterval);
        }
    }, 1000);


    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if (scrollVal > 10) {
            $('.text-anim').removeClass('animate');
        }else if(scrollVal < 10){
            $('.text-anim').addClass('animate');
        }
    });
});