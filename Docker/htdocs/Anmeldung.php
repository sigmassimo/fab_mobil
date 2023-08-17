<?php

$servername = "host.docker.internal";
$username = "SommerCamp";
$password = "Sommer2023";
$dbname = "SommerCamp";
$email=$_GET["email"];
$passwort=$_GET["passwort"];

//hash password
$passwort = hash('sha256', $passwort);


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT user_id FROM Nutzerdaten WHERE email = '$email' AND passwort = '$passwort'";

$result = $conn->query($sql);
if ($result->num_rows == 0) {
    header("Location: /loginpage/Anmeldung.html");
} 
else {
    header("Location: /Kalenderpage/Kalender3.html");
}
$conn->close();
?>