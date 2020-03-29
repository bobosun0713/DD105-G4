function $element(element) {
    return document.querySelector(element)
}
function $elements(elements) {
    return document.querySelectorAll(elements)
}
function doFirst() {
    //-------------------------------------------進度bar功能----------------------------------------
    var progress_bar = $element(".progress-bar");
    var now_people = $element(".number_of_participants").innerText;
    var max_people = $element(".max_of_participants").innerText;
    var rate = parseInt(now_people) / parseInt(max_people) * 100;
    progress_bar.style.width = `${rate}%`;

    //-------------------------------------------進度bar功能----------------------------------------

    //------------------------------------------人數滿變色----------------------------------------
    if (now_people == max_people) {
        var participate = $element("#participate");
        participate.innerText = "已截止";
        participate.onclick = function () {
            //讓他點不了
            return false;
        }
        participate.classList.remove("btn-outline");
        participate.classList.add("activity_end");
    }
    //-------------------------------------------人數滿變色----------------------------------------

    //-------------------------------------------判斷行程----------------------------------------
    var tourSpotTxt = $elements(".tourSpotTxt");
    var tour_number = $element(".tour_number");
    var statusCircle = $elements(".statusCircle");
    var circle_in = $element(".tourStatus ul");
    if (tourSpotTxt.length == 2) {
        tour_number.innerText = "二";
        // p_circle = document.createElement('p');
        // p_circle.setAttribute('class', 'circle');
        // statusCircle[1].appendChild(p_circle);
        p_line = document.createElement('p');
        p_line.setAttribute('class', 'line');
        statusCircle[0].appendChild(p_line);

        statusCircle = document.createElement('li');
        statusCircle.setAttribute('class', 'statusCircle');
        circle_in.appendChild(statusCircle);

        p_circle = document.createElement('p');
        p_circle.setAttribute('class', 'circle');
        statusCircle.appendChild(p_circle);

    } else if (tourSpotTxt.length == 1) {
        tour_number.innerText = "一";

    } else {

        for (let i = 0; i < 3; i++) {
            statusCircle = document.createElement('li');
            statusCircle.setAttribute('class', 'statusCircle');
            circle_in.appendChild(statusCircle);


            p_circle = document.createElement('p');
            p_circle.setAttribute('class', 'circle');
            statusCircle.appendChild(p_circle);
            if (i <= 1) {
                p_line = document.createElement('p');
                p_line.setAttribute('class', 'line');
                statusCircle.appendChild(p_line);
            }
        }


    }
    //-------------------------------------------判斷行程----------------------------------------



}
window.onload = doFirst;






