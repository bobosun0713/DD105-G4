function $id(id) {
    return document.getElementById(id);
}


//==============================修改食物
function manage_this_food() {
    let this_food_info = this.parentNode.parentNode;
    let food_info_txt = this_food_info.querySelectorAll('.food_info_txt');
    let food_info_input = this_food_info.querySelectorAll('.food_info_input');

    if (this.innerText == '修改') {
        //btn樣式修改
        this.innerText = '儲存';
        this.classList.remove('btn-dark');
        this.classList.add('btn-info');

        //修改食物狀態
        //把原本的值通通塞進input
        for (let i = 0; i < food_info_input.length; i++) {
            let each_food_info_input = food_info_input[i];
            let each_food_info_txt = food_info_txt[i]
            each_food_info_input.style.display = "block";
            each_food_info_txt.style.display = "none";
        }


    } else {
        //btn樣式修改
        this.innerText = '修改';
        this.classList.add('btn-dark');
        this.classList.remove('btn-info');


        //觸發送出隱藏表單的功能
        $id('form_food_no').value = this_food_info.firstElementChild.innerText;
        $id('form_food_name').value = this_food_info.querySelectorAll('.food_info_input')[0].value;
        $id('form_food_location').value = this_food_info.querySelectorAll('.food_info_input')[1].value;
        $id('form_food_content').value = this_food_info.querySelectorAll('.food_info_input')[2].value;

        let form_food_no = $id('form_food_no').value;
        let form_food_name = $id('form_food_name').value;
        let form_food_location = $id('form_food_location').value;
        let form_food_content = $id('form_food_content').value;


        console.log(form_food_no);
        console.log(form_food_name);
        console.log(form_food_location);
        console.log(form_food_content);


        //呼叫ajax把php傳進去
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.status == 200){
                alert(xhr.responseText);
                location.href= "./backend_food_manage.php";
            }else{
                alert(xhr.status);  
            }
        }
  
        let url = "./php/backend_food_update.php";
        xhr.open("post", url, true);

        let formData = new FormData();
        formData.append('food_no', form_food_no);
        formData.append('food_name', form_food_name);
        formData.append('food_location', form_food_location);
        formData.append('food_content', form_food_content);
        console.log(formData)
        xhr.send(formData);

        //把原本的input關起來
        //把input的value送進span裏
        for (let i = 0; i < food_info_input.length; i++) {
            let each_food_info_input = food_info_input[i];
            let each_food_info_txt = food_info_txt[i]
            each_food_info_input.style.display = "none";
            each_food_info_txt.style.display = "block";
        }

    }
}



//==============================新增食物景點
function create_new_food() {
    
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            alert(xhr.responseText);
            location.href= "./backend_food_manage.php";
        }else{
            alert(xhr.status);  
        }
    }

    let url = "./php/backend_food_create.php";
    xhr.open("post", url, true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhr.send(null);
}

//==============================刪除食物
function delete_this_food() {

    let this_food_no = this.parentNode.parentNode.firstElementChild.innerText;

    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            alert(xhr.responseText);
            location.href= "./backend_food_manage.php";
        }else{
            alert(xhr.status);  
        }
    }

    let url = "./php/backend_food_delete.php";
    xhr.open("post", url, true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    let data_info = "food_no="+ this_food_no;
    xhr.send(data_info);
}

//==============================修改食物狀態(0是上架/1是下架)
function change_this_food_status(){

    let this_food_status;
    let this_food_no = this.parentNode.parentNode.parentNode.firstElementChild.innerText;
    if( this.checked == true ){
        //下架
        this_food_status = 0;
    }else{
        this_food_status = 1;
    }

    //呼叫ajax把php傳進去
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            alert(xhr.responseText);
            console.log(data_info)
        }else{
            alert(xhr.status);  
        }
    }

    let url = "./php/backend_food_status.php";
    xhr.open("post", url, true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    let data_info = "food_status=" + this_food_status + "&food_no="+ this_food_no;
    xhr.send(data_info);

}



//==============================上傳食物圖片

function upload_food_img(){
    // alert("AAAAA");
    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        if(xhr.status == 200){
            alert(xhr.responseText);
            location.href= "./backend_food_manage.php";
        }else{
            alert(xhr.status);  
        }
    }
    
    let url = "./php/backend_food_upload_img.php";
    xhr.open("post", url, true);

    let formData = new FormData();
    let this_food_image = this.parentNode.firstElementChild.files[0];
    let this_food_no = this.parentNode.parentNode.firstElementChild.innerText;
    formData.append('food_img', this_food_image);
    formData.append('food_no', this_food_no);
    console.log(formData);
    xhr.send(formData);
}





window.addEventListener('load', function () {

    let food_List = document.querySelectorAll('tbody tr');
    for (let x = 0; x < food_List.length; x++) {
        food_List[x].querySelector('.manage_this_food').addEventListener('click', manage_this_food, false);
        food_List[x].querySelector('.delete_this_food').addEventListener('click', delete_this_food, false);
        food_List[x].querySelector('.change_food_status').addEventListener('click', change_this_food_status, false);
    }



    //找還沒上傳圖片的list
    let without_img_food_List = document.querySelectorAll('.food_info_img_send');
    for (let y = 0; y < without_img_food_List.length; y++) {
        without_img_food_List[y].addEventListener('click', upload_food_img, false);
    }

    $id('create_new_food').addEventListener('click', create_new_food, false);

    // let this_admin_auth = $id('admin_status_hidden').value;
    // if( this_admin_auth != 0){
    //     alert('AAAAA');
    //     document.querySelectorAll('.btn').disabled = true;
    // }
})