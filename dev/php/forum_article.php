<?php
$errMsg = "";
try{
    require_once("connect.php");
    // $sql = "select * from  `test` where psn = :psn";
    $sql = "select * from  forum join member on forum.mem_no = member.mem_no
    where forum.forum_no =:forum_no";
    $test = $pdo->prepare($sql);
    $test ->bindValue(":forum_no", $_POST["forum_no"]);
    $test -> execute();   
    //自資料庫中取回資料
    $testRow = $test->fetch(PDO::FETCH_ASSOC);
        // echo json_encode($testRow,JSON_UNESCAPED_UNICODE);
     echo json_encode($testRow);



}catch(PDOException $e){
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}

?>
