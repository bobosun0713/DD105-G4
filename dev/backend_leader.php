<?php include './php/connect.php';?>
<?php 
try {
  
	$sql1 =  "select * from dd105g4.spot  Order By spot_vote_count desc limit 1";//第1名
	$n01 = $pdo->query($sql1);

	$sql2 =  "select * from dd105g4.spot  Order By spot_vote_count desc limit 1,1";//第2名
	$n02 = $pdo->query($sql2);

	$sql3 =  "select * from dd105g4.spot  Order By spot_vote_count desc limit 2,1";//第3名
	$n03 = $pdo->query($sql3);


} catch (PDOException $e) {
	echo "錯誤行號 : " . $e->getLine() . "<br>";
	echo "錯誤訊息 : " . $e->getMessage() . "<br>";
	// echo "系統暫時連不上請聯絡維護人員";
}
?> 
<!DOCTYPE html>
<html lang="en">
    
<!-- 鬼島logo小圖示 -->
<link rel="shortcut icon" href="../img/icon/logo-icon.png" />
<!-- head-->
<head>
<meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
    <!-- 鬼島logo小圖示 -->
    <link rel="shortcut icon" href="../img/icon/logo-icon.png" />
    <!-- Main styles for this application-->
    <link href="./css/backend.css" rel="stylesheet" />
    <!-- lily新增 -->
    <link rel="stylesheet" href="https://unpkg.com/@coreui/icons@1.0.0/css/all.min.css" />
    <!-- 文字前面的icon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" />
    <!-- login登入 -->
    <script src="./js/backend/backLogininfo.js"></script>

    <!------------ 各分頁JS檔 --------------->
    <!-- 討論區js檔案 -->
    <script src="./js/backend/forum_back.js"></script>
    <!-- 美食管理js檔案 -->
    <script src="./js/backend/spot_manage.js"></script>
    <script src="./js/backend/backend_game_content.js"></script>
    <script src="./js/backend/backend_StartGriuo_msg_report.js"></script>
    <script src="./js/backend/food_manage.js"></script>
    <script src="./js/backend/temple_manage.js"></script>
