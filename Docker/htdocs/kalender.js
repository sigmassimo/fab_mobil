
const xhttp = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function() {
    
    response = JSON.parse(this.responseText);
   events = '[';
    for ( i = 0; i < response.length; i++) {
        console.log(response[i].startzeit);
        console.log(response[i].endzeit);
        btsplit = response[i].startzeit.split(":")
        bt = changeTimeFormat(btsplit[0],btsplit[1]);
        etsplit = response[i].endzeit.split(":")
        et = changeTimeFormat(etsplit[0],etsplit[1]);
        
        singledate = response[i].datum.split("-");
        if (i+1 < response.length) {
            events = events + '{"day":' + parseInt(singledate[2]) + ',"month":' + parseInt(singledate[1]) + ',"year":' + parseInt(singledate[0]) + ',"events":[{"title":"' + response[i].ort + '","time":"' + bt + ' - ' + et + '","Spezialisierung":"'+ response[i].spezialisierung +'"}]},';
        }else{
            events = events + '{"day":' + parseInt(singledate[2]) + ',"month":' + parseInt(singledate[1]) + ',"year":' + parseInt(singledate[0]) + ',"events":[{"title":"' + response[i].ort + '","time":"' + bt + ' - ' + et + '","Spezialisierung":"'+ response[i].spezialisierung +'"}]}';
        }
               
         
    }
    events = events + ']';
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
[{"day":15,"month":8,"year":2023,"events":[{"title":"Dresden","time":"12:48 PM - 10:008 AM","Spezialisierung":"Kristall ziehen"}]},{"day":3,"month":8,"year":2024,"events":[{"title":"Oberschule Kitzscher","time":"4:56 PM - 5:000 AM","Spezialisierung":"null"}]},{"day":10,"month":8,"year":2023,"events":[{"title":"Oberschule Borna","time":"4:56 AM - 12:000 AM","Spezialisierung":"null"}]},{"day":19,"month":10,"year":2023,"events":[{"title":"Oberschule Frohburg","time":"1:56 PM - 12:000 AM","Spezialisierung":"null"}]},{"day":24,"month":5,"year":2024,"events":[{"title":"Oberschule Claußnitz","time":"9:34 AM - 12:000 AM","Spezialisierung":"null"}]},{"day":17,"month":4,"year":2024,"events":[{"title":"Martin – Luther Gymnasium, Frankenberg","time":"9:18 AM - 12:000 AM","Spezialisierung":"null"}]},{"day":18,"month":7,"year":2024,"events":[{"title":"Friedrich Rückert Grundschule, Plauen","time":"11:48 AM - 9:46 PM","Spezialisierung":"null"}]}]