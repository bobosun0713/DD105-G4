function $id(id) {
    return document.getElementById(id)
}

function sendForm() {
    //========== 這個我抓id
    let backaccout = $id("backaccout")
    let backpwd = $id("backpwd")
    //========== 這個我抓value
    let backId = $id("backaccout").value
    let backPwd = $id("backpwd").value
    let data_info = `admin_id=${backId}&admin_psw=${backPwd}`

    let xhr = new XMLHttpRequest()
    xhr.onload = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            backmember = xhr.responseText
            if (backId == "") {
                alert("帳號不能為空")
                backaccout.style.border = "2px solid red"
                backaccout.select()
                return
            } else if (backPwd == "") {
                alert("密碼不能為空")
                backpwd.style.border = "2px solid red"
                backpwd.select()
            } else if (backmember == "error") {
                alert("帳密錯誤請重新輸入")
                backaccout.style.border = ""
                backpwd.style.border = ""
                backaccout.style.border = "3px solid blue"
                backpwd.style.border = "3px solid blue"
                backId.value = ""
                backPwd.value = ""
            } else {
                backmember = JSON.parse(xhr.responseText)
                alert("登入成功")
                window.location.href = "backend_admin.html"
                // 清空值跟外框
                backId.value = ""
                backPsw.value = ""
                backaccout.style.border = ""
                backpwd.style.border = ""
            }
        } else {
            alert(xhr.status)
        }
    }

    xhr.open("Post", "./php/back_Login.php", true)
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
    xhr.send(data_info)
}

window.addEventListener(
    "load",
    function() {
        $id("backBtn").onclick = sendForm //登入
    },
    false
)
