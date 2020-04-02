//=====================================
$(document).ready(function() {
    // 先撈文章卡片
    serchcard()
    //留言送出
    msg_chat()
    // // 開啟文章
    opencard()
    // 檢舉開關
    report_article()

    // 發表文章=發表人
    $("#opener").click(function() {
        $("#forum_chatbox").fadeIn()
        // 撈頭像回來
        $.ajax({
            url: "./php/forum_status.php",
            type: "post",
            dataType: "json",
            success: function(data) {
                console.log(data)
                let html = ""
                html += `
                <div class="user_path">
                    <img src="./img/login/${data.mem_img}" alt="" />
                </div>
                 <div class="user_name">${data.mem_name}</div>
                `
                $(".chatbox_user").empty()
                $(".chatbox_user").append(html)
            },
        })
        $(".cancechat").click(function() {
            $("#forum_chatbox").fadeOut()
        })
    })
    $(".getchat").click(function() {
        var images = document.getElementById("images")
        var formData = new FormData()
        formData.append("forum_title", $("#forum_title").val())
        formData.append("forum_content", $("#forum_content").val())
        formData.append("forum_area", $("#forum_area").val())
        formData.append("images", images.files[0])
        formData.append("forum_view", $("#forum_view").val())
        formData.append("forum_chat", $("#forum_chat").val())
        if ($("#forum_title , #forum_title , #images").val() == "") {
            alert("內容不能有空值喔～～～～")
        } else {
            $.ajax({
                type: "POST",
                async: false,
                url: "./php/forum_insert.php",
                cache: false,
                contentType: false,
                processData: false,
                data: formData,
                success(data) {
                    console.log(images.files[0])
                    $("#forum_chatbox").fadeOut()
                    serchcard()
                },
            })
        }
    })
    //============ 多重篩選區
    $("#area_selcet,#articel_Sort").change(function() {
        filterALL()
    })
    //=============

    //============= 搜尋功能
    $(".btn-type4").click(function() {
        serch = $("#serch").val()
        $.ajax({
            url: "./php/forum_serch.php",
            type: "post",
            dataType: "json",
            data: {
                forum_title: serch,
            },
            success: function(data) {
                let html = ""
                for (let i = 0; i < data.length; i++) {
                    html += `<div class="forum_filter_articlec content_btn wow zoomIn" psn="${data[i].forum_no}";>
                                    <div class="art_img" >
                                        <img src="./php/images/${data[i].images}"?>
                                    </div>
                                    <div class="art_con">
                                        <div class="art_title">
                                            <img src="./img/login/${data[i].mem_img}" alt="" />
                                            <h1>
                                                ${data[i].mem_name}<span>${data[i].forum_date}刊登</span>
                                            </h1>
                                        </div>
                                        <div class="art_p">
                                            <h1>${data[i].forum_title}</h1>
                                            <p>${data[i].forum_content}</p>
                                        </div>
                                        <div class="art_info">
                                            <div class="btn-border">${data[i].forum_area}</div>
                                            <div class="art_path">
                                                <div class="art_icon">
                                                    <img src="img/icon/eye.png" />
                                                    <span>${data[i].forum_view}</span>
                                                    <input type="hidden" class="forum_view" value="">
                                                </div>
                                                <div class="art_icon">
                                                    <img src="img/icon/chat.svg" />
                                                    <span>${data[i].forum_chat}</span>
                                                    <input type="hidden" id="forum_chat" value="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
                }
                location.reload
                $(".forum_filter_articlec").remove() //先清空網頁上卡片 再重抓！
                $("#forum_space").append(html)
            },
            error: function() {
                alert("失敗")
            },
        })
    })
    //=============
})

//=================================== 呼叫涵式
// 撈文章的function
function serchcard() {
    $.ajax({
        url: "./php/forum_card.php",
        type: "GET",
        dataType: "json",
        success: function(data) {
            // 讓文章排序
            function card_sort(a, b) {
                return b.forum_no - a.forum_no
            }
            data.sort(card_sort)
            let html = ""
            for (i = 0; i < data.length; i++) {
                html += `<div class="forum_filter_articlec content_btn wow slideInUp" psn="${data[i].forum_no}">
                                <div class="art_img" >
                                    <img src="./php/images/${data[i].images}"?>
                                </div>
                                <div class="art_con">
                                    <div class="art_title">
                                        <img src="./img/login/${data[i].mem_img}" alt="" />
                                        <h1>
                                            ${data[i].mem_name}<span>${data[i].forum_date}刊登</span>
                                        </h1>
                                    </div>
                                    <div class="art_p">
                                        <h1>${data[i].forum_title}</h1>
                                        <p>${data[i].forum_content}</p>
                                    </div>
                                    <div class="art_info">
                                        <div class="btn-border">${data[i].forum_area}</div>
                                        <div class="art_path">
                                            <div class="art_icon">
                                                <img src="img/icon/eye.png" />
                                                <span>${data[i].forum_view}</span>
                                                <input type="hidden" class="forum_view" value="">
                                            </div>
                                            <div class="art_icon">
                                                <img src="img/icon/chat.svg" />
                                                <span>${data[i].forum_chat}</span>
                                                <input type="hidden" id="forum_chat" value="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`
            }

            $(".forum_filter_articlec").remove() //先清空網頁上卡片 再重抓！
            $("#forum_space").append(html)
        },
    })
}
// 開啟文章內容燈箱的function
function opencard() {
    $(document).on("click", ".content_btn", function() {
        // $(".content_btn").click(function() {
        $("#forum_contentbox").fadeIn()
        //更新瀏覽次數
        var pns_no = $(this).attr("psn")
        $.ajax({
            url: "./php/forum_article.php",
            type: "post",
            dataType: "json",
            async: false,
            data: { forum_no: pns_no },
            success: function(data) {
                let content = ""
                content += `
                            <div class="contentbox" psn="${pns_no}">
                                <div class="user_loc">${data.forum_title}</div>
                                <div class="chatbox_user">
                                    <div class="user_path">
                                        <img src="./img/login/${data.mem_img}" alt="" />
                                    </div>
                                    <div class="user_name">${data.mem_name}</div>
                                </div>
                                <div class="chatbox_content">
                                    <div class="conten_img">
                                        <img src="./php/images/${data.images}" alt="" />
                                    </div>
                                    <div class="content_p">
                                        <p>
                                            ${data.forum_content}
                                        </p>
                                    </div>
                                </div>
                                <div class="chatbox_status">
                                    <div class="art_path">
                                        <div class="art_icon">
                                            <img src="img/icon/eye.png" />
                                            <span>${data.forum_view}</span>
                                            <input type="hidden" class="view" value="${data.forum_view}">
                                        </div>
                                        <div class="art_icon">
                                            <img src="img/icon/chat.svg" />
                                            <span>${data.forum_chat}</span>
                                            <input type="hidden" class="chat" value="${data.forum_chat}">
                                        </div>
                                    </div>
                                    <div class="art_report report_btn" >
                                        <img src="./img/forum/warning_black.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        `
                $("#forum_contentbox").append(content)
                //抓取留言
                forum_msg()
                // 抓取瀏覽數
                view()
                // 關閉燈箱 並清掉內容
                $(".content_out").click(function() {
                    $("#forum_contentbox").fadeOut()
                    $(".contentbox").remove()
                })
            },
        })
    })
}
// 留言送出function
function msg_chat() {
    $("#msg_send").click(function() {
        var msg_no = $(".contentbox").attr("psn")
        if ($("#msg_chat").val() == "") {
            alert("請輸入文字喔！！！")
            return
        }
        $.ajax({
            url: "./php/forum_msg_insert.php",
            type: "POST",
            data: {
                forum_no: msg_no,
                forum_msg: $("#msg_chat").val(),
            },
            success: function(data) {
                $("#msg_chat").val("")
                forum_msg()
                chat()
            },
        })
    })
}

// 撈留言function
function forum_msg() {
    var msg_no = $(".contentbox").attr("psn")
    $.ajax({
        url: "./php/forum_msg.php",
        type: "post",
        dataType: "json",
        data: {
            forum_no: msg_no,
        },
        success: function(data) {
            // 留言給他排序
            function msg_sort(a, b) {
                return b.forum_msg_no - a.forum_msg_no
            }
            data.sort(msg_sort)
            let msg = ""
            for (i = 0; i < data.length; i++) {
                msg += `
                    <div class="msg_space">
                        <div class="msg_user">
                        <div class="msg_user_space">
                                <img src="./img/login/${data[i].mem_img}" alt="" />
                                <div class="msg_title_user">
                                    <div class="msg_title_name">${data[i].mem_name}</div>
                                    <div class="msg_title_time">${data[i].msg_date}</div>
                                </div>
                            </div>
                        </div>
                        <div class="msg_p">
                            <p>
                                <span style="color:gray">説：</span>${data[i].forum_msg}
                            </p>
                        </div>
                    </div>`
            }
            $(".msg_space").remove() // 移除留言 再把留言放進去重抓
            $(".contentbox").append(msg)
        },
    })
}

//瀏覽次數
function view() {
    var view_no = $(".contentbox").attr("psn")
    var view = $(".view").attr("value")
    view++
    $.ajax({
        url: "./php/forum_view.php",
        type: "POST",
        data: {
            forum_no: view_no,
            forum_view: view,
        },
        success: function(data) {
            // serchcard()
        },
    })
}

// 留言數量
function chat() {
    var chat_no = $(".contentbox").attr("psn")
    var chats = $(".chat").attr("value")
    chats++
    $.ajax({
        url: "./php/forum_chat.php",
        type: "POST",
        data: {
            forum_no: chat_no,
            forum_chat: chats,
        },
        success: function(data) {
            // serchcard()
        },
    })
}

// 多重篩選
function filterALL() {
    area = $("#area_selcet").val()
    Sort = $("#articel_Sort").val()
    $.ajax({
        url: "./php/forum_card.php",
        type: "GET",
        dataType: "json",
        success: function(data) {
            if (area) {
                let html = ""
                for (i = 0; i < data.length; i++) {
                    if (data[i].forum_area == area) {
                        html += `<div class="forum_filter_articlec content_btn wow slideInUp" psn="${data[i].forum_no}">
                                                <div class="art_img">
                                                    <img src="./php/images/${data[i].images}"?>
                                                </div>
                                                <div class="art_con">
                                                    <div class="art_title">
                                                        <img src="./img/login/${data[i].mem_img}" alt="" />
                                                        <h1>
                                                            ${data[i].mem_name}<span>${data[i].forum_date}刊登</span>
                                                        </h1>
                                                    </div>

                                                    <div class="art_p">
                                                        <h1>${data[i].forum_title}</h1>
                                                        <p>${data[i].forum_content}</p>
                                                    </div>
                                                    <div class="art_info">
                                                        <div class="btn-border">${data[i].forum_area}</div>
                                                        <div class="art_path">
                                                            <div class="art_icon">
                                                                <img src="img/icon/eye.png" />
                                                                <span>${data[i].forum_view}</span>
                                                                <input type="hidden" id="forum_view" value="">
                                                            </div>
                                                            <div class="art_icon">
                                                                <img src="img/icon/chat.svg" />
                                                                <span>${data[i].forum_chat}</span>
                                                                <input type="hidden" id="forum_chat" value="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`
                        $(".forum_filter_articlec").remove() //先清空網頁上卡片 再重抓！
                        $("#forum_space").append(html)
                        // opencard()
                    }
                }
                if (area && Sort == "最新發佈") {
                    function card_sort(a, b) {
                        return b.forum_no - a.forum_no
                    }
                    data.sort(card_sort)
                    let html = ""
                    for (i = 0; i < data.length; i++) {
                        if (data[i].forum_area == area) {
                            html += `<div class="forum_filter_articlec content_btn wow slideInUp" psn="${data[i].forum_no}">
                                                <div class="art_img">
                                                    <img src="./php/images/${data[i].images}"?>
                                                </div>
                                                <div class="art_con">
                                                    <div class="art_title">
                                                        <img src="./img/login/${data[i].mem_img}" alt="" />
                                                        <h1>
                                                            ${data[i].mem_name}<span>${data[i].forum_date}刊登</span>
                                                        </h1>
                                                    </div>

                                                    <div class="art_p">
                                                        <h1>${data[i].forum_title}</h1>
                                                        <p>${data[i].forum_content}</p>
                                                    </div>
                                                    <div class="art_info">
                                                        <div class="btn-border">${data[i].forum_area}</div>
                                                        <div class="art_path">
                                                            <div class="art_icon">
                                                                <img src="img/icon/eye.png" />
                                                                <span>${data[i].forum_view}</span>
                                                                <input type="hidden" id="forum_view" value="">
                                                            </div>
                                                            <div class="art_icon">
                                                                <img src="img/icon/chat.svg" />
                                                                <span>${data[i].forum_chat}</span>
                                                                <input type="hidden" id="forum_chat" value="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`
                            $("#forum_space").empty() //先清空網頁上卡片 再重抓！
                            $("#forum_space").append(html)
                            // opencard()
                        }
                    }
                }
                if (area && Sort == "瀏覽最多") {
                    function card_sort(a, b) {
                        return b.forum_view - a.forum_view
                    }
                    data.sort(card_sort)
                    let html = ""
                    for (i = 0; i < data.length; i++) {
                        if (data[i].forum_area == area) {
                            html += `<div class="forum_filter_articlec content_btn wow slideInUp" psn="${data[i].forum_no}">
                                                <div class="art_img">
                                                    <img src="./php/images/${data[i].images}"?>
                                                </div>
                                                <div class="art_con">
                                                    <div class="art_title">
                                                        <img src="./img/login/${data[i].mem_img}" alt="" />
                                                        <h1>
                                                            ${data[i].mem_name}<span>${data[i].forum_date}刊登</span>
                                                        </h1>
                                                    </div>

                                                    <div class="art_p">
                                                        <h1>${data[i].forum_title}</h1>
                                                        <p>${data[i].forum_content}</p>
                                                    </div>
                                                    <div class="art_info">
                                                        <div class="btn-border">${data[i].forum_area}</div>
                                                        <div class="art_path">
                                                            <div class="art_icon">
                                                                <img src="img/icon/eye.png" />
                                                                <span>${data[i].forum_view}</span>
                                                                <input type="hidden" id="forum_view" value="">
                                                            </div>
                                                            <div class="art_icon">
                                                                <img src="img/icon/chat.svg" />
                                                                <span>${data[i].forum_chat}</span>
                                                                <input type="hidden" id="forum_chat" value="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`
                            $("#forum_space").empty() //先清空網頁上卡片 再重抓！
                            $("#forum_space").append(html)
                            // opencard()
                        }
                    }
                }
                if (area && Sort == "回復最多") {
                    function card_sort(a, b) {
                        return b.forum_chat - a.forum_chat
                    }
                    data.sort(card_sort)
                    let html = ""
                    for (i = 0; i < data.length; i++) {
                        if (data[i].forum_area == area) {
                            html += `<div class="forum_filter_articlec content_btn wow slideInUp" psn="${data[i].forum_no}">
                                                <div class="art_img">
                                                    <img src="./php/images/${data[i].images}"?>
                                                </div>
                                                <div class="art_con">
                                                    <div class="art_title">
                                                        <img src="./img/login/${data[i].mem_img}" alt="" />
                                                        <h1>
                                                            ${data[i].mem_name}<span>${data[i].forum_date}刊登</span>
                                                        </h1>
                                                    </div>

                                                    <div class="art_p">
                                                        <h1>${data[i].forum_title}</h1>
                                                        <p>${data[i].forum_content}</p>
                                                    </div>
                                                    <div class="art_info">
                                                        <div class="btn-border">${data[i].forum_area}</div>
                                                        <div class="art_path">
                                                            <div class="art_icon">
                                                                <img src="img/icon/eye.png" />
                                                                <span>${data[i].forum_view}</span>
                                                                <input type="hidden" id="forum_view" value="">
                                                            </div>
                                                            <div class="art_icon">
                                                                <img src="img/icon/chat.svg" />
                                                                <span>${data[i].forum_chat}</span>
                                                                <input type="hidden" id="forum_chat" value="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`
                            $("#forum_space").empty() //先清空網頁上卡片 再重抓！
                            $("#forum_space").append(html)
                            // opencard()
                        }
                    }
                }
            }
            // else if (Sort) {
            //     if (Sort == "最新發佈") {
            //         function card_sort(a, b) {
            //             return b.forum_no - a.forum_no
            //         }
            //         data.sort(card_sort)
            //         let html = ""
            //         for (i = 0; i < data.length; i++) {
            //             html += `<div class="forum_filter_articlec content_btn wow slideInUp" psn="${data[i].forum_no}">
            //                                     <div class="art_img">
            //                                         <img src="./php/images/${data[i].images}"?>
            //                                     </div>
            //                                     <div class="art_con">
            //                                         <div class="art_title">
            //                                             <img src="./img/login/${data[i].mem_img}" alt="" />
            //                                             <h1>
            //                                                 ${data[i].mem_name}<span>${data[i].forum_date}刊登</span>
            //                                             </h1>
            //                                         </div>

            //                                         <div class="art_p">
            //                                             <h1>${data[i].forum_title}</h1>
            //                                             <p>${data[i].forum_content}</p>
            //                                         </div>
            //                                         <div class="art_info">
            //                                             <div class="btn-border">${data[i].forum_area}</div>
            //                                             <div class="art_path">
            //                                                 <div class="art_icon">
            //                                                     <img src="img/icon/eye.png" />
            //                                                     <span>${data[i].forum_view}</span>
            //                                                     <input type="hidden" id="forum_view" value="">
            //                                                 </div>
            //                                                 <div class="art_icon">
            //                                                     <img src="img/icon/chat.svg" />
            //                                                     <span>${data[i].forum_chat}</span>
            //                                                     <input type="hidden" id="forum_chat" value="">
            //                                                 </div>
            //                                             </div>
            //                                         </div>
            //                                     </div>
            //                                 </div>`
            //             $("#forum_space").empty() //先清空網頁上卡片 再重抓！
            //             $("#forum_space").append(html)
            //             // opencard()
            //         }
            //     }
            //     if (Sort == "瀏覽最多") {
            //         function card_sort(a, b) {
            //             return b.forum_view - a.forum_view
            //         }
            //         data.sort(card_sort)
            //         let html = ""
            //         for (i = 0; i < data.length; i++) {
            //             html += `<div class="forum_filter_articlec content_btn wow slideInUp" psn="${data[i].forum_no}">
            //                                     <div class="art_img">
            //                                         <img src="./php/images/${data[i].images}"?>
            //                                     </div>
            //                                     <div class="art_con">
            //                                         <div class="art_title">
            //                                             <img src="./img/login/${data[i].mem_img}" alt="" />
            //                                             <h1>
            //                                                 ${data[i].mem_name}<span>${data[i].forum_date}刊登</span>
            //                                             </h1>
            //                                         </div>

            //                                         <div class="art_p">
            //                                             <h1>${data[i].forum_title}</h1>
            //                                             <p>${data[i].forum_content}</p>
            //                                         </div>
            //                                         <div class="art_info">
            //                                             <div class="btn-border">${data[i].forum_area}</div>
            //                                             <div class="art_path">
            //                                                 <div class="art_icon">
            //                                                     <img src="img/icon/eye.png" />
            //                                                     <span>${data[i].forum_view}</span>
            //                                                     <input type="hidden" id="forum_view" value="">
            //                                                 </div>
            //                                                 <div class="art_icon">
            //                                                     <img src="img/icon/chat.svg" />
            //                                                     <span>${data[i].forum_chat}</span>
            //                                                     <input type="hidden" id="forum_chat" value="">
            //                                                 </div>
            //                                             </div>
            //                                         </div>
            //                                     </div>
            //                                 </div>`
            //             $("#forum_space").empty() //先清空網頁上卡片 再重抓！
            //             $("#forum_space").append(html)
            //             // opencard()
            //         }
            //     }
            //     if (Sort == "回復最多") {
            //         function card_sort(a, b) {
            //             return b.forum_chat - a.forum_chat
            //         }
            //         data.sort(card_sort)
            //         let html = ""
            //         for (i = 0; i < data.length; i++) {
            //             html += `<div class="forum_filter_articlec content_btn wow slideInUp" psn="${data[i].forum_no}">
            //                                     <div class="art_img">
            //                                         <img src="./php/images/${data[i].images}"?>
            //                                     </div>
            //                                     <div class="art_con">
            //                                         <div class="art_title">
            //                                             <img src="./img/login/${data[i].mem_img}" alt="" />
            //                                             <h1>
            //                                                 ${data[i].mem_name}<span>${data[i].forum_date}刊登</span>
            //                                             </h1>
            //                                         </div>

            //                                         <div class="art_p">
            //                                             <h1>${data[i].forum_title}</h1>
            //                                             <p>${data[i].forum_content}</p>
            //                                         </div>
            //                                         <div class="art_info">
            //                                             <div class="btn-border">${data[i].forum_area}</div>
            //                                             <div class="art_path">
            //                                                 <div class="art_icon">
            //                                                     <img src="img/icon/eye.png" />
            //                                                     <span>${data[i].forum_view}</span>
            //                                                     <input type="hidden" id="forum_view" value="">
            //                                                 </div>
            //                                                 <div class="art_icon">
            //                                                     <img src="img/icon/chat.svg" />
            //                                                     <span>${data[i].forum_chat}</span>
            //                                                     <input type="hidden" id="forum_chat" value="">
            //                                                 </div>
            //                                             </div>
            //                                         </div>
            //                                     </div>
            //                                 </div>`
            //             $("#forum_space").empty() //先清空網頁上卡片 再重抓！
            //             $("#forum_space").append(html)
            //             // opencard()
            //         }
            //     }
            // }
        },
    })
}

// 檢舉燈箱
function report_article() {
    // 檢舉開啟關閉
    $(document).on("click", ".report_btn", function() {
        // $(".report_btn").click(function() {
        $("#forum_report").css("display", "block")
        $("#forum_report_cance").click(function() {
            $("#forum_report").css("display", "none")
        })
    })
    // 送出檢舉
    $("#forum_report_sub").click(function() {
        report_no = $(".contentbox").attr("psn")
        //==取得checked 的值
        $("input[type=radio]:checked").each(function() {
            result = $(this).val()
        })
        //==
        $.ajax({
            url: "./php/forum_report.php",
            type: "post",
            async: false,
            data: {
                forum_no: report_no,
                forum_report_reason: result,
            },
            success: function(data) {
                alert("舉報成功")
                $("#forum_report").css("display", "none")
                location.reload()
            },
            error: function(data) {
                alert("舉報失敗")
            },
        })
    })
}
