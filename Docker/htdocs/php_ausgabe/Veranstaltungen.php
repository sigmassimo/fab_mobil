
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

$sql = "SELECT * FROM `Veranstaltungen`";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    //echo "veranstaltungs_id: " . $row["veranstaltungs_id"]."datum: " . $row["datum"]."ort: " . $row["ort"]."start_zeit: " . $row["start_zeit"]."workshop_id: " . $row["workshop_id"]."spezialisierung: " . $row["spezialisierung"];
  
    echo json_encode($row);
  }
} else {
  echo "0 results";
}


$conn->close();

?>
