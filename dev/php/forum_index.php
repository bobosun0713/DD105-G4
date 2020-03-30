<?php
try{
    require_once("connect.php");
    $sql = "select * from forum join member on forum.mem_no = member.mem_no where forum_status = 1 limit 8";
    $test = $pdo->query($sql);
    //自資料庫中取回資料
    $testRow = $test->fetchAll(PDO::FETCH_ASSOC);
     echo json_encode($testRow);

}catch(PDOException $e){
    echo $e->getMessage();
}

?>


