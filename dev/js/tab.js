
function init() {
   
     adventure_tabs = document.querySelectorAll('.adventure_tab span a');
     adventure_contents = document.querySelectorAll('.adventure_content');
     console.log(adventure_tabs );
    for (var i = 0; i < adventure_tabs.length; i++) {
        adventure_tabs[i].classList.remove("show_tab");
           adventure_contents[i].classList.remove("adventure_content");
        adventure_contents[i].classList.add("hide_tab_content");
        adventure_tabs[i].onclick = tabChange;
        adventure_tabs[0].classList.add("show_tab");
        adventure_contents[0].classList.remove("hide_tab_content");
        adventure_contents[0].classList.add("adventure_content");
    }
}
function tabChange() {
 
    for (let i = 0; i < adventure_tabs.length; i++) {
        if (adventure_tabs[i] === this) {
            adventure_tabs[i].classList.add("show_tab");
            adventure_contents[i].classList.add("adventure_content");
      
        } else {
            // tab_heads[i].className = '';
            adventure_tabs[i].classList.remove("show_tab");
            adventure_contents[i].classList.remove("adventure_content");
            adventure_contents[i].classList.add("hide_tab_content");
        }
    }
}

window.onload = init;