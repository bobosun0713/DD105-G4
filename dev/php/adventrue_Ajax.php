
<?php
 "<meta http-equiv='Content-Type'' content='text/html; charset=utf-8'>";
 header("Content-Type: text/html; charset=gb2312");
try{
require_once("./connect.php");
header("Content-Type:text/html;charset=utf-8");
$sql = "select * 
from tour t join spot s on (t.spot_no = s.spot_no) 
 join `member` m on (t.mem_no = m.mem_no)
left join `food` f on (t.food_no = f.food_no)
left join `temple` tep on (t.temple_no = tep.temple_no)";
$tours = $pdo->query($sql);
$toursRow = $tours->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($toursRow, JSON_UNESCAPED_UNICODE) ;


}catch(PDOException $e){
    echo "error";
  }
?>