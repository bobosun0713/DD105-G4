<?php
try{
  require_once("./connect.php");
  $sql = "update `game` 
  set quiz_question = :quiz_question, quiz_opt1 = :quiz_opt1,quiz_opt2 = :quiz_opt2,quiz_opt3 = :quiz_opt3,quiz_opt1_point = :quiz_opt1_point,quiz_opt2_point = :quiz_opt2_point,quiz_opt3_point = :quiz_opt3_point
  where quiz_no = :quiz_no";
  $updategameDB = $pdo->prepare($sql);
  $updategameDB->bindValue(":quiz_no", $_POST["quiz_no"]);
  $updategameDB->bindValue(":quiz_question", $_POST["quiz_question"]);
  $updategameDB->bindValue(":quiz_opt1", $_POST["quiz_opt1"]);
  $updategameDB->bindValue(":quiz_opt2", $_POST["quiz_opt2"]);
  $updategameDB->bindValue(":quiz_opt3", $_POST["quiz_opt3"]);
  $updategameDB->bindValue(":quiz_opt1_point", $_POST["quiz_opt1_point"]);
  $updategameDB->bindValue(":quiz_opt2_point", $_POST["quiz_opt2_point"]);
  $updategameDB->bindValue(":quiz_opt3_point", $_POST["quiz_opt3_point"]);
  $updategameDB->execute();

  //如果找得資料，取回資料，送出JSON字串
  if($updategameDB->rowCount() == 0){ //無此會員資料
  	echo "{沒有題庫}";
  }else{
  	$updategameDBRow = $updategameDB->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($updategameDBRow);
    
  }
  
}catch(PDOException $e){
  echo $e->getMessage();
}
?>