window.addEventListener("load", function () {


    var xhr = new XMLHttpRequest()
    var url = "./php/logininfo.php"
    xhr.open("GET", url, true)
    xhr.send(null)
    xhr.onload = function () {
        if (xhr.status == 200) {
            let member_de_JSON = JSON.parse(xhr.responseText)
            var mem_no = member_de_JSON.mem_no
            if (!member_de_JSON.mem_name) {
                alert("請先登入")
                $("#forum_chatbox").fadeOut()
                $("#forum_contentbox").fadeOut()
                $("#indexLogin,#login_page1").css("display", "block")
            } else {
                showtabform();
                profileimg_onchange();
                getMemberProfileDB(mem_no);
            }
        }
    }

}, false);
//show tab form
function showtabform() {
    var mybtn = document.getElementsByClassName("tab")[0];
    //js script檔要放最下
    mybtn.click();
}
//點選tab form的title換內容
function showContent(evt, idName) {
    var i, x, tablinks;
    console.log("this1")
    //影藏tab內容
    x = document.getElementsByClassName("tabcontent");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    //目前block打開
    document.getElementById(idName).style.display = "flex";
    //tablinks變不亮
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < x.length; i++) {
        tablinks[i].classList.remove("on");
    }
    evt.currentTarget.classList.add("on");
}


//圖片預覽-------------------------大頭貼.onchange
function profileimg_onchange() {
    document.getElementById("upFile").onchange = function (e) {
        console.log("點到了拉")

        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("imgPreview").src = reader.result;
        }

        reader.readAsDataURL(file);
    }

}
//撈會員個人資料

function showMemberProfileDB(jsonStr) {
    let memberDB = JSON.parse(jsonStr);
    let html = "";
    let html_2 = "";

    for (let i = 0; i < memberDB.length; i++) {
        html += `<div class="profile_col mem_id_member">
            <div class="tabtitle">會員編號:</div>
            <input type="email" class="mem_id" placeholder="" id="memId" value="${memberDB[i].mem_no}">
            <div class="col3"></div>
            </div>
            <hr size="0.5px" width="100%">
            <div class="profile_col mem_account_member">
                <div class="tabtitle">會員帳號:</div>
                <input type="text" class="mem_account" placeholder="" id="memAccount" value="${memberDB[i].mem_id}">
                <div class="col3"></div>
            </div>
            <hr size="0.5px" width="100%">
            <div class="profile_col mem_psw_member">
                <div class="tabtitle">會員密碼:</div>
                <input type="text" class="mem_psw" placeholder="" id="memPsw" value="${memberDB[i].mem_psw}">
                <div class="col3"><img src="./img/member/edit1.png"></div>
            </div>
            <hr size="0.5px" width="100%">
            <div class="profile_col mem_name_member">
                <div class="tabtitle">會員姓名:</div>
                <input type="text" class="mem_name" placeholder="" id="memName" value="${memberDB[i].mem_name}">
                <div class="col3"><img src="./img/member/edit1.png"></div>
            </div>
            <hr size="0.5px" width="100%">
            <div class="profile_col mem_tel_member">
                <div class="tabtitle">行動電話:</div>
                <input type="text" class="mem_tel" placeholder="" id="memTel" value="${memberDB[i].mem_tel}">
                <div class="col3"><img src="./img/member/edit1.png"></div>

            </div>
            <hr size="0.5px" width="100%">
            <div class="profile_col mem_email_member">
                <div>電子信箱:</div>
                <input type="email" class="mem_email" placeholder="" id="memEmail" value="${memberDB[i].mem_mail}">
                <div class="col3"><img src="./img/member/edit1.png"></div>
            </div>
            <hr size="0.5px" width="100%">`;
    }
    for (let i = 0; i < memberDB.length; i++) {
        html_2 += `<img id="imgPreview" src="./img/login/${memberDB[i].mem_img}" width="80">`;
    }

    document.querySelector("#show_memberProfileDB").innerHTML = html;
    let mem_img = document.querySelector(".img_block").innerHTML = html_2;

    //   //html撈到db資料後註冊updatebtn事件
    //   Dom_GameDB_updatebtn();
    //   //html撈到db資料後註冊deletebtn事件
    //   Dom_GameDB_deletebtn();

}

function getMemberProfileDB(mem_no) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            showMemberProfileDB(xhr.responseText);
        } else {
            alert(xhr.status);
        }
    }
    var url = "./php/member_getMemberProfileDB_JASON.php";
    xhr.open("post", url, true);
    //post 要加這行
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("mem_no=" + mem_no);

}


