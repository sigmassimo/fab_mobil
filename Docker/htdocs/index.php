<?php

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
echo "Connected successfully";

$sql = "SELECT * FROM Workshop";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "workshop_id: " . $row["workshop_id"]. " - titel: " . $row["titel"]. " - beschreibung: " . $row["beschreibung"]. " - dauer: " .$row["dauer"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>