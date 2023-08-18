<?php
$servername = "host.docker.internal";
$username = "SommerCamp";
$password = "Sommer2023";
$dbname = "SommerCamp";
$type = $_GET["type"];
$id = $_GET["user_id"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// sql to delete a record
$sql = "DELETE FROM $type WHERE user_id = $id";


$result = $conn->query($sql);
$conn->query($sql);

$conn->close();
?>