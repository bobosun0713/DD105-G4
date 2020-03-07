function $id(id) {
    return document.getElementById(id)
}

window.addEventListener('load', function () {
    let curIndex = 0
    let spotDisplay = document.querySelector('#spotInfoWrap')
    let spell1 = document.querySelector('#spell1')
    let spell2 = document.querySelector('#spell2')
    let spell3 = document.querySelector('#spell3')

    

    spell1.style.opacity = 1

    //點擊輪播左右滑動，符咒消失出現
    $id('leftScroll').onclick = function () {
        curIndex = curIndex + 1
        spotDisplay.style.left = -410 * curIndex + 'px'
        $id('rightScroll').disabled = false
        if (curIndex == 2) {
            $id('leftScroll').disabled = true
            spell2.style.opacity = 0
            spell3.style.opacity = 1
        } else if (curIndex == 1) {
            spell1.style.opacity = 0
            spell2.style.opacity = 1
        }
    }

    $id('rightScroll').onclick = function () {
        curIndex = curIndex - 1
        spotDisplay.style.left = -410 * curIndex + 'px'
        $id('leftScroll').disabled = false
        if (curIndex == 0) {
            $id('rightScroll').disabled = true
            spell2.style.opacity = 0
            spell1.style.opacity = 1
        } else if (curIndex == 1) {
            spell2.style.opacity = 1
            spell3.style.opacity = 0
        }
    }

    //mouse
    let location = this.document.querySelectorAll('.location');
    // console.log(location.length);
    for (let i = 0; i < location.length; i++) {

        location[i].onmouseover = function (e) {
            e.target.nextElementSibling.style.opacity = 1;
        }

        location[i].onmouseout = function (e) {
            e.target.nextElementSibling.style.opacity = 0;
        }
    }

})
