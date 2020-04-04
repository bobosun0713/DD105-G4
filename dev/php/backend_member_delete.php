<?php
$errMsg = "";

try{
    require_once("connect.php");
    $sql = "delete from member where mem_no = :mem_no";
    $member = $pdo->prepare( $sql );
    $member -> bindValue(":mem_no", $_POST["mem_no"]);
    $member -> execute();

}catch (PDOException $e) {
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
    
}

?>