window.addEventListener("load", function () {

    showtabform();
    profileimg_onchange();
    getMemberProfileDB();


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
            <hr size="0.5px" width="100%">
            <div class="profile_col mem_time_member">
                <div class="logintime">最後登入時間:</div>
                <div class="showtime" id="memTime">${memberDB[i].login_update_time}</div>
                <div class="col3"></div>
            </div>
            <hr size="0.5px" width="100%">`;
    }

    document.querySelector("#show_memberProfileDB").innerHTML = html;
    //   //html撈到db資料後註冊updatebtn事件
    //   Dom_GameDB_updatebtn();
    //   //html撈到db資料後註冊deletebtn事件
    //   Dom_GameDB_deletebtn();

}

function getMemberProfileDB() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {

            showMemberProfileDB(xhr.responseText);
        } else {
            alert(xhr.status);
        }
    }

    var url = "./php/member_getMemberProfileDB_JASON.php";
    xhr.open("Get", url, true);
    xhr.send(null);

}

