<?php
session_start();
$memname = $_SESSION["mem_name"];
$memimg =$_SESSION["mem_img"];
echo $memname;
echo $memimg
?>