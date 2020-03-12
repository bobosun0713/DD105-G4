$(document).ready(function() {
    $(".login_btn").click(function() {
        $("#indexLogin, .login_page1").css("display", "block")
    })
    $(".creat_btn").click(function() {
        $("#indexLogin, .login_page2").css("display", "block")
    })
    $(".next_login").click(function() {
        $(".login_page2").css("display", "block")
        $(".login_page1").css("display", "none")
    })
    $(".logincancel").click(function() {
        $(".login_page1 , .login_page2").css("display", "none")
        $("#memid, #mempwd, #mempwdcheck, #memname, #memcell, #memail").val("")
    })
})
