//自動取得螢幕寬度
getWidth();

function getWidth() {
    var screenwidth = document.body.clientWidth;
    // console.log(screenwidth, "寬")
    if (screenwidth < 1199) {
        document.querySelector('.cancel_ghost_group').style.display = 'none'

    } else {
        document.querySelector('.cancel_ghost_group').style.display = 'block'
    }
}



// create quiz
var startbtn = document.getElementById('startbtn')
startbtn.onclick = startGame

let recommendcardground = document.querySelectorAll('.recommendcardground')
for (i = 0; i < recommendcardground.length; i++) {
    recommendcardground[i].style.display = 'none'
}

document.querySelector('.test_score_title').style.display = 'none'
document.querySelector('.cancel_ghost_group').style.display = 'none'
//Mouseover /moustout 開始遊戲 /回到首頁 button
document.querySelector(".startbtn").onmouseover = mouseoverGhost1;
document.querySelector(".startbtn").onmouseout = mouseoutGhost1;
function mouseoverGhost1() {
    document.querySelector(".hoverghost").style.display = "block";
    document.querySelector(".hoverghost").style.transition = "all 1.5s linear;";

}
function mouseoutGhost1() {
    document.querySelector(".hoverghost").style.display = "none";

}
//Mouseover /moustout 開始遊戲 /回到首頁 button
document.querySelector(".gotoindex").onmouseover = mouseoverGhost2;
document.querySelector(".gotoindex").onmouseout = mouseoutGhost2;
function mouseoverGhost2() {
    document.querySelector(".hoverghost2").style.display = "block";
    document.querySelector(".hoverghost2").style.transition = "all 1.5s linear;";
}
function mouseoutGhost2() {
    document.querySelector(".hoverghost2").style.display = "none";
}

let shufflequestion, currentquestionIndex
function startGame() {
    //放cancel鬼
    getWidth();

    document.getElementById('startbtn').parentNode.style.display = 'none'
    document.getElementById('gotoindex').parentNode.style.display = 'none'
    document.querySelector('.progressblock').style.display = 'block'
    document.querySelector('.outercontainer').style.display = 'none'
    document.querySelector('.outercontainer2').style.display = 'none'


    currentquestionIndex = 0
    var randomNum = Math.floor(Math.random() * quiz_RowsCount)
    // var newQuestionArray=[];
    // for(let a=0;a<questions.length+1;a++){
    //     newQuestionArray.push(questions.splice(randomNum,1));
    // }
    // console.log(newQuestionArray)
    // console.log(questions.length)

    setnextquestion()
    document.getElementById('progress').innerHTML = currentquestionIndex + 1 + '/' + Qnum
    // console.log("A題庫剩"+questions.length)
}

function setnextquestion() {

    document.querySelector('#testheading').style.display = 'none'
    document.querySelector('#logoimg').style.display = 'none'
    document.querySelector('.buttons').style.display = 'block'
    document.querySelector('#progress').style.display = 'block'
    document.getElementsByClassName('innerimg')[0].src = quiz_img[currentquestionIndex].innerHTML
    document.getElementById('question').innerHTML = quiz_question[currentquestionIndex].innerHTML
    document.querySelectorAll('.choice')[0].innerHTML = quiz_opt1[currentquestionIndex].innerHTML
    document.querySelectorAll('.choice')[1].innerHTML = quiz_opt2[currentquestionIndex].innerHTML
    document.querySelectorAll('.choice')[2].innerHTML = quiz_opt3[currentquestionIndex].innerHTML
    document.querySelectorAll('.choice')[0].value = parseFloat(quiz_opt1_point[currentquestionIndex].innerHTML)
    document.querySelectorAll('.choice')[1].value = parseFloat(quiz_opt2_point[currentquestionIndex].innerHTML)
    document.querySelectorAll('.choice')[2].value = parseFloat(quiz_opt3_point[currentquestionIndex].innerHTML)
    // console.log('目前第幾題' + currentquestionIndex)
}

