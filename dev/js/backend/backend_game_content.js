
//getGameDB 撈試膽測驗DB資料===============================================================
window.addEventListener("load", function () {

  getGameDB();
  // //html撈到db資料後註冊insertbtn事件
  // Dom_GameDB_insertbtn();
}, false);

function showgameDB(jsonStr) {
  let gameDB = JSON.parse(jsonStr);
  let html = "";
  for (let i = 0; i < gameDB.length; i++) {
    html += `<tr>
            <td>${gameDB[i].quiz_no}</td>
            <td p-3><input type="text" class="form-control" placeholder="" value="${gameDB[i].quiz_question}"></td>
            <td><input type="text" class="form-control" placeholder="" value="${gameDB[i].quiz_opt1}"></td>
            <td><input type="text" class="form-control" placeholder="" value="${gameDB[i].quiz_opt2}"></td>
            <td><input type="text" class="form-control" placeholder="" value="${gameDB[i].quiz_opt3}"></td>
            <td>
                <select class="custom-select-sm opt1_select_point">
                  <option value="0">${gameDB[i].quiz_opt1_point}</option>
                  <option value="1">0</option>
                  <option value="2">1</option>
                  <option value="3">1.5</option>
                </select>
            </td>
            <td>
                <select class="custom-select-sm opt2_select_point">
                  <option value="0">${gameDB[i].quiz_opt2_point}</option>
                  <option value="1">0</option>
                  <option value="2">1</option>
                  <option value="3">1.5</option>
                </select>
            </td>
            <td>
                <select class="custom-select-sm opt3_select_point">
                  <option value="0">${gameDB[i].quiz_opt3_point}</option>
                  <option value="1">0</option>
                  <option value="2">1</option>
                  <option value="3">1.5</option>
                </select>
            </td>
            <td><div><img src="../img/game/${gameDB[i].quiz_img}" width="200px"></div></td>

            <td><button type="button" class="btn btn-danger deletebtn">刪除</button></td>
            <td><button type="button" class="btn btn-dark updatebtn">儲存</button></td>
            </tr>`;
  }

  document.querySelector("#showPanel_gameDB").innerHTML = html;
  //html撈到db資料後註冊updatebtn事件
  Dom_GameDB_updatebtn();
  //html撈到db資料後註冊deletebtn事件
  Dom_GameDB_deletebtn();

}


function getGameDB() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {

      showgameDB(xhr.responseText);
    } else {
      alert(xhr.status);
    }
  }

  var url = "./php/getGameDB_JASON.php";
  xhr.open("Get", url, true);
  xhr.send(null);
}

//getGameDB 修改試膽測驗DB資料==============================================================
function Dom_GameDB_updatebtn() {

  let updatebtn = document.querySelectorAll(".updatebtn");

  for (let i = 0; i < updatebtn.length; i++) {
    updatebtn[i].onclick = getGameDB_quiz_no;


  }
}

function getGameDB_quiz_no(e) {
  let get_quiz_no = e.target.parentNode.parentNode.firstElementChild.innerHTML

  console.log(get_quiz_no, "點到?")
  let get_tr = e.target.parentNode.parentNode

  //取出input value
  let get_tr_td_input = get_tr.querySelectorAll("td input")
  let get_quiz_question = get_tr_td_input[0].value
  let get_quiz_opt1 = get_tr_td_input[1].value
  let get_quiz_opt2 = get_tr_td_input[2].value
  let get_quiz_opt3 = get_tr_td_input[3].value
  //取出selection option 的innerText
  //opt1 point
  let get_tr_td_select_option1 = get_tr.querySelectorAll("td .opt1_select_point option")
  let get_tr_td_select_option2 = get_tr.querySelectorAll("td .opt2_select_point option")
  let get_tr_td_select_option3 = get_tr.querySelectorAll("td .opt3_select_point option")
  for (let i = 0; i < get_tr_td_select_option1.length; i++) {
    if (get_tr_td_select_option1[i].selected == true) {
      var get_quiz_opt1_point = get_tr_td_select_option1[i].innerText
      // console.log(get_quiz_opt1_point,"whatwaht11")
    }
  }
  //opt2 point
  for (let i = 0; i < get_tr_td_select_option2.length; i++) {
    if (get_tr_td_select_option2[i].selected == true) {
      var get_quiz_opt2_point = get_tr_td_select_option2[i].innerText
      // console.log(get_quiz_opt2_point,"whatwaht22")
    }
  }
  //opt3 point
  for (let i = 0; i < get_tr_td_select_option3.length; i++) {
    if (get_tr_td_select_option3[i].selected == true) {
      var get_quiz_opt3_point = get_tr_td_select_option3[i].innerText
      // console.log(get_quiz_opt3_point,"whatwaht33")
    }
  }

  updateGameDB(get_quiz_no, get_quiz_question, get_quiz_opt1, get_quiz_opt2, get_quiz_opt3, get_quiz_opt1_point, get_quiz_opt2_point, get_quiz_opt3_point);
}

function updateGameDB(get_quiz_no, get_quiz_question, get_quiz_opt1, get_quiz_opt2, get_quiz_opt3, get_quiz_opt1_point, get_quiz_opt2_point, get_quiz_opt3_point) {

  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      getGameDB();
      alert("修改題目成功");
      // show_updategameDB(xhr.responseText);
    } else {
      alert(xhr.status);
    }
  }

  var url = "./php/updateGameDB_JASON.php";

  xhr.open("Post", url, true);
  let formData_update = new FormData();
  formData_update.append('quiz_no', get_quiz_no);
  formData_update.append('quiz_question', get_quiz_question);
  formData_update.append('quiz_opt1', get_quiz_opt1);
  formData_update.append('quiz_opt2', get_quiz_opt2);
  formData_update.append('quiz_opt3', get_quiz_opt3);
  formData_update.append('quiz_opt1_point', get_quiz_opt1_point);
  formData_update.append('quiz_opt2_point', get_quiz_opt2_point);
  formData_update.append('quiz_opt3_point', get_quiz_opt3_point);

  // xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

  //送出資料
  xhr.send(formData_update);
}


//getGameDB 刪除試膽測驗DB資料==============================================================
function Dom_GameDB_deletebtn() {

  let deletebtn = document.querySelectorAll(".deletebtn");

  for (let i = 0; i < deletebtn.length; i++) {
    deletebtn[i].onclick = get_deleteGameDB_quiz_no;

  }
}
function get_deleteGameDB_quiz_no(e) {
  let get_delete_quiz_no = e.target.parentNode.parentNode.firstElementChild.innerHTML

  deleteGameDB(get_delete_quiz_no);
}

function deleteGameDB(get_delete_quiz_no) {

  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      getGameDB();
      alert("刪除題目成功");
      // show_updategameDB(xhr.responseText);

    } else {
      alert(xhr.status);
    }
  }

  var url = "./php/deleteGameDB_JASON.php";
  xhr.open("Post", url, true);
  let formData_update = new FormData();
  formData_update.append('quiz_no', get_delete_quiz_no);

  //送出資料
  xhr.send(formData_update);
}


