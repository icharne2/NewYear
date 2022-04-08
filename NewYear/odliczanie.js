//Automatyczna godzina
function zegar(){
    let data = new Date();
    let time = data.toLocaleTimeString();

    let d = data.getDay();
    const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

    let sylwester = new Date(2022, 12, 31, 23, 59, 59);
    let milisekundy = sylwester-data;

    document.getElementById("godzinka").innerHTML = time;
    document.getElementById("dzien").innerHTML = days[d];
    document.getElementById('koniec').innerHTML = (parseInt((milisekundy)/(60*60*1000))) + ' h ' + (parseInt((milisekundy)/(60*1000)) % (60)) + ' m ' + (parseInt((milisekundy)/(1000)) % (60)) + ' s';
}
setInterval("zegar()", 1000);