function $element(element) {
    return document.querySelector(element)
};
function $elements(elements) {
    return document.querySelectorAll(elements)
};

function doFirst1() {

    window.onresize = function () {
        if (document.body.offsetWidth >= 768) {
            dorp_down_menu.style.display = "block";
        }
    }
//     index_se3_tab = $elements('.adventrue_left a');
//     for (var i = 0; i < index_se3_tab.length; i++) {
//         if (document.body.offsetWidth <= 768) {
//             index_se3_tab[i].classList.remove("tab_display");
//         }
//         index_se3_tab[i].addEventListener('click', choose, false);

//     }
};
var index_se3_tab = $elements('.adventrue_left a');
function choose() {
    for (let i = 0; i < index_se3_tab.length; i++) {
        index_se3_tab[i].classList.remove("tab_display");
    }
    //拔掉所有樣式

    if (document.body.offsetWidth <= 768) {
        dorp_down_menu.style.display = "none";
        dorp_down_title.innerHTML = this.innerHTML;
    }

    let xhr = new XMLHttpRequest();
    xhr.open('get', './php/adventrue_Ajax.php');
    xhr.onload = function () {
        let data = this.responseText;
        // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑你回傳json↑↑↑↑↑↑↑↑↑↑↑↑↑↑
        let Array_data = JSON.parse(data);
        // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑轉譯成JS物件↑↑↑↑↑↑↑↑↑↑↑↑↑↑
        new_filter_Array = Array_data;

        //-------------------------熱門篩選----------------------------------

        for (let i = 0; i < 3; i++) {
            index_se3_tab[0].classList.add("tab_display");


            index_se3_tab[i].onclick = function () {
                for (let i = 0; i < 3; i++) {
                index_se3_tab[i].classList.remove("tab_display");
                }
                this.classList.add("tab_display");
                var filter_parameter = ["mem_no", "tour_settime", "tour_no"];
                console.log("先比對")
                // 我要比大小內容
                checkbox_filter(filter_parameter[i]);
                //把要篩選的類別帶進來 帶入下面函式的參數，進行比大小
            };
        };
        checkbox_filter("tour_settime")


        //----------------------熱門篩選比大小-------------------------------
        function checkbox_filter(object) {
            Array_data2 = function (obj1, obj2) {
                if (object == "mem_no" || object == "tour_no") {
                    if (obj1[object] == null) {
                        obj1[object] = 0;
                    }
                    if (obj2[object] == null) {
                        obj2[object] = 0;
                    }
                }
                if (object == "tour_settime") {
                    obj1[object] = new Date(obj1[object]).getTime();
                    obj2[object] = new Date(obj2[object]).getTime();
                }
                val1 = parseInt(obj1[object]);
                val2 = parseInt(obj2[object]);
                if (val1 > val2) {
                    return -1;
                } else if (val1 < val2) {
                    return 1;
                } else {
                    return 0;
                }
            };
            new_filter_Array.sort(Array_data2);

            make_card();
            // 他們最後都會導向要回圈顯示的地方
        }
        //-------------------------熱門篩選-------------------------------



        function make_card() {
            console.log("第二個");
            var html = "";
            adventrue_right_itemall = $element('.adventrue_right_itemall');
            adventrue_right_itemall.innerHTML = "";
            for (let i = 0; i <= 6; i++) {
                //-------------------字串切割;----------------------------------------

                var tour_settime = new_filter_Array[i].tour_settime;
                //     var time1 = new Date(tour_settime);
                //     if(time1==NaN){
                //         time1=0;
                //     }
                //    alert(time1.setTime(time1))

                function changeTime(time) {
                    var commonTime = "";
                    if (time) {
                        var unixTimestamp = new Date(time * 1);
                        commonTime = unixTimestamp.toLocaleString();
                    }
                    return commonTime;
                }
                var tour_settime = changeTime(tour_settime);
                tour_settime = tour_settime.substr(0, 10);


                var tour_datetime = new_filter_Array[i].tour_datetime;
                tour_datetime = tour_datetime.substr(0, 10);
                //-------------------字串切割;----------------------------------------

                //-------------------限60字功能;----------------------------------------
                // 判斷是否為空置串
                if (new_filter_Array[i].tour_content == null) {
                    new_filter_Array[i].tour_content = "";
                }
                var tour_content_word60 = new_filter_Array[i].tour_content.substr(0, 60) + (new_filter_Array[i].tour_content.length > 60 ? "..." : "")
                //-------------------限60字功能;-----------------------------------

                html += `<div class="adventrue_right_item">
                    <div class="adv_r_item_img">
                        <img src="./img/tour/${new_filter_Array[i].tour_image}" alt="">
                                    </div>
                                    <div class="adv_r_item_txt">
                            <h1>【${new_filter_Array[i].tour_title}】</h1>
                            <p>  ${ tour_content_word60}
                                        </p>
                            <ul>
                                <li><i class="fas fa-user-alt"></i>董董老師</li>
                                <li><i class="far fa-calendar-alt"></i>${tour_datetime}</li>
                                <li><i class="fas fa-user-plus"></i> ${new_filter_Array[i].number_of_participants}/${new_filter_Array[i].max_of_participants}人</li>
                            </ul>

                        </div>
                     
                                </div>
                </div>`

            }
            adventrue_right_itemall.innerHTML = html;

        }




    }
    xhr.send(null);
}
// choose


var dorp_down_menu;
var dorp_down_title;
function drop_down() {
    //首頁-熱門最新tab;
    dorp_down_title = $element(".dorp_down_title");
    dorp_down_menu = $element(".dorp_down_menu");
    dorp_down_title.onclick = function () {
        if (document.body.offsetWidth <= 768) {
            if (dorp_down_menu.style.display == "none") {
                dorp_down_menu.style.display = "block";
            } else {
                dorp_down_menu.style.display = "none";
            }
        }
    }

}







choose();
drop_down();
doFirst1();