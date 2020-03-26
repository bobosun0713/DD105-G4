<?php
try{
  require_once("./connect.php");

  $sql = "delete from food
          where food_no =:food_no";
  $food = $pdo->prepare($sql);
  $food->bindValue(":food_no", $_POST["food_no"]);
  $food->execute();


  echo "成功刪除一筆美食景點";

}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
  echo $errMsg;
}
?>