import * as JsHashes from "jshashes";


function openToolWindow(){
    window.open("main_page.html");
}


function userLogin(){
    let username_input_txt = document.getElementById("username_input");
    let password_input_txt = document.getElementById("password_input"); 
    
    let username_input = document.getElementById("username_input");
    let password_input = document.getElementById("password_input");

    //
    //fetch username obj 
    //
    //

    username_obj = [{}];
    username_list = [];

    for(i of username_obj){
        username_list.push(...Object.values(i));
    };

    if (username_list.includes(username_input_txt)){
        var SHA256 =  new Hashes.SHA256;
        let hashed_password = SHA256.hex(password_input_txt)

        //
        //compare hashed input value wih database hash
        //
        //

        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if (password_input_txt => 10 && /\d/.test(password_input_txt) && format.test(password_input_txt)){
            if (hashed_password == hashed_password){
                console.log("Login successfull! enjoy our tool.");
                //fetch user_role to access the correspondending user_role
                //
                openToolWindow();
                let entity_role = "";
                let username = username_input_txt;
                return entity_role, username;
            } else {
                console.log("Your Password is wrong! Please try again!")
                if (password_input_txt != ""){
                    password_input.innerHTML = "";
                };
            };
    }else {
        console.log("Your password is too short! It must at least contain 10 digits, 1 numbers, 1 character and 1 special character")
        if (password_input_txt != ""){
            password_input.innerHTML = "";
        }};
    } else{
        console.log(username_input_txt + " ist nicht vorhanden oder falsch geschrieben!");
        if (username_input_txt != "" ){
            username_input.innerHTML = "";
        };
    };
};





