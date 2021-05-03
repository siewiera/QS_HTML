var lista = new Array();
lista[0] = "song/song1.mp3";
lista[1] = "song/song2.mp3";
lista[2] = "song/song3.mp3";
lista[3] = "song/song4.mp3";
lista[4] = "song/song5.mp3";
lista[5] = "song/song6.mp3";
lista[6] = "song/song7.mp3";
lista[7] = "song/song8.mp3";
lista[8] = "song/song9.mp3";
lista[9] = "song/song10.mp3";
lista[10] = "song/song11.mp3";


var los = Math.ceil(Math.random() * lista.length) - 1;
var song = new Audio(lista[los]);

var x = false;

function muzyka_On() {
    song.play();
}

function muzyka_Off() {
    song.click();
}


function wylicz_serwis() {

    // //liczba serwisów 
    var numberOfService_c = 12;
    var numberOfService_n = 15;
    var numberOfService_s = 15;



    var discount_code = document.getElementById("d1").value;
    var message = document.getElementById("m1").value;

    var sum = 0;







    var cash = 0;




    var message = 0;





    if (discount_code == "Quick") {
        discount = 50;
        document.getElementById('discount').innerHTML = "Rabat: " + (-discount) + " zł";
    } else if (discount_code == "Serwis") {
        discount = 40;
        document.getElementById('discount').innerHTML = "Rabat: " + (-discount) + " zł";
    } else {
        discount_code = "Błędny kod";
        discount = 0;
        document.getElementById('discount').innerHTML = "Rabat: " + discount_code;
    }

    // sum = sum_k + sum_n + sum_s;







    // document.getElementById('service_k').innerHTML = "Serwis komputerów: " + '</br>' + service_k + '</br>';
    // document.getElementById('service_n').innerHTML = "Serwis notebooków: " + '</br>' + service_n + '</br>';
    // document.getElementById('service_s').innerHTML = "Serwis smartfonów: " + '</br>' + service_s + '</br>';
    // document.getElementById('sum_all').innerHTML = "Suma usług: " + sum + " zł";



    // document.getElementById('cash').innerHTML = "Do zapłaty: " + cash + " zł";







}