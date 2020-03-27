<?php

try{
    require_once("./php/connect.php");

    $sql = "select spot_no, spot_name, spot_image_card, spot_scary_rate, spot_vote_count, spot_area_no, substr(spot_content,1,30) spot_intro from spot order by spot_vote_count desc";
    $spots = $pdo->query($sql);
    $spotRows = $spots->fetchAll(PDO::FETCH_ASSOC);


}catch (PDOException $e) {
    // alert($e->getLine());
    echo "錯誤行號 : " . $e->getLine() . "<br>"; 
    echo "錯誤訊息 : " . $e->getMessage() . "<br>";
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
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

    <title>前進鬼島</title>
</head>


<body>

    <!-- 滑鼠上的鬼 -->
    <div id="mouse"></div>
    <!-- 滑鼠上的鬼-->

    <div id="ghostIslandWrapper">

        <!-- ================ 霧 ================ -->
        <section class="indexfog">
            <figure
                class="absolute-bg"
                style="background-image: url('https://source.unsplash.com/3ytjETpQMNY/1600x900');"
            ></figure>
            <div class="fog__container">
                <div class="fog__img fog__img--first"></div>
                <div class="fog__img fog__img--second"></div>
            </div>
        </section>
        <!-- ================ 霧 ================ -->

        <!-- ================ HEADER ================ -->
        <audio id="music" src="./music/bgmusic.mp3" loop="true" autoplay="true"></audio>
        <header id="topHeader">
            <div id="navStatus">
                <div id="soundStatus">
                    <img src="./img/icon/music_btn_off.svg" id="soundClick" />
                    <p id="soundTxt">Sound On</p>
                </div>
                <div id="memStatus">
                    <a href="">
                        <img src="./img/icon/default_header.svg" />
                    </a>
                    <p><span id="memName"></span></p>
                    <p><span id="login_btn">登入</span></p>
                </div>
            </div>
            <nav class="desktopHeader">
                <ul>
                    <li class="@@link001-1">
                        <a href="ghostIsland.php" class="title @@link001">
                            前進鬼島
                        </a>
                    </li>
                    <li class="@@link001-2">
                        <a href="adventrue.html" class="title @@link002">
                            尋鬼探險
                        </a>
                    </li>
                    <li class="@@link001-3">
                        <a href="leaderboard.html" class="title @@link003">
                            靈異票選
                        </a>
                    </li>
                    <li>
                        <a href="index.html">
                            <img id="topLogo" src="./img/logo/LOGO_white.png" />
                        </a>
                    </li>
                    <li class="@@link001-4">
                        <a href="game.php" class="title @@link004">
                            試膽測驗
                        </a>
                    </li>
                    <li class="@@link001-5">
                        <a href="forum.html" class="title @@link005">
                            靈異討論
                        </a>
                    </li>
                    <li class="@@link001-6">
                        <a href="member.html" class="title @@link006">
                            會員中心
                        </a>
                    </li>
                </ul>
            </nav>

            <nav class="rwdHeader">
                <div class="rwdHeaderWrap">
                    <a href="../index.html">
                        <img id="topLogo2" src="./img/logo/LOGO_white.png" />
                    </a>

                    <button class="hamburger hamburger--elastic" id="hamburger" type="button">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </nav>

            <div id="rwdHamburgerMenu">
                <nav>
                    <ul>
                        <a href="../ghostIsland.html">
                            <li class="title">前進鬼島</li>
                        </a>
                        <a href="../adventrue.html">
                            <li class="title">尋鬼探險</li>
                        </a>
                        <a href="../leaderboard.html">
                            <li class="title">靈異票選</li>
                        </a>
                        <a href="../game.html">
                            <li class="title">試膽測驗</li>
                        </a>
                        <a href="../forum.html">
                            <li class="title">靈異討論</li>
                        </a>
                        <a href="../member.html">
                            <li class="title">會員中心</li>
                        </a>
                        <a>
                            <!-- <li class="title" id="memName1"></li> -->
                            <li class="title" id="login_btn1">登入</li>
                        </a>

                        <li id="hamburgerSound" class="title">Sound Off</li>
                    </ul>
                </nav>
            </div>
            <div id="indexLogin">
                <section id="login_page1" style="display: none;">
                    <div id="logincancel"></div>
                    <div class="login_cover">
                        <img src="./img/logo/LOGO_black.png" alt="" />
                    </div>
                    <form action="" method="POST">
                        <p>
                            <input type="text" id="mem_id" name="mem_id" placeholder="帳號" />
                        </p>
                        <p>
                            <input type="password" id="mem_psw" name="mem_psw" placeholder="密碼" />
                        </p>
                    </form>
                    <div id="loginbutton">登入</div>
                    <div id="next_login">註冊會員</div>
                </section>

                <section id="login_page2" style="display: none;">
                    <div id="logincancel2"></div>
                    <div class="login_cover">
                        <img src="./img/login/registered-01 (1).png" alt="" />
                    </div>
                    <form action="" method="POST">
                        <p>
                            <label for="memid">會員帳號</label>
                            <input type="text" id="memid" name="memid" placeholder="4~20英文字母、數字" />
                        </p>
                        <p>
                            <label for="mempwd">會員密碼</label>
                            <input type="password" id="mempwd" name="mempwd" placeholder="4~20英文字母、數字" />
                        </p>
                        <p>
                            <label for="mempwdcheck">確認密碼</label>
                            <input type="password" id="mempwdcheck" name="mempwdcheck" placeholder="重新確認密碼" />
                        </p>
                        <p>
                            <label for="memname">會員姓名</label>
                            <input type="text" id="memname" name="memname" placeholder="姓名" />
                        </p>
                        <p>
                            <label for="memcell">手機號碼</label>
                            <input type="text" id="memcell" name="memcell" placeholder="09XX-XXX-XXX" />
                        </p>
                        <p>
                            <label for="memail">電子信箱</label>
                            <input type="mail" id="memail" name="memail" placeholder="輸入Email須包含{@和.}" />
                        </p>
                    </form>
                    <div id="sure_btn">註冊會員</div>
                </section>
            </div>
        </header>
        <!-- ================ HEADER ================ -->

        <section id="ghostIslandSection1">

            <div id="areaList">
                <form action="GET" >
                    <div class="checkBT">
                        <input type="checkbox" name="allArea" id="allArea" checked />
                        <label for="allArea" class="areaSelect">全部區域</label>
                    </div>

                    <div class="checkBT">
                        <input type="checkbox" name="northArea" id="northArea" checked/>
                        <label for="northArea" class="areaSelect">北部區域</label>
                    </div>

                    <div class="checkBT">
                        <input type="checkbox" name="midArea" id="midArea" checked/>
                        <label for="midArea" class="areaSelect">中部區域</label>
                    </div>

                    <div class="checkBT">
                        <input type="checkbox" name="southArea" id="southArea" checked/>
                        <label for="southArea" class="areaSelect">南部區域</label>
                    </div>
                </form>
            </div>

            <div id="mapArea">
                <div id="bigG">
                    <img src="./img/map/G1.png" />
                </div>
                <div id="twMap">
                    <img class="mapImg" src="./img/map/twMap.png" />
                    <div class="twMapWidth" id="twMap01">
                        <div class="locationWrap">
                            <a href="ghostSpot.php?spot_no=%201&order_no=1" id="loc3">
                                <p class="location"></p>
                            </a>
                            <img src="./img/map/spell1.png" id="spell3" class="spellSize" />

                            <a href="ghostSpot.php?spot_no=%203&order_no=" id="loc4">
                                <p class="location"></p>
                            </a>
                            <img src="./img/map/spell15.png" id="spell4" class="spellSize" />

                            <a href="ghostSpot.php?spot_no=%202&order_no=" id="loc5">
                                <p class="location"></p>
                            </a>
                            <img src="./img/map/spell3.png" id="spell5" class="spellSize" />

                            <a href="./ghostSpot.php?spot_no=%204&order_no=" id="loc1">
                                <p class="location"></p>
                            </a>
                            <img src="./img/map/spell4.png" id="spell1" class="spellSize" />

                            <a href="ghostSpot.php?spot_no=%205&order_no=" id="loc2">
                                <p class="location"></p>
                            </a>
                            <img src="./img/map/spell2.png" id="spell2" class="spellSize" />
                        </div>
                    </div>

                    <div class="twMapWidth" id="twMap02">
                        <div class="locationWrap">
                            <a href="ghostSpot.php?spot_no=%209&order_no=" id="loc6">
                                <p class="location"></p>
                            </a>
                            <img src="./img/map/spell9.png" id="spell6" class="spellSize" />
                            <a href="ghostSpot.php?spot_no=%206&order_no=" id="loc7">
                                <p class="location"></p>
                            </a>
                            <img src="./img/map/spell6.png" id="spell7" class="spellSize" />
                            <a href="ghostSpot.php?spot_no=%2010&order_no=" id="loc8">
                                <p class="location"></p>
                            </a>
                            <img src="./img/map/spell5.png" id="spell8" class="spellSize" />
                            <a href="ghostSpot.php?spot_no=%207&order_no=" id="loc9">
                                <p class="location"></p>
                            </a>
                            <img src="./img/map/spell7.png" id="spell9" class="spellSize" />
                            <a href="ghostSpot.php?spot_no=%208&order_no=3" id="loc10">
                                <p class="location"></p>
                            </a>
                            <img src="./img/map/spell8.png" id="spell10" class="spellSize" />
                        </div>
                    </div>
                    <div class="twMapWidth" id="twMap03">
                        <div class="locationWrap">
                            <a href="ghostSpot.php?spot_no=%2013&order_no=" id="loc11">
                                <p class="location"></p>
                            </a>
                            <img src="./img/map/spell12.png" id="spell11" class="spellSize" />
                            <a href="ghostSpot.php?spot_no=%2011&order_no=2" id="loc12">
                                <p class="location"></p>
                            </a>
                            <img src="./img/map/spell10.png" id="spell12" class="spellSize" />
                            <a href="ghostSpot.php?spot_no=%2014&order_no=" id="loc13">
                                <p class="location"></p>
                            </a>
                            <img src="./img/map/spell13.png" id="spell13" class="spellSize" />
                            <a href="ghostSpot.php?spot_no=%2015&order_no=" id="loc14">
                                <p class="location"></p>
                            </a>
                            <img src="./img/map/spell11.png" id="spell14" class="spellSize" />
                            <a href="ghostSpot.php?spot_no=%2012&order_no=" id="loc15">
                                <p class="location"></p>
                            </a>
                            <img src="./img/map/spell14.png" id="spell15" class="spellSize" />
                        </div>
                    </div>
                </div>
                <div id="G1_L">
                    <img src="./img/map/G1_L.png" />
                </div>

                <div id="ship">
                    <img src="./img/map/ship.png" />
                </div>

                <div class="route1">
                    <img src="./img/map/route1.png" />
                </div>

                <div class="loader loader1" data-text="loaderloader"></div>
                <div class="loader loader2" data-text="loaderloader"></div>
                <div class="loader loader3" data-text="loaderloader"></div>
                <div class="loader loader4" data-text="loaderloader"></div>
                <div class="loader loader5" data-text="loaderloader"></div>
            </div>
        </section>

        <section id="ghostIslandSection2">
            <div class="cardDisplay">
                <div class="cardContain" id="cardContain">

                    <!-- db抓景點資料開始 -->
                    <?php foreach($spotRows as $i => $spotRow){
                        if( $i < 3){
                            if( $spotRow["spot_area_no"] == "北"){ ?>
                                <div class="spotCard northCard">
                                    <div class="spotImg">
                                        <img src=" <?= $spotRow["spot_image_card"]?> " />
                                        <p class="rate">膽量指數:<span class="rateScale"> <?= $spotRow["spot_scary_rate"]?> </span>/10</p>
                                        <div id="rank">
                                            <img src="./img/component/card/rank.png" />
                                            <p>NO.<?=$i+1?></p>
                                        </div>
                                    </div>
                                    <div class="spotTxt">
                                        <h2 class="spotTitle">【<?= $spotRow["spot_name"]?>】</h2>
                                        <p class="spotIntro">
                                            <a href="ghostSpot.php?spot_no=<?=$spotRow["spot_no"]?>&order_no=<?php echo $i+1?>"><?= $spotRow["spot_intro"]?>....(more)</a>
                                        </p>
                                        <p class="groupJoin">
                                            <a href="./adventrue.html">
                                            查看景點相關揪團
                                            </a>
                                        </p>
                                    </div>
                                    <hr />
                                    <div class="spotStatus">
                                        <p class="vote">
                                            <img class="voteImg" src="./img/icon/vote-01.svg" />
                                            <?= $spotRow["spot_vote_count"]?>
                                        </p>
                                    </div>
                                </div>
                            <?php }elseif( $spotRow["spot_area_no"] == "中"){ ?>
                                <div class="spotCard midCard">
                                            <div class="spotImg">
                                                <img src=" <?= $spotRow["spot_image_card"]?> " />
                                                <p class="rate">膽量指數:<span class="rateScale"> <?= $spotRow["spot_scary_rate"]?> </span>/10</p>
                                                <div id="rank">
                                                    <img src="./img/component/card/rank.png" />
                                                    <p>NO.<?=$i+1?></p>
                                                </div>
                                            </div>
                                            <div class="spotTxt">
                                                <h2 class="spotTitle">【<?= $spotRow["spot_name"]?>】</h2>
                                                <p class="spotIntro">
                                                    <a href="ghostSpot.php?spot_no=<?=$spotRow["spot_no"]?>&order_no=<?php echo $i+1?>"><?= $spotRow["spot_intro"]?>....(more)</a>
                                                </p>
                                                <p class="groupJoin">
                                                    <a href="./adventrue.html">
                                                    查看景點相關揪團
                                                    </a>
                                                </p>
                                            </div>
                                            <hr />
                                            <div class="spotStatus">
                                                <p class="vote">
                                                    <img class="voteImg" src="./img/icon/vote-01.svg" />
                                                    <?= $spotRow["spot_vote_count"]?>
                                                </p>
                                            </div>
                                </div>
                            <?php }elseif( $spotRow["spot_area_no"] == "南"){ ?>
                                <div class="spotCard southCard">
                                    <div class="spotImg">
                                            <img src="<?= $spotRow["spot_image_card"]?>" />
                                            <p class="rate">膽量指數:<span class="rateScale"> <?= $spotRow["spot_scary_rate"]?> </span>/10</p>
                                            <div id="rank">
                                                <img src="./img/component/card/rank.png" />
                                                <p>NO.<?= $i+1 ?></p>
                                            </div>
                                    </div>
                                    <div class="spotTxt">
                                            <h2 class="spotTitle">【<?= $spotRow["spot_name"]?>】</h2>
                                            <p class="spotIntro">
                                                <a href="ghostSpot.php?spot_no=<?=$spotRow["spot_no"]?>&order_no=<?php echo $i+1?>"><?= $spotRow["spot_intro"]?>....(more)</a>
                                            </p>
                                            <p class="groupJoin">
                                                <a href="./adventrue.html">
                                                查看景點相關揪團
                                                </a>
                                            </p>
                                    </div>
                                    <hr />
                                    <div class="spotStatus">
                                            <p class="vote">
                                                <img class="voteImg" src="./img/icon/vote-01.svg" />
                                                <?= $spotRow["spot_vote_count"]?>
                                            </p>
                                    </div>
                                </div>
                        
                    <?php }}else{
                            if( $spotRow["spot_area_no"] == "北"){ ?>
                                <div class="spotCard northCard">
                                    <div class="spotImg">
                                        <img src=" <?= $spotRow["spot_image_card"]?> " />
                                        <p class="rate">膽量指數:<span class="rateScale"> <?= $spotRow["spot_scary_rate"]?> </span>/10</p>
                                    </div>
                                    <div class="spotTxt">
                                        <h2 class="spotTitle">【<?= $spotRow["spot_name"]?>】</h2>
                                        <p class="spotIntro">
                                            <a href=" ghostSpot.php?spot_no=<?=$spotRow["spot_no"]?>&order_no=<?php echo $i+1?>"><?= $spotRow["spot_intro"]?>....(more)</a>
                                        </p>
                                        <p class="groupJoin">
                                            <a href="./adventrue.html">
                                            查看景點相關揪團
                                            </a>
                                        </p>
                                    </div>
                                    <hr />
                                    <div class="spotStatus">
                                        <p class="vote">
                                            <img class="voteImg" src="./img/icon/vote-01.svg" />
                                            <?= $spotRow["spot_vote_count"]?>
                                        </p>
                                    </div>
                                </div>
                            <?php }elseif( $spotRow["spot_area_no"] == "中"){ ?>
                                <div class="spotCard midCard">
                                            <div class="spotImg">
                                                <img src=" <?= $spotRow["spot_image_card"]?> " />
                                                <p class="rate">膽量指數:<span class="rateScale"> <?= $spotRow["spot_scary_rate"]?> </span>/10</p>
                                            </div>
                                            <div class="spotTxt">
                                                <h2 class="spotTitle">【<?= $spotRow["spot_name"]?>】</h2>
                                                <p class="spotIntro">
                                                    <a href="ghostSpot.php?spot_no= <?=$spotRow["spot_no"]?>&order_no=<?php echo $i+1?>"><?= $spotRow["spot_intro"]?>....(more)</a>
                                                </p>
                                                <p class="groupJoin">
                                                    <a href="./adventrue.html">
                                                    查看景點相關揪團
                                                    </a>
                                                </p>
                                            </div>
                                            <hr />
                                            <div class="spotStatus">
                                                <p class="vote">
                                                    <img class="voteImg" src="./img/icon/vote-01.svg" />
                                                    <?= $spotRow["spot_vote_count"]?>
                                                </p>
                                            </div>
                                </div>
                            <?php }elseif( $spotRow["spot_area_no"] == "南"){ ?>
                                <div class="spotCard southCard">
                                <div class="spotImg">
                                    <img src=" <?= $spotRow["spot_image_card"]?> " />
                                    <p class="rate">膽量指數:<span class="rateScale"> <?= $spotRow["spot_scary_rate"]?> </span>/10</p>
                                </div>
                                <div class="spotTxt">
                                    <h2 class="spotTitle">【<?= $spotRow["spot_name"]?>】</h2>
                                    <p class="spotIntro">
                                        <a href="ghostSpot.php?spot_no=<?=$spotRow["spot_no"]?>&order_no=<?php echo $i+1?>"><?= $spotRow["spot_intro"]?>....(more)</a>
                                    </p>
                                    <p class="groupJoin">
                                        <a href="./adventrue.html">
                                        查看景點相關揪團
                                        </a>
                                    </p>
                                </div>
                                <hr />
                                <div class="spotStatus">
                                    <p class="vote">
                                        <img class="voteImg" src="./img/icon/vote-01.svg" />
                                        <?= $spotRow["spot_vote_count"]?>
                                    </p>
                                </div>
                        </div>

                        
                        <?php }
                        }
                    }?>
                    <!-- db抓景點資料結束 -->

                </div>

                <div id="Ghost2">
                    <img src="./img/map/G2.png" />
                </div>

                <div id="Ghost3">
                    <img src="./img/map/G3.png" />
                </div>
            </div>
        </section>

        <div class="route2">
            <img src="./img/map/route2.png" />
        </div>

        <footer>
            <div id="warn">
                <p id="warnTitle" class="title">
                    <span class="title">鬼島探險</span>
                    注意事項</p>
                <ol>
                    <li>美食壯膽，再出發探險</li>
                    <li>不要半夜吹口哨、不要嬉笑打鬧</li>
                    <li>有人拍肩，不要回頭看</li>
                    <li>尋鬼探險事後三炷香</li>
                    <li>探險完畢若有不適，本站既不負責</li>
                </ol>
            </div>
            <div id="spell" class="cameraSpell">
                <div class="papper">
                    <img src="./img/footer/spell_1.png">
                </div>
                
            </div>
            <div id="footLink">
                <a href="">
                    <img src="./img/logo/LOGO_black.png" id="BottomLogo">
                </a>
                <nav>
                    <ul>
                        <li>
                            <p>
                                <a href="../ghostIsland.html">
                                    前進鬼島
                                </a>
                            </p>

                            <p>
                                <a href="../index.html">
                                    尋鬼探險
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="../leaderboard.html">
                                    靈異票選
                                </a>
                            </p>

                            <p>
                                <a href="../game.html">
                                    試膽測驗
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="../forum.html">
                                    靈異討論
                                </a>
                            </p>

                            <p>
                                <a href="../forum.html">
                                    文章投稿
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="../member.html">
                                    會員中心
                                </a>

                            </p>
                            <p>
                                <span class="subLink">
                                    <a href="../member.html">
                                        會員資料
                                    </a>
                                    <a href="../member.html">
                                        揪團紀錄
                                    </a>
                                </span>
                                <span class="subLink">
                                    <a href="../member.html">
                                        我的收藏
                                    </a>
                                    <a href="../member.html">
                                        投稿紀錄
                                    </a>
                                </span>
                            </p>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
        
    </div>
    <script src="./js/ghostIslandSelect.js"></script>
</body>

</html>