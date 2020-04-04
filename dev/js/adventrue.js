$(document).ready(function () {
    // $(window).on("mousemove", function (e) {
    //     TweenMax.to("#mouse", 0.5, {
    //         top: e.pageY + 10 + "px",
    //         left: e.pageX + 10 + "px",
    //     })
    // })

    // $(window).scroll(function () {
    //     /* Check the location of each desired element */
    //     $('.item').each(function (i) {
    //         //  each是幹嘛的?
    //         var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 50
    //         //頁面最頂到物件頂+物件高度
    //         var bottom_of_window = $(window).scrollTop() + $(window).height()
    //         //滾輪頂部跟你往下滾中間距離   + 視窗高度
    //         /* If the object is completely visible in the window, fade it it */
    //         if (bottom_of_window > bottom_of_object) {
    //             $(this).animate(
    //                 {
    //                     opacity: '1',
    //                     bottom: '0px',
    //                 },
    //                 800
    //             )
    //         }
    //     })
    // })
})
// var infScroll = new InfiniteScroll('.item_all', {
//     path: function () {
//         // 頁面路徑

//         if (this.loadCount < 2) {
//             // 只讀取前兩頁資料
//             var nextIndex = this.loadCount + 2 // 2
//             return 'page' + nextIndex + '.html' // page2.html
//         }
//     },
//     append: '.item', // 把頁面顯示出來的方式,預設是false
//     // responseType: 'text', // 設定頁面請求返回的響應型別 text時是json
//     prefill: true, //預填充 ，加上後append屬性必須。
//     // status: '.page-load-status',
//     // hideNav: '.pagination',
//     history: false, //更改瀏覽器歷史記錄和URL。
//     scrollThreshold: 40, //設定滾動條與滾動區域之間的距離，預設是40
// })
/* 按下GoTop按鈕時的事件 */
$('.go_top').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow') /* 返回到最頂上 */
    return false
})
/* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.go_top').fadeIn()
    } else {
        $('.go_top').fadeOut()
    }
})

// 數字增加
//数字自增到某一值动画参数（目标元素,自定义配置）
function NumAutoPlusAnimation(targetEle, options) {
    /*可以自己改造下传入的参数，按照自己的需求和喜好封装该函数*/
    //不传配置就把它绑定在相应html元素的data-xxxx属性上吧
    options = options || {}
    var $this = document.getElementById(targetEle),
        time = options.time || $this.data('time'), //总时间--毫秒为单位
        finalNum = options.num || $this.data('value'), //要显示的真实数值
        regulator = options.regulator || 100, //调速器，改变regulator的数值可以调节数字改变的速度
        step = finalNum / (time / regulator) /*每30ms增加的数值--*/,
        count = 0, //计数器
        initial = 0

    var timer = setInterval(function () {
        count = count + step

        if (count >= finalNum) {
            clearInterval(timer)
            count = finalNum
        }
        //t未发生改变的话就直接返回
        //避免调用text函数，提高DOM性能
        var t = Math.floor(count)
        if (t == initial) return

        initial = t

        $this.innerHTML = initial
    }, 30)
}
// NumAutoPlusAnimation('add_number', {
//     time: 3000,
//     num: 213,
//     regulator: 50,
// })
// ----------------------------------------------------
function $element(element) {
    return document.querySelector(element)
}
function $elements(elements) {
    return document.querySelectorAll(elements)
}

// --------------------------可能另一組抓ajax的模板+++++++++++
// function people_message_onload() {
//     var xhr1 = new XMLHttpRequest();
//     //聯繫伺服器物件
//     xhr1.open('get', './php/adventrue_Ajax.php');
//     xhr1.onload = function () {
//         let data = this.responseText;
//         let Array_data = JSON.parse(data);


//     }
//     xhr1.send(null);

// }
// people_message_onload();

// ---------------------燈箱類-------------------------

// // 開啟篩選 放入要開啟的按鈕跟打開的元素
// open_filter('.area', '.filter_background')
// function open_filter(click_object, open_object) {
//     var click_object = $element(click_object)
//     var open_object = $element(open_object)
//     click_object.onclick = function () {
//         open_object.style.display = 'block'
//     }
// }
// 按掉叉叉組件(輸入叉叉元素跟關閉元素)
close('.shut_down', '.filter_background')
//   close('.people_message_shut_down', '.people_message_background')
function close(out, hide_odject) {
    var out = document.querySelector(out)
    var filter_background = document.querySelector(hide_odject)
    out.onclick = function () {
        filter_background.style.display = 'none'
    }
}


// ----------------------------------------------------------------左邊燈箱隨著跑----------------------------------------------------------------

// left_filter


$(window).scroll(function () {
    var left_filter = $element('.left_filter');
    var left_filter_group = $element('.left_filter_group');




    if (window.scrollY >= left_filter.offsetTop) {
        left_filter.style.position = "fixed";
        left_filter.style.top = "5px";
    }
    if (window.scrollY + 100 <= left_filter_group.offsetTop) {
        left_filter.style.position = "relative";
        left_filter.style.top = "0";
    }


});



//     $(window).scroll(function () {
//     if ($(this).scrollTop() > 400) {
//         $('.go_top').fadeIn()
//     } else {
//         $('.go_top').fadeOut()
//     }
// })


