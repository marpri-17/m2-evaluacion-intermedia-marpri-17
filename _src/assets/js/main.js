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
    clue.innerHTML = "Has ganado";
    btnReset.classList.remove("hidden");
    btnReset.classList.add("show");
  } else if (userNumber < randomNumber) {
    clue.innerHTML = "Más alto";
  } else if (userNumber > randomNumber) {
    clue.innerHTML = "Más bajo";
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
