// create quiz
var startbtn = document.getElementById('startbtn')
startbtn.onclick = startGame

let shufflequestion, currentquestionIndex
function startGame() {
    document.getElementById('startbtn').parentNode.style.display = 'none'
    document.getElementById('gotoindex').parentNode.style.display = 'none'
    document.querySelector('.progressblock').style.display = 'block'
    document.querySelector('.outercontainer').style.display = 'none'
    document.querySelector('.outercontainer2').style.display = 'none'

    // document.getElementsByClassName[0]("buttons").style.display="none";
    currentquestionIndex = 0
    var randomNum = Math.floor(Math.random() * questions.length)
    // var newQuestionArray=[];
    // for(let a=0;a<questions.length+1;a++){
    //     newQuestionArray.push(questions.splice(randomNum,1));
    // }
    // console.log(newQuestionArray)
    console.log(questions.length)

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
    document.getElementsByClassName('choice')[0].innerHTML = questions[currentquestionIndex].choice[0]
    document.getElementsByClassName('choice')[1].innerHTML = questions[currentquestionIndex].choice[1]
    document.getElementsByClassName('choice')[2].innerHTML = questions[currentquestionIndex].choice[2]
    console.log('目前第幾題' + currentquestionIndex)
}

// display quiz
var btn = document.getElementsByClassName('choice')
for (let j = 0; j < 3; j++) {
    btn[j].onclick = btnClick
}
var total = 0
function btnClick(e) {
    // console.log("OK")

    for (let i = 0; i < 3; i++) {
        btn[i].innerHTML = ''
    }

    currentquestionIndex++

    console.log('hahah' + currentquestionIndex)
    if (currentquestionIndex == questions.length) {
        for (let i = 0; i < 3; i++) {
            btn[i].innerHTML = ''
        }

        document.getElementById('question').innerHTML = ''
        document.querySelector('.buttons').style.display = 'none'
        document.querySelector('#progress').style.display = 'none'
        //  document.getElementsByClassName("innerimg")[0].src="";
        document.querySelector(".quizimg").style.display='none';
        
        document.getElementById('test_score').innerHTML="<font size='50px'>膽量指數:</font>"+total+"<font size='50px'>/10</font>";
        document.querySelector("#resultheading").style.display='block';
        document.querySelector("#resultheading").innerHTML="分析結果";
        document.getElementById("playagain_btn").style.display='inline-block';
        document.getElementById("gotoindex_btn").style.display='inline-block';
        document.querySelector(".grid").style.backgroundImage="url('../img/game/quizreport_bg.png')";
        document.querySelector(".recommendtext").style.display="block";
        document.querySelector(".recommendcardground").style.display="flex";
        document.querySelector("#dolphin_block").style.display="block";
        if(total<3){
            document.querySelector("#resulttitle").innerHTML=types[0].resulttitle;
            document.querySelector("#resultinnertext").innerHTML=types[0].resultinnertext;
        }
    }
    document.getElementsByClassName('innerimg')[0].src = questions[currentquestionIndex].quizimg

    document.getElementById('question').innerHTML = questions[currentquestionIndex].title
    document.getElementsByClassName('choice')[0].innerHTML = questions[currentquestionIndex].choice[0]
    document.getElementsByClassName('choice')[1].innerHTML = questions[currentquestionIndex].choice[1]
    document.getElementsByClassName('choice')[2].innerHTML = questions[currentquestionIndex].choice[2]

    // console.log("btnclick目前第幾題"+currentquestionIndex)
    document.getElementById('progress').innerHTML = currentquestionIndex + 1 + '/' + Qnum

    total = total + parseInt(e.target.parentNode.value)
}
// create questions here

var questions = [
    {
        title: '1.你喜歡看恐怖片麼？',
        choice: ['看得我神經衰弱，不喜歡', '超級喜歡', '一個人肯定不能承受的啦,需要個人一起看'],
        quizimg: '../img/game/quiz1_img.jpg',
    },

    {
        title: '2.當貞子披頭散髮從電視機裏爬出來時，你會',
        choice: [
            '撥開她的長頭髮，看她的臉到底長成什麼樣',
            '拚命暗示自己：別怕別怕，她不會從電視機裏爬出來的',
            '嚇到跑出門外！',
        ],
        quizimg: '../img/game/quiz2_img.jpg',
    },

    {
        title: '3.晚上獨自在家，下列哪個東西令你感到最可怕',
        choice: ['鏡子出現人影', '電燈閃爍不停', '電視機出現雜訊'],
        quizimg: '../img/game/quiz3_img.jpg',
    },
]
//why
var types = [
    { resulttitle: '膽小如鼠型', resultinnertext: '神經超級脆弱的你，恐怖承受力指數低到可憐。' },
    {
        resulttitle: '冒充膽大型',
        resultinnertext: '你一個人是不敢冒險的，必定招朋引伴一起看才比較安全嘛。恐怖承受力中等。',
    },
    { resulttitle: '越恐怖越放鬆型', resultinnertext: '你簡直是個活寶，神經粗得要命，恐怖承受力指數超強，鬼都怕你。' },
]

var Qnum = questions.length
// var randomNum=Math.floor(Math.random()*questions.length);
