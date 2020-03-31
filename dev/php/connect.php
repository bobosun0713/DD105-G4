<?php 
    $dsn="mysql:host=localhost;port=3306;dbname=dd105_G4;charset=utf8";
    $user="lily1";
    $password="0000";
    $options=array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
    $pdo=new pdo($dsn,$user,$password,$options);
 ?>