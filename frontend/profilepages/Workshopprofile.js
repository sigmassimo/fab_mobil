const TermineContainer = document.querySelector("#event");    

async function getDates(){
    const req = await fetch("/api/php_ausgabe/Veranstaltungen.php");
    const data = await req.json();


    
        TermineContainer.innerHTML = 
        `<a href="moin.html">
            <div class="box">
                <div class="column">
                    <div id="location" class="location">Ort: ${entry.ort}</div>
                    <div id="workshop" class="workshop">WS: ${entry.spezialisierung} </div>
                </div>
                <div class="column">
                    <div class="dateandtime" id="dateandtime">${entry.datum}, ${entry.start_zeit}</div>
                </div>
            </div>
        </a>`;
    
}

getDates();