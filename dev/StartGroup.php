<?php
session_start();
$tour_no = $_REQUEST["tour_no"];
$spot_no = $_REQUEST["spot_no"];


$errMsg = "";

//連線資料庫
try {

    require_once("./php/connect.php");

    // 基本資訊
    $sql =
        "SELECT * 
        FROM tour t JOIN spot s ON (t.spot_no = s.spot_no) left join `member` m on (t.mem_no = m.mem_no) 
        where t.tour_no  = :tour_no ";
    $tours = $pdo->prepare($sql);
    $tours->bindValue(":tour_no", $tour_no);
    $tours->execute();
    // $toursRow = $tours->fetchObject();

    //推薦行程
    $sql = "SELECT * 
    from tour t join spot s on (t.spot_no = s.spot_no) 
                left join food f on (t.food_no = f.food_no) 
                left join temple tm on (t.temple_no = tm.temple_no)
                 join `member` m on (t.mem_no = m.mem_no)  
                where tour_no = :tour_no ";
    // -- FROM tour t JOIN spot s ON t.spot_no = s.spot_no where tour_no = :tour_no ";
    $OfficialTour = $pdo->prepare($sql);
    $OfficialTour->bindValue(":tour_no", $tour_no);
    $OfficialTour->execute();


    //相關行程  以既定景點為標準
    $sql = "SELECT * 
    from tour t join spot s on (t.spot_no = s.spot_no) 
                left join food f on (t.food_no = f.food_no) 
                left join temple tm on (t.temple_no = tm.temple_no)
                left join `member` m on (t.mem_no = m.mem_no)  
                where s.spot_no = :spot_no
                limit 1,6 ";
    // -- FROM tour t JOIN spot s ON t.spot_no = s.spot_no where tour_no = :tour_no ";
    $spot_nos = $pdo->prepare($sql);
    $spot_nos->bindValue(":spot_no", $spot_no);
    $spot_nos->execute();



    //顯示所有該揪團景點留言
    $sql = "select msg.tour_no, mem.mem_name, mem.mem_img, msg.tour_msg_datetime msg_time, msg.tour_msg_content 
    from tour_msg msg join tour t on (msg.tour_no = t.tour_no) 
    left join `member` mem on (msg.mem_no = mem.mem_no)
     where msg.tour_no =:tour_no
     order by msg_time desc";
    $tourMsg = $pdo->prepare($sql);
    $tourMsg->bindValue(":tour_no",$tour_no);
    $tourMsg->execute();
} catch (PDOException $e) {
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine() . "<br>";
}

?>













<?php
if ($errMsg != "") {
    var_dump(13);
} else {
    $toursRow = $tours->fetchObject();
}
?>


<?php
                    if ($errMsg != "") {
                        var_dump($errMsg);
                    } else {
                        $OfficialTourRows = $OfficialTour->fetchObject();
                    };
                     ?>










<?php
if ($errMsg != "") {
    var_dump(13);
} else {
    $spot_nosRows = $spot_nos->fetchAll(PDO::FETCH_ASSOC);
}
?>



