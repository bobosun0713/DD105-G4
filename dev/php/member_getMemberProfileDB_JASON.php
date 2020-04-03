<?php
  try{
        require_once("./connect.php");
        $sql = "select * from `member` where mem_no=:memId";
        $post_mem_no=$_REQUEST['mem_no'];
       
        $memberDB = $pdo->prepare($sql);
        $memberDB->bindValue(":memId",$post_mem_no);
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