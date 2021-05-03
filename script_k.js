//Serwis komputerów	
var serwis_k1 = "Wymiana płyty głównej";
document.getElementById('s_k1').innerHTML = serwis_k1;

var serwis_k2 = "Wymiana karty graficznej";
document.getElementById('s_k2').innerHTML = serwis_k2;

var serwis_k3 = "Wymiana zasilacza";
document.getElementById('s_k3').innerHTML = serwis_k3;

var serwis_k4 = "Wymiana procesora";
document.getElementById('s_k4').innerHTML = serwis_k4;

var serwis_k5 = "Wymiana pamięci RAM";
document.getElementById('s_k5').innerHTML = serwis_k5;

var serwis_k6 = "Wymiana karty rozszerzeń";
document.getElementById('s_k6').innerHTML = serwis_k6;

var serwis_k7 = "Wymiana dysku twardego";
document.getElementById('s_k7').innerHTML = serwis_k7;

var serwis_k8 = "Wymiana napędu optycznego";
document.getElementById('s_k8').innerHTML = serwis_k8;

var serwis_k9 = "Wymiana baterii BIOS";
document.getElementById('s_k9').innerHTML = serwis_k9;

var serwis_k10 = "Modernizacja układu chłodniczego";
document.getElementById('s_k10').innerHTML = serwis_k10;

var serwis_k11 = "Wymiana obudowy";
document.getElementById('s_k11').innerHTML = serwis_k11;

function wylicz_serwis_k() {
    var sum_k = 0;
    var service_k = " ";
    var cash_k = 0;
    var message = 0;
    var numberOfService_c = 12;

    var discount_code = document.getElementById("d1").value;
    var message = document.getElementById("m1").value;

    for (i = 1; i < numberOfService_c; i++) {
        if (document.getElementById('ch_k' + i).checked) {
            sum_k += parseFloat(document.getElementById('ch_k' + i).value);
            service_k += "-" + document.getElementById('s_k' + i).innerHTML + ",&nbsp cena: " + document.getElementById('ch_k' + i).value + " zł, " + '</br>';
        } else if (document.getElementById('ch_k' + i).unchecked) {
            sum_k += parseFloat(document.getElementById('ch_k' + i).value);
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


    if (sum_k >= 100) {
        // cash = sum - discount;
        cash_k = sum_k - discount;
        var message = null;
        document.getElementById('m1').innerHTML = message;
    } else {
        cash_k = sum_k;
        var message = "(Rabat działa dla sumy usług minimum 100 zł)";
        document.getElementById('m1').innerHTML = message;
    }

    document.getElementById('sum_k').innerHTML = "Suma usług: " + sum_k + " zł";
    document.getElementById('cash_k').innerHTML = "Do zapłaty: " + cash_k + " zł";
    document.getElementById('service_k').innerHTML = "Serwis komputerów: " + '</br>' + service_k + '</br>';

}