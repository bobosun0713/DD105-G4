// create quiz
var startbtn = document.getElementById('startbtn')
startbtn.onclick = startGame
document.querySelector('.recommendcardground').style.display = 'none'
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
    document.querySelector('.cancel_ghost_group').style.display = 'block'
    document.getElementById('startbtn').parentNode.style.display = 'none'
    document.getElementById('gotoindex').parentNode.style.display = 'none'
    document.querySelector('.progressblock').style.display = 'block'
    document.querySelector('.outercontainer').style.display = 'none'
    document.querySelector('.outercontainer2').style.display = 'none'


    currentquestionIndex = 0
    var randomNum = Math.floor(Math.random() * questions.length)
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
    document.getElementsByClassName('innerimg')[0].src = questions[currentquestionIndex].quizimg
    document.getElementById('question').innerHTML = questions[currentquestionIndex].title
    document.querySelectorAll('.choice')[0].innerHTML = questions[currentquestionIndex].choice[0]
    document.querySelectorAll('.choice')[1].innerHTML = questions[currentquestionIndex].choice[1]
    document.querySelectorAll('.choice')[2].innerHTML = questions[currentquestionIndex].choice[2]
    document.querySelectorAll('.choice')[0].value = questions[currentquestionIndex].point[0]
    document.querySelectorAll('.choice')[1].value = questions[currentquestionIndex].point[1]
    document.querySelectorAll('.choice')[2].value = questions[currentquestionIndex].point[2]
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
    if (currentquestionIndex == questions.length) {

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
        document.querySelector('.recommendcardground').style.display = 'flex'
        document.querySelector('#dolphin_block').style.display = 'block'
        document.querySelector('.test_score_title').style.display = 'inline-block'
        if (total < 5) {
            document.querySelector('#resulttitle').innerHTML = types[0].resulttitle
            document.querySelector('#resultinnertext').innerHTML = types[0].resultinnertext
        } else if (total < 8) {
            document.querySelector('#resulttitle').innerHTML = types[1].resulttitle
            document.querySelector('#resultinnertext').innerHTML = types[1].resultinnertext
        } else {
            document.querySelector('#resulttitle').innerHTML = types[2].resulttitle
            document.querySelector('#resultinnertext').innerHTML = types[2].resultinnertext
        }
    }
    document.getElementsByClassName('innerimg')[0].src = questions[currentquestionIndex].quizimg
    document.getElementById('question').innerHTML = questions[currentquestionIndex].title
    document.querySelectorAll('.choice')[0].innerHTML = questions[currentquestionIndex].choice[0]
    document.querySelectorAll('.choice')[1].innerHTML = questions[currentquestionIndex].choice[1]
    document.querySelectorAll('.choice')[2].innerHTML = questions[currentquestionIndex].choice[2]
    document.querySelectorAll('.choice')[0].value = questions[currentquestionIndex].point[0]
    document.querySelectorAll('.choice')[1].value = questions[currentquestionIndex].point[1]
    document.querySelectorAll('.choice')[2].value = questions[currentquestionIndex].point[2]


    // console.log("btnclick目前第幾題"+currentquestionIndex)
    document.getElementById('progress').innerHTML = currentquestionIndex + 1 + '/' + Qnum
    total = total + parseInt(e.target.value)
}
// create questions here

var questions = [
    {
        title: '1.你喜歡看恐怖片嗎？',
        choice: ['看得我神經衰弱，不喜歡', '超級喜歡', '一個人肯定不能承受的啦,需要個人一起看'],
        point: [0, 1, 0.5],
        quizimg: './img/game/quiz1_img.jpg',
    },

    {
        title: '2.當貞子披頭散髮從電視機裏爬出來時，你會:',
        choice: [
            '撥開她的長頭髮，看她的臉到底長成什麼樣',
            '拚命暗示自己：別怕別怕，她不會從電視機裏爬出來的',
            '嚇到跑出門外！',
        ],
        point: [1, 0.5, 0],
        quizimg: './img/game/quiz2_img.jpg',
    },

    {
        title: '3.晚上獨自在家，下列哪個東西令你感到最可怕:',
        choice: ['鏡子出現人影', '電燈閃爍不停', '電視機出現雜訊'],
        point: [0, 0.5, 1],
        quizimg: './img/game/quiz3_img.jpg',
    },

    {
        title: '4.什麼樣的恐怖片情節最令你害怕:',
        choice: ['用高超的電腦特技畫出的巨大異形怪物', '以人皮縫製「面具」的殘忍手段', '鏡子裏看到的不是自己的臉'],
        point: [0, 1, 0.5],
        quizimg: './img/game/quiz4_img.jpg',
    },
    {
        title: '5.你與朋友進入一間屋子，朋友手上的佛珠都突然斷開，掉了滿地，此時，你會？',
        choice: ['覺得繩子總是會有斷的一天，減少恐懼', '逃離屋子', '念阿彌陀佛，以分散注意力'],
        point: [1, 0.5, 0],
        quizimg: './img/game/quiz5_img.png',
    },
    {
        title: '6.你在夢裡被人追殺，如果不幸被殺，現實中的你也會死，你會：',
        choice: ['好想鬧鐘快快響', '怎麼會有這種事？被殺也不怕', '很可怕ㄟ..不要再說了'],
        point: [0.5, 1, 0],
        quizimg: './img/game/quiz6_img.jpg',
    },
    {
        title: '7.剛看完鬼片後……',
        choice: ['如若一個人會睡不著', '伸個懶腰，輕鬆許多', '走！去大吃一頓，化恐怖為食慾'],
        point: [0, 0.5, 1],
        quizimg: './img/game/quiz7_img.png',
    },
    {
        title: '8.魔鬼請你喝下午茶，你想選哪種：',
        choice: ['大體蛋糕', '斷手造型的巧克力蛋糕', '草莓蛋糕'],
        point: [1, 0.5, 0],
        quizimg: './img/game/quiz8_img.jpg',
    },
    {
        title: '9.你家人忽然變成殭屍，到處咬人，槍都打不死，怎麼辦？',
        choice: ['炸死他們', '讓他們咬，你也變成殭屍，一起橫行霸道', '太可怕了!要快點逃走'],
        point: [2, 1, 0],
        quizimg: './img/game/quiz9_img.jpg',
    },
    {
        title: '10.家裡出現鬼影，你會：',
        choice: ['請個法師來做法事', '應該是看錯了吧', '科學一點好嗎?世上哪有鬼'],
        point: [0.5, 0, 1],
        quizimg: './img/game/quiz10_img.jpg',
    },
]
//why
var types = [
    { resulttitle: '【膽小如鼠型】', resultinnertext: '神經超級脆弱的你，恐怖承受力指數低到可憐。' },
    { resulttitle: '【冒充膽大型】', resultinnertext: '你一個人是不敢冒險的，必定招朋引伴一起看才比較安全嘛。恐怖承受力中等。', },
    { resulttitle: '【越恐怖越放鬆型】', resultinnertext: '你的神經粗得要命，恐怖承受力指數超強，鬼還比較怕你!' },
]

var Qnum = questions.length
// var randomNum=Math.floor(Math.random()*questions.length);
