<?php
try{
    require_once("connect.php");
    // $sql = "select * from forum_report;";
    $sql = "select * 
    select * from forum_report R, forum F, member M where R.forum_no = F.forum_no and F.mem_no = M.mem_no group BY R.forum_no , R.mem_no";
    $forum = $pdo->query($sql);
    //自資料庫中取回資料
    $forumRow = $forum->fetchAll(PDO::FETCH_ASSOC);
     echo json_encode($forumRow);

}catch(PDOException $e){
    echo $e->getMessage();
}
// echo json_encode($testRow);

?>


