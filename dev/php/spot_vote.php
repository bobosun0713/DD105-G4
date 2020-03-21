

<?php
try{
  require_once("./connect.php");

  $sql = "update spot set spot_vote_count=spot_vote_count+1 where spot_no=:spot_no";
  $spot = $pdo->prepare($sql);
  $spot->bindValue(":spot_no", $_POST["spot_no"]);
  $spot->execute();

  echo "已投給內心的恐懼一票";

}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
}
?>