function $id(id) {
    return document.getElementById(id)
}

function register_back() {
    $id("login_page2").style.display = "none"
    $id("login_page1").style.display = "block"
}

function register() {
    var memid = $id("memid")
    var mempwd = $id("mempwd")
    var mempwdcheck = $id("mempwdcheck")
    var memname = $id("memname")
    var memcell = $id("memcell")
    var memail = $id("memail")
    if (memid.value.length < 4) {
        alert("帳號不得低於4碼")
        memid.style.border = "4px solid red"
        memid.select()
        return
    }
    if (mempwd.value.length < 4) {
        alert("密碼不得低於4碼")
        mempwd.style.border = "4px solid red"
        mempwd.select()
        return
    }
    if (mempwdcheck.value != mempwd.value) {
        alert("密碼不一致")
        mempwdcheck.style.border = "4px solid red"
        mempwdcheck.select()
        return
    }
    if (memcell.value.length < 10) {
        alert("手機號碼不得低於10碼")
        memcell.style.border = "4px solid red"
        memcell.select()
        return
    }
    if (memname.value == "") {
        alert("請輸入名子")
        memname.style.border = "4px solid red"
        memname.select()
        return
    }
    if (memail.value == "") {
        alert("請輸入信箱")
        memail.style.border = "4px solid red"
        memail.select()
        return
    }

    // var userimg = document.getElementById("user_img")
    var LoginData = new FormData()
    LoginData.append("mem_id", $("#memid").val())
    LoginData.append("mem_psw", $("#mempwd").val())
    LoginData.append("mem_name", $("#memname").val())
    LoginData.append("mem_tel", $("#memcell").val())
    LoginData.append("mem_mail", $("#memail").val())
    LoginData.append("mem_img", user_img.files[0])
    $.ajax({
        type: "POST",
        url: "./php/Login_insert.php",
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        data: LoginData,
        success: function(data) {
            // 測試圖片有無上傳成功
            // if (data.indexOf("成功") != -1) {
            alert("註冊成功")
            $("#login_page2").css("display", "none")
            $("#indexLogin").css("display", "none")
            location.reload()
            // } else {
            //     alert("註冊失敗")
            // }
        },
        error: function(xhr) {
            alert("資料錯誤")
        },
    })
}

//開啟
function opennext() {
    login_page1.style.display = "none"
    login_page2.style.display = "block"
}

//關閉
function cancelogin() {
    login_page2.style.display = "none"
}

window.addEventListener(
    "load",
    function() {
        // 開啟鈕
        $id("next_login").onclick = opennext
        // 關閉鈕
        $id("logincancel2").onclick = cancelogin
        // 註冊鈕
        $id("sure_btn").onclick = register
        // 返回
        $id("sure_back").onclick = register_back
    },
    false
)
