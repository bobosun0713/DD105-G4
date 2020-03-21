<?php 
try {
	$dsn = "mysql:host=localhost;port=3306;dbname=dd105g4;charset";
	$user = "f26828449";//mysql使用者帳號
	$password = "362ac150219";//mysql密碼
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);

	$pdo = new PDO($dsn, $user, $password, $options);
	$sqltop10 = "select * from leaderboard Order By spot_no, spot_vote  desc limit 10";//前十名
	$leaderboard10 = $pdo->query($sqltop10);//前十名下面就用$leaderboard10套用

} catch (PDOException $e) {
	echo "錯誤行號 : " . $e->getLine() . "<br>";
	echo "錯誤訊息 : " . $e->getMessage() . "<br>";
	// echo "系統暫時連不上請聯絡維護人員";
}
?> 

<!DOCTYPE html>
<style>
		td{text-align: center;
			padding: 8px;
            width: 350px;
            line-height: 50px;
		}
</style>
					<?php 
					while( $prodRow = $leaderboard10->fetchObject()){
					?>
                    <tr class="Ranking">
						<td><?=$prodRow->spot_no?></td>
						<td><a href="#">【<?=$prodRow->spot_name?>】</a></td>
						<td><?=$prodRow->spot_vote?></td>
					</tr>
					<?php
					}
					?>
   
</html>
