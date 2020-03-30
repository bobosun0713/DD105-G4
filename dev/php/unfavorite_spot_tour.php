<?php
    session_start();
    $mem_no = $_SESSION["mem_no"];
    $tour_no = $_POST["tour_no"];

    try{
        require_once('./connect.php');

            $sql = "delete from tour_favorites
                    where tour_no = :tour_no and mem_no = $mem_no";
            $favorite = $pdo->prepare($sql);
            $favorite ->bindValue(":tour_no", $_POST["tour_no"]);  
            $favorite->execute();

            echo '已把該揪團取消收藏';

        

    }catch(PDOException $e){

        echo $e->getMessage();
    }
?>