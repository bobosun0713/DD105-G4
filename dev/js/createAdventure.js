
window.addEventListener("load", function () {

  checkLoginStatus();

  // DOM廟宇與美食的按鈕 做TAB切換功能
  let templefoodbuttons = document.querySelectorAll(".templefoodbuttons button");
  templefoodbuttons[0].onclick = togglefortab;
  templefoodbuttons[1].onclick = togglefortab;

  function togglefortab() {
    let hideall = document.querySelectorAll(".selectionsframe .spotoptions");
    for (let i = 0; i < hideall.length; i++) {
      hideall[i].style.display = "none";
    }
    if (this.innerText == "廟宇") {
      let templeopt = document.querySelectorAll(".selectionsframe .templeopt")
      for (let i = 0; i < templeopt.length; i++) {
        templeopt[i].style.display = "block";
      }
    } else {
      let hideall = document.querySelectorAll(".selectionsframe .spotoptions");
      for (let i = 0; i < hideall.length; i++) {
        hideall[i].style.display = "none";
        let foodopt = document.querySelectorAll(".selectionsframe .foodopt")
        for (let i = 0; i < foodopt.length; i++) {
          foodopt[i].style.display = "block";
        }
      }
    }
  }

  //先叫一次function
  creatTourInfo();

  // 挑選廟宇或美食點擊跑燈箱===========================================
  var addbtn = document.getElementsByClassName("addbtn");
  let spotlightbox = document.querySelector(".spotlightbox");

  //把主要景點 DOM 起來 讓他跑上下移動function
  let majorspot_btn = document.querySelectorAll(".selected_spot .majorspot");
  console.log(majorspot_btn[0].lastElementChild.firstElementChild)
  // majorspot_btn[0].lastElementChild.firstElementChild.onclick = shift_up_spot;
  // majorspot_btn[0].lastElementChild.lastElementChild.onclick = shift_down_spot;
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
      let getaddress = details.split('|')[2];

      spotlightbox.getElementsByClassName("detailstext")[0].innerHTML = getdetails + "<hr>" + getaddress;
      spotlightbox.getElementsByTagName("button")[0].onclick = closelightbox;
    };
    function closelightbox() {
      this.parentNode.style.display = "none";
      spotlightbox.removeChild(this.nextElementSibling);

    }
  }

  //點加入廟宇或美食按鈕後 clone到行程pandel 
  let additinerarybtn = document.querySelector(".additinerarybtn");
  let selected_spot_panel = document.querySelector(".selected_spot");

  //幫加入揪團行程按鈕建事件聆聽功能
  additinerarybtn.onclick = function () {

    //1.先clone到panel
    let clone_panelcontent = this.previousSibling.cloneNode(true);
    //把內文刪掉
    // console.log(clone_panelcontent, "what do i clone?")
    clone_panelcontent.lastChild.previousSibling.innerText = "";

    //取得spotlightbox裡的input的id 與 value 內容
    let temple_id = this.previousSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.id;
    let temple_value = this.previousSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.value;

    //把原本已加廟宇美食影藏
    let spot_inner = document.querySelectorAll(".spotoptions .content input");
    for (let i = 0; i < spot_inner.length; i++) {
      if (spot_inner[i].id == temple_id) {
        var delete_spot_inner = spot_inner[i].parentNode.parentNode;
        delete_spot_inner.style.display = "none";
        // console.log()
      }
    }


    //上下移動按鈕

    //向上移動按鈕
    // let shift_up_btn = document.createElement("button");
    // shift_up_btn.innerText = "上移鈕";
    // shift_up_btn.classList.add("shift_up_btn");
    // shift_up_btn.addEventListener('click', shift_up_spot);
    // // 向下移動按鈕
    // let shift_down_btn = document.createElement("button");
    // shift_down_btn.innerText = "下移鈕";
    // shift_down_btn.classList.add("shift_down_btn");
    // shift_down_btn.addEventListener('click', shift_down_spot);

    // let shiftbtns = document.createElement("div");
    // shiftbtns.classList.add("shiftbtns");
    // shiftbtns.appendChild(shift_up_btn);
    // shiftbtns.appendChild(shift_down_btn);


    //刪除按鈕
    let delete_btn = document.createElement("button");
    delete_btn.innerText = "X";
    delete_btn.classList.add("delete_btn");
    delete_btn.addEventListener('click', deleteSpot);

    let spot_block = document.createElement("div");
    spot_block.appendChild(clone_panelcontent);
    spot_block.appendChild(delete_btn);
    // spot_block.appendChild(shiftbtns);
    selected_spot_panel.appendChild(spot_block);

    // console.log()
    //hide panel 上下移btn
    // hideshift_btn()

    // 燈箱關掉
    let spotlightbox = document.querySelector(".spotlightbox");
    this.parentNode.style.display = "none";
    // console.log(this.previousElementSibling, "??")
    spotlightbox.removeChild(this.previousElementSibling);
    //控制廟宇飲食只能各選一個

    //先註冊 content foodcls/templecls
    let templecls = selected_spot_panel.querySelectorAll("div .temple_cls");
    let foodcls = selected_spot_panel.querySelectorAll("div .food_cls");
    if (templecls.length > 1) {

      let get_templecls_id = templecls[0].querySelectorAll("input")[0].id;
      // console.log(get_templecls_id, "hi there")
      //如果廟宇選超過一個 就把之前已新增的廟宇刪掉
      let spot_inner = document.querySelectorAll(".spotoptions .content input");
      for (let i = 0; i < spot_inner.length; i++) {
        if (spot_inner[i].id == get_templecls_id) {
          var delete_spot_inner = spot_inner[i].parentNode.parentNode;
          delete_spot_inner.style.display = "block";
        }
      }
      templecls[0].parentNode.parentNode.removeChild(templecls[0].parentNode);
    }
    if (foodcls.length > 1) {

      let get_foodcls_id = foodcls[0].querySelectorAll("input")[0].id;
      // console.log(get_foodcls_id, "hi there")
      //如果美食選超過一個 就把之前已新增的美食刪掉
      let spot_inner = document.querySelectorAll(".spotoptions .content input");
      for (let i = 0; i < spot_inner.length; i++) {
        if (spot_inner[i].id == get_foodcls_id) {
          var delete_spot_inner = spot_inner[i].parentNode.parentNode;
          delete_spot_inner.style.display = "block";
        }
      }
      foodcls[0].parentNode.parentNode.removeChild(foodcls[0].parentNode);
    }
    //呼叫creatTourInfo();
    creatTourInfo();
  }


  //點X按鈕刪除panel裡的spot
  function deleteSpot() {
    var mom = this.parentNode;

    let get_pandel_spot_id = this.parentNode.firstChild.getElementsByTagName("input")[0].id
    console.log(get_pandel_spot_id)
    let spot_inner = document.querySelectorAll(".spotoptions .content input");
    for (let i = 0; i < spot_inner.length; i++) {
      if (spot_inner[i].id == get_pandel_spot_id) {
        var delete_spot_inner = spot_inner[i].parentNode.parentNode;
        delete_spot_inner.style.display = "block";
        // console.log()
      }
    }
    mom.parentNode.removeChild(this.parentNode);

    creatTourInfo();

  }

  
  // function shift_up_spot() {
  //   let panelparentNode = this.parentNode.parentNode.parentNode;
  //   //  console.log(panelparentNode,"上移")
  //   //  console.log(this.parentNode.parentNode,"要移的")
  //   panelparentNode.insertBefore(this.parentNode.parentNode, this.parentNode.parentNode.previousSibling);
  //   hideshift_btn();

  //   creatTourInfo();
  // }
  // function shift_down_spot() {
  //   let panelparentNode = this.parentNode.parentNode.parentNode;
  //   // console.log(this.parentNode.parentNode,"要移的")
  //   // console.log(this.parentNode.parentNode.nextSibling,"參考兄弟")
  //   // panelparentNode.insertAfter(this.parentNode.parentNode,this.parentNode.parentNode.nextSibling);
  //   panelparentNode.insertBefore(this.parentNode.parentNode.nextSibling, this.parentNode.parentNode);
  //   hideshift_btn();

  //   creatTourInfo();
  // }


  //影藏第一個selected_spot上的移動按鈕
  // function hideshift_btn() {
  //   if (selected_spot_panel.hasChildNodes()) {
  //     // // 為何while鎖死
  //     let countnodes = selected_spot_panel.children;
  //     let updown_btn = selected_spot_panel.firstElementChild.lastElementChild;
  //     let clearwholebtns = document.querySelectorAll(".shiftbtns button")
  //     for (let w = 0; w < clearwholebtns.length; w++) {
  //       clearwholebtns[w].style.display = "block";
  //     }

  //     if (countnodes.length <= 1) {
  //       updown_btn.style.display = "none";

  //     } else {
  //       //?????????
  //       let SSSS = document.querySelectorAll(".shiftbtns")
  //       for (let u = 0; u < SSSS.length; u++) {
  //         SSSS[u].style.display = "block";
  //       }
  //       let firstkid_up_btn = selected_spot_panel.firstElementChild.lastElementChild.firstElementChild;
  //       let lastkid_down_btn = selected_spot_panel.lastElementChild.lastElementChild.lastElementChild;

  //       firstkid_up_btn.style.display = "none";
  //       lastkid_down_btn.style.display = "none";

  //     }
  //   }

  // }
  


  //步驟一二三四的tab切換
  //上一步 下一步 btns controller======================================
  let nextbtn = document.getElementById("next");
  let previousbtn = document.getElementById("previous");
  var currentindex = 0;
  showtab(currentindex);

  function showtab(e) {
    var x = document.getElementsByClassName("tab");
    x[e].classList.remove("hide");

    //第一步
    if (e == 0) {
      previousbtn.style.display = "none";
      //判斷沒有選行程不能進行下一步
      nextbtn.innerHTML = "下一步";


    } else {
      previousbtn.style.display = "inline-block";
    }

    //第二步
    if (e == 1) {
      nextbtn.innerHTML = "下一步";
    }

    //第三步
    if (e == 2) {
      nextbtn.innerHTML = "下一步";
      // alert(nextbtn.getAttribute('type'));

      if(nextbtn.getAttribute('type') == 'submit'){
        nextbtn.removeAttribute("type","submit");
        nextbtn.setAttribute("type","button");
      }
    }

    if (e == 3) {
      creatPreviewPage();
      // previousbtn.style.display = "none";
      // alert(nextbtn.getAttribute('type'));
      nextbtn.innerHTML = "確認送出揪團";
      // nextbtn.setAttribute("type","submit");
    }

    stepindicator(e);
  }


  nextbtn.onclick = function () {

    //判斷如果在第一步時沒有選行程，則不能跳轉下一步
    let selected_spot = document.querySelectorAll('#tab-1 .selected_spot > div');

    let selected_date_1 = document.querySelector('#yy_mm_dd').innerText;
    let selected_date_2 = document.querySelector('#yy_mm_dd_2').innerText;
    let selected_date_3 = document.querySelector('#yy_mm_dd_3').innerText;
    let noneDate = "請選取日期";
    let myTourTitle = document.querySelectorAll('#tab-2 input')[1].value;
    let myTourIntro = document.querySelector('#tab-2 textarea').value;
    let tour_image = document.querySelector('.tour_imagePreview_default').classList.length;
    console.log(selected_spot.length, "spotlength")
    if (currentindex == 0) {

      if (selected_spot.length == 0) {
        alert("尚未選擇任何行程");
      } else {
        nextPage();
      }
    } else if (currentindex == 1) {
      console.log(currentindex, "currentindex")
      // console.log("WHERE")
      if (selected_date_1 == noneDate | selected_date_2 == noneDate | selected_date_3 == noneDate | myTourTitle == "" | myTourIntro == "" | tour_image != 2) {
        alert("尚未完整填寫 基本資料 和 上傳圖片");
      } else {
        console.log("WHERE")
        nextPage();
      }
    } else if(currentindex == 3){
      // alert('AAAAAAA');
      this.setAttribute("type","submit");
      // alert(nextbtn.getAttribute('type'));
      sendMyTour();
    }else {
      nextPage();
    }


    // var k = 1;
    // let x = document.getElementsByClassName("tab");
    // console.log(currentindex + "A");

    // //驗證!!???
    // x[currentindex].classList.add("hide");

    // currentindex = currentindex + k;
    // x[currentindex].classList.remove("hide");
    // // console.log(currentindex + "B");
    // //把新的index傳回去showtab
    // showtab(currentindex);
  };

  function nextPage() {
    var k = 1;
    let x = document.getElementsByClassName("tab");
    // console.log(currentindex + "A");
    x[currentindex].classList.add("hide");

    currentindex = currentindex + k;
    x[currentindex].classList.remove("hide");
    // console.log(currentindex + "B");
    //把新的index傳回去showtab
    showtab(currentindex);
  }

  previousbtn.onclick = function () {
    var k = -1;
    let x = document.getElementsByClassName("tab");
    console.log(currentindex + "prebtn1");

    //驗證!!???
    x[currentindex].classList.add("hide");

    currentindex = currentindex + k;
    x[currentindex].classList.remove("hide");

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

  //動態新增景點編輯
  function creatTourInfo() {
    let spotList = document.querySelectorAll('.selected_spot > div');
    let spotListInfo = document.querySelectorAll('.selected_spot .content input');
    let spotListImg = document.querySelectorAll('.selected_spot .content img');
    let tourWrapper = document.querySelector('.tour_wrapper');

    tourWrapper.innerHTML = "";

    for (let i = 0; i < spotList.length; i++) {
      //建立行程區塊
      let section = document.createElement('div');
      section.classList.add('section');

      //建立圖片區塊
      let spotLeft = document.createElement('div');
      spotLeft.classList.add('left');
      spotLeft.classList.add('spot1');
      let templeImgWrapper = document.createElement('div');
      templeImgWrapper.classList.add('temple_img');
      let templeImg = document.createElement('img');
      templeImg.src = spotListImg[i].src;

      templeImgWrapper.appendChild(templeImg);
      spotLeft.appendChild(templeImgWrapper);
      section.appendChild(spotLeft);

      //建立文字區塊
      let spotRight = document.createElement('div');
      spotRight.classList.add('right');
      spotRight.classList.add('spot1');

      //把input hidden value clone進來
      let hiddenTourInput = spotList[i].firstElementChild.querySelector('input').value;
      let hiddenTour = document.createElement('input');
      hiddenTour.setAttribute('type', 'hidden');
      hiddenTour.value = hiddenTourInput;
      // console.log(hiddenTour.value)
      let tourName = document.createElement('label');
      tourName.innerText = `行程 ${i + 1}`;
      let tourNameInput = document.createElement('p');
      tourNameInput.innerText = spotListInfo[i].value.split("|")[0];
      let spotLocation = document.createElement('label');
      spotLocation.innerText = '景點地址';
      let spotLocationInput = document.createElement('p');
      spotLocationInput.innerText = spotListInfo[i].value.split("|")[2];
      let spotIntro = document.createElement('label');
      spotIntro.innerText = '景點簡介';
      let spotIntroInput = document.createElement('textarea');
      spotIntroInput.value = spotListInfo[i].value.split("|")[1];
      let spotTool = document.createElement('label');
      spotTool.innerText = '所需工具';
      let spotToolInput = document.createElement('input');
      spotToolInput.setAttribute("type", "text");
      spotToolInput.classList.add('spotTool');
      spotToolInput.placeholder = "請輸入需要工具";
      let spotFee = document.createElement('label');
      spotFee.innerText = '預估費用';
      let spotFeeInput = document.createElement('input');
      spotFeeInput.setAttribute("type", "number");
      spotFeeInput.classList.add('spotBudget');
      spotFeeInput.value = "0";
      spotFeeInput.min = "0"


      spotRight.appendChild(hiddenTour);
      spotRight.appendChild(tourName);
      spotRight.appendChild(tourNameInput);
      spotRight.appendChild(document.createElement('br'));
      spotRight.appendChild(spotLocation);
      spotRight.appendChild(spotLocationInput);
      spotRight.appendChild(document.createElement('br'));
      spotRight.appendChild(spotIntro);
      spotRight.appendChild(spotIntroInput);
      spotRight.appendChild(document.createElement('br'));
      spotRight.appendChild(spotTool);
      spotRight.appendChild(spotToolInput);
      spotRight.appendChild(document.createElement('br'));
      spotRight.appendChild(spotFee);
      spotRight.appendChild(spotFeeInput);
      spotRight.appendChild(document.createElement('br'));
      section.appendChild(spotRight);

      tourWrapper.appendChild(section);
    }

    creatPreviewPage();
  }

  //動態改變預覽畫面
  function creatPreviewPage() {

    //新增首圖
    let myTourPic = document.querySelector('#tourPreview_Section1 .bigPic img');
    let selectedTourPic = document.querySelectorAll('#tour_imagePreview img')[0];
    myTourPic.src = selectedTourPic.src;

    //新增標題跟簡介
    let myTourspots = document.querySelectorAll('.tour_wrapper .section');
    let myTourTitle = document.querySelector('#tourPreview_Section1 .txtZone h1');
    let wroteTourTitle = document.querySelectorAll('#tab-2 .leftblock input')[1].value;
    myTourTitle.innerText = wroteTourTitle;

    let introTxt = document.querySelector('#tourPreview_Section1 .txtZone .introTxt p');
    let wroteIntroTxt = document.querySelector('#tab-2 .leftblock textarea').value;
    introTxt.innerText = wroteIntroTxt;

    let myTourLocation = document.getElementById('myTourLocation');
    for( var x = 0; x < myTourspots.length; x++){
      if( x == 0){
        myTourLocation.innerText = myTourspots[x].lastElementChild.firstElementChild.value.split('|')[0];
      }else{
        myTourLocation.innerText = myTourLocation.innerText + "、" + myTourspots[x].lastElementChild.firstElementChild.value.split('|')[0];
      }
      
    }


    //新增選擇的日期
    let myTourLaunchDate = document.getElementById('myTourLaunchDate');
    let myTourStartDate = document.getElementById('myTourStartDate');
    let myTourStopDate = document.getElementById('myTourStopDate');
    let myTourStopDate2 = document.getElementById('myTourStopDate2');
    let selectedLaunchDate = document.getElementById('yy_mm_dd');
    let selectedStartDate = document.getElementById('yy_mm_dd_2');
    let selectedStopDate = document.getElementById('yy_mm_dd_3');
    myTourLaunchDate.innerText = selectedLaunchDate.innerText;
    myTourStartDate.innerText = selectedStartDate.innerText;
    myTourStopDate.innerText = selectedStopDate.innerText;
    myTourStopDate2.innerText = selectedStopDate.innerText;

    //新增選擇的人數
    let selectedtourJoinNum = document.querySelectorAll('#tab-2 .leftblock input')[0];
    let myTourJoinNum = document.getElementById('myTourJoinNum');
    myTourJoinNum.innerText = selectedtourJoinNum.value;

    //新增預算
    // let myTourspots = document.querySelectorAll('.tour_wrapper .section');
    let myTourBudget = document.getElementById('myTourBudget');
    let totalBudget = 0;

    for (var i = 0; i < myTourspots.length; i++) {
      let eachTourBudget = myTourspots[i].lastElementChild.querySelector('.spotBudget').value;

      // console.log(myTourspots.length, eachTourInfo.length, eachTourBudget);
      totalBudget += parseInt(eachTourBudget);
    }
    myTourBudget.innerText = totalBudget;

    //新增行程
    let customeTour = document.getElementById('customeTour');
    let customeTourImg = document.querySelectorAll('.tour_wrapper .section .spot1 .temple_img img');
    let eachTourTextarea = document.querySelectorAll('.tour_wrapper textarea');

    // console.log(customeTourImg.length);
    customeTour.innerHTML = "";

    //建立小點點
    let tourStatus = document.createElement('nav');
    tourStatus.classList.add('tourStatus');
    let tourStatus_ul = document.createElement('ul');
    tourStatus.appendChild(tourStatus_ul);
    //迴圈跑完再放進customeTour

    for (var i = 0; i < myTourspots.length; i++) {
      //建立行程區塊
      let tourSpot = document.createElement('div');
      tourSpot.classList.add('tourSpot');

      //建立圖片區域
      let tourImg = document.createElement('div');
      tourImg.classList.add('tourImg');
      let tourImg_img = document.createElement('img');
      tourImg_img.src = customeTourImg[i].src;

      //建立行程文字區域
      let eachTourValue = myTourspots[i].lastElementChild.firstElementChild.value;
      let tourSpotTxt = document.createElement('div');
      tourSpotTxt.classList.add('tourSpotTxt');
      let spotTitle = document.createElement('h2');
      spotTitle.classList.add('spotTitle');
      spotTitle.innerText = `【行程${i + 1}】`;
      let spotTitleName = document.createElement('span');
      let eachTourName = eachTourValue.split('|')[0];
      spotTitleName.innerText = eachTourName;
      let spotIntro = document.createElement('p');
      spotIntro.innerText = eachTourTextarea[i].value;

      //新增資訊按鈕區塊
      let tourSpotInfo = document.createElement('div');
      tourSpotInfo.classList.add('tourSpotInfo');
      //地址
      let locationBtn = document.createElement('div');
      locationBtn.classList.add('btn-outline2');
      let locationBtn_icon = document.createElement('img');
      locationBtn_icon.src = "./img/icon/location.png";
      let locationBtn_txt = document.createElement('p');
      locationBtn_txt.innerText = "地理位置";
      let locationBtn_infoBox = document.createElement('div');
      locationBtn_infoBox.classList.add('moreInfo');
      let eachTourLocation = eachTourValue.split('|')[2];
      locationBtn_infoBox.innerText = eachTourLocation;
      let locationBtn_triangle = document.createElement('div');
      locationBtn_triangle.classList.add('triangle');

      //所需工具
      let eachTourInfo = myTourspots[i].lastElementChild;

      let toolBtn = document.createElement('div');
      toolBtn.classList.add('btn-outline2');
      let toolBtn_icon = document.createElement('img');
      toolBtn_icon.src = "./img/icon/tool.png";
      let toolBtn_txt = document.createElement('p');
      toolBtn_txt.innerText = "所需工具";
      let toolBtn_infoBox = document.createElement('div');
      toolBtn_infoBox.classList.add('moreInfo');
      let eachTourTool = eachTourInfo.querySelector('.spotTool').value;
      if (eachTourTool == "") {
        eachTourTool = "無";
      }
      toolBtn_infoBox.innerText = eachTourTool;
      let toolBtn_triangle = document.createElement('div');
      toolBtn_triangle.classList.add('triangle');

      //費用
      let feeBtn = document.createElement('div');
      feeBtn.classList.add('btn-outline2');
      let feeBtn_icon = document.createElement('img');
      feeBtn_icon.src = "./img/icon/tool.png";
      let feeBtn_txt = document.createElement('p');
      feeBtn_txt.innerText = "所需工具";
      let feeBtn_infoBox = document.createElement('div');
      feeBtn_infoBox.classList.add('moreInfo');
      let eachTourFee = eachTourInfo.querySelector('.spotBudget').value;
      feeBtn_infoBox.innerText = eachTourFee;
      let feeBtn_triangle = document.createElement('div');
      feeBtn_triangle.classList.add('triangle');

      //建立小點點
      if (i == 0) {
        let statusCircle = document.createElement('li');
        statusCircle.classList.add('statusCircle');
        statusCircle.classList.add('selected');
        let Circle = document.createElement('p');
        Circle.classList.add('circle');
        Circle.classList.add('selected2');

        statusCircle.appendChild(Circle);
        tourStatus_ul.appendChild(statusCircle);
      } else {
        let statusCircle = document.createElement('li');
        statusCircle.classList.add('statusCircle');
        let line = document.createElement('p');
        line.classList.add('line');
        let Circle = document.createElement('p');
        Circle.classList.add('circle');

        statusCircle.appendChild(line);
        statusCircle.appendChild(Circle);
        tourStatus_ul.appendChild(statusCircle);

      }


      tourImg.appendChild(tourImg_img);
      tourSpot.appendChild(tourImg);

      spotTitle.appendChild(spotTitleName);
      tourSpotTxt.appendChild(spotTitle);
      tourSpotTxt.appendChild(spotIntro);
      //地點
      locationBtn.appendChild(locationBtn_icon);
      locationBtn.appendChild(locationBtn_txt);
      locationBtn.appendChild(locationBtn_infoBox);
      locationBtn.appendChild(locationBtn_triangle);
      tourSpotInfo.appendChild(locationBtn);
      //工具
      toolBtn.appendChild(toolBtn_icon);
      toolBtn.appendChild(toolBtn_txt);
      toolBtn.appendChild(toolBtn_infoBox);
      toolBtn.appendChild(toolBtn_triangle);
      tourSpotInfo.appendChild(toolBtn);
      //費用
      feeBtn.appendChild(feeBtn_icon);
      feeBtn.appendChild(feeBtn_txt);
      feeBtn.appendChild(feeBtn_infoBox);
      feeBtn.appendChild(feeBtn_triangle);
      tourSpotInfo.appendChild(feeBtn);

      tourSpotTxt.appendChild(tourSpotInfo);

      tourSpot.appendChild(tourSpotTxt);
      customeTour.appendChild(tourSpot);
      customeTour.appendChild(tourStatus);
    }


  }





  //============================================================================



  //==============上傳揪團圖片================//

  let uploadTourImg = document.getElementById('uploadTourFile');
  let tour_imagePreview_zone = document.getElementById('tour_imagePreview');
  let tour_image = document.querySelector('.tour_imagePreview_default');

  //點按show圖片
  uploadTourImg.addEventListener("change", function () {
    let upload_img = this.files[0];
    // console.log(upload_img);

    if (upload_img) {
      let reader = new FileReader();

      reader.addEventListener("load", function () {
        tour_image.setAttribute("src", this.result);
        tour_image.style.width = 130 + "%";
        tour_image.classList.add('already_upload');
        // console.log(this);
      });

      reader.readAsDataURL(upload_img);
    }
  });

  //點案area同樣有input file 效果
  tour_imagePreview_zone.addEventListener("click", function () {
    uploadTourImg.click();
  });



  //==============萬年曆選擇日期================//
  // 建立日期
  let preMonthBtn = document.querySelector('.preMonth');
  let nextMonthBtn = document.querySelector('.nextMonth');
  let preMonthBtn2 = document.querySelector('.preMonth_2');
  let nextMonthBtn2 = document.querySelector('.nextMonth_2');
  let preMonthBtn3 = document.querySelector('.preMonth_3');
  let nextMonthBtn3 = document.querySelector('.nextMonth_3');

  var currentDate = new Date();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();
  let day = currentDate.getDate();
  var month_name = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

  let selectedDate = currentDate;
  let selectedDay = day;
  let selectedMonth = month;
  let selectedYear = year;



  //抓取當日年月
  let dateTable = document.getElementById('dateTable');
  let dateTable_2 = document.getElementById('dateTable_2');
  let dateTable_3 = document.getElementById('dateTable_3');

  let dateZone = document.getElementById('dateZone');
  let dateZone_2 = document.getElementById('dateZone_2');
  let dateZone_3 = document.getElementById('dateZone_3');

  let yy_mm = document.getElementById('yy_mm');
  let yy_mm_2 = document.getElementById('yy_mm_2');
  let yy_mm_3 = document.getElementById('yy_mm_3');

  let yy_mm_dd = document.getElementById('yy_mm_dd');
  let yy_mm_dd_2 = document.getElementById('yy_mm_dd_2');
  let yy_mm_dd_3 = document.getElementById('yy_mm_dd_3');

  let yy_mm_dd_container = document.querySelector('.yy_mm_dd_container');
  let yy_mm_dd_container_2 = document.querySelector('.yy_mm_dd_container_2');
  let yy_mm_dd_container_3 = document.querySelector('.yy_mm_dd_container_3');

  let yy_mm_dd_arrow = document.querySelector('.yy_mm_dd_container .arrow');
  let yy_mm_dd_2_arrow = document.querySelector('.yy_mm_dd_container_2 .arrow');
  let yy_mm_dd_3_arrow = document.querySelector('.yy_mm_dd_container_3 .arrow');
  // yy_mm_dd.innerText = `${year}-${month+1}-${day}`;

  yy_mm.innerText = `${month_name[month]} ${year}`;
  yy_mm_2.innerText = `${month_name[month]} ${year}`;
  yy_mm_3.innerText = `${month_name[month]} ${year}`;


  yy_mm_dd_container.addEventListener('click', function () {
    dateZone_2.style.display = "none";

    yy_mm_dd.innerText = formatDate(currentDate);
    dateZone.style.display = "block";
    generateTable();
  });

  yy_mm_dd_container_2.addEventListener('click', function () {

    if (yy_mm_dd.innerText == "請選取日期") {
      alert("請先選取發起日期");
    } else {
      yy_mm_dd_2.innerText = formatDate(currentDate);
      dateZone_2.style.display = "block";
      generateTable2();
    }

  });

  yy_mm_dd_container_3.addEventListener('click', function () {

    if (yy_mm_dd_2.innerText == "請選取日期") {
      alert("請先選取出團截止日期");
    } else {
      yy_mm_dd_3.innerText = formatDate(currentDate);
      dateZone_3.style.display = "block";
      generateTable3();
    }

  });



  //建立事件聆聽功能
  nextMonthBtn.addEventListener('click', goToNextMonth);
  preMonthBtn.addEventListener('click', goToPreMonth);
  nextMonthBtn2.addEventListener('click', goToNextMonth2);
  preMonthBtn2.addEventListener('click', goToPreMonth2);
  nextMonthBtn3.addEventListener('click', goToNextMonth3);
  preMonthBtn3.addEventListener('click', goToPreMonth3);



  //選取月份
  function goToNextMonth(e) {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    yy_mm.innerText = `${month_name[month]} ${year}`;
    generateTable();
  }

  function goToPreMonth(e) {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    yy_mm.innerText = `${month_name[month]} ${year}`;
    generateTable();
  }

  function goToNextMonth2(e) {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    yy_mm_2.innerText = `${month_name[month]} ${year}`;
    generateTable2();
  }

  function goToPreMonth2(e) {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    yy_mm_2.innerText = `${month_name[month]} ${year}`;
    generateTable2();
  }

  function goToNextMonth3(e) {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    yy_mm_3.innerText = `${month_name[month]} ${year}`;
    generateTable3();
  }

  function goToPreMonth3(e) {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    yy_mm_3.innerText = `${month_name[month]} ${year}`;
    generateTable3();
  }


  //產生日曆
  function generateTable(e) {
    dateTable.innerHTML = "";
    // console.log(yy_mm_dd_arrow.src);
    yy_mm_dd_arrow.style.transform = "rotate(180deg)";

    //建立日期
    let amountDays = 31;
    if (month == 1 && year % 4 != 0) {
      amountDays = 28;
    } else if (month == 3 | month == 5 | month == 8 | month == 10) {
      amountDays = 30;
    } else if (year % 4 == 0 && month == 1) {
      amountDays = 29;
    }


    //建立表格
    for (var i = 0; i < 5; i++) {
      var newRow = document.createElement('tr');
      for (var j = 0; j < 7; j++) {
        var newDate = document.createElement('td');
        // var date;
        newDate.innerText = "";
        newRow.appendChild(newDate);
      }
      dateTable.appendChild(newRow);
    }

    //把日期放進td
    let allDays = document.querySelectorAll('#dateTable tr td');
    for (let d = 0; d < amountDays; d++) { //為何用var d會被影響？
      allDays[d].innerText = d + 1;

      //讓當日日期被選到
      if (selectedDay == d + 1 && selectedMonth == month && selectedYear == year) {
        allDays[d].classList.add('selected');
      }

      //幫每個日期的click建事件聆聽處理器
      allDays[d].addEventListener('click', function () {

        selectedDate = new Date(year, month, (d + 1));
        selectedDay = (d + 1);
        selectedMonth = month;
        selectedYear = year;

        todayDate = new Date();
        todayMonth = todayDate.getMonth();
        todayYear = todayDate.getFullYear();
        // console.log(day, todayMonth, todayYear);

        if (allDays[d].innerText < day && selectedMonth <= todayMonth) {
          alert('請選擇正確日期');
        } else if (selectedMonth < todayMonth && selectedYear == todayYear) {
          alert('請選擇正確日期');
        } else if (selectedYear < todayYear) {
          alert('請選擇正確日期');
        } else {
          yy_mm_dd.innerText = formatDate(selectedDate);
          yy_mm_dd.dataset.value = selectedDate;
          generateTable();
          dateZone.style.display = "none";
          yy_mm_dd_arrow.style.transform = "rotate(0deg)";

        }
      });

    }
  }

  function generateTable2(e) {
    dateTable_2.innerHTML = "";
    yy_mm_dd_2_arrow.style.transform = "rotate(180deg)";

    //建立日期
    let amountDays = 31;
    if (month == 1 && year % 4 != 0) {
      amountDays = 28;
    } else if (month == 3 | month == 5 | month == 8 | month == 10) {
      amountDays = 30;
    } else if (year % 4 == 0 && month == 1) {
      amountDays = 29;
    }


    //建立表格
    for (var i = 0; i < 5; i++) {
      var newRow = document.createElement('tr');
      for (var j = 0; j < 7; j++) {
        var newDate = document.createElement('td');
        // var date;
        newDate.innerText = "";
        newRow.appendChild(newDate);
      }
      dateTable_2.appendChild(newRow);
    }

    //把日期放進td
    let allDays = document.querySelectorAll('#dateTable_2 tr td');
    for (let d = 0; d < amountDays; d++) { //為何用var d會被影響？
      allDays[d].innerText = d + 1;

      //讓當日日期被選到
      if (selectedDay == d + 1 && selectedMonth == month && selectedYear == year) {
        allDays[d].classList.add('selected');
      }


      //幫每個日期的click建事件聆聽處理器
      allDays[d].addEventListener('click', function () {

        selectedDate = new Date(year, month, (d + 1));
        selectedDay = (d + 1);
        selectedMonth = month;
        selectedYear = year;

        //只能選發起日期之後
        holdTourDate = yy_mm_dd.innerText.split("-");
        holdTourDay = parseInt(holdTourDate[2]);
        if (holdTourDate[1].charAt(0) == 0) {
          holdTourMonth = parseInt(holdTourDate[1].slice(1)) - 1;
        } else {
          holdTourMonth = parseInt(holdTourDate[1]) - 1;
        }
        holdTourYear = parseInt(holdTourDate[0]);
        // console.log(selectedDay,selectedMonth,selectedYear,holdTourDay,holdTourMonth,holdTourYear);


        if (allDays[d].innerText < holdTourDay && selectedMonth <= holdTourMonth) {
          alert('請選擇正確日期');
        } else if (selectedMonth < holdTourMonth && selectedYear == holdTourYear) {
          alert('請選擇正確日期');
        } else if (selectedYear < holdTourYear) {
          alert('請選擇正確日期');
        } else {
          yy_mm_dd_2.innerText = formatDate(selectedDate);
          yy_mm_dd_2.dataset.value = selectedDate;
          generateTable2();
          dateZone_2.style.display = "none";
          yy_mm_dd_2_arrow.style.transform = "rotate(0deg)";

        }
      });

    }
  }

  function generateTable3(e) {
    dateTable_3.innerHTML = "";
    yy_mm_dd_3_arrow.style.transform = "rotate(180deg)";

    //建立日期
    let amountDays = 31;
    if (month == 1 && year % 4 != 0) {
      amountDays = 28;
    } else if (month == 3 | month == 5 | month == 8 | month == 10) {
      amountDays = 30;
    } else if (year % 4 == 0 && month == 1) {
      amountDays = 29;
    }


    //建立表格
    for (var i = 0; i < 5; i++) {
      var newRow = document.createElement('tr');
      for (var j = 0; j < 7; j++) {
        var newDate = document.createElement('td');
        // var date;
        newDate.innerText = "";
        newRow.appendChild(newDate);
      }
      dateTable_3.appendChild(newRow);
    }

    //把日期放進td
    let allDays = document.querySelectorAll('#dateTable_3 tr td');
    for (let d = 0; d < amountDays; d++) { //為何用var d會被影響？
      allDays[d].innerText = d + 1;

      //讓當日日期被選到
      if (selectedDay == d + 1 && selectedMonth == month && selectedYear == year) {
        allDays[d].classList.add('selected');
      }



      //幫每個日期的click建事件聆聽處理器
      allDays[d].addEventListener('click', function () {

        selectedDate = new Date(year, month, (d + 1));
        selectedDay = (d + 1);
        selectedMonth = month;
        selectedYear = year;

        //只能選截止日期之後
        launchTourDate = yy_mm_dd_2.innerText.split("-");
        launchTourDay = parseInt(launchTourDate[2]);
        if (launchTourDate[1].charAt(0) == 0) {
          launchTourMonth = parseInt(launchTourDate[1].slice(1)) - 1;
        } else {
          launchTourMonth = parseInt(launchTourDate[1]) - 1;
        }
        launchTourYear = parseInt(launchTourDate[0]);

        if (allDays[d].innerText < launchTourDay && selectedMonth <= launchTourMonth) {
          alert('請選擇正確日期');
        } else if (selectedMonth < launchTourMonth && selectedYear == launchTourYear) {
          alert('請選擇正確日期');
        } else if (selectedYear < launchTourYear) {
          alert('請選擇正確日期');
        } else {
          yy_mm_dd_3.innerText = formatDate(selectedDate);
          yy_mm_dd_3.dataset.value = selectedDate;
          generateTable3();
          dateZone_3.style.display = "none";
          yy_mm_dd_3_arrow.style.transform = "rotate(0deg)";

        }
      });

    }
  }
});