</head>
<body class="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
        <!-- top_header -->
        <header class="app-header navbar">
            <!-- RWD ham -->
            <button class="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- normal ham -->
            <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- LOGO -->
            <a class=" mr-auto pl-4" href="#">
                <img class="navbar-brand-full" src="img/logo/LOGO_black.png" width="60" alt="鬼島Logo" />
            </a>

            <ul class="nav navbar-nav ">
                <li class="nav-item ">
                    <span id="admin_name">阿禎</span>
                </li>
                <li class="nav-item mr-3">
                    <span id="admin_status">登出</span>
                </li>
            </ul>
        </header>
        <div class="app-body">
            <div class="sidebar">
                <!-- sidebar menu-->
                <nav class="sidebar-nav">
                    <ul class="nav pt-2">
                                    <li class="nav-item">
                                        <a class="nav-link" href="./backend.html">
                                            <i class="cil-cog m-2"></i>
                                            管理員帳號
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="./backend_member.html">
                                            <i class="cil-people m-2"></i>
                                            會員管理
                                        </a>
                                    </li>
                                    <li class="nav-item nav-dropdown">
                                        <a class="nav-link nav-dropdown-toggle" href="＃">
                                            <i class="cil-location-pin m-2"></i>
                                            景點管理
                                        </a>
                                        <ul class="nav-dropdown-items">
                                            <li class="nav-item">
                                                <a class="nav-link pl-5" href="./backend_food_manage.php">
                                                    美食景點管理
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link pl-5" href="./backend_temple_manage.php">
                                                    廟宇景點管理
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="./backend_game.html">
                                            <i class="cil-file m-2"></i>
                                            試膽測驗題庫管理
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="./backend_StartGroup_msg_report.html">
                                            <i class="cil-flag-alt m-2"></i>
                                            揪團留言檢舉管理
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="./back_forum.html">
                                            <i class="cil-speech m-2"></i>
                                            討論區檢舉管理
                                        </a>
                                    </li>
                                    <li class="nav-item nav-dropdown">
                                        <a class="nav-link" href="./backend_leader.php">
                                            <i class="cil-star m-2"></i>
                                            排行榜管理
                                        </a>
                                    </li>
                                </ul>
                </nav>
             <button class="sidebar-minimizer brand-minimizer" type="button" style="margin-bottom: 20px;"></button>
            </div>
            <main class="main">
                 <!-- Breadcrumb-->
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="./index.html">
                        <i class="cil-home"></i>
                    </a>
                </li>
                <li class="breadcrumb-item">
                  <strong>  <a href="./backend.html">後台管理</a> </strong>
                </li>
                <li class="breadcrumb-item active">
                    <li class="fas fa-trophy  fa"></li>
                    <strong> 排行榜管理 </strong>
                </li>
            </ol>

                <div class="container-fluid">
                    <!-- 中間內容 -->

                    <div class="row">
  <div class="col-md-12">
    <div class="card">
      <div class="container-fluid">
          <!--鬼島頁面標題  -->
          <div class="breadcrumbs ace-save-state" id="breadcrumbs">
              <nav aria-label="breadcrumb" role="navigation">
                 
              </nav>
          </div>
      </div> 
      <div class="card-body">
      <div class="card">
        <div class="card-header justify-content-end d-flex">
          <h4 class="text-muted col "><i class="c-icon c-icon-2xl mt-5 mb-2 cil-star"> </i>Top 03</h4>
        </div>
        <table class="table text-center">
            <thead class="thead">
                <tr>
                    <th scope="col">排名</th>
                    <th scope="col">景點圖片</th>
                    <th scope="col">景點名稱</th>
                    <th scope="col">總票數</th>
                </tr>
            </thead>
    <!-- 第1名 -->
    <?php 
    while( $prodRow = $n01->fetchObject()){
    ?>
    <tbody id="adminTable" class="card-body">
                <tr>
                    <td><?="01"?></td>
                    <td><img src="<?=$prodRow->spot_image_1?>" alt="" style="width: 50px;"></td>
                    <td><a href="#"> <strong><?=$prodRow->spot_name?></strong></td>
                    <td><?=$prodRow->spot_vote_count?></td>
                    </tr>
                </thead>
    </tbody>
    <?php
    }
    ?>



    <!-- 第2名 -->
    <?php 
    while( $prodRow = $n02->fetchObject()){
    ?>
    <tbody id="adminTable" class="card-body">
                <tr>
                    <td><?="02"?></td>
                    <td><img src="<?=$prodRow->spot_image_1?>" alt="" style="width: 50px;"></td>
                    <td><a href="#"> <strong><?=$prodRow->spot_name?></strong></td>
                    <td><?=$prodRow->spot_vote_count?></td>
                    </tr>
                </thead>
    </tbody>
    <?php
    }
    ?>	
    <!-- 第3名 -->
    <?php 
    while( $prodRow = $n03->fetchObject()){
    ?>
    <tbody id="adminTable" class="card-body">
                <tr>
                    <td><?="03"?></td>
                    <td><img src="<?=$prodRow->spot_image_1?>" alt="" style="width: 50px;"></td>
                    <td><a href="#"> <strong><?=$prodRow->spot_name?></strong></td>
                    <td><?=$prodRow->spot_vote_count?></td>
                    </tr>
                </thead>
    </tbody>
    <?php
    }
    ?>
    </table>
            </div>
        </div>
        <!-- top10  -->
        <div class="card-body">
        <div class="card">
            <div class="card-header justify-content-end d-flex">
            <h4 class="text-muted col "><i class="c-icon c-icon-2xl mt-5 mb-2 cil-star"> </i>Top 10</h4>
            </div>
            <table class="table text-center">
                <thead class="thead">
                    <tr>
                        <th scope="col">排名</th>
                        <th scope="col">景點名稱</th>
                        <th scope="col">總票數</th>
                    </tr>
                </thead>
    <!-- 10名 -->

    <?php include 'php/backnd_top10.php';?>
                </table>
            </div>
        </div>
        <!-- 外面的四個div -->
    </div>
        </div>
    </div>
    </div>
                        <!-- end -->
                    </div>
                </main>
                <aside class="aside-menu">
                
                </aside>
            </div>
        <footer class="app-footer">
                <div>
                    <a href="https://coreui.io">鬼島 Let,s go</a>
                    <span>&copy; 2020 creativeLabs.</span>
                </div>
                <div class="ml-auto">
                    <span>Powered by</span>
                    <a href="https://coreui.io">CoreUI</a>
                </div>
        </footer>
       <!-- CoreUI and necessary plugins-->
       <script src="./js/node_js/jquery.min.js"></script>
       <script src="./js/node_js/popper.min.js"></script>
       <script src="./js/node_js/bootstrap.min.js"></script>
       <script src="./js/node_js/pace.min.js"></script>
       <script src="./js/node_js/perfect-scrollbar.min.js"></script>
       <script src="./js/node_js/coreui.min.js"></script>
</body>
</html>


