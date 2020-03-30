<?php
$errMsg = "";
try{
    require_once("connect.php");
    // 找對應的文章編號,把留言放在各文章的裡面
    $sql = "select * from forum_msg 
    join member on forum_msg.mem_no = member.mem_no 
    join forum on forum_msg.forum_no = forum.forum_no
    where forum_msg.forum_no = :forum_no";
    $forum = $pdo->prepare($sql);
    $forum -> bindValue(":forum_no", $_POST["forum_no"]);
    $forum -> execute();  
    $testRow = $forum->fetchAll(PDO::FETCH_ASSOC);
     echo json_encode($testRow);

}catch(PDOException $e){
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}
?>