//萬年曆function之一
function formatDate(d) {
  let day = d.getDate();
  if (day < 10) {
    day = '0' + day;
  }
  let month = d.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  let year = d.getFullYear();

  return year + "-" + month + "-" + day;
}




//=======================送出表單ajax檔
function sendMyTour(){

  let xhr = new XMLHttpRequest();

  xhr.onload = function(){
      if(xhr.status == 200){

          mem_no = JSON.parse(xhr.responseText);
          location.href= "./StartGroup.html";
          // location.href= `./StartGroup.php?${mem_no}`;

          

      }else{
          alert(xhr.status);  
      }
  }
  
  let url = "./php/createMyTour.php";
  xhr.open("post", url, true);

  //撈個人資料
  let formData = new FormData();
  let max_of_participants = document.getElementById('max_of_participants').value;
  let tour_settime = document.getElementById('yy_mm_dd').innerText;
  let tour_endtime = document.getElementById('yy_mm_dd_2').innerText;
  let tour_datetime = document.getElementById('yy_mm_dd_3').innerText;
  let tour_title = document.getElementById('tourTitle').value;
  let tour_content = document.getElementById('tourContent').value;
  let tour_image = document.getElementById('uploadTourFile').files[0];

  formData.append('max_of_participants', max_of_participants);
  formData.append('tour_settime', tour_settime);
  formData.append('tour_endtime', tour_endtime);
  formData.append('tour_datetime', tour_datetime);
  formData.append('tour_title', tour_title);
  formData.append('tour_content', tour_content);
  formData.append('tour_image', tour_image);


  //撈行程
  let spotList = document.querySelectorAll('#tab-3 .tour_wrapper .section');
  let eachTourTextarea = document.querySelectorAll('.tour_wrapper textarea');

  for( let i =0; i<spotList.length; i++){
    let spotValue = spotList[i].lastElementChild.firstElementChild.value;
    console.log(spotValue)

    //判斷是景點還是食物還是廟宇
    let spotId = spotValue.split("|")[3];
    if( spotId.substring(0,1) == "s"){
      let spot_no = spotId.split('_')[1];
      let spot_tool = spotList[i].lastElementChild.querySelector('.spotTool').value;
      let spot_budget = spotList[i].lastElementChild.querySelector('.spotBudget').value;
      let spot_content = eachTourTextarea[i].value;


      formData.append('spot_no', spot_no);
      formData.append('spot_tool', spot_tool);
      formData.append('spot_budget', spot_budget);
      formData.append('spot_content', spot_content);

    }else if( spotId.substring(0,1) == "f" ){
      let food_no = spotId.split('_')[1];
      let food_tool = spotList[i].lastElementChild.querySelector('.spotTool').value;
      let food_budget = spotList[i].lastElementChild.querySelector('.spotBudget').value;
      let food_content = eachTourTextarea[i].value;


      formData.append('food_no', food_no);
      formData.append('food_tool', food_tool);
      formData.append('food_budget', food_budget);
      formData.append('food_content', food_content);

    }else if( spotId.substring(0,1) == "t" ){
      let temple_no = spotId.split('_')[1];
      let temple_tool = spotList[i].lastElementChild.querySelector('.spotTool').value;
      let temple_budget = spotList[i].lastElementChild.querySelector('.spotBudget').value;
      let temple_content = eachTourTextarea[i].value;


      formData.append('temple_no', temple_no);
      formData.append('temple_tool', temple_tool);
      formData.append('temple_budget', temple_budget);
      formData.append('temple_content', temple_content);
    }
  }

  // alert(formData);
  console.log(formData)
  xhr.send(formData);
  
}

//=======================跳轉回某頁面
// function link_to_tourPage(){

// }

//====================== 檢查登入狀態
function checkLoginStatus() {
  let spot_no = document.getElementById('spot_value').value.split('|')[3].split('_')[1];
  // alert(spot_no);
  var xhr = new XMLHttpRequest()
  var url = "./php/logininfo.php"
  xhr.open("GET", url, true)
  xhr.send(null)
  xhr.onload = function() {

      if (xhr.status == 200) {
          member = JSON.parse(xhr.responseText)
          
          //把會員資料寫進燈箱
          if( !member.mem_no ){
            alert('請先登入會員');
            location.href= `./ghostSpot.php?spot_no=${spot_no}&order_no=`;
          }
          
      }else{
          alert(xhr.status);
      }
  }
}

