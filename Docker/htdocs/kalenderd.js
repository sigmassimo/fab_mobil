
const xhttp = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function() {
    
    response = JSON.parse(this.responseText);
   events = "[";
    for ( i = 0; i < response.length; i++) {
        console.log(response[i].startzeit);
        console.log(response[i].endzeit);
        btsplit = response[i].startzeit.split(":")
        bt = changeTimeFormat(btsplit[0],btsplit[1]);
        etsplit = response[i].endzeit.split(":")
        et = changeTimeFormat(etsplit[0],etsplit[1]);
        
        singledate = response[i].datum.split("-");
        events = events + '{"day":' + parseInt(singledate[2]) + ',"month":' + parseInt(singledate[1]) + ',"year":' + parseInt(singledate[0]) + ',"events":[{"title":"' + response[i].ort + '","time":"' + bt + ' - ' + et + '"}]},';
        
                //localStorage.setItem('events','[{"day":' + singledate[2] + ',"month":' + singledate[1] + ',"year":' + singledate[0] + ',"events":[{"title":"' + response[i].ort + '","time":"' + bt + ' - ' + et + '"}]}]');
         
    }
    events = events + "]"
    localStorage.setItem('events',events);

}

// Send a request
xhttp.open("GET", "http://localhost/api/php_ausgabe/Veranstaltungen.php");
xhttp.send();

function changeTimeFormat(hour,minute) {
    let date = new Date();
 
    let hours = hour;
    let minutes = minute;
 
    // Check whether AM or PM
    let newformat = hours >= 12 ? 'PM' : 'AM';
 
    // Find current hour in AM-PM Format
    hours = hours % 12;
 
    // To display "0" as "12"
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + newformat;
}