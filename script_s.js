//Serwis smartfonów
var serwis_s1 = "Wymiana płyty głównej";
document.getElementById('s_s1').innerHTML = serwis_s1;

var serwis_s2 = "Wymiana wyświetlacza";
document.getElementById('s_s2').innerHTML = serwis_s2;

var serwis_s3 = "Wymiana baterii";
document.getElementById('s_s3').innerHTML = serwis_s3;

var serwis_s4 = "Wymiana aparatu";
document.getElementById('s_s4').innerHTML = serwis_s4;

var serwis_s5 = "Wymiana głośnika";
document.getElementById('s_s5').innerHTML = serwis_s5;

var serwis_s6 = "Wymiana czytnika lini papilarnych";
document.getElementById('s_s6').innerHTML = serwis_s6;

var serwis_s7 = "Wymiana przycisków";
document.getElementById('s_s7').innerHTML = serwis_s7;

var serwis_s8 = "Wymiana obudowy";
document.getElementById('s_s8').innerHTML = serwis_s8;

var serwis_s9 = "Czyszczenie po zalaniu";
document.getElementById('s_s9').innerHTML = serwis_s9;

var serwis_s10 = "Wymiana portu ładowania";
document.getElementById('s_s10').innerHTML = serwis_s10;

var serwis_s11 = "Wymiana taśm";
document.getElementById('s_s11').innerHTML = serwis_s11;

var serwis_s12 = "Wymiana mikrofonu";
document.getElementById('s_s12').innerHTML = serwis_s12;

var serwis_s13 = "Aktualizacja oprogramowania";
document.getElementById('s_s13').innerHTML = serwis_s13;

var serwis_s14 = "Formatowanie telefonu";
document.getElementById('s_s14').innerHTML = serwis_s14;

function wylicz_serwis_s() {
    var sum_s = 0;
    var service_s = " ";
    var cash_s = 0;
    var message = 0;
    var numberOfService_s = 15;

    var discount_code = document.getElementById("d1").value;
    var message = document.getElementById("m1").value;

    for (i = 1; i < numberOfService_s; i++) {
        if (document.getElementById('ch_s' + i).checked) {
            sum_s += parseFloat(document.getElementById('ch_s' + i).value);
            service_s += "-" + document.getElementById('s_s' + i).innerHTML + ",&nbsp cena: " + document.getElementById('ch_s' + i).value + " zł, " + '</br>';
        } else if (document.getElementById('ch_s' + i).unchecked) {

            sum_s += parseFloat(document.getElementById('ch_s' + i).value);
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

    if (sum_s >= 100) {
        // cash = sum - discount;
        cash_s = sum_s - discount;
        var message = null;
        document.getElementById('m1').innerHTML = message;
    } else {
        cash_s = sum_s;
        var message = "(Rabat działa dla sumy usług minimum 100 zł)";
        document.getElementById('m1').innerHTML = message;
    }

    document.getElementById('sum_s').innerHTML = "Suma usług: " + sum_s + " zł";
    document.getElementById('cash_s').innerHTML = "Do zapłaty: " + cash_s + " zł";
}