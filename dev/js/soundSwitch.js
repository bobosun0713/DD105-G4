window.addEventListener('load', function() {
    var soundBtn = document.getElementById('soundClick');
    var music = document.getElementById('music');
    var soundTxt = document.getElementById('soundTxt');
    var hamburgerSoundBtn = document.getElementById('hamburgerSound');

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

    hamburgerSoundBtn.onclick = function() {
        if (music.paused) {
            music.play();
            hamburgerSoundBtn.innerText = "Sound Off";

        } else {
            music.pause();
            hamburgerSoundBtn.innerText = "Sound On";
        }
    }
})
