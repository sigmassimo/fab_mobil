const mysql = require("mysql2");

import {username}  from "login_interface.js";
import {entity_role} from "login_interface.js";

const connection = mysql.createConnection({
    host: "localhost",
    user: "SommerCamp",
    password: "Sommer2023",
    database: "SommerCamp"
  });


function editProfile(){




};