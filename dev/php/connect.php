<?php

$dsn = "mysql:host=localhost; port=3306; dbname=dd105_G4; charset=utf8";
<<<<<<< HEAD
$user = "root";
=======
$user = "lily1";
>>>>>>> 5e6c4998862807182263c34417371aa9e5304f0c
$password = "0000";
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE => PDO::CASE_NATURAL);

$pdo = new PDO($dsn, $user, $password, $options);

?>