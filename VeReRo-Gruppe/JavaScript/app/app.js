const express = require("express");

const { getUsernamesFirstnameLastname, getUsernamesFirstname } = require("./database.js");

const app = express();


app.use((err, req, res, next) => {
   console.log(err.stack); 
    res.status(500).send("Something broke!");
});

/*app.get("/usernames", async (req, res) => {
    const usernames = await getUsernamesFirstnameLastname();
    res.send(usernames); 
});
*/
app.get("/firstnames", async (req, res) => {
    const firstnames = await getUsernamesFirstname();
    res.send(firstnames);
});

app.listen(3000, () => {
   console.log("Server ist running on port 3000!");  
});
