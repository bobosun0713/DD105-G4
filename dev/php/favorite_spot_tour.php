<?php
    session_start();
    $mem_no = $_SESSION["mem_no"];
    $tour_no = $_POST["tour_no"];

    try{
        require_once('./connect.php');

        //找這筆資料有幾筆
        $sql = "select *
                FROM tour_favorites	 
                WHERE tour_no =$tour_no and mem_no =$mem_no";
        $favorites = $pdo->query($sql);
        $count = $favorites->rowCount();

        if( $count == 0 ){

            $sql = "insert into tour_favorites ( tour_favorites_no, tour_no, mem_no ) 
                    values (null, :tour_no, $mem_no)";
            $favorite = $pdo->prepare($sql);
            $favorite ->bindValue(":tour_no", $_POST["tour_no"]);  
            $favorite->execute();
            $tour_favorites_no = $pdo->lastInsertId();

            echo '已將該揪團加入收藏';

        }else{
            
            echo '已經收藏過該揪團';
        }

        

    }catch(PDOException $e){

        echo $e->getMessage();
    }
?>