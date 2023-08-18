async function getProfile(){
    const request = await fetch("/api/getsecureuserdata.php");
    const data = await request.json()

    console.log(data)

    document.querySelector("#anrede").value = data.anrede
    document.querySelector("#lastname").value = data.lastname
    document.querySelector("#firstname").value = data.firstname
    document.querySelector("#unternehmen").value = data.unternehmen
    document.querySelector("#stellenname").value = data.stellenname
    document.querySelector("#email").value = data.email
    document.querySelector("#tel_number").value = data.tel_number
    document.querySelector("#beschreibung").value = data.beschreibung
}

getProfile();