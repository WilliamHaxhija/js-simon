//Creo un array di 5 numeri casuali
const randomNumbersArray = [];
let randomNumber;
while (randomNumbersArray.length < 5) {
    randomNumber = getRandomInt(100);
    if (!randomNumbersArray.includes(randomNumber)) {
        randomNumbersArray.push(randomNumber);
    }
}
//Li stampo in pagina
const numbers = document.getElementById('numbers');
numbers.innerHTML = randomNumbersArray;
const timeIsUp = document.getElementById('countdown');
let countdown = 31;
//Dopo 30 secondi scompaiono dalla pagina
const timerCountdown = setInterval(function () {
    countdown--;
    if (countdown === 0) {
        clearInterval(timerCountdown);
    }
    timeIsUp.innerHTML = countdown;
}, 1000);
const waitingTime1 = setTimeout(deleteNumbers, 31000, numbers);
//Creo un array all'interno del quale salvo i numeri dell'utente
const guessedNumbers = [];
const userNumberArray = [];
//Creo 5 prompt e l'utente deve inserire i 5 numeri dell'array random
const waitingTime2 = setTimeout(createPrompts, 32000, 5, userNumberArray);

console.log(randomNumbersArray);
console.log(userNumberArray);
console.log(guessedNumbers);
// FUNCTIONS

//Funzione che crea max numeri random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Funzione che cancella l'innerHTML di un elememnto del DOM
function deleteNumbers(domElement) {
    domElement.innerHTML = 'Te li ricordi?';
}


function createPrompts(iterations, array) {
    for (let i = 0; i < iterations; i++) {
        let userNumber = parseInt(prompt('Inserisci uno dei numeri'));
        array.push(userNumber);
    }
    for (let i = 0; i < randomNumbersArray.length; i++) {
        if (userNumberArray.includes(randomNumbersArray[i])) {
            guessedNumbers.push(randomNumbersArray[i]);
        }
    }
    numbers.innerHTML = 'Hai indovinato ' + guessedNumbers.length + ' numeri: ' + guessedNumbers;
}