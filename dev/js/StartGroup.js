function $element(element) {
    return document.querySelector(element)
}
function $elements(elements) {
    return document.querySelectorAll(elements)
}

function doFirst() {
    //------------------是否截止時間----------------------------------------
    participate = $element("#participate");
    var tour_endtime = $element("#tour_endtime");
    //  剩餘時間=截止時間-當前時間        
    var now_time = new Date();
    //新增一個當前時間data物件
    var remain_time = new Date(tour_endtime.innerText);
    //新增一個截止時間data物件
    // iDays.push(parseInt((remain_time.getTime() - now_time.getTime()) / 1000 / 60 / 60 / 24));
    if (now_time.getTime() > remain_time.getTime()) {

        participate.innerText = "報名時間已截止";
        //當下日期大於截止日期
        participate.onclick = function (e) {
            return false;
        }
        participate.classList.remove("btn-outline");
        participate.classList.add("activity_end");

    }
    //------------------是否截止時間----------------------------------------


    //-------------------------------------------判斷行程----------------------------------------
    var tourSpotTxt = $elements(".tourSpotTxt");
    var tour_number = $element(".tour_number");
    var statusCircle = $elements(".statusCircle");
    var circle_in = $element(".tourStatus ul");
    if (tourSpotTxt.length == 2) {
        tour_number.innerText = "二";

        for (let i = 0; i < 2; i++) {
            statusCircle = document.createElement('li');
            statusCircle.setAttribute('class', 'statusCircle');
            circle_in.appendChild(statusCircle);


            p_circle = document.createElement('p');
            p_circle.setAttribute('class', 'circle');
            statusCircle.appendChild(p_circle);
            if (i <= 0) {
                p_line = document.createElement('p');
                p_line.setAttribute('class', 'line');
                statusCircle.appendChild(p_line);
            }
        }

    } else if (tourSpotTxt.length == 1) {
        tour_number.innerText = "一";

        for (let i = 0; i < 1; i++) {
            statusCircle = document.createElement('li');
            statusCircle.setAttribute('class', 'statusCircle');
            circle_in.appendChild(statusCircle);


            p_circle = document.createElement('p');
            p_circle.setAttribute('class', 'circle');
            statusCircle.appendChild(p_circle);

        }

    } else {

        for (let i = 0; i < 3; i++) {
            statusCircle = document.createElement('li');
            statusCircle.setAttribute('class', 'statusCircle');
            circle_in.appendChild(statusCircle);


            p_circle = document.createElement('p');
            p_circle.setAttribute('class', 'circle');
            statusCircle.appendChild(p_circle);
            if (i <= 1) {
                p_line = document.createElement('p');
                p_line.setAttribute('class', 'line');
                statusCircle.appendChild(p_line);
            }
        }



    }
    //-------------------------------------------判斷行程----------------------------------------




    //-------------------------------------------跳出會員----------------------------------------
    var participate = $element("#participate");
    var now_people = $element(".number_of_participants").innerText;
    var max_people = $element(".max_of_participants").innerText;
    var chat_tour = $element("#chat_tour").innerText;
   
   
    // localStorage.setItem(`tour0`, new_filter_Array[i].tour_no);
     str = localStorage.getItem(`tour1`);
      // str=JSON.parse(str);
    if ( chat_tour== str) {
  
        participate.innerText = "取消參加";
    }
   
   
   
   
    participate.onclick = function () {
        if (participate.innerText != "已截止" && participate.innerText != "報名時間已截止") {
            if (login_btn.innerText == "登出") {
                if (this.innerText == "立即加入>") {
                    alert("你已成功加入!")
                    participate.innerText = "取消參加";
               
                    tour_add_people = parseInt(now_people) + 1;
                    this.innerText = "取消參加";
                 

                    var xhr6 = new XMLHttpRequest();
                    //聯繫伺服器物件
                    xhr6.open('post', "./php/tour_add_people.php", true);
                    xhr6.onload = function () {
                        let add_people = this.responseText;
                        $element(".number_of_participants").innerText = add_people;
                        //-------------------------------------------進度bar功能----------------------------------------
                        var progress_bar = $element(".progress-bar");


                        var rate = parseInt(add_people) / parseInt(max_people) * 100;
                        progress_bar.style.width = `${rate}%`;
                        //-------------------------------------------進度bar功能----------------------------------------
                        location.reload();

                    }
                    xhr6.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                   
                    xhr6.send("tour_no=" + chat_tour + "&number_of_participants=" + tour_add_people);

                }
                else if (this.innerText == "取消參加") {
                    alert("確定要取消參加嗎?")
                    this.innerText = "立即加入>";
                    localStorage.removeItem(`tour1`, chat_tour);
                    tour_add_people = parseInt(now_people) - 1;
                    var xhr6 = new XMLHttpRequest();
                    //聯繫伺服器物件
                    xhr6.open('post', "./php/tour_add_people.php", true);
                    xhr6.onload = function () {
                        let add_people = this.responseText;
                        $element(".number_of_participants").innerText = add_people;
                        //-------------------------------------------進度bar功能----------------------------------------
                        var progress_bar = $element(".progress-bar");
                        var rate = parseInt(add_people) / parseInt(max_people) * 100;
                        progress_bar.style.width = `${rate}%`;
                        //-------------------------------------------進度bar功能----------------------------------------

                    }
                    xhr6.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    // alert("tour_no=" + chat_tour + "&number_of_participants=" + tour_add_people);
                    xhr6.send("tour_no=" + chat_tour + "&number_of_participants=" + tour_add_people);
                    location.reload();
                }



            } else {
                alert("請先登入會員!")
                $element("#indexLogin").style.display = "block";
                $element("#login_page1").style.display = "block";
            }
        }
    }
    //-------------------------------------------跳出會員----------------------------------------
    //------------------------------------------人數滿變色----------------------------------------
    if (now_people == max_people) {
        participate = $element("#participate");
        participate.innerText = "已額滿";
        participate.onclick = function () {
            //讓他點不了
            return false;
        }
        participate.classList.remove("btn-outline");
        participate.classList.add("activity_end");
    }
    //-------------------------------------------人數滿變色----------------------------------------

    //-------------------------------------------進度bar功能----------------------------------------
    var progress_bar = $element(".progress-bar");
    var now_people = $element(".number_of_participants").innerText;
    var max_people = $element(".max_of_participants").innerText;
    var rate = parseInt(now_people) / parseInt(max_people) * 100;
    progress_bar.style.width = `${rate}%`;

    //-------------------------------------------進度bar功能----------------------------------------












    //-------------------------------------------關掉燈箱----------------------------------------
    //關掉燈箱
    $('#cancelMsgBtn2').click(function () {
        $('.spotWroteMsgBG').fadeOut();
    });



    $('.spotWroteMsgBG2').fadeOut();
    // 打開燈箱
    $('.OpenwriteMsgBox2').click(function () {

        if ($('#login_btn').text() == '登出') {
            $('.spotWroteMsgBG').fadeIn();

        } else {
            alert("請先登入會員");
            $id("indexLogin").style.display = "block";
            $id("login_page1").style.display = "block";
        }
    });
    function sendTourMsg() {
        // alert("data_info");
        data_info = "tour_no=" + document.getElementById("tourMsgNo").value + "&tour_msg_content=" + document.getElementById("tourMsg").value;
        var xhr1 = new XMLHttpRequest();
        //聯繫伺服器物件
        xhr1.open('post', './php/tour_write_msg.php', false);
        xhr1.onload = function () {
            if (xhr.status == 200) {
                alert(xhr.responseText);
            } else {
                alert(xhr.status);
            }
        }
        xhr1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr1.send("tour_no=" + document.getElementById("tourMsgNo").value + "&tour_msg_content=" + document.getElementById("tourMsg").value);
        // let xhr = new XMLHttpRequest();
        // xhr.onload = function () {
        //     if (xhr.status == 200) {
        //         alert(xhr.responseText);

        //     } else {
        //         alert(xhr.status);
        //     }
        // }
        // let url = "./php/tour_write_msg.php";
        // xhr.open("post", url, true);
        // xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        // let data_info = "tour_no=" + document.getElementById("tourMsgNo").value + "&tour_msg_content=" + document.getElementById("tourMsg").value;
      
        // xhr1.send(data_info);
    }
    var sendTourMsg1 = document.getElementById("sendSpotMsg");
    sendTourMsg1.onclick = sendTourMsg;

    //-------------------------------------------跳出會員----------------------------------------




























}
window.onload = doFirst;






