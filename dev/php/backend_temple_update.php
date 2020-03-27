<?php
try{
  require_once("./connect.php");

  $sql = "update temple 
            set temple_name = :temple_name, temple_location = :temple_location, temple_content = :temple_content
            where temple_no=:temple_no";
  $temple = $pdo->prepare($sql);
  $temple->bindValue(":temple_no", $_POST["temple_no"]);
  $temple->bindValue(":temple_name", $_POST["temple_name"]);
  $temple->bindValue(":temple_location", $_POST["temple_location"]);
  $temple->bindValue(":temple_content", $_POST["temple_content"]);
  $temple->execute();

  echo "成功修改一筆廟宇景點";

}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
  echo $errMsg;
}
?>