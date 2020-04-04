<?php
$errMsg = "";
try{
    require_once("connect.php");
    $sql = "update member set mem_status = if(mem_status= 1,0,1) where mem_no =:mem_no";
    //== 修改文章狀態
    $member = $pdo->prepare( $sql );
    $member -> bindValue(":mem_no", $_POST["mem_no"]);
    $member -> execute();

}catch (PDOException $e) {
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
    
}

?>