function $id(id){
    return document.getElementById(id);
    }

window.addEventListener('load', function(){
    let curIndex = 0;
    let spotDisplay = document.querySelector("#spotInfoWrap");
    let spell1 = document.querySelector("#spell1");
    let spell2 = document.querySelector("#spell2");
    let spell3 = document.querySelector("#spell3");

    spell1.style.opacity = 1;

    $id("leftScroll").onclick = function(){
        curIndex = curIndex + 1;
        spotDisplay.style.left = -470 * curIndex +"px";
        $id("rightScroll").disabled = false;
        if(curIndex == 2){
            $id("leftScroll").disabled = true;
            spell2.style.opacity = 0;
            spell3.style.opacity = 1;
        }else if( curIndex == 1 ){
            spell1.style.opacity = 0;
            spell2.style.opacity = 1;
        }
    }

    $id("rightScroll").onclick = function(){
        curIndex = curIndex - 1;
        spotDisplay.style.left = -470 * curIndex +"px";
        $id("leftScroll").disabled = false;
        if(curIndex == 0){
            $id("rightScroll").disabled = true;
            spell2.style.opacity = 0;
            spell1.style.opacity = 1;
        }else if(curIndex == 1){
            spell2.style.opacity = 1;
            spell3.style.opacity = 0;
        }
    }

    // $id("loc1").onmouseover = function(e){
    
    //     e.target.nextElementSibling.style.opacity = 1;
    //     console.log(e.target.nextElementSibling);
    // }

    // $id("loc1").onmouseout = function(e){
    //     e.target.nextElementSibling.style.opacity = 0;
    //     console.log(e.target.nextElementSibling);
    // }



    //點符咒右邊輪播滑動 現在寫不出來
    // $id("spell1").onclick = function(){
    //     spell1.style.opacity = 1;
    //     spell2.style.opacity = 0;
    //     spell3.style.opacity = 0;
    // }

    // $id("spell2").onclick = function(){
    //     spell1.style.opacity = 0;
    //     spell2.style.opacity = 1;
    //     spell3.style.opacity = 0;
    // }

    // $id("spell3").onclick = function(){
    //     spell1.style.opacity = 0;
    //     spell2.style.opacity = 0;
    //     spell3.style.opacity = 1;
    // }
});