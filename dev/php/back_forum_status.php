<?php
$errMsg = "";
try{
    require_once("connect.php");
    $sql = "update forum set forum_status = if(forum_status= 1,0,1) where forum_no =:forum_no";
    //== 修改文章狀態
    $forum = $pdo->prepare( $sql );
    $forum -> bindValue(":forum_no", $_POST["forum_no"]);
    $forum -> execute();

}catch (PDOException $e) {
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
    
}

?>