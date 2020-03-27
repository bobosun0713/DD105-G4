<?php
try{
  require_once("./connect.php");
  $sql = "delete from `game` 
  where quiz_no = :quiz_no";
  $deletegameDB = $pdo->prepare($sql);
  $deletegameDB->bindValue(":quiz_no", $_POST["quiz_no"]);

  $deletegameDB->execute();
 
  //如果找得資料，取回資料，送出JSON字串
  if($deletegameDB->rowCount() == 0){ //無此會員資料
  	echo "{沒有題庫}";
  }else{
    header("Location:../backend_game.html");
  	$deletegameDBRow = $deletegameDB->fetchAll(PDO::FETCH_ASSOC);
    
    // echo json_encode($deletegameDBRow);
    
  }
  
}catch(PDOException $e){
  echo $e->getMessage();
}
?>