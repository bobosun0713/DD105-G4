//tab form
var mybtn = document.getElementsByClassName("tab")[0];
//js script檔要放最下
mybtn.click();

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



//登入時間

//圖片預覽

//-------------------------大頭貼.onchange
document.getElementById("upFile").onchange = function (e) {
    console.log("點到了拉")

    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById("imgPreview").src = reader.result;
    }

    reader.readAsDataURL(file);
}



