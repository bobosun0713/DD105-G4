function $id(id) {
    return document.getElementById(id)
}

//==============================修改管理員
function manage_this_admin() {
    let this_admin_info = this.parentNode.parentNode
    let admin_info_txt = this_admin_info.querySelectorAll(".admin_info_txt")
    let admin_info_input = this_admin_info.querySelectorAll(".admin_info_input")

    if (this.innerText == "修改") {
        //btn樣式修改
        this.innerText = "儲存"
        this.classList.remove("btn-dark")
        this.classList.add("btn-info")

        //修改食物狀態
        //把原本的值通通塞進input
        for (let i = 0; i < admin_info_input.length; i++) {
            let each_admin_info_input = admin_info_input[i]
            let each_food_info_txt = admin_info_txt[i]
            each_admin_info_input.style.display = "block"
            each_food_info_txt.style.display = "none"
        }
    } else {
        //btn樣式修改
        this.innerText = "修改"
        this.classList.add("btn-dark")
        this.classList.remove("btn-info")

        //觸發送出隱藏表單的功能
        $id('form_admin_no').value = this_admin_info.firstElementChild.innerText;
        $id('form_admin_name').value = this_admin_info.querySelectorAll('.admin_info_input')[0].value;
        $id('form_admin_id').value = this_admin_info.querySelectorAll('.admin_info_input')[1].value;
        $id('form_admin_psw').value = this_admin_info.querySelectorAll('.admin_info_input')[2].value;

        let form_admin_no = $id('form_admin_no').value;
        let form_admin_name = $id('form_admin_name').value;
        let form_admin_id = $id('form_admin_id').value;
        let form_admin_psw = $id('form_admin_psw').value;

        console.log(form_admin_no);
        console.log(form_admin_name);
        console.log(form_admin_id);
        console.log(form_admin_psw);

        //呼叫ajax把php傳進去
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.status == 200){
                alert(xhr.responseText);
            }else{
                alert(xhr.status);
            }
        }

        let url = "./php/backend_admin_update.php";
        xhr.open("post", url, true);

        let formData = new FormData();
        formData.append('admin_no', form_admin_no);
        formData.append('admin_name', form_admin_name);
        formData.append('admin_id', form_admin_id);
        formData.append('admin_psw', form_admin_psw);
        // console.log(formData)
        xhr.send(formData);

        //把原本的input關起來
        //把input的value送進span裏
        for (let i = 0; i < admin_info_input.length; i++) {
            let each_admin_info_input = admin_info_input[i];
            let each_admin_info_txt = admin_info_txt[i];
            each_admin_info_input.style.display = "none"
            each_admin_info_txt.style.display = "block"

            admin_info_txt[i].innerText = each_admin_info_input.value;
        }
    }
}


//==============================刪除管理員
function delete_this_admin() {

    let this_admin_no = this.parentNode.parentNode.firstElementChild.innerText;

    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            alert(xhr.responseText);
            location.href= "./backend_admin.html";
        }else{
            alert(xhr.status);
        }
    }

    let url = "./php/backend_admin_delete.php";
    xhr.open("post", url, true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    let data_info = "admin_no="+ this_admin_no;
    xhr.send(data_info);
}

//==============================修改管理員權限
function change_admin_status(){
    let this_admin_status;
    let this_admin_no = this.parentNode.parentNode.parentNode.firstElementChild.innerText;
    if( this.checked == true ){
        //下架
        this_admin_status = 0;
    }else{
        this_admin_status = 1;
    }

    //呼叫ajax把php傳進去
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            alert(xhr.responseText);
        }else{
            alert(xhr.status);  
        }
    }

    let url = "./php/backend_admin_status.php";
    xhr.open("post", url, true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    let data_info = "admin_status=" + this_admin_status + "&admin_no="+ this_admin_no;
    xhr.send(data_info);

}


//==============================載入管理員
function load_all_admin(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status == 200) {
  
        show_all_admin(xhr.responseText);
      } else {
        alert(xhr.status);
      }
    }
  
    var url = "./php/backend_admin_load.php";
    xhr.open("Get", url, true);
    xhr.send(null);

}

function show_all_admin(jsonStr){
    let admin = JSON.parse(jsonStr);
    let html = "";

    for (let i = 0; i < admin.length; i++) {
      html += `<tr>
                <td>${admin[i].admin_no}</td>
                
                <td>
                    <span class="admin_info_txt" style="display: block;">${admin[i].admin_name}</span>
                    <input type="text" class="admin_info_input" style="display: none;" value="${admin[i].admin_name}">
                </td>

                <td>
                    <span class="admin_info_txt" style="display: block;">${admin[i].admin_id}</span>
                    <input type="text" class="admin_info_input" style="display: none;" value="${admin[i].admin_id}">
                </td>

                <td>
                    <span class="admin_info_txt" style="display: block;">${admin[i].admin_psw}</span>
                    <input type="text" class="admin_info_input" style="display: none;" value="${admin[i].admin_psw}">
                </td>

                <td class="">
                    <label class="switch switch-pill switch-success">
                        <input type="checkbox" class="switch-input change_admin_status">
                        <span class="switch-slider"></span>
                    </label>
                </td>

                <td>
                    <button type="button" class="btn btn-dark manage_this_admin">
                    修改                    
                </button> 
                <td>
                    <button type="button" class="btn btn-danger delete_this_admin">
                    刪除         
                    </button>
                </td>
                </tr>`;
    }
    document.querySelector("#adminTable").innerHTML = html;


    //先load完再註冊事件處理器
    let admin_List = document.querySelectorAll("#adminTable tr")

    for (let x = 0; x < admin_List.length; x++) {
        // alert(admin_List.length);
        admin_List[x].querySelector(".manage_this_admin").addEventListener("click", manage_this_admin, false);
        admin_List[x].querySelector(".delete_this_admin").addEventListener("click", delete_this_admin, false);
        admin_List[x].querySelector(".change_admin_status").addEventListener("click", change_admin_status, false);
        console.log( admin[x].admin_authority );

        if( admin[x].admin_authority == 0){
            document.querySelectorAll(".change_admin_status")[x].checked = true;

        }
        // alert('aaaaa');
    }

    // for (let i = 0; i < admin.length; i++) {
    //     if( admin[i].admin_authority == 0){
    //         admin_List[i].querySelector(".change_admin_status").checked == true;
    //     }
    // }


}

window.addEventListener("load", function() {

    load_all_admin();
})
