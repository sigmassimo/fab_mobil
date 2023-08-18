<?php
$servername = "host.docker.internal";
$username = "SommerCamp";
$password = "Sommer2023";
$dbname = "SommerCamp";

$veranstaltungsid = $_GET["id"];
// Create connection
//$veranstaltungsid = 1;
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT * FROM Veranstaltungen LEFT JOIN Workshop on Veranstaltungen.workshop_id = Workshop.workshop_id WHERE veranstaltungs_id = $veranstaltungsid";
$result = $conn->query($sql);

$rows = [];

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {

    $rows[] = $row;
  }

  echo json_encode($rows);
} else {

}
$conn->close();

?>