// ----------------------------------------------------------------左邊燈箱隨著跑----------------------------------------------------------------

// ----------------------------------------------------------------------

// 景點篩選
function doFirst() {
    filter_areas = $elements('.filter_area')
    filter_all_img = $element('.filter_all_img')
    var area = [
        '北部-明雄鬼屋',
        '北部-明雄鬼屋',
        '北部-明雄鬼屋',
        '北部-明雄鬼屋',
        '北部-明雄鬼屋',
        '中部-死亡醫院',
        '中部-死亡醫院',
        '中部-死亡醫院',
        '中部-死亡醫院',
        '中部-死亡醫院',
        '南部-亞特蘭提斯',
        '南部-亞特蘭提斯',
        '南部-亞特蘭提斯',
        '南部-亞特蘭提斯',
        '南部-亞特蘭提斯',
    ];
    for (let j = 0; j < 15; j++) {
        var filter_img = document.createElement('div')
        filter_img.setAttribute('class', 'filter_img')
        span = document.createElement('span')
        var img = document.createElement('img')
        img.src = `./img/spot/spot${j + 1}/SP_big_1.png`
        filter_img.appendChild(span)
        filter_img.appendChild(img)
        filter_all_img.appendChild(filter_img)
        //裝東西的爸爸
        span.innerText = area[j]
    };
    //我動態新增完html來用要另外抓他嗎?
    filter_imgs = $elements('.filter_img')
    filter_spans = $elements('.filter_img span')
    //上面這行是抓到動態新增後的15個圖片
    for (let m = 0; m < filter_imgs.length; m++) {
        filter_imgs[m].onclick = choose_area_name
        //點擊要篩選的圖片發生的事情
    };
    for (let i = 0; i < filter_areas.length; i++) {
        filter_areas[i].onclick = choose_area
        //點擊篩選的北中南發生的事情
    };
};
function choose_area(e) {
    for (let i = 0; i < filter_imgs.length; i++) {
        filter_imgs[i].style.display = 'none'
    }
    for (let y = 0; y < filter_areas.length; y++) {
        filter_areas[y].classList.remove('show_tab_gray')
    }
    e.target.classList.add('show_tab_gray')
    switch (e.target.innerText) {
        case '全部':
            for (let i = 0; i < filter_imgs.length; i++) {
                filter_imgs[i].style.display = 'block'
            }
            break
        case '北部':
            for (let a = 0; a < filter_imgs.length; a++) {
                if (filter_spans[a].innerText.indexOf('北部') != -1) {
                    filter_imgs[a].style.display = 'block'
                }
            }
            break
        case '中部':
            for (let a = 0; a < filter_imgs.length; a++) {
                if (filter_spans[a].innerText.indexOf('中部') != -1) {
                    filter_imgs[a].style.display = 'block'
                }
            }
            break
        case '南部':
            for (let a = 0; a < filter_imgs.length; a++) {
                if (filter_spans[a].innerText.indexOf('南部') != -1) {
                    filter_imgs[a].style.display = 'block'
                }
            }
            break
    }
}
var save_word = '';
var true_sumbit_filter = $element(".true_sumbit_filter");
function choose_area_name(e) {
    filter_spans[0].style.color = 'white'
    this.classList.toggle('filter_border');
    save_word += this.innerText.substr(3, 10) + " ";
    tour_content_word20 = save_word.substr(0, 20) + (save_word.length > 20 ? "..." : "");
    true_sumbit_filter.onclick = addword;
}
function addword() {
    var area_filter = $element(".area_filter");
    area_filter.innerHTML = "搜尋景點:" + tour_content_word20;
    save_word = "";
    let filter_background = $element(".filter_background");
    filter_background.style.display = 'none'

}




doFirst();

