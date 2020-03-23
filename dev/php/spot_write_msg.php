
<?php
try{
  require_once("./connect.php");

  //還沒加會員的情況
  $sql = "
  insert into spot_msg(spot_no, spot_msg_content, spot_msg_datetime)
  value (:spot_no, ':spot_msg_content', now()) 
  ";
  $spotMsg = $pdo->prepare($sql);
  $spotMsg->bindValue(":spot_no", $_POST["spot_no"]);
  $spotMsg->bindValue(":spot_msg_content", $_POST["spot_msg_content"]);
  $spotMsg->execute();

  echo "你已成功留言";


}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
}
?>