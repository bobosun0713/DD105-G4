
$(document).ready(function () {
    $(window).on("mousemove", function (e) {
        TweenMax.to("#mouse", 0.5, {
            top: e.pageY + 10 + "px",
            left: e.pageX + 10 + "px",

        })
    })



    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.item').each(function (i) {
        //  each是幹嘛的?
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            //頁面最頂到物件頂+物件高度
            var bottom_of_window = $(window).scrollTop() + $(window).height();
          //滾輪頂部跟你往下滾中間距離   + 視窗高度
          console.log($(window).height());
            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({
                    opacity: '1',
                    bottom: "0px"
                }, 800);

            }

        });

    });
})



// var infScroll = new infinitescroll('.item_all', {
//     path: function () {
//         var maxPage = 10; //最大頁數
//         if (this.loadCount < maxPage) {
//             var pageNumber = this.loadCount + 1;
//             return 'page' + pageNumber;
//         }
//     },

// })

// var infScroll = new InfiniteScroll( ".item_all", {
//     path: function() {
//         // 頁面路徑
//         if ( this.loadCount < 1 ) {
//             return "item.html"; // 讀取此頁面
//         }
//     },
//     append: false, // 匯入物件類別
//     status: ".scroller-status" // 捲軸狀態類別
// })

var infScroll = new InfiniteScroll(".item_all", {
    path: function () {
        // 頁面路徑
      
        if (this.loadCount <1) {
            
            // 只讀取前兩頁資料
            var nextIndex = this.loadCount +2 // 2
            return "page" + nextIndex + ".html"; // page2.html
            console.log(this.loadCount)
        }
      
    },
    append: '.item', // 把頁面顯示出來的方式,預設是false
    // responseType: 'text', // 設定頁面請求返回的響應型別 text時是json
    prefill: true, //預填充 ，加上後append屬性必須。
    // status: '.page-load-status',
    // hideNav: '.pagination',
    history: false, //更改瀏覽器歷史記錄和URL。
    scrollThreshold: 40//設定滾動條與滾動區域之間的距離，預設是40
})










/* 按下GoTop按鈕時的事件 */
$('.go_top').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
    return false;
});

/* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.go_top').fadeIn();
    } else {
        $('.go_top').fadeOut();
    }
});





$(".main_people_img").click(function () {
    tab_contents = document.querySelectorAll(".tab_content");
    //顯示的大區域
    var pmbs = document.querySelector(".people_message_background");
    var body = document.getElementsByTagName("body")[0];
    tab_heads = document.querySelectorAll(".tab_head li a");
    //tab的標題
    pmbs.style.display = "flex";
    body.style.overflow = "hidden";
    for (var i = 0; i < tab_heads.length; i++) {
        tab_heads[i].onclick = tabChange;
        tab_contents[i].className = "";
        tab_heads[i].className = '';
    }
    tab_contents[0].className = "tab_content"
    tab_heads[0].className = 'show_tab';
})

function tabChange() {
    console.log(tab_heads);
    for (let i = 0; i < tab_heads.length; i++) {
        if (tab_heads[i] === this) {
            tab_heads[i].className = 'show_tab';
            tab_contents[i].className = 'tab_content';



        } else {
            // tab_heads[i].className = '';
            tab_contents[i].className = 'hide_tab_content ';
            tab_heads[i].className = '';
        }
    }
}

//  var tab_heads = document.querySelectorAll('tab-head')[0].getElementsByTagName('a'),
//  tab_contents= document.querySelectorAll('tab_content')[0].getElementsByTagName('div');
//     (function changeTab(tab) {
//         for (var i = 0, len = tabs.length; i < len; i) {
//             tabs[i].onmouseover = showTab;
//         }
//     })();
//     function showTab() {
//         for (var i = 0, len = tabs.length; i < len; i) {
//             if (tabs[i] === this) {
//                 tabs[i].className = 'selected';
//                 contents[i].className = 'show';
//             } else {
//                 tabs[i].className = '';
//                 contents[i].className = '';
//             }
//         }
//     }








// 數字增加
//数字自增到某一值动画参数（目标元素,自定义配置）
function NumAutoPlusAnimation(targetEle, options) {

    /*可以自己改造下传入的参数，按照自己的需求和喜好封装该函数*/
    //不传配置就把它绑定在相应html元素的data-xxxx属性上吧
    options = options || {};

    var $this = document.getElementById(targetEle),
        time = options.time || $this.data('time'), //总时间--毫秒为单位
        finalNum = options.num || $this.data('value'), //要显示的真实数值
        regulator = options.regulator || 100, //调速器，改变regulator的数值可以调节数字改变的速度

        step = finalNum / (time / regulator),/*每30ms增加的数值--*/
        count = 0, //计数器
        initial = 0;

    var timer = setInterval(function () {

        count = count + step;

        if (count >= finalNum) {
            clearInterval(timer);
            count = finalNum;
        }
        //t未发生改变的话就直接返回
        //避免调用text函数，提高DOM性能
        var t = Math.floor(count);
        if (t == initial) return;

        initial = t;

        $this.innerHTML = initial;
    }, 30);
}

NumAutoPlusAnimation("add_number", {
    time: 3000,
    num: 213,
    regulator: 50
})
