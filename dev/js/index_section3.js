function $element(element) {
    return document.querySelector(element)
};
function $elements(elements) {
    return document.querySelectorAll(elements)
};

var index_se3_tab;
var adventrue_right_itemall = $element('.adventrue_right_itemall');
function doFirst1() {
    window.onresize = function () {
        if (document.body.offsetWidth >= 768) {
            dorp_down_menu.style.display = "block";
        }
    }
    index_se3_tab = $elements('.adventrue_left a');
    for (var i = 0; i < index_se3_tab.length; i++) {
        if (document.body.offsetWidth <= 768) {
            index_se3_tab[i].classList.remove("tab_display");
        }
        // index_se3_tab[i].onclick = choose;

        index_se3_tab[i].addEventListener('click', choose, false);
       
    }
};

function choose() {
    for (var i = 0; i < index_se3_tab.length; i++) {
        index_se3_tab[i].classList.remove("tab_display");
    }
    //拔掉所有樣式

    this.classList.add("tab_display");
    if (document.body.offsetWidth <= 768) {
        dorp_down_menu.style.display = "none";
        dorp_down_title.innerHTML = this.innerHTML;
    }
    //再新增所有樣式

    if (this == index_se3_tab[0]) {
        
    } else if (this == index_se3_tab[1]) {
        // alert('1');
    } else if (this == index_se3_tab[2]) {
        // alert('2');
    }


    adventrue_right_itemall.innerHTML="";
    for (let i = 0; i <= 3; i++) {
        var adventrue_right_item = document.createElement('div');
        adventrue_right_item.setAttribute('class', 'adventrue_right_item');
        adventrue_right_itemall.appendChild(adventrue_right_item);

        var adv_r_item_img = document.createElement('div');
        adv_r_item_img.setAttribute('class', 'adv_r_item_img');

        var adv_r_item_txt = document.createElement('div');
        adv_r_item_txt.setAttribute('class', 'adv_r_item_txt');

        adventrue_right_item.appendChild(adv_r_item_txt);
        adventrue_right_item.insertBefore(adv_r_item_img, adv_r_item_txt);

        var adv_r_item_img_inside = document.createElement('img');
        adv_r_item_img_inside.src = "img/index/top1Img_1.png";
        adv_r_item_img.appendChild(adv_r_item_img_inside);

        var adv_r_item_txt_h1 = document.createElement('h1');
        var adv_r_item_txt_p = document.createElement('p');
        var adv_r_item_txt_ul = document.createElement('ul');
        var adv_r_item_txt_li = document.createElement('li');
        for (let i = 0; i <= 3; i++) {
            let Store = [adv_r_item_txt_h1, adv_r_item_txt_p, adv_r_item_txt_ul, adv_r_item_txt_li];
            adv_r_item_txt.appendChild(Store[i]);
        };
        adv_r_item_txt_h1.innerHTML = "【台南廢棄醫院之旅】";
        adv_r_item_txt_p.innerHTML = `真的快嚇死我了！！！大家都知道前幾年
    有個女教師在新埔站廁所上吊的新聞嗎？
    聽說從那之後捷運站女廁常常會發生突然
    被拍肩的.....`;
        for (let j = 0; j < 3; j++) {
            adv_r_item_txt_ul.appendChild(adv_r_item_txt_li);
            adv_r_item_txt_ul.appendChild(adv_r_item_txt_li);
            adv_r_item_txt_ul.appendChild(adv_r_item_txt_li);
        }
    }

}


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








drop_down();
doFirst1();