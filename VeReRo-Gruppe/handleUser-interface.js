import {username} from "./login.js"
import {user_role} from "./login.js"


function loadUserList(){
    //
    //load user list with names from bd
    //

    username_obj = [{}];
    username_list = [];

    for(i of username_obj){
        username_list.push(...Object.values(i));
    };

    for (i = 0; i < username_list.length - 1; i++){
        let box = document.createElement("td");
        
        

    };
}


function deleteUser(){
    let selectedUser = "";

    //
    //check if User (username) still exists in db 
    //

    username_obj = [{}];
    username_list = [];

    for(i of username_obj){
        username_list.push(...Object.values(i));
    };

    if (username_list.includes(selectedUser)){
        let userBox = document.getElementById("user" + String(username_list[selectedUser]));
        //
        //delete User from db, every data about the user! from multible tables (if necessasar)
        //
        console.log(selectedUser + " was deleted!");
        selectedUserBox.remove();
        console.log(username + "´s box was deleted from the username list!");

    }
};


function addUser(){

};