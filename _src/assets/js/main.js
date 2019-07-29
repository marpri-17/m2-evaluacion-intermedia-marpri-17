"use strict";
// DOM Elements
const btnReset = document.querySelector(".js-btnReset");

const counter = document.querySelector(".js-score");

const btnCheck = document.querySelector(".js-check");
const inputNumber = document.querySelector(".js-input");
const clue = document.querySelector(".clue");
// Funciones

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const reloadPage = () => location.reload();
//Handler
const checkNumber = ev => {
  ev.preventDefault();
  increaseAcc();
  let userNumber = parseInt(inputNumber.value);
  if (userNumber === randomNumber) {
    clue.innerHTML = "¡¡FELICIDADES!! Has ganado,campeona";
    btnReset.classList.remove("hidden");
    btnReset.classList.add("show");
  } else if (userNumber < randomNumber && userNumber > 0) {
    clue.innerHTML = "Demasiado bajo. Prueba una cifra más alta";
  } else if (userNumber > randomNumber && userNumber < 100) {
    clue.innerHTML = "Demasiado alto. Prueba una cifra más baja";
  } else if (userNumber < 0) {
    clue.innerHTML = "¡Este número es negativo!";
  } else if (userNumber > 100) {
    clue.innerHTML = "¡El juego es hasta 100!";
  } else {
    clue.innerHTML = "Introduce un número entero entre 0 y 100";
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

btnCheck.addEventListener("click", checkNumber);

btnReset.addEventListener("click", reloadPage);
