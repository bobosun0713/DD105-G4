<?php
try{
  require_once("./connect.php");

  $sql = "update food 
            set food_name = :food_name, food_location = :food_location, food_content = :food_content
            where food_no=:food_no";
  $food = $pdo->prepare($sql);
  $food->bindValue(":food_no", $_POST["food_no"]);
  $food->bindValue(":food_name", $_POST["food_name"]);
  $food->bindValue(":food_location", $_POST["food_location"]);
  $food->bindValue(":food_content", $_POST["food_content"]);
  $food->execute();

  echo "成功修改一筆美食景點";

}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
  echo $errMsg;
}
?>