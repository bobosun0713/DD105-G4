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
    <title>排行榜管理</title>
    <!-- Icons 引用新增 -->
    <link rel="stylesheet" href="https://unpkg.com/@coreui/icons@1.0.0/css/all.min.css">

    <!-- Main styles for this application-->
    <link href="css/backend.css" rel="stylesheet" />

</head>
    <body class="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
        <!-- top_header -->
        @@include('layout/backend/top_header.html')
        <div class="app-body">
            <div class="sidebar">
                <!-- sidebar menu-->
                @@include('layout/backend/sidebar_nav.html')
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
        @@include('layout/backend/footer.html')

    </body>
</html>


