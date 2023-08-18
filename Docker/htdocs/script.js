i = 0;
b = 0; //Länge des Array
c = 0; //Key Variable
const xhttp = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function() {
  // Here you can use the Data

  response = JSON.parse(this.responseText);
  b=response.length;

  console.log(response);
  
  while(i<b){
  localStorage.setItem(c, "Dauer" + response[i].dauer + "Titel" + response[i].titel);
  c=c+1
  i=i+1
}
}

// Send a request
xhttp.open("GET", "http://localhost/workshopliste.php");
xhttp.send();