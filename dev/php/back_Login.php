<?php
try{
  require_once("connect.php");
  $sql = "select * from `administrator` where admin_id = :admin_id and admin_psw = :admin_psw";
  $backmember = $pdo->prepare($sql);
  $backmember->bindValue(":admin_id", $_POST["admin_id"]);
  $backmember->bindValue(":admin_psw", $_POST["admin_psw"]);
  $backmember->execute();

  if( $backmember->rowCount()==0){ //帳密錯誤
    echo "error";
  }else{ //登入成功
    //自資料庫中取回資料
    $backmemRow = $backmember->fetch(PDO::FETCH_ASSOC);
    //寫入session
    session_start();
    $_SESSION["admin_no"] = $backmemRow["admin_no"];
    $_SESSION["admin_id"] = $backmemRow["admin_id"];
    $_SESSION["admin_name"] = $backmemRow["admin_name"];
    

    //送出登入者的姓名資料
    $backmember = ["admin_no"=>$_SESSION["admin_no"], "admin_id"=>$_SESSION["admin_id"], "admin_name"=>$_SESSION["admin_name"]];
    echo json_encode($backmember);
  }
}catch(PDOException $e){
  // echo $e->getMessage();
}
?>