// 景點篩選
// ------------------------------------ ---左邊AjaxAjaxAjax---------------------
function ajax_take_odject() {
    var new_filter_Array;
    var xhr = new XMLHttpRequest();
    //聯繫伺服器物件
    xhr.open('get', './php/adventrue_Ajax.php');
    xhr.onload = function () {
        let data = this.responseText;
        // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑你回傳json↑↑↑↑↑↑↑↑↑↑↑↑↑↑
        let Array_data = JSON.parse(data);
        // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑轉譯成JS物件↑↑↑↑↑↑↑↑↑↑↑↑↑↑
        new_filter_Array = Array_data;
        // for (let i = 0; i <Array_data.length; i++) {

        // }
        var item_all = $element('.item_all');
        html = "";
        filter_object();
        //叫最一開始的出來
        ajax_search();
        //最上面團變化-------------------
        var add_number = $element('#add_number');
        add_number.innerHTML =
            NumAutoPlusAnimation('add_number', {
                time: 3000,
                num: Array_data.length,
                regulator: 50,
            });
        //----------------------把所有篩選按鈕都抓好-------------------------
        var list_check = document.getElementsByName('lab1');
        var list_check2 = document.getElementsByName('lab2');
        var list_check3 = document.getElementsByName('lab3');
        var list_check4 = document.getElementsByName('lab4');

        var select1 = document.getElementById('selectID1');
        // var select1 = document.getElementsByName('select1');
        var select2 = document.getElementById('selectID2');
        var select3 = document.getElementById('selectID3');
        var select4 = document.getElementById('selectID4');

        // var option1 = document.getElementsByName('option1');
        // var option2 = document.getElementsByName('option2');
        // var option3 = document.getElementsByName('option3');
        // var option4 = document.getElementsByName('option4');



        //----------------------把所有篩選按鈕都抓好-------------------------
        // ------------------------------------ ---上方AjaxAjaxAjax---------------------
        function ajax_search() {
            var search = $element(".search");
            search.onclick = send_search;
            function send_search(e) {
                //點擊的
                var search_key = $element(".search_key");
                //打字的 
                var key_word = search_key.value;
                //key進去的值

                if (key_word.replace(/(^s*)|(s*$)/g, "").length == 0) {
                    ajax_take_odject();
                }
                //把篩選欄位全部恢復
                list_check[0].checked = true;
                list_check2[0].checked = true;
                list_check3[0].checked = true;
                list_check4[0].checked = true;
                // select1.selected= true;
                // select2.selected= true;
                // select3.selected= true;
                // select4.selected= true;
                e.preventDefault();
                // 阻止預設事件
                var xhr1 = new XMLHttpRequest();
                //聯繫伺服器物件
                xhr1.open('post', "./php/adventrue_Ajax_3.php", true);
                xhr1.onload = function () {
                    let data2 = this.responseText;
                    //回傳
                    Array_data3 = JSON.parse(data2);
                    //轉譯
                    Array_data = Array_data3;
                    //把新回傳的 值給我最一開始抓的data
                    new_filter_Array = Array_data;
                    //把新ㄉ 再傳給我更動的物件
                    html = "";
                    filter_object();
                    //呼叫我更動的主要檔案讓他吃到    new_filter_Array 

                }
                xhr1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr1.send("key_word=" + key_word);
                //把輸入值傳進這
                // location.reload();
            }
            // search
        }
        // ajax_search
        // ------------------------------------ ---上方AjaxAjaxAjax---------------------


        //----------------------熱門篩選比大小-------------------------------
        function checkbox_filter(object) {
            Array_data2 = function (obj1, obj2) {
                if (object == "tour_no") {
                    val1 = parseInt(obj1['number_of_participants']) / parseInt(obj1["max_of_participants"]) * 100;
                    val2 = parseInt(obj2['number_of_participants']) / parseInt(obj2["max_of_participants"]) * 100;
                    if (val1 > val2) {
                        return -1;
                    } else if (val1 < val2) {
                        return 1;
                    } else {
                        return 0;
                    }

                } else {
                    val1 = parseInt(obj1[object]);
                    val2 = parseInt(obj2[object]);
                    if (val1 > val2) {
                        return -1;
                    } else if (val1 < val2) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            };
            new_filter_Array.sort(Array_data2);
            // 他們最後都會導向要回圈顯示的地方
        }
        //-------------------------熱門篩選-------------------------------


        //-------------------------日期篩選-------------------------------

        function timeForMat(count, data2) {
            var time1 = new Date();
            // date物件 這給當前時間
            var time2 = new Date();
            // date物件 這給幾周前參數
            var time3 = new Date(data2.tour_settime);
            // if (count >= 0) {
            //     time1.setTime(time1.getTime())
            //     //把從以前到現在時間轉回秒  再轉回正常時間
            //   getTime是轉秒數   setTime把秒數轉正常
            // }
            var Y1 = time1.getFullYear()
            var M1 = ((time1.getMonth() + 1) > 9 ? (time1.getMonth() + 1) : '0' + (time1.getMonth() + 1))
            var D1 = (time1.getDate() > 9 ? time1.getDate() : '0' + time1.getDate())
            var timer1 = Y1 + '-' + M1 + '-' + D1 + ' ' + '23:59:59' // 當前時間
            // time2.setTime(time2.getTime() - (24 * 60 * 60 * 1000 * count));

            var Y2 = time2.getFullYear()
            var M2 = ((time2.getMonth() + 1) > 9 ? (time2.getMonth() + 1) : '0' + (time2.getMonth() + 1))
            var D2 = (time2.getDate() > 9 ? time2.getDate() : '0' + time2.getDate())
            var timer2 = Y2 + '-' + M2 + '-' + D2 + ' ' + '00:00:00' // 參數時間
            var Y3 = time3.getFullYear()
            var M3 = ((time3.getMonth() + 1) > 9 ? (time3.getMonth() + 1) : '0' + (time3.getMonth() + 1))
            var D3 = (time2.getDate() > 9 ? time3.getDate() : '0' + time3.getDate())
            var timer3 = Y3 + '-' + M3 + '-' + D3 + ' ' + '00:00:00' // 參數時間
            a = time2.getTime() - (24 * 60 * 60 * 1000 * count)
            b = time3.getTime();
            c = time1.getTime();
            return [a, b, c]
        }
        function alltime(data2) {
            var return_data = timeForMat(365, data2)
            // time2.getTime() > time3.getTime()
            if (return_data[0] < return_data[1]) {
                return true
            }
        }
        function today(data2) {
            var return_data = timeForMat(1, data2)
            // time2.getTime() > time3.getTime()
            if (return_data[0] < return_data[1] && return_data[1] < return_data[2]) {
                return true
            }
        }
        function sevenDays(data2) {
            var return_data = timeForMat(7, data2)
            // time2.getTime() > time3.getTime()
            if (return_data[0] < return_data[1]) {
                return true
            }
        }
        function onemonth(data2) {
            var return_data = timeForMat(30, data2)
            // time2.getTime() > time3.getTime()
            if (return_data[0] < return_data[1] && return_data[1] < return_data[2]) {
                return true
            }
        }
        function threemonth(data2) {
            var return_data = timeForMat(90, data2)
            // time2.getTime() > time3.getTime()
            if (return_data[0] < return_data[1] && return_data[1] < return_data[2]) {
                return true
            }
        }
        //-------------------------日期篩選-------------------------------
        //------------------費用篩選---------------------------------

        function filterFunc0(data) {
            let total = parseInt(data.spot_budget) + parseInt(data.food_budget) + parseInt(data.temple_budget);
            //任何都可以
            if (total > 0 || total == 0) {
                return true;
            }
        }
        function filterFunc1(data) {
            if (data.spot_budget == null) {
                data.spot_budget = 0;
            } if (data.food_budget == null) {
                data.food_budget = 0;
            } if (data.temple_budget == null) {
                data.temple_budget = 0;
            }
            let total = parseInt(data.spot_budget) + parseInt(data.food_budget) + parseInt(data.temple_budget);
            //無花費
            if (total == 0) {

                return true;
            }
        }
        function filterFunc2(data) {
            if (data.spot_budget == null) {
                data.spot_budget = 0;
            } if (data.food_budget == null) {
                data.food_budget = 0;
            } if (data.temple_budget == null) {
                data.temple_budget = 0;
            }
            let total = parseInt(data.spot_budget) + parseInt(data.food_budget) + parseInt(data.temple_budget);
            //1~1000
            if (total > 0 && total < 500) {
                return true;
            }
        }
        function filterFunc3(data) {
            if (data.spot_budget == null) {
                data.spot_budget = 0;
            } if (data.food_budget == null) {
                data.food_budget = 0;
            } if (data.temple_budget == null) {
                data.temple_budget = 0;
            }
            let total = parseInt(data.spot_budget) + parseInt(data.food_budget) + parseInt(data.temple_budget);
            // 1000以上
            if (total > 500) {
                return true;
            }
        }
        //------------------費用篩選------------------------------------------

        //------------------人數篩選------------------------------------------
        function people_filterFunc0(data) {
            let last_participants = parseInt(data.max_of_participants) - parseInt(data.number_of_participants);
            //任何都可以

            if (last_participants > 0 || last_participants == 0) {
                return true;
            }
        }
        function people_filterFunc1(data) {
            let last_participants = parseInt(data.max_of_participants) - parseInt(data.number_of_participants);
            //任何都可以
            if (last_participants > 0 && last_participants < 4) {
                return true;
            }
        }
        function people_filterFunc2(data) {
            let last_participants = parseInt(data.max_of_participants) - parseInt(data.number_of_participants);
            //任何都可以
            if (last_participants > 3 && last_participants < 7) {
                return true;
            }
        }
        function people_filterFunc3(data) {
            let last_participants = parseInt(data.max_of_participants) - parseInt(data.number_of_participants);
            //任何都可以
            if (last_participants > 6) {
                return true;
            }
        }



        for (let i = 0; i < list_check.length; i++) {
            var list_check = $elements('.list_check');
            list_check[i].onclick = function () {
                new_filter_Array = Array_data;
                //-------------------------熱門篩選----------------------------------
                for (let i = 0; i < list_check.length; i++) {
                    var filter_parameter = ["spot_no", "tour_no", "tour_chat", "temple_tool"];
                    if (list_check[i].checked == true) {
                        checkbox_filter(filter_parameter[i]);
                    }
                };
                for (let i = 0; i < list_check2.length; i++) {
                    var people_filterFunc = [people_filterFunc0, people_filterFunc1, people_filterFunc2, people_filterFunc3]
                    if (list_check2[i].checked == true) {
                        new_filter_Array = new_filter_Array.filter(people_filterFunc[i]);
                    }
                }
                for (let i = 0; i < list_check3.length; i++) {
                    var days = [alltime, today, sevenDays, onemonth, threemonth];
                    if (list_check3[i].checked == true) {
                        new_filter_Array = new_filter_Array.filter(days[i]);
                    }
                }
                for (let i = 0; i < list_check4.length; i++) {
                    var filterFunc = [filterFunc0, filterFunc1, filterFunc2, filterFunc3]
                    if (list_check4[i].checked == true) {
                        new_filter_Array = new_filter_Array.filter(filterFunc[i]);
                    }
                }
                filter_object();
            }
        }


        // --------------------------------RWD篩選----------------------------------

        // for (let i = 0; i < list_check.length; i++) {
        // var list_check = $elements('.list_check');
        // list_check[i].onclick = function () {
        //     new_filter_Array = Array_data;
        //     //-------------------------熱門篩選----------------------------------
        //     for (let i = 0; i < list_check.length; i++) {
        //         var filter_parameter = ["spot_no", "tour_no", "tour_chat", "temple_tool"];
        //         if (list_check[i].checked == true) {
        //             checkbox_filter(filter_parameter[i]);
        //         }
        //     };
        //     for (let i = 0; i < list_check2.length; i++) {
        //         var people_filterFunc = [people_filterFunc0, people_filterFunc1, people_filterFunc2, people_filterFunc3]
        //         if (list_check2[i].checked == true) {
        //             new_filter_Array = new_filter_Array.filter(people_filterFunc[i]);
        //         }
        //     }
        //     for (let i = 0; i < list_check3.length; i++) {
        //         var days = [alltime, today, sevenDays, onemonth, threemonth];
        //         if (list_check3[i].checked == true) {
        //             new_filter_Array = new_filter_Array.filter(days[i]);
        //         }
        //     }
        //     for (let i = 0; i < list_check4.length; i++) {
        //         var filterFunc = [filterFunc0, filterFunc1, filterFunc2, filterFunc3]
        //         if (list_check4[i].checked == true) {
        //             new_filter_Array = new_filter_Array.filter(filterFunc[i]);
        //         }
        //     }
        //     filter_object();
        // }
        // }

        // 上面是參考 明天刪除

        for (let i = 0; i < 4; i++) {
            var selectArray = [select1, select2, select3, select4];
            selectArray[i].onchange = function () {
                var index = this.selectedIndex;
                alert(this.options[index].value);


           






            };


        }

        // --------------------------------RWD篩選----------------------------------


















        //------------------人數篩選------------------------------------------


        //------------------主要重複性揪團卡片工作區域---------------------------
        function filter_object() {
            // console.log(new_filter_Array);
            item_all.innerHTML = "";
            html = "";
            //上面兩個把原本的都洗掉
            var iDays = [];
            for (i = 0; i < new_filter_Array.length; i++) {
                //------------------剩餘時間----------------------------------------
                //  剩餘時間=截止時間-當前時間        
                var now_time = new Date();
                //新增一個當前時間data物件
                var remain_time = new Date(new_filter_Array[i].tour_endtime);
                //新增一個截止時間data物件
                iDays.push(parseInt((remain_time.getTime() - now_time.getTime()) / 1000 / 60 / 60 / 24));
                // Math.abs()是絕對值意思沒有負數
                //------------------剩餘時間----------------------------------------

                //-------------------限60字功能;----------------------------------------
                // 判斷是否為空置串
                if (new_filter_Array[i].tour_content == null) {
                    new_filter_Array[i].tour_content = "";
                }
                var tour_content_word60 = new_filter_Array[i].tour_content.substr(0, 60) + (new_filter_Array[i].tour_content.length > 60 ? "..." : "")
                //-------------------限60字功能;-----------------------------------
                //-------------------處理照片;-----------------------------------
                var mem_img = new_filter_Array[i].mem_img;
                if (mem_img == null) {
                    mem_img = "img/adventrue/個人頭像_無_工作區域 1.png";
                } else {
                    mem_img = `${new_filter_Array[i].mem_img}`
                }
                //-------------------處理照片;-----------------------------------
                //-------------------人數處理;-----------------------------------
                var number_of_participants = new_filter_Array[i].number_of_participants;
                if (number_of_participants == null) {
                    number_of_participants = 0;
                }
                //-------------------人數處理;-----------------------------------
                //-------------------人名處理;-----------------------------------
                var mem_name = new_filter_Array[i].mem_name;
                if (mem_name == null) {
                    mem_name = "猛鬼愛好者-香香";
                }
                //-------------------人名處理;-----------------------------------
                //-------------------切割時間;-----------------------------------
                var tour_datetime = new_filter_Array[i].tour_datetime;
                tour_datetime = tour_datetime.substr(0, 10);

                var tour_settime = new_filter_Array[i].tour_settime;
                tour_settime = tour_datetime.substr(0, 10);
                //-------------------切割時間;-----------------------------------
                //-------------------總費用;-----------------------------------
                if (new_filter_Array[i].spot_budget == null) {
                    new_filter_Array[i].spot_budget = 0;
                } else if (new_filter_Array[i].food_budget == null) {
                    new_filter_Array[i].food_budget = 0;
                } else if (new_filter_Array[i].temple_budget == null) {
                    new_filter_Array[i].temple_budget = 0;
                }
                total = parseInt(new_filter_Array[i].spot_budget) + parseInt(new_filter_Array[i].food_budget) + parseInt(new_filter_Array[i].temple_budget);

                //-------------------切割時間;-----------------------------------
                //-------------------判斷null直;-----------------------------------
                var spot_name = new_filter_Array[i].spot_name;
                var food_name = new_filter_Array[i].food_name;
                var temple_name = new_filter_Array[i].temple_name;
                if (spot_name == null) {
                    spot_name = "";
                }
                if (food_name == null) {
                    food_name = "";
                }
                if (temple_name == null) {
                    temple_name = "";
                }
                //-------------------判斷null直;-----------------------------------



                //  ${new_filter_Array[i].tour_title} 等資料庫補上

                html += `<div class="item" >  
               <div class="pic">
                <img src="./img/tour/${new_filter_Array[i].tour_image}" alt="">
                </div>
                <div class="txt">
                  <div class="txt_header">
                  <a href="StartGroup.php?tour_no=${new_filter_Array[i].tour_no}&spot_no=${new_filter_Array[i].spot_no}">
                   <h1>跌跌撞撞鬼怪之旅</h1>
                  
                   </a>
                   <div class="settime_tourchat">
                   <span class="tour_chat">點擊次數:${new_filter_Array[i].tour_chat}次  ${tour_settime}發起</span>
                              
                  </div>
                 </div>
                    <div class="location1">
                        <span class="locationitem">${spot_name}</span>
                        <span class="locationitem">${food_name}</span>
                        <span class="locationitem">${temple_name}</span>
                    </div>
                    <p>
                    在夏天的夜裡，三五好友聚在一起，總是會說些妖怪的故事，討論靈異照片或靈異現象和怪談故事。不知道你是不是會?
                   <a href="StartGroup.php?tour_no=${new_filter_Array[i].tour_no}&spot_no=${new_filter_Array[i].spot_no}" class="tour_chat" >詳全文</a>
                   </p>
                   <div class="time_total">
                            <span><i class="far fa-calendar-alt"></i>出團時間:${tour_datetime}</span>
                            <span><i class="fas fa-dollar-sign"></i>總費用:<span class="all_total">${total}</span>元</span>
                            </div>
                     <div class="people_head">
                     </div>
   
             

    <div class="progress">
        <div class="progress-bar">
            <span>
                <div class="progress_image">
                    <img src="img/adventrue/個人頭像_無_工作區域 1.png" alt="">
                </div>
                <p>目前<span class="add_mem_number">${number_of_participants}<span>/${new_filter_Array[i].max_of_participants}人</p>
            </span>
        </div>
    </div>
</div>
<!-- txt -->
<div class="peple_number">
    <div class="main_people" mem_no="${new_filter_Array[i].mem_no}">
        <div class="main_people_img" >
            <img src="${ mem_img}" alt="">
        </div>
        <div class="main_people_name">${mem_name}</div>
    </div>
    <a  class="btn_fill_red" name="tour_endtime_data">立即加入></a>
    
    <div class="last_time">剩餘時間:${iDays[i]}天</div>
</div>
</div>`




            }
            //-----------------------------------主要重複性揪團卡片工作區域---------------------------
            item_all.innerHTML = ` <div class="no_resule"><i class="far fa-lightbulb"></i>
            無任何篩選結果</div>${html}`;


            //-------------------------------------------onclick 後記錄點擊數----------------------------------------
            for (let i = 0; i < new_filter_Array.length; i++) {
                var tour_chat = $elements(".tour_chat");
                //-------------------抓點擊回來;-----------------------------------
                // tour_chat_value = new_filter_Array[i].tour_chat;
                //-------------------抓點擊回來;-----------------------------------

                tour_chat[i].onclick = ajax_chat;
                function ajax_chat() {
                    for (let i = 0; i < new_filter_Array.length; i++) {
                        tour_chat_value = parseInt(new_filter_Array[i].tour_chat) + 1;
                        var xhr5 = new XMLHttpRequest();
                        //聯繫伺服器物件
                        xhr5.open('post', "./php/tour_chat.php", true);
                        xhr5.onload = function () {
                        }
                        console.log("tour_no=" + new_filter_Array[i].tour_no + "&tour_chat=" + tour_chat_value)
                        xhr5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xhr5.send("tour_no=" + new_filter_Array[i].tour_no + "&tour_chat=" + tour_chat_value);
                    }
                }

            }
            //ajax_chat
            //-------------------------------------------onclick 後記錄點擊數----------------------------------------




            //-----------------------------------如果沒有資料顯示 目前沒有資料---------------------------
            var item = $elements(".item")
            var no_resule = $element(".no_resule")
            if (item.length == 0) {
                no_resule.style.display = "block"
            } else {
                no_resule.style.display = "none";
            }
            //-----------------------------------如果沒有資料顯示 目前沒有資料---------------------------

            var locationitem = $elements(".locationitem");
            for (let i = 0; i < locationitem.length; i++) {
                if (locationitem[i].innerText == "") {
                    locationitem[i].style.display = "none";

                }
            }
            //------------------*-----------------讓null直消失---------------------------
            //-------------------------------------------讓前4個顯示------------------------------
            //  for (let i = 0; i < 4; i++) {
            //     var item = $elements(".item");
            //     item[i].classList.add("normal_item");

            // };
            //-------------------------------------------讓前4個顯示------------------------------

            for (let i = 0; i < new_filter_Array.length; i++) {
                var tour_endtime1 = document.getElementsByName('tour_endtime_data');
                if (iDays[i] < 0) {
                    tour_endtime1 = document.getElementsByName('tour_endtime_data');
                    tour_endtime1[i].innerText = "已截止";
                    var last_time = $elements(".last_time");
                    last_time[i].style.display = "none";
                    tour_endtime1[i].onclick = function () {
                        return false;
                    }
                    // tour_endtime1[i].classList.remove("btn_fill_red");
                    // tour_endtime1[i].classList.add("tour_endtime");
                    // 這上面這個為啥不能執行css
                    tour_endtime1[i].style.background = "#2a2a2a";
                    tour_endtime1[i].style.cursor = "default";
                    // 能不能一次寫多個
                    //如果天數是負數前台按鈕要讓人家不能按
                } else if (new_filter_Array[i].number_of_participants >= new_filter_Array[i].max_of_participants) {
                    //滿人的話
                    // 判斷滿人情況
                    //再判斷如果是本人加入的滿人 呈現取消參加
                    // if (login_btn.innerText == "登出") {
                    //     tour_endtime1[i].innerText = "取消參加";
                    //     tour_endtime1[i].style.background = "rgb(253, 101, 0)";

                    // } 
                    //  if {
                    //     tour_endtime1[i].innerText = "已額滿";
                    //     var last_time = $elements(".last_time");
                    //     last_time[i].style.display = "none";
                    //     tour_endtime1[i].onclick = function () {
                    //         return false;
                    //     }
                    //     tour_endtime1[i].style.background = "#2a2a2a";
                    //     tour_endtime1[i].style.cursor = "default";
                    // }
                    //再判斷如果是本人加入的滿人 呈現取消參加
                }

                tour_endtime1[i].value = i;
                tour_endtime1[i].onclick = function () {
                    if (login_btn.innerText == "登出") {
                        if (this.innerText == "立即加入>") {
                            alert("你已成功加入!");
                            localStorage.setItem(`team${i}`, i);
                            localStorage.setItem(`tour${i}`, new_filter_Array[i].tour_no);
                            // 存進網頁伺服器站存

                            // ----------------------------------參加後記錄------------------------------------------
                            this.innerText = "取消參加";
                            tour_endtime1[i].style.background = "rgb(253, 101, 0)"
                            tour_add_people = parseInt(new_filter_Array[i].number_of_participants) + 1;
                            console.log(tour_add_people)
                            var xhr6 = new XMLHttpRequest();
                            //聯繫伺服器物件
                            xhr6.open('post', "./php/tour_add_people.php", true);
                            xhr6.onload = function () {
                                let add_people = this.responseText;
                                //-------------------------------------------點擊後進度bar功能----------------------------------------
                                for (let i = 0; i < new_filter_Array.length; i++) {
                                    var progress_bar = $elements(".progress-bar");
                                    var now_people = add_people;  //3
                                    var max_people = new_filter_Array[i].max_of_participants;  //10
                                    var rate = now_people / max_people * 100;
                                    progress_bar[i].style.width = `${rate}%`;
                                }
                                //-------------------------------------------點擊後進度bar功能----------------------------------------
                            }
                            xhr6.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                            console.log("tour_no=" + new_filter_Array[i].tour_no + "&number_of_participants=" + tour_add_people)
                            xhr6.send("tour_no=" + new_filter_Array[i].tour_no + "&number_of_participants=" + tour_add_people);
                            location.reload()
                            //加入後記錄
                        } else if (this.innerText == "取消參加") {

                            alert("確定要取消參加嗎?")
                            localStorage.removeItem(`team${i}`, i);
                            this.innerText = "立即加入>";
                            tour_endtime1[i].style.background = "#d11c00"
                            tour_add_people = parseInt(new_filter_Array[i].number_of_participants) - 1;
                            var xhr6 = new XMLHttpRequest();
                            //聯繫伺服器物件
                            xhr6.open('post', "./php/tour_add_people.php", true);
                            xhr6.onload = function () {
                                let add_people = this.responseText;
                                //-------------------------------------------點擊後進度bar功能----------------------------------------

                                var progress_bar = $elements(".progress-bar");
                                var now_people = add_people;  //3
                                var max_people = new_filter_Array[i].max_of_participants;  //10
                                var rate = now_people / max_people * 100;
                                progress_bar[i].style.width = `${rate}%`;
                                // var add_mem_number=$elements(".add_mem_number");
                                // add_mem_number.innerText=new_filter_Array[i].number_of_participants+1;

                                //-------------------------------------------點擊後進度bar功能----------------------------------------
                            }
                            xhr6.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                            console.log("tour_no=" + new_filter_Array[i].tour_no + "&number_of_participants=" + tour_add_people)
                            xhr6.send("tour_no=" + new_filter_Array[i].tour_no + "&number_of_participants=" + tour_add_people);
                            location.reload();
                        }



                        // ----------------------------------參加後記錄------------------------------------------
                    } else {
                        alert("請先登入會員!")
                        $element("#indexLogin").style.display = "block";
                        $element("#login_page1").style.display = "block";
                    }
                }
                str = localStorage.getItem(`team${i}`);
                // str=JSON.parse(str);
                if (tour_endtime1[i].value == str) {
                    tour_endtime1[i].innerText = "取消參加";
                    tour_endtime1[i].style.background = "rgb(253, 101, 0)"
                }







            };




            //-------------------------------------------剛lo近來進度條bar功能----------------------------------------
            for (let i = 0; i < new_filter_Array.length; i++) {
                var progress_bar = $elements(".progress-bar");
                var now_people = new_filter_Array[i].number_of_participants;  //3
                var max_people = new_filter_Array[i].max_of_participants;  //10
                var rate = now_people / max_people * 100;
                progress_bar[i].style.width = `${rate}%`;
            }
            //-------------------------------------------剛lo近進度bar功能----------------------------------------
            var main_people = document.getElementsByClassName('main_people');
            //點擊頭象
            var people_message_background = $element('.people_message_background');
            // 顯示背景
            tab_contents = $elements('.tab_content')
            for (let i = 0; i < new_filter_Array.length; i++) {
                main_people[i].onclick = function () {
                    mem_no_att = this.getAttribute("mem_no");
                    //這是我幫他標記的東東,
                    tab_heads = $elements('.tab_head li a');
                    for (let i = 0; i < tab_heads.length; i++) {
                        tab_heads[i].classList.remove('show_tab');
                    }
                    tab_heads[0].classList.add('show_tab');
                    tabChange()

                    people_message_background.style.display = 'block';
                    for (let i = 0; i < tab_heads.length; i++) {

                        //移除所有tab顯眼

                        tab_heads[i].onclick = function () {
                            for (let i = 0; i < tab_heads.length; i++) {
                                tab_heads[i].classList.remove('show_tab');
                            }
                            this.classList.add('show_tab');
                            //tab標籤顯眼
                            tabChange()
                        };
                    }

                };
            };
        };

        //-------------------------------------------叉叉按鈕----------------------------------------
        close('.people_message_shut_down', '.people_message_background')
        function close(out, hide_odject) {
            var out = document.querySelector(out)
            var filter_background = document.querySelector(hide_odject)
            out.onclick = function () {
                filter_background.style.display = 'none'
            }
        }
        //-------------------------------------------叉叉按鈕----------------------------------------
        function tabChange() {
            var xhr1 = new XMLHttpRequest();
            //聯繫伺服器物件
            xhr1.open('post', './php/adventrue_Ajax_2.php', true);
            xhr1.onload = function () {
                let data2 = this.responseText;
                let Array_data2 = JSON.parse(data2);
                var people_message = "";
                var people_message_name = $element('.people_message_name');
                people_message_name.innerText = Array_data2[0].mem_name;

                if (tab_heads[0].className == "show_tab") {
                    for (let i = 0; i < Array_data2.length; i++) {
                        //-------------------人數處理;-----------------------------------
                        var number_of_participart = Array_data2[i].number_of_participart;
                        if (number_of_participart == null) {
                            number_of_participart = 0;
                        }
                        //-------------------人數處理;-----------------------------------
                        //-------------------照片處理;-----------------------------------
                        let mem_img = Array_data2[0].mem_img;
                        if (mem_img == null) {
                            mem_img = "../img/adventrue/個人頭像_無_工作區域 1.png";
                        } else {
                            mem_img = `${Array_data2[0].mem_img}`
                        }
                        //-------------------照片處理;-----------------------------------
                        //------------------時間處理;-----------------------------------

                        let tour_datetime = Array_data2[i].tour_datetime;
                        tour_datetime = tour_datetime.substr(0, 10);

                        //-------------------時間處理;-----------------------------------

                        var people_message_img = $element('.people_message_img');
                        people_message_img.innerHTML = "<img src=" + mem_img + ">"
                        //    這有問題明天搞
                        var find_group = `<div class="show">
              <div class="tab_img"><img src="./img/tour/${Array_data2[i].tour_image}" alt="">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="-3 -3 30 30">
              <g class="fav-2 fav-btn">
                <path fill="#fff" fill-rule="nonzero" stroke="#7F7F7F" stroke-width="2" d="M10.371 19.7c.424.443.985.674 1.599.666a2.122 2.122 0 0 0 1.575-.67l6.853-7.133c1.982-2.073 1.982-5.453 0-7.528-1.957-2.047-5.112-2.047-7.074.006l-1.332 1.373-.717-.75-.604-.629c-1.957-2.047-5.112-2.047-7.068 0-1.983 2.075-1.983 5.453.002 7.53l6.766 7.135z"/>
              </g>
              </svg>
               </div>
              <h1>【${Array_data2[i].tour_title}】</h1>
               <span><i class="fas fa-map-marker-alt"></i>名雄鬼屋、砂鍋魚頭、嘉義孔廟</span>
              <div class="show_down">
                    <p>參加人數:${number_of_participart}人</p>
                    <p>${tour_datetime}出團</p>
               </div>
              </div>`;
                        people_message += find_group;
                    }
                } else {
                    for (let i = 0; i < Array_data2.length; i++) {
                        var find_group = `<div class="show">
               <div class="tab_img"><img src="http://i1.wp.com/inews.gtimg.com/newsapp_match/0/287578922/0" alt="">
               </div>
               <h1>【${Array_data2[i].tour_title}】</h1>
              <span><i class="fas fa-map-marker-alt"></i>名雄鬼屋、砂鍋魚頭、嘉義孔廟</span>
               <div class="show_down">
                  <p>參加人數:5人</p>
                   <p>2019-10-07出團</p>
                </div>
               </div>`;

                        people_message += find_group;
                    }
                }


                tab_contents[0].innerHTML = people_message;
            }
            xhr1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            xhr1.send("mem_no=" + mem_no_att);
        }
        // tabChange
    }
    // load
    xhr.send(null);
}
//ajax_take_odject




window.onload = ajax_take_odject;



