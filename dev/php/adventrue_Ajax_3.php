
<?php
"<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>";
header("Content-Type:text/html; charset=utf-8");

try {
  require_once("./connect.php");
  $keyword = $_REQUEST['key_word'];
  $sql = "select * from tour where tour_title like '%$keyword%' ";
  $tours2 = $pdo->query($sql);
  $row1= $tours2->fetchAll(PDO::FETCH_ASSOC);

  
  echo json_encode($row1, JSON_UNESCAPED_UNICODE);



} catch (PDOException $e) {
  echo "error";
}















?>









