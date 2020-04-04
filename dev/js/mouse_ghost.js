$(document).ready(function () {
   
    if (document.body.clientWidth <=800) {
        $("#mouse").style.display="none";
         // window.onresize = function() {
         //     if (document.body.offsetWidth >= 768) {
         //         dorp_down_menu.style.display = "block"
         //     }
         // }
 
 
     }

    $(window).on("mousemove", function (e) {
        if (document.body.clientWidth <=800) {
            $("#mouse").style.display="none";
             // window.onresize = function() {
             //     if (document.body.offsetWidth >= 768) {
             //         dorp_down_menu.style.display = "block"
             //     }
             // }
     
     
         }
        // console.log(window.scrollWidth);
        // console.log(document.documentElement.clientWidth );
        // console.log(window.screen.width);
        // console.log(window.offsetWidth );

        var objectWidth = $("#ghostIslandWrapper").width();
        //    console.log(objectWidth);
        if (objectWidth < objectWidth + 10 + "px") {
            alert('a');
        }
        TweenMax.to("#mouse", 0.5, {
            top: e.pageY + 10 + "px",
            left: e.pageX + 10 + "px",
        })
    })
   
});