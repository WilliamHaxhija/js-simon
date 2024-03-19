//Creo un array di 5 numeri casuali
const randomNumbersArray = [];
let randomNumber;
while (randomNumbersArray.length < 5) {
    randomNumber = getRandomInt(200);
    randomNumbersArray.push(randomNumber);
}
console.log(randomNumbersArray);
//Li stampo in pagina
const numbers = document.getElementById('numbers').innerHTML = randomNumbersArray;
//Dopo 30 secondi scompaiono dalla pagina
//Creo 5 prompt e l'utente deve inserire i 5 numeri dell'array ricordandoseli
//Il programma quanti e quali numeri sono stati indovinati

// FUNCTIONS

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}