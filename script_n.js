//Serwis notebooków	
var serwis_n1 = "Wymiana płyty głównej";
document.getElementById('s_n1').innerHTML = serwis_n1;

var serwis_n2 = "Wymiana klawiatury";
document.getElementById('s_n2').innerHTML = serwis_n2;

var serwis_n3 = "Wymiana touchpada";
document.getElementById('s_n3').innerHTML = serwis_n3;

var serwis_n4 = "Wymiana obudowy";
document.getElementById('s_n4').innerHTML = serwis_n4;

var serwis_n5 = "Wymiana zawiasów";
document.getElementById('s_n5').innerHTML = serwis_n5;

var serwis_n6 = "Wymiana pamięci RAM";
document.getElementById('s_n6').innerHTML = serwis_n6;

var serwis_n7 = "Wymiana dysku twardego";
document.getElementById('s_n7').innerHTML = serwis_n7;

var serwis_n8 = "Wymiana matrycy";
document.getElementById('s_n8').innerHTML = serwis_n8;

var serwis_n9 = "Wymiana taśmy matrycy";
document.getElementById('s_n9').innerHTML = serwis_n9;

var serwis_n10 = "Wymiana karty WiFi";
document.getElementById('s_n10').innerHTML = serwis_n10;

var serwis_n11 = "Wymiana układu chłodzenia";
document.getElementById('s_n11').innerHTML = serwis_n11;

var serwis_n12 = "Wymiana procesora";
document.getElementById('s_n12').innerHTML = serwis_n12;

var serwis_n13 = "Wymiana napędu optycznego";
document.getElementById('s_n13').innerHTML = serwis_n13;

var serwis_n14 = "Wymiana baterii BIOSU";
document.getElementById('s_n14').innerHTML = serwis_n14;

function wylicz_serwis_n() {
    var sum_n = 0;
    var service_n = " ";
    var cash_n = 0;
    var message = 0;

    var numberOfService_n = 15;

    var discount_code = document.getElementById("d1").value;
    var message = document.getElementById("m1").value;

    for (i = 1; i < numberOfService_n; i++) {
        if (document.getElementById('ch_n' + i).checked) {
            sum_n += parseFloat(document.getElementById('ch_n' + i).value);
            service_n += "-" + document.getElementById('s_n' + i).innerHTML + ",&nbsp cena: " + document.getElementById('ch_n' + i).value + " zł, " + '</br>';
        } else if (document.getElementById('ch_n' + i).unchecked) {

            sum_n += parseFloat(document.getElementById('ch_n' + i).value);
        }
    }

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

    if (sum_n >= 100) {
        // cash = sum - discount;
        cash_n = sum_n - discount;
        var message = null;
        document.getElementById('m1').innerHTML = message;
    } else {
        cash_n = sum_n;
        var message = "(Rabat działa dla sumy usług minimum 100 zł)";
        document.getElementById('m1').innerHTML = message;
    }

    document.getElementById('sum_n').innerHTML = "Suma usług: " + sum_n + " zł";
    document.getElementById('cash_n').innerHTML = "Do zapłaty: " + cash_n + " zł";
}