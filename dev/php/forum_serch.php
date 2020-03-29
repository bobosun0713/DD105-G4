<?php
try{
    require_once("connect.php");
    $keyword=$_POST['forum_title'];
    //自資料庫中取回資料
    $sql = "select * from forum join member on forum.mem_no = member.mem_no where forum_title like '%$keyword%' and forum_status = 1
    ";
    $test = $pdo->query($sql);
    $test -> execute();   
    $testRow = $test->fetchAll(PDO::FETCH_ASSOC);
     echo json_encode($testRow);

}catch(PDOException $e){
    echo $e->getMessage();
}
?>


