$(document).ready(function () {
    $(window).on("mousemove", function (e) {
        TweenMax.to("#mouse", 0.5, {
            top: e.pageY + 10 + "px",
            left: e.pageX + 10 + "px",
        })
    })
});