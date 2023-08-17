<?php

$servername = "host.docker.internal";
$username = "SommerCamp";
$password = "Sommer2023";
$dbname = "SommerCamp";

// echo <form id="formular" action="/index.php" method="post"><br>
// Name: <input type="number" name="user_id"><br>
// E-mail: <input type="number" name="veranstaltungs_id"><br>
// <button name="sent" value="1">Eintragen</button>
// </form>;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


// Rolleneingabe abchecken und id eintragen
$rolle = $_POST['rolle'];

$Rollen = "SELECT rollen_id, rollen_name FROM Rollen";
$result = $conn->query($Rollen);
//check if one role is the same, as the input role
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()){
  if ($row['rollen_name'] == $rolle)
  {
    //get role id
    $rollen_id = $row['rollen_id'];
  }
}};
// ERROR if not
if ($rollen_id == NULL){
  echo "Bitte gültige Rolle auswählen!";
}


//ander Daten übernehmen
$user_id = $_POST['user_id'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$passwort = $_POST['passwort'];
// $rolle_id =$_POST['rollen'];
$email = $_POST['email'];
$tel_number = $_POST['tel_number'];
$stellenname = $_POST['stellenname'];
$unternehmen = $_POST['unternehmen'];
$anrede = $_POST['anrede'];
$beschreibung = $_POST['beschreibung'];




$sql = "INSERT INTO Nutzerdaten (user_id, firstname, lastname, passwort, rolle_id, email, tel_number, stellenname, unternehmen, anrede, beschreibung)
VALUES ($user_id, $firstname, $lastname, $passwort, $rollen_id, $email, $tel_number, $stellenname, $unternehmen, $anrede, $beschreibung)";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>