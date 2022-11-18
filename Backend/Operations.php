<?php
class WORKER{
	public function getProducts($credentials)
    {
		$final = array("Status"=>"ERROR", "Message"=>"Connect error");
		$conn = mysqli_connect("localhost", $credentials["dbUser"], $credentials["dbPass"], $credentials["dbName"]);
		$conn->set_charset("utf8mb4");
		$sql = "SELECT * FROM ".$credentials["tblName"]." ORDER BY sku ASC";
		$products = $conn->query($sql);
		if(mysqli_num_rows($products)){
			$final = $products->fetch_all(MYSQLI_ASSOC);
		}else{
			$final = array("Status"=>"ERROR", "Message"=>"Data Table cannot be empty");
		}
		mysqli_close($conn);
		return json_encode($final);
	}
	public function addProduct($credentials,$new)
    {
		$final = array("Status"=>"ERROR", "Message"=>"Connect error");
		$conn = mysqli_connect("localhost", $credentials["dbUser"], $credentials["dbPass"], $credentials["dbName"]);
		$conn->set_charset("utf8mb4");
		$sql = "INSERT INTO ".$credentials["tblName"]." (sku,name,price,data) VALUES ('".$new["sku"]."','".$new["name"]."','".$new["price"]."','".$new["data"]."')";
		if ($conn->query($sql) === TRUE){
			$final = array("Status"=>"SUCCESS","Message"=>"Added");
		}else{
			$final = array("Status"=>"ERROR", "Message"=>$conn->error);
		}
		mysqli_close($conn);
		return json_encode($final);
	}
	public function delProduct($credentials,$skus)
    {
		$final = array("Status"=>"ERROR", "Message"=>"Connect error");
		$conn = mysqli_connect("localhost", $credentials["dbUser"], $credentials["dbPass"], $credentials["dbName"]);
		$conn->set_charset("utf8mb4");
		$sql = "DELETE FROM ".$credentials["tblName"]." WHERE sku IN (".$skus.")";
		if ($conn->query($sql) === TRUE){
			$final = array("Status"=>"SUCCESS","Message"=>"Deleted");
		}else{
			$final = array("Status"=>"ERROR", "Message"=>$conn->error);
		}
		mysqli_close($conn);
		return json_encode($final);
	}
	
	
}
?>