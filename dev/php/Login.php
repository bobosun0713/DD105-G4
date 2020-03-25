<?php
try{
  require_once("connect.php");
  $sql = "select * from `member` where mem_id = :mem_id and mem_psw = :mem_psw";
  $member = $pdo->prepare($sql);
  $member->bindValue(":mem_id", $_POST["mem_id"]);
  $member->bindValue(":mem_psw", $_POST["mem_psw"]);
  $member->execute();

  if( $member->rowCount()==0){ //帳密錯誤
    echo "error";
  }else{ //登入成功
    //自資料庫中取回資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    //寫入session
    session_start();
    $_SESSION["mem_no"] = $memRow["mem_no"];
    $_SESSION["mem_id"] = $memRow["mem_id"];
    $_SESSION["mem_name"] = $memRow["mem_name"];
    $_SESSION["mem _mail"] = $memRow["mem _mail"];
    $_SESSION["mem_tel"] = $memRow["mem_tel"];

    //送出登入者的姓名資料
    $member = ["mem_n o"=>$_SESSION["mem_no"], "mem_id"=>$_SESSION["mem_id"], "mem_name"=>$_SESSION["mem_name"], "mem _mail"=>$_SESSION["mem _mail"]];
    echo json_encode($member);
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>