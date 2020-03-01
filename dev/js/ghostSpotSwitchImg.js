$(document).ready(function(){
    
    $('.smallPicZone img').click(function() {
        // e.preventDefault();
        $('.bigPic img').prop("src", $(this).prop("src"));
        $('.smallPicZone img').removeClass('selected');
        $(this).addClass('selected');
        
    });
});