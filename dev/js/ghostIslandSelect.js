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
console.log(spotCard.length);

function doFirst() {
    MapNorth.style.opacity = 1;
    MapMid.style.opacity = 1;
    MapSouth.style.opacity = 1;

    allAreaBtn.onclick = allAreaShow;
    northAreaBtn.onclick = northAreaShow;
    midAreaBtn.onclick = midAreaShow;
    southAreaBtn.onclick = southAreaShow;

    //抓取是否是rwd尺寸    
    if( windowWidth <= 768 ){
        let spotCardWidth = spotCard[0].clientWidth;
        let spotCardNum = spotCard.length;
        cardContainWidth.style.minWidth = (spotCardWidth + 30) * spotCardNum + "px";
        console.log(cardContainWidth.style.minWidth);
    }
}


//地圖地點定位
function allAreaShow() {
    if (allAreaBtn.checked == true) {

        northAreaBtn.checked = false;
        midAreaBtn.checked = false;
        southAreaBtn.checked = false;
        MapNorth.style.opacity = 1;
        MapMid.style.opacity = 1;
        MapSouth.style.opacity = 1;
    } else {
        MapNorth.style.opacity = 0;
        MapMid.style.opacity = 0;
        MapSouth.style.opacity = 0;
    }
}

function northAreaShow() {
    if (northAreaBtn.checked == true && allAreaBtn.checked == true) {
        allAreaBtn.checked = false;
        MapNorth.style.opacity = 1;
        MapMid.style.opacity = 0;
        MapSouth.style.opacity = 0;
    }else if(northAreaBtn.checked == true && allAreaBtn.checked == false){
        MapNorth.style.opacity = 1;
    } else {
        MapNorth.style.opacity = 0;
    }
}

function midAreaShow() {
    if (midAreaBtn.checked == true && allAreaBtn.checked == true) {
        allAreaBtn.checked = false;
        MapMid.style.opacity = 1;
        MapSouth.style.opacity = 0;
        MapNorth.style.opacity = 0;
    }else if(midAreaBtn.checked == true && allAreaBtn.checked == false){
        MapMid.style.opacity = 1;
    } else {
        MapMid.style.opacity = 0;
    }
}

function southAreaShow() {
    if (southAreaBtn.checked == true && allAreaBtn.checked == true) {
        allAreaBtn.checked = false;
        MapMid.style.opacity = 0;
        MapSouth.style.opacity = 1;
        MapNorth.style.opacity = 0;
    }else if(southAreaBtn.checked == true && allAreaBtn.checked == false){
        MapSouth.style.opacity = 1;
    } else {
        MapSouth.style.opacity = 0;
    }
}


window.addEventListener('load', doFirst);