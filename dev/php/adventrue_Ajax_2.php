
<?php
"<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>";
header("Content-Type: text/html; charset=gb2312");
try {
  require_once("./connect.php");
  header("Content-Type:text/html;charset=utf-8");
  $sql = "
  select * 
  from tour t join spot s on (t.spot_no = s.spot_no) 
  left join `member` m on (t.mem_no = m.mem_no)
  left join `food` f on (t.food_no = f.food_no)
  left join `temple` tep on (t.temple_no = tep.temple_no)
  where t.mem_no = :mem_no";
  // $tour_no = $_REQUEST["tour_no"];
  $mem_no = $_REQUEST['mem_no'];

  $mem = $pdo->prepare($sql);
  $mem ->bindValue(":mem_no",  $mem_no);
  $mem ->execute();
  // var_dump($tour_no);
  $mem2 =  $mem->fetchAll();
  // echo "123";
  echo json_encode($mem2, JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
  echo "error";
}
?>

