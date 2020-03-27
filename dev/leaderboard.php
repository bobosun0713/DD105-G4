<?php 
try {
	$dsn = "mysql:host=localhost;port=3306;dbname=dd105g4;charset";
	$user = "f26828449";//mysql使用者帳號
	$password = "362ac150219";//mysql密碼
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);

	$pdo = new PDO($dsn, $user, $password, $options);
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
        <!-- @@include('layout/head.html') -->
        <title>靈異票選</title>
    </head>
    <style>
		.Haunted-house-t{text-align: center;
            font-size: 8rem;

		}
</style>
    <body>
        <!-- header -->
        <!-- @@include('layout/header.html',{"link003":"pageSelectEffect2"}) -->
        <!-- 霧氣 -->
        <!-- @@include('layout/component/indexsmoke.html') -->
        <!-- 有鬼箭頭元素 -->
        <!-- @@include('layout/component/mouse_ghost.html') -->
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
					<a class="Haunted-house-p" href="#"><?=$prodRow->spot_name?> <?=$prodRow->spot_vote_count?>票 </a> 
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
					<a class="Haunted-house-p" href="#"><?=$prodRow->spot_name?> <?=$prodRow->spot_vote_count?>票 </a> 
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
					<a class="Haunted-house-p" href="#"><?=$prodRow->spot_name?> <?=$prodRow->spot_vote_count?>票 </a> 
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
        <!-- @@include('layout/footer.html') -->
    </body>
</html>
