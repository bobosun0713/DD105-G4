<?php
$errMsg = "";
try{
    require_once("connect.php");
    $sql = "update `tour` 
    set tour_chat=:tour_chat
    where tour_no =:tour_no";
    $tour_set= $pdo->prepare( $sql );
    //== 存入瀏覽次數
    $tour_set -> bindValue(":tour_no",$_POST["tour_no"]);
    $tour_set -> bindValue(":tour_chat", $_POST["tour_chat"]);
    $tour_set  -> execute(); 





}catch (PDOException $e) {
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
    
}

?>