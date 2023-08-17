import {username} from "./login.js"
import {password} from "./login.js"
import {user_role} from "./login.js"


function calendarInterface(){
    //
    //fetch data for calendar from db
    //
    //
    let test_object_1 = [{}];
    let bus_termine_list = [];

    for (i of test_object_1){
        bus_termine_list.psuh(...Object.values(i));
    };

    for (let i = 0; i < bus_termine_list.length; i++) {
        const box = document.createElement("div");
        let box_name = "box" + Sring(i);
        box.setAttribute("id", box_name);
        box.style.border = "1.5px solid black";
        box.style.borderRadius = "5px";
        box.style.textAlign = "center";
        box.style.width = "10%";
    };


}


function cancelCalendarAppointment(){
    let old_calendar_appointment = ""; //die Mainbox ist, die zurzeit ausgewählt ist und die auf die js dann auch zugreift und bearbeitet

    //update selected date: without the user from db
    //replace user with "user needed" from db
    //get list with people that are selected for the appointment from db
    
    let test_object_2 = [{}];
    let list_user_appointment = [];

    for (i of test_object_2){
        list_user_appointment.push(...Object.values(i));
    };
    

    list_user_appointment.remove(username);

    let userNeeded = "User needed"
    list_user_appointment.append(userNeeded);

    let userNeededBox = document.createElement("div");
    userNeededBox.setAttribute("id", "userNeeded");
    userNeededBox.style.border = "1.5px solid black";
    userNeededBox.style.textAlign = "center";
    userNeededBox.style.width = "10%";
    userNeededBox.innerHTML = "Nutzer wird noch gebraucht!";

    let bigContainer = document.getElementById("userBoxContainer");
    bigContainer.appendChild(userNeededBox);

}


function registerCalendarAppointment(){
    let new_calendar_appointment = "";

    //update selected date: without the user from db
    //replace user with "user needed" from db
    //get list with people that are selected for the appointment from db

    let userNeededBox = document.getElementById("userneeded");

    if (userNeeded in list_user_appointment && userNeededBox !== null) {
      list_user_appointment.append(username);
      userNeededBox.remove();

      let userBox = document.createElement("div");
      box.setAttribute("id", username);
      box.style.border = "1.5px solid black";
      box.style.borderRadius = "5px";
      box.style.textAlign = "center";
      box.style.width = "10%";
      box.innerHTML = username;

      bigContainer.appendChild(userBox);
    }
    

}