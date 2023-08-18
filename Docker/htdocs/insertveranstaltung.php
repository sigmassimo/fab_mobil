<?php
$servername = "host.docker.internal";
$username = "SommerCamp";
$password = "Sommer2023";
$dbname = "SommerCamp";

$datum = $_GET["datum"];
$ort = $_GET["ort"];
$startzeit = $_GET["startzeit"];
$endzeit = $_GET["endzeit"];
$workshop = 1;
$spezialisierungen = $_GET["spezialisierungen"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO `Veranstaltungen` (`datum`,`ort`, `startzeit`,`endzeit`,`workshop_id`,`spezialisierung`) 
        VALUES ('$datum','$ort','$startzeit:00','$endzeit:00','$workshop','$spezialisierungen')";

$conn->query($sql);

$conn->close();
?>