function $id(id){
    return document.getElementById(id);
    }

window.addEventListener('load', function(){
    let curIndex = 0;
    let cardDisplay = document.querySelector("#cardDisplay");

    $id("leftScroll").onclick = function(){
        curIndex = curIndex + 1;
        cardDisplay.style.left = -300 * curIndex +"px";
        $id("rightScroll").disabled = false;
        if(curIndex == 3){
            $id("leftScroll").disabled = true;
        }
    }

    $id("rightScroll").onclick = function(){
        curIndex = curIndex - 1;
        cardDisplay.style.left = -300 * curIndex +"px";
        $id("leftScroll").disabled = false;
        if(curIndex == 0){
            $id("rightScroll").disabled = true;
        }
    }
});