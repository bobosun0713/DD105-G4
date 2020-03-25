<?php
$errMsg = "";
    try {      
        require_once("connect.php");
                $sql = "INSERT INTO `member` (`mem_no`, `mem_id` ,`mem_psw`,`mem_name`  , `mem_tel` , `mem_mail` ) values(null ,:mem_id, :mem_psw , :mem_name , :mem_tel , :mem_mail)";
                $member = $pdo->prepare( $sql );
                $member -> bindValue(":mem_id", $_POST["mem_id"]);
                $member -> bindValue(":mem_psw", $_POST["mem_psw"]);
                $member -> bindValue(":mem_name", $_POST["mem_name"]);
                $member -> bindValue(":mem_tel", $_POST["mem_tel"]);
                $member -> bindValue(":mem_mail", $_POST["mem_mail"]);

                $member -> execute();   
               
    } catch (PDOException $e) {
        // $pdo->rollBack();
        $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
        $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
    }
    echo $errMsg
?>