<?php
$errMsg = "";
session_start();
$memno = $_SESSION["mem_no"];
try{
    require_once("connect.php");
    $sql = "INSERT INTO `forum_report`  (`forum_no` , `mem_no` , `forum_report_reason`) 
    values(:forum_no , :mem_no , :forum_report_reason)";
    $forum = $pdo->prepare( $sql );
    $forum -> bindValue(":forum_no", $_POST["forum_no"]);
    $forum -> bindValue(":mem_no", $memno);
    $forum -> bindValue(":forum_report_reason", $_POST["forum_report_reason"]);
    $forum -> execute();   
}catch (PDOException $e) {
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
    
}

?>