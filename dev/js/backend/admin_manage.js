function $id(id) {
    return document.getElementById(id)
}

//==============================修改食物
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
        // $id('form_admin_no').value = this_admin_info.firstElementChild.innerText;
        // $id('form_admin_name').value = this_admin_info.querySelectorAll('.admin_info_input')[0].value;
        // $id('form_admin_location').value = this_admin_info.querySelectorAll('.admin_info_input')[1].value;
        // $id('form_admin_content').value = this_admin_info.querySelectorAll('.admin_info_input')[2].value;

        // let form_admin_no = $id('form_admin_no').value;
        // let form_admin_name = $id('form_admin_name').value;
        // let form_admin_location = $id('form_admin_location').value;
        // let form_admin_content = $id('form_admin_content').value;

        // console.log(form_admin_no);
        // console.log(form_admin_name);
        // console.log(form_admin_location);
        // console.log(form_admin_content);

        //呼叫ajax把php傳進去
        // let xhr = new XMLHttpRequest();
        // xhr.onload = function(){
        //     if(xhr.status == 200){
        //         alert(xhr.responseText);
        //         location.href= "./backend_food_manage.php";
        //     }else{
        //         alert(xhr.status);
        //     }
        // }

        // let url = "./php/backend_food_update.php";
        // xhr.open("post", url, true);

        // let formData = new FormData();
        // formData.append('admin_no', form_admin_no);
        // formData.append('admin_name', form_admin_name);
        // formData.append('admin_location', form_admin_location);
        // formData.append('admin_content', form_admin_content);
        // console.log(formData)
        // xhr.send(formData);

        //把原本的input關起來
        //把input的value送進span裏
        for (let i = 0; i < admin_info_input.length; i++) {
            let each_admin_info_input = admin_info_input[i]
            let each_admin_info_txt = admin_info_txt[i]
            each_admin_info_input.style.display = "none"
            each_admin_info_txt.style.display = "block"
        }
    }
}

//==============================新增食物景點
function create_new_admin() {
    // let xhr = new XMLHttpRequest();
    // xhr.onload = function(){
    //     if(xhr.status == 200){
    //         alert(xhr.responseText);
    //         location.href= "./backend_food_manage.php";
    //     }else{
    //         alert(xhr.status);
    //     }
    // }
    // let url = "./php/backend_food_create.php";
    // xhr.open("post", url, true);
    // xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    // xhr.send(null);
}

//==============================刪除食物
// function delete_this_admin() {

//     let this_food_no = this.parentNode.parentNode.firstElementChild.innerText;

//     let xhr = new XMLHttpRequest();
//     xhr.onload = function(){
//         if(xhr.status == 200){
//             alert(xhr.responseText);
//             location.href= "./backend_food_manage.php";
//         }else{
//             alert(xhr.status);
//         }
//     }

//     let url = "./php/backend_food_delete.php";
//     xhr.open("post", url, true);
//     xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
//     let data_info = "admin_no="+ this_food_no;
//     xhr.send(data_info);
// }

window.addEventListener("load", function() {
    let admin_List = document.querySelectorAll("#adminTable tr")
    for (let x = 0; x < admin_List.length; x++) {
        // alert(admin_List.length);
        admin_List[x].querySelector(".manage_this_admin").addEventListener("click", manage_this_admin, false)
        admin_List[x].querySelector(".delete_this_admin").addEventListener("click", delete_this_admin, false)
    }

    $id("create_new_admin").addEventListener("click", create_new_admin, false)
})
