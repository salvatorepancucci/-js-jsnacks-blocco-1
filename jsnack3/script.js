// Chiedi un numero di 4 cifre all'utente
const numeroQuattroCifre = prompt("Inserisci un numero di 4 cifre:");

// Calcola la somma di tutte le cifre che compongono il numero
let sommaCifre = 0;
for (let i = 0; i < numeroQuattroCifre.length; i++) {
    sommaCifre += parseInt(numeroQuattroCifre[i]);
}

// Visualizza la somma delle cifre
console.log(`La somma delle cifre di ${numeroQuattroCifre} è ${sommaCifre}.`);