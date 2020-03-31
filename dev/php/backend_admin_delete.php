<?php
try{
  require_once("./connect.php");

  $sql = "delete from `administrator` 
          where admin_no =:admin_no";
  $admin = $pdo->prepare($sql);
  $admin->bindValue(":admin_no", $_POST["admin_no"]);
  $admin->execute();


  echo "成功刪除一位管理員";

}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
  echo $errMsg;
}
?>