async function delVer(){
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");
const request = await fetch("/api/delveranstaltung.php?id="+id);
window.open("/Kalenderpage/kalender4.html", "_self")
const data = await request
}