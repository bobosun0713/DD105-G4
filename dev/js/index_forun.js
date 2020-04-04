function $id(id) {
    return document.getElementById(id)
}
window.addEventListener("load", function() {
    let card = 0
    let slider = document.getElementById("card_slider")
    let left_btn = document.getElementById("left_btn")
    let right_btn = document.getElementById("right_btn")

    // 右按鈕
    $id("right_btn").onclick = function() {
        let Width = 386
        card++
        card_slider.style.left = -Width * card + "px"
        $id("left_btn").disabled = false
        left_btn.style.opacity = 1
        if (card >= 5) {
            $id("right_btn").disabled = true
            right_btn.style.opacity = 0.3
        }
    }

    // 左按鈕
    $id("left_btn").onclick = function() {
        let Width = 386
        card--
        card_slider.style.left = -Width * card + "px"
        $id("right_btn").disabled = false
        right_btn.style.opacity = 1
        if (card == 0) {
            $id("left_btn").disabled = true
            left_btn.style.opacity = 0.3
        }
    }
})

//===================== 以下ＡＪＡＸ
$(document).ready(function() {
    $.ajax({
        url: "./php/forum_index.php",
        type: "GET",
        dataType: "json",
        success: function(data) {
            let forum = ""
            for (i = 0; i < data.length; i++) {
                forum += `
                <div class="card_border" psn="${data[i].forum_no}">
                    <div class="card_user">
                        <img src="./img/login/${data[i].mem_img}" alt="" />
                        <div class="card_title_user">
                            <div class="title_name">${data[i].mem_name}</div>
                            <div class="title_time">${data[i].forum_date}刊登</div>
                        </div>
                    </div>
                    <h1 class="card_title">${data[i].forum_title}</h1>
                    <p class="card_content">${data[i].forum_content}</p>
                    <div class="card_status">
                        <div class="card_icon">
                            <img src="./img/forum/eye.svg" alt="" />
                            <span class="">${data[i].forum_view}</span>
                        </div>
                        <div class="card_icon">
                            <img src="./img/icon/chat.svg" alt="" />
                            <span class="">${data[i].forum_chat}</span>
                        </div>
                    </div>
                    <div class="card_arrow"></div>
                </div> `
            }
            $("#card_slider").empty()
            $("#card_slider").append(forum)
        },
    })
})
