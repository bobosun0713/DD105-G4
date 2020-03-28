// 加入收藏、輪播、投票功能ajax檔都寫在這裡面
function $id(id){
    return document.getElementById(id);
    }

//投票給該景點
function voteThisSpot(){

let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        if( xhr.status == 200){
            $id("voteThisSpot").value = xhr.responseText;
            $id("voteThisSpot").disabled = true;
            let vote_count = document.querySelector('.vote_count');
            vote_count.innerText = parseInt(vote_count.innerText) +1;
        }else{
            alert(xhr.status);
    }
  }
  //要以html/php位置為主
  let url = "./php/spot_vote.php";
  xhr.open("post", url, true);
  xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
  let data_info = "spot_no=" + document.getElementById("voteSpotNo").value;

  xhr.send(data_info);
}
//投票給該景點結束


//留言給該景點
function sendSpotMsg(){

    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        if(xhr.status == 200){
            alert(xhr.responseText);
            console.log(data_info)
        }else{
            alert(xhr.status);
        }
    }
    
    let url = "./php/spot_write_msg.php";
    xhr.open("post", url, true);
    
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    let data_info = "spot_no=" + document.getElementById("SpotMsgNo").value+ "&spot_msg_content=" + document.getElementById("spotMsg").value;
    xhr.send(data_info);
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

    // 投票改該景點功能
    console.log($id("voteThisSpot").value);
    $id("voteThisSpot").addEventListener('click', voteThisSpot, false);
    $id("sendSpotMsg").addEventListener('click', sendSpotMsg, false);
},false);