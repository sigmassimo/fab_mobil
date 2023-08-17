const dotenv = require("dotenv")
dotenv.config();
const mysql = require("mysql2");


let pool 

setTimeout(() => {
  pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();
  console.log("Ready!")
}, 10000);

async function getAllNutzerDaten(id) {
  const result_Nutzerdaten_all = await pool.query("SELECT * FROM Nutzerdaten");
  return result_Nutzerdaten;
}

module.exports.getAllDataUser = async function getAllDataUser(id) {
  const [row] = await pool.query(
    `
    SELECT *
    FROM Nutzerdaten
    WHERE id = ?
    `,
    [id]
  );
}

module.exports.getUsernamesFirstname = async function getUsernamesFirstname() {
  const result_Nutzerdaten_firstname = await pool.query(
    "SELECT firstname FROM Nutzerdaten"
  );
  return result_Nutzerdaten_firstname;
}

module.exports.getUsernamesSingFirstname = async function getUsernamesSingFirstname(id) {
  const result_username_firstname = await pool.query(
    `
    SELECT firstname
    FROM Nutzerdaten
    WHERE id = ?
    `,
    [id]
  );
  return result_username_firstname;
}

module.exports.getUsernameLastname = async function getUsernamesLastname() {
  const result_Nutzerdaten_lastname = await pool.query(
    "SELECT lastname FROM Nutzerdaten"
  );
  return result_Nutzerdaten_lastname;
};


module.exports.getUsernamesSingLastname = async function getUsernamesSingLastname(id) {
  const result_username_lastname = await pool.query(
    `
    SELECT lastname
    FROM Nutzerdaten
    WHERE id = ?
    `,
    [id]
  );
  return result_username_lastname;
}

module.exports.getUsernamesFirstnameLastname = async function getUsernamesFirstnameLastname() {
  const result_Nutzerdaten_all = await pool.query(
    "SELECT firstname, lastname FROM Nutzerdaten"
  );
  return result_Nutzerdaten_all;
}

module.exports.getRollenID = async function getRollenID(id) {
  const result_Rollen_id = await pool.query(
    "SELECT rollen_id FROM Nutzerdaten WHERE id = ?",
    [id]
  );
  return result_Rollen_id;
}

module.exports.getEmail = async function getEmail(id) {
  const result_Email = await pool.query(
    "SELECT email FROM Nutzerdaten WHERE id = ?",
    [id]
  );
  return result_Email;
}

module.exports.getTelNumber = async function getTelNumber(id) {
  const result_Tel_number = await pool.query(
    "SELECT tel_number FROM Nutzerdaten WHERE id = ?",
    [id]
  );
  return result_Tel_number;
}

module.exports.getStellename = async function getStellename(id) {
  const result_Stellenname = await pool.query(
    "SELECT stellenname FROM Nutzerdaten WHERE id = ?",
    [id]
  );
  return result_Stellenname;
}

module.exports.getUnternehmen = async function getUnternehmen(id) {
  const result_Unternehmen = await pool.query(
    "SELECT unternehmen FROM Nutzerdaten WHERE id = ?",
    [id]
  );
  return result_Unternehmen;
}

module.exports.getAnrede = async function getAnrede(id) {
  const result_Anrede = await pool.query(
    "SELECT anrede FROM Nutzerdaten WHERE id = ?",
    [id]
  );
  return result_Anrede;
}

module.exports.getBeschreibung = async function getBeschreibung(id) {
  const result_Beschreibung = await pool.query(
    "SELECT beschreibung FROM Nutzerdaten WHERE id = ?",
    [id]
  );
  return result_Beschreibung;
}















