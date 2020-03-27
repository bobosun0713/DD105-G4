<?php
try{
  require_once("./connect.php");

  
  if( $_POST["temple_status"] == 0){

    $sql = "update temple 
    set temple_status = :temple_status
    where temple_no=:temple_no";
    $temple = $pdo->prepare($sql);
    $temple->bindValue(":temple_no", $_POST["temple_no"]);
    $temple->bindValue(":temple_status", $_POST["temple_status"]);
    $temple->execute();
    
    echo "成功上架一筆廟宇資訊";

  }else{

    $sql = "update temple 
    set temple_status = :temple_status
    where temple_no=:temple_no";
    $temple = $pdo->prepare($sql);
    $temple->bindValue(":temple_no", $_POST["temple_no"]);
    $temple->bindValue(":temple_status", $_POST["temple_status"]);
    $temple->execute();
    
    echo "成功下架一筆廟宇資訊";
  }

  

}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
  echo $errMsg;
}
?>