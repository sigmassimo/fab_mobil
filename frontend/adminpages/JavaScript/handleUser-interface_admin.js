

function loadUserList(){
    let firstnameList = []
    fetch("http://localhost/api/php_ausgabe/Nutzerdaten.php")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            for (const entry of data) {
                firstnameList.push(entry.firstname);
                console.log(firstnameList);
                if (data.length == firstnameList.length){
                    break;
            }};
            
            console.log("Die Liste der Vorname aller User wurde erfolgreich gefetcht!")
            if (firstnameList.length >= 1){
                for (i = 0; i < firstnameList.length - 1; i++){
                    //create table elements for every user in the list
                    let box_tr = document.createElement("tr");
                    let box_td_name = document.createElement("td");
                    let box_td_edit = document.createElement("td");
                    let box_td_edit_button = document.createElement("button");
                    let box_td_delete = document.createElement("td");
                    let box_td_delete_button = document.createElement("button");

                    //fill up boxes with dynamic data from for loop from db
                    box_td_name.innerHTML = firstnameList[i];
                    
                    box_td_edit_button.innerHTML = "Bearbeiten";
                    box_td_edit.appendChild(box_td_edit_button);
                    box_td_delete_button.innerHTML = "Löschen";
                    box_td_delete.appendChild(box_td_delete_button);

                    //set boxes id to recognize the id, to start the right function
                    box_tr.setAttribute("id", i);
                    box_td_name.setAttribute("id", "cell_1_user_" + i);
                    box_td_name.setAttribute("class", "box_td_name");
                    box_td_edit.setAttribute("id", "cell_2_user_" + i);
                    box_td_edit_button.setAttribute("id", "editButton" + i);
                    box_td_edit_button.setAttribute("class", "editButtons");
                    box_td_edit.setAttribute("class", "box_td_edit");
                    box_td_delete.setAttribute("id", "cell_3_user_" + i);
                    box_td_delete_button.setAttribute("id", "deleteButton" + i);
                    box_td_delete_button.setAttribute("class", "deleteButtons");
                    box_td_delete.setAttribute("class", "box_td_delete");

                    //set classes for css team to style the table 
                    box_td_name.setAttribute("class", "cell_1_user");
                    box_td_edit.setAttribute("class", "cell_2_user");
                    box_td_delete.setAttribute("class", "cell_3_user");
                    box_tr.setAttribute("class", "tableRow_user");

                    //add finished table row
                    let table = document.getElementById("table");
                    table.appendChild(box_tr);

                    //add finished table cells to the table row that was added to the whole table
                    box_tr.appendChild(box_td_name);
                    box_tr.appendChild(box_td_edit);
                    box_tr.appendChild(box_td_delete);
                };
        } else {    
            console.log("Die Liste enthält kein Elemente, was bedeutet, dass es keine User gibt!");
        
        }})};


loadUserList();


function deleteUser(){
    fetch("http://localhost/api/php_ausgabe/Nutzerdaten.php")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            for (const entry of data) {
                firstnameList.push(entry.firstname);
                console.log(firstnameList);
                if (data.length == firstnameList.length){
                    break;
            }};
            
            console.log("Die Liste der Vorname aller User wurde erfolgreich gefetcht!")
    
            // let user_box = document.getElementsByClassName("box_td_name");
            // if (user_box.innerHTML == "")

            const buttons = document.querySelectorAll('box_td_delete');

            buttons.forEach(button => {
                button.addEventListener('click', event => {
                    const clickedButton = event.target; // Der geklickte Button
                    const row = clickedButton.closest('tr'); // Die übergeordnete Zeile (Row)

                    console.log('Clicked button ID:', clickedButton.getAttribute('data-id'));
                    console.log('Containing row:', row);
                    return row
                
            })});

            //checking if user exists
            if (username in username_list){
                const td_elements = document.getElementsByTagName("td");
                const buttons = document.getElementsByTagName("button");
                const buttonPressed = e => {
                    let deleteButton = document.getElementById(e.target.id);
                    let deleteButtonText = document.getElementById(e.target.id).innerHTML;

                    let lastDigit = deleteButtonText.charAt(deleteButtonText.length - 1);
                    let selectedUser = document.getElementById("cell_1_user_" + lastDigit);

                    return deleteButton, selectedUser;
                };

                for (let button of buttons){
                    button.addEventListener("click", buttonPressed);
                };

                //deleting database data about the user 
                let baseURL = "http://localhost/api/php_ausgabe/delete.php";

                let type = "Nutzerdaten";
                let id = lastDigit;

                let fullURL = "${baseURL}?type=§{encodeURIComponent(type)&id=${encodeURIComponent(id)}}";

                fetch(fullURL)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(error => {
                        console.error('Fehler beim Abrufen der Daten:', error);
                    });

                // delets all the data (the whole row) 
                selectedRow = row
                document.getElementById(selectedRow).remove();
                console.log(selectedUser + " was deleted!");
                console.log(username + "`s box was deleted from the username list!");

            } else {
                console.log(username + "doesn` exist in the user database! Maybe the user ist deleted aleady.");
                return;
}})};


let deleteButtons = document.getElementsByClassName("deleteButtons");
for (var i = 0 ; i < deleteButtons.length; i++) {
    if (deleteButtons.includes(deleteButtons[i])){
        deleteButtons[i].addEventListener('click' , deleteUser , false ) ;
    } else{
        console.log("Fehler");
    } ;
};


function editUser(){
    // gets the selected User(-name), and gets all the data corresponding to the user through the database 

    const td_elements = document.getElementsByTagName("td");
    const buttons = document.getElementsByTagName("button");
    const buttonPressed = e => {
        let editButton = document.getElementById(e.target.id);
        let deleteButtonText = document.getElementById(e.target.id).innerHTML;

        let lastDigit = deleteButtonText.charAt(deleteButtonText.length - 1);
        let selectedUser = document.getElementById("cell_1_user_" + lastDigit);
        let selectedUser_Name = selectedUser.innerHTML;

        return editButton, selectedUser, selectedUser_Name
    };

    // for (let button of buttons){
    //     button.addEventListener("click", buttonPressed);
    // };

    // get all the data from the user and put it on the html page, so that the admin can edit the profile
    // const uniqueString_Name_User = selectedUser_Name;
    
    // const query = 'SELECT * FROM Nutzerdaten WHERE unique_column = ?';
    // connection.query(query, [uniqueString], (error, results, fields) => {
    //     if (error) {
    //       console.error('Error:', error);
    //       return;
    //     };

    //     if (results.length > 0) {
    //         const selectedRow = results[0];
    //         return selectedRow;          
    //     } else {
    //         return;
    // }});

    // // get the data from the created bject from the db and put it inside some variables
    // let user_id = selectedRow(id);
    // let user_name = selectedRow(name);
    // let user_age = selectedRow(age);
    // let user_job = selectedRow(job);
    // let user_email = selectedRow(email);
    // let user_tel = selectedRow(telephone);
    // let user_salutation = selectedRow(salutation);
    // let user_company = selectedRow(company);

};

// let deleteButton = document.getElementsByClassName("box_td_edit");
// editButton.addEventListener("click", editUser);
