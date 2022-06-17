
function getName(){
let date = new Date();
let name = prompt("Adınız: ");
let info = document.getElementById("name");
 info.innerHTML = ` Merhaba ${name}! Hoş geldin!`;
 let infoSaat = document.getElementById("saat");
 infoSaat.innerHTML = `${date.getHours()} : ${ date.getMinutes()} : ${date.getSeconds()} ${getDayName(date.getDay())}`;
}
function getDayName(dayIndex){
    var weekDays = new Array(7);
    weekDays = ["Pazar","Pazartesi","Sali","Çarşamba","Perşembe","Cuma","Cumartesi"];
    return weekDays[dayIndex];
}
