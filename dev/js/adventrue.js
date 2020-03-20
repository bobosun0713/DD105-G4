$(document).ready(function () {
    // $(window).on("mousemove", function (e) {
    //     TweenMax.to("#mouse", 0.5, {
    //         top: e.pageY + 10 + "px",
    //         left: e.pageX + 10 + "px",
    //     })
    // })

    $(window).scroll(function () {
        /* Check the location of each desired element */
        $('.item').each(function (i) {
            //  each是幹嘛的?
            var bottom_of_object = $(this).offset().top + $(this).outerHeight()
            //頁面最頂到物件頂+物件高度
            var bottom_of_window = $(window).scrollTop() + $(window).height()
            //滾輪頂部跟你往下滾中間距離   + 視窗高度
            console.log($(window).height())
            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {
                $(this).animate(
                    {
                        opacity: '1',
                        bottom: '0px',
                    },
                    800
                )
            }
        })
    })
})
var infScroll = new InfiniteScroll('.item_all', {
    path: function () {
        // 頁面路徑

        if (this.loadCount < 2) {
            // 只讀取前兩頁資料
            var nextIndex = this.loadCount + 2 // 2
            return 'page' + nextIndex + '.html' // page2.html
            console.log(this.loadCount)
        }
    },
    append: '.item', // 把頁面顯示出來的方式,預設是false
    // responseType: 'text', // 設定頁面請求返回的響應型別 text時是json
    prefill: true, //預填充 ，加上後append屬性必須。
    // status: '.page-load-status',
    // hideNav: '.pagination',
    history: false, //更改瀏覽器歷史記錄和URL。
    scrollThreshold: 40, //設定滾動條與滾動區域之間的距離，預設是40
})
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
NumAutoPlusAnimation('add_number', {
    time: 3000,
    num: 213,
    regulator: 50,
})
// ----------------------------------------------------
function $element(element) {
    return document.querySelector(element)
}
function $elements(elements) {
    return document.querySelectorAll(elements)
}
// ---------------------燈箱類-------------------------

// 開啟篩選 放入要開啟的按鈕跟打開的元素
open_filter('.area', '.filter_background')
open_filter('.main_people_img', '.people_message_background')
function open_filter(click_object, open_object) {
    var click_object = $element(click_object)
    var open_object = $element(open_object)
    click_object.onclick = function () {
        open_object.style.display = 'block'
    }
}
// -------------------------------------------------------------
// 按掉叉叉組件(輸入叉叉元素跟關閉元素)
close('.shut_down', '.filter_background')
close('.people_message_shut_down', '.people_message_background')
function close(out, hide_odject) {
    var out = document.querySelector(out)
    var filter_background = document.querySelector(hide_odject)
    out.onclick = function () {
        filter_background.style.display = 'none'
    }
}
// -------------------------------------------------------------
tab_contents = $elements('.tab_content')
//顯示的大區域
var pmbs = $element('.people_message_background')
var body = document.getElementsByTagName('body')[0]
tab_heads = $elements('.tab_head li a')
//tab的標題

for (var i = 0; i < tab_heads.length; i++) {
    tab_heads[i].onclick = tabChange
    tab_contents[i].className = 'hide_tab_content'
    tab_heads[i].className = ''
}
tab_contents[0].className = 'tab_content'
tab_heads[0].className = 'show_tab'
function tabChange() {
    for (let i = 0; i < tab_heads.length; i++) {
        if (tab_heads[i] === this) {
            tab_heads[i].className = 'show_tab'
            tab_contents[i].className = 'tab_content'
        } else {
            // tab_heads[i].className = '';
            tab_contents[i].className = 'hide_tab_content '
            tab_heads[i].className = ''
        }
    }
}
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
    ]
    for (let j = 0; j < 15; j++) {
        var filter_img = document.createElement('div')
        filter_img.setAttribute('class', 'filter_img')
        span = document.createElement('span')
        var img = document.createElement('img')
        img.src = 'https://www.funtime.com.tw/blog/wp-content/uploads/2017/07/38.jpg'
        filter_img.appendChild(span)
        filter_img.appendChild(img)
        filter_all_img.appendChild(filter_img)
        //裝東西的爸爸
        span.innerText = area[j]
    }
    //我動態新增完html來用要另外抓他嗎?
    filter_imgs = $elements('.filter_img')
    filter_spans = $elements('.filter_img span')
    //上面這行是抓到動態新增後的15個圖片
    for (let m = 0; m < filter_imgs.length; m++) {
        filter_imgs[m].onclick = choose_area_name
        //點擊要篩選的圖片發生的事情
    }
    for (let i = 0; i < filter_areas.length; i++) {
        filter_areas[i].onclick = choose_area
        //點擊篩選的北中南發生的事情
    }
}
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
function choose_area_name(e) {
    this.style.filter = 'grayscale(0)'
    filter_spans[0].style.color = 'white'
}
window.onload = doFirst

// ----------左邊篩選欄位--------------------------+--------------------------
function clickfilter() {
    var lab1s = $elements(".list_check1")
    console.log(lab1s);
    for (var i = 0; i < lab1s.length; i++) {
        lab1s[i].onclick = function () {

        }
    }
}
clickfilter();


// -------AjaxAjaxAjax--------------------------+--------------------------
function ajax_take_odject() {
    var xhr = new XMLHttpRequest();
    //聯繫伺服器物件
    xhr.open('get', 'php/adventrue_Ajax.php');
    xhr.onload = function () {
        var data = this.responseText;
        Array_data = JSON.parse(data);
        var item_all = $element('.item_all');
        let html = ""

        for (let i = 0; i <20; i++) {
            html += `<div class="item">
<div class="pic">
    <img src="http://i1.wp.com/inews.gtimg.com/newsapp_match/0/287578922/0" alt="">
</div>
<div class="txt">
    <div class="txt_header">
        <h1>${Array_data[0].tour_title}</h1>
    </div>
    <span><i class="fas fa-map-marker-alt"></i>名雄鬼屋、${Array_data[0].temple_tool}、嘉義孔廟</span>
    <span><i class="far fa-calendar-alt"></i>${Array_data[0].tour_datetime}</span>

    <div class="people_head">


    </div>
    <p>${Array_data[0].tour_content} ...
        <a href="StartGroup.html">詳全文</a>
    </p>

    <div class="progress">
        <div class="progress-bar">
            <span>
                <div class="progress_image">
                    <img src="img/adventrue/個人頭像_無_工作區域 1.png" alt="">
                </div>
                <p>目前2/${Array_data[0].max_of_participants}人</p>
            </span>
        </div>
    </div>
</div>
<!-- txt -->
<div class="peple_number">
    <div class="main_people">
        <div class="main_people_img">
            <img src="img/adventrue/揪團團組.png" alt="">
        </div>
        <div class="main_people_name">揪團者by富江我老婆</div>
    </div>

    <a href="StartGroup.html" class="btn_fill_red">立即加入></a>
    <div class="last_time">剩餘時間:5天</div>
</div>
</div>`
        }
        item_all.innerHTML = html;











    }
    xhr.send(null);




}







ajax_take_odject();

