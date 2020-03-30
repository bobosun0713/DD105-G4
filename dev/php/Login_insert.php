<?php
$errMsg = "";
    try {      
        require_once("connect.php");
        if( $_FILES["mem_img"]["error"] == UPLOAD_ERR_OK){
                $sql = "INSERT INTO `member` (`mem_no`, `mem_id` ,`mem_psw`,`mem_name`  , `mem_tel` , `mem_mail` , `mem_img`) values(null ,:mem_id, :mem_psw , :mem_name , :mem_tel , :mem_mail , '')";
                $member = $pdo->prepare( $sql );
                $member -> bindValue(":mem_id", $_POST["mem_id"]);
                $member -> bindValue(":mem_psw", $_POST["mem_psw"]);
                $member -> bindValue(":mem_name", $_POST["mem_name"]);
                $member -> bindValue(":mem_tel", $_POST["mem_tel"]);
                $member -> bindValue(":mem_mail", $_POST["mem_mail"]);
                $member -> execute();  
                
                $mem_no = $pdo->lastInsertId();

                if( file_exists("Login") == false){
                    mkdir("Login");
                }
                //將檔案copy到要放的路徑
                $fileInfoArr = pathinfo($_FILES["mem_img"]["name"]);
                $fileName = "{$mem_no}.{$fileInfoArr["extension"]}";

                $from = $_FILES["mem_img"]["tmp_name"];
                $to = "../img/Login/$fileName";
                if(copy( $from, $to)===true){
                    //將檔案名稱寫回資料庫
                    $sql = "update member set mem_img = :mem_img where mem_no = $mem_no";
                    $member = $pdo->prepare($sql);
                    $member -> bindValue(":mem_img", $fileName);
                    $member -> execute();
                    echo "新增成功~";
                    // $pdo->commit();
                // }else{
                    // $pdo->rollBack();
                }
            }else{
                echo "錯誤代碼 : {$_FILES["mem_img"]["error"]} <br>";
                echo "新增失敗<br>";
            }
    } catch (PDOException $e) {
        // $pdo->rollBack();
        $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
        $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
    }
    echo $errMsg;
?>