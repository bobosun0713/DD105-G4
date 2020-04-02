<?php
// $admin_id = $_POST["admin_id"];
// $admin_psw = $_POST["admin_psw"];
// $admin_name = $_POST["admin_name"];

try{
    require_once("./connect.php");
    echo $admin_name;
    $sql = "insert into administrator ( admin_no, admin_id, admin_psw, admin_name, admin_authority ) 
            values (null, :admin_id, :admin_psw, :admin_name, 1)";
    $admin = $pdo->prepare($sql);
    $admin ->bindValue(":admin_id", $_POST["admin_id"]);
    $admin ->bindValue(":admin_psw", $_POST["admin_psw"]);
    $admin ->bindValue(":admin_name", $_POST["admin_name"]);
    $admin->execute();

    $admin_no = $pdo->lastInsertId();

    header("Location:../backend_admin.html");


}catch (PDOException $e) {
    // alert($e->getLine());
    echo "錯誤行號 : " . $e->getLine() . "<br>"; 
    echo "錯誤訊息 : " . $e->getMessage() . "<br>";
}


?>