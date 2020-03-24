
<?php
try{
  require_once("./connect.php");
  $pdo->beginTransaction();

  //判斷如果為空字串的話，該欄位是空值
  if( $_POST["spot_tool"] == ""){
    $_POST["spot_tool"] = null;
  }
  if( $_POST["food_tool"] == ""){
    $_POST["food_tool"] = null;
  }
  if( $_POST["temple_tool"] == ""){
    $_POST["temple_tool"] = null;
  }

  //還沒加會員的情況
  if( $_FILES['tour_image']['error'] == UPLOAD_ERR_OK){

    //把現有表單的資訊先放進去資料庫
    $sql = "
    insert into tour( tour_no, tour_title, tour_content, tour_image,
                      tour_datetime, tour_settime, tour_endtime, max_of_participants,
                      spot_no, spot_tool, spot_budget, spot_content,
                      food_no, food_tool, food_budget, food_content,
                      temple_no, temple_tool, temple_budget, temple_content)
    values ( null, :tour_title, :tour_content, '',
            :tour_datetime, :tour_settime, :tour_endtime, :max_of_participants,
            :spot_no, :spot_tool, :spot_budget, :spot_content,
            :food_no, :food_tool, :food_budget, :food_content,
            :temple_no, :temple_tool, :temple_budget, :temple_content) 
    ";
    $tour = $pdo->prepare($sql);
    $tour->bindValue(":tour_title", $_POST["tour_title"]);
    $tour->bindValue(":tour_content", $_POST["tour_content"]);
    $tour->bindValue(":tour_datetime", $_POST["tour_datetime"]);
    $tour->bindValue(":tour_settime", $_POST["tour_settime"]);
    $tour->bindValue(":tour_endtime", $_POST["tour_endtime"]);
    $tour->bindValue(":max_of_participants", $_POST["max_of_participants"]);
    $tour->bindValue(":spot_no", $_POST["spot_no"]);
    $tour->bindValue(":spot_tool", $_POST["spot_tool"]);
    $tour->bindValue(":spot_budget", $_POST["spot_budget"]);
    $tour->bindValue(":spot_content", $_POST["spot_content"]);
    $tour->bindValue(":food_no", $_POST["food_no"]);
    $tour->bindValue(":food_tool", $_POST["food_tool"]);
    $tour->bindValue(":food_budget", $_POST["food_budget"]);
    $tour->bindValue(":food_content", $_POST["food_content"]);
    $tour->bindValue(":temple_no", $_POST["temple_no"]);
    $tour->bindValue(":temple_tool", $_POST["temple_tool"]);
    $tour->bindValue(":temple_budget", $_POST["temple_budget"]);
    $tour->bindValue(":temple_content", $_POST["temple_content"]);
    $tour->execute();


    //=======================以下開始是存取圖片進入資料夾和資料庫
    //取得自動創號的key值
    $tour_no = $pdo->lastInsertId();
    //先檢查images資料夾存不存在
		if( file_exists("images") === false){
			mkdir("../img/tour/my_tour");
    }
    //將檔案copy到要放的路徑
		$fileInfoArr = pathinfo($_FILES["tour_image"]["name"]);
		$fileName = "{$tour_no}.{$fileInfoArr["extension"]}";  //檔名 和 副檔名的串接

		$from = $_FILES["tour_image"]["tmp_name"];
		$to = "../img/tour/my_tour/$fileName";
		if(copy( $from, $to) === true){
			//將檔案名稱寫回資料庫
			$sql = "update tour set tour_image = :tour_image where tour_no = $tour_no";
			$tour_img = $pdo->prepare($sql);
			$tour_img -> bindValue(":tour_image", $fileName);
			$tour_img -> execute();
      $pdo->commit();
      
		}else{
			$pdo->rollBack();
		}

    echo "你已成功新增揪團～";


  }else{
		echo "錯誤代碼 : {$_FILES["tour_image"]["error"]} <br>";
	}

}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";

  echo $errMsg;
}


?>