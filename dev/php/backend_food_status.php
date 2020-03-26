<?php
try{
  require_once("./connect.php");

  
  if( $_POST["food_status"] == 0){

    $sql = "update food 
    set food_status = :food_status
    where food_no=:food_no";
    $food = $pdo->prepare($sql);
    $food->bindValue(":food_no", $_POST["food_no"]);
    $food->bindValue(":food_status", $_POST["food_status"]);
    $food->execute();
    
    echo "成功上架一筆美食資訊";

  }else{

    $sql = "update food 
    set food_status = :food_status
    where food_no=:food_no";
    $food = $pdo->prepare($sql);
    $food->bindValue(":food_no", $_POST["food_no"]);
    $food->bindValue(":food_status", $_POST["food_status"]);
    $food->execute();
    
    echo "成功下架一筆美食資訊";
  }

  

}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
  echo $errMsg;
}
?>