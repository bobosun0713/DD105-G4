<?php

try{
    require_once("./php/connect.php");
    //撈景點---分數低於五分
    $sql = "select spot_no, spot_name, spot_image_card, spot_scary_rate, spot_vote_count, spot_area_no, substr(spot_content,1,30) spot_intro from spot where spot_scary_rate<5 order by spot_vote_count desc limit 0,2";
    $spots = $pdo->query($sql);
    $spotRows = $spots->fetchAll(PDO::FETCH_ASSOC);
    //撈景點---分數低於八分
    $sql = "select spot_no, spot_name, spot_image_card, spot_scary_rate, spot_vote_count, spot_area_no, substr(spot_content,1,30) spot_intro from spot where spot_scary_rate<8 order by spot_vote_count desc limit 0,2";
    $spots2 = $pdo->query($sql);
    $spotRows2 = $spots2->fetchAll(PDO::FETCH_ASSOC);
    //撈景點---分數高於八分
    $sql = "select spot_no, spot_name, spot_image_card, spot_scary_rate, spot_vote_count, spot_area_no, substr(spot_content,1,30) spot_intro from spot where spot_scary_rate>8 order by spot_vote_count desc limit 0,2";
    $spots3 = $pdo->query($sql);
    $spotRows3 = $spots3->fetchAll(PDO::FETCH_ASSOC);

    $sql = "select quiz_question,quiz_opt1,quiz_opt2,quiz_opt3,quiz_opt1_point,quiz_opt2_point,quiz_opt3_point,quiz_img from game limit 5";
    $game = $pdo->query($sql);
    $gameRows = $game->fetchAll(PDO::FETCH_ASSOC);
    $gameRowsCount=count($gameRows);


}catch (PDOException $e) {
    // alert($e->getLine());
    echo "錯誤行號 : " . $e->getLine() . "<br>"; 
    echo "錯誤訊息 : " . $e->getMessage() . "<br>";
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <title>Quiz</title>
    <meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />

<!-- ---------------------共用區---------------------- -->
<!-- hamberger -->
<script src="./js/hamburger.js"></script>
<!-- headerScroll 效果 -->
<script src="./js/headerScroll.js"></script>
<!-- 音樂效果 -->
<script src="./js/soundSwitch.js"></script>
<!--all css -->
<link rel="stylesheet" href="./css/main.css" />
<!-- 鬼島logo小圖示 -->
<link rel="shortcut icon" href="../img/icon/logo-icon.png" />
<!-- jquery-3.4.1 -->
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<!-- 登入登出 -->
<script src="./js/login.js"></script>
<!-- TweenMax.min外掛 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
<!-- awesome icon外掛包 -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" />
<script src="js/mouse_ghost.js"></script>

<!-- 阿禎scorll外掛 -->
<script src="https://unpkg.com/infinite-scroll@3/dist/infinite-scroll.pkgd.min.js"></script>
<script src="js/tab.js"></script>

</head>

<body>

    <div class="game">

        <div class="grid">
            <div class="allcandlesblock">
                <div class="outercontainer">
                    <div class="container1">
                        <div class="red light"></div>
                        <div class="orangered light"></div>
                        <div class="orange light"></div>
                        <div class="yellow light"></div>
                        <div class="white light"></div>
                    </div>
                    <img class="candle" src="img/game/candle.png" />
                </div>
                <div class="outercontainer2">
                    <div class="container2">
                        <div class="red light"></div>
                        <div class="orangered light"></div>
                        <div class="orange light"></div>
                        <div class="yellow light"></div>
                        <div class="white light"></div>
                    </div>
                    <img class="candle2" src="./img/game/candle.png" />
                </div>
            </div>
            <div id="dolphin_block">
                <div class="box right"> </div>
            </div>
            <div id="camera1">
                <div class="box1">
                    <div id="L_magicpaper"></div>
                </div>
            </div>

            <div id="camera2">
                <div class="box2">
                    <div id="R_magicpaper"></div>
                </div>
            </div>
            <div id="quiz">
                <div id="logoimg"><img src="./img/logo/LOGO_white.png" /></div>
                <h1 id="testheading">--試膽測驗--</h1>

                <div class="startbtn">
                    <button id="startbtn">開始遊戲</button>
                    <span class="hoverghost"></span>
                </div>
                <div class="gotoindex">
                    <button id="gotoindex">回到首頁</button>
                    <span class="hoverghost2"></span>
                </div>
                <div class="quizimg"><img class="innerimg" src=""></div>
                <div class="progressblock">
                    <p id="progress"></p>
                </div>
                <div class="cancel_ghost_group">
                    <div class="ghosttalk">
                        <img src="./img/game/ghosttalk_bg.png">
                        
                        <div class="showface">
                            <audio id="screammusic" src="./music/scream_sound.mp3" loop="false"></audio>

                            <span class="canceltext">離開測驗?</span>
                        </div>
                        <!-- <a href="index.html">
                            <span class="canceltext">離開測驗?</span>
                        </a> -->
                    </div>
                    <div class="ghostgroup"><img src="./img/game/ghostgroup.png"></div>
                </div>
                <p id="question"></p>

                <div id="resultheading"></div>
                <div class="test_score_title">
                    膽量指數:
                    <div id="test_score"></div>
                    /10
                </div>
                <div id="resulttitle"></div>
                <div id="resultinnertext"></div>
                <div class="btnshowupagaingroup">
                    <a href="game.php"><button class="btn-border3" id="playagain_btn">再玩一次</button></a>
                    <a href="index.html"><button class="btn-border3" id="gotoindex_btn">回到首頁</button></a>
                </div>
                <div class="buttons">
                      
                    <button id="btn0" class="choice btn-outline" value="0">
                    </button>
                    <button id="btn1" class="choice btn-outline" value="0">
                    </button>
                    <button id="btn2" class="choice btn-outline" value="0">
                    </button>

                </div>
                <div class="recommendtitle"></div>
                
                <div class="recommendcardground below5">
                <?php foreach($spotRows as $i => $spotRow){
                 ?>
                    <div class="spotcard">
                        <img src="<?= $spotRow["spot_image_card"]?>">
                        <div class="heading">【<?= $spotRow["spot_name"]?>】</div>
                        <a href="ghostSpot.php?spot_no=<?=$spotRow["spot_no"]?>&order_no=<?php echo $i+1?>"><?= $spotRow["spot_intro"]?>...(more)</a>
                    </div>
                <?php 
                }
                ?>
                </div>
                <div class="recommendcardground below8">
                <?php foreach($spotRows2 as $i => $spotRow2){
                 ?>
                    <div class="spotcard">
                        <img src="<?= $spotRow2["spot_image_card"]?>">
                        <div class="heading">【<?= $spotRow2["spot_name"]?>】</div>
                        <a href="ghostSpot.php?spot_no=<?=$spotRow2["spot_no"]?>&order_no=<?php echo $i+1?>"><?= $spotRow2["spot_intro"]?>...(more)</a>
                    </div>
                <?php 
                }
                ?>
                </div>
                 <div class="recommendcardground above8">
                <?php foreach($spotRows3 as $i => $spotRow3){
                 ?>
                    <div class="spotcard">
                        <img src="<?= $spotRow3["spot_image_card"]?>">
                        <div class="heading">【<?= $spotRow3["spot_name"]?>】</div>
                        <a href="ghostSpot.php?spot_no=<?=$spotRow3["spot_no"]?>&order_no=<?php echo $i+1?>"><?= $spotRow3["spot_intro"]?>...(more)</a>
                    </div>
                <?php 
                }
                ?>        
                </div>
                <?php foreach($gameRows as $i => $gameRow){
                 ?>
                <div class="quiz_database">
                    <div class="quiz_length"><?=$gameRowsCount?></div> 
                    <div class="quiz_question"><?= $gameRow["quiz_question"]?></div>
                    <div class="quiz_opt1"><?= $gameRow["quiz_opt1"]?></div>
                    <div class="quiz_opt2"><?= $gameRow["quiz_opt2"]?></div>
                    <div class="quiz_opt3"><?= $gameRow["quiz_opt3"]?></div>
                    <div class="quiz_opt1_point"><?= $gameRow["quiz_opt1_point"]?></div>
                    <div class="quiz_opt2_point"><?= $gameRow["quiz_opt2_point"]?></div>
                    <div class="quiz_opt3_point"><?= $gameRow["quiz_opt3_point"]?></div>
                    <div class="quiz_img">./<?= $gameRow["quiz_img"]?></div>
                </div>
                <?php 
                }
                ?>
                
            </div>
        </div>
        <div class="creepy_face" >
            <img src="./img/game/creepy_face.png">
        </div>
    </div>
    <script src="js/game.js"></script>
</body>

</html>