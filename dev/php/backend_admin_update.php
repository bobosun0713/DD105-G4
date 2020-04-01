<?php
try{
  require_once("./connect.php");

  $sql = "update `administrator` 
            set admin_name = :admin_name, admin_id = :admin_id, admin_psw = :admin_psw
            where admin_no=:admin_no";
  $food = $pdo->prepare($sql);
  $food->bindValue(":admin_no", $_POST["admin_no"]);
  $food->bindValue(":admin_name", $_POST["admin_name"]);
  $food->bindValue(":admin_id", $_POST["admin_id"]);
  $food->bindValue(":admin_psw", $_POST["admin_psw"]);
  $food->execute();

  echo "成功修改管理員資訊";

}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
  echo $errMsg;
}
?>