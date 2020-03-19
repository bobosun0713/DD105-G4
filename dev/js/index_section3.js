
function $element(element) {
    return document.querySelector(element)
};

function $elements(elements) {
    return document.querySelectorAll(elements)
};


var index_se3_tab;
var adventrue_right_itemall = $element('.adventrue_right_itemall');
function doFirst1() {
    index_se3_tab = $elements('.adventrue_left a');
    for (var i = 0; i < index_se3_tab.length; i++) {
        index_se3_tab[i].onclick = choose;
    }

};

function choose() {
    if (this == index_se3_tab[0]) {
        
    } else if (this == index_se3_tab[1]) {
        alert('1');

    } else if (this == index_se3_tab[2]) {
        alert('2');
    }
    adventrue_right_itemall.innerHTML = "1";
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



function  drop_down(){
    var drop_title=$elements(".adventrue_left a")[0];
    drop_title.onclick=function(){
        alert('aa');
    }
}








drop_down();
doFirst1();