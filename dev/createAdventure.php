<?php
$spot_no = $_REQUEST["spot_no"];
$errMsg = "";

//連線資料庫
try{
    require_once("./php/connect.php");

    $sql = "select * 
            from spot 
            where spot_no = :spot_no";
    $spots = $pdo->prepare($sql);
    $spots ->bindValue(":spot_no", $spot_no);    
    $spots ->execute();

    $sql = "select *
            from temple 
            where substr(temple_location,1,2) in 
                     (select substr(spot_address,1,2)
                      from spot
                      where spot_no=:spot_no);";
    $temples = $pdo->prepare($sql);
    $temples ->bindValue(":spot_no", $spot_no);    
    $temples ->execute();

    $sql = "select *
            from food 
            where substr(food_location,1,2) in 
                     (select substr(spot_address,1,2)
                      from spot
                      where spot_no=:spot_no);";
    $foods = $pdo->prepare($sql);
    $foods ->bindValue(":spot_no", $spot_no);    
    $foods ->execute();


}catch(PDOException $e){
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
    echo $errMsg;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <title>尋鬼探險 - 新增揪團</title>
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

  <script src="./js/index_Txt_fadeIn.js"></script>

  <script src="js/createAdventure.js"></script>

</head>

<body>
  <!-- 滑鼠上的鬼 -->
  <div id="mouse"></div>
  <!-- 滑鼠上的鬼-->


  <div class="createAdventure">

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

    <audio id="music" src="./music/bgmusic.mp3" loop="true" autoplay="true"></audio>

    <!-- ========== HEADDDER ============= -->
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
                <li class="@@link001-1">
                    <a href="ghostIsland.php" class="title @@link001">
                        前進鬼島
                    </a>
                </li>
                <li class="pageSelectEffect1">
                    <a href="adventrue.html" class="title pageSelectEffect2">
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
                    <a href="game.html" class="title @@link004">
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
    <!-- ========== HEADDDER ============= -->


    <!-- PHP有修改 -->
    <?php 
      if( $errMsg != ""){ //例外
        alert($errMsg);
      }else{
          $spotRow = $spots->fetchObject();}
    ?>
    <section class="section_wrapper">
      <div class="form-tabs">
        <div class="mainspot tourTitle">【<?php echo $spotRow->spot_name;?>】</div>

        <!-- 導覽列 -->
        <ul class="form-menu">
          <li class="current">
            <span class="form-span progressbar">1</span>
            <span class="nav-label">選擇搭配景點</span>
          </li>
          <li>
            <span class="form-span progressbar">2</span>
            <span class="nav-label">揪團資訊</span>
          </li>
          <li>
            <span class="form-span progressbar">3</span>
            <span class="nav-label">行程規劃</span>
          </li>
          <li>
            <span class="form-span">4</span>
            <span class="nav-label">預覽</span>
          </li>
        </ul>
      </div>
      <div id="progressbar"></div>

      <!-- FORM 表單開始 -->
      <form method="POST"  enctype="multipart/form-data">
        <div class="wrapper">


          <?php 
            if( $errMsg != ""){ //例外
              alert($errMsg);
            }else{
                $templesRow = $temples->fetchAll(PDO::FETCH_ASSOC);}
          ?>

          <!-- 步驟1 -->
          <div id="tab-1" class="hide tab">
            <div class="tab-1 left">
              <div class="tourTitle">請從下方選擇想搭配的景點:</div>
              <div class="templefoodbuttons">
                <button class="temple_btn selected" type="button">廟宇</button>
                <button class="food_btn" type="button">飲食</button>
                
              </div>

              <div class="spotselections">
                <!-- 廟宇、美食詳細資訊燈箱 -->
                <div class="spotlightbox">
                  <button class="cancelbtn" type="button">X</button>
                  <button class="additinerarybtn" type="button">加入揪團行程</button>
                </div>
                <!-- 廟宇、美食詳細資訊燈箱 -->

               
                <div class="selectionsframe">

                  <!-- 廟宇清單 -->
                  <?php 
                    foreach($templesRow as $i =>$templeRow){
                  ?>
                  <div class="spotoptions templeopt">
                    <div class="addbtn">
                      <img src="img/createAdventure/zoom_up_icon.png" />
                    </div>
                    <div class="content temple_cls">
                      <span><?=$templeRow["temple_name"];?></span>
                      <div class="imgframe">
                        <img src="./img/temple/<?=$templeRow["temple_img"];?>" alt="廟照片" />
                      </div>
                      <input id="temple_<?=$templeRow["temple_no"];?>" type="hidden" name="temple_no"
                        value="<?=$templeRow["temple_name"];?>|<?=$templeRow["temple_content"];?>|<?=$templeRow["temple_location"];?>|temple_<?=$templeRow["temple_no"];?>" />
                      <div class="detailstext"></div>
                    </div>
                  </div>
                  <?php
                    }
                  ?>

                  <?php 
                    if( $errMsg != ""){ //例外
                      alert($errMsg);
                    }else{
                      $foodsRow = $foods->fetchAll(PDO::FETCH_ASSOC);}
                  ?>

                   <!-- 美食清單 -->
                   <?php 
                    foreach($foodsRow as $i =>$foodRow){
                  ?>
                  <div class="spotoptions foodopt optionhide">
                    <div class="addbtn">
                      <img src="img/createAdventure/zoom_up_icon.png" />
                    </div>
                    <div class="content food_cls">
                      <span><?=$foodRow["food_name"];?></span>
                      <div class="imgframe">
                        <img src="./img/food/<?=$foodRow["food_img"];?>" alt="食物照片" />
                      </div>
                      <input id="food_<?=$foodRow["food_no"];?>" type="hidden" name="food_no"
                        value="<?=$foodRow["food_name"];?>|<?=$foodRow["food_content"];?>|<?=$foodRow["food_location"];?>|food_<?=$foodRow["food_no"];?>" />
                      <div class="detailstext"></div>
                    </div>
                  </div>
                  <?php
                    }
                  ?>

                </div>
              </div>
            </div>
            <div class="tab-1 right">
              <div class="heading">
                <img src="img/createAdventure/selectedspotheading_icon.png" />
                專屬行程規劃
              </div>
              
              <!-- 菜單 -->
              <div class="selected_spot">

                <!-- 主要景點 -->
                <div class="majorspot">
                  <div class="content">
                    <span>主要行程【<?php echo $spotRow->spot_name;?>】</span>
                    <div class="imgframe">
                      <img src="<?php echo $spotRow->spot_image_card;?>" alt="景點照片">
                    </div>
                    <input id="spot_<?php echo $spotRow->spot_no;?>" type="hidden" name="spot_no"
                      value="<?php echo $spotRow->spot_name;?>|<?php echo $spotRow->spot_content;?>|<?php echo $spotRow->spot_address;?>|spot_<?php echo $spotRow->spot_no;?>">
                    <div class="detailstext"></div>
                  </div>
                  <!-- <button class="delete_btn"></button> -->
                  <div class="shiftbtns">
                    <button class="shift_up_btn" style="display:none;" type="button">上移鈕</button>
                    <button class="shift_down_btn" style="display:none;" type="button">下移鈕</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 步驟2 -->
          <div id="tab-2" class="hide tab">

            <!-- 撰寫基本資料 -->
            <div class="tab-2 left">
              <div class="tourTitle">請填寫基本揪團資訊:</div>
              <div class="leftblock">
                <label>人數限制</label>
                <input type="number" id="max_of_participants" name="max_of_participants" value="1" min="1" max="30" />
                <br />

                <label>發起日期</label>
                <!-- 萬年曆-發起日期 -->
                <div class="dateCalender">
                  <div class="yy_mm_dd_container">
                    <p id="yy_mm_dd" name="tour_settime">請選取日期</p>
                    <img src="./img/createAdventure/arrow.png" class="arrow">
                  </div>
                  <table id="dateZone">
                    <thead>
                      <tr>
                        <td class="selected preMonth">〈</td>
                        <td colspan="5" id="yy_mm"></td>
                        <td class="selected nextMonth">〉</td>
                      </tr>
                    </thead>
                    <tbody id="dateTable">

                    </tbody>
                  </table>
                </div>

                <br />

                <label>截止日期</label>
                <!-- 萬年曆-截止日期 -->
                <div class="dateCalender">
                  <div class="yy_mm_dd_container_2">
                    <p id="yy_mm_dd_2" name="tour_endtime">請選取日期</p>
                    <img src="./img/createAdventure/arrow.png" class="arrow">
                  </div>
                  <table id="dateZone_2">
                    <thead>
                      <tr>
                        <td class="selected preMonth_2">〈</td>
                        <td colspan="5" id="yy_mm_2"></td>
                        <td class="selected nextMonth_2">〉</td>
                      </tr>
                    </thead>
                    <tbody id="dateTable_2">

                    </tbody>
                  </table>
                </div>

                <br />
                <label>出團日期</label>
                <!-- 萬年曆-出團日期 -->
                <div class="dateCalender">
                  <div class="yy_mm_dd_container_3">
                    <p id="yy_mm_dd_3" name="tour_datetime">請選取日期</p>
                    <img src="./img/createAdventure/arrow.png" class="arrow">
                  </div>
                  <table id="dateZone_3">
                    <thead>
                      <tr>
                        <td class="selected preMonth_3">〈</td>
                        <td colspan="5" id="yy_mm_3"></td>
                        <td class="selected nextMonth_3">〉</td>
                      </tr>
                    </thead>
                    <tbody id="dateTable_3">

                    </tbody>
                  </table>
                </div>

                <br />
                <label>揪團名稱</label>
                <input type="text" name="tour_title" id="tourTitle" value="" maxlength="15" placeholder="限15字以內" />
                <br />
                <label>揪團簡介</label>
                <textarea name="tour_content" id="tourContent" placeholder="限300字以內"></textarea>
              </div>
            </div>

            <!-- 上傳揪團首圖 -->
            <div class="tab-2 right2">
              <div class="heading">

                <input type="file" name="tour_image" id="uploadTourFile" accept="image/*">
                <div class="tour_imagePreview" id="tour_imagePreview">
                  <img src="img/createAdventure/addgroupimg_icon.png" class="tour_imagePreview_default" />
                  <div class="tour_imagePreview_text">
                    <img src="./img/createAdventure/addgroupimg_icon2.png" class="icon">
                    <p>添加封面照片</p>
                  </div>
                </div>

                <div class="decoration_hand">
                  <img src="./img/createAdventure/hand.png" class="hand1">
                  <img src="./img/createAdventure/hand2.png" class="hand2">
                </div>

              </div>
            </div>
          </div>

          <!-- 步驟3 -->
          <div id="tab-3" class="hide tab">
            <div class="spot1 left">
              <div class="tourTitle">請填寫詳細行程規劃:</div>
            </div>
            <br />
            <div class="tour_wrapper">

              <!-- 以下動態新增區塊 -->
              <div class="section">
                <div class="spot1 left">
                  <div class="temple_img">
                    <img src="img/createAdventure/temple1.png" />
                  </div>
                </div>

                <div class="spot1 right">
                  <label>行程一</label>
                  <p></p>
                  <br />
                  <label>景點地址</label>
                  <p></p>
                  <br />
                  <label>景點簡介</label>
                  <textarea name="spot_content"></textarea>
                  <br />
                  <label>所需工具</label>
                  <input type="text" name="spot_tool" value="" />
                  <br />
                  <label>預估費用</label>
                  <input type="number" name="spot_budget" value="0" min="0" max="" />
                  <br />
                </div>
              </div>

              <div class="section">
                <div class="spot2 left">
                  <div class="temple_img"><img src="img/createAdventure/spot1.png" /></div>
                </div>

                <div class="spot2 right">
                  <label>行程二</label>
                  <input type="text" value="新莊廢棄醫院" />
                  <br />
                  <label>景點地址</label>
                  <input type="text" value="新莊廢棄醫院地址地址地址地址" />
                  <br />
                  <label>景點簡介</label>
                  <textarea name=""></textarea>
                  <br />
                  <label>所需工具</label>
                  <input type="text" value="" />
                  <br />
                  <label>預估費用</label>
                  <input type="number" value="0" min="0" max="" />
                  <br />
                </div>
              </div>

            </div>


          </div>

          <!-- 步驟4 -->
          <div id="tab-4" class="hide tab">
            <!-- 簡介 -->
            <section id="tourPreview_Section1">

              <div class="spotIntro">

                <div class="picZone">
                  <div class="bigPic">
                    <img
                      src="https://i2.wp.com/5b0988e595225.cdn.sohucs.com/images/20180123/beeb78cff3234b0693c3aef89b1beace.gif?w">
                  </div>
                </div>

                <div class="txtZone">
                  <h1></h1>
                  <div class="introTxt">
                    <p>

                    </p>
                  </div>

                  <div class="StartGroup_spotInform">
                    <ul>
                      <li>
                        <div class="StartGroup_people_img">
                          <img src="img/StartGroup/揪團團組.png" alt="">
                        </div>
                        揪團者by <span id="tourHost">富江我老婆</span>
                      </li>
                      <li>
                        <img src="./img/icon/location.png">
                        <span id="myTourLocation"></span>
                      </li>
                      <li>
                        <i class="far fa-calendar-alt"></i>
                        出團日期：<span id="myTourLaunchDate"></span>
                      </li>
                      <li>
                        <div>發起日期：</div><span id="myTourStartDate"></span>
                      </li>
                      <li>
                        <div>截止日期：</div><span id="myTourStopDate"></span>
                      </li>

                      <li>
                        <i class="fas fa-dollar-sign"></i>
                        總預算約<span id="myTourBudget"></span>元
                      </li>
                    </ul>
                  </div>

                  <div class="spiderweb">
                    <img src="./img/spot/spiderweb.png">
                  </div>
                </div>

              </div>
              <div class="progress">
                <span>
                  報名截止<p id="myTourStopDate2"></p>
                </span>
                <div class="progress-bar">
                  <span>
                    <div class="progress_image">
                      <img src="img/adventrue/個人頭像_無_工作區域 1.png" alt="">
                    </div>
                    <p>目前0/ <span id="myTourJoinNum">7</span> 人</p>
                  </span>
                </div>
              </div>

            </section>

            <!-- 行程位置 -->
            <section id="tourPreview_Section2">

              <div id="customeTour">

                <!-- <div class="tourSpot">
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
                          150
                        </div>
                        <div class="triangle"></div>
                      </div>
                    </div>
                  </div>
                </div> -->

                <!-- <div class="tourSpot">
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

                  </div>

                </div> -->



                <nav class="tourStatus">
                  <ul>
                    <li class="statusCircle selected">
                      <p class=" circle selected2"></p>
                    </li>
                    <li class="statusCircle">
                      <p class="line"></p>
                      <p class="circle"></p>
                    </li>
                  </ul>

                </nav>

              </div>







            </section>

          </div>
        </div>

        <div class="button_block">
          <button class="btn-outline" id="previous" type="button">上一步</button>
          <button class="btn-outline" id="next" type="button">下一步</button>
        </div>
      </form>
      
      <!-- FORM 表單結束 -->

    </section>



    <!-- ==========FOOOOOOTER============= -->
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

</body>

</html>