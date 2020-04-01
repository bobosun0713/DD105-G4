<?php
// session_start();
// $backmemno= $_SESSION["admin_id"];
try{
  require_once("./connect.php");
  $sql = "select *
         from `administrator`";
  $admin = $pdo->prepare($sql);
  $admin->execute();
  
  $adminRow = $admin->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($adminRow);
  
}catch(PDOException $e){
  echo $e->getMessage();
}
?>