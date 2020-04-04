<!-- 連接資料庫 -->
<?php 
try {
    require_once("./php/connect.php");
	$sql =  "select * from dd105g4.spot  Order By spot_vote_count desc limit 1";//第1名
	$sopt1 = $pdo->query($sql);

	$sql2 =  "select * from dd105g4.spot  Order By  spot_vote_count desc limit 1,1";//第2名
	$sopt2 = $pdo->query($sql2);//第2名下面就用$sopt2套用

	$sql3 =  "select * from dd105g4.spot  Order By  spot_vote_count desc limit 2,1";//第2名
	$sopt3 = $pdo->query($sql3);//第2名下面就用$sopt2套用

} catch (PDOException $e) {
	echo "錯誤行號 : " . $e->getLine() . "<br>";
	echo "錯誤訊息 : " . $e->getMessage() . "<br>";
	// echo "系統暫時連不上請聯絡維護人員";
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
<script src="./js/Login.js"></script>
<script src="./js/Login_register.js"></script>
<!-- TweenMax.min外掛 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
<!-- awesome icon外掛包 -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" />
<script src="js/mouse_ghost.js"></script>

<!-- 阿禎scorll外掛 -->
<script src="https://unpkg.com/infinite-scroll@3/dist/infinite-scroll.pkgd.min.js"></script>
<script src="js/tab.js"></script>

<script src="./js/index_Txt_fadeIn.js"></script>

        <title>靈異票選</title>
    </head>
    <body>
           <!-- header -->
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
            <li class="pageSelectEffect1">
                <a href="leaderboard.php" class="title pageSelectEffect2">
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
                <a href="../leaderboard.php">
                    <li class="title">靈異票選</li>
                </a>
                <a href="../game.php">
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

        <!-- 霧氣 -->
        <!-- 有鬼箭頭元素 -->
        <!-- 滑鼠上的鬼 -->
<div id="mouse"></div>
<!-- 滑鼠上的鬼-->
  <div id="leaderboard">
            <!-- 投給你內心 -->
            <div id="vote">
                <!-- <p class="vote-img"> 投給你內心<br> 最深的恐懼！</p> -->
                <img class="vote-img" src="./img/leaderboard/text.png" alt="" />
                <h1 class="vote-text">
                    靈異票選 <br />
                    TOP 10
                </h1>
            </div>
  <!-- 排行TOP前三名 -->
  <div class="Haunted-house">
<?php 
while( $prodRow = $sopt1->fetchObject()){
?>
            <!-- 排行TOP第1名 -->
            <img class="Haunted-house-i" src="<?=$prodRow->spot_image_1?>" alt="" />
                <div class="Strip-background">
					<h2 class="Haunted-house-t"><?="01"?></h2>
					<a class="Haunted-house-p" href="ghostSpot.php?spot_no=%201&order_no=1"><?=$prodRow->spot_name?> <?=$prodRow->spot_vote_count?>票 </a> 
				</div>
			<?php
}
?>
</div>
<div class="Haunted-house">
<?php 
while( $prodRow = $sopt2->fetchObject()){
?>
			<!-- 排行TOP第2名 -->
            <img class="Haunted-house-i" src="<?=$prodRow->spot_image_1?>" alt="" />
			<div class="Strip-background">
					<h2 class="Haunted-house-t"><?="02"?></h2>
					<a class="Haunted-house-p" href="ghostSpot.php?spot_no=11&order_no=2"><?=$prodRow->spot_name?> <?=$prodRow->spot_vote_count?>票 </a> 
			</div>
			<?php
}
?>
</div>
<div class="Haunted-house">
<?php 
while( $prodRow = $sopt3->fetchObject()){
?>
			<!-- 排行TOP第3名 -->
            <img class="Haunted-house-i" src="<?=$prodRow->spot_image_1?>" alt="" />
                <div class="Strip-background">
					<h2 class="Haunted-house-t"><?="03"?></h2>
					<a class="Haunted-house-p" href="ghostSpot.php?spot_no=8&order_no=3"><?=$prodRow->spot_name?> <?=$prodRow->spot_vote_count?>票 </a> 
				</div>
			<?php
}
?>
	</div>


            <!--   來抓交替囉 -->

            <div id="alternately">
                <p class="alternately-p">╲ 來抓交替囉！ ╱</p>
                <img class="alternately-i" src="./img/leaderboard/ghost-1.png" alt="" />
            </div>
             <!--幽靈圖 -->
             <img id="ghost-2-s" src="./img/leaderboard/ghost-2-s.png" alt="" />

            <!-- 排行榜表單 -->
            <div id="leaderboard-form">
                <table id="leaderboard-form-1">
                    <tr id="Form-name">
                        <td class="Form-name">排名</td>
                        <td class="Form-name">景點名稱</td>
                        <td class="Form-name">總票數</td>
                    </tr>
                    <tr class="Ranking">
                   <?php include 'top10.php';?>
                    </tr>
                </table>
                <img class="mouse" src="./img/leaderboard/ghost-3.png" alt="" />
            </div>
            
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
                        <a href="../leaderboard.php">
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
    </body>
</html>
