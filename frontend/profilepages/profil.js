async function getProfile(){
    const request = await fetch("/api/profildatenid.php");
    const data = (await request.json())[0];

    document.getElementById("anrede").innerHTML = data.anrede;
    document.getElementById("lastname").innerHTML = data.lastname;
    document.getElementById("firstname").innerHTML = data.firstname;
    document.getElementById("unternehmen").innerHTML = data.unternehmen;
    document.getElementById("stellenname").innerHTML = data.stellenname;
    document.getElementById("email").innerHTML = data.email;
    document.getElementById("tel_number").innerHTML = data.tel_number;
    document.getElementById("beschreibung").innerHTML = data.beschreibung;

    
}

getProfile()