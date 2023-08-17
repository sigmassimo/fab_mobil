<?php

$servername = "host.docker.internal";
$username = "SommerCamp";
$password = "Sommer2023";
$dbname = "SommerCamp";

// echo '<form id="formular" action="/index.php" method="post"><br>
// Name: <input type="number" name="user_id"><br>
// E-mail: <input type="number" name="veranstaltungs_id"><br>
// <button name="sent" value="1">Eintragen</button>
// </form>';


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$firstname = $_Post['firstname'];
$lastname = $_Post['lastname'];

$sql = "SELECT * FROM Nutzerdaten";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {

    if ($row['firstname'] == $firstname and $row['lastname'] == $lastname){
    echo "Id: " . $row["user_id"].
    "Vorname:" . $row["firstname"].
    "Nachname: " . $row["lastname"].
    "Passwort:" . $row["passwort"].
    "rolle_id" . $row["rolle_id"].
    "email" . $row["email"].
    "tel_number" . $row["tel_number"].
    "stellenname" . $row["stellenname"].
    "unternehmen" . $row["unternehmen"].
    "anrede" . $row["anrede"].
    "beschreibung" . $row["beschreibung"] . "<br>";}
  }
} else {
  echo "0 results";
}

$conn->close();
?>