$(document).ready(function(){


    // ================================== 留言
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



    // ================================== 收藏
    // let tourList = $('.tourCard').length;
    // console.log(tourList)

    $('.like').click(function(e){

            //阻止冒泡事件
            e.stopPropagation();
            
            if( $('#login_btn').text() == '登入' ){

                alert("請先登入會員");
                $id("indexLogin").style.display = "block";
                $id("login_page1").style.display = "block";

            }else{
                if( $(this).children().attr('title') == '加入收藏'){
                    $(this).children().attr('src','./img/icon/likeAfter.svg');
                    $(this).children().attr('title', '取消收藏');
                    favorite_this_tour(e);
                    alert('已將該揪團加入收藏');
                    
                }else{
                    $(this).children().attr('src','./img/icon/likeBefore.svg');
                    $(this).children().attr('title','加入收藏');
                    alert('已把該揪團取消收藏');
                }
            };
    });

    // ================================== 跳轉到那張卡片的揪團
    $('.tourCard').click(function(){
        let this_tour_no = $(this).attr('title');
        
        location.href = `./StartGroup.php?tour_no=${this_tour_no}`;
        // location.href = "./StartGroup.html";
    });
});


function favorite_this_tour(e){
    var heart = $(e.target).parent().parent().parent().attr('title');
    // console.log($(e.target).parent().parent().parent().attr('title'));
    $.ajax({
        url: "./php/favorite_spot_tour.php",
        type: "POST",
        cache:false,
        data: {
            tour_no: heart,
        },
        success: function(){
            
        },
    });

}

function unfavorite_this_tour(){

}


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
                $('.personalMsg .headIcon img').attr('src', member.mem_img);
                // alert('AAAAAAA');
            }else{
                $('.personalMsg .headIcon img').attr('src', './img/icon/default_header.svg');
                // alert(member.mem_img);
            }
            $('.personalMsg .neme p').text(member.mem_name);
            
        }else{
            alert(xhr.status);
        }
    }
}

document.querySelector(".OpenwriteMsgBox").addEventListener("click", checkLoginStatus)
