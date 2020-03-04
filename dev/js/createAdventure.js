window.addEventListener("load", function() {
  // 挑選薯條
  let addbtn = document.getElementsByClassName("addbtn");
  for (let m = 0; m < addbtn.length; m++) {
    addbtn[m].onclick = function(n) {
      var additinerarybtn = document.querySelector(".additinerarybtn");
      var spotlightbox = document.querySelector(".spotlightbox");
      spotlightbox.style.display = "block";
      let selectedspot = n.target.parentNode.cloneNode(true);

      spotlightbox.insertBefore(selectedspot, additinerarybtn);
      console.log(selectedspot);
      spotlightbox.getElementsByTagName("button")[0].onclick = closelightbox;
    };
    function closelightbox(p) {
      p.target.parentNode.style.display = "none";
      console.log(p.target.parentNode);

      // spotdlightbox.removeChild(parentNode);
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
  nextbtn.onclick = function() {
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
  previousbtn.onclick = function() {
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
});
