var storage = sessionStorage;

window.addEventListener("load", function () {

  //=============建立sesseion storage===============
  //日期storage建立
  // if (storage['initialDate'] == null && storage['deadlineDate'] == null && storage['launchDate'] == null) {
  //   storage['initialDate'] = '';
  //   storage['deadlineDate'] = '';
  //   storage['launchDate'] = '';
  // }

  // console.log(storage['initialDate']=='');

  //人數storage建立
  // if (storage['attendAmount'] == null) {
  //   storage['attendAmount'] = '';
  // }

  //揪團行程storage建立
  // if (storage['addSpotList'] == null) {
  //   storage['addSpotList'] = '';
  // }


  // 挑選廟宇或美食點擊跑燈箱===========================================
  var addbtn = document.getElementsByClassName("addbtn");
  let spotlightbox = document.querySelector(".spotlightbox");
  for (let m = 0; m < addbtn.length; m++) {
    addbtn[m].onclick = function (n) {
      var additinerarybtn = document.querySelector(".additinerarybtn");
      // var clonecontent = document.querySelector("clonecontent");

      spotlightbox.style.display = "block";
      // console.log(n.target.parentNode.nextElementSibling);
      let selectedspot = n.target.parentNode.nextElementSibling.cloneNode(true);
      spotlightbox.insertBefore(selectedspot, additinerarybtn);
      let details = selectedspot.getElementsByTagName("input")[0].value;
      let getdetails = details.split('|')[1];
      // console.log(getdetails)
      spotlightbox.getElementsByClassName("detailstext")[0].innerText = getdetails;
      spotlightbox.getElementsByTagName("button")[0].onclick = closelightbox;
    };
    function closelightbox() {
      this.parentNode.style.display = "none";
      spotlightbox.removeChild(this.nextElementSibling);

    }
  }

  //點加入廟宇或美食按鈕後 clone到行程pandel 
  //*************/

  let additinerarybtn = document.querySelector(".additinerarybtn");
  let selected_spot_panel = document.querySelector(".selected_spot");

  //幫加入揪團行程按鈕建事件聆聽功能
  additinerarybtn.onclick = function () {

    //1.先clone到panel
    let clone_panelcontent = this.previousSibling.cloneNode(true);
    //把內文刪掉
    clone_panelcontent.lastChild.previousSibling.innerText = "";
    console.log(clone_panelcontent.lastChild.previousSibling.innerText = "")


    //取得spotlightbox裡的input的id 與 value 內容
    let temple_id = this.previousSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.id;
    let temple_value = this.previousSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.value;
    //***************存入session storage

    // torage['addSpotList'] += `${temple_id}, `;
    // storage[temple_id] = itemValue;


    //把原本已加廟宇美食刪掉
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
    let shift_up_btn = document.createElement("button");
    shift_up_btn.innerText = "上移鈕";
    shift_up_btn.classList.add("shift_up_btn");
    shift_up_btn.addEventListener('click', shift_up_spot);
    //向下移動按鈕
    let shift_down_btn = document.createElement("button");
    shift_down_btn.innerText = "下移鈕";
    shift_down_btn.classList.add("shift_down_btn");
    shift_down_btn.addEventListener('click', shift_down_spot);

    let shiftbtns = document.createElement("div");
    shiftbtns.classList.add("shiftbtns");
    shiftbtns.appendChild(shift_up_btn);
    shiftbtns.appendChild(shift_down_btn);


    //刪除按鈕
    let delete_btn = document.createElement("button");
    delete_btn.innerText = "X";
    delete_btn.classList.add("delete_btn");
    delete_btn.addEventListener('click', deleteSpot);

    let spot_block = document.createElement("div");
    spot_block.appendChild(clone_panelcontent);
    spot_block.appendChild(delete_btn);
    spot_block.appendChild(shiftbtns);
    selected_spot_panel.appendChild(spot_block);
    //影藏第一個spot上移按鈕
    if (selected_spot_panel.hasChildNodes()) {
      let firstkid_up_btn = selected_spot_panel.firstChild;
      // firstkid_up_btn.style.display="none";
      console.log(firstkid_up_btn)
    }
    // console.log()
    // 燈箱關掉
    let spotlightbox = document.querySelector(".spotlightbox");
    this.parentNode.style.display = "none";
    // console.log(this.previousElementSibling, "??")
    spotlightbox.removeChild(this.previousElementSibling);

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
  function shift_up_spot() {
    let panelparentNode = this.parentNode.parentNode.parentNode;
    //  console.log(panelparentNode,"上移")
    //  console.log(this.parentNode.parentNode,"要移的")
    panelparentNode.insertBefore(this.parentNode.parentNode, this.parentNode.parentNode.previousSibling);

    creatTourInfo();
  }
  function shift_down_spot() {
    let panelparentNode = this.parentNode.parentNode.parentNode;
    // console.log(this.parentNode.parentNode,"要移的")
    // console.log(this.parentNode.parentNode.nextSibling,"參考兄弟")
    //再問老師為何insertAfter不行
    // panelparentNode.insertAfter(this.parentNode.parentNode,this.parentNode.parentNode.nextSibling);
    panelparentNode.insertBefore(this.parentNode.parentNode.nextSibling, this.parentNode.parentNode);

    creatTourInfo();
  }


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


    } else {
      previousbtn.style.display = "inline-block";
    }

    //第二步
    if (e == 1) {
      //建立景點清單web storage
      if (storage['addSpotList'] == null) {
        storage['addSpotList'] = '';
      }

      //抓景點清單
      let spotList = document.querySelectorAll('.selected_spot > div');
      // console.log(spotList.length);
      for (let i = 0; i < spotList.length; i++) {
        let spotId = spotList[i].firstChild.childNodes[5].id;
        console.log(spotId);
        let spotInfo = document.querySelector(`#${spotId}`).value;
        addSpot(spotId, spotInfo);
      }

    }

    //第三步
    if (e == 2) {
      // creatTourInfo();
    }

    if (e == 3) {
      nextbtn.innerHTML = "確認送出揪團";
    }

    stepindicator(e);
  }

  //儲存景點功能
  function addSpot(spotId, spotValue) {
    if (storage[spotId] == null) {
      storage['addSpotList'] += `${spotId},`;
      storage[spotId] = spotValue;
    }
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
      // templeImg.src = spotList[i].firstChild.children[1].src;
      // console.log(children[1]);
      // console.log(spotList[i].firstChild.childNodes[3]);

      templeImgWrapper.appendChild(templeImg);
      spotLeft.appendChild(templeImgWrapper);
      section.appendChild(spotLeft);

      //建立文字區塊
      let spotRight = document.createElement('div');
      spotRight.classList.add('right');
      spotRight.classList.add('spot1');
      let nextLine = document.createElement('br');


      let tourName = document.createElement('label');
      tourName.innerText = `行程 ${i + 1}`;
      let tourNameInput = document.createElement('input');
      tourNameInput.setAttribute("type", "text");
      tourNameInput.value = spotListInfo[i].value.split("|")[0];
      let spotLocation = document.createElement('label');
      spotLocation.innerText = '景點地址';
      let spotLocationInput = document.createElement('input');
      spotLocationInput.setAttribute("type", "text");
      spotLocationInput.value = spotListInfo[i].value.split("|")[1];
      let spotIntro = document.createElement('label');
      spotIntro.innerText = '景點簡介';
      let spotIntroInput = document.createElement('input');
      spotIntroInput.setAttribute("type", "text");
      spotIntroInput.value = spotListInfo[i].value.split("|")[1];
      let spotTool = document.createElement('label');
      spotTool.innerText = '所需工具';
      let spotToolInput = document.createElement('input');
      spotToolInput.setAttribute("type", "text");
      spotToolInput.placeholder = "請輸入需要工具";
      let spotFee = document.createElement('label');
      spotFee.innerText = '預估費用';
      let spotFeeInput = document.createElement('input');
      spotFeeInput.setAttribute("type", "number");
      spotFeeInput.value = "0";
      spotFeeInput.min = "0"


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

