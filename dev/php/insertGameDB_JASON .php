<?php
try{
  require_once("./connect.php");
  $sql = "update `game` 
  set quiz_question = :quiz_question, quiz_opt1 = :quiz_opt1,quiz_opt2 = :quiz_opt2,quiz_opt3 = :quiz_opt3,quiz_opt1_point = :quiz_opt1_point,quiz_opt2_point = :quiz_opt2_point,quiz_opt3_point = :quiz_opt3_point
  where quiz_no = :quiz_no";
  $insertgameDB = $pdo->prepare($sql);
  $insertgameDB->bindValue(":quiz_no", $_POST["quiz_no"]);
  $insertgameDB->bindValue(":quiz_question", $_POST["quiz_question"]);
  $insertgameDB->bindValue(":quiz_opt1", $_POST["quiz_opt1"]);
  $insertgameDB->bindValue(":quiz_opt2", $_POST["quiz_opt2"]);
  $insertgameDB->bindValue(":quiz_opt3", $_POST["quiz_opt3"]);
  $insertgameDB->bindValue(":quiz_opt1_point", $_POST["quiz_opt1_point"]);
  $insertgameDB->bindValue(":quiz_opt2_point", $_POST["quiz_opt2_point"]);
  $insertgameDB->bindValue(":quiz_opt3_point", $_POST["quiz_opt3_point"]);
  $insertgameDB->execute();

  //如果找得資料，取回資料，送出JSON字串
  if($insertgameDB->rowCount() == 0){ 
  	echo "{沒有題庫}";
  }else{
  	$insertgameDBRow = $insertgameDB->fetchAll(PDO::FETCH_ASSOC);
    
    // echo json_encode($updategameDBRow);
    
  }
  
}catch(PDOException $e){
  echo $e->getMessage();
}
?>