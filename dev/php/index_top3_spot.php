<?php
    try{
        require_once('./connect.php');

        //拆成三個
        //先找出前三的景點
        $sql = "select spot_no, spot_name, spot_image_card,
                spot_address, spot_scary_rate, concat( substr(spot_content,1,40), '...') spot_intro
                from spot 
                order by spot_vote_count desc
                limit 3
                ";
        $spot = $pdo->query($sql);
        $spot ->execute();
        $spotRows = $spot ->fetchAll(PDO::FETCH_ASSOC);


        //分別找出前三景點的最新留言（一個）
        //抓取前三名的景點編號，用for迴圈執行三次sql查詢
        //每次執行後塞進sql陣列裏
        foreach($spotRows as $key =>$val){

            //找出key裡面spot_no的值
            $one[$key]=$val['spot_no'];

            //執行sql指令
            $sql = "select spot_msg.spot_msg_content, date(spot_msg.spot_msg_datetime) msg_datetime,
                            `member`.mem_name, `member`.mem_img
                    from spot_msg join `member` on spot_msg.mem_no = `member`.mem_no
                    where spot_no = ".$one[$key]."
                    order by spot_msg_datetime desc
                    limit 1
                    ";
            $latest_spot_msg = $pdo->query($sql);
            $latest_spot_msg ->execute();
            $latest_spot_msg_Rows[$key] = $latest_spot_msg ->fetchObject();
        }

        //把兩個陣列分別塞進物件回傳

        $newArr = array('top_3_info'=> $spotRows, 'top_3_msg_info' => $latest_spot_msg_Rows);
        // $newJson = a

        echo json_encode($newArr);
        // echo "有用嗎";


    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>