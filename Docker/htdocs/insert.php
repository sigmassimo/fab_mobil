<?php

$servername = "host.docker.internal";
$username = "SommerCamp";
$password = "Sommer2023";
$dbname = "SommerCamp";
$vorname=$_GET["fname"];
$nachname=$_GET["lname"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
$sql = "INSERT INTO `Workshop` (`titel`,`beschreibung`, `dauer`) VALUES ('$vorname', '$nachname', '1')";
$result = $conn->query($sql);

$conn->close();
?>