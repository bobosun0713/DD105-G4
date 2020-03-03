

window.addEventListener('load',function(){

  let hamburger = document.getElementsByClassName('hamburger');
  hamburger.onclick = function(){
    if( hamburger.classList.contains("is-active")){
        hamburger.classList.remove("is-active");
    }else{
        hamburger.classList.add("is-active");
    }
  }
});