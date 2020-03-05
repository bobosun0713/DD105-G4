$(document).ready(function(){

    $('.spotWroteMsgBG').fadeOut();

    // 打開燈箱
    $('.OpenwriteMsgBox').click(function(){
        $('.spotWroteMsgBG').fadeIn();
    });

    //關掉燈箱
    $('#cancelMsgBtn').click(function(){
        $('.spotWroteMsgBG').fadeOut();
    });
});