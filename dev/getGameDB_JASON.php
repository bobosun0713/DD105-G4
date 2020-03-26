<?php
try{
  require_once("./php/connect.php");
  $sql = "select * from `game`";
  $gameDB = $pdo->prepare($sql);
//   $member->bindValue(":memId", $_GET["memId"]);
  $gameDB->execute();

  //如果找得資料，取回資料，送出JSON字串
  if($gameDB->rowCount() == 0){ //無此會員資料
  	echo "{沒有題庫}";
  }else{
  	$gameDBRow = $gameDB->fetchAll(PDO::FETCH_ASSOC);

  	echo json_encode($gameDBRow);
  }
  
}catch(PDOException $e){
  echo $e->getMessage();
}
?>