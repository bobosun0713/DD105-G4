<?php
$errMsg = "";
session_start();
$memNo = $_SESSION["mem_no"];

try{
    require_once("connect.php");
    // $sql = "delete from forum_report where forum_report_no = : and forum_report_name = :forum_report_name";
    $sql = "delete from forum_report r , forum f where forum_report_no = :forum_report_no and mem_no = :mem_no ";
    //== 修改文章狀態
    $forum = $pdo->prepare( $sql );
    $forum -> bindValue(":forum_report_no", $_POST["forum_report_no"]);
    $forum -> bindValue(":mem_no", $memNo);
    $forum -> execute();

}catch (PDOException $e) {
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
    
}

?>