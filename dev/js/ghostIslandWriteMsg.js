$(document).ready(function(){



    $('.spotWroteMsgBG').fadeOut();
    // 打開燈箱
    $('.OpenwriteMsgBox').click(function(){

        if( $('#login_btn').text() == '登出' ){
            $('.spotWroteMsgBG').fadeIn();

        }else {
            alert("請先登入會員");
            $id("indexLogin").style.display = "block";
            $id("login_page1").style.display = "block";
        }
    });

    //關掉燈箱
    $('#cancelMsgBtn').click(function(){
        $('.spotWroteMsgBG').fadeOut();
    });
});


function checkLoginStatus() {
    var xhr = new XMLHttpRequest()
    var url = "./php/logininfo.php"
    xhr.open("GET", url, true)
    xhr.send(null)
    xhr.onload = function() {

        if (xhr.status == 200) {
            member = JSON.parse(xhr.responseText)
            
            //把會員資料寫進燈箱
            if( member.mem_img != null){
                $('.headIcon img').attr('src', member.mem_img);
                // alert('AAAAAAA');
            }else{
                $('.headIcon img').attr('src', './img/icon/default_header.svg');
                // alert(member.mem_img);
            }
            $('.personalMsg .neme p').text(member.mem_name);
            
        }else{
            alert(xhr.status);
        }
    }
}

document.querySelector(".OpenwriteMsgBox").addEventListener("click", checkLoginStatus)
