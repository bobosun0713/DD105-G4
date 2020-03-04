window.addEventListener('load', function(){
    var soundBtn = document.getElementById('soundClick');
    var music = document.getElementById("music");

    soundBtn.onclick = function(){
        
        if (music.paused) {
          music.play();
          soundBtn.src = "../img/icon/music_btn_on.svg";
        } else {
          music.pause();
          music_btn.src = "../img/icon/music_btn_off.svg";
        }
    }
    
});