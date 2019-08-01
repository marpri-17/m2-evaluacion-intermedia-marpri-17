"use strict";
// DOM Elements
const btnReset = document.querySelector(".js-btnReset");

const counter = document.querySelector(".js-score");

const btnCheck = document.querySelector(".js-check");
const inputNumber = document.querySelector(".js-input");
const clue = document.querySelector(".clue");
const price = document.querySelector(".js-price");
// Funciones
const getPrice = () => {
  fetch("https://cataas.com/cat/says/¡¡Soy tu premio  humano!!").then(
    response => (price.src = response.url)
  );
};

var setClue = hint => (clue.innerHTML = hint);
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const reloadPage = () => location.reload();
//Handler
const updatePage = function(ev) {
  ev.preventDefault();
  increaseAcc();
  checkNumber();
};
const checkNumber = () => {
  let userNumber = parseInt(inputNumber.value);
  if (userNumber === randomNumber) {
    setClue("¡¡FELICIDADES!! Has ganado,campeona");
    getPrice();
    price.classList.toggle("hidden");
    btnReset.classList.toggle("hidden");
  } else if (userNumber < randomNumber && userNumber > 0) {
    setClue("Demasiado bajo. Prueba una cifra más alta");
  } else if (userNumber > randomNumber && userNumber < 100) {
    setClue("Demasiado alto. Prueba una cifra más baja");
  } else if (userNumber < 0) {
    setClue("¡Este número es negativo!");
  } else if (userNumber > 100) {
    setClue("¡El juego es hasta 100!");
  } else {
    setClue("Introduce un número entero entre 0 y 100");
  }
};
//Get ramdon number when page load
const randomNumber = getRandomNumber(100);
console.log(randomNumber);
/* debugger; */

// Counter
let acc = 0;
const increaseAcc = () => {
  acc++;
  counter.innerHTML = acc;
  console.log(acc);
};

//Listeners

btnCheck.addEventListener("click", updatePage);

btnReset.addEventListener("click", reloadPage);
