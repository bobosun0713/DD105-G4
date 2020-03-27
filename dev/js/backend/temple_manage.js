function $id(id) {
    return document.getElementById(id);
}


//==============================修改食物
function manage_this_temple() {
    let this_temple_info = this.parentNode.parentNode;
    let temple_info_txt = this_temple_info.querySelectorAll('.temple_info_txt');
    let temple_info_input = this_temple_info.querySelectorAll('.temple_info_input');

    if (this.innerText == '修改') {
        //btn樣式修改
        this.innerText = '儲存';
        this.classList.remove('btn-dark');
        this.classList.add('btn-info');

        //修改食物狀態
        //把原本的值通通塞進input
        for (let i = 0; i < temple_info_input.length; i++) {
            let each_temple_info_input = temple_info_input[i];
            let each_temple_info_txt = temple_info_txt[i]
            each_temple_info_input.style.display = "block";
            each_temple_info_txt.style.display = "none";
        }


    } else {
        //btn樣式修改
        this.innerText = '修改';
        this.classList.add('btn-dark');
        this.classList.remove('btn-info');


        //觸發送出隱藏表單的功能
        $id('form_temple_no').value = this_temple_info.firstElementChild.innerText;
        $id('form_temple_name').value = this_temple_info.querySelectorAll('.temple_info_input')[0].value;
        $id('form_temple_location').value = this_temple_info.querySelectorAll('.temple_info_input')[1].value;
        $id('form_temple_content').value = this_temple_info.querySelectorAll('.temple_info_input')[2].value;

        let form_temple_no = $id('form_temple_no').value;
        let form_temple_name = $id('form_temple_name').value;
        let form_temple_location = $id('form_temple_location').value;
        let form_temple_content = $id('form_temple_content').value;


        console.log(form_temple_no);
        console.log(form_temple_name);
        console.log(form_temple_location);
        console.log(form_temple_content);


        //呼叫ajax把php傳進去
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.status == 200){
                alert(xhr.responseText);
                location.href= "./backend_temple_manage.php";
            }else{
                alert(xhr.status);  
            }
        }
  
        let url = "./php/backend_temple_update.php";
        xhr.open("post", url, true);

        let formData = new FormData();
        formData.append('temple_no', form_temple_no);
        formData.append('temple_name', form_temple_name);
        formData.append('temple_location', form_temple_location);
        formData.append('temple_content', form_temple_content);
        console.log(formData)
        xhr.send(formData);

        //把原本的input關起來
        //把input的value送進span裏
        for (let i = 0; i < temple_info_input.length; i++) {
            let each_temple_info_input = temple_info_input[i];
            let each_temple_info_txt = temple_info_txt[i]
            each_temple_info_input.style.display = "none";
            each_temple_info_txt.style.display = "block";
        }

    }
}



//==============================新增食物景點
function create_new_temple() {
    
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            alert(xhr.responseText);
            location.href= "./backend_temple_manage.php";
        }else{
            alert(xhr.status);  
        }
    }

    let url = "./php/backend_temple_create.php";
    xhr.open("post", url, true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhr.send(null);
}

//==============================刪除食物
function delete_this_temple() {

    let this_temple_no = this.parentNode.parentNode.firstElementChild.innerText;

    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            alert(xhr.responseText);
            location.href= "./backend_temple_manage.php";
        }else{
            alert(xhr.status);  
        }
    }

    let url = "./php/backend_temple_delete.php";
    xhr.open("post", url, true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    let data_info = "temple_no="+ this_temple_no;
    xhr.send(data_info);
}

//==============================修改食物狀態(0是上架/1是下架)
function change_this_temple_status(){

    let this_temple_status;
    let this_temple_no = this.parentNode.parentNode.parentNode.firstElementChild.innerText;
    if( this.checked == true ){
        //下架
        this_temple_status = 0;
    }else{
        this_temple_status = 1;
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

    let url = "./php/backend_temple_status.php";
    xhr.open("post", url, true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    let data_info = "temple_status=" + this_temple_status + "&temple_no="+ this_temple_no;
    xhr.send(data_info);

}



//==============================上傳食物圖片

function upload_temple_img(){
    // alert("AAAAA");
    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        if(xhr.status == 200){
            alert(xhr.responseText);
            location.href= "./backend_temple_manage.php";
        }else{
            alert(xhr.status);  
        }
    }
    
    let url = "./php/backend_temple_upload_img.php";
    xhr.open("post", url, true);

    let formData = new FormData();
    let this_temple_image = this.parentNode.firstElementChild.files[0];
    let this_temple_no = this.parentNode.parentNode.firstElementChild.innerText;
    formData.append('temple_img', this_temple_image);
    formData.append('temple_no', this_temple_no);
    console.log(formData);
    xhr.send(formData);
}





window.addEventListener('load', function () {

    let temple_List = document.querySelectorAll('tbody tr');
    for (let x = 0; x < temple_List.length; x++) {
        temple_List[x].querySelector('.manage_this_temple').addEventListener('click', manage_this_temple, false);
        temple_List[x].querySelector('.delete_this_temple').addEventListener('click', delete_this_temple, false);
        temple_List[x].querySelector('.change_temple_status').addEventListener('click', change_this_temple_status, false);
    }

    //找還沒上傳圖片的list
    let without_img_temple_List = document.querySelectorAll('.temple_info_img_send');
    for (let y = 0; y < without_img_temple_List.length; y++) {
        without_img_temple_List[y].addEventListener('click', upload_temple_img, false);
    }

    $id('create_new_temple').addEventListener('click', create_new_temple, false);
})