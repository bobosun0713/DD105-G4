<?php
$errMsg = "";
try{
    require_once("connect.php");
    $sql = "update forum set forum_chat=:forum_chat where forum_no =:forum_no";
    $forum = $pdo->prepare( $sql );
    //== 存入瀏覽次數
    $forum -> bindValue(":forum_no", $_POST["forum_no"]);
    $forum -> bindValue(":forum_chat", $_POST["forum_chat"]);
    //==
    $forum -> execute();   
}catch (PDOException $e) {
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
    
}

?>