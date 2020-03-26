<?php
try{
  require_once("./connect.php");

  $sql = "insert into food ( food_no ) 
            values (null)";
  $food = $pdo->prepare($sql);
  $food->execute();

  $tour_no = $pdo->lastInsertId();

  echo "成功新增一筆美食景點欄位";

}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
  echo $errMsg;
}
?>