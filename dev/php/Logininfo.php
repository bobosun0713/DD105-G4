<?php 
session_start();
if( isset($_SESSION["mem_id"])){//已登入
	$member = ["mem_no"=>$_SESSION["mem_no"], "mem_id"=>$_SESSION["mem_id"], "mem_name"=>$_SESSION["mem_name"], "mem_mail"=>$_SESSION["mem_mail"], "mem_img"=>$_SESSION["mem_img"]];
	echo json_encode($member);
}else{
	echo "{}";
}
?>