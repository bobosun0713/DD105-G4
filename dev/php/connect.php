<?php 
    $dsn="mysql:host=localhost;port=3306;dbname=dd105_G4;charset=utf8";
<<<<<<< HEAD
    $user="root";
=======
    $user="lily1";
>>>>>>> 52e76ef90dcaf2ea41eab45ee1acee9700e5f015
    $password="0000";
    $options=array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
    $pdo=new pdo($dsn,$user,$password,$options);
 ?>