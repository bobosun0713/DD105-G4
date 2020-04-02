<?php
try{
  require_once("./connect.php");
  $sql = "update `member` 
  set mem_no=:mem_no,mem_id=:mem_id,mem_psw=:mem_psw,mem_name=:mem_name,mem_tel=:mem_tel,mem_mail=:mem_mail
  where mem_no = :mem_no";
 
  $updateMemberDB = $pdo->prepare($sql);
  $updateMemberDB->bindValue(":mem_no",$_POST["mem_no"]);
  $updateMemberDB->bindValue(":mem_id",$_POST["mem_id"]);
  $updateMemberDB->bindValue(":mem_psw",$_POST["mem_psw"]);
  $updateMemberDB->bindValue(":mem_name",$_POST["mem_name"]);
  $updateMemberDB->bindValue(":mem_tel",$_POST["mem_tel"]);
  $updateMemberDB->bindValue(":mem_mail",$_POST["mem_mail"]);
  $updateMemberDB->execute();

  //如果找得資料，取回資料，送出JSON字串
  if($updateMemberDB->rowCount() == 0){ //無此會員資料
  	echo "{沒有會員資料}";
  }else{
  	$updateMemberDBRow = $updateMemberDB->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($updateMemberDBRow);
    
  }
  
}catch(PDOException $e){
  echo $e->getMessage();
}
?>