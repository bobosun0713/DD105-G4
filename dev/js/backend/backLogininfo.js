let backmember
function $id(id) {
    return document.getElementById(id)
}

function showLoginForm() {
    if ($id("admin_status").innerHTML == "登出") {
        //登出
        alert("成功登出")
        //---回server登出session
        let xhr = new XMLHttpRequest()
        xhr.onload = function() {
            if (xhr.status == 200) {
                window.location.href = "index.html"
            } else {
                alert(xhr.status)
            }
        }
        xhr.open("get", "./php/Logout.php", true)
        xhr.send(null)
    }
}

function backLoginInfo() {
    let xhr = new XMLHttpRequest()
    xhr.onload = function() {
        backmember = JSON.parse(xhr.responseText)

        if (backmember.admin_id) {
            $id("admin_name").innerText = backmember.admin_name
            $id("admin_status").innerText = "登出"
        }
    }
    xhr.open("get", "./php/back_info.php", true)
    xhr.send(null)
} //

window.addEventListener(
    "load",
    function() {
        //＝＝＝＝＝＝＝＝＝  檢查是否已登入
        backLoginInfo()

        $id("admin_status").onclick = showLoginForm //燈箱
    },
    false
)
