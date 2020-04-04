<?php 
session_start();
if( isset($_SESSION["admin_id"])){//已登入
	$backmember = ["admin_no"=>$_SESSION["admin_no"], "admin_id"=>$_SESSION["admin_id"], "admin_name"=>$_SESSION["admin_name"]];
	echo json_encode($backmember);
}else{
	echo "{}";
}
?>