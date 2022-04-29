var inputElement = document.getElementById("inputGuess");
var resultElement = document.getElementById("result");

var max = 10;
var numberToGuess = Math.floor(Math.random() * max);


var inputElement = document.getElementById("inputGuess");

function checkNumber() {
    var guessedNumber = parseInt(inputElement.value);
 if (guessedNumber == numberToGuess) {
    resultElement.innerHTML = 'Yeah you guesses right';
   return;
 } 
 if(guessedNumber > numberToGuess){
   resultElement.innerHTML = 'Your guess was too HIGH' ;
 }
 else {
    resultElement.innerHTML = 'Your guess was too LOW' ;
 }
}
function hello() {
    return 'Grias eich';
}
var greetings = hello();
var hello = document.getElementById("hello");
hello.innerHTML = greetings;


