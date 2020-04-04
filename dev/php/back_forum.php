<?php
try{
    require_once("connect.php");
    // $sql = "select * from forum_report;";
    $sql = "select M.forum_report_no , F.forum_no ,F.forum_title , F.images , MM.mem_name , M.forum_report_reason 
    from forum_report M , forum F , member MM where M.forum_no = F.forum_no and F.mem_no = MM.mem_no";
    $forum = $pdo->query($sql);
    //自資料庫中取回資料
    $forumRow = $forum->fetchAll(PDO::FETCH_ASSOC);
     echo json_encode($forumRow);

}catch(PDOException $e){
    echo $e->getMessage();
}
// echo json_encode($testRow);

?>


