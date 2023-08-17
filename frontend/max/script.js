const xhttp = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function() {
  // Here you can use the Data


 test = JSON.parse(this.responseText);
  console.log( test[0]);
  for (i = 0; i < test.length - 1; i++){
    let data = test[i];
    for (const key in data){
      if(key == "titel" || key == "dauer"){
      console.log(`${key}: ${data[key]}`);
      if (key == "titel"){
       localStorage.setItem("events", '[{"day": ' + day + ',"month":' + month + ',"year": ' + year + ',"events":[{"title":"' + title + '","time":" ' + time + '"},{"title":"IT","time":"2:56 PM - 11:56 PM"}]}]')
       return titel;
      } else{
        let dauer = data[key];
        return dauer;
      }
      }
    };
  }};
  day = 16;
  month = 8;
  year = 2023;
  //title = data.titel;
  //time = data.dauer;
  localStorage.setItem("events", '[{"day": ' + day + ',"month":' + month + ',"year": ' + year + ',"events":[{"title":"' + title + '","time":" ' + time + '"},{"title":"IT","time":"2:56 PM - 11:56 PM"}]}]');


// Send a request
xhttp.open("GET", "http://localhost/api/php_ausgabe/veranstaltungen.php");
xhttp.send();