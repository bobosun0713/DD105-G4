<?php
session_start();
if(isset($_SESSION["admin_authority"])){
  $session_mem_auth = $_SESSION["admin_authority"];
}

try{
    require_once("./php/connect.php");

    $sql = "select * 
            from food 
            order by food_no desc";
    $foods = $pdo->query($sql);
    $foodRows = $foods->fetchAll(PDO::FETCH_ASSOC);


}catch (PDOException $e) {
    // alert($e->getLine());
    echo "錯誤行號 : " . $e->getLine() . "<br>"; 
    echo "錯誤訊息 : " . $e->getMessage() . "<br>";
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <!-- 鬼島logo小圖示 -->
        <link rel="shortcut icon" href="../img/icon/logo-icon.png" />
        <!-- Main styles for this application-->
        <link href="./css/backend.css" rel="stylesheet" />
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <!-- lily新增 -->
        <link rel="stylesheet" href="https://unpkg.com/@coreui/icons@1.0.0/css/all.min.css" />
        <!-- 文字前面的icon -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" />
        <!-- login登入 -->
        <script src="./js/backend/backLogininfo.js"></script>
        <!-- 後台JS -->
        <script src="./js/backend/food_manage.js"></script>
        <title>食物景點管理</title>
    </head>

<body class="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">

    <!-- =================== top_header =================== -->
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
        <a class=" pl-4 mr-auto" href="#">
            <img class="navbar-brand-full" src="img/logo/LOGO_black.png" width="60" alt="鬼島Logo" />
        </a>
        
        <ul class="nav navbar-nav ">
            <li class="nav-item ">
                <span id="admin_name">阿禎</span>
            </li>
            <li class="nav-item mr-3" style="cursor: pointer;">
                <span id="admin_status">登出</span>
                <input type="hidden" id="admin_status_hidden" value="" />
            </li>
        </ul>

    </header>
    <!-- =================== top_header =================== -->


    <div class="app-body">
        <div class="sidebar">
            
            <!-- =================== sidebar menu =================== -->
            <nav class="sidebar-nav">
                <ul class="nav pt-2">
                    <li class="nav-item">
                        <a class="nav-link" href="./backend_admin.html">
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
            <!-- =================== sidebar menu =================== -->
        </div>

        <main class="main">

            <!-- =================== Breadcrumb =================== -->
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="./index.html">
                        <i class="cil-home"></i>
                    </a>
                </li>
                <li class="breadcrumb-item">
                    <a href="#">後台管理</a>
                </li>
                <li class="breadcrumb-item active">
                    美食景點管理
                </li>
            </ol>
            <!-- =================== Breadcrumb =================== -->


            <div class="container-fluid">

                <!-- =================== 中間內容 =================== -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                        

                                <!-- 功能內容 -->
                                <div class="card-body">
                                
                                    <!-- 新增美食按鈕 -->
                                    <div class="card-header justify-content-end d-flex">
                                        <button class="btn btn-warning" id="create_new_food" type="button">
                                            新增美食景點
                                        </button>
                                    </div>
                                    

                                    <!-- 美食景點清單、修改 -->
                                    <table class="table table-responsive-sm table-sm">

                                        <!-- 表頭 -->
                                        <thead >
                                            <tr class="food_row_number">
                                                <th class="p-2">編號</th>
                                                <th class="p-2">名稱</th>
                                                <th class="p-2">地點</th>
                                                <th class="p-2">簡介</th>
                                                <th class="p-2">美食圖片</th>
                                                <th class="p-2">狀態</th>
                                                <th class="p-2">修改</th>
                                                <th class="p-2">刪除</th>
                                            </tr>
                                        </thead>
                            
                                        <tbody>
                                            <!-- 以下動態新增修改刪除區域 -->
                                            <?php foreach($foodRows as $i => $foodRow){?>
                                            <tr>
                                                <td class="p-3"><?=$foodRow["food_no"]?></td>
                                                <td class="p-3">
                                                    <span class="food_info_txt" style="display: block;"><?=$foodRow["food_name"]?></span>
                                                    <input type="text" class="food_info_input" style="display: none;" value="<?=$foodRow["food_name"]?>">
                                                </td>
                                                <td class="p-3">
                                                    <span class="food_info_txt" style="display: block;"><?=$foodRow["food_location"]?></span>
                                                    <input type="text" class="food_info_input" style="display: none;" value="<?=$foodRow["food_location"]?>">
                                                </td>
                                                <td class="p-3">
                                                    <span class="food_info_txt" style="display: block;"><?=$foodRow["food_content"]?></span>
                                                    <textarea name="" class="food_info_input" style="display: none; resize:none;" cols="30" rows="5"><?=$foodRow["food_content"]?></textarea>
                                                </td>
                                                <td class="p-3">
                                                    <?php if( $foodRow["food_img"] != null ){
                                                        echo '<img class="food_info_txt" width="200px" src="./img/food/',$foodRow["food_img"],'" alt="food-',$foodRow["food_no"],'">'
                                                    ;}else {
                                                        echo '<input type="file" name="food_img" style="width:200px;" class="food_info_img_upload" accept="image/*">';
                                                        echo '<input type="button" class="mt-3 btn btn-dark food_info_img_send" value="上傳圖片">';
                                                    } ?>
                                                </td>
                                                <td class="p-3">
                                                    <label class="switch switch-pill switch-success">

                                                        <!-- 上下架區域 -->
                                                        <input type="checkbox" class="switch-input change_food_status"<?php if( $foodRow["food_status"] == 0){ echo "checked";}?>>
                                                        <span class="switch-slider"></span>

                                                    </label>
                                                </td>
                                                <td class="p-3">
                                                    <button type="button" class="btn btn-dark manage_this_food" >修改</button>
                                                </td>
                                                <td class="p-3">
                                                    <button type="button" class="btn btn-danger delete_this_food <?php if( $session_mem_auth != 0){ echo "disabled";}?>"<?php if( $session_mem_auth != 0){ echo "disabled";}?>>刪除</button>
                                                </td>
                                            </tr>
                                            <?php }?>
                                        </tbody>

                                        <!-- 隱藏的表單 -->
                                        <tfoot>
                                            <form action="" method="post">
                                                <tr class="food_hidden_table">
                                                    <input type="hidden" name="food_no" id="form_food_no" value="">
                                                    <input type="hidden" name="food_name" id="form_food_name" value="">
                                                    <input type="hidden" name="food_location" id="form_food_location" value="">
                                                    <input type="hidden" name="food_content" id="form_food_content" value="">
                                                </tr>
                                            </form>
                                        </tfoot>
                                    </table>
                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- =================== 中間內容 =================== -->

        </main>
    </div>

    <footer class="app-footer">
        <div>
            <a href="https://coreui.io">CoreUI</a>
            <span>&copy; 2018 creativeLabs.</span>
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