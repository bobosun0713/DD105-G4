<?php
try{
    require_once("connect.php");
    $sql = "select * from member";
    $backmember = $pdo->query($sql);
    //自資料庫中取回資料
    $backmemberRow = $backmember->fetchAll(PDO::FETCH_ASSOC);
     echo json_encode($backmemberRow);

}catch(PDOException $e){
    echo $e->getMessage();
}

?>


