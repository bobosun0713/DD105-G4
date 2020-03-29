<?php
try{
    require_once("connect.php");
    $sql = "select * from  forum L , member R where L.mem_no = R.mem_no and forum_status = 1;";
    $test = $pdo->query($sql);
    //自資料庫中取回資料
    $testRow = $test->fetchAll(PDO::FETCH_ASSOC);
        // echo json_encode($testRow,JSON_UNESCAPED_UNICODE);
     echo json_encode($testRow);

}catch(PDOException $e){
    echo $e->getMessage();
}
// echo json_encode($testRow);

?>


