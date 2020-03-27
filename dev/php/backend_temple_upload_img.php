<?php
try{
  require_once("./connect.php");
  $pdo->beginTransaction();

  if( $_FILES["temple_img"]["error"] == UPLOAD_ERR_OK){

    $temple_no = $_POST["temple_no"];

    if( file_exists("../img/temple") === false){
        mkdir("../img/temple");
    }
    $fileInfoArr = pathinfo( $_FILES["temple_img"]["name"] );
    $fileName = "temple-{$temple_no}.{$fileInfoArr["extension"]}";

    $from = $_FILES["temple_img"]["tmp_name"];
    $to = "../img/temple/$fileName";
    if(copy($from, $to) === true){
        $sql = " update temple 
                 set temple_img =:temple_img
                 where temple_no = $temple_no";
        $temple = $pdo->prepare($sql);
        $temple -> bindValue(":temple_img", $fileName);
        $temple -> execute();

        echo "成功上傳該廟宇景點圖片";
        $pdo ->commit();
    }else {
        $pdo ->rollBack();
    }
  }else{
    echo "錯誤代碼 : {$_FILES["temple_img"]["error"]} <br>";
    echo "新增失敗<br>";
}

  

}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
  echo $errMsg;
}
?>