$(document).ready(function () {

 
    $(window).on("mousemove", function (e) {
        // console.log(window.scrollWidth);
<<<<<<< HEAD

=======
        // console.log(document.documentElement.clientWidth );
        // console.log(window.screen.width);
>>>>>>> 5f9098baa94e775ee45f546dec7112bd31c418a8
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