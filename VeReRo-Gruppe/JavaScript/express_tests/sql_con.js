const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: "localhost",
  user: "SommerCamp",
  password: "Sommer2023",
  database: "SommerCamp",
});

export default connection;
