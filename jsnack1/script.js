// Array con i nomi degli invitati
const invitati = ["Nick Carraway", "Jay Gatsby", "Daisy Buchanan", "Tom Buchanan", "Jordan Baker", "Myrtle Wilson"];

// Chiedi all'utente il suo nome
const nomeUtente = prompt("Your name, please.");

// Controlla se il nome è nella lista degli invitati
let invitato = false;
for (let i = 0; i < invitati.length; i++) {
    if (invitati[i].toLowerCase() === nomeUtente.toLowerCase()) {
        invitato = true;
        break;
    }
}

// Comunica se può partecipare o no alla festa
if (invitato) {
    console.log(`${nomeUtente}, welcome to the Garden of Insanity.`);
} else {
    console.log(`${nomeUtente}, you're not rich enough. Cheers, mate!`);
}