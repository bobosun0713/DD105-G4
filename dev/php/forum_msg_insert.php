<?php
$errMsg = "";
session_start();
$memno = $_SESSION["mem_no"];
try{
    require_once("connect.php");
    $sql = "INSERT INTO `forum_msg`  ( `forum_no`  ,`forum_msg` , `mem_no` ) values( :forum_no , :forum_msg , :mem_no)";
    $forum = $pdo->prepare( $sql );
    //== 存入文章編號,讓留言內容抓取
    $forum -> bindValue(":forum_no", $_POST["forum_no"]);
    //==
    $forum -> bindValue(":forum_msg", $_POST["forum_msg"]);
    $forum -> bindValue(":mem_no", $memno);
    $forum -> execute();   
}catch (PDOException $e) {
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
    
}

?>