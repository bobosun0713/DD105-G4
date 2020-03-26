
//getGameDB 撈試膽測驗DB資料
window.addEventListener("load", function () {

  getGameDB();
  
}, false);

function showgameDB(jsonStr) {
  let gameDB = JSON.parse(jsonStr);
  let html="";
    for (let i = 0; i < gameDB.length; i++) {
      html += `<tr>
            <td>${gameDB[i].quiz_no}</td>
            <td><input type="text" class="form-control" placeholder="" value="${gameDB[i].quiz_question}"></td>
            <td><input type="text" class="form-control" placeholder="" value="${gameDB[i].quiz_opt1}"></td>
            <td><input type="text" class="form-control" placeholder="" value="${gameDB[i].quiz_opt2}"></td>
            <td><input type="text" class="form-control" placeholder="" value="${gameDB[i].quiz_opt3}"></td>
            <td>
                <select class="custom-select-sm">
                  <option selected>${gameDB[i].quiz_opt1_point}</option>
                  <option value="1">0</option>
                  <option value="2">1</option>
                  <option value="3">1.5</option>
                </select>
            </td>
            <td>
                <select class="custom-select-sm">
                  <option selected>${gameDB[i].quiz_opt2_point}</option>
                  <option value="1">0</option>
                  <option value="2">1</option>
                  <option value="3">1.5</option>
                </select>
            </td>
            <td>
                <select class="custom-select-sm">
                  <option selected>${gameDB[i].quiz_opt3_point}</option>
                  <option value="1">0</option>
                  <option value="2">1</option>
                  <option value="3">1.5</option>
                </select>
            </td>
            <td><div><img src="${gameDB[i].quiz_img}"></div></td>

            <td><button type="button" class="btn btn-danger">刪除</button></td>
            <td><button type="button" class="btn btn-dark updatebtn">儲存</button></td>
            </tr>`;
    }

  document.querySelector("#showPanel_gameDB").innerHTML = html;
  //html撈到db資料後註冊updatebtn事件
  Dom_GameDB();
}


function getGameDB() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      //modify here
      showgameDB(xhr.responseText);
    } else {
      alert(xhr.status);
    }
  }

  var url = "../../getGameDB_JASON.php";
  xhr.open("Get", url, true);
  xhr.send(null);
}

//---------------------------------------------------


//getGameDB 修改試膽測驗DB資料
function Dom_GameDB(){
 
  let updatebtn=document.querySelectorAll(".updatebtn");
  
  for(let i=0;i<updatebtn.length;i++){
    updatebtn[i].onclick=getGameDB_quiz_no;
    
  }
}

function getGameDB_quiz_no(e){
  let get_quiz_no=e.target.parentNode.parentNode.parentNode.firstElementChild.firstElementChild
  let get_tr=e.target.parentNode.parentNode
  console.log(get_tr,"get_tr")
  
  updateGameDB(get_quiz_no);
}

function updateGameDB(get_quiz_no) {

  
  // console.log(get_quiz_no,"what is get_quiz_no")

  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      //modify here
      showgameDB(xhr.responseText);
    } else {
      alert(xhr.status);
    }
  }

  var url = "../../updateGameDB_JASON.php";
   
  xhr.open("Post", url, true);
  xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
 

  //送出資料
  let data_info = "memId=" + document.getElementById("memId").value;
  xhr.send(null);
}
