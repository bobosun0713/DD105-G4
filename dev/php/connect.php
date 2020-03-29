<<<<<<< HEAD
<?php

$dsn = "mysql:host=localhost; port=3306; dbname=dd105G4; charset=utf8";
$user = "dd105g4";
$password = "dd105g4";
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE => PDO::CASE_NATURAL);

$pdo = new PDO($dsn, $user, $password, $options);

?>
=======
<?php 
    $dsn="mysql:host=localhost;port=3306;dbname=dd105_G4;charset=utf8";
    $user="root";
    $password="root";
    $options=array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
    $pdo=new pdo($dsn,$user,$password,$options);
 ?>
>>>>>>> cbb2df8539cb894e3d8c6ca7616e231137d79351
