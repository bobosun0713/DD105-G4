function $id(id) {
    return document.getElementById(id)
}

function load_top3_card_info() {
    // alert("AAAAA");
    let xhr = new XMLHttpRequest();
    
    xhr.onload = function () {
        if (xhr.status == 200) {
            // alert('aaaaa');
            show_top3_info(xhr.responseText);
        } else {
            alert(xhr.status);
        }
    }

    let url = "./php/index_top3_spot.php";
    xhr.open("get", url, true);
    xhr.send(null);
}


function show_top3_info(jsonStr) {

    let top_3_info = JSON.parse(jsonStr);
    // console.log(top_3_info)
    let final_html;
    
    for( let i = 0; i<3; i++){

        let mem_img;
        if( top_3_info.top_3_msg_info[i]['mem_img'] != null){
            mem_img = top_3_info.top_3_msg_info[i]['mem_img'];
        }else{
            mem_img = "./img/icon/default_header.svg";
        }

        let html = `
                    <div class="spotInfo">
                        <div class="imgZone">
                            <a href="./ghostSpot.php?spot_no=${top_3_info.top_3_info[i]['spot_no']}&order_no=${i+1}">
                                <img src="${top_3_info.top_3_info[i]['spot_image_card']}" />

                                <div class="moreInfo">
                                    <div class="moreInfoContent">
                                        <img src="./img/index/top1Img_2.png" />
                                        <div class="moreInfoTxt">
                                            <h2>【${top_3_info.top_3_info[i]['spot_name']}】</h2>
                                            <p>膽量指數：<span>${top_3_info.top_3_info[i]['spot_scary_rate']}</span>/10</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="txtZone">
                            <div class="locInfo">
                                <img src="./img/icon/location.png" />
                                <p>
                                    靈異地址：${top_3_info.top_3_info[i]['spot_address']}
                                </p>
                            </div>

                            <div class="spotContent">
                                <img src="./img/icon/report.svg" />
                                <p>
                                    景點簡介：<br />
                                    ${top_3_info.top_3_info[i]['spot_intro']}
                                </p>
                            </div>

                            <div class="msgInfo">
                                <div class="msgTitle">
                                    <img src="./img/icon/msgindex.png" />
                                    <p>
                                        熱門評論：
                                    </p>
                                </div>

                                <div class="msgNew">
                                    <img src="${mem_img}" />

                                    <div class="msgContent">
                                        <p class="personalInform">
                                            <span class="name">${top_3_info.top_3_msg_info[i]['mem_name']}</span>
                                            <span class="time">${top_3_info.top_3_msg_info[i]['msg_datetime']}</span>
                                        </p>
                                        <p class="msg">
                                            ${top_3_info.top_3_msg_info[i]['spot_msg_content']}
                                        </p>
                                        <p class="triangle"></p>
                                    </div>
                                </div>
                            </div>
                            <a href="./ghostSpot.php?spot_no=${top_3_info.top_3_info[i]['spot_no']}&order_no=${i+1}">
                                <button class="btn-outline">
                                    查看景點詳情
                                </button>
                            </a>
                            
                        </div>
                    </div>`;
        
        // console.log(html);
        final_html = final_html + html;
    }

    $id("spotInfoWrap").innerHTML = final_html;
}

window.addEventListener('load', function () {

    //============================ ajax撈首頁section2資料
    load_top3_card_info();


    let curIndex = 0
    let spotInfoZone = document.querySelector('.spotInfoZone')
    let spotDisplay = document.querySelector('#spotInfoWrap')
    let spotInfo = document.querySelectorAll('.spotInfo')
    let spell1 = document.querySelector('#spell1')
    let spell2 = document.querySelector('#spell2')
    let spell3 = document.querySelector('#spell3')


    if (window.innerWidth <= 768) {
        spotDisplay.style.minWidth = (spotInfo.clientWidth) * 3;
        console.log(spotInfoZone.clientWidth);
    }

    spell1.style.opacity = 1

    //點擊輪播左右滑動，符咒消失出現
    $id('leftScroll').onclick = function () {
        curIndex = curIndex + 1
        spotDisplay.style.left = -410 * curIndex + 'px'
        $id('rightScroll').disabled = false
        if (curIndex == 2) {
            $id('leftScroll').disabled = true
            spell2.style.opacity = 0
            spell3.style.opacity = 1
        } else if (curIndex == 1) {
            spell1.style.opacity = 0
            spell2.style.opacity = 1
        }
    }

    $id('rightScroll').onclick = function () {
        curIndex = curIndex - 1
        spotDisplay.style.left = -410 * curIndex + 'px'
        $id('leftScroll').disabled = false
        if (curIndex == 0) {
            $id('rightScroll').disabled = true
            spell2.style.opacity = 0
            spell1.style.opacity = 1
        } else if (curIndex == 1) {
            spell2.style.opacity = 1
            spell3.style.opacity = 0
        }
    }

    //mouse（滑鼠移動到某地點符咒滑出）
    let location = this.document.querySelectorAll('.location');
    // console.log(location.length);
    for (let i = 0; i < location.length; i++) {

        location[i].onmouseover = function (e) {
            e.target.nextElementSibling.style.opacity = 1;
        }

        location[i].onmouseout = function (e) {
            e.target.nextElementSibling.style.opacity = 0;
        }
    }




})
