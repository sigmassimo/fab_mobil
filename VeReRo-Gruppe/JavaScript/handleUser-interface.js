const mysql = require("mysql2");

import {username} from "./login.js";
import {user_role} from "./login.js";


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: ""
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Fehler bei der Verbindung zur Datenbank: ', err);
      return;
    }
    console.log('Verbindung zur Datenbank hergestellt.');

    connection.end();
  });


function loadUserList(){
    connection.query('SELECT user FROM user_data_table', (err, results) => {
        if (err) {
          console.error('Fehler beim Abrufen der Daten: ', err);
          return;
        };

    });

    const columnData = results.map(row => row.deine_spalte);

    for (i = 0; i < columnData.length - 1; i++){
        //create table elements for every user in the list
        let box_tr = document.createElement("tr");
        let box_td_1 = document.createElement("td");
        let box_td_2 = document.createElement("td");
        let box_td_2_button = createElement("button");
        let box_td_3 = document.createElement("td");
        let box_td_3_button = document.createElement("button");

        //fill up boxes with dynamic data from for loop from db
        box_td_1.innerHTML = username_list[i];
        box_td_2_button.innerHTML = "Bearbeiten";
        box_td_2.appendChild(box_td_2_button);
        box_td_3_button.innerHTML = "Löschen";
        box_td_3.appendChild(box_td_3_button);

        //set boxes id to recognize the id, to start the right function
        box_tr.setAttribute("id", i);
        box_td_1.setAttribute("id", "cell_1_user_" + i);
        box_td_2.setAttribute("id", "cell_2_user_" + i);
        box_td_2_button.setAttribute("id", "editButton" + i);
        box_td_3.setAttribute("id", "cell_3_user_" + i);
        box_td_3_button.setAttribute("id", "deleteButton" + i); 

        //set classes for css team to style the table 
        box_td_1.setAttribute("class", "cell_1_user");
        box_td_2.setAttribute("class", "cell_2_user");
        box_td_3.setAttribute("class", "cell_3_user");
        box_tr.setAttribute("class", "tableRow_user");

        //add finished table row
        let table = document.getElementById("table");
        table.insertRow(box_tr, -1);

        //add finished table cells to the table row that was added to the whole table
        if (tableRowChecker !== 0){ 
            table.insertCell(box_td_1);
            table.insertCell(box_td_2);
            table.insertCell(box_td_3);

            let tableRowChecker = 1;
            return tableRowChecker;
        };
        return tableRowChecker;
    };
};


loadUserList();


function deleteUser(){
    //
    //check if User (username) still exists in db 
    //

    const td_elements = document.getElementsByTagName("td");

    const buttons = document.getElementsByTagName("button");
    const buttonPressed = e => {
        let deleteButton = document.getElementById(e.target.id);
        let deleteButtonText = document.getElementById(e.target.id).innerHTML;

        let lastDigit = deleteButtonText.charAt(deleteButtonText.length - 1);
        let selectedUser = document.getElementById("cell_1_user_" + lastDigit);

        return deleteButton, selectedUser
    };

    for (let button of buttons){
        button.addEventListener("click", buttonPressed);
    };


    const query = 'SELECT * FROM your_table WHERE unique_column = ?';
    connection.query(query, [selectedUser], (error, results) => {
        if (error) {
            console.error('Error:', error);
            return;
        };
        if (results.length > 0){
            let selectedRow = results[0];
            return selectedRow;

    }});
    
    let rowToDeleteId = selectedRow;

    connection.query('DELETE FROM deine_tabelle WHERE id = ?', [rowToDeleteId], (err, result) => {
        if (err) {
          console.error('Fehler beim Löschen der Zeile: ', err);
          return;
    }});

    document.getElementById(selectedRow).remove();
    console.log(selectedUser + " was deleted!");
    console.log(username + "´s box was deleted from the username list!");


};


function editUser(){

    const td_elements = document.getElementsByTagName("td");
    const buttons = document.getElementsByTagName("button");
    const buttonPressed = e => {
        let editButton = document.getElementById(e.target.id);
        let deleteButtonText = document.getElementById(e.target.id).innerHTML;

        let lastDigit = deleteButtonText.charAt(deleteButtonText.length - 1);
        let selectedUser = document.getElementById("cell_1_user_" + lastDigit);

        return editButton, selectedUser
    };

    for (let button of buttons){
        button.addEventListener("click", buttonPressed);
    };






};

connection.end();