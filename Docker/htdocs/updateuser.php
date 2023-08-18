<?php
        session_start();
        $servername = "host.docker.internal";
        $username = "SommerCamp";
        $password = "Sommer2023";
        $dbname = "SommerCamp";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$lastname=$_POST['lastname'];

$sql = "UPDATE Nutzerdaten SET lastname='$lastname' WHERE user_id = " . $_SESSION['user_id'];

if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();
?> 