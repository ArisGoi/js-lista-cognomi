// Array con i cognomi
var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli",];

// 1) Chiedi all'utente il suo cognome e lo inserisco in lista
var cognomeUtente = prompt('Scrivi il tuo cognome').toUpperCase();
listaCognomi.push(cognomeUtente);

// 2) Ordino alfabeticamente la lista
listaCognomi.sort();

// 3) ottengo la posizione del cognome inserito in lista e stampo tutte le info
console.log(listaCognomi);
console.log("Il tuo cognome: " + cognomeUtente);
console.log("Posizione del tuo cognome nella lista: " + (listaCognomi.indexOf(cognomeUtente) + 1))