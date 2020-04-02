<?php
try{
  require_once("./connect.php");

  
  if( $_POST["admin_status"] == 0){

    $sql = "update `administrator`
            set admin_authority = :admin_status
            where admin_no=:admin_no";
    $admin = $pdo->prepare($sql);
    $admin->bindValue(":admin_no", $_POST["admin_no"]);
    $admin->bindValue(":admin_status", $_POST["admin_status"]);
    $admin->execute();
    
    echo "成功給予管理員權限";
    

  }else{

    $sql = "update `administrator`
            set admin_authority = :admin_status
            where admin_no=:admin_no";
    $admin = $pdo->prepare($sql);
    $admin->bindValue(":admin_no", $_POST["admin_no"]);
    $admin->bindValue(":admin_status", $_POST["admin_status"]);
    $admin->execute();
    
    echo "成功收回管理員權限";
  }

  

}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
  echo $errMsg;
}
?>