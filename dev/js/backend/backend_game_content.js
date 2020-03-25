

function showgameDB(jsonStr){
    let gameDB = JSON.parse(jsonStr);
    let html;
    if(gameDB.quiz_no){
      html = `<tbody>
                <tr>
                <td>1</td>
                <td><div><img src="${gameDB.quiz_img}"></div></td>
                <td><input type="text" class="form-control" placeholder="">${gameDB.quiz_img}</td>
                <td><input type="text" class="form-control" placeholder=""></td>
                <td><input type="text" class="form-control" placeholder=""></td>
                <td>
                    <select class="custom-select custom-select-sm">
                    <option selected>點選輸入分數</option>
                    <option value="1">0</option>
                    <option value="2">1</option>
                    <option value="3">1.5</option>
                    </select>
                </td>
                <td>
                    <select class="custom-select custom-select-sm">
                    <option selected>點選輸入分數</option>
                    <option value="1">0</option>
                    <option value="2">1</option>
                    <option value="3">1.5</option>
                    </select>
                </td>
                <td>
                    <select class="custom-select custom-select-sm">
                    <option selected>點選輸入分數</option>
                    <option value="1">0</option>
                    <option value="2">1</option>
                    <option value="3">1.5</option>
                    </select>
                </td>

                <td><button type="button" class="btn btn-danger">刪除</button></td>
                <td><button type="button" class="btn btn-dark">儲存</button></td>
                </tr>
            </tbody>`;

    }else{
      html = "<center>查無題庫資料</center>";
    }
    document.getElementById("showPanel").innerHTML = html;
}


function getGameDB(){
    var xhr = new XMLHttpRequest();
    xhr.onload=function (){
         if( xhr.status == 200 ){
          //modify here
            showgameDB(xhr.responseText);
         }else{
            alert( xhr.status );
         }
    }
    
    var url = "getGameDB_JASON.php";
    xhr.open("Get", url, true);
    xhr.send( null );
  }