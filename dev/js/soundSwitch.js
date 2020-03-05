window.addEventListener('load', function() {
    var soundBtn = document.getElementById('soundClick');
    var music = document.getElementById('music');
    var soundTxt = document.getElementById('soundTxt');

    soundBtn.onclick = function() {
        if (music.paused) {
            music.play();
            soundBtn.src = '../img/icon/music_btn_off.svg';
            soundTxt.innerText = "Sound Off";

        } else {
            music.pause();
            soundBtn.src = '../img/icon/music_btn_on.svg';
            soundTxt.innerText = "Sound On";
        }
    }
})
