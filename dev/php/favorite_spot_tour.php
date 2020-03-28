<?php
    session_start();
    $mem_no = $_SESSION["mem_no"];

    try{
        require_once('./connect.php');

        $sql = "insert into tour_favorites ( tour_favorites_no, tour_no, mem_no ) 
                values (null, :tour_no, $mem_no)";
        $favorite = $pdo->prepare($sql);
        $favorite ->bindValue(":tour_no", $_POST["tour_no"]); 
        // $favorite ->bindValue(":mem_no", $mem_no); 
        $favorite->execute();
        $tour_favorites_no = $pdo->lastInsertId();

        echo '已將該揪團加入收藏';

    }catch(PDOException $e){

        echo $e->getMessage();
    }
?>