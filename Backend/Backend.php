<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include_once 'Operations.php';
$credentials = array(
    "dbName" => "DBNAME",
    "dbUser" => "root",
	"dbPass" => "",
    "tblName" => "scandi"
);
if(isset($_GET['getProducts'])){
	echo (new WORKER)->getProducts($credentials);
}
if(isset($_GET['addProduct'])){
	$new = array(
		"sku" => $_GET['s'],
		"name" => $_GET['n'],
		"price" => $_GET['p'],
		"data" => $_GET['d']
	);
	echo (new WORKER)->addProduct($credentials,$new);
}
if(isset($_GET['delProduct'])){
	echo (new WORKER)->delProduct($credentials,$_GET['s']);
}
?>