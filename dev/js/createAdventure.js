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

