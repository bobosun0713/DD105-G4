<?php
$errMsg = "";
session_start();
$memNo = $_SESSION["mem_no"];
try{
    require_once("connect.php");
    $sql = "select * from `member` where mem_no =:mem_no";
    //== 修改文章狀態
    $forum = $pdo->prepare( $sql );
    $forum -> bindValue(":mem_no", $memNo);
    $forum -> execute();
    $forumRow = $forum->fetch(PDO::FETCH_ASSOC);
    echo json_encode($forumRow);

}catch (PDOException $e) {
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
    
}

?>