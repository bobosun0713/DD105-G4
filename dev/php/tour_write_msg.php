<?php
session_start();
$mem_no = $_SESSION["mem_no"];
// $tour_no = $_POST["tour_no"];

try{
  require_once("./connect.php");
 
  //還沒加會員的情況
   $sql = "INSERT INTO tour_msg (`tour_msg_no`, `tour_no`, `mem_no`, `tour_msg_content`, `tour_msg_datetime`, `tour_msg_status`) VALUES (1, :tour_no,:mem_no,:tour_msg_content, '2020-03-10 06:40:01', NULL)";
  $tour_msg = $pdo->prepare($sql);
  $tour_msg->bindValue(":tour_no", $_POST["tour_no"]);
  $tour_msg->bindValue(":mem_no", $mem_no);
  $tour_msg->bindValue(":tour_msg_content", $_POST["tour_msg_content"]);
  $tour_msg->execute();


  echo "你已成功留言";


}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
  echo $errMsg;

}


?>