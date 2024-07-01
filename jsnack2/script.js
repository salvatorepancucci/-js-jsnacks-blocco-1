// Crea un array vuoto
const numeriDispari = [];

// Chiedi per 6 volte all'utente di inserire un numero
for (let i = 0; i < 6; i++) {
    const numero = parseInt(prompt(`Inserisci il numero ${i + 1} di 6:`));
    if (numero % 2 !== 0) {
        numeriDispari.push(numero);
    }
}