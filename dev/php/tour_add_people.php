<?php
$errMsg = "";
try{
    require_once("connect.php");
    $sql = "update `tour` 
    set number_of_participants=:number_of_participants
    where tour_no =:tour_no";
    $tour_set= $pdo->prepare( $sql );
    //== 存入瀏覽次數
    $tour_set -> bindValue(":tour_no",$_POST["tour_no"]);
    $tour_set -> bindValue(":number_of_participants", $_POST["number_of_participants"]);
    $tour_set  -> execute(); 

echo $_POST["number_of_participants"];

}catch (PDOException $e) {
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
    
}

?>