<?php
$spot_no = $_REQUEST["spot_no"];
$order_no = $_REQUEST["order_no"];
$errMsg = "";

//連線資料庫
try{
    require_once("./php/connect.php");

    $sql = "select * from spot where spot_no = :spot_no";
    $spots = $pdo->prepare($sql);
    $spots ->bindValue(":spot_no", $spot_no);    
    $spots ->execute();

    // $sql = "select * from tour where spot_no = :spot_no order by tour_datetime desc limit 6";
    // $tour = $pdo->prepare($sql);
    // $tour ->bindValue(":spot_no", $spot_no);    
    // $tour ->execute();


}catch(PDOException $e){
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
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
<?php 
if( $errMsg != ""){ //例外
  alert($errMsg);
}else{
    $spotRow = $spots->fetchObject();
    // $tourRow = $tour->fetchObject();
?>
<!-- title PHP 有改 -->
    <title>前進鬼島-<?php echo $spotRow->spot_name; ?></title>

    </body>

</head>

<body>


    <!-- 鬼箭頭 -->
    

    <!-- 撰寫留言視窗 -->
        <!-- 跳出留言視窗 -->
        <!-- 跳出留言視窗 PHP 有改 -->
        <div class="spotWroteMsgBG">
            <div class="spotWroteMsgContent">
                <h2>【<?php echo $spotRow->spot_name; ?>】</h2>
                <div class="writeMsgZone">
                    <div class="personalMsg">
                        <div class="headIcon">
                            <img src="./img/icon/header2.png">
                        </div>
                        <div class="neme">
                            <p>黃冠禎</p>
                        </div>
                    </div>
                    <form action="">
                        <textarea name="" id="spotMsg" cols="30" rows="10"  placeholder="詳細說明你的靈異體驗...."></textarea>
                        <div class="btnWrap">
                            <input type="reset" value="取消" id="cancelMsgBtn" class="btn-outline cancelMsg">
                            <input type="submit" value="發佈" class="btn-outline sendMsg">
                        </div>
                    </form>
                </div>
                
            </div>
        </div>

    <div class="wrapper">

        
        <div id="ghostSpotBG">
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
            <p><span class="login_btn">登入</span></p>
            <p><span class="creat_btn">註冊</span></p>
        </div>
    </div>
    <nav class="desktopHeader">
        <ul>
            <li class="pageSelectEffect1">
                <a href="ghostIsland.html" class="title pageSelectEffect2">
                    前進鬼島
                </a>
            </li>
            <li class="pageSelectEffect2-2">
                <a href="adventrue.html" class="title @@link002">
                    尋鬼探險
                </a>
            </li>
            <li class="pageSelectEffect2-3">
                <a href="leaderboard.html" class="title @@link003">
                    靈異票選
                </a>
            </li>
            <li>
                <a href="index.html">
                    <img id="topLogo" src="./img/logo/LOGO_white.png" />
                </a>
            </li>
            <li class="pageSelectEffect2-4">
                <a href="game.html" class="title @@link004">
                    試膽測驗
                </a>
            </li>
            <li class="pageSelectEffect2-5">
                <a href="forum.html" class="title @@link005">
                    靈異討論
                </a>
            </li>
            <li class="pageSelectEffect2-6">
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
                    <li class="title login_btn">登入/註冊</li>
                </a>

                <li id="hamburgerSound" class="title">Sound Off</li>
            </ul>
        </nav>
    </div>
    <div id="indexLogin">
        <section class="login_page1" style="display: none;">
            <div class="logincancel"></div>
            <div class="login_cover">
                <img src="./img/logo/LOGO_black.png" alt="" />
            </div>
            <form action="" method="POST">
                <p>
                    <input type="text" id="memid" placeholder="帳號" />
                </p>
                <p>
                    <input type="text" id="mempwd" placeholder="密碼" />
                </p>
            </form>
            <div id="loginbutton">登入</div>
            <div class="next_login">註冊會員</div>
        </section>

        <section class="login_page2" style="display: none;">
            <div class="logincancel"></div>
            <div class="login_cover">
                <img src="./img/login/registered-01 (1).png" alt="" />
            </div>
            <form action="" method="POST">
                <p>
                    <label for="memid">會員帳號</label>
                    <input type="text" id="memid" placeholder="4~12英文字母、數字" />
                </p>
                <p>
                    <label for="mempwd">會員密碼</label>
                    <input type="text" id="mempwd" placeholder="4~12英文字母、數字" />
                </p>
                <p>
                    <label for="mempwdcheck">確認密碼</label>
                    <input type="text" id="mempwdcheck" placeholder="重新確認密碼" />
                </p>
                <p>
                    <label for="memname">會員姓名</label>
                    <input type="text" id="memname" placeholder="姓名" />
                </p>
                <p>
                    <label for="memcell">手機號碼</label>
                    <input type="text" id="memcell" placeholder="09XX-XXX-XXX" />
                </p>
                <p>
                    <label for="memail">電子信箱</label>
                    <input type="text" id="memail" placeholder="輸入Email須包含{@和.}" />
                </p>
            </form>
            <div id="sure_btn">註冊會員</div>
        </section>
        <!-- <script>
            $(document).ready(function() {
                $(".login_btn").click(function() {
                    $("#indexLogin, .login_page1").css("display", "block")
                })
                $(".creat_btn").click(function() {
                    $("#indexLogin, .login_page2").css("display", "block")
                })
                $(".next_login").click(function() {
                    $(".login_page2").css("display", "block")
                    $(".login_page1").css("display", "none")
                })
                $(".logincancel").click(function() {
                    $(".login_page1 , .login_page2").css("display", "none")
                    $("#memid, #mempwd, #mempwdcheck, #memname, #memcell, #memail").val("")
                })
            })
        </script> -->
    </div>
</header>
            <!-- section1 PHP 有改 -->
            <section id="ghostSpotSection1">

                <div class="breadcrumb">
                    <ul>
                        <li><a href="">首頁</a></li>
                        <li><a href="">前進鬼島</a></li>
                        <li><a href=""><?php echo $spotRow->spot_name; ?></a></li>
                    </ul>
                </div>

                <div class="spotIntro">

                    <!-- 是前三名的話顯示名次 start -->
                    <?php if($order_no < 4){?>
                    <div id="rank">
                        <img src="./img/component/card/rank.png">
                        <p>NO.<?php echo $order_no?></p>
                    </div>
                    <?php } ?>
                    <!-- 是前三名的話顯示名次 end -->

                    <div class="picZone">
                        <div class="bigPic">
                            <img src="<?php echo $spotRow->spot_image_1; ?>">
                        </div>
                        <div class="photobook">
                            <h2>
                                <img src="./img/icon/camera.png">
                                靈異相簿
                            </h2>
                            <div class="smallPicZone">

                                <img src="<?php echo $spotRow->spot_image_1; ?>" class="smallPic ">


                                <img src="<?php echo $spotRow->spot_image_2; ?>" class="smallPic">


                                <img src="<?php echo $spotRow->spot_image_3; ?>" class="smallPic">

                            </div>
                        </div>

                    </div>
                    
                    
                    <div class="txtZone">
                        <h1>【<?php echo $spotRow->spot_name; ?>】</h1>
                        <div class="introTxt">
                            <h3><?php echo $spotRow->spot_intro; ?></h3>
                            <p>
                            <?php echo $spotRow->spot_content; ?>
                            </p>
                        </div>

                        <div class="spotInform">
                            <ul>
                                <li>
                                    <img src="./img/icon/location.png">
                                    <?php echo $spotRow->spot_address; ?>
                                </li>
                                <li>
                                    <img src="./img/icon/pulse.png">
                                    膽量指數：<span> <?php echo $spotRow->spot_scary_rate; ?> </span> /10
                                </li>
                                <li>
                                    <img src="./img/icon/vote-03.png">
                                    靈異票選 <?php echo $spotRow->spot_vote_count; ?> 票
                                </li>
                            </ul>
                        </div>

                        <div class="spotInform">

                            <!-- 改變投票btn start -->
                            <form method="post">
                                <input type="hidden" id="voteSpotNo" value="<?php echo $spotRow->spot_no; ?>">
                                <input type="button" class="btn-outline" id="voteThisSpot" value="投給【<?php echo $spotRow->spot_name; ?>">
                            </form>
                            <!-- 改變投票btn end -->
                        </div>

                        <div class="spiderweb">
                            <img src="./img/spot/spiderweb.png">
                        </div>
                    </div>

                </div>

                <div>

                </div>
            </section>

<?php 
}
?>

            <section id="ghostSpotSection2">

                <div class="titleZone">
                    <h1 class="title">景點揪團</h1>
                    <img src="./img/spot/spiderweb2.png">
                </div>

                <div class="cardContain">

                    <div id="cardDisplay">
                        
                        <div class="tourCard ">
                            <a href="">
                                <div class="tourImg">
                                    <img src="./img/component/card/spotCard01.png">
                                </div>
                                <div class="tourTxt">
                                    <h2 class="tourTitle">【深夜廢棄醫院探險】</h2>

                                    <div class="tourHost">

                                        <img src="./img/icon/header1.png" class="header">
                                        <p class="name">富江我老婆</p>

                                    </div>

                                    <div class="tourInfo">


                                        <div class="date">
                                            <img src="./img/icon/date.svg">
                                            <p>
                                                出團日期：2020/01/29
                                            </p>

                                        </div>

                                        <div class="tourSpot">
                                            <img src="./img/icon/location_red.png">
                                            <p>
                                                新莊廢棄醫院、天后宮、酸辣粉
                                            </p>
                                        </div>

                                        <div class="tourJoin">
                                            <img src="./img/icon/tourCount.svg">
                                            <p>
                                                參加人數：6/10 人
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tourFavorite">
                                    <p class="like">
                                        <img id="heart" src="./img/icon/likeBefore.svg" title="加入收藏">
                                        10
                                    </p>
                                </div>
                            </a>



                        </div>

                        <!-- <div class="tourCard">
                            <a href="">
                                <div class="tourImg">
                                    <img src="./img/component/card/spotCard01.png">
                                </div>
                                <div class="tourTxt">
                                    <h2 class="tourTitle">【深夜廢棄醫院探險】</h2>

                                    <div class="tourHost">

                                        <img src="./img/icon/header1.png" class="header">
                                        <p class="name">富江我老婆</p>

                                    </div>

                                    <div class="tourInfo">


                                        <div class="date">
                                            <img src="./img/icon/date.svg">
                                            <p>
                                                出團日期：2020/01/29
                                            </p>

                                        </div>

                                        <div class="tourSpot">
                                            <img src="./img/icon/location_red.png">
                                            <p>
                                                新莊廢棄醫院、天后宮、酸辣粉
                                            </p>
                                        </div>

                                        <div class="tourJoin">
                                            <img src="./img/icon/tourCount.svg">
                                            <p>
                                                參加人數：6/10 人
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tourFavorite">
                                    <p class="like">
                                        <img id="heart" src="./img/icon/likeBefore.svg" title="加入收藏">
                                        10
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div class="tourCard">
                            <a href="">
                                <div class="tourImg">
                                    <img src="./img/component/card/spotCard01.png">
                                </div>
                                <div class="tourTxt">
                                    <h2 class="tourTitle">【深夜廢棄醫院探險】</h2>

                                    <div class="tourHost">

                                        <img src="./img/icon/header1.png" class="header">
                                        <p class="name">富江我老婆</p>

                                    </div>

                                    <div class="tourInfo">


                                        <div class="date">
                                            <img src="./img/icon/date.svg">
                                            <p>
                                                出團日期：2020/01/29
                                            </p>

                                        </div>

                                        <div class="tourSpot">
                                            <img src="./img/icon/location_red.png">
                                            <p>
                                                新莊廢棄醫院、天后宮、酸辣粉
                                            </p>
                                        </div>

                                        <div class="tourJoin">
                                            <img src="./img/icon/tourCount.svg">
                                            <p>
                                                參加人數：6/10 人
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tourFavorite">
                                    <p class="like">
                                        <img id="heart" src="./img/icon/likeBefore.svg" title="加入收藏">
                                        10
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div class="tourCard">
                            <a href="">
                                <div class="tourImg">
                                    <img src="./img/component/card/spotCard01.png">
                                </div>
                                <div class="tourTxt">
                                    <h2 class="tourTitle">【深夜廢棄醫院探險】</h2>

                                    <div class="tourHost">
                                        <img src="./img/icon/header1.png" class="header">
                                        <p class="name">富江我老婆</p>
                                    </div>

                                    <div class="tourInfo">

                                        <div class="date">
                                            <img src="./img/icon/date.svg">
                                            <p>
                                                出團日期：2020/01/29
                                            </p>
                                        </div>

                                        <div class="tourSpot">
                                            <img src="./img/icon/location_red.png">
                                            <p>
                                                新莊廢棄醫院、天后宮、酸辣粉
                                            </p>
                                        </div>

                                        <div class="tourJoin">
                                            <img src="./img/icon/tourCount.svg">
                                            <p>
                                                參加人數：6/10 人
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div class="tourFavorite">
                                    <p class="like">
                                        <img id="heart" src="./img/icon/likeBefore.svg" title="加入收藏">
                                        10
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div class="tourCard">
                            <a href="">
                                <div class="tourImg">
                                    <img src="./img/component/card/spotCard01.png">
                                </div>
                                <div class="tourTxt">
                                    <h2 class="tourTitle">【深夜廢棄醫院探險】</h2>

                                    <div class="tourHost">
                                        <img src="./img/icon/header1.png" class="header">
                                        <p class="name">富江我老婆</p>
                                    </div>

                                    <div class="tourInfo">

                                        <div class="date">
                                            <img src="./img/icon/date.svg">
                                            <p>
                                                出團日期：2020/01/29
                                            </p>
                                        </div>

                                        <div class="tourSpot">
                                            <img src="./img/icon/location_red.png">
                                            <p>
                                                新莊廢棄醫院、天后宮、酸辣粉
                                            </p>
                                        </div>

                                        <div class="tourJoin">
                                            <img src="./img/icon/tourCount.svg">
                                            <p>
                                                參加人數：6/10 人
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div class="tourFavorite">
                                    <p class="like">
                                        <img id="heart" src="./img/icon/likeBefore.svg" title="加入收藏">
                                        10
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div class="tourCard">
                            <a href="">
                                <div class="tourImg">
                                    <img src="./img/component/card/spotCard01.png">
                                </div>
                                <div class="tourTxt">
                                    <h2 class="tourTitle">【深夜廢棄醫院探險】</h2>

                                    <div class="tourHost">
                                        <img src="./img/icon/header1.png" class="header">
                                        <p class="name">富江我老婆</p>
                                    </div>

                                    <div class="tourInfo">

                                        <div class="date">
                                            <img src="./img/icon/date.svg">
                                            <p>
                                                出團日期：2020/01/29
                                            </p>
                                        </div>

                                        <div class="tourSpot">
                                            <img src="./img/icon/location_red.png">
                                            <p>
                                                新莊廢棄醫院、天后宮、酸辣粉
                                            </p>
                                        </div>

                                        <div class="tourJoin">
                                            <img src="./img/icon/tourCount.svg">
                                            <p>
                                                參加人數：6/10 人
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div class="tourFavorite">
                                    <p class="like">
                                        <img id="heart" src="./img/icon/likeBefore.svg" title="加入收藏">
                                        10
                                    </p>
                                </div>
                            </a>
                        </div> -->

                    </div>

                    <button id="rightScroll" class="scrollBtn" disabled>
                        <span>〈</span>
                    </button>
                    <button id="leftScroll" class="scrollBtn">
                        <span>〉</span>
                    </button>
                </div>

                <div class="G2">
                    <img src="./img/spot/G2.png">
                </div>
                <div class="ghostTalk">
                    <p class="line"></p>
                    <p>天乾物燥...小心火燭...</p>
                    <p class="line"></p>
                </div>

            </section>


            <section id="ghostSpotSection3">
                <nav>
                    <h3 class="tablink selected" id="tab1">推薦行程</h3>
                    <h3 class="tablink" id="tab2">景點留言</h3>
                </nav>
                <div class="allTabPage">
                    <div id="tabPage1" class="tabpage">

                        <div id="officalTour">

                            <div class="newOffTour btn-outline2">
                                <a href="./createAdventure.html">
                                    建立推薦行程
                                </a> 
                            </div>

                            <div class="tourSpot">
                                <div class="tourImg">
                                    <img src="./img/spot/spot1/tour1_spot1.png">
                                </div>
                                <div class="tourSpotTxt">
                                    <h2 class="spotTitle">【行程一】<span>平安宮拜拜</span></h2>
                                    <p>日式風格建築現在已經荒廢無人，保留了完整的醫療器材如白醫師袍、聽診器、病床、藥罐等 還可以清楚看到手術台、診療台，更加有恐怖氣氛。</p>

                                    <div class="tourSpotInfo">

                                        <div class="btn-outline2">
                                            <img src="./img/icon/location.png">
                                            <p>地理位置</p>
                                            <div class="moreInfo">
                                                台北市新莊區思源路177巷32號
                                            </div>
                                            <div class="triangle"></div>


                                        </div>

                                        <div class="btn-outline2">
                                            <img src="./img/icon/tool.png">
                                            <p>所需工具</p>
                                            <div class="moreInfo">
                                                一顆虔誠的心
                                            </div>
                                            <div class="triangle"></div>
                                        </div>

                                        <div class="btn-outline2">
                                            <img src="./img/icon/fee.png">
                                            <p>參加費用</p>
                                            <div class="moreInfo">
                                                香油錢150圓
                                            </div>
                                            <div class="triangle"></div>
                                        </div>
                                    </div>

                                    <div class="tourSpotInfoRwd">

                                        <div class="moreInfo">
                                            <img src="./img/icon/location.png">
                                            <p>地理位置：<span>台北市新莊區思源路177巷32號</span> </p>
                                        </div>

                                        <div class="moreInfo">
                                            <img src="./img/icon/tool.png">
                                            <p>所需工具：<span>一顆虔誠的心</span> </p>
                                        </div>

                                        <div class="moreInfo">
                                            <img src="./img/icon/fee.png">
                                            <p>參加費用：<span>150</span>圓</p>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div class="tourSpot">
                                <div class="tourImg">
                                    <img src="./img/spot/spot1/tour1_spot2.png">
                                </div>
                                <div class="tourSpotTxt">
                                    <h2 class="spotTitle">【行程二】<span>新莊廢棄醫院</span></h2>
                                    <p>日式風格建築現在已經荒廢無人，保留了完整的醫療器材如白醫師袍、聽診器、病床、藥罐等 還可以清楚看到手術台、診療台，更加有恐怖氣氛。</p>

                                    <div class="tourSpotInfo">

                                        <div class="btn-outline2">
                                            <img src="./img/icon/location.png">
                                            <p>地理位置</p>
                                            <div class="moreInfo">
                                                台北市新莊區思源路177巷32號
                                            </div>
                                            <div class="triangle"></div>
                                        </div>

                                        <div class="btn-outline2">
                                            <img src="./img/icon/tool.png">
                                            <p>所需工具</p>
                                            <div class="moreInfo">
                                                手電筒
                                            </div>
                                            <div class="triangle"></div>
                                        </div>

                                        <div class="btn-outline2">
                                            <img src="./img/icon/fee.png">
                                            <p>參加費用</p>
                                            <div class="moreInfo">
                                                0圓
                                            </div>
                                            <div class="triangle"></div>
                                        </div>

                                    </div>

                                    <div class="tourSpotInfoRwd">

                                        <div class="moreInfo">
                                            <img src="./img/icon/location.png">
                                            <p>地理位置：<span>台北市新莊區思源路177巷32號</span> </p>
                                        </div>

                                        <div class="moreInfo">
                                            <img src="./img/icon/tool.png">
                                            <p>所需工具：<span>一顆虔誠的心</span> </p>
                                        </div>

                                        <div class="moreInfo">
                                            <img src="./img/icon/fee.png">
                                            <p>參加費用：<span>150</span>圓</p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <nav class="tourStatus">
                                <ul>
                                    <li class="statusCircle selected">
                                        <p class=" circle selected2"></p>
                                        <p class="line"></p>
                                    </li>
                                    <li class="statusCircle">
                                        <p class="circle"></p>
                                    </li>
                                </ul>

                            </nav>

                        </div>

                        <div class="myTourGuide">
                            <div class="G1">

                                <img src="./img/map/G1.png" class="G1img">

                                <img src="./img/map/G1_L.png" class="G1L">

                                <div class="ghostTalk">
                                    <p class="line"></p>
                                    <p>客倌不滿意...？自己當團主....</p>
                                    <p class="line"></p>
                                </div>

                            </div>

                            <div class="newMyTour btn-outline">
                                <a href="./createAdventure.html">
                                    建立客製化揪團
                                </a>
                            </div>

                        </div>

                    </div>

                    <div id="tabPage2" class="tabpage">

                        <div class="writeBtnWrap">
                            <div class="btn-outline OpenwriteMsgBox">
                                撰寫留言
                            </div>
                        </div>


                        <div class="msgZone">

                            <div class="spotMsg">

                                <div class="msgWrap">
                                    <div class="headIcon">
                                        <img src="./img/icon/default_header.svg">
                                    </div>

                                    <div class="txtZone">

                                        <div class="msgInfo">
                                            <p class="name">富江我老婆</p>
                                            <p class="date">2020-02-12 18:19 發表</p>
                                        </div>

                                        <div class="msgContent">
                                            <p>
                                                這個地方我來了很多次，特別有愛所以寫攻略文。
                                                這邊有居民所以還是希望不要來打擾到人家。旁邊的廢棄宿舍是隱藏關卡，因為那邊有狗會叫引來警衛所以很難過去。
                                            </p>
                                        </div>

                                        <div class="reportZone">
                                            <img src="./img/icon/report_red.svg">
                                            <p>檢舉留言</p>
                                        </div>

                                    </div>
                                </div>

                                <div class="ghostFace">
                                    <img src="./img/spot/msgGhostFace.png">
                                </div>


                            </div>

                            <div class="spotMsg">

                                <div class="msgWrap">
                                    <div class="headIcon">
                                        <img src="./img/icon/default_header.svg">
                                    </div>

                                    <div class="txtZone">

                                        <div class="msgInfo">
                                            <p class="name">富江我老婆</p>
                                            <p class="date">2020-02-12 18:19 發表</p>
                                        </div>

                                        <div class="msgContent">
                                            <p>
                                                這個地方我來了很多次，特別有愛所以寫攻略文。
                                                這邊有居民所以還是希望不要來打擾到人家。旁邊的廢棄宿舍是隱藏關卡，因為那邊有狗會叫引來警衛所以很難過去。
                                            </p>
                                        </div>

                                        <div class="reportZone">
                                            <img src="./img/icon/report_red.svg">
                                            <p>檢舉留言</p>
                                        </div>

                                    </div>
                                </div>

                                <div class="ghostFace">
                                    <img src="./img/spot/msgGhostFace.png">
                                </div>


                            </div>

                            <div class="spotMsg">

                                <div class="msgWrap">
                                    <div class="headIcon">
                                        <img src="./img/icon/default_header.svg">
                                    </div>

                                    <div class="txtZone">

                                        <div class="msgInfo">
                                            <p class="name">富江我老婆</p>
                                            <p class="date">2020-02-12 18:19 發表</p>
                                        </div>

                                        <div class="msgContent">
                                            <p>
                                                這個地方我來了很多次，特別有愛所以寫攻略文。
                                                這邊有居民所以還是希望不要來打擾到人家。旁邊的廢棄宿舍是隱藏關卡，因為那邊有狗會叫引來警衛所以很難過去。
                                            </p>
                                        </div>

                                        <div class="reportZone">
                                            <img src="./img/icon/report_red.svg">
                                            <p>檢舉留言</p>
                                        </div>

                                    </div>
                                </div>

                                <div class="ghostFace">
                                    <img src="./img/spot/msgGhostFace.png">
                                </div>


                            </div>

                            <div class="spotMsg">

                                <div class="msgWrap">
                                    <div class="headIcon">
                                        <img src="./img/icon/default_header.svg">
                                    </div>

                                    <div class="txtZone">

                                        <div class="msgInfo">
                                            <p class="name">富江我老婆</p>
                                            <p class="date">2020-02-12 18:19 發表</p>
                                        </div>

                                        <div class="msgContent">
                                            <p>
                                                這個地方我來了很多次，特別有愛所以寫攻略文。
                                                這邊有居民所以還是希望不要來打擾到人家。旁邊的廢棄宿舍是隱藏關卡，因為那邊有狗會叫引來警衛所以很難過去。
                                            </p>
                                        </div>

                                        <div class="reportZone">
                                            <img src="./img/icon/report_red.svg">
                                            <p>檢舉留言</p>
                                        </div>

                                    </div>
                                </div>

                                <div class="ghostFace">
                                    <img src="./img/spot/msgGhostFace.png">
                                </div>


                            </div>

                            <div class="spotMsg">

                                <div class="msgWrap">
                                    <div class="headIcon">
                                        <img src="./img/icon/default_header.svg">
                                    </div>

                                    <div class="txtZone">

                                        <div class="msgInfo">
                                            <p class="name">富江我老婆</p>
                                            <p class="date">2020-02-12 18:19 發表</p>
                                        </div>

                                        <div class="msgContent">
                                            <p>
                                                這個地方我來了很多次，特別有愛所以寫攻略文。
                                                這邊有居民所以還是希望不要來打擾到人家。旁邊的廢棄宿舍是隱藏關卡，因為那邊有狗會叫引來警衛所以很難過去。
                                            </p>
                                        </div>

                                        <div class="reportZone">
                                            <img src="./img/icon/report_red.svg">
                                            <p>檢舉留言</p>
                                        </div>

                                    </div>
                                </div>

                                <div class="ghostFace">
                                    <img src="./img/spot/msgGhostFace.png">
                                </div>


                            </div>

                        </div>

                        <div class="pageWrap">
                            <div class="pagination">
                <div class="pageBtn"><span class="toLeft">〈 </span></div>
                <p class="PageSelected">1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <div class="pageBtn"><span class="toRight"> 〉</span></div>
            </div>
                                    </div>


                                </div>

                            </div>



            </section>



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
    </div>



    <!-- ============================JS的部分========================= -->
    <!-- 功能 -->
    <script src="https://code.jquery.com/jquery-2.2.4.js"></script>
    
    <!-- TAB 標籤-JQ -->
    <script src="./js/ghostSpotTab.js"></script>
    <!-- 揪團輪播-JS -->
    <script src="./js/ghostSpotCarasoul.js"></script>
    <!-- 景點照片大圖換小圖-JQ -->
    <script src="./js/ghostSpotSwitchImg.js"></script>
    <!-- 留言燈箱 -->
    <script src="./js/ghostIslandWriteMsg.js"></script>

</body>

</html>