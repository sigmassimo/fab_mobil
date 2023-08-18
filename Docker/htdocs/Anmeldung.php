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
} else {
    session_start();
    while($row = $result->fetch_assoc()) {
      $_SESSION['user_id']= $result->fetch_assoc()["user_id"];  //*user id die in $sql=..... selcetiert wird */;
      header("Location: /Kalenderpage/kalender4.html");
      die();
    }
}
$conn->close();
?>