const expressApp = require("../app");

expressApp.get("/data", (req, res) => {
  connection.query("SELECT firstname FROM Nutzerdaten", (err, results) => {
    res.send("Hello")
    if (err) {
      console.error("Fehler beim Abrufen der Daten: ", err);
      return;
    }
  });
});
