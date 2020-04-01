
<?php
session_start();
$mem_no = $_SESSION["mem_no"];

try{
  require_once("./connect.php");

  //還沒加會員的情況
  $sql = "
  insert into tour_msg(spot_no, mem_no, spot_msg_content)
  value (:spot_no, :mem_no, :spot_msg_content)
  ";
  $spot_msg = $pdo->prepare($sql);
  $spot_msg->bindValue(":spot_no", $_POST["spot_no"]);
  $spot_msg->bindValue(":mem_no", $mem_no);
  $spot_msg->bindValue(":spot_msg_content", $_POST["spot_msg_content"]);
  $spot_msg->execute();


  echo "你已成功留言";


}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
}


?>