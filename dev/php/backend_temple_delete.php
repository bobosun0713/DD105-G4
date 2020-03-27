<?php
try{
  require_once("./connect.php");

  $sql = "delete from temple
          where temple_no =:temple_no";
  $temple = $pdo->prepare($sql);
  $temple->bindValue(":temple_no", $_POST["temple_no"]);
  $temple->execute();


  echo "成功刪除一筆美食景點";

}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
  echo $errMsg;
}
?>