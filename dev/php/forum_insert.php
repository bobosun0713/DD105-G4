<?php
$errMsg = "";
session_start();
$memno = $_SESSION["mem_no"];
    try {      
        require_once("connect.php");
        if( $_FILES["images"]["error"] == UPLOAD_ERR_OK){
                $sql = "INSERT INTO `forum` (`forum_no`, `mem_no`,`forum_title` ,`forum_content` , `forum_area` , `images` , `forum_view` ,`forum_chat`) 
                values(null , :mem_no , :forum_title, :forum_content , :forum_area , '' , :forum_view , :forum_chat)";
                $forum = $pdo->prepare( $sql );
                $forum -> bindValue(":mem_no", $memno);
                $forum -> bindValue(":forum_title", $_POST["forum_title"]);              
                $forum -> bindValue(":forum_content", $_POST["forum_content"]);
                $forum -> bindValue(":forum_area", $_POST["forum_area"]);
                $forum -> bindValue(":forum_view", $_POST["forum_view"]);
                $forum -> bindValue(":forum_chat", $_POST["forum_chat"]);
                $forum -> execute();   


                $forum_no = $pdo->lastInsertId();
                
                if( file_exists("images") === false){
                    mkdir("images");
                }
                //將檔案copy到要放的路徑
                $fileInfoArr = pathinfo($_FILES["images"]["name"]);
                $fileName = "{$forum_no}.{$fileInfoArr["extension"]}";
        
                $from = $_FILES["images"]["tmp_name"];
                $to = "images/$fileName";
                if(copy( $from, $to)===true){
                    //將檔案名稱寫回資料庫
                    $sql = "update forum set images = :images where forum_no = $forum_no";
                    $forum = $pdo->prepare($sql);
                    $forum -> bindValue(":images", $fileName);
                    $forum -> execute();
                    // echo "新增成功~";
                    $pdo->commit();
                }else{
                    $pdo->rollBack();
                }
        }else{
                echo "錯誤代碼 : {$_FILES["images"]["error"]} <br>";
                echo "新增失敗<br>";
            }
    } catch (PDOException $e) {
        // $pdo->rollBack();
        $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
        $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
    }

?>