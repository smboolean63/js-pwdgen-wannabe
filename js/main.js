// Chiedi all’utente il suo nome
const firstname = prompt("Inserisci il tuo nome");
// poi chiedi il suo cognome,
const lastname = prompt("Inserisci il tuo cognome");
// poi chiedi il suo colore preferito
const color = prompt("Inserisci il tuo colore preferito");
// Infine scrivi sulla pagina nomecognomecolorepreferito21
// console.log(firstname+lastname+color+21);
// alert(`${firstname}${lastname}${color}21`);
document.getElementById("password").innerHTML = `${firstname}${lastname}${color}21`;