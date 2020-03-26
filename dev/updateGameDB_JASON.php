<?php
try{
  require_once("./php/connect.php");
  // $sql = "update `game` set where quiz_no=:quiz_no ";

  $sql = "select * from `game`";
  $updategameDB = $pdo->prepare($sql);
  $updategameDB->bindValue(":quiz_no", $_GET["quiz_no"]);
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