<!-- 顯示所有該留言 -->
<?php
if ($errMsg != "") {
    var_dump(13);
} else {
    $tourMsgRows=$tourMsg->fetchAll(PDO::FETCH_ASSOC);
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

    <title>前進鬼島-新莊廢棄醫院</title>
</head>

<body>
 
    <!-- 鬼箭頭 -->
    <div class="go_top">
        <img src="img/adventrue/go_top.png" alt="">
    </div>
    <!-- 滑鼠上的鬼 -->
    <div id="mouse"></div>
    <!-- 滑鼠上的鬼-->

     <!-- ================ 撰寫留言視窗 ================ -->
     <div class="spotWroteMsgBG">
            <div class="spotWroteMsgContent">
                <h2>【<?php echo $toursRow->tour_title;?>】</h2>
                <div class="writeMsgZone">
                    <div class="personalMsg">
                        <div class="headIcon">
                           
                        </div>
                        <div class="neme">
                            <p><?=$_SESSION["mem_name"]?></p>
                        </div>
                    </div>
                    <form method="post" >
                        <input type="hidden" name="tour_no" id="tourMsgNo" value="<?php echo $toursRow->tour_no;?>">
                        <input type="hidden" name="mem_no" id="SpotMsgMemNo" value="3">
                        <textarea name="spot_msg_content" id="tourMsg" cols="30" rows="10"  placeholder="詳細說明你的靈異體驗...." value="ddasdsadds"></textarea>
                        <div class="btnWrap">
                            <input type="reset" value="取消" id="cancelMsgBtn2" class="btn-outline cancelMsg">
                            <input type="submit" value="發佈" id="sendSpotMsg" class="btn-outline sendMsg">
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
        <!-- ================ 撰寫留言視窗 ================ -->



        
    <div class="StartGroup_wrapper">
        <div id="StartGroupSpotBG">
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


            <section class="fog">
                <figure class="absolute-bg" style="background-image: url('https://source.unsplash.com/3ytjETpQMNY/1600x900');"></figure>
                <div class="fog__container">
                    <div class="fog__img fog__img--first"></div>
                    <div class="fog__img fog__img--second"></div>
                </div>
            </section>


            <section id="StartGroup_Section1">
                <div class="breadcrumb">
                    <ul>
                        <li><a href="./ghostindex.html">首頁</a></li>
                        <li><a href="./adventrue.html">尋鬼探險</a></li>
                        <li><a href="">新莊廢棄醫院</a></li>
                    </ul>
                </div>

                <div class="spotIntro">

                    <div class="picZone">
                        <div class="bigPic">
                            <!-- //這裡要放照片要跟下面第一章依樣  echo $toursRow->tour_img;  -->
                            <img src="img/tour/<?php echo $toursRow->tour_image ?>">
                        </div>
                        <!-- <div class="photobook">
                                <h2>
                                    <img src="./img/icon/camera.png">
                                    靈異相簿
                                </h2>
                                <div class="smallPicZone">
                                    <img src="./img/spot/spot1/SP_big_1.png" class="smallPic">
                                    <img src="./img/spot/spot1/SP_big_2.png" class="smallPic">
                                    <img src="./img/spot/spot1/SP_big_3.png" class="smallPic">
                                </div>
                            </div> -->
                    </div>
                    <div class="txtZone">
                        <h1>【<?php echo $toursRow->tour_title; ?>】</h1>
                        <div class="introTxt">
                            <p>
                                <?php echo $toursRow->tour_content; ?>
                            </p>
                        </div>
                        <div class="StartGroup_spotInform">
                            <ul>
                                <li>
                                    <div class="StartGroup_people_img">
                                        <img src="<?php echo $toursRow->mem_img; ?>" alt="">
                                    </div>
                                    <?php echo $toursRow->mem_name ?>
                                </li>
                                <li>
                                    <img src="./img/icon/location.png">
                                    <?php echo $toursRow->spot_address; ?>
                                </li>
                                <li>
                                    <i class="far fa-calendar-alt"></i>
                                    出團日期：<span> <?php echo $toursRow->tour_datetime; ?></span>
                                </li>
                                <li>
                                    <div>發起日期：</div><span> <?php echo $toursRow->tour_settime; ?> </span>
                                </li>
                                <li>
                                    <div>截止日期：</div><span id="tour_endtime"> <?php echo $toursRow->tour_endtime; ?> </span>
                                </li>

                                <li>
                                    <i class="fas fa-dollar-sign"></i>
                                    總預算約<span>

                                        <?php
                                        $spot_budget = $toursRow->spot_budget;
                                        $food_budget = $toursRow->food_budget;
                                        echo ($spot_budget + $food_budget);

                                        ?>


                                    </span>元
                                </li>
                            </ul>
                        </div>

                        <div class="spotInform">
                            <p class="btn-outline" id="participate">
                            立即加入>
                            </p>
                        </div>

                        <div class="spiderweb">
                            <img src="./img/spot/spiderweb.png">
                        </div>
                    </div>

                </div>
                <!-- 進度條 -->
                <div class="progress">
                    <span>
                    </span>
                    <div class="progress-bar">
                        <span>
                            <div class="progress_image">
                                <img src="img/adventrue/個人頭像_無_工作區域 1.png" alt="">
                            </div>
                            <p>目前<span class="number_of_participants"><?php echo $toursRow->number_of_participants; ?></span>/<span class="max_of_participants"><?php echo $toursRow->max_of_participants; ?></span>人</p>
                        </span>
                    </div>
                </div>



            </section>

            <section id="StartGroup_Section2">
                <nav>
                    <h3 class="tablink selected" id="tab1">自訂行程</h3>
                    <h3 class="tablink" id="tab2">揪團留言</h3>
                </nav>
                <div class="allTabPage">
                   

                        <div id="tabPage1" class="tabpage">
                            <div id="officalTour">
                                         <?php if ($OfficialTourRows->temple_tool==null){
                                             $temple_tool = "無";
                                         }else{
                                            $temple_tool=$OfficialTourRows->temple_tool;
                                         }?>

                                <?php if ($OfficialTourRows->temple_name != null) {
                                    echo  ' <div class="tourSpot">
                                <div class="tourImg">
                                    <img src="./img/temple/', $OfficialTourRows->temple_img, '">
                                </div>
                                <div class="tourSpotTxt">
                                    <h2 class="spotTitle">【行程一】<span>', $OfficialTourRows->temple_name, '</span></h2>
                                    <p>', $OfficialTourRows->temple_content, '</p>

                                    <div class="tourSpotInfo">

                                        <div class="btn-outline2">
                                            <img src="./img/icon/location.png">
                                            <p>地理位置</p>
                                            <div class="moreInfo">
                                            ', $OfficialTourRows->temple_location, '
                                            </div>
                                            <div class="triangle"></div>


                                        </div>

                                        <div class="btn-outline2">
                                            <img src="./img/icon/tool.png">
                                            <p>所需工具</p>
                                            <div class="moreInfo">
                                            ',$temple_tool, '
                                            </div>
                                            <div class="triangle"></div>
                                        </div>

                                        <div class="btn-outline2">
                                            <img src="./img/icon/fee.png">
                                            <p>參加費用</p>
                                            <div class="moreInfo">
                                            ', $OfficialTourRows->temple_budget, '元
                                            </div>
                                            <div class="triangle"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>';
                                    if ($OfficialTourRows->food_name != null) {
                                        echo  ' <div class="tourSpot">
                                <div class="tourImg">
                                <img src="./img/food/', $OfficialTourRows->food_img, '">
                                </div>
                                <div class="tourSpotTxt">
                                    <h2 class="spotTitle">【行程二】<span>', $OfficialTourRows->food_name, '</span></h2>
                                    <p>', $OfficialTourRows->food_content, '</p>
    
                                    <div class="tourSpotInfo">
    
                                        <div class="btn-outline2">
                                        <img src="./img/icon/location.png">
                                            <p>地理位置</p>
                                            <div class="moreInfo">
                                                 ',$OfficialTourRows->food_location, '
                                            </div>
                                            <div class="triangle"></div>
                                        </div>
    
                                        <div class="btn-outline2">
                                            <img src="./img/icon/tool.png">
                                            <p>所需工具</p>
                                            <div class="moreInfo">
                                                ', $temple_tool, '
                                            </div>
                                            <div class="triangle"></div>
                                        </div>
    
                                        <div class="btn-outline2">
                                            <img src="./img/icon/fee.png">
                                            <p>參加費用</p>
                                            <div class="moreInfo">
                                            ', $OfficialTourRows->food_budget, '元
                                            </div>
                                            <div class="triangle"></div>
                                        </div>
                                    </div>
                                </div>
                           </div>';
                                    };
                                } elseif ($OfficialTourRows->food_name != null) {

                                    echo  ' <div class="tourSpot">
                            <div class="tourImg">
                            <img src="./img/food/', $OfficialTourRows->food_img, '">
                            </div>
                            <div class="tourSpotTxt">
                               <h2 class="spotTitle">【行程一】<span>', $OfficialTourRows->food_name, '</span></h2>
                                <p>', $OfficialTourRows->food_content, '</p>

                                <div class="tourSpotInfo">
                                    <div class="btn-outline2">
                                        <img src="./img/icon/location.png">
                                        <p>地理位置</p>
                                        <div class="moreInfo">
                                        ',$OfficialTourRows->food_location, '
                                        </div>
                                        <div class="triangle"></div>


                                    </div>

                                    <div class="btn-outline2">
                                        <img src="./img/icon/tool.png">
                                        <p>所需工具</p>
                                        <div class="moreInfo">
                                            ',$temple_tool,'
                                        </div>
                                        <div class="triangle"></div>
                                    </div>

                                    <div class="btn-outline2">
                                        <img src="./img/icon/fee.png">
                                        <p>參加費用</p>
                                        <div class="moreInfo">
                                        ', $OfficialTourRows->food_budget,'
                                        </div>
                                        <div class="triangle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>';
                                } ?>

                                <div class="tourSpot">
                                    <div class="tourImg">
                                        <img src="<?php echo $OfficialTourRows->spot_image_card; ?>">
                                    </div>
                                    <div class="tourSpotTxt">
                                        <h2 class="spotTitle">【行程<span class="tour_number"></span>】<span><?php echo $OfficialTourRows->spot_name;?></span></h2>
                                        <p><?php echo $OfficialTourRows->spot_content ?></p>

                                        <div class="tourSpotInfo">

                                            <div class="btn-outline2">
                                                <img src="./img/icon/location.png">
                                                <p>地理位置</p>
                                                <div class="moreInfo">
                                                    <?php echo $OfficialTourRows->spot_address ?>
                                                </div>
                                                <div class="triangle"></div>
                                            </div>

                                            <div class="btn-outline2">
                                                <img src="./img/icon/tool.png">
                                                <p>所需工具</p>
                                                <div class="moreInfo">
                                                    <?php 
                                                    if($OfficialTourRows->spot_tool==null){
                                                    echo "無";
                                                    }else{
                                                        echo $OfficialTourRows->spot_tool;
                                                    };
                                                    ?>
                                                </div>
                                                <div class="triangle"></div>
                                            </div>

                                            <div class="btn-outline2">
                                                <img src="./img/icon/fee.png">
                                                <p>參加費用</p>
                                                <div class="moreInfo">
                                                <?php 
                                                    if($OfficialTourRows->spot_budget==null){
                                                    echo "0元";
                                                    }else{
                                                        echo $OfficialTourRows->spot_budget."元";
                                                    };
                                                    ?>
                                                  
                                                </div>
                                                <div class="triangle"></div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <nav class="tourStatus">
                                    <ul>

                                        <!-- <li class="statusCircle">
                                            <p class=" circle "></p>
                                                 <p class="line"></p>
                                                
                                            </li>
                                            <li class="statusCircle">
                                       
                                            <p class=" circle "></p>
                                            </li> -->

                                    </ul>

                                </nav>

                            </div>


                            <!-- 客觀您不滿意 -->
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
                                    <a href="./createAdventure.php?spot_no=<?= $spot_no ?>">
                                        建立客製化揪團
                                    </a>
                                </div>

                            </div>

                        </div>


                 
                    <!-- $OfficialTourRows -->
                    <div id="tabPage2" class="tabpage">
                        <div class="writeBtnWrap">
                            <div class="btn-outline OpenwriteMsgBox2">
                                撰寫留言
                            </div>
                        </div>
                        <!-- 動態新增區塊 -->
                        <div class="msgZone">
                            <?php foreach ($tourMsgRows as $i => $tourMsgRow) { ?>
                                <div class="spotMsg">
                                    <div class="msgWrap">
                                        <div class="headIcon">
                                            <img src="
                    <?php if ($tourMsgRow['mem_img'] == null) { ?>
                        ./img/icon/default_header.svg
                    <?php } else {
                                    echo $tourMsgRow['mem_img'];
                                } ?>
                    ">
                                        </div>
                                        <div class="txtZone">
                                            <div class="msgInfo">
                                                <p class="name"><?= $tourMsgRow['mem_name'] ?></p>
                                                <p class="date"><?= $tourMsgRow['msg_time'] ?> 發表</p>
                                            </div>

                                            <div class="msgContent">
                                                <p>
                                                    <?= $tourMsgRow['tour_msg_content'] ?>
                                                </p>
                                            </div>

                                            <!-- <div class="reportZone">
                        <img src="./img/icon/report_red.svg">
                        <p>檢舉留言</p>
                    </div> -->
                                        </div>
                                    </div>

                                    <div class="ghostFace">
                                        <img src="./img/spot/msgGhostFace.png">
                                    </div>
                                </div>
                            <?php } ?>


                        </div>
                    </div>
                </div>

                <div class="join">
                </div>
            </section>




            <section id="StartGroup_Section3">

                <div class="titleZone">
                    <h1 class="title">相關揪團</h1>
                    <img src="./img/spot/spiderweb2.png">
                </div>

                <div class="cardContain">

                    <div id="cardDisplay">

                        <?php foreach ($spot_nosRows as $i => $spot) { ?>

                            <div class="tourCard" title="<?= $spot['tour_no'] ?>">

                                <div class="tourImg">
                                    <img src="./img/tour/<?= $spot['tour_image'] ?>">
                                </div>
                                <div class="tourTxt">
                                    <h2 class="tourTitle">【<?php echo $spot['tour_title'] ?>】</h2>

                                    <div class="tourHost">

                                        <img src="
                        <?php if ($spot['mem_img'] == null) { ?>
                            ./img/icon/default_header.svg
                        <?php } else {
                                echo $spot['mem_img'];
                            } ?>
                        " class="header">
                                        <p class="name"><?= $spot['mem_name'] ?></p>

                                    </div>

                                    <div class="tourInfo">


                                        <div class="date">
                                            <img src="./img/icon/date.svg">
                                            <p>
                                                出團日期：<?= $spot['tour_datetime'] ?>
                                            </p>

                                        </div>

                                        <div class="tourSpot">
                                            <img src="./img/icon/location_red.png">
                                            <p>
                                                <?= $spot['spot_name'] ?><?php if ($spot['temple_name'] != null) {
                                                                                echo "、", $spot['temple_name'];
                                                                            } ?><?php if ($spot['food_name'] != null) {
                                                                                    echo "、", $spot['food_name'];
                                                                                } ?>
                                            </p>
                                        </div>

                                        <div class="tourJoin">
                                            <img src="./img/icon/tourCount.svg">
                                            <p>
                                                參加人數：<?= $spot['number_of_participants'] ?>/<?= $spot['max_of_participants'] ?>人
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tourFavorite">
                                    <p class="like">
                                        <img src="./img/icon/likeBefore.svg" title="加入收藏">
                                    </p>
                                </div>

                            </div>

                        <?php } ?>


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



















            <section id="StartGroup_Section4">
                <div class="adventure_main">
                    <div class="adventure_btn">
                        <a href="adventrue.html">
                            <div class="ghost_btn_all">
                                <div class="ghost_btn_img1">
                                    <img src="./img/adventrue/ghost_btn_img1.png" alt="" />
                                </div>
                                <div class="ghost_btn1"><img src="./img/adventrue/ghost_btn1.png" alt="" /></div>
                                <div class="ghost_tape">
                                    <span>更多揪團</span><img src="./img/adventrue/ghost_tape.png" alt="" />
                                </div>
                            </div>
                        </a>
                        <a href="./createAdventure.php?spot_no=<?= $spot_no ?>">
                            <div class="ghost_btn2_all">
                                <div class="ghost_btn_img2">
                                    <img src="./img/adventrue/ghost_btn_img2.png" alt="" />
                                </div>
                                <div class="ghost_btn2"><img src="./img/adventrue/ghost_btn2.png" alt="" /></div>
                                <div class="ghost_tape">
                                    <span>來去揪團</span><img src="./img/adventrue/ghost_tape.png" alt="" />
                                </div>
                            </div>
                        </a>
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










    <!-- 功能 -->
    <script src="https://code.jquery.com/jquery-2.2.4.js"></script>
    <!-- TAB 標籤 -->
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="./js/ghostSpotTab.js"></script>
    <script src="./js/ghostSpotCarasoul.js"></script>
    <script src="./js/ghostSpotSwitchImg.js"></script>
    <script src="./js/StartGroupWriteMsg.js"></script>



    <!-- <script src="js/index._section3_tab.js"></script> -->
    <script src="js/StartGroup.js"></script>
    <!-- //抓他的團名稱 -->
    <span id="chat_tour"><?php echo $tour_no ?></span>
</body>

</html>