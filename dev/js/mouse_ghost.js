$(document).ready(function () {

 
    $(window).on("mousemove", function (e) {
        // console.log(window.scrollWidth);

        // console.log(window.offsetWidth );
    
       var objectWidth= $("#ghostIslandWrapper").width();
    //    console.log(objectWidth);
       if(objectWidth<objectWidth+10+"px"){
           alert('a');
       }
        TweenMax.to("#mouse", 0.5, {
            top: e.pageY + 10 + "px",
            left: e.pageX + 10 + "px",
        })
    })
});