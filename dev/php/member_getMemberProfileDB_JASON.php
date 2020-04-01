<?php
  try{
        require_once("./connect.php");
        $sql = "select * from `member`";
        $memberDB = $pdo->prepare($sql);
      //   $member->bindValue(":memId", $_GET["memId"]);
        $memberDB->execute();

        //如果找得資料，取回資料，送出JSON字串
        if($memberDB->rowCount() == 0){ //無此會員資料
          echo "{沒有會員}";
        }else{
          $memberDBRow = $memberDB->fetchAll(PDO::FETCH_ASSOC);
          
          echo json_encode($memberDBRow);
          //以下不能放任何echo
         
        
        
        }
      }  
  catch(PDOException $e){
    echo $e->getMessage();
  }

?>