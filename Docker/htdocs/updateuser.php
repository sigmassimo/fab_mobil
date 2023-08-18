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



$lastname = $_POST['lastname'];

$sql = "UPDATE Nutzerdaten SET
    anrede='". $_POST['anrede'] . "',
    lastname='" . $_POST['lastname'] ."',
    firstname='". $_POST['firstname'] ."',
    unternehmen='". $_POST['unternehmen'] ."',
    stellenname='". $_POST['stellenname'] ."',
    email='". $_POST['email'] ."',
    tel_number='". $_POST['tel_number'] ."',
    beschreibung='". $_POST['beschreibung'] ."' WHERE user_id = " . $_SESSION['user_id'];




// var_dump($_POST);

if ($conn->query($sql) === TRUE) {
    header("Location: /profilepages/Profil.html");
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();