// display quiz
var btn = document.getElementsByClassName('choice')
for (let j = 0; j < 3; j++) {
    btn[j].onclick = btnClick
}
var total = 0
function btnClick(e) {
    for (let i = 0; i < 3; i++) {
        btn[i].innerHTML = ''
    }

    currentquestionIndex++
    if (currentquestionIndex == quiz_RowsCount) {

        for (let i = 0; i < 3; i++) {
            btn[i].innerHTML = ''
        }
        document.querySelector('.cancel_ghost_group').style.display = 'none'
        document.getElementById('question').innerHTML = ''
        document.querySelector('.buttons').style.display = 'none'
        document.querySelector('#progress').style.display = 'none'
        document.querySelector('.quizimg').style.display = 'none'
        document.getElementById('test_score').innerHTML = total;
        document.querySelector('#resultheading').style.display = 'block'
        document.querySelector('#resultheading').innerHTML = '分析結果'
        document.querySelector('#playagain_btn').style.display = 'inline-block'
        document.querySelector('#gotoindex_btn').style.display = 'inline-block'
        document.querySelector('.grid').style.backgroundImage = "url('../img/game/quizreport_bg.png')"
        document.querySelector('.recommendtitle').innerHTML = '為您推薦';
        document.querySelector('#dolphin_block').style.display = 'block'
        document.querySelector('.test_score_title').style.display = 'inline-block'
        if (total < 5) {
            let below5 = document.querySelectorAll(".below5")
            for (i = 0; i < below5.length; i++) {
                below5[i].style.display = 'flex'
            }
            document.querySelector('#resulttitle').innerHTML = types[0].resulttitle
            document.querySelector('#resultinnertext').innerHTML = types[0].resultinnertext
        } else if (total < 8) {
            let below8 = document.querySelectorAll(".below8")
            for (i = 0; i < below8.length; i++) {
                below8[i].style.display = 'flex'
            }
            document.querySelector('#resulttitle').innerHTML = types[1].resulttitle
            document.querySelector('#resultinnertext').innerHTML = types[1].resultinnertext


        } else {
            document.querySelector('#resulttitle').innerHTML = types[2].resulttitle
            document.querySelector('#resultinnertext').innerHTML = types[2].resultinnertext
            let above8 = document.querySelectorAll(".above8")
            for (i = 0; i < above8.length; i++) {
                above8[i].style.display = 'flex'
            }
        }
    }
    document.getElementsByClassName('innerimg')[0].src = quiz_img[currentquestionIndex].innerHTML
    document.getElementById('question').innerHTML = quiz_question[currentquestionIndex].innerHTML
    document.querySelectorAll('.choice')[0].innerHTML = quiz_opt1[currentquestionIndex].innerHTML
    document.querySelectorAll('.choice')[1].innerHTML = quiz_opt2[currentquestionIndex].innerHTML
    document.querySelectorAll('.choice')[2].innerHTML = quiz_opt3[currentquestionIndex].innerHTML
    document.querySelectorAll('.choice')[0].value = parseFloat(quiz_opt1_point[currentquestionIndex].innerHTML)
    document.querySelectorAll('.choice')[1].value = parseFloat(quiz_opt2_point[currentquestionIndex].innerHTML)
    document.querySelectorAll('.choice')[2].value = parseFloat(quiz_opt3_point[currentquestionIndex].innerHTML)


    // console.log("btnclick目前第幾題"+currentquestionIndex)
    document.getElementById('progress').innerHTML = currentquestionIndex + 1 + '/' + Qnum
    total = total + parseFloat(e.target.value * 2)
}
// create questions here 從game.php撈db table資料
//count sql撈出的 $gameRowsCount
var quiz_RowsCount = document.querySelectorAll(".quiz_length")[0].innerHTML

var quiz_question = document.querySelectorAll(".quiz_question")
var quiz_opt1 = document.querySelectorAll(".quiz_opt1")
var quiz_opt2 = document.querySelectorAll(".quiz_opt2")
var quiz_opt3 = document.querySelectorAll(".quiz_opt3")
var quiz_opt1_point = document.querySelectorAll(".quiz_opt1_point")
var quiz_opt2_point = document.querySelectorAll(".quiz_opt2_point")
var quiz_opt3_point = document.querySelectorAll(".quiz_opt3_point")
var quiz_img = document.querySelectorAll(".quiz_img")




var types = [
    { resulttitle: '【膽小如鼠型】', resultinnertext: '神經超級脆弱的你，恐怖承受力指數低到可憐。' },
    { resulttitle: '【冒充膽大型】', resultinnertext: '你一個人是不敢冒險的，必定招朋引伴一起看才比較安全嘛。恐怖承受力中等。' },
    { resulttitle: '【越恐怖越放鬆型】', resultinnertext: '你的神經粗得要命，恐怖承受力指數超強，鬼還比較怕你!' },
]

var Qnum = quiz_RowsCount
// var randomNum=Math.floor(Math.random()*questions.length);
