<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Examples</title>
</head>
<body>
<?php
// var_dump($_FILES["quiz_img"]);
$errMsg = "";
try {
  require_once("./connect.php");
	$pdo->beginTransaction();
	//.......確定是否上傳成功
	if( $_FILES["quiz_img"]["error"] == UPLOAD_ERR_OK){
		
		$sql = "INSERT INTO `game` (`quiz_no`, `quiz_question`, `quiz_opt1`,`quiz_opt2`, `quiz_opt3`,`quiz_opt1_point`,`quiz_opt2_point`,`quiz_opt3_point`,  `quiz_img`)
     values(null, :quiz_question, :quiz_opt1, :quiz_opt2, :quiz_opt3,:quiz_opt1_point,:quiz_opt2_point,:quiz_opt3_point, '')";
		$products = $pdo->prepare( $sql );
		$products -> bindValue(":quiz_question", $_POST["quiz_question"]);
		$products -> bindValue(":quiz_opt1", $_POST["quiz_opt1"]);
		$products -> bindValue(":quiz_opt2", $_POST["quiz_opt2"]);
    $products -> bindValue(":quiz_opt3", $_POST["quiz_opt3"]);
    $products -> bindValue(":quiz_opt1_point", $_POST["quiz_opt1_point"]);
		$products -> bindValue(":quiz_opt2_point", $_POST["quiz_opt2_point"]);
    $products -> bindValue(":quiz_opt3_point", $_POST["quiz_opt3_point"]);
		$products -> execute();

		//取得自動創號的key值--lastInsertId?????????
		$quiz_no = $pdo->lastInsertId();

		//先檢查images資料夾存不存在
		if( file_exists("../img/game") === false){
      mkdir("../img/game");
  }
		//將檔案copy到要放的路徑
		$fileInfoArr = pathinfo($_FILES["quiz_img"]["name"]);
		$fileName = "{$quiz_no}.{$fileInfoArr["extension"]}";  //8.gif

		$from = $_FILES["quiz_img"]["tmp_name"];
		$to = "../img/game/$fileName";
		if(copy( $from, $to)===true){
			//將檔案名稱寫回資料庫
			$sql = "update `game` set quiz_img = :quiz_img where quiz_no = $quiz_no";
			$products = $pdo->prepare($sql);
			$products -> bindValue(":quiz_img", $fileName);
			$products -> execute();
      echo "新增成功~";
      header("Location:../backend_game.html");

			$pdo->commit();
		}else{
			$pdo->rollBack();
		}

	}else{
		echo "錯誤代碼 : {$_FILES["quiz_img"]["error"]} <br>";
		echo "新增失敗<br>";
	}
} catch (PDOException $e) {
	$pdo->rollBack();
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}
echo $errMsg;

?>    
</body>
</html>