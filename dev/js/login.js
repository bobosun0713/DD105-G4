let member

function $id(id) {
    return document.getElementById(id)
}

function showLoginForm() {
    if ($id("login_btn1").innerHTML == "登入" && $id("login_btn").innerHTML == "登入") {
        $id("indexLogin").style.display = "block"
        $id("login_page1").style.display = "block"
        $id("login_page2").style.display = "none"
    } else {
        //登出
        alert("成功登出")
        //---回server登出session
        let xhr = new XMLHttpRequest()
        xhr.onload = function() {
            if (xhr.status == 200) {
                //自server正確的登出
                $id("memName").style.display = "none"
                $id("login_btn").innerHTML = "登入"
                // RWD
                // $id("memName1").innerHTML = "&nbsp"
                $id("login_btn1").innerText = "登入"
            } else {
                alert(xhr.status)
            }
        }
        xhr.open("get", "./php/Logout.php", true)
        xhr.send(null)
    }
}

function sendForm() {
    //========== 這個我抓id
    let memid = $id("mem_id")
    let mempsw = $id("mem_psw")
    //========== 這個我抓value
    let memId = $id("mem_id").value
    let memPsw = $id("mem_psw").value
    let data_info = `mem_id=${memId}&mem_psw=${memPsw}`

    let xhr = new XMLHttpRequest()
    xhr.onload = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            member = xhr.responseText
            if (memId == "") {
                alert("帳號不能為空")
                memid.style.border = "4px solid red"
                memid.select()
                return
            } else if (memPsw == "") {
                alert("密碼不能為空")
                mempsw.style.border = "4px solid red"
                mempsw.select()
            } else if (member == "error") {
                alert("帳密錯誤請重新輸入")
                mempsw.style.border = ""
                memid.style.border = ""
                memid.style.border = "3px solid blue"
                mempsw.style.border = "3px solid blue"
                $id("mem_id").value = ""
                $id("mem_psw").value = ""
            } else {
                member = JSON.parse(xhr.responseText)
                alert("登入成功")
                $id("memName").style.display = "block"
                $id("memName").src = member.mem_img
                $id("login_btn").innerText = "登出"
                // 關閉燈箱
                $id("indexLogin").style.display = "none"
                $id("login_page1").style.display = "none"
                // 清空值跟外框
                $id("mem_id").value = ""
                $id("mem_psw").value = ""
                mempsw.style.border = ""
                memid.style.border = ""
                location.reload()
            }
        } else {
            alert(xhr.status)
        }
    }

    xhr.open("Post", "./php/Login.php", true)
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
    xhr.send(data_info)
}

function cancelLogin() {
    $id("indexLogin").style.display = "none"
    $id("login_page1").style.display = "none"
    $id("mem_id").value = ""
    $id("mem_psw").value = ""
}

function getLoginInfo() {
    let xhr = new XMLHttpRequest()
    xhr.onload = function() {
        member = JSON.parse(xhr.responseText)

        if (member.mem_id) {
            // 桌機
            $id("memName").style.display = "block"
            $id("memName").src = member.mem_img
            $id("login_btn").innerText = "登出"
            // RWD
            // $id("memName1").innerText = member.mem_name
            $id("login_btn1").innerText = "登出"
        }
    }
    xhr.open("get", "./php/Logininfo.php", true)
    xhr.send(null)
} //

window.addEventListener(
    "load",
    function() {
        //＝＝＝＝＝＝＝＝＝  檢查是否已登入
        getLoginInfo()

        $id("login_btn").onclick = showLoginForm //燈箱

        $id("login_btn1").onclick = showLoginForm //RWD 按鈕

        $id("loginbutton").onclick = sendForm //登入

        $id("logincancel").onclick = cancelLogin //取消
    },
    false
)
