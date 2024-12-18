// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// variabile risultato
let risultato;

// chiediamo km percorso e età del passeggero
let kilometri = parseInt(prompt("inserisci la lunghezza del percorso in km (in numeri)"))
let eta = parseInt(prompt("inserisci l'età del passeggero (in numeri)"))

console.log("la lungezza del percorso è: " + kilometri);
console.log("l'età del passeggero è: " + eta);

// calcolo prezzo intero biglietto
const prezzoIntero = kilometri * 0.21;

// applizazione sconti età
let prezzoFinale;

// SE minorenne 20% sconto
if (eta < 18) {
    prezzoFinale = prezzoIntero * 0.20;

// SE over 65 40% sconto
} else if (eta > 65) {
    prezzoFinale = prezzoIntero * 0.40;

// ALTRIMENTI prezzo intero
} else {
    prezzoFinale = prezzoIntero;
}


// prezzo finale 
// prezzo minorenne
if (eta < 18) {
    console.log("hai diritto al 20% di sconto, il prezzo finale è: " + prezzoFinale.toFixed(2) + " €")

// prezzo over 65
} else if (eta > 65) {
    console.log("hai diritto al 40% di sconto, il prezzo finale è: " + prezzoFinale.toFixed(2) + " €")

// prezzo intero
} else {
    console.log("il prezzo finale è: " + prezzoFinale.toFixed(2) + " €")
}
