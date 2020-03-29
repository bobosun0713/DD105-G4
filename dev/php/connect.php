<?php

$dsn = "mysql:host=localhost; port=3306; dbname=dd105_G4; charset=utf8";
<<<<<<< HEAD
$user = "root";
$password = "qwertyu2";
=======
$user = "lily1";
$password = "0000";
>>>>>>> 64ec0c6c995a64f9c61523a0b2439e175178b4c9
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE => PDO::CASE_NATURAL);

$pdo = new PDO($dsn, $user, $password, $options);

?>