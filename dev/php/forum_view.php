<?php
$errMsg = "";
try{
    require_once("connect.php");
    $sql = "update forum set forum_view=:forum_view where forum_no =:forum_no";
    $forum = $pdo->prepare( $sql );
    //== 存入瀏覽次數
    $forum -> bindValue(":forum_view", $_POST["forum_view"]);
    $forum -> bindValue(":forum_no", $_POST["forum_no"]);
    $forum -> execute();   

}catch (PDOException $e) {
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
    
}

?>