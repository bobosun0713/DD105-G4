
<?php
 "<meta http-equiv='Content-Type'' content='text/html; charset=utf-8'>";
 header("Content-Type: text/html; charset=gb2312");
try{
require_once("./connect.php");
header("Content-Type:text/html;charset=utf-8");
$sql = "select * from tour";
$tours = $pdo->query($sql);
$toursRow = $tours->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($toursRow, JSON_UNESCAPED_UNICODE) ;


}catch(PDOException $e){
    echo "error";
  }
?>