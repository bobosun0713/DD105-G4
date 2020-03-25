function $id(id){
    return document.getElementById(id);
}

//刪除食物
function delete_this_food(){
    
}


//修改食物
function manage_this_food(){
    if( this.innerText == '修改'){
        //btn樣式修改
        this.innerText = '儲存';
        this.classList.remove('btn-dark');
        this.classList.add('btn-info');

        //把原本的值通通塞進input
        food_info_status_change();

    }else{
        //btn樣式修改
        this.innerText = '修改';
        this.classList.add('btn-dark');
        this.classList.remove('btn-info');

        //把input欄位拿掉
        food_info_status_change();

        //觸發送出隱藏表單的功能
        update_food_info();
    }
}

//修改食物狀態
function food_info_status_change(){
    let food_info_input = document.querySelectorAll('.food_info_input');
    let food_info_txt = document.querySelectorAll('.food_info_txt');

    for(let i =0; i<food_info_input.length; i++){
        let each_food_info_input = food_info_input[i];
        let each_food_info_txt = food_info_txt[i]
        
        if( each_food_info_input.style.display == "none"){
            each_food_info_input.style.display = "block";
            each_food_info_txt.style.display = "none";
        }else{
            each_food_info_input.style.display = "none";
            each_food_info_txt.style.display = "block";
        }
    }
}

//新增食物景點
function create_new_food(){
    document.querySelector
}

//送出隱藏表單的功能
function update_food_info(){

}


window.addEventListener('load', function(){
    $id('delete_this_food').addEventListener('click', delete_this_food, false);
    $id('manage_this_food').addEventListener('click', manage_this_food, false);
    $id('create_new_food').addEventListener('click', create_new_food, false);
})