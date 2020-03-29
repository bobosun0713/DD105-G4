
<?php 
try {
	require_once("./php/connect.php");
	$sql4 =  "select * from dd105g4.spot  Order By spot_vote_count desc limit 1";//第1名
	$n01 = $pdo->query($sql4);

	$sql5 =  "select * from dd105g4.spot  Order By spot_vote_count desc limit 1,1";//第2名
	$n02 = $pdo->query($sql5);

	$sql6 =  "select * from dd105g4.spot  Order By spot_vote_count desc limit 2,1";//第3名
	$n03 = $pdo->query($sql6);

	$sql7 =  "select * from dd105g4.spot  Order By spot_vote_count desc limit 3,1";//第4名
	$n04 = $pdo->query($sql7);

	$sql8 =  "select * from dd105g4.spot  Order By spot_vote_count desc limit 4,1";//第5名
	$n05 = $pdo->query($sql8);

	$sql9 =  "select * from dd105g4.spot  Order By spot_vote_count desc limit 5,1";//第6名
	$n06 = $pdo->query($sql9);

	$sql10 =  "select * from dd105g4.spot  Order By spot_vote_count desc limit 6,1";//第7名
	$n07 = $pdo->query($sql10);

	$sql11 =  "select * from dd105g4.spot  Order By spot_vote_count desc limit 7,1";//第8名
	$n08 = $pdo->query($sql11);

	$sql12 =  "select * from dd105g4.spot  Order By spot_vote_count desc limit 8,1";//第9名
	$n09 = $pdo->query($sql12);

	$sql13 =  "select * from dd105g4.spot  Order By spot_vote_count desc limit 9,1";//第10名
	$n010 = $pdo->query($sql13);

	//$sql4 =  "select * from dd105g4.spot Order BY spot_no asc limit 10;";//1-10數字
	//$sopt4 = $pdo->query($sql4);

} catch (PDOException $e) {
	echo "錯誤行號 : " . $e->getLine() . "<br>";
	echo "錯誤訊息 : " . $e->getMessage() . "<br>";
	// echo "系統暫時連不上請聯絡維護人員";
}
?> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Examples</title>
<style type="text/css">
		td{text-align: center;
			padding: 8px;
            width: 350px;
            line-height: 50px;
		}
</style>
</head>

<body>
<!-- 第1名 -->
<?php 
while( $prodRow = $n01->fetchObject()){
?>
<tbody id="adminTable" class="card-body">
              <tr>
                <td><?="01"?></td>
                <td><a href="#"> <strong><?=$prodRow->spot_name?></strong></td>
                <td><?=$prodRow->spot_vote_count?></td>
                </tr>
            </thead>
</tbody>
<?php
}
?>



<!-- 第2名 -->
<?php 
while( $prodRow = $n02->fetchObject()){
?>
<tbody id="adminTable" class="card-body">
              <tr>
                <td><?="02"?></td>
                <td><a href="#"> <strong><?=$prodRow->spot_name?></strong></td>
                <td><?=$prodRow->spot_vote_count?></td>
                </tr>
            </thead>
</tbody>
<?php
}
?>	
<!-- 第3名 -->
<?php 
while( $prodRow = $n03->fetchObject()){
?>
<tbody id="adminTable" class="card-body">
              <tr>
                <td><?="03"?></td>
                <td><a href="#"> <strong><?=$prodRow->spot_name?></strong></td>
                <td><?=$prodRow->spot_vote_count?></td>
                </tr>
            </thead>
</tbody>
<?php
}
?>	
<!-- 第4名 -->
<?php 
while( $prodRow = $n04->fetchObject()){
?>
<tbody id="adminTable" class="card-body">
              <tr>
                <td><?="04"?></td>
                <td><a href="#"> <strong><?=$prodRow->spot_name?></strong></td>
                <td><?=$prodRow->spot_vote_count?></td>
                </tr>
            </thead>
</tbody>
<?php
}
?>	
<!-- 第5名 -->
<?php 
while( $prodRow = $n05->fetchObject()){
?>
<tbody id="adminTable" class="card-body">
              <tr>
                <td><?="05"?></td>
                <td><a href="#"> <strong><?=$prodRow->spot_name?></strong></td>
                <td><?=$prodRow->spot_vote_count?></td>
                </tr>
            </thead>
</tbody>
<?php
}
?>	
<!-- 第6名 -->
<?php 
while( $prodRow = $n06->fetchObject()){
?>
<tbody id="adminTable" class="card-body">
              <tr>
                <td><?="06"?></td>
                <td><a href="#"> <strong><?=$prodRow->spot_name?></strong></td>
                <td><?=$prodRow->spot_vote_count?></td>
                </tr>
            </thead>
</tbody>
<?php
}
?>	
<!-- 第7名 -->
<?php 
while( $prodRow = $n07->fetchObject()){
?>
<tbody id="adminTable" class="card-body">
              <tr>
                <td><?="07"?></td>
                <td><a href="#"> <strong><?=$prodRow->spot_name?></strong></td>
                <td><?=$prodRow->spot_vote_count?></td>
                </tr>
            </thead>
</tbody>
<?php
}
?>	
<!-- 第8名 -->
<?php 
while( $prodRow = $n08->fetchObject()){
?>
<tbody id="adminTable" class="card-body">
              <tr>
                <td><?="08"?></td>
                <td><a href="#"> <strong><?=$prodRow->spot_name?></strong></td>
                <td><?=$prodRow->spot_vote_count?></td>
                </tr>
            </thead>
</tbody>
<?php
}
?>	
<!-- 第9名 -->
<?php 
while( $prodRow = $n09->fetchObject()){
?>
<tbody id="adminTable" class="card-body">
              <tr>
                <td><?="09"?></td>
                <td><a href="#"> <strong><?=$prodRow->spot_name?></strong></td>
                <td><?=$prodRow->spot_vote_count?></td>
                </tr>
            </thead>
</tbody>
<?php
}
?>	
<!-- 第10名 -->
<?php 
while( $prodRow = $n010->fetchObject()){
?>
<tbody id="adminTable" class="card-body">
              <tr>
				  
                <td><?="10"?></td>
                <td><a href="#"> <strong><?=$prodRow->spot_name?></strong></td>
                <td><?=$prodRow->spot_vote_count?></td>
                </tr>
            </thead>
</tbody>
<?php
}
?>		
</body>
</html>