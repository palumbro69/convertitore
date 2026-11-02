let saldo_yen=0;
let saldo_dol=0;
let saldo_ster=0;

let euro;

function converti(){
    euro= document.getElementById("insert").value;
    euro=parseFloat(euro);

    saldo_yen= euro*176.08;
    saldo_dol= euro*0.89;
    saldo_ster= euro*1.19;

    document.getElementById("Yen").innerHTML = saldo_yen.toFixed(2);
    document.getElementById("Dol").innerHTML = saldo_dol.toFixed(2);
    document.getElementById("Ste").innerHTML = saldo_ster.toFixed(2);
}
function dark(){
 let scuro;
    scuro= document.getElementById("sfondo");
    scuro.classList.toggle("dark")

}