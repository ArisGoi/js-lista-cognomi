// 1. chiedi all’utente il cognome

// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

// 3. stampa la lista ordinata alfabeticamente

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova


// Array con i cognomi
var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli",];

// 1) Chiedi all'utente il suo cognome e lo inserisco in lista
listaCognomi.push(prompt('Scrivi il tuo cognome'));

// 2) Ordino alfabeticamente la lista
listaCognomi.sort();

console.log(listaCognomi)