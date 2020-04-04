<?php
$errMsg = "";
try{
    require_once("connect.php");
    // $sql = "delete from forum_report where forum_report_no = : and forum_report_name = :forum_report_name";
    $sql = "delete from forum_report where forum_report_no = :forum_report_no and mem_no = :mem_no";
    //== 修改文章狀態
    $forum = $pdo->prepare( $sql );
    $forum -> bindValue(":forum_report_no", $_POST["forum_report_no"]);
    $forum -> bindValue(":mem_no", $_POST["mem_no"]);
    $forum -> execute();

}catch (PDOException $e) {
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
    
}

//當按下刪除ru04文章恢復上架,並刪除檢舉
// $(".btn").click(function() {
//     var replay = $(this).attr("psn")
//     alert(replay)
//     $.ajax({
//         url: "./php/back_forum_status.php",
//         type: "POST",
//         data: {
//             forum_report_no: replay,
//         },
//         success: function(data) {
//             alert("刪除成功")
//             location.reload()
//         },
//         error: function() {
//             alert("修改失敗")
//         },
//     })
// })

?>