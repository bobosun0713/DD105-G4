<?php
try{
  require_once("./connect.php");

  $sql = "insert into temple ( temple_no ) 
            values (null)";
  $temple = $pdo->prepare($sql);
  $temple->execute();

  $temple_no = $pdo->lastInsertId();

  echo "成功新增一筆廟宇景點欄位";

}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
  echo $errMsg;
}
?>