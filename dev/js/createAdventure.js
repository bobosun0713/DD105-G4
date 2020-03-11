window.addEventListener("load", function () {
  // 挑選薯條
  var addbtn = document.getElementsByClassName("addbtn");
  var spotlightbox = document.querySelector(".spotlightbox");
  for (let m = 0; m < addbtn.length; m++) {
    addbtn[m].onclick = function (n) {
      var additinerarybtn = document.querySelector(".additinerarybtn");
      var clonecontent = document.querySelector("clonecontent");
      spotlightbox.style.display = "block";
      // console.log(n.target.parentNode.nextElementSibling);
      let selectedspot = n.target.parentNode.nextElementSibling.cloneNode(true);
      spotlightbox.insertBefore(selectedspot, additinerarybtn);
      let details = selectedspot.getElementsByTagName("input")[0].value;
      let getdetails = details.split('|')[1];
      console.log(getdetails)


      spotlightbox.getElementsByClassName("detailstext")[0].innerText = getdetails;
      // spotlightbox.querySelector(".detailstext").innerHTML=getdetails;


      spotlightbox.getElementsByTagName("button")[0].onclick = closelightbox;
    };
    function closelightbox(p) {
      p.target.parentNode.style.display = "none";
      spotlightbox.removeChild(p.target.nextElementSibling);

    }
  }
  //上一步 下一步 btns controller
  let nextbtn = document.getElementById("next");
  let previousbtn = document.getElementById("previous");
  var currentindex = 0;
  showtab(currentindex);

  function showtab(e) {
    var x = document.getElementsByClassName("tab");
    x[e].classList.remove("hide");
    if (e == 0) {
      previousbtn.style.display = "none";
    } else {
      previousbtn.style.display = "inline-block";
    }
    if (e == 3) {
      nextbtn.innerHTML = "確認送出揪團";
    }

    stepindicator(e);
  }
  nextbtn.onclick = function () {
    var k = 1;
    let x = document.getElementsByClassName("tab");
    console.log(currentindex + "A");

    //驗證!!???
    x[currentindex].classList.add("hide");

    currentindex = currentindex + k;
    x[currentindex].classList.remove("hide");
    console.log(currentindex + "B");
    //把新的index傳回去showtab
    showtab(currentindex);
  };
  previousbtn.onclick = function () {
    var k = -1;
    let x = document.getElementsByClassName("tab");
    console.log(currentindex + "A");

    //驗證!!???
    x[currentindex].classList.add("hide");

    currentindex = currentindex + k;
    x[currentindex].classList.remove("hide");
    console.log(currentindex + "B");
    //把新的index傳回去showtab
    showtab(currentindex);
  };
  function stepindicator(e) {
    var currentstep = document.getElementsByClassName("form-span");
    //洗掉全部
    for (let i = 0; i < currentstep.length; i++) {
      currentstep[i].classList.remove("active");
    }
    currentstep[e].classList.add("active");
  }






  //上傳揪團圖片
  let uploadTourImg = document.getElementById('#uploadTourFile');
  
});
