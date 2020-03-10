let allAreaBtn = document.getElementById('allArea');
let northAreaBtn = document.getElementById('northArea');
let midAreaBtn = document.getElementById('midArea');
let southAreaBtn = document.getElementById('southArea');

let MapNorth = document.getElementById('twMap01');
let MapMid = document.getElementById('twMap02');
let MapSouth = document.getElementById('twMap03');

let windowWidth = window.innerWidth;
let cardContainWidth = document.querySelector('.cardContain');
let spotCard = document.querySelectorAll('.spotCard');
let northCard = document.querySelectorAll('.northCard');
let midCard = document.querySelectorAll('.midCard');
let southCard = document.querySelectorAll('.southCard');
// console.log(spotCard.length);
// console.log(spotCard[0].style.display);

function doFirst() {
    MapNorth.style.opacity = 1;
    MapMid.style.opacity = 1;
    MapSouth.style.opacity = 1;

    allAreaBtn.onclick = allAreaShow;
    northAreaBtn.onclick = northAreaShow;
    midAreaBtn.onclick = midAreaShow;
    southAreaBtn.onclick = southAreaShow;

    //抓取是否是rwd尺寸  
    if (windowWidth <= 768) {
        let spotCardWidth = spotCard[0].clientWidth;
        let spotCardNum = spotCard.length;
        cardContainWidth.style.minWidth = (spotCardWidth + 30) * spotCardNum + "px";
        // console.log(cardContainWidth.style.minWidth);
    }
}


//地圖地點定位
function allAreaShow() {
    if (allAreaBtn.checked == true) {
        //符咒顯示與否
        northAreaBtn.checked = true;
        midAreaBtn.checked = true;
        southAreaBtn.checked = true;
        MapNorth.style.opacity = 1;
        MapMid.style.opacity = 1;
        MapSouth.style.opacity = 1;

        //卡片的顯示與否
        for (let i = 0; i < spotCard.length; i++) {
            spotCard[i].style.display = "block";
        }
        carasoulLengthChange();

    } else {
        MapNorth.style.opacity = 0;
        MapMid.style.opacity = 0;
        MapSouth.style.opacity = 0;
        northAreaBtn.checked = false;
        midAreaBtn.checked = false;
        southAreaBtn.checked = false;

        //卡片的顯示與否
        for (let i = 0; i < spotCard.length; i++) {
            spotCard[i].style.display = "none";
        }
        carasoulLengthChange();

    }
}

function northAreaShow() {
    if (northAreaBtn.checked == true && allAreaBtn.checked == true) {
        allAreaBtn.checked = false;
        MapNorth.style.opacity = 1;
        MapMid.style.opacity = 0;
        MapSouth.style.opacity = 0;

        for (let i = 0; i < northCard.length; i++) {
            northCard[i].style.display = "block";
        }
        carasoulLengthChange();
    } else if (northAreaBtn.checked == true && allAreaBtn.checked == false) {
        MapNorth.style.opacity = 1;

        for (let i = 0; i < northCard.length; i++) {
            northCard[i].style.display = "block";
        }
        carasoulLengthChange();
    } else {
        MapNorth.style.opacity = 0;

        for (let i = 0; i < northCard.length; i++) {
            northCard[i].style.display = "none";
        }
        carasoulLengthChange();
    }
}

function midAreaShow() {
    if (midAreaBtn.checked == true && allAreaBtn.checked == true) {
        allAreaBtn.checked = false;
        MapMid.style.opacity = 1;
        MapSouth.style.opacity = 0;
        MapNorth.style.opacity = 0;

        for (let i = 0; i < midCard.length; i++) {
            midCard[i].style.display = "block";
        }
        carasoulLengthChange();
    } else if (midAreaBtn.checked == true && allAreaBtn.checked == false) {
        MapMid.style.opacity = 1;

        for (let i = 0; i < midCard.length; i++) {
            midCard[i].style.display = "block";
        }
        carasoulLengthChange();
    } else {
        MapMid.style.opacity = 0;

        for (let i = 0; i < midCard.length; i++) {
            midCard[i].style.display = "none";
        }
        carasoulLengthChange();
    }
}

function southAreaShow() {
    if (southAreaBtn.checked == true && allAreaBtn.checked == true) {
        allAreaBtn.checked = false;
        MapMid.style.opacity = 0;
        MapSouth.style.opacity = 1;
        MapNorth.style.opacity = 0;

        for (let i = 0; i < southCard.length; i++) {
            southCard[i].style.display = "block";
        }
        carasoulLengthChange();
    } else if (southAreaBtn.checked == true && allAreaBtn.checked == false) {
        MapSouth.style.opacity = 1;

        for (let i = 0; i < southCard.length; i++) {
            southCard[i].style.display = "block";
        }
        carasoulLengthChange();
    } else {
        MapSouth.style.opacity = 0;

        for (let i = 0; i < southCard.length; i++) {
            southCard[i].style.display = "none";
        }
        carasoulLengthChange();
    }
}

function carasoulLengthChange() {
    if (windowWidth <= 768) {
        let spotCardWidth;

        // 計算display block的spotCard有幾個
        let spotCardNum = 0;
        for (let n = 0; n < spotCard.length; n++) {

            // console.log(spotCard[n].style.display);
            if (spotCard[n].style.display == "block") {
                spotCardNum = spotCardNum + 1;
                spotCardWidth = spotCard[n].clientWidth;
            }
        }
        // console.log(spotCardNum);
        //計算spotCard寬度
        cardContainWidth.style.minWidth = (spotCardWidth + 30) * spotCardNum + "px";
        console.log(cardContainWidth.style.minWidth);
    }
}


window.addEventListener('load', doFirst);