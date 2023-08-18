<?php
session_start();
$servername = "host.docker.internal";
$username = "SommerCamp";
$password = "Sommer2023";
$dbname = "SommerCamp";
$veranstaltungs_id=$_GET["veranstaltungs_id"];
$user_id=$_SESSION["user_id"];


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "DELETE FROM `Teilnehmer` WHERE user_id = $user_id AND veranstaltungs_id = $veranstaltungs_id";
$result = $conn->query($sql);
$conn->close();
header("Location: /Kalenderpage/kalender4.html");
?>