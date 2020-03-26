<?php
try{
  require_once("./connect.php");
  $pdo->beginTransaction();

  if( $_FILES["food_img"]["error"] == UPLOAD_ERR_OK){

    $food_no = $_POST["food_no"];

    if( file_exists("../img/food") === false){
        mkdir("../img/food");
    }
    $fileInfoArr = pathinfo( $_FILES["food_img"]["name"] );
    $fileName = "{$food_no}-{$fileInfoArr["extension"]}";

    $from = $_FILES["food_img"]["tmp_name"];
    $to = "../img/food/$fileName";
    if(copy($from, $to) === true){
        $sql = " update food 
                 set food_img =:food_img
                 where food_no = $food_no";
        $food = $pdo->prepare($sql);
        $food -> bindValue(":food_img", $fileName);
        $food -> execute();

        echo "成功上傳該美食景點圖片";
        $pdo ->commit();
    }else {
        $pdo ->rollBack();
    }
  }else{
    echo "錯誤代碼 : {$_FILES["food_img"]["error"]} <br>";
    echo "新增失敗<br>";
}

  

}catch(PDOException $e){
  $errMsg = "";
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
  echo $errMsg;
}
?>